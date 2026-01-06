// src/components/Hero.jsx
import { useEffect } from "react";

import heroImg from "../assets/images/fotos/foto-g.png"; // tu recorte en PNG (fondo transparente)

import uxui from "../assets/images/ilustraciones/dibujo3d-right/uxui.svg";
import ecommerce from "../assets/images/ilustraciones/dibujo3d-right/ecommerce.svg";
import lupa from "../assets/images/ilustraciones/dibujo3d-right/lupa.svg";

import pincel from "../assets/images/ilustraciones/dibujo3d-left/pincel.svg";
import tijera from "../assets/images/ilustraciones/dibujo3d-left/tijeras.svg";
import web from "../assets/images/ilustraciones/dibujo3d-left/web-design.svg";

import start1 from "../assets/images/ilustraciones/dibujo3d-left/start1.svg";
import start2 from "../assets/images/ilustraciones/dibujo3d-left/start2.svg";
import start3 from "../assets/images/ilustraciones/dibujo3d-right/start3.svg";
import start4 from "../assets/images/ilustraciones/dibujo3d-right/start4.svg";

export default function Hero() {
  useEffect(() => {
    // Si en el futuro agregas efectos o animaciones JS, este bloque ya está listo
  }, []);

  return (
    <>
      <section
        id="inicio"
        className="relative bg-white overflow-hidden h-[80vh] flex items-center justify-center"
      >
        {/* --- blobs difusos en las esquinas --- */}
        {/*  <div className="pointer-events-none absolute -top-20 -left-24 w-96 h-96 rounded-full bg-blue-500/50 blur-3xl" />
        <div className="pointer-events-none absolute -top-30 -left-20 w-60 h-60 rounded-full bg-orange-400/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-30 -right-10 w-60 h-60 rounded-full bg-orange-400/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-24 w-96 h-96 rounded-full bg-blue-500/50 blur-3xl" /> */}

        {/* --- Imagen de Gabriela (opcional, actualmente oculta) ---
         <div className="absolute bottom-0">
          <img
            src={heroImg}
            alt="Gabriela"
            className="w-[320px] md:w-[260px] mx-auto drop-shadow-xl select-none"
          />
        </div> */}

        {/* --- Contenido principal --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 md:pt-20 pb-14 sm:pb-16 md:pb-20 flex flex-col items-center text-center gap-2 text-[#2262EA]">
          <h1 className="font-degular mt-2 font-extrabold leading-[0.9] text-[clamp(56px,12vw,140px)]">
            Hola!
          </h1>
          <p className="font-poppins font-bold leading-tight text-[clamp(18px,4.5vw,30px)]">
            Soy Gabriela Morón,
          </p>
          <p className="font-passionate mt-2 font-extrabold leading-tight text-[clamp(22px,5.5vw,40px)]">
            Frontend - UX/UI Design
          </p>
        </div>

        {/* --- Íconos flotando (decorativos) --- */}
        <img
          src={tijera}
          alt=""
          className="md:block absolute top-24 left-[12%] w-30 animate-[float_6s_ease-in-out_infinite]"
        />
        <img
          src={web}
          alt=""
          className="hidden lg:block absolute top-[45%] left-[10%] w-50 animate-[float_6s_ease-in-out_infinite]"
        />
        <img
          src={pincel}
          alt=""
          className="md:block absolute top-[75%] left-[15%] w-20 animate-[float_5.5s_ease-in-out_infinite]"
        />
        <img
          src={start1}
          alt=""
          className="md:block absolute top-[35%] left-[10%] w-15 animate-[float_7s_ease-in-out_infinite]"
        />
        <img
          src={start2}
          alt=""
          className="hidden md:block absolute top-[75%] left-[8%] w-10 animate-[float_7s_ease-in-out_infinite]"
        />
        <img
          src={start3}
          alt=""
          className="hidden lg:block absolute top-[20%] right-[25%] w-10 animate-[float_7s_ease-in-out_infinite]"
        />
        <img
          src={start4}
          alt=""
          className="md:block absolute top-[70%] right-[10%] w-10 animate-[float_7s_ease-in-out_infinite]"
        />
        <img
          src={ecommerce}
          alt=""
          className="md:block absolute top-24 right-[10%] w-50 animate-[float_6.5s_ease-in-out_infinite]"
        />
        <img
          src={lupa}
          alt=""
          className="hidden lg:block absolute top-[53%] right-[20%] w-30 animate-[float_7s_ease-in-out_infinite]"
        />
        <img
          src={uxui}
          alt=""
          className="md:block absolute top-[70%] right-[15%] w-30 animate-[float_5s_ease-in-out_infinite]"
        />

        {/* --- Animación flotante global --- */}
        <style>{`
          @keyframes float {
            0% { transform: translateY(0) }
            50% { transform: translateY(-8px) }
            100% { transform: translateY(0) }
          }
        `}</style>
      </section>
    </>
  );
}
