// src/components/Footer.jsx
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaEnvelope,
    FaDribbble
} from "react-icons/fa";
import Logo from "../assets/images/icons/Logo-full.svg";

export default function Footer() {
    return (
        <footer className="bg-[#1E1E2F] text-white py-10 pt-16 pb-0 font-poppins">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                {/* Columna 1 */}
                <div>
                    <img src={Logo} alt="Logo" className="w-[80%] mb-4" />
                    {/* <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                        Desarrolladora web especializada en crear experiencias digitales
                        únicas que impulsan marcas y negocios.
                    </p> */}
                </div>

                {/* Columna 2 */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Enlaces rápidos</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>
                            <a href="#inicio" className="text-gray-400  font-normal hover:text-amber-600 transition">Inicio</a>
                        </li>
                        <li>
                            <a href="#about" className="text-gray-400  font-normal hover:text-amber-600 transition">Acerca de mí</a>
                        </li>
                        <li>
                            <a href="#work" className="text-gray-400  font-normal hover:text-amber-600 transition">Trabajos</a>
                        </li>
                        <li>
                            <a href="#solutions" className="text-gray-400  font-normal hover:text-amber-600 transition">Soluciones</a>
                        </li>
                        <li>
                            <a href="#testimonials" className="text-gray-400  font-normal hover:text-amber-600 transition">Testimonios</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-400  font-normal hover:text-amber-600 transition">Contacto</a>
                        </li>
                    </ul>
                </div>

                {/* Columna 3 */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Redes Sociales</h3>
                    <div className="flex gap-4">
                        {/* <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-3 text-white bg-[#2262EA] rounded-full hover:bg-blue-700 transition">
                            <FaFacebookF />
                        </a>
                        <a href="https://github.com/gabriielamp" target="_blank" rel="noreferrer" className="p-3 text-white bg-[#2262EA] rounded-full hover:bg-gray-600 transition">
                            <FaGithub />
                        </a>
                        */}
                        <a href="https://www.linkedin.com/in/gabriela-moron4537/" target="_blank" rel="noreferrer" className="p-3 text-white bg-[#2262EA] hover:text-white rounded-full hover:bg-blue-500 transition">
                            <FaLinkedinIn />
                        </a>
                        <a href="mailto:itsgabi.dev@gmail.com" className="p-3 text-white bg-[#2262EA] rounded-full hover:bg-red-500 hover:text-white transition">
                            <FaEnvelope />
                        </a>
                        <a href="https://www.instagram.com/itsgabi.dev/" target="_blank" rel="noreferrer" className="p-3 text-white bg-[#2262EA] rounded-full hover:bg-pink-600 hover:text-white transition">
                            <FaInstagram />
                        </a>
                        <a href="https://dribbble.com/Gmoron4537" target="_blank" rel="noreferrer" className="p-3 text-white bg-[#2262EA] rounded-full hover:bg-pink-500 hover:text-white transition">
                            <FaDribbble />
                        </a>
                    </div>
                </div>
            </div>

            {/* Línea inferior */}
            <div className="mt-10 border-t border-gray-700 pt-6 pb-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Gabriela Morón Pereira · Todos los derechos reservados.
            </div>
        </footer>
    );
}
