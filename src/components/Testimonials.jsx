// src/components/Testimonials.jsx
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

import img1 from "../assets/images/testimonios/nata.jpg";
import img2 from "../assets/images/testimonios/ale.jpg";
import img3 from "../assets/images/testimonios/monica.png";
import img4 from "../assets/images/testimonios/ange.jpg";
import img5 from "../assets/images/testimonios/alec.jpg";

const testimonials = [
  {
    text:
      "Trabajar con Gabriela fue una experiencia muy buena. Entendió rápido lo que queríamos, cumplió con los tiempos y nos explicó todo con mucha claridad. La recomiendo sin dudar.",
    name: "Natalia Sanchez",
    role: "MARKETING MANAGER EN LEGACY",
    img: img1,
    linkedin: "https://www.linkedin.com/in/natalia-sanchez-1942a6231/",
  },
  {
    text:
      "Gabriela captó la idea desde el principio. Nos ayudó a mejorar varias cosas del proyecto y siempre estuvo pendiente de cada detalle. Muy comprometida con su trabajo.",
    name: "Alejandro Barja",
    role: "Gestor de proyectos",
    img: img2,
    linkedin: "https://www.linkedin.com/in/alejandrobarja/",
  },
  {
    text:
      "Destaco su comunicación constante y su forma de trabajar: ordenada, clara y profesional. El resultado final superó lo que teníamos en mente.",
    name: "Mónica Chávez",
    role: "Building Digital Economies",
    img: img3,
    linkedin: "https://www.linkedin.com/in/monica-chavez-rivera/",
  },
  {
    text:
      "Gabriela transformó nuestras ideas en una web funcional y muy linda. Todo el proceso fue fácil gracias a su organización y su forma de explicar.",
    name: "Angela Vega",
    role: "Ejecutiva de ventas",
    img: img4,
    linkedin: "https://www.linkedin.com/in/angela-vega-319591201/",
  },
  {
    text:
      "Tiene un gran equilibrio entre lo técnico y lo visual. Se nota que le importa la experiencia del usuario y eso se ve en el resultado final.",
    name: "Alex Mendizabal Alvarez",
    role: "Gestor de Producto en AXENTIS",
    img: img5,
    linkedin: "https://www.linkedin.com/in/alex-sonny-mendizabal-alvarez-8b095797/",
  },
];



function Card({ item }) {
  return (
    <div className="p-6 md:p-7 bg-white rounded-2xl h-full">
      <div className="text-left">
        <span className="text-6xl leading-none text-[#2262EA]">“</span>
        <p className="text-gray-600 text-sm md:text-[15px] mt-0">{item.text}</p>
      </div>
      <div className="flex items-center gap-3 mt-6">
        <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full" />
        <div className="text-left">
          <p className="font-semibold text-sm text-gray-700">{item.name}</p>
          <p className="text-xs text-gray-500">{item.role}</p>
          {item.linkedin && (
            <a
              href={item.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-1 text-[#2262EA] text-xs font-medium hover:underline"
            >
              <Linkedin size={14} />
              Ver perfil
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const autoplay = Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi && emblaApi.scrollTo(i), [emblaApi]);

  return (
    <section id="testimonios" className="bg-[#F0F3FF] py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8 font-poppins">
        {/* Título */}
        <div className="flex flex-col text-left">
          <h3 className="uppercase text-[11px] md:text-xs font-semibold text-gray-600 tracking-widest">
            Testimonios
          </h3>
          <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold mt-2 font-insaniburger">
            ¿Qué opinan las personas <span className="text-[#2262EA]">de mi trabajito?</span>
          </h2>
        </div>

        {/* Carrusel Embla */}
        <div className="relative mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-4">
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="pl-4 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 shrink-0"
                >
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Flechas */}
          <div className="mt-6 flex items-center justify-end gap-4">
            <button
              onClick={scrollPrev}
              aria-label="Anterior"
              className="p-3 bg-white shadow rounded-full hover:bg-gray-100 active:scale-95 transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Siguiente"
              className="p-3 bg-white shadow rounded-full hover:bg-gray-100 active:scale-95 transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
