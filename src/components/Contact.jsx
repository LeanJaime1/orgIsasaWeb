import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ramo: "Autos",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Reemplazá con tus claves obtenidas en emailjs.com
    const SERVICE_ID = "service_ymby2yi";
    const TEMPLATE_ID = "template_poia2s6";
    const PUBLIC_KEY = "qeUU-k58BsLsFSVvs";

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono,
          ramo: form.ramo,
          mensaje: form.mensaje,
        },
        PUBLIC_KEY
      );

      setForm({
        nombre: "",
        email: "",
        telefono: "",
        ramo: "Autos",
        mensaje: "",
      });
      setModalOpen(true);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Ocurrió un error al enviar el mensaje. Intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-24 scroll-mt-[80px] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          <div className="lg:col-span-6 flex flex-col text-left">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-blue-900 font-semibold mb-3">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a192f] leading-tight mb-6">
              Sumate a nuestro equipo de productores.
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              Si sos productor asesor de seguros o querés desarrollarte en la
              profesión, dejanos tus datos y nuestro equipo se comunica con vos
              dentro de las próximas 24 horas hábiles.
            </p>

            <div className="flex flex-col gap-4">
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#0066cc]">
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
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Email
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-0.5 truncate">
                    organizaciónisasa@gmail.com
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#0066cc]">
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
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Oficina
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-0.5">
                    Av. Corrientes 1217, Piso 8 · CABA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-100 text-left">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                    Nombre y apellido
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Juan Pérez"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-sm text-gray-700 transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="juan@mail.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-sm text-gray-700 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      required
                      placeholder="11 5555 5555"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-sm text-gray-700 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                    Ramo que más te interesa
                  </label>
                  <select
                    name="ramo"
                    value={form.ramo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-sm text-gray-700 bg-white transition cursor-pointer"
                  >
                    <option value="Autos">Autos</option>
                    <option value="Motos">Motos</option>
                    <option value="Hogar">Hogar</option>
                    <option value="Comercio">Comercio</option>
                    <option value="Vida">Vida</option>
                    <option value="Salud">Salud</option>
                    <option value="Caución">Caución</option>
                    <option value="Accidentes personales">Accidentes personales</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows="4"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    placeholder="Contanos tu experiencia como productor o tus ganas de empezar..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-sm text-gray-700 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 cursor-pointer bg-blue-800 hover:bg-blue-900 text-white font-bold py-3.5 px-6 rounded-full shadow-lg shadow-blue-500/20 transition-colors duration-300 disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Quiero sumarme"}
                  {!loading && (
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
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  Al enviar aceptás ser contactado por nuestro equipo. Tus datos están protegidos.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-gray-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0066cc] mx-auto flex items-center justify-center mb-4">
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
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0a192f] mb-2">
                ¡Gracias por contactarnos!
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Recibimos tus datos correctamente. Nuestro equipo se pondrá en contacto dentro de las próximas 24 horas hábiles.
              </p>
              <button
                onClick={closeModal}
                className="w-full bg-[#0a192f] hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 cursor-pointer"
              >
                Cerrar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;