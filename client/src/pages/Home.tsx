import React, { useEffect } from 'react'
import Banner from '../components/banner/Banner'
import FrontNav from '../components/FrontMenu/FrontNav'
import TopNav from '../components/TopNav/TopNav'
import CompaniesLogo from '../components/CompaniesLogo'
import ServicesImage from '../components/services/ServicesImage'

import { gsap } from "gsap"

import OwnerSection from '../components/OurBuisness/OwnerSection'

import Oursuccess from '../components/OurSuccess/Oursuccess'
import OurBuisness from '../components/services/OurBuisness'
import FrontFooter from '../components/FrontMenu/FrontFooter'

const Home = (): React.ReactElement => {

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add(
      "custom-cursor",
      "fixed",
      "top-0",
      "left-0",
      "w-3",
      "h-3",
      "rounded-full",
      "border-2",
      "border-primary",
      "pointer-events-none",
      "z-50",
      "bg-primary",
    );
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX + 20,
        y: e.clientY + 20,
        duration: 0.15,
        ease: "power3.out"
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className=''>
      <TopNav />
      <div className='absolute z-1 top-15 right-0 left-0'>
        <FrontNav />
      </div>
      <div className="relative max-w-[1536px] mx-auto rounded-4xl overflow-hidden z-0 px-2 md:px-5 2xl:px-0">
        <Banner />
      </div>
      <CompaniesLogo />
      <div className='grid grid-cols-12 container mx-auto mt-0 sm:mt-10 sm:px-3 md:px-3 px-3 gap-6'>
        <div className="col-span-12 md:col-span-12 ">
          <ServicesImage />
        </div>
      </div>

      <div className='container mx-auto mt-0 sm:mt-15 bg-primary/3 rounded-2xl'>
        <OurBuisness />
      </div>
      <div className="container mx-auto mt-0 sm:mt-20">
        <OwnerSection />
      </div>
      <div className=" container mx-auto mt-0 sm:mt-20">
        <Oursuccess />
      </div>
      <div className=" bg-gradient-to-r from-gray-900 via-gray-850 to-gray-900 p-6 rounded-t-[3rem]">
        <div className=" container mx-auto  ">
          <FrontFooter />
        </div>

      </div>
    </div>
  )
}
export default Home
