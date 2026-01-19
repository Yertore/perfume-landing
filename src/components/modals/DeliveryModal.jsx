import Modal from "./Modal";

export default function DeliveryModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      contentClassName="bg-white rounded-2xl w-[95%] max-w-2xl max-h-[85vh] p-6 relative shadow-xl overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl"
        aria-label="Close"
      >
        ×
      </button>

      <h2 className="text-2xl font-bold mb-6">Доставка и возврат</h2>

      <div className="space-y-6 text-sm text-gray-700">
        <div>
          <h3 className="font-semibold mb-1">🚚 Доставка</h3>
          <p>Доставка по Алматы и регионам Казахстана. Срок — от 1 до 3 рабочих дней.</p>
          <p className="mt-1">
            При заказе от <b>20 000 ₸</b> — доставка бесплатная.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">🔁 Возврат</h3>
          <p>
            Возврат возможен в течение <b>14 дней</b> с момента получения, при сохранении
            упаковки и товарного вида.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">📞 Контакты</h3>
          <p>
            Email: <b>bekir.zehay@gmail.com</b>
          </p>
          <p>
            WhatsApp: <b>+7 (707) 255-79-63</b>
          </p>
        </div>
      </div>
    </Modal>
  );
}
