import React from "react";
import { servicesimages } from "../../constant/Demodata";
import { motion } from "framer-motion";

const MainVideoSection: React.FC = () => {
  const mainVideo = servicesimages[0]; 

  const videoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  if (!mainVideo || !mainVideo.video) return null;

  return (
    <motion.div
      className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={videoVariants}
    >
      <video
        src={mainVideo.video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        poster={mainVideo.src}
      />
      {/* ভিডিওর উপরে হালকা ওভারলে */}
      <div className="absolute inset-0 bg-black/20"></div>
    </motion.div>
  );
};

export default MainVideoSection;