import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Hero.css";
import banner from "../../banner.jpg";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="hero"
      className="hero"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="hero-text-container">
        <h1>Impulsá tu carrera</h1>
        <p>
          Sumate a nuestra red de productores profesionales y accedé a un
          acompañamiento personalizado, capacitación constante y acceso exclusivo
          a las principales compañías de seguros. Potenciá tu cartera, optimizá
          tus ventas y crecé con el respaldo de un equipo comprometido con tu
          éxito.
        </p>
        <a href="#contacto" className="cta">
          Trabajá con nosotros
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
