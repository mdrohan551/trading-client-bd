import React from "react";
import Marquee from "react-fast-marquee";
import { companyLogos } from "../constant/Demodata";
import CommonSecTitle from "./CommonSecTitle";

const CompaniesLogo: React.FC = () => {
  return (
    <div className="relative py-10 bg-white text-center container mx-auto ">


      <CommonSecTitle title="Partners" description="of world leading companies" />

      {/* Fade overlays */}
      <div className="absolute left-0  top-20   sm:top-0 bottom-0 w-24 bg-gradient-to-r z-5 from-white to-transparent  pointer-events-none" />
      <div className="absolute right-0 top-20 sm:top-0 bottom-0 w-24 bg-gradient-to-l z-5 from-white to-transparent  pointer-events-none" />

      {/* Marquee */}
      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        <div className="flex gap-5 sm:gap-16 items-center pt-5 sm:pt-0">
          {companyLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-5 sm:h-12 w-auto object-contain opacity-100 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default CompaniesLogo;
