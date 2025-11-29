import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-white hover:text-primary transition-all duration-300"
          aria-label="Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default BackToTop;
