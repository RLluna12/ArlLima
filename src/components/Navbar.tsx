import { useState, useEffect } from "react";
import { Phone, ScrollText, Truck } from "lucide-react";

export default function Navbar({ onQuoteClick }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-lg" : "bg-white/95"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-2">
                        <img
                            className="w-10"
                            src="/images/Logo.png"
                            alt="Logo"
                        />

                        <a href="footer">
                            {" "}
                            <span className="text-2xl font-bold text-gray-800">
                                ArlLima
                            </span>
                        </a>
                    </div>

                    {/* Botão do menu mobile */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-600 hover:text-gray-900 transition"
                        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    >
                        {isMenuOpen ? (
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M18 6L6 18M6 6l12 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M3 12h18M3 6h18M3 18h18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </button>

                    {/* Links */}
                    <div
                        className={`md:flex md:items-center md:space-x-8 ${
                            isMenuOpen ? "block" : "hidden"
                        } absolute md:static bg-white top-20 left-0 w-full md:w-auto md:shadow-none shadow-lg`}
                    >
                        <a
                            href="#services"
                            className="block md:inline-block text-gray-600 hover:text-gray-900 py-2 px-4 transition-colors"
                        >
                            <Truck size={20} className="inline-block mr-2" />
                            Serviços
                        </a>
                        <a
                            href="#about"
                            className="block md:inline-block text-gray-600 hover:text-gray-900 py-2 px-4 transition-colors"
                        >
                            <ScrollText
                                size={20}
                                className="inline-block mr-2"
                            />
                            Sobre
                        </a>
                        <a
                            href="#contact"
                            className="block md:inline-block text-gray-600 hover:text-gray-900 py-2 px-4 transition-colors"
                        >
                            <Phone size={20} className="inline-block mr-2" />
                            Contato
                        </a>
                        <button
                            onClick={onQuoteClick}
                            className="block md:inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition mx-4 my-2 md:my-0"
                        >
                            Solicitar Cotação
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
