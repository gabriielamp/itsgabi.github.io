import profileImg from "../assets//images/fotos/profile.png";

const experiences = [
  {
    date: "Ago 2021 – Jun 2022",
    role: "Desarrollador Web con WordPress",
    type: "Full Time",
    company: "Agencia de Desarrollo web Foco Azul",
  },
  {
    date: "Nov 2023 – Dec 2025",
    role: "Desarrollador Front-end",
    type: "Full Time",
    company: "RIA Ventures",
  },
  {
    date: "Dec 2025 – Now",
    role: "Desarrollador Front-end",
    type: "Freelancer",
    company: "AXENTIS Technology",
  },
];

export default function About() {
  return (
    <section
      id="acerca"
      className="mx-auto w-11/12 max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-24 font-poppins text-neutral-900"
    >
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
        {/* Imagen */}
        <div className="flex justify-center md:justify-start">
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-[315px] md:h-[315px] overflow-hidden rounded-2xl">
            <img
              src={profileImg}
              alt="Gabriela"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
          <div className="flex flex-col items-center md:items-start text-[#2262EA]">
            <span className="inline-block text-xs sm:text-sm tracking-[0.18em] uppercase opacity-90 font-figtree font-bold">
              Quién soy
            </span>
            <div className="mt-2 px-0 sm:px-0 py-2 font-passionate text-2xl sm:text-3xl md:text-4xl leading-tight">
              Diseño con intención y desarrollo con propósito
            </div>
          </div>

          <p className="mt-4 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
            Desarrolladora web con más de{" "}
            <strong>2 años de experiencia</strong> en creación de sitios
            atractivos y funcionales.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            Especialista en WordPress, diseño responsivo y experiencia de
            usuario, con un enfoque en soluciones innovadoras para potenciar la
            presencia digital de empresas.
            <span className="ml-1">🚀</span>
          </p>
        </div>
      </div>

      {/* Experiencia */}
      <div className="w-full border-t border-neutral-300">
        {/* Header tabla (solo md+) */}
        <div className="hidden md:grid grid-cols-12 py-4 text-sm font-semibold text-neutral-500">
          <span className="col-span-4">Título</span>
          <span className="col-span-5">Cargo</span>
          <span className="col-span-3">Empresa</span>
        </div>

        {/* Rows */}
        {experiences.map((item, index) => (
          <div
            key={index}
            className="
              py-6 sm:py-7 border-t border-neutral-300
              md:grid md:grid-cols-12 md:gap-6 md:items-start
            "
          >
            {/* Móvil: etiqueta + valor. Desktop: columna */}
            <div className="md:col-span-4">
              <p className="md:hidden text-xs uppercase tracking-wider text-neutral-500 mb-1">
                Título
              </p>
              <p className="text-sm sm:text-base">{item.date}</p>
            </div>

            <div className="mt-4 md:mt-0 md:col-span-5">
              <p className="md:hidden text-xs uppercase tracking-wider text-neutral-500 mb-1">
                Cargo
              </p>
              <p className="font-medium text-sm sm:text-base">{item.role}</p>
              <p className="text-xs sm:text-sm text-neutral-500">{item.type}</p>
            </div>

            <div className="mt-4 md:mt-0 md:col-span-3">
              <p className="md:hidden text-xs uppercase tracking-wider text-neutral-500 mb-1">
                Empresa
              </p>
              <p className="text-sm sm:text-base">{item.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
