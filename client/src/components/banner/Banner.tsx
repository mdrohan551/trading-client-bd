import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ImageSlider from "./ImageSlider";
import { images, sliderTexts } from "../../constant/Demodata";
import MapAnimation from "../Animation/MapAnimation";


const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [time, setTime] = useState(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
  );
  const [introFinished, setIntroFinished] = useState(false);

  // Time update
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
    }, 1000);
    const timeout = setTimeout(() => setIntroFinished(true), 3000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  // Auto change slider & text every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ImageSlider images={images}>
      <div className="text-left text-white space-y-6">
        {/* Top small label */}
        <p className="font-nexa-bold font-normal px-3 py-2 bg-white/20 w-fit rounded-xl backdrop-blur-md ring-[0.5px]">
          Unmatched World wide Reach
        </p>

        {/* Main H1 with dynamic text */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-dm-ExLight leading-15"
          >
            {sliderTexts[currentIndex].h1}{" "}
            <span className="text-primary font-nexa-bold inline-flex items-center gap-1">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "30px" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="h-[3px] bg-primary inline-block"
              />
              {sliderTexts[currentIndex].h2}
            </span>
            {/* span on new line */}
            {sliderTexts[currentIndex]?.span && (
              <span className="block mt-2">
                {sliderTexts[currentIndex].span}
              </span>
            )}
          </motion.h1>
        </AnimatePresence>


        {/* Button */}
        <button className="px-6 rounded-lg cursor-pointer py-3 hover:bg-white/20 backdrop-blur-sm ring-primary ring-1 bg-primary text-white transition-colors">
          Get Started
        </button>
      </div>

      {/* Right Column (Profile + Map + Card) */}
      <div className="relative mt-0 max-w-md mx-auto w-full h-auto">
        {/* Profile Image Animation */}
        <motion.div
          initial={{
            width: 300,
            height: 300,
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            borderRadius: "1rem",
          }}
          animate={{
            width: introFinished ? 96 : 300,
            height: introFinished ? 96 : 300,
            x: introFinished ? -60 : "-50%",
            y: introFinished ? 0 : "-50%",
            top: introFinished ? "80%" : "50%",
            left: introFinished ? "0" : "50%",
            borderRadius: introFinished ? "0.75rem" : "1rem",
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute z-20 overflow-hidden ring-animate"
        >
          <img
            src="/images/Suman.jpg"
            className="w-full h-full object-cover rounded-xl"
            alt="Suman"
          />
        </motion.div>

        {/* Name under full-size image */}
        {!introFinished && (
          <motion.h2
            className="absolute top-[calc(50%+160px)] left-1/2 -translate-x-1/2 text-white text-2xl font-bold z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hi, I am Suman
          </motion.h2>
        )}

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introFinished ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl text-white shadow-lg w-full h-auto px-2 relative mt-24"
        >
          {/* Header */}
          <div className="container pt-2 flex items-center gap-2">
            <div className="w-10 h-10">
              <img
                src="/images/flag.png"
                className="w-full h-full p-1 rounded-full"
                alt="flag"
              />
            </div>
            <p className="font-dm-Light text-sm text-gray-300">
              Bangladesh (GMT+6){" "}
              <span className="text-primary font-bold text-md bg-black px-2 py-1 rounded-md">
                {time}
              </span>
            </p>
          </div>

          {/* Info Section */}
          <div className="absolute bottom-2 right-3 mt-6">
            <div className="flex items-center gap-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-2 shadow-lg text-white relative z-10 ml-12">
              <div>
                <h2 className="font-nexa-bold text-lg mb-1">
                  Track Your Shipment
                </h2>
                <p className="font-dm-Light text-sm text-gray-300">
                  Enter your tracking number to get real-time updates on your
                  shipment status.
                </p>
              </div>
            </div>
          </div>

          {/* Map Animation */}
          <MapAnimation />
        </motion.div>
      </div>
    </ImageSlider>
  );
};

export default Banner;
