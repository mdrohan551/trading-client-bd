import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import CommonSecTitle from "../CommonSecTitle";
import { OurServicesData } from "../../constant/Demodata";

const OurBuisness: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // প্রতি ৩টা করে data ভাগ করা
  const chunkedData = [];
  for (let i = 0; i < OurServicesData.length; i += 3) {
    chunkedData.push(OurServicesData.slice(i, i + 3));
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <CommonSecTitle
        title="Our Business"
        description="AOSLanD Trading Company Always Provide Best Service"
      />

      {chunkedData.map((group, groupIdx) => (
        <div
          key={groupIdx}
          className={`grid gap-8 mb-10 ${
            group.length === 3
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {group.map((item, idx) => (
            <Link to={item.Link || "#"} key={idx}>
              <motion.div
                className={`group relative bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center cursor-pointer overflow-hidden ${
                  group.length === 3 ? "p-8" : "p-10"
                }`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* Icon */}
                <div
                  className={`flex justify-center mb-5 text-primary transition-colors duration-300 ${
                    group.length === 3 ? "text-4xl" : "text-5xl"
                  } group-hover:text-primary`}
                >
                  <item.icon size={group.length === 3 ? 40 : 48} />
                </div>

                {/* Title */}
                <h3
                  className={`font-bold text-gray-900 mb-3 ${
                    group.length === 3 ? "text-xl" : "text-2xl"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-gray-500 leading-relaxed ${
                    group.length === 3 ? "text-sm" : "text-base"
                  }`}
                >
                  {item.description}
                </p>

                {/* Hover Arrow Bottom Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-14 bg-primary flex justify-center items-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <FaArrowRight className="text-white text-2xl transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OurBuisness;
