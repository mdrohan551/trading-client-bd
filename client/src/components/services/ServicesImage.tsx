import React, { useState, useRef, useEffect, useCallback } from "react";
import { servicesimages } from "../../constant/Demodata";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, RotateCcw } from "lucide-react";
import ServicesText from "./ServicesText";
import { Link } from "react-router-dom";
import { Package, Ship, Utensils, Zap } from "lucide-react";
import { easeInOut, easeOut } from "framer-motion";
// Ship Chandle Features Data (Unchanged)
const shipChandleFeatures = [
  { id: 1, title: "Provision Supply", description: "Fresh, frozen, and dry provisions tailored to international dietary standards.", icon: Utensils },
  { id: 2, title: "Deck & Engine Stores", description: "Full range of technical supplies, spare parts, and essential deck equipment.", icon: Zap },
  { id: 3, title: "Cabin & Medical Stores", description: "Complete inventory for crew comfort, safety, and health requirements.", icon: Package },
  { id: 4, title: "Bunker & Logistics Support", description: "Efficient delivery of fuel, lubricants, and complete shore-to-ship logistics.", icon: Ship },
];

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: easeOut },
  }),
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: easeInOut } },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

const ServicesImage: React.FC = () => {
  // Original video is always the first one
  const mainOriginalVideo = servicesimages[0];

  const [currentVideo, setCurrentVideo] = useState<typeof servicesimages[0] | null>(servicesimages[0]);

  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);

  const sideVideos = servicesimages.slice(1);

  // IntersectionObserver: detect if section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Mute/unmute main video based on scroll
  useEffect(() => {
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = !isInView;
      if (isInView) mainVideoRef.current.play().catch(() => {});
    }
  }, [isInView]);

  // Handle smooth video change
const handleVideoChange = (videoCard: typeof servicesimages[0]) => {
  if (!mainVideoRef.current) return;

  // Pause current video before changing
  mainVideoRef.current.pause();
  mainVideoRef.current.currentTime = 0;

  // Remove old video for React re-render
  setCurrentVideo(null);

  // Set new video after small delay to reset React element
  setTimeout(() => {
    setCurrentVideo(videoCard);
    // Ensure it plays automatically on mobile
    setTimeout(() => {
      mainVideoRef.current?.play().catch(() => {});
    }, 50);
  }, 50);
};


  // --- RESET SYSTEM ---
  const handleResetVideo = useCallback(() => {
    setCurrentVideo(null);
    setTimeout(() => setCurrentVideo(mainOriginalVideo), 50);
  }, [mainOriginalVideo]);
  // -------------------

  return (
    <>
      {/* 2. Main Video Section (Container) */}
      <motion.div
        ref={sectionRef}
        className="relative w-full h-[60vh] md:h-[80vh] min-h-[400px] md:min-h-[600px] overflow-hidden rounded-[3rem] mt-4 md:mt-0"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Main Video */}
        {currentVideo?.video && (
          <video
            key={currentVideo.id}
            ref={mainVideoRef}
            src={currentVideo.video}
            autoPlay
            loop
            muted={!isInView}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={currentVideo.src}
          />
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* For large screens, apply gradient over video */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10 hidden md:block"></div>

        {/* Content Container (For Large Screen Text and Side Cards) */}
        <div className="absolute inset-0 grid grid-cols-12 max-w-[1536px] mx-auto z-20">
          {/* Services Text (Only for Large Devices) */}
          <div className="col-span-12 md:col-span-7 order-2 md:order-1 px-6 md:px-10 h-full hidden md:flex">
            <ServicesText />
          </div>

          {/* Side Video Cards (Positioned differently for Mobile vs Desktop) */}
          <div className="col-span-12 order-1 md:order-2 md:col-span-5 flex justify-end items-start h-full">
            {/* Mobile: Top-Right of Video, reduced size */}
            {/* Desktop: Right-side of container */}
            <div
              className="absolute top-4 right-4 md:relative md:top-5 md:right-5 bg-white/90 backdrop-blur-sm p-2 md:p-3 rounded-xl shadow-2xl space-y-2 md:space-y-3 pointer-events-auto w-[150px] md:max-w-xs md:w-full"
            >
              <div className="flex justify-between items-center text-xs md:text-sm font-medium border-b pb-2">
                <Link to="/contact" className="text-gray-600 flex items-center gap-1 cursor-pointer">
                  <span className="hidden md:inline">Contact Us</span> <ArrowUpRight size={14} />
                </Link>
                <div className="flex items-center gap-1">
                  <Clock size={16} className="text-gray-500 hidden md:inline" />
                </div>
              </div>

              <p className="text-[10px] text-gray-500 hidden md:block">Call us anytime for inquiries or support.</p>

              {/* Reset Button */}
              {currentVideo?.id !== mainOriginalVideo.id && (
                <motion.button
                  onClick={handleResetVideo}
                  className="w-full text-[10px] md:text-xs py-1 md:py-2 bg-primary/80 text-gray-50 rounded-lg flex items-center justify-center gap-1 md:gap-2 hover:bg-gray-600/20 transition-colors font-medium"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <RotateCcw size={10} className="md:w-4 md:h-4" /> <span className="hidden md:inline">Reset to Main</span>
                </motion.button>
              )}

              {/* Side Video Cards */}
              <div className="space-y-2 md:space-y-3">
                {sideVideos.map((card, idx) => (
                  <motion.div
                    key={card.id}
                    className="relative w-full h-12 md:h-24 rounded-lg overflow-hidden shadow-md cursor-pointer"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    transition={{ delay: 0.5 + idx * 0.2 }}
                    onClick={() => handleVideoChange(card)}
                  >
                    {card.video ? (
                      <video
                        src={card.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img src={card.src} alt={card.alt} className="w-full h-full object-cover" />
                    )}

                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="text-white text-[10px] md:text-xs font-semibold">{card.alt}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Feature Cards (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-auto">
          <div className="absolute inset-0 bg-black/60 blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="relative p-4 md:p-6 text-white max-w-[1536px] mx-auto">
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {shipChandleFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="group relative p-3 md:p-4 bg-white/10 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/20 hover:shadow-xl backdrop-blur-sm flex flex-col items-center"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={featureVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <feature.icon size={24} className="text-primary mb-1 md:mb-2 transition-colors group-hover:text-white" />
                  {/* mobile: hide title & desc; desktop: show */}
                  <p className="text-[10px] md:text-sm font-semibold mb-1 hidden md:block">{feature.title}</p>
                  <p className="text-[8px] md:text-xs text-white/70 hidden md:block">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* 1. Services Text for Mobile (Outside Video) - moved BELOW video now */}
      <div className="md:hidden w-full max-w-[1536px] mx-auto px-4 mt-6">
        <ServicesText />
      </div>
    </>
  );
};

export default ServicesImage;
