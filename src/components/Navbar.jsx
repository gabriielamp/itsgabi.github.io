import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Isologo from "../assets/images/icons/LOGO.svg";
import Logo from "../assets/images/icons/Logo-Vec.svg"; // tu versión móvil

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#acerca", label: "Acerca de mí" },     // ✅ nuevo
  { href: "#soluciones", label: "Soluciones" },
  { href: "#proceso", label: "Proceso" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#testimonios", label: "Testimonios" },
];

export default function Navbar() {
  const [active, setActive] = useState("#inicio");
  const [open, setOpen] = useState(false);

  // Inicializa activo según el hash actual (ej: #proceso)
  useEffect(() => {
    const initial = window.location.hash || "#inicio";
    setActive(initial);
  }, []);

  // Scroll-spy determinístico (centro del viewport)
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const pickActive = () => {
      const viewportCenter = window.innerHeight / 2;
      let current = sections[0]?.id || "inicio";
      let bestDelta = Infinity;

      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        const delta = Math.abs(rect.top - viewportCenter);
        const entered = rect.top <= viewportCenter && rect.bottom >= 0;
        if (entered && delta < bestDelta) {
          bestDelta = delta;
          current = el.id;
        }
      }

      // Fallback: al fondo de la página marca la última
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = sections.at(-1)?.id || current;
      }

      setActive(`#${current}`);
    };

    // Inicial + eventos
    pickActive();
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          pickActive();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", pickActive);
    window.addEventListener("popstate", pickActive);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", pickActive);
      window.removeEventListener("popstate", pickActive);
    };
  }, []);

  // Esc + bloqueo de scroll cuando open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.classList.toggle("overflow-hidden", open);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  const linkBase =
    "relative px-2 py-2 text-[15px] lg:text-[15px] transition-colors hover:text-blue-600";

  // Maneja click para cerrar drawer y marcar activo al instante
  const handleNavClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white backdrop-blur border-b">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-600/10 via-indigo-400/5 to-transparent"
      />
      <nav className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2.5 flex items-center justify-between font-poppins">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          {/* Logo grande (solo visible en pantallas grandes) */}
          <div className="hidden lg:grid w-40 h-auto xl:w-40 xl:h-auto place-items-center">
            <img
              src={Logo}
              alt="Logo Gabriela"
              className="w-auto h-full object-contain"
              draggable="false"
            />
          </div>

          {/* Logo pequeño (visible en tablet y móvil) */}
          <div className="grid lg:hidden w-12 h-12 shadow-sm place-items-center overflow-hidden">
            <img
              src={Isologo}
              alt="Logo Gabriela (versión móvil)"
              className="w-full h-full object-contain"
              draggable="false"
            />
          </div>
        </a>

        {/* Botón hamburguesa visible hasta lg */}
        <button
          type="button"
          className="p-0 lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg  bg-white text-gray-800 shadow-sm active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition"
          aria-label="Abrir menú"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <Menu className="w-6 h-6 text-gray-700" strokeWidth={2.2} />
        </button>

        {/* Menú desktop SOLO desde lg (para que tablet use drawer) */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-10 text-stone-900">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleNavClick(href)}
                className={`${linkBase} ${active === href ? "text-blue-600" : "text-[#282828]"}`}
              >
                {label}
                <span
                  className={`absolute left-1/2 -bottom-1 h-[3px] rounded-full bg-blue-600/90 transition-all -translate-x-1/2 ${active === href ? "w-6" : "w-0"
                    }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA solo desde lg para no apretar tablet */}
        <a
          href="https://wa.me/59175660196?text=Hola%20Gabi%2C%20vi%20tu%20portfolio%20y%20quiero%20una%20web.&amp;utm_source=portfolio&amp;utm_medium=whatsapp_fab" target="_blank" rel="noopener noreferrer"
          className="hidden lg:inline-block px-6 py-1 rounded-full font-bold text-white bg-gradient-to-r from-amber-300 to-orange-500 hover:text-white shadow-lg hover:translate-y-[-1px] active:translate-y-0 transition"
        >
          Contáctame
        </a>
      </nav>

      {/* Overlay + Panel mobile/tablet */}
      <div
        className={`fixed inset-0 bg-black/40 lg:hidden transition-opacity duration-200 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-menu"
        className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-xl lg:hidden transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-end  px-4 py-3 border-b">
          {/* Botón cerrar */}
          <button
            type="button"
            className="p-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white text-gray-800 shadow-sm active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <X className="w-6 h-6 text-gray-700" strokeWidth={2.2} />
          </button>
        </div>

        <nav className="px-4 py-4">
          <ul className="space-y-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`block rounded-lg px-3 py-2 text-[16px] ${active === href ? "text-blue-600 bg-blue-50" : "text-[#282828] hover:bg-gray-50"
                    }`}
                  onClick={() => handleNavClick(href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a
              href="#contacto"
              className="block w-full text-center px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-amber-300 to-orange-500 shadow-md active:translate-y-px"
              onClick={() => setOpen(false)}
            >
              Contáctame
            </a>
          </div>
        </nav>

        <div className="mt-auto absolute bottom-0 left-0 right-0 px-4 py-3 border-t text-xs text-gray-500">
          © {new Date().getFullYear()} Gabriela Morón
        </div>
      </aside>
    </header>
  );
}
