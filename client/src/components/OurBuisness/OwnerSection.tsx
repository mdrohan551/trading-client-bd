import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { motion, type Variants  } from "framer-motion";
import {
  ExtraInfoData,
  formFields,
  headerSocialMenu,
  ownerData,
} from "../../constant/Demodata";

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

const OwnerSection: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [showPopup, setShowPopup] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000);
  };

  return (
    <>
      {/* 🎉 Confetti Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={500}
            recycle={false}
            gravity={0.25}
          />
        </div>
      )}

      {/* 🎊 Thank You Modal */}
      {showPopup && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[9998]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-2xl px-10 py-8 text-center"
          >
            <h2 className="text-3xl font-bold text-green-600 mb-2">
              🎉 Thank You!
            </h2>
            <p className="text-gray-700 text-lg">
              Your quotation request has been submitted successfully.
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* 🧱 Main Section */}
      <motion.div
        className="relative grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* LEFT: Owner Card */}
        <motion.div
          variants={fadeInUp}
          custom={0}
          className="md:col-span-2 bg-white rounded-3xl shadow-lg p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 relative ring ring-gray-200 overflow-hidden"
        >
          {/* Online Status */}
          <span
            className={`absolute top-2 md:top-4 left-1/7 md:left-3 -translate-x-1/2 md:translate-x-0 text-sm font-semibold px-3 py-1 rounded-2xl shadow-sm ${
              ownerData.status === "online"
                ? "text-green-600 bg-green-100"
                : "text-gray-400 bg-gray-100"
            }`}
          >
            {ownerData.status === "online" ? "Online" : "Offline"}
          </span>

          {/* Owner Image */}
          <div className="col-span-12 md:col-span-4 flex justify-center md:justify-start mb-4 md:mb-0 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-40 sm:w-44 md:w-60 h-40 sm:h-44 md:h-60 rounded-full border-4 border-blue-500 shadow-md relative"
            >
              <img
                src={ownerData.image}
                alt={ownerData.name}
                className="w-full h-full object-cover rounded-full"
              />
              <span
                className={`absolute md:bottom-2 bottom-0 md:right-10 right-5 w-4 h-4 rounded-full z-10 ${
                  ownerData.status === "online"
                    ? "bg-green-500"
                    : "bg-gray-400"
                } ring-2 ring-white`}
              ></span>
            </motion.div>
          </div>

          {/* Owner Info */}
          <div className="col-span-12 md:col-span-8 z-10 flex flex-col justify-center text-center md:text-left">
            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2"
            >
              {ownerData.name}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1.2}
              className="text-gray-500 text-sm sm:text-base mb-4"
            >
              {ownerData.title}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              custom={1.4}
              className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-base break-words"
            >
              {ownerData.advice}
            </motion.p>

            {/* Social Icons */}
            <motion.ul
              variants={fadeInUp}
              custom={1.6}
              className="flex justify-center md:justify-start gap-4 mt-6 flex-wrap"
            >
              {headerSocialMenu.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center ring-[1px] ring-gray-300 p-2 rounded-lg hover:bg-primary hover:ring-primary hover:text-white transition-all duration-300"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center transition-colors duration-200"
                  >
                    <item.icon size="16px" />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ✅ Extra Info Section */}
          <motion.div
            variants={fadeInUp}
            custom={2}
            className="col-span-12 mt-6 border-t pt-6 grid md:grid-cols-2 gap-6 z-10"
          >
            {ExtraInfoData.map((item) =>
              item.highlight ? (
                <a
                  key={item.id}
                  href={`tel:${item.phone}`}
                  className="flex items-center gap-3 md:col-span-2 bg-blue-50 p-4 rounded-xl shadow-sm w-full max-w-md mx-auto hover:shadow-md transition-shadow duration-300"
                >
                  <div className="ring ring-primary text-white p-3 rounded-lg text-lg">
                    {item.icon}
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <p className="text-gray-700 text-sm">
                      Call to ask any question
                    </p>
                    <p className="text-primary font-bold text-lg">
                      {item.phone}
                    </p>
                  </div>
                </a>
              ) : (
                <div key={item.id} className="flex items-start gap-3">
                  <span className="text-primary text-xl">{item.icon}</span>
                  <div>
                    <h4 className="text-gray-900 font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* RIGHT: Quotation Form */}
        <motion.div
          variants={fadeInUp}
          custom={3}
          className="bg-gray-50 rounded-3xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Get a Quotation
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {formFields.map((field) => (
              <div key={field.name}>
                <label className="block text-gray-700 text-sm mb-1">
                  {field.label}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    rows={4}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    onChange={handleChange}
                    required
                  ></textarea>
                ) : field.type === "select" ? (
                  <select
                    name={field.name}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    onChange={handleChange}
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {field.placeholder}
                    </option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleChange}
                    required
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full cursor-pointer bg-primary text-white font-medium py-2 rounded-lg hover:bg-white hover:text-black hover:ring-primary hover:ring transition"
            >
              Request Quote
            </button>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};

export default OwnerSection;
