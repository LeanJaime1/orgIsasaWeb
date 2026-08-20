// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Elements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const elements = [
    {
      name: "Autos",
      description: "Todo riesgo, terceros completo y granizo. Flotas incluidas.",
      icon: (
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
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
    },
    {
      name: "Motos",
      description: "Coberturas flexibles para uso diario, de trabajo o deportivo.",
      icon: (
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
          <circle cx="18.5" cy="17.5" r="3.5" />
          <circle cx="5.5" cy="17.5" r="3.5" />
          <circle cx="15" cy="5" r="1" />
          <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
        </svg>
      ),
    },
    {
      name: "Hogar",
      description: "Protección para tu vivienda, tus bienes y tu familia.",
      icon: (
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
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      name: "Comercio",
      description: "Coberturas para tu negocio, pyme o emprendimiento.",
      icon: (
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
          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
          <path d="M2 7h20" />
          <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
        </svg>
      ),
    },
    {
      name: "Vida",
      description: "Planes de ahorro y protección para vos y tu familia.",
      icon: (
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
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      name: "Salud",
      description: "Coberturas médicas y asistencia integral para vos y tu familia.",
      icon: (
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
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      name: "Caución",
      description: "Garantías y seguros de caución para tu negocio.",
      icon: (
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
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      name: "Accidentes personales",
      description: "Protección ante accidentes y lesiones personales.",
      icon: (
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
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <main
        id="elements"
        className="min-h-[calc(90vh-80px)] relative bg-blue-50 py-12 md:py-20 overflow-hidden border-y border-gray-100 scroll-mt-[80px]"
      >
        <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs text-start sm:text-sm uppercase tracking-widest text-blue-900 font-semibold mb-3">
              Nuestros Ramos
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight max-w-2xl">
                Un portafolio completo para ofrecer a tus clientes.
              </h2>
              <div className="flex justify-start md:justify-end flex-shrink-0">
                <a
                  className="text-lg inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-900 transition-colors duration-300"
                  href="#contact"
                >
                  Quiero conocer más
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {elements.map((element, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start text-left hover:bg-white hover:border-blue-100"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 transition-all duration-300 flex items-center justify-center mb-6 flex-shrink-0">
                  {element.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {element.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {element.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Elements;