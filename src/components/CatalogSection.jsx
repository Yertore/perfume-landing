export default function CatalogSection({
  products,
  showAll,
  onShowAll,
  onSelectProduct,
  onOrderProduct,
  initialCount = 10,
}) {
  const visible = products
    .filter(Boolean)
    .slice(0, showAll ? products.length : initialCount);

  return (
    <section id="catalog" className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 py-20">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold">Коллекция</h3>
        <p className="text-gray-600">Выберите аромат для любого настроения</p>
      </div>

      <div
        className="
          grid grid-cols-2
          sm:grid-cols-3
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-8
        "
      >
        {visible.map((product) => (
          <article
            key={product.id}
            onClick={() => onSelectProduct(product)}
            className="
              bg-white rounded-2xl
              p-3 sm:p-4 md:p-4
              shadow hover:shadow-lg transition-shadow cursor-pointer
              flex flex-col
            "
          >
            {/* IMAGE */}
            <div
              className="
                w-full
                h-32 sm:h-36 md:h-40 lg:h-48
                rounded-xl overflow-hidden
                mb-3 sm:mb-4
                bg-white flex items-center justify-center
              "
            >
              <img
                alt={product?.name || "product"}
                src={product?.img}
                className="
                  max-h-32 sm:max-h-36 md:max-h-40 lg:max-h-48
                  w-auto object-contain
                "
              />
            </div>

            {/* TITLE */}
            <h4 className="font-semibold text-xs sm:text-sm md:text-base text-center">
              {product.name}
            </h4>

            {/* SUBTEXT */}
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 text-center">
              50ml · Eau de Parfum
            </p>

            {/* PUSH CONTENT DOWN */}
            <div className="flex-1"></div>

            {/* PRICE + BUTTON */}
            <div
              className="
                mt-3 sm:mt-4
                flex flex-col sm:flex-row md:flex-col lg:flex-row
                items-center justify-between
                gap-2
              "
            >
              <div className="text-sm sm:text-base md:text-lg font-bold text-center w-full sm:w-auto">
                {product.price} ₸
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOrderProduct(product);
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
          <button
            type="button"
            onClick={onShowAll}
            className="px-6 py-2 bg-gray-900 text-white rounded-full shadow hover:opacity-90"
          >
            Показать все
          </button>
        )}
      </div>
    </section>
  );
}
