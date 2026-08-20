const Footer = () => {
  return (
    <footer className="bg-[#051329] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80 text-left">
          {/* Columna 1: Logo y Redes */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="logo-footer.png"
                alt="Logo Organización Isasa"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Más de 30 años impulsando la carrera de los productores.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/organizacionisasa/"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 border border-white/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/organizacion-isasa-4438a6366/"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0077b5] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 border border-white/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="mailto:organizacionisasa@gmail.com"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#ea4335] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 border border-white/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Datos de Contacto */}
          <div className="flex flex-col items-start">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
              Contacto
            </p>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#0066cc] flex-shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:organizacionisasa@gmail.com"
                  className="break-all hover:text-white transition-colors duration-200"
                >
                  organizacionisasa@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#0066cc] flex-shrink-0 mt-1"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Av. Belgrano 1217, Piso 8, Oficina 83<br />
                  Ciudad Autónoma de Buenos Aires
                </span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Enlaces Rápidos */}
          <div className="flex flex-col items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
                Secciones
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <a
                    href="#nosotros"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Beneficios
                  </a>
                </li>
                <li>
                  <a
                    href="#elements"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Coberturas
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 4: Mapa */}
          <div className="flex flex-col items-start">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
              Dónde estamos
            </p>
            <div className="relative w-full h-[180px] rounded-2xl overflow-hidden border border-slate-800">
              <iframe
                title="Ubicación Organización Isasa"
                src="https://maps.google.com/maps?q=Av.+Corrientes+1217,+Buenos+Aires&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              ></iframe>
              <a
                href="https://maps.google.com?q=Av.+Corrientes+1234,+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 left-2 bg-[#051329]/90 hover:bg-[#051329] text-white text-xs font-medium px-2.5 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 backdrop-blur-sm transition-colors duration-200"
              >
                Abrir en Maps
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior: Copyright + Créditos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
            <p>© 2026 Organización Isasa. Todos los derechos reservados.</p>
            <span className="hidden sm:inline text-slate-600">·</span>
            <p>Buenos Aires, Argentina</p>
          </div>

          <p className="text-center sm:text-right">
            Diseño y desarrollo web por {" "}
            <a
              href="https://wa.me/54911XXXXXXXX?text=Hola%20Lean..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 font-medium hover:text-[#0066cc] transition-colors duration-200 inline-flex items-center gap-1 underline underline-offset-4 decoration-slate-700 hover:decoration-[#0066cc]"
            >
               Lean Jaime
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3 opacity-70"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
