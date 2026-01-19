import Modal from "./Modal";

export default function ProductModal({ item, onClose, onOrder }) {
  const open = !!item?.img;

  return (
    <Modal
      open={open}
      onClose={onClose}
      contentClassName="bg-white rounded-2xl w-[95%] max-w-xl shadow-xl overflow-hidden relative animate-fadeIn"
    >
      {/* SCROLLABLE CONTENT */}
      <div className="max-h-[85vh] overflow-y-auto p-6 pb-28">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-xl"
          aria-label="Close"
        >
          ×
        </button>

        {/* IMAGE */}
        <img
          src={item?.img}
          alt={item?.name || "product"}
          className="w-full max-h-[360px] object-contain rounded-xl mb-6"
        />

        {/* TITLE */}
        <h3 className="text-xl font-semibold mb-2">{item?.name}</h3>

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
        <div className="text-2xl font-bold mb-6">Цена: {item?.price} ₸</div>
      </div>

      {/* FIXED CTA */}
      <div className="absolute bottom-4 left-4 right-4">
        <button
          onClick={() => onOrder?.(item)}
          className="
            w-full py-3 text-base sm:text-lg rounded-full
            bg-gradient-to-br from-pink-300 to-amber-200
            text-gray-900 font-semibold shadow-xl hover:opacity-90 transition
          "
        >
          Оформить заказ
        </button>
      </div>
    </Modal>
  );
}
