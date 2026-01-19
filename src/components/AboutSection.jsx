export default function AboutSection() {
  return (
    <section id="about" className="bg-amber-50 py-16">
      <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-bold">О бренде</h3>
          <p className="text-gray-700 mt-4">
            Мы создаём ароматы с вниманием к деталям: натуральные экстракты, глубина звучания,
            элегантная упаковка. Наш подход — баланс традиций и инноваций.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center">
                🌿
              </div>
              <div>
                <div className="font-semibold">Натуральные ингредиенты</div>
                <div className="text-xs text-gray-500">Экотесты и контроль качества</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center">
                🏷️
              </div>
              <div>
                <div className="font-semibold">Премиум упаковка</div>
                <div className="text-xs text-gray-500">Идеально для подарка</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden shadow w-full h-72 md:h-80 lg:h-96">
          <img
            alt="about"
            src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
