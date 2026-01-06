// src/components/Portfolio.jsx
import { FaExternalLinkAlt } from "react-icons/fa";
import imgTuProveedor from "../assets/images/mockups/TuProveedor.png";
import imgStayHost from "../assets/images/mockups/StayHost.png";
import imgMalaEvents from "../assets/images/mockups/MalaEvents.png";

import imgdesign from "../assets/images/mockups/design-bakery.png";
import imglegalflow from "../assets/images/mockups/legalflow.png";
import imgSinganiSanPedro from "../assets/images/mockups/singani.png";

export default function Portfolio() {
    return (
        <section id="trabajos" className="relative overflow-hidden py-16 bg-white">

            {/* Encabezado */}
            <div className="text-center text-[#2262EA] mb-6">
                <div className="flex flex-col items-center">
                    <span className="inline-block text-sm tracking-[0.18em] opacity-90 font-figtree font-bold">
                        PORTFOLIO
                    </span>
                    <div className="px-6 py-2 font-passionate text-2xl md:text-4xl">
                       Trabajos Más Recientes
                    </div>
                    <p className="font-poppins mt-4 max-w-2xl text-sm md:text-base opacity-90 text-[#6B7280] hidden">
                        Soy apasionada por el arte en todas sus formas, encuentro inspiración en la creatividad y el diseño.✦
                    </p>
                </div>
            </div>


            {/* Contenido */}
            <div className="z-30 relative pl-0">

                <div
                    className="
            max-w-6xl mx-auto px-6 md:px-8 font-poppins
            grid gap-6
            grid-cols-1 sm:grid-cols-2
            lg:grid-cols-5 lg:grid-rows-2
          "
                >
                    {/* Card 1: Mala Events */}
                    <div
                        className="
              rounded-[24px] border-2 border-[#2262EA] p-6 md:p-8  bg-white
              lg:col-span-3 lg:row-span-1
            "
                    >
                        <div className="flex justify-center relative w-full overflow-hidden rounded-[12px]">
                            <img
                                src={imgMalaEvents}
                                alt="Mala Events"
                                className="h-48 sm:h-56 md:h-64 lg:h-[300px] object-contain"
                            />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-800">Sitio Web Corporativo</p>
                                <h3 className="text-xl md:text-2xl font-semibold text-stone-900">Mala Events</h3>
                                <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium">
                                    En colaboración con <span className="font-bold text-[#2262EA]">Plasti Studio.</span>
                                </p>
                            </div>
                            <a
                                href="https://malaevents.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-500 hover:text-yellow-600 text-lg"
                            >
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Mi Dulce Inspiración (design) */}
                    <div
                        className="
              rounded-[24px] border-2 border-[#2262EA] p-6 md:p-8 bg-white
              lg:col-span-2 lg:row-span-1 lg:col-start-4
            "
                    >
                        <div className="flex justify-center relative w-full overflow-hidden rounded-[12px]">
                            <img
                                src={imgdesign}
                                alt="Mi Dulce Inspiración"
                                className="h-48 sm:h-56 md:h-64 lg:h-[300px] object-contain"
                            />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-800">Diseño Web</p>
                                <h3 className="text-xl md:text-2xl font-semibold text-stone-900">
                                    Mi Dulce Inspiración
                                </h3>
                                <p className="text-xs md:text-sm text-gray-500 mt-1">
                                    Menú web para una pastelería artesanal.
                                </p>
                            </div>
                            <a
                                href="https://www.figma.com/proto/qvCWlUt3aL52B2ZwmxjCFj/Designs?node-id=2001-32"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-500 hover:text-yellow-600 text-lg"
                            >
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>

                    {/* Card 3: LegalFlow */}
                    <div
                        className="
              rounded-[24px] border-2 border-[#2262EA] p-6 md:p-8 bg-white
              lg:col-span-2 lg:row-span-1 lg:row-start-2
            "
                    >
                        <div className="flex justify-center relative w-full overflow-hidden rounded-[12px]">
                            <img
                                src={imglegalflow}
                                alt="LegalFlow"
                                className="h-48 sm:h-56 md:h-64 lg:h-[300px] object-contain"
                            />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-800">Landing Page</p>
                                <h3 className="text-xl md:text-2xl font-semibold text-stone-900">LegalFlow</h3>
                                <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium">
                                    En colaboración con{" "}
                                    <a
                                        href="https://syncra-team.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#2262EA] hover:underline font-bold"
                                    >
                                        Syncra
                                    </a>
                                    .
                                </p>
                            </div>
                            <a
                                href="https://legalflow.cl/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-500 hover:text-yellow-600 text-lg"
                            >
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>

                    {/* Card 4: Singani San Pedro */}
                    <div
                        className="
              rounded-[24px] border-2 border-[#2262EA] p-6 md:p-8 bg-white
              lg:col-span-3 lg:row-span-1 lg:row-start-2
            "
                    >
                        <div className="flex justify-center relative w-full overflow-hidden rounded-[12px]">
                            <img
                                src={imgSinganiSanPedro}
                                alt="Singani San Pedro"
                                className="h-48 sm:h-56 md:h-64 lg:h-[300px] object-contain"
                            />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-800">E-commerce</p>
                                <h3 className="text-xl md:text-2xl font-semibold text-stone-900">
                                    Singani San Pedro
                                </h3>
                                <p className="text-xs md:text-sm text-gray-500 mt-1">
                                    Tienda online que refleja la esencia y tradición de la marca.
                                </p>

                            </div>
                            <a
                                href="https://singanisanpedro.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-500 hover:text-yellow-600 text-lg"
                            >
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
