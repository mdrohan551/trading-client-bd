import React, { useEffect } from "react";
import { topMenu } from "../../constant/Demodata";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import type { Resubment } from "../../AllTypes/AuthInterface";

const FrontNav: React.FC = () => {
  const [resubItem, setResubItem] = React.useState<{ [key: string]: Resubment[] }>({});
  const [isOpen, setIsOpen] = React.useState(false);

  // ✅ Stop scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <section className="mt-5">
      <section className="max-w-[1536px] mx-auto relative">
        <nav className="grid grid-cols-12 items-center  ">

          <div className="col-span-6 md:col-span-2 flex items-center justify-start px-5 sm:px-9">
            <img
              src="/images/pngmainlogo.png"
              className="w-20 sm:w-30 filter brightness-0 invert"
              alt="logo"
            />
          </div>

          {/* Menu Icon */}
          <div className="col-span-6 flex justify-end items-center px-5 md:hidden z-50">
            <button
              className="text-primary ring rounded-full p-1 focus:outline-none transition-transform duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className={`w-7 h-7 transition-all duration-500 ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} />
            </button>
          </div>

          
          {/* Collapsible Menu */}
          <div
            className={`
    col-span-12 md:col-span-8 flex items-center justify-center
    transform transition-transform duration-500 ease-in-out
    

    /* Desktop */
    md:static md:w-auto md:bg-transparent md:opacity-100  md:translate-x-0

    /* Mobile */
    
   ${isOpen
  ? "translate-x-0 opacity-100 fixed top-11 left-0 w-full block bg-black/50 sm:bg-none sm:backdrop-0 backdrop-blur-xl z-50"
  : "translate-x-full opacity-0  fixed top-11 left-0 w-full bg-transparent"}


  `}
          >



            {/* Cross Icon inside menu - fixed top-right */}
            <div className="absolute top-5 right-5 md:hidden z-50">
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary ring rounded-full transition-transform duration-300 hover:rotate-90"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <menu className="bg-white/10   md:bg-white/20 backdrop-blur-md px-5 rounded-lg w-full md:w-auto shadow-lg">
              <ul className="flex text-sm  flex-col md:flex-row gap-5 md:gap-9 items-start justify-start py-4 ">
                {topMenu.map((item, idx) => (
                  <li key={idx} className={`relative ${item.accordion ? "group" : ""}`}>
                    <Link
                      to={item.href || "/"}
                      onClick={() => setIsOpen(false)}
                      className="flex font-nexa-bold justify-center items-center gap-1 hover:text-primary transition-all text-white font-medium"
                    >
                      {item.title}
                      {item.accordion && (
                        <ChevronDown className="w-5 h-5 ml-1 transition-transform group-hover:rotate-180" />
                      )}
                    </Link>

                    {item.accordion && item.pages && (
                      <ul className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2  group-hover:translate-y-0  transition-all duration-300 ease-in-out bg-gray-800 border border-gray-700 shadow-xl rounded-md px-10 py-2 z-50 min-w-[200px] whitespace-nowrap">
                        {item.pages.map((subItem, subIdx) => (
                          <li
                            key={subIdx}
                            className="relative"
                            onMouseEnter={() => {
                              if (subItem.accordion) {
                                setResubItem({ [subItem.anchor]: subItem.resubmenu || [] });
                              }
                            }}
                            onMouseLeave={() => setResubItem({})}
                          >
                            <Link
                              to={subItem.href}
                              className="flex justify-between items-center gap-1 block py-2 text-white font-medium hover:text-primary transition-all"
                            >
                              {subItem.anchor}
                              {subItem.accordion && <ChevronRight className="w-4 h-4 ml-2" />}
                            </Link>

                            {subItem.accordion && resubItem[subItem.anchor] && (
                              <ul className="absolute top-0 left-full bg-gray-700 border border-gray-600 shadow-2xl rounded-md px-3 py-2 z-[60] min-w-[180px] whitespace-nowrap">
                                {resubItem[subItem.anchor].map((resub: Resubment, resubIdx: number) => (
                                  <li key={resubIdx}>
                                    <Link
                                      to={resub.href}
                                      className="block py-1 text-white hover:text-primary transition-all"
                                    >
                                      {resub.anchor}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                {/* Contact button (inside mobile collapse) */}
                <li className="md:hidden">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="sm:text-sm font-dm-Light text-[0.8rem] px-2 sm:px-6 rounded-lg cursor-pointer py-1 sm:py-3 hover:bg-white/20 backdrop-blur-sm ring-primary ring-1 bg-primary text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </menu>

            {/* Cross Icon inside menu */}

          </div>

          {/* Desktop Contact */}
          <div className="hidden md:flex col-span-2 items-center justify-center ">
            <Link
              to="/contact"
              className="px-6 rounded-lg py-3 hover:bg-white/20 backdrop-blur-sm ring-primary ring-1 bg-primary text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </section>
    </section>
  );
};

export default FrontNav;
