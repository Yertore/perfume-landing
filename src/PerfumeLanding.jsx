import React, { useState } from "react";
import CHANEL_Allure from './images/chanel_allure.jpg';
import CHANEL_Chance_Eau_Tendre from './images/chanel_chance.jpg';
import CHANEL_Coco_Mademoiselle from './images/chanel_coco_mademoiselle.jpg';
import CHANEL_Coco_NOIR from './images/chanel_coco_noir.jpeg';
import Dior_Addict from './images/dior_addict.jpg';
import Dior_JAdore from './images/dior_jadore.jpg';
import Dior_Miss_Dior from './images/dior_miss_dior.jpg';
import Dior_Pure_Poison from './images/dior_pure_poison.jpg';
import Giorgio_Armani_Diamonds from './images/giorgio_armani_diamonds.jpg';
import Giorgio_Armani_Idole_DArmani from './images/giorgio_armani_idole.jpg';
import Giorgio_Armani_My_Way from './images/giorgio_armani_my_way.jpeg';
import Giorgio_Armani_Si_Passion_Eclat from './images/giorgio_armani_si_passion_eclat.jpg';
import GIVENCHY_Ange_Ou_Demon from './images/givenchy_ange_ou_demon.jpg';
import GIVENCHY_Irresistible from './images/givenchy_irresistible.jpg';
import GIVENCHY_LInterdit_Rouge from './images/givenchy_linterdit_rouge.jpg';
import GIVENCHY_LInterdit from './images/givenchy_linterdit.jpg';
import TOM_FORD_Velvet_Orchid from './images/tom_ford_velvet_orchid.jpg';
import Yves_Saint_Laurent_Black_Opium from './images/yves_saint_laurent_black_opium.jpg';
import Yves_Saint_Laurent_LIBRE_ABSOLU_PLATINE from './images/yves_saint_laurent_libre.jpg';
import Yves_Saint_Laurent_Mon_Paris from './images/yves_saint_laurent_mon_paris.jpeg';

import C1 from './images/carousel/1.jpg';
import C2 from './images/carousel/2.jpg';
import C3 from './images/carousel/3.jpg';
import C4 from './images/carousel/4.jpg';
import C5 from './images/carousel/5.jpg';

// PerfumeLanding.jsx
// Single-file React component for a clean perfume/cosmetics landing page.
// Tailwind CSS required in the project (recommended).

function HeroCarousel() {
  const images = [C1, C2, C3, C4, C5 ];

  const [index, setIndex] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex(i => (i + 1) % images.length);
        setFade(true);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex(i => (i - 1 + images.length) % images.length);
      setFade(true);
    }, 300);
  };

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIndex(i => (i + 1) % images.length);
      setFade(true);
    }, 300);
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center transition">
      <img
        src={images[index]}
        className={`h-full w-full object-cover rounded-2xl transform transition-all duration-700 ${fade ? 'opacity-100 scale-110 blur-0' : 'opacity-0 scale-95 blur-sm'}`}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* glossy highlight */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-white/5 to-transparent mix-blend-overlay"></div>

        {/* soft glow */}
        <div className="absolute inset-0 blur-3xl bg-white/10"></div>
      </div>

      {/* Buttons */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md hover:bg-white shadow-xl w-10 h-10 rounded-full flex items-center justify-center transition">
        <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7' /></svg>
      </button>

      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md hover:bg-white shadow-xl w-10 h-10 rounded-full flex items-center justify-center transition">
        <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' /></svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === index ? 'bg-white scale-125 shadow' : 'bg-white/40'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default function PerfumeLanding() {
  const [modalItem, setModalItem] = useState(null);
  
const products = [
     {id: 1, img: CHANEL_Allure, name: "CHANEL Allure", price: 40000, top: false},
     {id: 2, img: CHANEL_Chance_Eau_Tendre, name: "CHANEL Chance Eau Tendre", price: 25400, top: false},
     {id: 3, img: CHANEL_Coco_Mademoiselle, name: "CHANEL Coco Mademoiselle", price: 32100, top: false},
     {id: 4, img: CHANEL_Coco_NOIR, name: "CHANEL Coco NOIR", price: 45000, top: false},
     {id: 5, img: Dior_Addict, name: "Dior Addict", price: 18900, top: false},
     {id: 6, img: Dior_JAdore, name: "Dior J'Adore", price: 29900, top: true},
     {id: 7, img: Dior_Miss_Dior, name: "Dior Miss Dior", price: 22500, top: false},
     {id: 8, img: Dior_Pure_Poison, name: "Dior Pure Poison", price: 17300, top: true},
     {id: 9, img: Giorgio_Armani_Diamonds, name: "Giorgio Armani Diamonds", price: 14700, top: false},
     {id: 10, img: Giorgio_Armani_Idole_DArmani, name: "Giorgio Armani Idole D'Armani", price: 11200, top: false},
     {id: 11, img: Giorgio_Armani_My_Way, name: "Giorgio Armani My Way", price: 24600, top: true},
     {id: 12, img: Giorgio_Armani_Si_Passion_Eclat, name: "Giorgio Armani Si Passion Eclat", price: 19800, top: false},
     {id: 13, img: GIVENCHY_Ange_Ou_Demon, name: "GIVENCHY Ange Ou Demon", price: 16400, top: false},
     {id: 14, img: GIVENCHY_Irresistible, name: "GIVENCHY Irresistible", price: 21000, top: false},
     {id: 15, img: GIVENCHY_LInterdit_Rouge, name: "GIVENCHY L'Interdit Rouge", price: 28700, top: false},
     {id: 16, img: GIVENCHY_LInterdit, name: "GIVENCHY L'Interdit", price: 23300, top: false},
     {id: 17, img: TOM_FORD_Velvet_Orchid, name: "TOM FORD Velvet Orchid", price: 55500, top: false},
     {id: 18, img: Yves_Saint_Laurent_Black_Opium, name: "Yves Saint Laurent Black Opium", price: 31800, top: false},
     {id: 19, img: Yves_Saint_Laurent_LIBRE_ABSOLU_PLATINE, name: "Yves Saint Laurent LIBRE ABSOLU PLATINE", price: 38900, top: false},
     {id: 20, img: Yves_Saint_Laurent_Mon_Paris, name: "Yves Saint Laurent Mon Paris", price: 27100, top: false}
];
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* NAV */}
      <header className="bg-white/60 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-300 to-amber-200 flex items-center justify-center shadow">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3v18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 12h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-semibold">HOSH | парфюмерия</h1>
              <p className="text-xs text-gray-500 -mt-1">Красивая косметика и благовония</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#catalog" className="hover:text-gray-900">Каталог</a>
            <a href="#about" className="hover:text-gray-900">О бренде</a>
            <a href="#gallery" className="hover:text-gray-900">Галерея</a>
            <a href="#contact" className="hover:text-gray-900">Контакты</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm px-4 py-2 rounded-full border border-gray-200 hover:shadow">Связаться</button>
          </div>

          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
  <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <div className="space-y-6">
      <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">Новая коллекция 2025</span>
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Соблазнительные ароматы. <br className="hidden sm:inline"/>Изысканная косметика.</h2>
      <p className="text-gray-600 max-w-xl">Коллекция, создающая настроение — ноты розы, сандала и янтаря. Упаковка премиум-класса, ручная отделка и утончённый дизайн.</p>
      <div className="flex items-center gap-4">
        <a href="#catalog" className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-full font-medium shadow hover:opacity-95">Посмотреть каталог</a>
        <a href="#about" className="text-sm text-gray-700 hover:underline">Узнать больше</a>
      </div>
      <div className="mt-6 flex gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center">✨</div>
          <div>
            <div className="text-sm font-semibold">Бесплатная доставка</div>
            <div className="text-xs text-gray-500">от 20 000 тг</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center">🕊️</div>
          <div>
            <div className="text-sm font-semibold">Натуральные ноты</div>
            <div className="text-xs text-gray-500">Без агрессивной химии</div>
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

{/* HITS */}
      <section className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 py-24">
        <h3 className="text-4xl font-extrabold text-center mb-14 tracking-tight">
          Хиты продаж
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            {
              name: products[0].name,
              img: products[0].img
            },
            {
              name: products[1].name,
              img: products[1].img
            },
            {
              name: products[2].name,
              img: products[2].img
            }
          ].map((item, i) => (
            <div
              key={i}
              onClick={() => setModalItem(i)}
              className="cursor-pointer group relative rounded-3xl overflow-hidden shadow-lg flex items-center justify-center"
            >
              <img
                src={item.img}
                className="h-[380px] w-auto object-contain transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white flex items-end justify-center">
                <h4 className="text-2xl font-bold tracking-tight drop-shadow-lg">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* CATALOG / PRODUCTS */}
      <section id="catalog" className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 py-20">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold">Коллекция</h3>
          <p className="text-gray-600">Выберите аромат для любого настроения</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8">
          {Array.from({ length: 20 }).slice(0, showAll ? 20 : 10).map((_, i) => (
            <article key={i} onClick={() => setModalItem(i)} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-white flex items-center justify-center">
                <img alt={`product-${i}`} src={products[i].img} className="max-h-48 w-auto object-contain" />
              </div>
              <h4 className="font-semibold">{products[i].name}</h4>
              <p className="text-sm text-gray-500 mt-1">50ml · Eau de Parfum</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-lg font-bold">{products[i].price} ₸</div>
                <a href="#contact" className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-br from-pink-300 to-amber-200 text-gray-900 shadow hover:opacity-90 transition">Заказать</a>
              </div>
            </article>
          ))}
        </div>
      
        <div className="flex justify-center mt-8">
          {!showAll && (
            <button onClick={() => setShowAll(true)} className="px-6 py-2 bg-gray-900 text-white rounded-full shadow hover:opacity-90">
              Показать все
            </button>
          )}
        </div>
      

      {modalItem !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[95%] max-w-xl p-8 relative shadow-xl animate-fadeIn">
            <button onClick={() => setModalItem(null)} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-xl">×</button>

            <img src={products[modalItem].img} className="w-full max-h-[380px] object-contain rounded-xl mb-6" />

            <h3 className="text-xl font-semibold mb-2">{products[modalItem].name}</h3>
            <p className="text-gray-600 text-sm mb-4">Премиальный аромат с нотами бергамота, розы и амбры. Долгое раскрытие, стойкость 10–12 часов. Идеально подходит для особых случаев.</p>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">Топ ноты: Бергамот</span>
              <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-medium">Сердце: Роза</span>
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">База: Амбра</span>
            </div>
            <div className="text-2xl font-bold mb-4">Цена: {products[modalItem].price} ₸</div>
            <button className="w-full mt-4 py-4 rounded-full bg-gradient-to-br from-pink-300 to-amber-200 text-gray-900 font-semibold shadow-lg hover:opacity-90 transition text-lg">Заказать</button>
          </div>
        </div>
      )}

    </section>

      {/* ABOUT */}
      <section id="about" className="bg-amber-50 py-16">
        <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold">О бренде</h3>
            <p className="text-gray-700 mt-4">Мы создаём ароматы с вниманием к деталям: натуральные экстракты, глубина звучания, элегантная упаковка. Наш подход — баланс традиций и инноваций.</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center">🌿</div>
                <div>
                  <div className="font-semibold">Натуральные ингредиенты</div>
                  <div className="text-xs text-gray-500">Экотесты и контроль качества</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center">🏷️</div>
                <div>
                  <div className="font-semibold">Премиум упаковка</div>
                  <div className="text-xs text-gray-500">Идеально для подарка</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow w-full h-72 md:h-80 lg:h-96">
            <img alt="about" src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold">Свяжитесь с нами</h3>
            <p className="text-gray-300 mt-3">Оставьте заявку — мы ответим в течение рабочего дня.</p>

            <div className="mt-6 space-y-4">
              <div className="flex gap-3 items-center">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7-5 7 5v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/></svg>
                <div>
                  <div className="font-semibold">office@hosh.kz</div>
                  <div className="text-xs text-gray-400">Почта для вопросов</div>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m6 4l4 4-4 4"/></svg>
                <div>
                  <div className="font-semibold">+7 (700) 000-00-00</div>
                  <div className="text-xs text-gray-400">Рабочие часы: 10:00 — 19:00</div>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-white/5 rounded-xl p-6 space-y-4">
            <label className="block text-sm">
              <span className="text-xs text-gray-300">Имя</span>
              <input className="mt-1 block w-full rounded-md bg-white/10 border border-white/10 placeholder-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Ваше имя" />
            </label>

            <label className="block text-sm">
              <span className="text-xs text-gray-300">Телефон или почта</span>
              <input className="mt-1 block w-full rounded-md bg-white/10 border border-white/10 placeholder-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="+7 (700) 000-00-00 или email" />
            </label>

            <label className="block text-sm">
              <span className="text-xs text-gray-300">Сообщение</span>
              <textarea className="mt-1 block w-full rounded-md bg-white/10 border border-white/10 placeholder-gray-300 px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Я хочу узнать..." />
            </label>

            <div className="flex justify-end">
              <button type="button" className="px-5 py-2 rounded-full bg-amber-400 text-gray-900 font-semibold">Отправить</button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-8">
        <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-700">© {new Date().getFullYear()} HOSH. Все права защищены.</div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" aria-label="instagram" className="hover:text-gray-900">Instagram</a>
            <a href="#" aria-label="telegram" className="hover:text-gray-900">Telegram</a>
            <a href="#" aria-label="whatsapp" className="hover:text-gray-900">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}