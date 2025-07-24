import React from "react";
import Slider from "react-slick";
import "./Companies.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sancorLogo from "../../companies/sancor.png";
import atmLogo from "../../companies/atm.png";
import beneficioLogo from "../../companies/beneficio.png";
import equidadLogo from "../../companies/equidad.png";
import holandoLogo from "../../companies/holando.png";
import profsegurosLogo from "../../companies/profseguros.png";
import rusLogo from "../../companies/rus.png";

const logos = [
  sancorLogo,
  atmLogo,
  beneficioLogo,
  equidadLogo,
  holandoLogo,
  profsegurosLogo,
  rusLogo,
];

const Companies = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 4000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="empresas" className="companies" data-aos="fade-up">
      <Slider {...settings}>
        {logos.map((logo, i) => (
          <div key={i} className="logo-slide">
            <img src={logo} alt={`Logo ${i + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Companies;
