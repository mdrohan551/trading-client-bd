import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const ServicesText: React.FC = () => {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col justify-center py-16 space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      transition={{ duration: 0.6 }}
    >
      {/* Tag */}
      <motion.div
        className="inline-block bg-primary text-white text-sm font-bold px-4 py-1 rounded-full w-fit"
        variants={containerVariants}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Service Overview
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-semibold leading-tight text-gray-800"
        variants={containerVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Navigate global trade with <br /> trusted ocean logistics
      </motion.h1>

      {/* Paragraphs */}
      <motion.p
        className="text-gray-600 text-lg leading-relaxed"
        variants={containerVariants}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Need to optimize production or deliver time-critical goods? Ocean Contract ensures
        a smoother supply chain with flexible setup, clear insights, and reliable global delivery.
      </motion.p>

      <motion.p
        className="text-gray-600 text-lg leading-relaxed"
        variants={containerVariants}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Ocean Contract provides you with access to real-time data on all your ocean lanes
        with its Allocation Portal.
      </motion.p>

      {/* Button */}
      <motion.div
        variants={containerVariants}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <button className="px-6 rounded-lg py-3 hover:bg-white/20 backdrop-blur-sm ring-primary ring-1 bg-primary text-white hover:text-primary cursor-pointer transition-all flex items-center gap-2">
          <span>Ship now</span>
          <ArrowUpRight size={18} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ServicesText;
