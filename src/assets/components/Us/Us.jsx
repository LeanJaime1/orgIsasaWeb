import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Us.css';

const Us = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.section
      className="us-section"
      id="us"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="container">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos una organización de seguros con más de 15 años de trayectoria brindando soluciones integrales a productores en todo el país. Nuestro equipo está conformado por profesionales con más de 30 años de experiencia en el sector, que han trabajado en compañías líderes y conocen en profundidad las dinámicas del mercado asegurador.
        </p>
        <p>
          Esta base sólida nos permite ofrecer un servicio cercano, eficiente y adaptado a las necesidades reales de quienes producen seguros. 
          Entendemos el negocio desde adentro y acompañamos a cada productor con herramientas comerciales, asesoramiento estratégico y una estructura pensada para facilitar el crecimiento sostenido.
        </p>
        <p className='hide-mobile'>
          En un mercado que exige agilidad y respaldo, somos un aliado confiable para que te enfoques en lo que mejor sabés hacer: vender y asesorar con confianza.
        </p>
      </div>
    </motion.section>
  );
};

export default Us;
