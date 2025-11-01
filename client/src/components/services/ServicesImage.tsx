import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { servicesimages } from "../../constant/Demodata";
import { motion } from "framer-motion";

const ServicesImage: React.FC = () => {
  const overlayRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Initial overlay setup
  useEffect(() => {
    overlayRefs.current.forEach((overlay) => {
      gsap.set(overlay, { scale: 0.9, opacity: 0 });
    });
  }, []);

  // Hover overlay animation
  const handleMouseEnter = (index: number) => {
    if (activeIndex === index) return;
    const overlay = overlayRefs.current[index];
    gsap.to(overlay, {
      scale: 1.05,
      opacity: 1,
      y: -20,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (index: number) => {
    if (activeIndex === index) return;
    const overlay = overlayRefs.current[index];
    gsap.to(overlay, {
      scale: 0.9,
      opacity: 0,
      y: 0,
      duration: 0.6,
      ease: "power3.inOut",
    });
  };

  // Click to expand image
  const handleClick = (index: number) => {
    if (activeIndex === index) {
      const overlay = overlayRefs.current[index];
      gsap.to(overlay, {
        scale: 0.9,
        opacity: 0,
        y: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      const overlay = overlayRefs.current[index];
      gsap.to(overlay, {
        scale: 1.5,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  };

  // 3D tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (activeIndex !== index) return;
    const overlay = overlayRefs.current[index];
    const rect = overlay.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    gsap.to(overlay, { rotationY: x, rotationX: -y, transformPerspective: 500, transformOrigin: "center", duration: 0.3 });
  };

  const handleMouseOut = (index: number) => {
    if (activeIndex !== index) return;
    const overlay = overlayRefs.current[index];
    gsap.to(overlay, { rotationY: 0, rotationX: 0, duration: 0.5 });
  };

  // Framer Motion variants for scroll fade/slide
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 md:min-h-[480px]">
        {servicesimages.map((img, idx) => (
          <motion.div
            key={img.id}
            className={`relative rounded-3xl overflow-hidden cursor-pointer group ${idx === 0 ? "md:row-span-2" : ""}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            onClick={() => handleClick(idx)}
            onMouseMove={(e) => handleMouseMove(e, idx)}
            onMouseOut={() => handleMouseOut(idx)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
    <div
  ref={(el) => {
    overlayRefs.current[idx] = el!; // ✅ no return
  }}
  className="absolute inset-0 bg-black/40 flex items-center justify-center"
>
  <img
    src={img.overlay}
    alt="Overlay"
    className="w-2/3 h-2/3 object-cover rounded-2xl shadow-lg"
  />
</div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesImage;
