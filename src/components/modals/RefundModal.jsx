import Modal from "./Modal";

export default function RefundModal({
  open,
  onClose,

  refundName,
  setRefundName,

  refundPhone,
  setRefundPhone,

  refundOrder,
  setRefundOrder,

  refundReason,
  setRefundReason,

  refundAgree,
  setRefundAgree,

  refundPhoneError,
  setRefundPhoneError,

  formatKZPhone,
  isValidKZPhone,

  onSubmit,
  onOpenPrivacy,
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      contentClassName="bg-white rounded-2xl w-[95%] max-w-md shadow-xl overflow-hidden relative"
    >
      {/* ВНУТРЕННИЙ СКРОЛЛ */}
      <div className="max-h-[85vh] overflow-y-auto p-6 pb-28">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-xl"
          aria-label="Close"
        >
          ×
        </button>

        <h3 className="text-lg font-semibold mb-2">Возврат товара</h3>

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
            <p className="text-xs text-red-600">{refundPhoneError}</p>
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
            <div className="font-semibold flex items-center gap-2">🔁 Возврат</div>
            <p>
              Возврат возможен в течение <b>14 дней</b> с момента получения, при сохранении
              упаковки и товарного вида.
            </p>
          </div>

          {/* AGREEMENT */}
          <label className="text-xs text-gray-500 flex gap-2">
            <input
              type="checkbox"
              checked={refundAgree}
              onChange={(e) => setRefundAgree(e.target.checked)}
            />
            Я соглашаюсь с{" "}
            <button
              type="button"
              className="underline"
              onClick={onOpenPrivacy}
            >
              политикой конфиденциальности
            </button>
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
          onClick={onSubmit}
          className="
            w-full py-3 text-base rounded-full
            bg-gray-900 text-white font-semibold shadow-xl
            hover:bg-gray-800 transition
            disabled:opacity-50 disabled:pointer-events-none
          "
        >
          Отправить заявку
        </button>
      </div>
    </Modal>
  );
}
