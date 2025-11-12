// src/components/Journey.jsx
import { useState } from "react";
import { Briefcase } from "lucide-react";

export default function Journey() {
    const [tab, setTab] = useState("estudios"); // default: estudios

    const studies = [
        {
            year: "2018 – Actualidad",
            title: "Ingeniería de Sistemas",
            place: "Universidad Autónoma Gabriel René Moreno",
            desc: "Proyecto de grado enfocado en el desarrollo de una servocuna con interfaz HMI y control mediante microcontrolador PIC.",
        },
        {
            year: "2023",
            title: "Diplomado en Desarrollo Web",
            place: "Centro de Capacitación Profesional",
            desc: "Especialización en React, WordPress, UX/UI y optimización de interfaces.",
        },
        {
            year: "2021",
            title: "Diseño Gráfico (formación complementaria)",
            place: "Formación independiente",
            desc: "Manejo avanzado de Photoshop, Illustrator y Premiere.",
        },
    ];

    const experience = [
        {
            year: "2024 - Actualidad",
            title: "RIA Ventures",
            role: "Front-End Developer",
            place: "Santa Cruz, Bolivia · Presencial",
            bullets: ["Desarrollo de interfaces modernas y responsivas en WordPress y React."],
        },
        {
            year: "Nov 2023 - Mar 2024",
            title: "RIA Ventures",
            role: "Pasante de Desarrollo Web",
            place: "Santa Cruz, Bolivia · Presencial",
            bullets: ["Apoyo en diseño, desarrollo y mantenimiento de sitios web corporativos."],
        },
        {
            year: "Dic 2021 - Jun 2022",
            title: "Foco Azul",
            role: "Desarrollador Web",
            place: "Santa Cruz, Bolivia · Híbrido",
            bullets: ["Implementación de soluciones web interactivas centradas en la experiencia del usuario."],
        },
        {
            year: "Ago 2021 - Nov 2021",
            title: "Foco Azul",
            role: "Pasante de Desarrollo Web",
            place: "Santa Cruz, Bolivia · Híbrido",
            bullets: ["Desarrollo de funcionalidades bajo la guía de desarrolladores senior."],
        },
    ];

    return (
        <section id="acerca" className="py-20 bg-white font-poppins">
            {/* Header */}
            <div className="text-center mb-8 max-w-3xl mx-auto px-6">
                <p className="text-sm uppercase tracking-wide text-[#295FF1]">Acerca de mí</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Mi <span className="text-[#295FF1]">Trayectoria</span>
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed text-base">
                    Ayudo a <strong>marcas</strong> y <strong>emprendedores</strong> a <strong>destacar</strong> en el mundo digital con <strong>sitios web modernos</strong>, <strong>funcionales</strong> y llenos de <strong>identidad</strong>.
                </p>

            </div>

            {/* Tabs */}
            <div className="max-w-6xl mx-auto px-6 mb-8 flex flex-wrap gap-2 justify-center">
                <button
                    onClick={() => setTab("estudios")}
                    className={`px-4 py-2 rounded-xl border transition-all text-sm md:text-base ${tab === "estudios"
                            ? "bg-[#295FF1] text-white border-[#295FF1] shadow-sm"
                            : "bg-white text-gray-700 border-gray-200 hover:text-[#295FF1]"
                        }`}
                >
                    Estudios
                </button>
                <button
                    onClick={() => setTab("experiencia")}
                    className={`px-4 py-2 rounded-xl border transition-all text-sm md:text-base ${tab === "experiencia"
                            ? "bg-[#295FF1] text-white border-[#295FF1] shadow-sm"
                            : "bg-white text-gray-700 border-gray-200 hover:text-[#295FF1]"
                        }`}
                >
                    Experiencia
                </button>
            </div>

            {/* Panel */}
            <div className="max-w-6xl mx-auto px-6">
                {tab === "estudios" && (
                    <div className="bg-[#f8f9fc] rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-[#295FF1] p-3 rounded-full text-white text-lg shadow-md">🎓</div>
                            <h3 className="text-xl font-semibold text-[#295FF1]">Estudios</h3>
                        </div>

                        <div className="space-y-6">
                            {studies.map((s, i) => (
                                <div key={i} className="rounded-xl bg-white border border-gray-200 p-5">
                                    <p className="text-xs text-gray-500">{s.year}</p>
                                    <h4 className="mt-1 font-semibold text-lg text-gray-900">{s.title}</h4>
                                    {s.place && <p className="text-xs text-gray-500 italic">{s.place}</p>}
                                    {s.desc && <p className="text-sm text-gray-700 mt-2">{s.desc}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {tab === "experiencia" && (
                    <div className="bg-[#f8f9fc] rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-[#295FF1] p-3 rounded-full text-white text-lg shadow-md">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#295FF1]">Experiencia Laboral</h3>
                        </div>

                        <div className="relative pl-6">
                            <span className="absolute left-1 top-1 bottom-1 w-[2px] bg-[#295FF1]/20" />
                            {experience.map((exp, i) => (
                                <div key={i} className="relative mb-8 last:mb-0">
                                    <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#295FF1]" />
                                    <p className="text-xs text-gray-500">{exp.year}</p>
                                    <h4 className="mt-1 font-semibold text-lg text-gray-900">
                                        {exp.title} · <span className="text-[#295FF1]">{exp.role}</span>
                                    </h4>
                                    <p className="text-xs text-gray-500 italic">{exp.place}</p>
                                    <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                                        {exp.bullets.map((b, j) => (
                                            <li key={j}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
