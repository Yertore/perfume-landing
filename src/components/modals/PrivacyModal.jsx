import Modal from "./Modal";

export default function PrivacyModal({ open, onClose }) {
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

      <h2 className="text-2xl font-bold mb-4">Политика конфиденциальности</h2>

      <div className="space-y-4 text-sm text-gray-700">
        <p>
          Настоящая Политика конфиденциальности определяет порядок обработки
          персональных данных пользователей сайта beautycosmetics.kz.
        </p>

        <p>Мы собираем следующие данные: имя, номер телефона и электронную почту.</p>

        <p>
          Данные используются исключительно для: обработки заказов, обратной связи и
          консультаций.
        </p>

        <p>
          Мы не передаем данные третьим лицам и принимаем все необходимые меры для их защиты.
        </p>

        <p className="font-medium">Контакты: bekir.zehay@gmail.com</p>
      </div>
    </Modal>
  );
}
