import React from "react";
import { motion, type Variants } from "framer-motion";
import { Shield, Ship, Package, Users, ArrowRight } from "lucide-react";
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

const PortAgencyServices: React.FC = () => {
  const services = [
    {
      title: "OWNER'S PROTECTIVE AGENCY",
      description:
        "Our Owner's Protective Agency (OPA) service safeguards vessel owners' interests during port calls. We independently monitor maritime operations, cargo handling, port expenses, and service performance while ensuring compliance with port regulations. Through transparent reporting and continuous coordination, we protect owners' interests and support efficient vessel turnaround.",
      icon: Shield,
      image: "/images/port-agency-1.jpg",
      features: [
        "Maritime operations monitoring",
        "Cargo handling oversight",
        "Port expense tracking",
        "Service performance evaluation",
        "Regulatory compliance assurance",
      ],
    },
    {
      title: "SHIPPING AGENCY",
      description:
        "We offer full Shipping Agency services for all types of vessels calling at Bangladeshi ports. Our team handles vessel clearance, berth arrangements, port documentation, customs formalities, coordination with port authorities, and communication with relevant stakeholders to ensure efficient operations.",
      icon: Ship,
      image: "/images/port-agency-2.jpg",
      features: [
        "Vessel clearance management",
        "Berth arrangement coordination",
        "Port documentation handling",
        "Customs formalities processing",
        "Port authority coordination",
      ],
    },
    {
      title: "SHIP SPARES CUSTOMS CLEARANCE & DELIVERY",
      description:
        "We offer comprehensive customs clearance services for ship spares and equipment. Our team handles all documentation, regulatory compliance, and coordination with customs authorities to ensure timely delivery of essential vessel supplies and spare parts.",
      icon: Package,
      image: "/images/port-agency-3.jpg",
      features: [
        "Documentation management",
        "Customs procedures handling",
        "Regulatory compliance",
        "Timely delivery coordination",
        "Quality assurance",
      ],
    },
    {
      title: "CREW ASSISTANCE",
      description:
        "We provide complete crew assistance services including crew changes, immigration clearance, airport transfers, hotel arrangements, medical assistance, visa support, transportation, and emergency coordination. Our team is available 24/7 to support seafarers and vessel operators.",
      icon: Users,
      image: "/images/port-agency-4.jpg",
      features: [
        "Crew change management",
        "Immigration clearance",
        "Airport transfers",
        "Hotel arrangements",
        "24/7 support availability",
        "Emergency coordination",
      ],
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
            <span className="text-orange-600">Port Agency Services</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Port Agency <span className="text-[#f26508]">Services</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Professional Port Agency Services for efficient vessel turnaround
            and seamless port operations
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
              Efficient Vessel Operations & Compliance
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              AOSLanD Shipping & Trading Company delivers professional Port
              Agency Services to ensure efficient vessel turnaround, regulatory
              compliance, and seamless port operations. With strong maritime
              expertise and close coordination with port authorities, we provide
              reliable support for ship owners, operators, charterers, and
              managers, ensuring safe, timely, and cost-effective vessel
              handling.
            </p>
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
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          >
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  custom={idx}
                  className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Service Header */}
                  <div className="bg-gradient-to-r from-[#f26508] to-[#e05a07] p-8 text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/20 p-4 rounded-xl group-hover:bg-white/30 transition-all">
                        <IconComponent size={32} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      <p className="text-gray-900 font-semibold text-sm uppercase tracking-wide">
                        Key Features:
                      </p>
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <ArrowRight
                            size={18}
                            className="text-[#f26508] shrink-0 mt-0.5"
                          />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
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
            className="bg-gradient-to-r from-[#f26508] to-[#e05a07] rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Professional Port Agency Services?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our expert team for seamless vessel operations and port
              management solutions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#f26508] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get in Touch
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

export default PortAgencyServices;
