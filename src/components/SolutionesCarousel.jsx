// src/components/SolutionsCarousel.jsx
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import webdesign from '../assets/images/servicios/webdesign.png';
import landing from '../assets/images/servicios/landing.png';
import ecommerce from '../assets/images/servicios/ecommerce.png';
import mantenimiento from '../assets/images/servicios/mantenimiento.png';
const items = [
  {
    title: "WEB DESIGN",
    img: webdesign,
    bullets: [
      "Dale a tu marca una ",
      { b: "web única, optimizada" },
      " y lista para ",
      { b: "conquistar clientes" },
      " en ",
      { b: "cualquier dispositivo." },
    ],
  },
  {
    title: "LANDING PAGE",
    img: landing,
    bullets: [
      "Convierte ",
      { b: "visitas en clientes" },
      " con una página diseñada para ",
      { b: "impactar y vender" },
      " desde el ",
      { b: "primer clic." },
    ],
  },
  {
    title: "E-COMMERCE",
    img: ecommerce,
    bullets: [
      "Vende ",
      { b: "más y mejor" },
      " con tu propia ",
      { b: "tienda online" },
      ", fácil de usar y lista para ",
      { b: "cobrar en cualquier parte del mundo." },
    ],
  },
   {
    title: "Soporte Técnico Web",
    img: mantenimiento,
    bullets: [
      "Vende ",
      { b: "más y mejor" },
      " con tu propia ",
      { b: "tienda online" },
      ", fácil de usar y lista para ",
      { b: "cobrar en cualquier parte del mundo." },
    ],
  },/*
  {
    title: "Mantenimiento",
    img: "/assets/servicios/ecommerce.png",
    bullets: [
      "Vende ",
      { b: "más y mejor" },
      " con tu propia ",
      { b: "tienda online" },
      ", fácil de usar y lista para ",
      { b: "cobrar en cualquier parte del mundo." },
    ],
  }, */
  // agrega más tarjetas si quieres…
];

function Boldy({ parts }) {
  return (
    <p className="text-slate-600 leading-relaxed">
      {parts.map((p, i) =>
        typeof p === "string" ? (
          <span key={i}>{p}</span>
        ) : (
          <strong key={i} className="text-slate-900">
            {p.b}
          </strong>
        )
      )}
    </p>
  );
}

export default function SolutionsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, dragFree: true, skipSnaps: false },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="soluciones" className="relative overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-[#1E56F0]" aria-hidden />
      {/* Patrón sutil opcional */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,rgba(255,255,255,0.05)_1px)] [background-size:18px_18px]" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Encabezado */}
        <div className="text-center text-white">
          <div className="flex flex-col items-center">
            <span className="inline-block text-sm tracking-[0.18em] opacity-90 font-poppins">
              SOLUCIONES
            </span>
            <div className="mt-3 inline-block bg-white/95 text-[#1E56F0] px-6 py-2  shadow-sm font-insaniburger text-2xl md:text-4xl">
              SOLUCIONES PARA TU MARCA
            </div>
          </div>
          {/* <p className="mt-5 max-w-3xl mx-auto text-white/90 font-poppins">
            Soy apasionada por el arte en todas sus formas; encuentro inspiración en la creatividad y el diseño.
            Amante del café, siempre acompañada de buenas ideas y código bien estructurado.
          </p> */}
        </div>

        {/* Carrusel */}
        <div className="mt-10">
          <div className="relative">
            {/* Viewport */}
            <div className="overflow-hidden" ref={emblaRef} aria-roledescription="carousel">
              <div className="flex gap-6">
                {items.map((card, idx) => (
                  <article
                    key={idx}
                    className="min-w-[85%] sm:min-w-[55%] md:min-w-[40%] lg:min-w-[28%] 
                               bg-white rounded-3xl shadow-xl p-6 md:p-8 flex flex-col items-center text-center 
                               transition-transform duration-200 hover:-translate-y-1"
                    role="group"
                    aria-label={`${card.title}`}
                  >
                    <h3 className="font-poppins uppercase font-bold text-[#000000] text-lg md:text-xl tracking-wide">
                      {card.title}
                    </h3>

                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-28 h-28 mt-5 object-contain"
                      loading="lazy"
                    />

                    <div className="mt-5 font-poppins text-base">
                      <Boldy parts={card.bullets} />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Controles */}
            <div className="mt-6 flex items-center justify-end gap-4">
              <button
                onClick={scrollPrev}
                className="p-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Anterior"
              >
                <ChevronLeft size={25} strokeWidth={3} className="text-[#1E56F0]" />
              </button>

              <button
                onClick={scrollNext}
                className="p-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Siguiente"
              >
                <ChevronRight size={25} strokeWidth={3} className="text-[#1E56F0]" />
              </button>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
