// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="relative bg-white min-h-[calc(90vh-80px)] flex items-center py-12 md:py-16 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between text-left"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-800 border border-slate-200 rounded-full px-4 py-1.5 mb-8 bg-white shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#0066cc]"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                Organización de Seguros · Trayectoria y respaldo profesional
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#0a192f]">
                Hacé crecer tu <br />
                negocio como <br />
                <span className="text-blue-800">productor de seguros</span>.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-500 font-normal leading-relaxed max-w-xl">
                Somos una organización con más de 30 años en el mercado
                asegurador argentino. Si sos productor asesor o querés comenzar
                tu camino en la profesión te damos las compañías, la tecnología
                y el respaldo para desarrollar tu cartera.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-blue-800 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#0052a3] transition-colors duration-200 shadow-md shadow-blue-500/10"
                >
                  Quiero sumarme
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Experiencia y trayectoria en el mercado",
                "Coberturas a medida",
                "Acompañamiento permanente",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#0066cc]"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[620px]">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <img
                src="banner.jpg"
                alt="Familia protegida en su hogar"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-4 -right-3 sm:-right-4 bg-[#0a192f] text-white rounded-2xl shadow-xl px-5 py-3 text-left z-10"
            >
              <p className="font-bold text-lg leading-tight">10 compañías</p>
              <p className="text-xs text-slate-300 mt-0.5">
                líderes del mercado
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -left-3 sm:-left-6 bg-white rounded-2xl shadow-xl border border-slate-100 px-5 py-4 flex items-center gap-4 z-10"
            >
              <span className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-[#0066cc]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              <div className="text-left">
                <p className="font-bold text-[#0a192f] text-lg leading-tight">
                  +30 años
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  de trayectoria en seguros
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </main>
  );
}