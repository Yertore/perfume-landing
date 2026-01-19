// src/products.js

import img1 from "../images/products/1.jpeg";
import img2 from "../images/products/2.jpeg";
import img3 from "../images/products/3.jpeg";
import img4 from "../images/products/4.jpeg";
import img5 from "../images/products/5.jpeg";
import img6 from "../images/products/6.jpeg";
import img7 from "../images/products/7.jpeg";
import img8 from "../images/products/8.jpeg";
import img9 from "../images/products/9.jpeg";
import img10 from "../images/products/10.jpeg";
import img11 from "../images/products/11.jpeg";
import img12 from "../images/products/12.jpeg";
import img13 from "../images/products/13.jpeg";
import img14 from "../images/products/14.jpeg";
import img15 from "../images/products/15.jpeg";
import img16 from "../images/products/16.jpeg";
import img17 from "../images/products/17.jpeg";
import img18 from "../images/products/18.jpeg";
import img19 from "../images/products/19.jpeg";

export const PRODUCTS = [
  { id: 1, img: img1, name: "ШАМПУНЬ С ЧЕСНОКОМ VATIKA NATURALS SPANISH GARLIC", price: 5727, top: false },
  { id: 2, img: img2, name: "ШАМПУНЬ С ЧЕРНЫМ ТМИНОМ 2% VATIKA NATURALS TURKISH BLACK SEED", price: 5727, top: false },
  { id: 3, img: img3, name: "ШАМПУНЬ С ИСПАНСКОЙ ОЛИВОЙ VATIKA SPANISH OLIVE", price: 1909, top: false },
  { id: 4, img: img4, name: "КОНДИЦИОНЕР ОБЪЕМ И ГУСТОТА ВОЛОС DABUR VATIKA NATURALS VOLUME & THICKNESS", price: 2262, top: false },
  { id: 5, img: img5, name: "КОНДИЦИОНЕР КОНТРОЛЬ НАД ПОТЕРЕЙ ВОЛОС DABUR VATIKA NATURALS HAIR FALL CONTROL", price: 2262, top: false },
  { id: 6, img: img6, name: "КОНДИЦИОНЕР С ЧЕСНОКОМ DABUR VATIKA GARLIC", price: 2262, top: true },
  { id: 7, img: img7, name: "КОНДИЦИОНЕР С ЧЕРНЫМ ТМИНОМ DABUR VATIKA BLACK SEED 400МЛ", price: 2262, top: false },
  { id: 8, img: img8, name: "ШАМПУНЬ ДЕТСКИЙ НА ОСНОВЕ ОЛИВКОВОГО МАСЛА DERMOVIVA 500 МЛ", price: 3214, top: true },
  { id: 9, img: img9, name: "ШАМПУНЬ ПРОТИВ ПЕРХОТИ VATIKA NATURALS DANDRUFF GUARD 600 МЛ", price: 3214, top: false },
  { id: 10, img: img10, name: "ШАМПУНЬ С ЧЁРНЫМ ТМИНОМ VATIKA NATURALS TURKISH BLACK SEED 600 МЛ", price: 3214, top: false },
  { id: 11, img: img11, name: "ШАМПУНЬ УВЛАЖНЕНИЕ VATIKA NATURALS MOISTURE TREATMENT", price: 3214, top: true },
  { id: 12, img: img12, name: "ХНА ДЛЯ ВОЛОС VATIKA HENNA HAIR COLOURS- NATURAL BROWN", price: 2712, top: false },
  { id: 13, img: img13, name: "ХНА ДЛЯ ВОЛОС VATIKA HENNA HAIR COLOURS NATURAL BLACK", price: 5425, top: false },
  { id: 14, img: img14, name: "ХНА ДЛЯ ВОЛОС VATIKA HENNA HAIR COLOURS - DARK BROWN", price: 5425, top: false },
  { id: 15, img: img15, name: "ЗУБНАЯ ПАСТА С МИСВАКОМ DABUR MISWAK HERBAL 50Г+25Г", price: 6171, top: false },
  { id: 16, img: img16, name: "ЗУБНАЯ ПАСТА С МИСВАКОМ DABUR MISWAK HERBAL 120Г+50Г", price: 22062, top: false },
  { id: 17, img: img17, name: "ЗУБНАЯ ПАСТА С МИСВАКОМ DABUR MISWAK GOLD 120Г+50 Г", price: 11417, top: false },
  { id: 18, img: img18, name: "ШАМПУНЬ С ХНОЙ VATIKA HENNA", price: 1909, top: false },
  { id: 19, img: img19, name: "ШАМПУНЬ КОНТРОЛЬ НАД ПОТЕРЕЙ ВОЛОС VATIKA NATURALS HAIR FALL CONTROL", price: 1909, top: false },
];

// быстрый доступ по id (удобно для backend/проверок)
export const PRODUCTS_BY_ID = Object.freeze(
  PRODUCTS.reduce((acc, p) => {
    acc[p.id] = p;
    return acc;
  }, {})
);

export function getProductById(id) {
  return PRODUCTS_BY_ID[id] ?? null;
}

export function getTopProducts(limit = 3) {
  const tops = PRODUCTS.filter(p => p.top);
  if (tops.length >= limit) return tops.slice(0, limit);

  // добиваем первыми, которых ещё нет
  const ids = new Set(tops.map(p => p.id));
  for (const p of PRODUCTS) {
    if (ids.has(p.id)) continue;
    tops.push(p);
    ids.add(p.id);
    if (tops.length === limit) break;
  }
  return tops;
}
