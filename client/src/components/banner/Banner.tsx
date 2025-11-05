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

  // Auto change slider & text every 7s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ImageSlider images={images}>
      {/* ===== LEFT COLUMN ===== */}
      <div className="text-left text-white space-y-4 sm:space-y-6 z-20 relative">
        {/* Top small label */}
        <p className="sm:font-nexa-bold font-dm-Light sm:text-sm text-[0.7rem] px-1 sm:px-3 py-1 sm:py-2 bg-white/20 w-fit rounded-xl backdrop-blur-md ring-[0.5px]">
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
            className="text-2xl sm:text-4xl md:text-6xl font-dm-ExLight leading-5 sm:leading-15"
          >
            {sliderTexts[currentIndex].h1}{" "}
            <span className="text-primary text-3xl sm:text-6xl font-nexa-bold inline-flex items-center gap-0 ">
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
              <span className="block -mt-2 sm:mt-2 text-2xl sm:text-6xl">
                {sliderTexts[currentIndex].span}
              </span>
            )}
          </motion.h1>
        </AnimatePresence>

        {/* Button */}
        <button className="sm:text-sm font-dm-Light text-[0.8rem] px-2 sm:px-6 rounded-lg cursor-pointer py-1 sm:py-3 hover:bg-white/20 backdrop-blur-sm ring-primary ring-1 bg-primary text-white transition-colors">
          Get Started
        </button>
      </div>

      {/* ===== RIGHT COLUMN ===== */}
      <div
        className="
          sm:relative absolute 
          sm:top-auto top-[20%] 
          sm:left-auto left-1/2 sm:-translate-x-0 -translate-x-1/2 
          sm:translate-y-0 -translate-y-[10%]
          sm:opacity-100 opacity-60
          max-w-md mx-auto  h-auto
        "
      >
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
          className="absolute z-20 overflow-hidden ring-animate hidden sm:block"
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
          className="sm:bg-white/20 sm:backdrop-blur-md sm:border  border-white/20 rounded-2xl text-white shadow-lg w-full h-auto px-2 relative mt-0 sm:mt-24"
        >
          {/* Header */}
          <div className="container hidden sm:block pt-2 sm:flex items-center gap-2 px-5 sm:px-0">
            <div className="w-5 h-5 sm:w-10 sm:h-10 ">
              <img
                src="/images/flag.png"
                className="w-full h-full p-1 rounded-full"
                alt="flag"
              />
            </div>
            <p className="font-dm-Light text-[0.7rem] sm:text-sm text-gray-300">
              Bangladesh (GMT+6){" "}
              <span className="text-primary font-bold text-md bg-black px-2 py-1 rounded-md">
                {time}
              </span>
            </p>
          </div>

          {/* Info Section */}
          <div className="absolute bottom-2 right-3 mt-6 hidden sm:block">
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
