import React from "react";
import { motion, type Variants } from "framer-motion";
import { Plane, FileCheck, Warehouse, Truck, ArrowRight } from "lucide-react";
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

const FreightForwardingServices: React.FC = () => {
  const mainServices = [
    {
      title: "SEA & AIR FREIGHT",
      description:
        "AOSLanD Shipping and Trading Company provides reliable Sea and Air Freight solutions for businesses worldwide. We ensure safe, timely, and cost-effective transportation of your cargo through trusted global networks. From small shipments to large consignments, our expert team handles every step with efficiency, transparency, and professional logistics support.",
      icon: Plane,
      features: [
        "Sea freight services",
        "Air freight solutions",
        "Global network access",
        "Safe cargo handling",
        "Cost-effective shipping",
        "Real-time tracking",
        "Expert logistics support",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "CUSTOMS CLEARANCE",
      description:
        "Our customs clearance services ensure smooth processing of import and export shipments through all required customs procedures. We assist with documentation, tariff classification, duty assessment, regulatory compliance, and coordination with customs authorities to minimize delays and facilitate fast cargo release.",
      icon: FileCheck,
      features: [
        "Documentation assistance",
        "Tariff classification",
        "Duty assessment",
        "Regulatory compliance",
        "Authority coordination",
        "Fast cargo release",
        "Delay minimization",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      title: "WAREHOUSING",
      description:
        "We provide secure warehousing and storage solutions for various types of cargo. Our warehousing services include inventory management, cargo handling, packing, labeling, consolidation, and distribution support, helping clients optimize their supply chain operations.",
      icon: Warehouse,
      features: [
        "Secure storage facilities",
        "Inventory management",
        "Cargo handling",
        "Professional packing",
        "Labeling services",
        "Consolidation support",
        "Distribution assistance",
      ],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "SUPPLY CHAIN SOLUTIONS",
      description:
        "Our Supply Chain Solutions streamline the end-to-end movement of cargo through efficient logistics planning, freight management, warehousing, and distribution services. Leveraging maritime expertise and global logistics networks, we ensure reliable, cost-effective, and uninterrupted supply chain operations for international trade and shipping businesses.",
      icon: Truck,
      features: [
        "Logistics planning",
        "Freight management",
        "Warehousing integration",
        "Distribution network",
        "Maritime expertise",
        "Global connectivity",
        "End-to-end solutions",
      ],
      color: "from-red-500 to-red-600",
    },
  ];

  const whyChooseUs = [
    {
      number: "24/7",
      title: "Support",
      description:
        "Round-the-clock customer service for all your logistics needs",
    },
    {
      number: "Global",
      title: "Network",
      description:
        "Trusted partners across all major shipping routes worldwide",
    },
    {
      number: "100%",
      title: "Transparent",
      description: "Clear pricing and real-time tracking on all shipments",
    },
    {
      number: "Expert",
      title: "Team",
      description:
        "Experienced professionals with maritime logistics expertise",
    },
  ];

  return (
    <>
      <TopNav />
      <div className="relative z-10 bg-black sm:py-3 py-1 pb-5 sm:pb-2">
        <FrontNav />
      </div>

      {/* Header Section */}
      <div className="bg-gray-100 py-12 border-b border-gray-200 overflow-hidden">
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
            <span className="text-orange-600">Freight Forwarding</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Freight <span className="text-[#f26508]">Forwarding</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Comprehensive logistics and freight forwarding solutions for global
            trade
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
              Global Logistics Excellence
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              AOSLanD Shipping & Trading Company specializes in comprehensive
              freight forwarding services designed to meet the diverse needs of
              international trade. With global expertise and local knowledge, we
              ensure your cargo reaches its destination safely, on time, and
              within budget.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        className="bg-white py-16 px-6"
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
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                custom={idx + 1}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-[#f26508] mb-2">
                  {item.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {mainServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  custom={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Service Header */}
                  <div
                    className={`bg-gradient-to-r ${service.color} p-8 text-white`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-4 rounded-xl group-hover:bg-white/30 transition-all">
                        <IconComponent size={32} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      <p className="text-gray-900 font-semibold text-xs uppercase tracking-wide">
                        Our Services Include:
                      </p>
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <ArrowRight
                            size={16}
                            className="text-[#f26508] shrink-0 mt-0.5"
                          />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Process Section */}
      <motion.div
        className="bg-white py-16 px-6"
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
              Our Freight Forwarding Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Streamlined procedures ensuring efficient cargo movement and
              timely delivery
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Booking",
                description: "Confirm shipment details and rates",
              },
              {
                step: "02",
                title: "Documentation",
                description: "Prepare all required customs documents",
              },
              {
                step: "03",
                title: "Handling",
                description: "Professional cargo pickup and loading",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Safe arrival and timely destination delivery",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                custom={idx + 1}
                className="text-center"
              >
                <div className="bg-[#f26508] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-[#f26508] to-[#e05a07] px-6 py-16"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Ship with Confidence?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with AOSLanD for seamless freight forwarding, global
            logistics expertise, and reliable delivery solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-[#f26508] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get a Quote Now
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </motion.div>

      <div className="bg-gray-900 p-8">
        <FrontFooter />
      </div>
    </>
  );
};

export default FreightForwardingServices;
