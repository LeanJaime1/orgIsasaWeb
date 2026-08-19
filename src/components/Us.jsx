// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Us = () => {
  return (
    <section
      id="nosotros"
      className="min-h-[calc(90vh-80px)] flex items-center border-y border-gray-100 py-16 lg:py-24 scroll-mt-[80px] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px]"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="us.jpg"
                alt="Sobre Nosotros"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-blue-800 text-white rounded-2xl shadow-xl px-6 py-4 text-left z-10 flex items-center gap-4">
              <div className="flex-shrink-0 bg-white/10 p-2.5 rounded-xl border border-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-white"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>

              <div>
                <p className="font-bold text-lg sm:text-xl leading-tight">
                  Desde 2010
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Junto a nuestros productores.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col text-left"
          >
            <span className="text-xs sm:text-sm uppercase tracking-widest text-blue-900 font-semibold mb-2">
              Sobre nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Una organización que pone al productor en el centro.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              En Organización Isasa creemos que el productor es el corazón del
              negocio asegurador. Por eso construimos una estructura pensada
              para que vos te dediques a vender: nosotros nos ocupamos del
              back-office, la tecnología y la relación con las compañías.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {[
                "Atención personalizada y cercana",
                "Experiencia y trayectoria en el mercado",
                "Gestión rápida y eficiente de siniestros ",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-start gap-3 text-sm sm:text-base text-slate-600 font-medium"
                >
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
                    className="text-blue-900 flex-shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Us;