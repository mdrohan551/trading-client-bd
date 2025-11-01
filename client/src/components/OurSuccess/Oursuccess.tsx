import React, { useEffect, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { gsap } from "gsap";
import { segmentData } from "../../constant/Demodata";
import CommonSecTitle from "../CommonSecTitle";

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Oursuccess: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && sectionRef.current) {
      const circles = sectionRef.current.querySelectorAll(".progress-circle");
      circles.forEach((circle) => {
        const value = Number(circle.getAttribute("data-value"));
        gsap.fromTo(
          circle,
          { strokeDasharray: `0, 100` },
          {
            strokeDasharray: `${value}, 100`,
            duration: 1.5,
            ease: "power2.out",
          }
        );
      });
    }
  }, [isInView]);

  return (
    <div
      ref={sectionRef}
      className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-50 via-white to-gray-100 rounded-3xl shadow-sm overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CommonSecTitle
          title="OUR SUCCESS"
          description="Delivering trusted results through dedication, innovation, and excellence."
        />
      </motion.div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-items-center">
        {segmentData.map((item, index) => (
          <motion.div
            key={index}
            className="w-full max-w-[280px] flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true }}
          >
            {/* Donut Chart */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              <svg
                viewBox="0 0 36 36"
                className="w-full h-full transform -rotate-90"
              >
                {(() => {
                  let total = 0;
                  return item.segments.map((seg, i) => {
                    const circle = (
                      <circle
                        key={i}
                        cx="18"
                        cy="18"
                        r="15.915"
                        fill="none"
                        stroke={seg.color}
                        strokeWidth="4"
                        strokeDasharray="0, 100"
                        data-value={seg.value}
                        className="progress-circle"
                        strokeDashoffset={-total}
                        strokeLinecap="round"
                      />
                    );
                    total += (seg.value / 100) * 100;
                    return circle;
                  });
                })()}
              </svg>

              {/* Inner Text */}
              <div className="absolute bg-white w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center shadow-inner">
                <p className="text-center text-xs sm:text-sm font-semibold text-gray-700 px-2">
                  {item.title}
                </p>
              </div>
            </div>

            {/* Info Below Donut */}
            <div className="mt-5 space-y-2 text-start w-full">
              {item.segments.map((seg, i) => (
                <div
                  key={i}
                  className="text-xs sm:text-sm font-medium text-gray-700 flex gap-2 items-center"
                >
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: seg.color }}
                  ></span>
                  <span>{seg.label}:</span>
                  <span className="font-semibold">{seg.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Oursuccess;
