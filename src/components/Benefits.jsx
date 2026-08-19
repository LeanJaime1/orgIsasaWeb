// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Benefits = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="benefits"
      className="min-h-[calc(90vh-80px)] flex items-center py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white scroll-mt-[80px] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-900 font-semibold mb-3">
            Por qué elegirnos
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Todo lo que necesitás para crecer como productor.
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Te damos las compañías, la tecnología y el equipo de respaldo. Vos
            ponés el talento comercial.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start text-left cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:!bg-blue-600 transition-all duration-300 flex items-center justify-center mb-6 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-[#0066cc] group-hover:!text-white stroke-current transition-colors duration-300"
              >
                <line x1="12" x2="12" y1="2" y2="22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Comisiones competitivas
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Maximizá la rentabilidad de cada póliza con esquemas de comisiones
              atractivas, transparentes y diseñados para potenciar el
              crecimiento de tu cartera.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start text-left cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:!bg-blue-600 transition-all duration-300 flex items-center justify-center mb-6 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-[#0066cc] group-hover:!text-white stroke-current transition-colors duration-300"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Respaldo comercial
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Te ayudamos a cerrar negocios y resolvemos junto a vos los
              siniestros de tus asegurados.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start text-left cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:!bg-blue-600 transition-all duration-300 flex items-center justify-center mb-6 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-[#0066cc] group-hover:!text-white stroke-current transition-colors duration-300"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="M13 8l-3 4h4l-2 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Acompañamiento en siniestros
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Respaldo técnico y gestión activa ante las compañías en los
              momentos clave de tus clientes asegurados.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
