import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Package,
  Wrench,
  Droplets,
  Palette,
  Recycle,
  ArrowRight,
} from "lucide-react";
import TopNav from "../components/TopNav/TopNav";
import FrontNav from "../components/FrontMenu/FrontNav";
import FrontFooter from "../components/FrontMenu/FrontFooter";

const fadeInUp: Variants = {
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

const ShipChandlingServices: React.FC = () => {
  const services = [
    {
      title: "ALL STORE ITEMS SUPPLY",
      description:
        "We supply a complete range of ship stores including Provisions, Bonded Stores, Deck Stores, Engine Stores, Cabin Stores, Safety Equipment, Electrical items, Tools, Chemicals, Ropes, Lubricants, and other vessel requirements. Our procurement network ensures timely delivery and quality products that meet international maritime standards.",
      icon: Package,
      image: "/images/chandling-1.png",
      features: [
        "Provisions & bonded stores",
        "Deck & engine stores",
        "Cabin supplies",
        "Safety equipment",
        "Electrical items",
        "Tools & chemicals",
        "International quality standards",
      ],
    },
    {
      title: "SHIP SCRAP PURCHASE",
      description:
        "We purchase all types of vessel scrap materials including used machinery, steel scrap, cables, damaged equipment, and other recyclable marine materials. Our team ensures proper handling, valuation, and environmentally responsible disposal in compliance with local regulations standards.",
      icon: Recycle,
      image: "/images/chandling-2.png",
      features: [
        "Used machinery purchase",
        "Steel scrap collection",
        "Cable recovery",
        "Equipment valuation",
        "Environmental compliance",
        "Proper handling protocols",
      ],
    },
    {
      title: "SLUDGE & GARBAGE DISCHARGE",
      description:
        "Our Sludge and Garbage Discharge Services Help Vessels Comply with Environmental and Port Regulations. We Arrange the Safe Collection, Transportation, And Disposal of Sludge, Oily Waste, And Ship-Generated Garbage Through Authorized Facilities While Maintaining All Required Documentation.",
      icon: Droplets,
      image: "/images/chandling-3.png",
      features: [
        "Safe sludge collection",
        "Oily waste handling",
        "Garbage disposal",
        "Environmental compliance",
        "Authorized facilities",
        "Full documentation",
      ],
    },
  ];

  const highlights = [
    {
      number: "24/7",
      label: "Availability",
      description: "Round-the-clock service for all vessel needs",
    },
    {
      number: "100%",
      label: "Quality",
      description: "International maritime standards compliance",
    },
    {
      number: "Fast",
      label: "Delivery",
      description: "Prompt service with competitive pricing",
    },
  ];

  return (
    <>
      <TopNav />
      <div className="relative z-10 bg-black sm:py-3 py-1 pb-5 sm:pb-2">
        <FrontNav />
      </div>

      {/* Header Section */}
      <div className="bg-gray-100 py-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex mb-4 text-sm text-gray-500 uppercase tracking-widest font-medium">
            <a href="/" className="hover:text-orange-600 transition-colors">
              Home
            </a>
            <span className="mx-2">/</span>
            <a
              href="/services"
              className="hover:text-orange-600 transition-colors"
            >
              Services
            </a>
            <span className="mx-2">/</span>
            <span className="text-orange-600">Ship Chandling Services</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Ship Chandling <span className="text-[#f26508]">Services</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Comprehensive chandling solutions for vessels calling at ports
            across Bangladesh
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <motion.div
        className="bg-gray-50 py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quality Supplies & Technical Support
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              AOSLanD Shipping & Trading Company provides comprehensive ship
              Chandling services to vessels calling at ports across Bangladesh.
              We are committed to delivering quality supplies and technical
              support with prompt service, competitive pricing, and 24/7
              availability.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                custom={idx + 1}
                className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-[#f26508] mb-2">
                  {highlight.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {highlight.label}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  custom={idx}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    !isEven ? "md:grid-cols-2 md:[direction:rtl]" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={!isEven ? "md:[direction:ltr]" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-br from-[#f26508] to-[#e05a07] p-4 rounded-xl text-white">
                        <IconComponent size={32} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <ArrowRight
                            size={18}
                            className="text-[#f26508] shrink-0 mt-0.5"
                          />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div className={!isEven ? "md:[direction:ltr]" : ""}>
                    <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-fill scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/500x400?text=${encodeURIComponent(service.title)}`;
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#f26508] to-[#e05a07] rounded-2xl p-8 md:p-12 text-white text-center mt-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Comprehensive Ship Chandling Solutions
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              From supplies to repairs, we have everything your vessel needs.
              Contact our team for competitive quotes and fast service.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#f26508] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Request a Quote
            </a>
          </motion.div>
        </div>
      </div>

      <div className="bg-gray-900 p-8 rounded-t-[3rem]">
        <FrontFooter />
      </div>
    </>
  );
};

export default ShipChandlingServices;
