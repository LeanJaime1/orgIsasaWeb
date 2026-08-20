const Companies = () => {
  const companies = [
    { nombre: "ATM", logo: "/atm.png" },
    { nombre: "Beneficio", logo: "/beneficio.png" },
    { nombre: "Equidad", logo: "/equidad.png" },
    { nombre: "Euroamerica", logo: "/euroamerica.png" },
    { nombre: "Holando", logo: "/holando.png" },
    { nombre: "Prof Seguros", logo: "/prof-seguros.png" },
    { nombre: "Rus", logo: "/rus.png" },
    { nombre: "Sancor", logo: "/sancor.png" },
    { nombre: "San Cristóbal", logo: "/san-cristobal.png" },
    { nombre: "Digna", logo: "/digna.png" }
  ];

  const marqueeList = [...companies, ...companies];

  return (
    <section className="bg-gray-50 border-y border-gray-100 py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-14">
        <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-bold">
          Trabajamos con las compañías líderes del mercado
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="animate-marquee flex items-center gap-12 sm:gap-24 hover:[animation-play-state:paused]">
          {marqueeList.map((company, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-36 sm:w-44 h-12 sm:h-16 flex items-center justify-center px-2 cursor-pointer"
            >
              <div
                className="w-full h-full bg-gray-400 group-hover:bg-blue-800 transition-colors duration-300"
                style={{
                  maskImage: `url(${company.logo})`,
                  WebkitMaskImage: `url(${company.logo})`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                }}
                role="img"
                aria-label={company.nombre}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
