// src/components/SolutionsGrid.jsx
import React from "react";

import webdesign from "../assets/images/servicios/webdesign.png";
import landing from "../assets/images/servicios/landing.png";
import ecommerce from "../assets/images/servicios/ecommerce.png";
import mantenimiento from "../assets/images/servicios/mantenimiento.png";
import booking from "../assets/images/servicios/booking.png";
import website from "../assets/images/servicios/website.png";
const items = [

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
    title: "BOOKING ONLINE",
    img: booking,
    bullets: [
      "Gestiona tus ",
      { b: "reservas y pagos" },
      " de forma ",
      { b: "automática y sencilla" },
      ", ideal para ",
      { b: "tours o experiencias." },
    ],
  },
  {
    title: "SITIO WEB CORPORATIVO",
    img: website,
    bullets: [
      "Proyecta la ",
      { b: "imagen profesional" },
      " de tu empresa con un sitio ",
      { b: "ágil, confiable" },
      " y fácil de navegar.",
    ],
  },
  {
    title: "Soporte Técnico Web",
    img: mantenimiento,
    bullets: [
      "Monitoreo, ",
      { b: "actualizaciones y backups" },
      " para que tu sitio esté ",
      { b: "seguro y rápido" },
      " 24/7.",
    ],
  },
  {
    title: "DISEÑO UX / UI",
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

export default function SolutionsGrid() {
  return (
    <section id="soluciones" className="relative overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-[#1E56F0]" aria-hidden />
      {/* Patrón sutil */}
      <div
        className="absolute inset-0 bg-[radial-gradient(transparent_1px,rgba(255,255,255,0.05)_1px)] [background-size:18px_18px]"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Encabezado */}
        <div className="text-center text-white">
          <div className="flex flex-col items-center">
            <span className="inline-block text-sm tracking-[0.18em] opacity-90 font-poppins">
              SOLUCIONES
            </span>
            <div className="mt-3 inline-block bg-white/95 text-[#1E56F0] px-6 py-2 shadow-sm font-insaniburger text-2xl md:text-4xl">
              SOLUCIONES PARA TU MARCA
            </div>
          </div>
        </div>

        {/* Grid de cards (NO carrusel) */}
        <div className="mt-10">
          <div
            className="
              grid gap-6
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {items.map((card, idx) => (
              <article
                key={idx}
                className="
                  bg-white rounded-3xl shadow-xl p-6 md:p-8
                  flex flex-col items-center text-center
                  transition-transform duration-200 hover:-translate-y-1
                  h-full
                "
                aria-label={card.title}
              >
                <h3 className="font-poppins uppercase font-bold text-black text-lg md:text-xl tracking-wide">
                  {card.title}
                </h3>

                <img
                  src={card.img}
                  alt={card.title}
                  className="w-48 h-48 mt-2 object-contain"
                  loading="lazy"
                />

                <div className="mt-5 font-poppins text-base">
                  <Boldy parts={card.bullets} />
                </div>
              </article>
            ))}
          </div>

          {/* Nota: si quieres EXACTO 3 columnas x 2 filas, agrega 2 ítems más al array `items`. */}
        </div>
      </div>
    </section>
  );
}
