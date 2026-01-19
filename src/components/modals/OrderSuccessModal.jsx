import Modal from "./Modal";

export default function OrderSuccessModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      contentClassName="bg-white rounded-2xl p-8 max-w-sm text-center shadow-xl"
    >
      <div className="text-4xl mb-3">✅</div>

      <h3 className="text-xl font-semibold mb-2">
        Заказ отправлен
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        Мы получили ваш заказ и свяжемся с вами в ближайшее время
      </p>

      <button
        onClick={onClose}
        className="px-6 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition"
      >
        Понятно
      </button>
    </Modal>
  );
}
