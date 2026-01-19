import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HitsSection from "./components/HitsSection";
import CatalogSection from "./components/CatalogSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import ProductModal from "./components/modals/ProductModal";
import OrderModal from "./components/modals/OrderModal";
import RefundModal from "./components/modals/RefundModal";
import PrivacyModal from "./components/modals/PrivacyModal";
import DeliveryModal from "./components/modals/DeliveryModal";
import OrderSuccessModal from "./components/modals/OrderSuccessModal";
import RefundSuccessModal from "./components/modals/RefundSuccessModal";

import { PRODUCTS as products } from "./data/products";
import kaspiQR from "./images/kaspi-qr.png";

const WHATSAPP_PHONE = "77072557963"; // без + и пробелов

export default function PerfumeLanding() {
  const [showAll, setShowAll] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  const [orderProduct, setOrderProduct] = useState(null);
  const [orderQty, setOrderQty] = useState(1);
  const [deliveryType, setDeliveryType] = useState("pickup");
  const [address, setAddress] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [comment, setComment] = useState("");
  const [agree, setAgree] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Card payment UX states
  const [cardPayLoading, setCardPayLoading] = useState(false);
  const [cardPayError, setCardPayError] = useState("");

  const [refundOpen, setRefundOpen] = useState(false);
  const [refundName, setRefundName] = useState("");
  const [refundPhone, setRefundPhone] = useState("");
  const [refundOrder, setRefundOrder] = useState("");
  const [refundReason, setRefundReason] = useState("");
  const [refundAgree, setRefundAgree] = useState(false);
  const [refundPhoneError, setRefundPhoneError] = useState("");
  const [refundSuccess, setRefundSuccess] = useState(false);

  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [deliveryOpen, setDeliveryOpen] = useState(false);

  const resetOrderForm = () => {
    setOrderProduct(null);
    setOrderQty(1);

    setDeliveryType("pickup");
    setAddress("");

    setCustomerName("");
    setCustomerPhone("");
    setComment("");

    setAgree(false);
    setPhoneError("");

    setCardPayLoading(false);
    setCardPayError("");
  };

  const resetRefundForm = () => {
    setRefundName("");
    setRefundPhone("");
    setRefundOrder("");
    setRefundReason("");

    setRefundAgree(false);
    setRefundPhoneError("");

    setRefundOpen(false);
  };

  const formatKZPhone = (value) => {
    let digits = value.replace(/\D/g, "");

    // убираем ведущие 8 → 7
    if (digits.startsWith("8")) digits = "7" + digits.slice(1);
    if (!digits.startsWith("7")) digits = "7" + digits;

    digits = digits.slice(0, 11); // максимум 11 цифр

    let result = "+7";

    if (digits.length > 1) result += " (" + digits.slice(1, 4);
    if (digits.length >= 4) result += ")";
    if (digits.length >= 5) result += " " + digits.slice(4, 7);
    if (digits.length >= 8) result += "-" + digits.slice(7, 9);
    if (digits.length >= 10) result += "-" + digits.slice(9, 11);

    return result;
  };

  const isValidKZPhone = (value) => /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value);

  const canOrderSubmit =
    !!agree && !!customerName && !!customerPhone && isValidKZPhone(customerPhone);

  const sendToWhatsApp = () => {
    if (!orderProduct) return;

    if (!canOrderSubmit) {
      setPhoneError("Заполните имя, телефон и подтвердите согласие");
      return;
    }

    const cleanPhone = customerPhone.replace(/\D/g, "");
    setPhoneError("");

    const phone = WHATSAPP_PHONE;

    const deliveryText =
      deliveryType === "pickup"
        ? "Самовывоз (Алматы)"
        : `Курьером\nАдрес: ${address || "не указан"}`;

    const message = `
Здравствуйте! 👋
Хочу оформить заказ:

Товар: ${orderProduct.name}
Цена: ${orderProduct.price} ₸
Количество: ${orderQty}

Имя: ${customerName}
Телефон: +${cleanPhone}

Доставка:
${deliveryText}
    `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    resetOrderForm();
    setOrderSuccess(true);
  };

  const sendRefundToWhatsApp = () => {
    if (!refundName || !refundReason) return;

    if (!isValidKZPhone(refundPhone)) {
      setRefundPhoneError("Введите корректный номер телефона Казахстана");
      return;
    }

    const cleanPhone = refundPhone.replace(/\D/g, "");
    setRefundPhoneError("");

    const message = `
🔁 Заявка на возврат

Имя: ${refundName}
Телефон: +${cleanPhone}
Номер заказа: ${refundOrder || "не указан"}

Причина возврата:
${refundReason}
    `;

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    resetRefundForm();
    setRefundSuccess(true);
  };

  const payByCard = async () => {
    if (!orderProduct) return;

    // UX: не даём уйти на оплату без обязательных полей
    if (!canOrderSubmit) {
      setCardPayError("Заполните имя, телефон и подтвердите согласие");
      return;
    }

    if (cardPayLoading) return;

    setCardPayError("");
    setCardPayLoading(true);

    try {
      const amount = orderProduct.price * orderQty;

      const externalDataObj = {
        items: [{ id: orderProduct.id, qty: orderQty, price: orderProduct.price }],
        name: customerName,
        phone: customerPhone,
        comment,
        deliveryType,
        address: deliveryType === "courier" ? address : null,
      };

      const r = await fetch("/api/capitalpay/order.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          title: `Заказ: ${orderProduct.name}`,
          description: `Оплата заказа на beautycosmetics.kz`,
          external_data: JSON.stringify(externalDataObj),
          external_order_id: Math.floor(100000000 + Math.random() * 900000000),
          external_client_id: null,
        }),
      });

      const contentType = r.headers.get("content-type") || "";
      const raw = await r.text();

      // Пытаемся распарсить JSON в любом случае
      let data = null;
      try {
        data = JSON.parse(raw);
      } catch {
        data = null;
      }

      // Если это не JSON — покажем кусок ответа
      if (!r.ok || !data?.ok) {
        const serverMsg =
          data?.error ||
          (raw ? raw.slice(0, 200) : "") ||
          `HTTP ${r.status} ${r.statusText}`;
        setCardPayError(`Ошибка оплаты: ${serverMsg}`);
        return;
      }

      if (!data.url) {
        setCardPayError("Ошибка оплаты: не получен URL для перехода");
        return;
      }

      // редирект на страницу оплаты
      window.location.href = data.url;
    } catch (e) {
      setCardPayError(`Ошибка оплаты: ${String(e)}`);
    } finally {
      setCardPayLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <Navbar />
      <HeroSection />

      <HitsSection products={products} onSelect={(product) => setModalItem(product)} />

      <CatalogSection
        products={products}
        showAll={showAll}
        onShowAll={() => setShowAll(true)}
        onSelectProduct={(p) => setModalItem(p)}
        onOrderProduct={(p) => {
          setOrderProduct(p);
          setOrderQty(1);
          setPhoneError("");
          setCardPayError("");
        }}
      />

      <AboutSection />
      <ContactSection onOpenPrivacy={() => setPrivacyOpen(true)} />

      <Footer
        onOpenRefund={() => setRefundOpen(true)}
        onOpenDelivery={() => setDeliveryOpen(true)}
        onOpenPrivacy={() => setPrivacyOpen(true)}
      />

      {/* MODALS */}
      <ProductModal
        item={modalItem}
        onClose={() => setModalItem(null)}
        onOrder={(item) => {
          setOrderProduct(item);
          setOrderQty(1);
          setModalItem(null);
          setPhoneError("");
          setCardPayError("");
        }}
      />

      <OrderModal
        open={!!orderProduct}
        onClose={() => setOrderProduct(null)}
        product={orderProduct}
        orderQty={orderQty}
        setOrderQty={setOrderQty}
        customerName={customerName}
        setCustomerName={setCustomerName}
        customerPhone={customerPhone}
        setCustomerPhone={setCustomerPhone}
        phoneError={phoneError}
        setPhoneError={setPhoneError}
        comment={comment}
        setComment={setComment}
        agree={agree}
        setAgree={setAgree}
        deliveryType={deliveryType}
        setDeliveryType={setDeliveryType}
        address={address}
        setAddress={setAddress}
        kaspiQR={kaspiQR}
        formatKZPhone={formatKZPhone}
        isValidKZPhone={isValidKZPhone}
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onSubmit={sendToWhatsApp}
        onPayByCard={payByCard}
        // optional UX props (если захочешь поддержать в OrderModal)
        cardPayLoading={cardPayLoading}
        cardPayError={cardPayError}
      />

      <RefundModal
        open={refundOpen}
        onClose={() => setRefundOpen(false)}
        refundName={refundName}
        setRefundName={setRefundName}
        refundPhone={refundPhone}
        setRefundPhone={setRefundPhone}
        refundOrder={refundOrder}
        setRefundOrder={setRefundOrder}
        refundReason={refundReason}
        setRefundReason={setRefundReason}
        refundAgree={refundAgree}
        setRefundAgree={setRefundAgree}
        refundPhoneError={refundPhoneError}
        setRefundPhoneError={setRefundPhoneError}
        formatKZPhone={formatKZPhone}
        isValidKZPhone={isValidKZPhone}
        onSubmit={sendRefundToWhatsApp}
        onOpenPrivacy={() => setPrivacyOpen(true)}
      />

      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <DeliveryModal open={deliveryOpen} onClose={() => setDeliveryOpen(false)} />

      <OrderSuccessModal open={orderSuccess} onClose={() => setOrderSuccess(false)} />
      <RefundSuccessModal open={refundSuccess} onClose={() => setRefundSuccess(false)} />
    </div>
  );
}
