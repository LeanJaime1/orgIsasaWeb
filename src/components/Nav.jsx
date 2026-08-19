import { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 left-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        <a href="index.html" className="flex-shrink-0">
          <img
            src="src/assets/logo.png"
            alt="Logo Organización Isasa"
            className="h-12 w-auto object-contain"
          />
        </a>

        <ul className="hidden min-[1020px]:flex items-center gap-8 xl:gap-12">
          <li>
            <a
              href="#nosotros"
              className="relative py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="#benefits"
              className="relative py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              Beneficios
            </a>
          </li>
          <li>
            <a
              href="#elements"
              className="relative py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              Coberturas
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contacto
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="hidden min-[1020px]:inline-flex items-center justify-center bg-blue-800 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-blue-900 transition-colors duration-300 shadow-md shadow-blue-900/20 flex-shrink-0"
        >
          Trabajá con nosotros
        </a>

        <button
          onClick={toggleMenu}
          className="min-[1020px]:hidden text-gray-800 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {isMenuOpen && (
        <div className="min-[1020px]:hidden bg-white border-t border-gray-100 px-6 py-6 shadow-xl absolute w-full left-0">
          <ul className="flex flex-col gap-5 items-center">
            <li>
              <a
                href="#nosotros"
                onClick={closeMenu}
                className="block text-base font-semibold text-gray-700 hover:text-blue-900 transition-colors"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                onClick={closeMenu}
                className="block text-base font-semibold text-gray-700 hover:text-blue-900 transition-colors"
              >
                Beneficios
              </a>
            </li>
            <li>
              <a
                href="#elements"
                onClick={closeMenu}
                className="block text-base font-semibold text-gray-700 hover:text-blue-900 transition-colors"
              >
                Coberturas
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block text-base font-semibold text-gray-700 hover:text-blue-900 transition-colors"
              >
                Contacto
              </a>
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <button
              onClick={closeMenu}
              className="w-full px-5 py-3.5 text-white bg-blue-800 border-2 border-blue-900 rounded-full font-bold transition-all duration-300 hover:bg-transparent hover:text-blue-900"
            >
              Trabajá con nosotros
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
