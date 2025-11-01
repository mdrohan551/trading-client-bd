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
    <footer className=' mt-20 mb-5'>
      <div className=" pb-5">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3 flex flex-col justify-center">
            <div className=' flex items-center  justify-start'>
              <img src='/images/whitelogo.png' className='h-15 w-40 ' alt='logo' />
            </div>
            <p className='font-dm-Light text-sm pt-5 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
            <div className="w-full max-w-md mx-auto relative mt-5">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border border-rose-500 bg-gray-50 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300 hover:ring-4 hover:ring-rose-400 hover:shadow-md pr-32"
              />
              <button
                onClick={handleSignUp}
                className=" cursor-pointer absolute text-sm font-dm-Bold uppercase bg-primary right-0 top-1/2 transform -translate-y-1/2 w-20 h-full text-white rounded-xl font-semibold  ring ring-primary transition-all duration-300"
              >
                Sign Up
              </button>
            </div>



          </div>
          <div className="col-span-3 flex flex-col justify-center gap-5 text-white">
            <h2 className='text-4xl font-dm-Bold'>Get In Touch</h2>
            <ul className="flex flex-col   text-white ">

              {headerContact.map((item, idx) => {
                // ✅ href logic
                let href = "#";
                if (item.type === "phone") href = `callto:${item.value}`;
                else if (item.type === "email") href = `mailto:${item.value}`;
                else if (item.type === "location") href = item.value;

                return (
                  <li
                    key={idx}
                    className="flex items-center mt-1 font-dm-Light text-sm"
                  >
                    <a
                      href={href}
                      target={item.type === "location" ? "_blank" : undefined}
                      rel={item.type === "location" ? "noopener noreferrer" : undefined}
                      className="flex items-center hover:text-primary transition-colors duration-200"
                    >
                      <item.icon size="15px" />
                      <span className="ml-2">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="flex gap-5  pt-5 ">
              {headerSocialMenu.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center  font-dm-Light text-sm ring-[1px]  p-[0.2rem] rounded-md  ring-primary bg-primary  "
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  transition-colors duration-200"
                  >
                    <item.icon size="20px" />
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div className="col-span-3 flex flex-col justify-center gap-6">
            <h2 className="text-4xl font-dm-Bold text-white mb-4">Quick Links</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {topMenu.map((menu, idx) => (
                <li key={idx}>
                  <a
                    href={menu.href}
                    className="group flex items-center text-gray-300 hover:text-rose-500 transition-colors duration-200"
                  >
                    <ArrowRight className="mr-2 transition-transform duration-200 group-hover:translate-x-2" size={16} />
                    <span>{menu.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>



          <div className="col-span-3 ">
            <MapSection />
          </div>
        </div>



      </div>

      <div className="grid grid-cols-12 text-gray-400 items-center gap-2 py-4 border-t border-gray-700">
        <div className="col-span-12 sm:col-span-6">
          <p className="text-center sm:text-left text-sm">
            © <a href="#" className="hover:underline text-primary underline">AOSLanD</a>. All Rights Reserved.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6">
          <p className="text-center sm:text-right text-sm">
            Developed by <a href="https://mdrohan551.github.io/cardportfolioazimrohan/" target='_blank' className="underline text-primary">CodeCrafters </a>
          </p>
        </div>
      </div>

    </footer>
  )
}

export default FrontFooter