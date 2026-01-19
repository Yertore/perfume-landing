import { useEffect, useRef, useState } from "react";
import { CAROUSEL_IMAGES } from "../data/carouselImages";

export default function HeroCarousel() {
  const images = CAROUSEL_IMAGES;

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setFade(false);

      timeoutRef.current = setTimeout(() => {
        setIndex(i => (i + 1) % images.length);
        setFade(true);
      }, 400);
    }, 5000);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [images.length]);

  const goTo = (nextIndex) => {
    setFade(false);
    timeoutRef.current = setTimeout(() => {
      setIndex(nextIndex);
      setFade(true);
    }, 300);
  };

  const prev = () =>
    goTo((index - 1 + images.length) % images.length);

  const next = () =>
    goTo((index + 1) % images.length);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
      <img
        src={images[index]}
        alt=""
        className={`
          h-full w-full object-cover rounded-2xl
          transition-all duration-700 transform
          ${fade ? "opacity-100 scale-110 blur-0" : "opacity-0 scale-95 blur-sm"}
        `}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
        <div className="absolute inset-0 blur-3xl bg-white/10" />
      </div>

      {/* Prev */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2
          bg-white/70 backdrop-blur-md hover:bg-white
          shadow-xl w-10 h-10 rounded-full flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2
          bg-white/70 backdrop-blur-md hover:bg-white
          shadow-xl w-10 h-10 rounded-full flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all
              ${i === index ? "bg-white scale-125 shadow" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
