import Modal from "./Modal";

export default function OrderModal({
  open,
  onClose,

  product,

  orderQty,
  setOrderQty,

  customerName,
  setCustomerName,

  customerPhone,
  setCustomerPhone,

  phoneError,
  setPhoneError,

  comment,
  setComment,

  agree,
  setAgree,

  deliveryType,
  setDeliveryType,

  address,
  setAddress,

  kaspiQR,

  formatKZPhone,
  isValidKZPhone,

  onOpenPrivacy,
  onSubmit,
  onPayByCard,

  // optional UX props (если не передашь — просто не будут влиять)
  cardPayLoading = false,
  cardPayError = "",
}) {
  const total = product ? product.price * orderQty : 0;

  const canSubmit =
    !!agree && !!customerName && !!customerPhone && isValidKZPhone(customerPhone);

  return (
    <Modal
      open={open}
      onClose={onClose}
      contentClassName="bg-white rounded-2xl w-[95%] max-w-md shadow-xl overflow-hidden relative"
    >
      {/* ВНУТРЕННИЙ СКРОЛЛ */}
      <div className="max-h-[85vh] overflow-y-auto p-6 pb-40">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-xl"
          aria-label="Close"
        >
          ×
        </button>

        {/* Product */}
        <h3 className="text-lg font-semibold mb-2">{product?.name}</h3>

        {/* Количество */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-medium text-gray-700">Количество</span>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOrderQty((q) => Math.max(1, q - 1))}
              className="w-9 h-9 rounded-full border border-gray-300 text-lg font-semibold hover:bg-gray-100"
              disabled={cardPayLoading}
            >
              −
            </button>

            <span className="w-6 text-center font-semibold">{orderQty}</span>

            <button
              type="button"
              onClick={() => setOrderQty((q) => q + 1)}
              className="w-9 h-9 rounded-full border border-gray-300 text-lg font-semibold hover:bg-gray-100"
              disabled={cardPayLoading}
            >
              +
            </button>
          </div>
        </div>

        {/* Цена */}
        <div className="mt-4 space-y-1">
          <div className="text-sm text-gray-500">Цена за 1 шт: {product?.price} ₸</div>
          <div className="text-xl font-bold">Итого: {total} ₸</div>
        </div>

        {/* FORM */}
        <div className="space-y-4 mt-4">
          {/* Имя */}
          <input
            required
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Ваше имя"
            className="w-full border rounded-lg px-3 py-2"
            disabled={cardPayLoading}
          />

          {/* Телефон */}
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
            disabled={cardPayLoading}
          />
          {phoneError && <p className="text-xs text-red-600">{phoneError}</p>}

          {/* Комментарий */}
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Комментарий к заказу (необязательно)"
            className="w-full border rounded-lg px-3 py-2 h-20"
            disabled={cardPayLoading}
          />

          {/* Agreement */}
          <label className="text-xs text-gray-500 flex gap-2 items-start">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-0.5"
              disabled={cardPayLoading}
            />
            <span>
              Я соглашаюсь с{" "}
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="underline"
                disabled={cardPayLoading}
              >
                политикой конфиденциальности
              </button>
            </span>
          </label>

          {/* Доставка */}
          <div className="mt-4 space-y-3">
            <h4 className="font-semibold text-gray-900">Способ доставки</h4>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="delivery"
                checked={deliveryType === "pickup"}
                onChange={() => setDeliveryType("pickup")}
                disabled={cardPayLoading}
              />
              <span className="text-sm">Самовывоз (Алматы)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="delivery"
                checked={deliveryType === "courier"}
                onChange={() => setDeliveryType("courier")}
                disabled={cardPayLoading}
              />
              <span className="text-sm">Курьером</span>
            </label>

            {deliveryType === "courier" && (
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Введите адрес доставки"
                className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300"
                disabled={cardPayLoading}
              />
            )}
          </div>

          {/* Оплата (Kaspi QR как было) */}
          <div className="mt-4 text-center space-y-2">
            <p className="text-sm text-gray-600">
              Оплата через <b>Kaspi Pay</b>
            </p>

            <img src={kaspiQR} alt="Kaspi QR" className="mx-auto w-40 rounded-xl shadow" />

            <p className="text-xs text-gray-500">Отсканируйте QR в приложении Kaspi</p>
          </div>
        </div>
      </div>

      {/* FIXED BUTTONS */}
      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        {cardPayError ? (
          <p className="text-xs text-red-600 text-center px-2">{cardPayError}</p>
        ) : null}

        <button
          disabled={!canSubmit || cardPayLoading}
          onClick={onSubmit}
          className="
            w-full py-3 text-base rounded-full
            bg-gradient-to-br from-pink-300 to-amber-200
            text-gray-900 font-semibold shadow-xl
            hover:opacity-90 transition
            disabled:opacity-50
          "
        >
          Оформить заказ (WhatsApp)
        </button>

        <button
          disabled={!canSubmit || !onPayByCard || cardPayLoading}
          onClick={onPayByCard}
          className="
            w-full py-3 text-base rounded-full
            bg-gray-900 text-white font-semibold shadow-xl
            hover:bg-gray-800 transition
            disabled:opacity-50
          "
        >
          {cardPayLoading ? "Создаём оплату..." : "Оплатить картой"}
        </button>
      </div>
    </Modal>
  );
}
