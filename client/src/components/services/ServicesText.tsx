import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion"; // ✅ type-only import

// Framer Motion variants
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: easeOut } // ✅ use function
  }),
};


const ServicesText: React.FC = () => {
    // Determine text colors based on context (white for large screens, black for small screens)
    const titleColor = "text-gray-500 md:text-white text-gray-800"; // Mobile: text-gray-800, Desktop: text-white
    const textColor = "text-gray-300 md:text-gray-300 text-gray-600"; // Mobile: text-gray-600, Desktop: text-gray-300

    return (
        <motion.div
            // Mobile: full width, Desktop: half-width
            className="flex flex-col justify-center py-5 sm:py-16 space-y-3 sm:space-y-6 w-full" 
            initial="hidden"
            whileInView="visible"    // Scroll into view trigger
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
            {/* Tag - Text Color adjusted */}
            <motion.div
                className="inline-block bg-primary/20 text-gray-900 md:text-white text-sm font-light px-4 py-2 rounded-full w-fit pointer-events-auto"
                variants={textVariants}
            >
                Service Overview
            </motion.div>

            {/* Title */}
            <motion.h1
                className={`text-xl sm:text-5xl font-dm-Bold capitalize md:text-6xl leading-snug sm:leading-15 tracking-tight drop-shadow-md ${titleColor}`}
                variants={textVariants}
            >
                Navigate global trade with
                <br className="hidden sm:block" /> trusted AOSLanD Trading Company
            </motion.h1>

            {/* Paragraphs */}
            <motion.p
                className={`text-sm sm:text-lg md:text-sm leading-relaxed  ${textColor}`}
                variants={textVariants}
            >
                For manufacturing and time-sensitive supply chains, Ocean Contract provides scalable
                ocean capacity, structured allocation control, and reliable end-to-end delivery
                performance.
            </motion.p>

            <motion.p
                className={`text-sm sm:text-lg md:text-sm  ${textColor}`}
                variants={textVariants}
            >
                The Allocation Portal supplies real-time lane-level visibility, enabling dynamic allocation
                decisions, disruption mitigation, and optimized lead-time management.
            </motion.p>

            {/* Button */}
            <motion.div variants={textVariants} className="pointer-events-auto">
                <button className="text-sm px-6 rounded-lg py-3 ring-primary ring-1 bg-primary text-white hover:bg-white hover:text-primary transition-all flex items-center gap-2 shadow-lg">
                    <span>Ship now</span>
                    <ArrowUpRight size={18} />
                </button>
            </motion.div>
        </motion.div>
    );
};

export default ServicesText;