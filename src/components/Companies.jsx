const Companies = () => {
  const companies = [
    "ATM",
    "Prof Seguros",
    "Río Uruguay",
    "Digna",
    "La Equidad Seguros",
    "Euroamérica",
    "Beneficio",
    "San Cristóbal",
    "Sancor Seguros",
    "La Holando",
  ];

  
  const marqueeList = [...companies, ...companies];

  return (
    <section className="bg-gray-50 border-y border-gray-100 py-12 overflow-hidden height-[150px] sm:height-[200px] md:height-[250px] lg:height-[300px]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-8">
        <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500   font-bold">
          Trabajamos con las compañías líderes del mercado
        </p>
      </div>

      
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        
        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {marqueeList.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6   flex items-center justify-center hover:border-blue-900 transition-colors duration-300"
            >
              <p className="font-semibold lg:p-8 text-gray-300 text-md sm:text-2xl whitespace-nowrap hover:text-black transition-colors duration-300">
                {company}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Companies;