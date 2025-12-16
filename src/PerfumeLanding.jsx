import React, { useState, useEffect } from "react";
import CHANEL_Allure from './images/chanel_allure.jpg';
import CHANEL_Chance_Eau_Tendre from './images/chanel_chance.jpg';
import CHANEL_Coco_Mademoiselle from './images/chanel_coco_mademoiselle.jpg';
import CHANEL_Coco_NOIR from './images/chanel_coco_noir.jpeg';
import Dior_Addict from './images/dior_addict.jpg';
import Dior_JAdore from './images/dior_jadore.jpg';
import Dior_Miss_Dior from './images/dior_miss_dior.jpg';
import Dior_Pure_Poison from './images/dior_pure_poison.jpg';
import Giorgio_Armani_Diamonds from './images/giorgio_armani_diamonds.jpg';
import Giorgio_Armani_Idole_DArmani from './images/giorgio_armani_idole.jpg';
import Giorgio_Armani_My_Way from './images/giorgio_armani_my_way.jpeg';
import Giorgio_Armani_Si_Passion_Eclat from './images/giorgio_armani_si_passion_eclat.jpg';
import GIVENCHY_Ange_Ou_Demon from './images/givenchy_ange_ou_demon.jpg';
import GIVENCHY_Irresistible from './images/givenchy_irresistible.jpg';
import GIVENCHY_LInterdit_Rouge from './images/givenchy_linterdit_rouge.jpg';
import GIVENCHY_LInterdit from './images/givenchy_linterdit.jpg';
import TOM_FORD_Velvet_Orchid from './images/tom_ford_velvet_orchid.jpg';
import Yves_Saint_Laurent_Black_Opium from './images/yves_saint_laurent_black_opium.jpg';
import Yves_Saint_Laurent_LIBRE_ABSOLU_PLATINE from './images/yves_saint_laurent_libre.jpg';
import Yves_Saint_Laurent_Mon_Paris from './images/yves_saint_laurent_mon_paris.jpeg';
import kaspiQR from "./images/kaspi-qr.png";

import C1 from './images/carousel/1.jpg';
import C2 from './images/carousel/2.jpg';
import C3 from './images/carousel/3.jpg';
import C4 from './images/carousel/4.jpg';
import C5 from './images/carousel/5.jpg';

const WHATSAPP_PHONE = "77072557963"; // без + и пробелов

// PerfumeLanding.jsx
// Single-file React component for a clean perfume/cosmetics landing page.
// Tailwind CSS required in the project (recommended).

function HeroCarousel() {
  const images = [C1, C2, C3, C4, C5];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex(i => (i + 1) % images.length);
        setFade(true);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex(i => (i - 1 + images.length) % images.length);
      setFade(true);
    }, 300);
  };

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIndex(i => (i + 1) % images.length);
      setFade(true);
    }, 300);
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center transition">
      <img
        src={images[index]}
        className={`h-full w-full object-cover rounded-2xl transform transition-all duration-700 ${fade ? 'opacity-100 scale-110 blur-0' : 'opacity-0 scale-95 blur-sm'}`}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* glossy highlight */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-white/5 to-transparent"></div>

        {/* soft glow */}
        <div className="absolute inset-0 blur-3xl bg-white/10"></div>
      </div>

      {/* Buttons */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md hover:bg-white shadow-xl w-10 h-10 rounded-full flex items-center justify-center transition">
        <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7' /></svg>
      </button>

      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md hover:bg-white shadow-xl w-10 h-10 rounded-full flex items-center justify-center transition">
        <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' /></svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === index ? 'bg-white scale-125 shadow' : 'bg-white/40'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default function PerfumeLanding() {
  const [showAll, setShowAll] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    if (modalItem !== null || orderProduct || refundOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalItem, orderProduct, refundOpen]);


  const products = [
    { id: 1, img: CHANEL_Allure, name: "CHANEL Allure", price: 40000, top: false },
    { id: 2, img: CHANEL_Chance_Eau_Tendre, name: "CHANEL Chance Eau Tendre", price: 25400, top: false },
    { id: 3, img: CHANEL_Coco_Mademoiselle, name: "CHANEL Coco Mademoiselle", price: 32100, top: false },
    { id: 4, img: CHANEL_Coco_NOIR, name: "CHANEL Coco NOIR", price: 45000, top: false },
    { id: 5, img: Dior_Addict, name: "Dior Addict", price: 18900, top: false },
    { id: 6, img: Dior_JAdore, name: "Dior J'Adore", price: 29900, top: true },
    { id: 7, img: Dior_Miss_Dior, name: "Dior Miss Dior", price: 22500, top: false },
    { id: 8, img: Dior_Pure_Poison, name: "Dior Pure Poison", price: 17300, top: true },
    { id: 9, img: Giorgio_Armani_Diamonds, name: "Giorgio Armani Diamonds", price: 14700, top: false },
    { id: 10, img: Giorgio_Armani_Idole_DArmani, name: "Giorgio Armani Idole D'Armani", price: 11200, top: false },
    { id: 11, img: Giorgio_Armani_My_Way, name: "Giorgio Armani My Way", price: 24600, top: true },
    { id: 12, img: Giorgio_Armani_Si_Passion_Eclat, name: "Giorgio Armani Si Passion Eclat", price: 19800, top: false },
    { id: 13, img: GIVENCHY_Ange_Ou_Demon, name: "GIVENCHY Ange Ou Demon", price: 16400, top: false },
    { id: 14, img: GIVENCHY_Irresistible, name: "GIVENCHY Irresistible", price: 21000, top: false },
    { id: 15, img: GIVENCHY_LInterdit_Rouge, name: "GIVENCHY L'Interdit Rouge", price: 28700, top: false },
    { id: 16, img: GIVENCHY_LInterdit, name: "GIVENCHY L'Interdit", price: 23300, top: false },
    { id: 17, img: TOM_FORD_Velvet_Orchid, name: "TOM FORD Velvet Orchid", price: 55500, top: false },
    { id: 18, img: Yves_Saint_Laurent_Black_Opium, name: "Yves Saint Laurent Black Opium", price: 31800, top: false },
    { id: 19, img: Yves_Saint_Laurent_LIBRE_ABSOLU_PLATINE, name: "Yves Saint Laurent LIBRE ABSOLU PLATINE", price: 38900, top: false },
    { id: 20, img: Yves_Saint_Laurent_Mon_Paris, name: "Yves Saint Laurent Mon Paris", price: 27100, top: false }
  ];

  const sendToWhatsApp = () => {
    if (!orderProduct) return;

    if (!validateKZPhone(customerPhone)) {
      setPhoneError("Введите корректный номер телефона Казахстана");
      return;
    }

    const cleanPhone = customerPhone.replace(/\D/g, "");

    setPhoneError(""); // очистка ошибки

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
    setOrderProduct(null);
    setOrderSuccess(true);
  };

  const sendRefundToWhatsApp = () => {
    if (!refundName || !refundReason) return;

    if (!validateKZPhone(refundPhone)) {
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

    // очистка
    setRefundName("");
    setRefundPhone("");
    setRefundOrder("");
    setRefundReason("");
    setRefundOpen(false);

    setRefundSuccess(true);
  };


  const validateKZPhone = (phone) => {
    const cleaned = phone.replace(/\D/g, ""); // убираем всё кроме цифр

    // допустимые варианты:
    // 77072557963
    // 87072557963
    // 7072557963
    if (cleaned.length === 10 && cleaned.startsWith("7")) return true;
    if (cleaned.length === 11 && (cleaned.startsWith("7") || cleaned.startsWith("8"))) return true;

    return false;
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

  const isValidKZPhone = (value) => {
    return /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value);
  };
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* NAV */}
      <header className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between">

          {/* MOBILE MENU STATE */}
          {/** add this: */}
          {/** 👇 переменная меню */}
          {/* Эта строка должна быть в начале компонента:
              const [menuOpen, setMenuOpen] = useState(false);
          */}

          {/* LEFT: LOGO + TITLE */}
          <a href="#">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-300 to-amber-200 flex items-center justify-center shadow">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none">
                  <path d="M12 3v18" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M3 12h18" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>

              <div>
                <h1 className="text-base sm:text-lg font-semibold">BEAUTYCOSMETICS | парфюмерия</h1>
                <p className="text-xs text-gray-500 -mt-1">Красивая косметика и благовония</p>
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 text-base lg:text-sm text-gray-700">
            <a href="#catalog" className="hover:text-gray-900">Каталог</a>
            <a href="#about" className="hover:text-gray-900">О бренде</a>
            <a href="#contact" className="hover:text-gray-900">Контакты</a>
          </nav>

          {/* DESKTOP BUTTON */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm px-4 py-2 rounded-full border border-gray-200 hover:shadow">
              Связаться
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(true)}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      {menuOpen && (
        <div className="fixed top-0 left-0 right-0 z-[99999] bg-white shadow-md rounded-b-2xl">

          {/* MENU WRAPPER */}
          <div className="p-4 flex flex-col gap-2 animate-menu">

            {/* Close button */}
            <button
              className="ml-auto p-2 rounded-full hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Menu links */}
            <a
              href="#catalog"
              className="text-base font-medium py-2 px-3 hover:bg-gray-100 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Каталог
            </a>

            <a
              href="#about"
              className="text-base font-medium py-2 px-3 hover:bg-gray-100 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              О бренде
            </a>

            <a
              href="#contact"
              className="text-base font-medium py-2 px-3 hover:bg-gray-100 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Контакты
            </a>

            {/* Button same style as links */}
            <button
              className="py-2 px-3 rounded-lg font-medium text-base 
             bg-gray-900 text-white hover:bg-gray-800 transition"
              onClick={() => setMenuOpen(false)}
            >
              Связаться
            </button>
          </div>
        </div>
      )}


      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">Новая коллекция 2025</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">Соблазнительные ароматы. <br className="hidden sm:inline" />Изысканная косметика.</h2>
            <p className="text-gray-600 max-w-xl">Коллекция, создающая настроение — ноты розы, сандала и янтаря. Упаковка премиум-класса, ручная отделка и утончённый дизайн.</p>
            <div className="flex items-center gap-4">
              <a href="#catalog" className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-full font-medium shadow hover:opacity-95">Посмотреть каталог</a>
              <a href="#about" className="text-sm text-gray-700 hover:underline">Узнать больше</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-white shadow flex items-center justify-center">✨</div>
                <div>
                  <div className="text-sm sm:text-base font-semibold">Бесплатная доставка</div>
                  <div className="text-xs sm:text-sm text-gray-500">от 20 000 тг</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-white shadow flex items-center justify-center">🕊️</div>
                <div>
                  <div className="text-sm sm:text-base font-semibold">Натуральные ноты</div>
                  <div className="text-xs sm:text-sm text-gray-500">Без агрессивной химии</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-lg relative">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* HITS */}
      <section className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 py-24">
        <h3
          className="
          text-2xl        /* mobile */
          sm:text-3xl     /* tablets 640+ */
          md:text-4xl     /* desktop 768+ */
          lg:text-5xl     /* large screens 1024+ */
          font-extrabold text-center mb-14 tracking-tight
        "
        >
          Хиты продаж
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            {
              name: products[0].name,
              img: products[0].img
            },
            {
              name: products[1].name,
              img: products[1].img
            },
            {
              name: products[2].name,
              img: products[2].img
            }
          ].map((item, i) => (
            <div
              key={i}
              onClick={() => setModalItem(i)}
              className="cursor-pointer group relative rounded-3xl overflow-hidden shadow-lg flex items-center justify-center"
            >
              <img
                src={item.img}
                className="
            w-auto 
            h-56        /* mobile */
            sm:h-64     /* tablets 640+ */
            md:h-72     /* 768+ */
            lg:h-80     /* 1024+ */
            object-contain 
            transition-all duration-700 group-hover:scale-110
          "
              />

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white flex items-end justify-center">
                <h4 className=" text-lg        /* mobile */
                          sm:text-xl     /* tablets 640+ */
                          md:text-2xl    /* 768+ */
                          lg:text-3xl    /* 1024+ */
                          font-bold tracking-tight drop-shadow-lg" >
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATALOG / PRODUCTS */}
      <section id="catalog" className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 py-20">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold">Коллекция</h3>
          <p className="text-gray-600">Выберите аромат для любого настроения</p>
        </div>

        <div className=" grid grid-cols-2 
                        sm:grid-cols-3 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        xl:grid-cols-5 
                        gap-8
                      ">
          {Array.from({ length: 20 }).slice(0, showAll ? 20 : 10).map((_, i) => (
            <article
              key={i}
              onClick={() => setModalItem(i)}
              className="
                bg-white rounded-2xl 
                p-3 sm:p-4 md:p-4 
                shadow hover:shadow-lg transition-shadow cursor-pointer 
                flex flex-col
              "
            >
              {/* IMAGE */}
              <div className="
                  w-full 
                  h-32 sm:h-36 md:h-40 lg:h-48 
                  rounded-xl overflow-hidden 
                  mb-3 sm:mb-4 
                  bg-white flex items-center justify-center
              ">
                <img
                  alt={`product-${i}`}
                  src={products[i].img}
                  className="
                    max-h-32 sm:max-h-36 md:max-h-40 lg:max-h-48 
                    w-auto object-contain
                  "
                />
              </div>

              {/* TITLE */}
              <h4 className="font-semibold text-xs sm:text-sm md:text-base text-center">
                {products[i].name}
              </h4>

              {/* SUBTEXT */}
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 text-center">
                50ml · Eau de Parfum
              </p>

              {/* PUSH CONTENT DOWN */}
              <div className="flex-1"></div>

              {/* PRICE + BUTTON */}
              <div className="
                mt-3 sm:mt-4 
                flex flex-col sm:flex-row md:flex-col lg:flex-row 
                items-center justify-between 
                gap-2
              ">
                <div className="text-sm sm:text-base md:text-lg font-bold text-center w-full sm:w-auto">
                  {products[i].price} ₸
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOrderProduct(products[i]);
                  }}
                  className="
                            text-[10px] sm:text-xs md:text-sm 
                            font-semibold 
                            px-3 py-2 
                            w-full sm:w-auto text-center 
                            rounded-full 
                            bg-gradient-to-br from-pink-300 to-amber-200 text-gray-900 
                            shadow hover:opacity-90 transition
                          "
                >
                  Заказать
                </button>

              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {!showAll && (
            <button onClick={() => setShowAll(true)} className="px-6 py-2 bg-gray-900 text-white rounded-full shadow hover:opacity-90">
              Показать все
            </button>
          )}
        </div>


        {modalItem !== null && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl w-[95%] max-w-xl shadow-xl overflow-hidden relative animate-fadeIn">

              {/* SCROLLABLE CONTENT */}
              <div className="max-h-[85vh] overflow-y-auto p-6 pb-28">

                {/* CLOSE */}
                <button
                  onClick={() => setModalItem(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-xl"
                >
                  ×
                </button>

                {/* IMAGE */}
                <img
                  src={products[modalItem].img}
                  className="w-full max-h-[360px] object-contain rounded-xl mb-6"
                />

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-2">
                  {products[modalItem].name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm mb-4">
                  Премиальный аромат с нотами бергамота, розы и амбры.
                  Долгое раскрытие, стойкость 10–12 часов.
                  Идеально подходит для особых случаев.
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
                    Топ ноты: Бергамот
                  </span>
                  <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-medium">
                    Сердце: Роза
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                    База: Амбра
                  </span>
                </div>

                {/* PRICE */}
                <div className="text-2xl font-bold mb-6">
                  Цена: {products[modalItem].price} ₸
                </div>

              </div>

              {/* FIXED CTA */}
              <div className="absolute bottom-4 left-4 right-4">
                <button
                  onClick={() => {
                    setOrderProduct(products[modalItem]);
                    setOrderQty(1);
                    setModalItem(null);
                  }}
                  className="
                    w-full
                    py-3
                    text-base sm:text-lg
                    rounded-full
                    bg-gradient-to-br from-pink-300 to-amber-200
                    text-gray-900
                    font-semibold
                    shadow-xl
                    hover:opacity-90
                    transition
                  "
                >
                  Оформить заказ
                </button>
              </div>

            </div>
          </div>
        )}


        {orderProduct && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl w-[95%] max-w-md shadow-xl overflow-hidden relative">
                {/* ВНУТРЕННИЙ СКРОЛЛ */}
                <div className="max-h-[85vh] overflow-y-auto p-6 pb-28">
                  {/* Close */}
                  <button
                    onClick={() => setOrderProduct(null)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-xl"
                  >
                    ×
                  </button>

                  {/* Product */}
                  <h3 className="text-lg font-semibold mb-2">
                    {orderProduct.name}
                  </h3>
                  {/* КОЛИЧЕСТВО ← ВОТ СЮДА */}
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm font-medium text-gray-700">
                      Количество
                    </span>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setOrderQty(q => Math.max(1, q - 1))}
                        className="w-9 h-9 rounded-full border border-gray-300 text-lg font-semibold hover:bg-gray-100"
                      >
                        −
                      </button>

                      <span className="w-6 text-center font-semibold">
                        {orderQty}
                      </span>

                      <button
                        onClick={() => setOrderQty(q => q + 1)}
                        className="w-9 h-9 rounded-full border border-gray-300 text-lg font-semibold hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* ЦЕНА */}
                  <div className="mt-4 space-y-1">
                    <div className="text-sm text-gray-500">
                      Цена за 1 шт: {orderProduct.price} ₸
                    </div>

                    <div className="text-xl font-bold">
                      Итого: {orderProduct.price * orderQty} ₸
                    </div>
                  </div>

                  {/* FORM */}
                  <div className="space-y-4">

                    {/* ИМЯ */}
                    <input
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Ваше имя"
                      className="w-full border rounded-lg px-3 py-2"
                    />

                    {/* ТЕЛЕФОН */}
                    <input
                      required
                      value={customerPhone}
                      onChange={(e) => {

                        const formatted = formatKZPhone(e.target.value);
                        setCustomerPhone(formatted);

                        if (!isValidKZPhone(formatted)) {
                          setPhoneError("Введите корректный номер телефона");
                        } else {
                          setPhoneError("");
                        }
                      }}
                      placeholder="+7 (700) 000-00-00"
                      className="w-full border rounded-lg px-3 py-2"
                    />
                    {phoneError && (
                      <p className="text-xs text-red-600">
                        {phoneError}
                      </p>
                    )}

                    {/* КОММЕНТАРИЙ */}
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Комментарий к заказу (необязательно)"
                      className="w-full border rounded-lg px-3 py-2 h-20"
                    />

                    {/* AGREEMENT */}
                    <label className="text-xs text-gray-500 flex gap-2">
                      <input
                        type="checkbox"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                      />
                      Я соглашаюсь с
                      <a href="#privacy" className="underline">
                        политикой конфиденциальности
                      </a>
                    </label>

                    {/* ДОСТАВКА */}
                    <div className="mt-4 space-y-3">
                      <h4 className="font-semibold text-gray-900">
                        Способ доставки
                      </h4>

                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="delivery"
                          checked={deliveryType === "pickup"}
                          onChange={() => setDeliveryType("pickup")}
                        />
                        <span className="text-sm">Самовывоз (Алматы)</span>
                      </label>

                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="delivery"
                          checked={deliveryType === "courier"}
                          onChange={() => setDeliveryType("courier")}
                        />
                        <span className="text-sm">Курьером</span>
                      </label>

                      {deliveryType === "courier" && (
                        <input
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Введите адрес доставки"
                          className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300"
                        />
                      )}
                    </div>

                    <div className="mt-4 text-center space-y-2">
                      <p className="text-sm text-gray-600">
                        Оплата через <b>Kaspi Pay</b>
                      </p>

                      <img
                        src={kaspiQR}
                        alt="Kaspi QR"
                        className="mx-auto w-40 rounded-xl shadow"
                      />

                      <p className="text-xs text-gray-500">
                        Отсканируйте QR в приложении Kaspi
                      </p>
                    </div>
                  </div>
                </div>
              {/* FIXED BUTTON */}
              <div className="absolute bottom-4 left-4 right-4">
                <button
                  disabled={
                    !agree ||
                    !customerName ||
                    !customerPhone ||
                    !isValidKZPhone(customerPhone)
                  }
                  onClick={sendToWhatsApp}
                  className="
                            w-full
                            py-3
                            text-base
                            rounded-full
                            bg-gradient-to-br from-pink-300 to-amber-200
                            text-gray-900
                            font-semibold
                            shadow-xl
                            hover:opacity-90
                            transition
                            disabled:opacity-50
                          "
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        )}

        {refundOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl w-[95%] max-w-md shadow-xl overflow-hidden relative">

              {/* ВНУТРЕННИЙ СКРОЛЛ */}
              <div className="max-h-[85vh] overflow-y-auto p-6 pb-28">

                {/* CLOSE */}
                <button
                  onClick={() => setRefundOpen(false)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-xl"
                >
                  ×
                </button>

                <h3 className="text-lg font-semibold mb-2">
                  Возврат товара
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  Заполните форму — мы свяжемся с вами для оформления возврата
                </p>

                <div className="space-y-4">

                  {/* ИМЯ */}
                  <input
                    value={refundName}
                    onChange={(e) => setRefundName(e.target.value)}
                    placeholder="Ваше имя"
                    className="w-full border rounded-lg px-3 py-2"
                  />

                  {/* ТЕЛЕФОН */}
                  <input
                    value={refundPhone}
                    onChange={(e) => {
                      const formatted = formatKZPhone(e.target.value);
                      setRefundPhone(formatted);

                      if (!isValidKZPhone(formatted)) {
                        setRefundPhoneError("Введите корректный номер телефона");
                      } else {
                        setRefundPhoneError("");
                      }
                    }}
                    placeholder="+7 (700) 000-00-00"
                    className="w-full border rounded-lg px-3 py-2"
                  />
                  {refundPhoneError && (
                    <p className="text-xs text-red-600">
                      {refundPhoneError}
                    </p>
                  )}

                  {/* НОМЕР ЗАКАЗА */}
                  <input
                    value={refundOrder}
                    onChange={(e) => setRefundOrder(e.target.value)}
                    placeholder="Номер заказа (необязательно)"
                    className="w-full border rounded-lg px-3 py-2"
                  />

                  {/* ПРИЧИНА */}
                  <textarea
                    value={refundReason}
                    onChange={(e) => setRefundReason(e.target.value)}
                    placeholder="Причина возврата"
                    className="w-full border rounded-lg px-3 py-2 h-28"
                  />

                  {/* INFO NOTE */}
                  <div className="mt-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-gray-800 space-y-2">
                    <div className="font-semibold flex items-center gap-2">
                      🔁 Возврат
                    </div>

                    <p>
                      Возврат возможен в течение <b>14 дней</b> с момента получения,
                      при сохранении упаковки и товарного вида.
                    </p>
                  </div>

                  {/* AGREEMENT */}
                  <label className="text-xs text-gray-500 flex gap-2">
                    <input
                      type="checkbox"
                      checked={refundAgree}
                      onChange={(e) => setRefundAgree(e.target.checked)}
                    />
                    Я соглашаюсь с
                    <a href="#privacy" className="underline">
                      политикой конфиденциальности
                    </a>
                  </label>

                </div>
              </div>

              {/* FIXED BUTTON */}
              <div className="absolute bottom-4 left-4 right-4">
                <button
                  disabled={
                    !refundAgree ||
                    !refundName ||
                    !refundReason ||
                    !isValidKZPhone(refundPhone)
                  }
                  onClick={sendRefundToWhatsApp}
                  className="
                    w-full
                    py-3
                    text-base
                    rounded-full
                    bg-gray-900
                    text-white
                    font-semibold
                    shadow-xl
                    hover:bg-gray-800
                    transition
                    disabled:opacity-50
                    disabled:pointer-events-none
                  "
                >
                  Отправить заявку
                </button>
              </div>

            </div>
          </div>
        )}

        {privacyOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl w-[95%] max-w-2xl max-h-[85vh] p-6 relative shadow-xl overflow-y-auto">

              <button
                onClick={() => setPrivacyOpen(false)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl"
              >
                ×
              </button>

              <h2 className="text-2xl font-bold mb-4">
                Политика конфиденциальности
              </h2>

              <div className="space-y-4 text-sm text-gray-700">
                <p>
                  Настоящая Политика конфиденциальности определяет порядок обработки
                  персональных данных пользователей сайта beautycosmetics.kz.
                </p>

                <p>
                  Мы собираем следующие данные:
                  имя, номер телефона и электронную почту.
                </p>

                <p>
                  Данные используются исключительно для:
                  обработки заказов, обратной связи и консультаций.
                </p>

                <p>
                  Мы не передаем данные третьим лицам и принимаем
                  все необходимые меры для их защиты.
                </p>

                <p className="font-medium">
                  Контакты: bekir.zehay@gmail.com
                </p>
              </div>
            </div>
          </div>
        )}

        {deliveryOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl w-[95%] max-w-2xl max-h-[85vh] p-6 relative shadow-xl overflow-y-auto">

              <button
                onClick={() => setDeliveryOpen(false)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl"
              >
                ×
              </button>

              <h2 className="text-2xl font-bold mb-6">
                Доставка и возврат
              </h2>

              <div className="space-y-6 text-sm text-gray-700">

                <div>
                  <h3 className="font-semibold mb-1">🚚 Доставка</h3>
                  <p>
                    Доставка по Алматы и регионам Казахстана.
                    Срок — от 1 до 3 рабочих дней.
                  </p>
                  <p className="mt-1">
                    При заказе от <b>20 000 ₸</b> — доставка бесплатная.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">🔁 Возврат</h3>
                  <p>
                    Возврат возможен в течение <b>14 дней</b> с момента получения,
                    при сохранении упаковки и товарного вида.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">📞 Контакты</h3>
                  <p>Email: <b>bekir.zehay@gmail.com</b></p>
                  <p>WhatsApp: <b>+7 (707) 255-79-63</b></p>
                </div>

              </div>
            </div>
          </div>
        )}


      </section>

      {/* ABOUT */}
      <section id="about" className="bg-amber-50 py-16">
        <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold">О бренде</h3>
            <p className="text-gray-700 mt-4">Мы создаём ароматы с вниманием к деталям: натуральные экстракты, глубина звучания, элегантная упаковка. Наш подход — баланс традиций и инноваций.</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center">🌿</div>
                <div>
                  <div className="font-semibold">Натуральные ингредиенты</div>
                  <div className="text-xs text-gray-500">Экотесты и контроль качества</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center">🏷️</div>
                <div>
                  <div className="font-semibold">Премиум упаковка</div>
                  <div className="text-xs text-gray-500">Идеально для подарка</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow w-full h-72 md:h-80 lg:h-96">
            <img alt="about" src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* LEFT */}
          <div>
            <h3 className="text-xl font-bold">Свяжитесь с нами</h3>
            <p className="text-gray-300 mt-2 text-sm">
              Оставьте заявку — мы ответим в течение рабочего дня.
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 8l7-5 7 5v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <span className="text-gray-200">bekir.zehay@gmail.com</span>
              </div>

              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 5h12M9 3v2m6 4l4 4-4 4" />
                </svg>
                <span className="text-gray-200">
                  +7 (707) 255-79-63
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="bg-white/5 rounded-xl p-5 space-y-3">

            <input
              className="w-full rounded-md bg-white/10 border border-white/10 
              placeholder-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Ваше имя"
            />

            <input
              className="w-full rounded-md bg-white/10 border border-white/10 
              placeholder-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="+7 (700) 000-00-00 или email"
            />

            <textarea
              className="w-full rounded-md bg-white/10 border border-white/10 
              placeholder-gray-300 px-3 py-2 h-20 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Сообщение"
            />

            <button
              type="button"
              className="mt-2 px-5 py-2 rounded-full bg-amber-400 text-gray-900 text-sm font-semibold hover:opacity-90"
            >
              Отправить
            </button>

            <p className="text-[11px] text-gray-400 mt-2">
              Нажимая кнопку «Отправить», вы соглашаетесь с
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="underline ml-1"
              >
                политикой конфиденциальности
              </button>
            </p>
          </form>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-white py-8">
        <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-700">© {new Date().getFullYear()} BEAUTYCOSMETICS. Все права защищены.</div>

          <div className="flex flex-col md:flex-row gap-6 text-sm">

            {/* LEGAL */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setRefundOpen(true)}
                className="font-medium text-gray-800 hover:text-gray-900 transition"
              >
                Возврат товара
              </button>

              <button onClick={() => setDeliveryOpen(true)} className="hover:text-gray-900">
                Доставка
              </button>

              <button onClick={() => setPrivacyOpen(true)} className="hover:text-gray-900">
                Политика конфиденциальности
              </button>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center gap-4 text-gray-500">
              <a href="#" className="hover:text-gray-900">Instagram</a>
              <a href="#" className="hover:text-gray-900">Telegram</a>
              <a href="#" className="hover:text-gray-900">WhatsApp</a>
            </div>

          </div>
        </div>
      </footer>
      {orderSuccess && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm text-center shadow-xl">
            <div className="text-4xl mb-3">✅</div>

            <h3 className="text-xl font-semibold mb-2">
              Заказ отправлен
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Мы получили ваш заказ и свяжемся с вами в ближайшее время
            </p>

            <button
              onClick={() => setOrderSuccess(false)}
              className="px-6 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800"
            >
              Понятно
            </button>
          </div>
        </div>
      )}

      {refundSuccess && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[90%] max-w-sm p-6 text-center shadow-xl">

            {/* ICON */}
            <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
              ✅
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Заявка на возврат отправлена
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              Мы получили вашу заявку и свяжемся с вами в ближайшее время
            </p>

            <button
              onClick={() => setRefundSuccess(false)}
              className="w-full py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
            >
              Понятно
            </button>
          </div>
        </div>
      )}
    </div>
  );
}