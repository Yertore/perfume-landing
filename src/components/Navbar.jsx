import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  const scrollTo = (hash) => {
    // закрываем меню и скроллим
    close();

    // даём DOM обновиться, чтобы не было дерганий
    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.location.hash = hash;
    });
  };

  return (
    <>
      <header className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between">
          {/* LEFT: LOGO + TITLE */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-300 to-amber-200 flex items-center justify-center shadow">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none">
                  <path d="M12 3v18" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M3 12h18" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>

              <div>
                <h1 className="text-base sm:text-lg font-semibold">BEAUTYCOSMETICS | парфюмерия</h1>
                <p className="text-xs text-gray-500 -mt-1">Красивая косметика и благовония</p>
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 text-base lg:text-sm text-gray-700">
            <button onClick={() => scrollTo("#catalog")} className="hover:text-gray-900">Каталог</button>
            <button onClick={() => scrollTo("#about")} className="hover:text-gray-900">О бренде</button>
            <button onClick={() => scrollTo("#contact")} className="hover:text-gray-900">Контакты</button>
          </nav>

          {/* DESKTOP BUTTON */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#contact")}
              className="text-sm px-4 py-2 rounded-full border border-gray-200 hover:shadow"
            >
              Связаться
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-0 left-0 right-0 z-[50] bg-white shadow-md rounded-b-2xl">
          <div className="p-4 flex flex-col gap-2 animate-menu">
            {/* Close button */}
            <button
              className="ml-auto p-2 rounded-full hover:bg-gray-100 transition"
              onClick={close}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Menu links */}
            <button
              className="text-left text-base font-medium py-2 px-3 hover:bg-gray-100 rounded-lg"
              onClick={() => scrollTo("#catalog")}
            >
              Каталог
            </button>

            <button
              className="text-left text-base font-medium py-2 px-3 hover:bg-gray-100 rounded-lg"
              onClick={() => scrollTo("#about")}
            >
              О бренде
            </button>

            <button
              className="text-left text-base font-medium py-2 px-3 hover:bg-gray-100 rounded-lg"
              onClick={() => scrollTo("#contact")}
            >
              Контакты
            </button>

            <button
              className="py-2 px-3 rounded-lg font-medium text-base bg-gray-900 text-white hover:bg-gray-800 transition"
              onClick={() => scrollTo("#contact")}
            >
              Связаться
            </button>
          </div>
        </div>
      )}
    </>
  );
}
