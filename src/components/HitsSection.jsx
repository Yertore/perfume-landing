export default function HitsSection({ products, onSelect }) {
  return (
    <section className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 py-24">
      <h3
        className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          font-extrabold text-center mb-14 tracking-tight
        "
      >
        Хиты продаж
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {products.slice(0, 3).map((product) => (
          <div
            key={product.id}
            onClick={() => onSelect(product)}
            className="cursor-pointer group relative rounded-3xl overflow-hidden shadow-lg flex items-center justify-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="
                w-auto
                h-56
                sm:h-64
                md:h-72
                lg:h-80
                object-contain
                transition-all duration-700
                group-hover:scale-110
              "
            />

            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white flex items-end justify-center">
              <h4
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  font-semibold
                  leading-tight
                  text-center
                  line-clamp-2
                  drop-shadow-md
                "
              >
                {product.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
