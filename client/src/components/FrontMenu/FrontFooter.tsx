import React, { useState } from 'react'
import MapSection from '../OurSuccess/MapSection'
import { headerContact, headerSocialMenu, topMenu } from '../../constant/Demodata'

import { toast } from "react-hot-toast";
import { ArrowRight } from 'lucide-react';
const FrontFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const handleSignUp = () => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast.error("Email is required");
      return;
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    // Success
    toast.success("Signed up successfully!");
    setEmail(""); // clear input
  };

  return (
    <footer className='mt-20 mb-5 px-4 sm:px-8'>
      <div className="pb-5">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-10">

          {/* Logo + Newsletter */}
          <div className="col-span-1 sm:col-span-3 flex flex-col justify-center">
            <div className="col-span-6 md:col-span-2 flex items-center justify-start px-5 sm:px-9">
              <img
                src="/images/pngmainlogo.png"
                className="w-20 sm:w-30 filter brightness-0 invert"
                alt="logo"
              />
            </div>
            <p className='font-dm-Light text-sm sm:text-sm pt-3 sm:pt-5 text-white'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
            </p>
            <div className="w-full max-w-md mx-auto relative mt-4">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 sm:py-3 rounded-xl border border-rose-500 bg-gray-50 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300 hover:ring-4 hover:ring-rose-400 hover:shadow-md pr-24 sm:pr-32 text-sm sm:text-base"
              />
              <button
                onClick={handleSignUp}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-20 sm:w-20 h-full text-white bg-primary rounded-xl font-semibold text-xs sm:text-sm ring ring-primary transition-all duration-300"
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="col-span-1 sm:col-span-3 flex flex-col justify-center gap-4 sm:gap-5 text-white mt-4 sm:mt-0">
            <h2 className='text-2xl sm:text-4xl font-dm-Bold'>Get In Touch</h2>
            <ul className="flex flex-col gap-1 sm:gap-2 text-sm sm:text-sm">
              {headerContact.map((item, idx) => {
                let href = "#";
                if (item.type === "phone") href = `callto:${item.value}`;
                else if (item.type === "email") href = `mailto:${item.value}`;
                else if (item.type === "location") href = item.value;

                return (
                  <li key={idx} className="flex items-center">
                    <a
                      href={href}
                      target={item.type === "location" ? "_blank" : undefined}
                      rel={item.type === "location" ? "noopener noreferrer" : undefined}
                      className="flex items-center hover:text-primary transition-colors duration-200"
                    >
                      <item.icon size="14px" />
                      <span className="ml-2">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="flex gap-3 pt-2 sm:pt-5">
              {headerSocialMenu.map((item, idx) => (
                <li key={idx} className="flex items-center font-dm-Light text-sm ring-[1px] p-[0.2rem] rounded-md ring-primary bg-primary">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors duration-200">
                    <item.icon size="18px" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 sm:col-span-3 flex flex-col justify-center gap-4 sm:gap-6 mt-4 sm:mt-0">
            <h2 className="text-2xl sm:text-4xl font-dm-Bold text-white mb-2 sm:mb-4">Quick Links</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-sm sm:text-sm">
              {topMenu.map((menu, idx) => (
                <li key={idx}>
                  <a href={menu.href} className="group flex items-center text-gray-300 hover:text-rose-500 transition-colors duration-200">
                    <ArrowRight className="mr-2 transition-transform duration-200 group-hover:translate-x-2" size={16} />
                    <span>{menu.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Section */}
          <div className="col-span-1 sm:col-span-3 mt-4 sm:mt-0">
            <MapSection />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="grid grid-cols-1 sm:grid-cols-12 text-gray-400 items-center gap-2 py-4 border-t border-gray-700 mt-8">
        <div className="col-span-1 sm:col-span-6 text-center sm:text-left">
          <p className="text-sm">
            © <a href="#" className="hover:underline text-primary underline">AOSLanD</a>. All Rights Reserved.
          </p>
        </div>
        <div className="col-span-1 sm:col-span-6 text-center sm:text-right mt-2 sm:mt-0">
          <p className="text-sm">
            {"</>"} Developed by <a href="http://codecraft.azimemil.xyz/" target='_blank' className="underline text-primary">CodeCraft</a>
          </p>
        </div>
      </div>
    </footer>

  )
}

export default FrontFooter