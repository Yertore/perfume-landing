import Modal from "./Modal";

export default function RefundSuccessModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      contentClassName="bg-white rounded-2xl w-[90%] max-w-sm p-6 text-center shadow-xl"
    >
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
        onClick={onClose}
        className="w-full py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
      >
        Понятно
      </button>
    </Modal>
  );
}
