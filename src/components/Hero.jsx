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
        className="relative bg-white overflow-hidden h-[80vh] flex items-center justify-center font-poppins"
      >
        {/* --- blobs difusos en las esquinas --- */}
        <div className="pointer-events-none absolute -top-20 -left-24 w-96 h-96 rounded-full bg-blue-500/50 blur-3xl" />
        <div className="pointer-events-none absolute -top-30 -left-20 w-60 h-60 rounded-full bg-orange-400/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-30 -right-10 w-60 h-60 rounded-full bg-orange-400/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-24 w-96 h-96 rounded-full bg-blue-500/50 blur-3xl" />

        {/* --- Imagen de Gabriela (opcional, actualmente oculta) --- */}
        <div className="absolute bottom-0">
          <img
            src={heroImg}
            alt="Gabriela"
            className="w-[320px] md:w-[260px] mx-auto drop-shadow-xl select-none"
          />
        </div>

        {/* --- Contenido principal --- */}
        <div className="h-[70vh] max-w-7xl mx-auto px-4 pt-16 pb-20 flex flex-col items-center text-center gap-6">
          <div className="font-figtree">
            <p className="text-3xl text-[#333333] font-bold">Soy Gabriela,</p>
            <h1 className="mt-2 text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="block bg-gradient-to-r from-[#528AFF] to-[#003DBF] bg-clip-text text-transparent">
                Desarrolladora Web
              </span>
            </h1>
          </div>
        </div>

        {/* --- Íconos flotando (decorativos) --- */}
        <img
          src={tijera}
          alt=""
          className="hidden md:block absolute top-24 left-[12%] w-30 animate-[float_6s_ease-in-out_infinite]"
        />
        <img
          src={web}
          alt=""
          className="hidden md:block absolute top-[45%] left-[10%] w-50 animate-[float_6s_ease-in-out_infinite]"
        />
        <img
          src={pincel}
          alt=""
          className="hidden md:block absolute top-[75%] left-[15%] w-20 animate-[float_5.5s_ease-in-out_infinite]"
        />
        <img
          src={start1}
          alt=""
          className="hidden md:block absolute top-[35%] left-[10%] w-15 animate-[float_7s_ease-in-out_infinite]"
        />
        <img
          src={start2}
          alt=""
          className="hidden md:block absolute top-[75%] left-[8%] w-10 animate-[float_7s_ease-in-out_infinite]"
        />
        <img
          src={start3}
          alt=""
          className="hidden md:block absolute top-[20%] right-[25%] w-10 animate-[float_7s_ease-in-out_infinite]"
        />
        <img
          src={start4}
          alt=""
          className="hidden md:block absolute top-[70%] right-[10%] w-10 animate-[float_7s_ease-in-out_infinite]"
        />
        <img
          src={ecommerce}
          alt=""
          className="hidden md:block absolute top-24 right-[10%] w-50 animate-[float_6.5s_ease-in-out_infinite]"
        />
        <img
          src={lupa}
          alt=""
          className="hidden md:block absolute top-[53%] right-[20%] w-30 animate-[float_7s_ease-in-out_infinite]"
        />
        <img
          src={uxui}
          alt=""
          className="hidden md:block absolute top-[70%] right-[15%] w-30 animate-[float_5s_ease-in-out_infinite]"
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
