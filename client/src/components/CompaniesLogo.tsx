import React from "react";
import Marquee from "react-fast-marquee";
import { companyLogos } from "../constant/Demodata";

const CompaniesLogo: React.FC = () => {
  return (
    <div className="relative py-10 bg-white text-center container mx-auto overflow-hidden">
      <h2 className="text-gray-500 text-3xl font-medium py-5 pb-10 font-dm-Bold">
        <span className="text-primary ">Partners</span> of world leading companies
      </h2>

      {/* Fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Marquee */}
      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        <div className="flex gap-16 items-center">
          {companyLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain opacity-100 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default CompaniesLogo;
