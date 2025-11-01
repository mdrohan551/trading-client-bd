import React, { useState, useEffect } from "react";
import type { ImageSliderProps } from "../../AllTypes/AuthInterface";

interface ExtendedImageSliderProps extends ImageSliderProps {
  children?: React.ReactNode;
}

const ImageSlider: React.FC<ExtendedImageSliderProps> = ({
  images,
  autoSlide = true,
  autoSlideInterval = 7000,
  children,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => nextSlide(), autoSlideInterval);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // const prevSlide = () =>
  //   setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-3xl">
      {/* 🖼️ Image Container */}
      <div className="relative w-full h-[450px] sm:h-[300px] md:h-[600px]">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* 🌫️ Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* 🧱 Content Layer (Two Columns without absolute positioning) */}
        <div className="relative z-10 w-full h-full flex items-center px-5 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
            {children}
          </div>
        </div>
      </div>

      {/* ◀️ Prev Button */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-primary p-2 rounded-full hover:bg-black/60 transition"
      >
        ❮
      </button> */}

      {/* ▶️ Next Button */}
      {/* <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-primary p-2 rounded-full hover:bg-primary/60 transition"
      >
        ❯
      </button> */}

      {/* ⚪ Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-6 h-1 rounded cursor-pointer transition-all duration-300 ${
              current === idx ? "bg-primary" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
