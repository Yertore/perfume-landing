export default function Footer({
  onOpenRefund,
  onOpenDelivery,
  onOpenPrivacy,
}) {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-gray-700">
          © {new Date().getFullYear()} BEAUTYCOSMETICS. Все права защищены.
        </div>

        <div className="flex flex-col md:flex-row gap-6 text-sm">
          {/* LEGAL */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenRefund}
              className="font-medium text-gray-800 hover:text-gray-900 transition"
            >
              Возврат товара
            </button>

            <button
              onClick={onOpenDelivery}
              className="hover:text-gray-900"
            >
              Доставка
            </button>

            <button
              onClick={onOpenPrivacy}
              className="hover:text-gray-900"
            >
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
  );
}
