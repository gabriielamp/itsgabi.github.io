// src/components/AboutMe.jsx
import { useState, useMemo } from "react";
import Girl from "../assets/images/fotos/foto-chica.png";

// Logos
import HtmlLogo from "../assets/images/skills/html-logo.png";
import CssLogo from "../assets/images/skills/css-logo.png";
import JsLogo from "../assets/images/skills/js-logo.png";
import PhpLogo from "../assets/images/skills/php-logo.png";
import CsharpLogo from "../assets/images/skills/csharp-logo.png";
import ReactLogo from "../assets/images/skills/react-logo.png";
import CodeigniterLogo from "../assets/images/skills/codeigniter-logo.png";
import BootstrapLogo from "../assets/images/skills/boostrap-logo.png";
import TailwindLogo from "../assets/images/skills/tailwind-logo.png";
import WordpressLogo from "../assets/images/skills/wordpress-logo.png";
import GithubLogo from "../assets/images/skills/github-logo.png";
import PhpMyAdminLogo from "../assets/images/skills/phpmyadmin-logo.png";
import AdobeXdLogo from "../assets/images/skills/figma-logo.png";
import PhotoshopLogo from "../assets/images/skills/adobe-photoshop-logo.svg";
import IllustratorLogo from "../assets/images/skills/illustrator-logo.svg";
import PremiereLogo from "../assets/images/skills/adobe-premiere-logo.svg";
import LaravelLogo from "../assets/images/skills/laravel.png";

import { Briefcase } from "lucide-react";

export default function AboutMe() {
  const [tab, setTab] = useState("presentacion");

  const tabs = [
    { id: "presentacion", label: "Presentación" },
    { id: "habilidades", label: "Habilidades" },
    { id: "experiencia", label: "Experiencia" },
  ];

  // Solo activamos scroll interno en la pestaña larga
  const panelClasses = useMemo(
    () =>
      [
        "rounded-2xl bg-white border border-[#9D9D9D] shadow-md p-6 text-left mt-2 w-full",
        tab === "experiencia"
          ? "max-h-[65vh] md:max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#2262EA] scrollbar-track-gray-200"
          : "",
        "transition-all duration-300",
      ].join(" "),
    [tab]
  );

  return (
    <section id="acerca" className="relative py-16 bg-white bg-grid">
      {/* Título */}
      {/* <div className="max-w-6xl mx-auto px-6">
        <div className="inline-block bg-white/95 text-[#1E56F0] px-6 py-2 shadow-sm font-insaniburger text-2xl md:text-4xl">
          CONOCE UN POCO MAS DE MI..
        </div>
      </div> */}

      {/* Contenido */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start px-6">
        {/* Columna izquierda: ilustración sticky para mantener equilibrio visual */}
        <div className="flex md:block justify-center z-30">
          <div className="md:sticky md:top-24">
            <img
              src={Girl}
              alt="Ilustración desarrolladora"
              className="w-64 md:w-96 drop-shadow-lg"
            />
          </div>
        </div>

        {/* Columna derecha: Tabs + Panel */}
        <div className="font-poppins z-30">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={[
                  "px-4 py-2 rounded-t-xl text-sm md:text-base font-medium transition-all border-b-2",
                  tab === t.id
                    ? "border-[#2262EA] text-white bg-[#2262EA] font-semibold shadow-sm"
                    : "border-[#9D9D9D] text-[#5f5f5f] bg-[#EFEFEF] hover:text-[#2262EA]",
                ].join(" ")}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className={panelClasses} key={tab}>
            {tab === "presentacion" && (
              <div className="space-y-4 leading-relaxed text-gray-800">
                <p>
                  Desarrolladora web con más de{" "}
                  <strong>2 años de experiencia</strong> en creación de sitios
                  atractivos y funcionales.
                </p>
                <p>
                  Especialista en diseño responsivo y experiencia de usuario, con
                  enfoque en soluciones innovadoras para potenciar la presencia
                  digital de empresas 🚀.
                </p>
                <p>
                  ✍️ Apasionada por el arte en todas sus formas, encuentro
                  inspiración en la creatividad y el diseño.
                </p>
              </div>
            )}

            {tab === "experiencia" && (
              <div className="space-y-8">
                {/* Timeline vertical sutil */}
                <div className="relative pl-6">
                  <span className="absolute left-1 top-1 bottom-1 w-[2px] bg-[#2262EA]/20" />
                  {/* RIA Ventures */}
                  <div className="relative">
                    <span className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-[#2262EA]" />
                    <h3 className="flex items-center gap-2 font-semibold text-lg text-[#2262EA]">
                      <Briefcase className="w-5 h-5" />
                      RIA Ventures
                    </h3>
                    <p className="text-xs text-gray-500">
                      <em>Santa Cruz, Bolivia | Presencial</em>
                    </p>

                    <div className="mt-3 space-y-4">
                      <div>
                        <h4 className="font-bold text-stone-900">
                          Desarrollador de Front-end
                        </h4>
                        <p className="resume-date text-xs">
                          <em>abril 2024 - Actualidad · 1 año</em>
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                          <li>
                            Desarrollo de interfaces de usuario dinámicas y
                            responsivas utilizando WordPress y herramientas
                            front-end.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-stone-900">
                          Pasante en Desarrollo Web
                        </h4>
                        <p className="resume-date text-xs">
                          <em>noviembre 2023 - marzo 2024 · 5 meses</em>
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                          <li>
                            Apoyo en diseño y desarrollo de sitios web; experiencia
                            en WordPress y diseño web.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Foco Azul */}
                  <div className="relative mt-8">
                    <span className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-[#2262EA]" />
                    <h3 className="flex items-center gap-2 font-semibold text-lg text-[#2262EA]">
                      <Briefcase className="w-5 h-5" />
                      Foco Azul
                    </h3>
                    <p className="text-xs text-gray-500">
                      <em>Santa Cruz, Bolivia | Híbrido</em>
                    </p>

                    <div className="mt-3 space-y-4">
                      <div>
                        <h4 className="font-bold text-stone-900">
                          Desarrollador Web
                        </h4>
                        <p className="resume-date text-xs">
                          <em>diciembre 2021 - junio 2022 · 7 meses</em>
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                          <li>
                            Implementación de soluciones web interactivas para
                            mejorar la experiencia del usuario.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-stone-900">
                          Pasante en Desarrollo Web
                        </h4>
                        <p className="resume-date text-xs">
                          <em>agosto 2021 - noviembre 2021 · 4 meses</em>
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                          <li>
                            Desarrollo de funcionalidades básicas bajo guía de
                            desarrolladores senior.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {tab === "habilidades" && (
              <div className="space-y-6">
                <div>
                  <h4 className="mb-4 font-semibold text-lg text-gray-700">
                    Tecnologías y Lenguajes de Programación
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <Skill img={HtmlLogo} label="HTML" />
                    <Skill img={CssLogo} label="CSS" />
                    <Skill img={JsLogo} label="JavaScript" />
                    <Skill img={PhpLogo} label="PHP" />
                    <div>
                      <img src={WordpressLogo} alt="WordPress" className="mx-auto w-24" />
                    </div>
                    <div>
                      <img src={PhpMyAdminLogo} alt="PhpMyAdmin" className="mx-auto w-20" />
                    </div>
                    <Skill img={GithubLogo} label="GitHub" />
                    <Skill img={CsharpLogo} label="C#" />
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 font-semibold text-lg text-gray-700">
                    Frameworks y Librerías
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <Skill img={ReactLogo} label="React" />
                    <Skill img={LaravelLogo} label="Laravel" />
                    <Skill img={BootstrapLogo} label="Bootstrap" />
                    <Skill img={TailwindLogo} label="Tailwind" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ img, label }) {
  return (
    <div>
      <img src={img} alt={label} className="mx-auto w-12" />
      <p className="mt-2 text-sm text-gray-700">{label}</p>
    </div>
  );
}
