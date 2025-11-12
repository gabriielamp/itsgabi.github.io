import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTopBtn() {
  const [visible, setVisible] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Función scroll arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="
        fixed z-[9999] left-6 p-3 bottom-[calc(16px+env(safe-area-inset-bottom))] sm:left-6 sm:bottom-6 m-4 sm:m-6
          rounded-full bg-[#2262EA] text-white shadow-lg hover:bg-blue-700 transition duration-300"
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
}
