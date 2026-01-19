import HeroCarousel from "./HeroCarousel";

export default function HeroSection() {
  const scrollTo = (hash) => (e) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = hash;
  };

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
            Новая коллекция 2025
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Соблазнительные ароматы. <br className="hidden sm:inline" />
            Изысканная косметика.
          </h2>

          <p className="text-gray-600 max-w-xl">
            Коллекция, создающая настроение — ноты розы, сандала и янтаря. Упаковка
            премиум-класса, ручная отделка и утончённый дизайн.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#catalog"
              onClick={scrollTo("#catalog")}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-full font-medium shadow hover:opacity-95"
            >
              Посмотреть каталог
            </a>

            <a
              href="#about"
              onClick={scrollTo("#about")}
              className="text-sm text-gray-700 hover:underline"
            >
              Узнать больше
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-white shadow flex items-center justify-center">
                ✨
              </div>
              <div>
                <div className="text-sm sm:text-base font-semibold">Бесплатная доставка</div>
                <div className="text-xs sm:text-sm text-gray-500">от 20 000 тг</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-white shadow flex items-center justify-center">
                🕊️
              </div>
              <div>
                <div className="text-sm sm:text-base font-semibold">Натуральные ноты</div>
                <div className="text-xs sm:text-sm text-gray-500">Без агрессивной химии</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-lg relative">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
