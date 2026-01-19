export default function ContactSection({ onOpenPrivacy }) {
  return (
    <section id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT */}
        <div>
          <h3 className="text-xl font-bold">Свяжитесь с нами</h3>
          <p className="text-gray-300 mt-2 text-sm">
            Оставьте заявку — мы ответим в течение рабочего дня.
          </p>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex gap-3 items-center">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7-5 7 5v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              </svg>
              <span className="text-gray-200">bekir.zehay@gmail.com</span>
            </div>

            <div className="flex gap-3 items-center">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m6 4l4 4-4 4" />
              </svg>
              <span className="text-gray-200">+7 (707) 255-79-63</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="bg-white/5 rounded-xl p-5 space-y-3">
          <input
            className="w-full rounded-md bg-white/10 border border-white/10 placeholder-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Ваше имя"
          />

          <input
            className="w-full rounded-md bg-white/10 border border-white/10 placeholder-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="+7 (700) 000-00-00 или email"
          />

          <textarea
            className="w-full rounded-md bg-white/10 border border-white/10 placeholder-gray-300 px-3 py-2 h-20 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Сообщение"
          />

          <button
            type="button"
            className="mt-2 px-5 py-2 rounded-full bg-amber-400 text-gray-900 text-sm font-semibold hover:opacity-90"
          >
            Отправить
          </button>

          <p className="text-[11px] text-gray-400 mt-2">
            Нажимая кнопку «Отправить», вы соглашаетесь с
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="underline ml-1"
            >
              политикой конфиденциальности
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}
