import React, { useState, useEffect } from "react";
import {
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import logo from "../../assets/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import SideEnquireButton from "../common/SideEnquireButton";
import EnquiryModal from "../common/EnquiryModal";
import { TbMenu3 } from "react-icons/tb";
import { useLenis } from "../../context/LenisScrollContext";

interface NavItem {
  label: string;
  path: string;
  subtitle?: string;
}

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const location = useLocation();
  const { lenis } = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: "HOME", path: "#home", subtitle: "Welcome back" },
    { label: "ABOUT US", path: "#about", subtitle: "Our Story" },
    {
      label: "FLAGSHIP PROJECT",
      path: "#flagshipproject",
      subtitle: "Anandam",
    },
    { label: "OUR OFFERINGS", path: "#ourofferings", subtitle: "What we give" },
    {
      label: "TESTIMONIALS",
      path: "#testimonials",
      subtitle: "Community Love",
    },
    { label: "CONTACT US", path: "#contact", subtitle: "Get in touch" },
  ];

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = "/" + id;
    } else {
      const element = document.querySelector(id) as HTMLElement;
      if (element && lenis) {
        lenis.scrollTo(element, {
          offset: -100,
          duration: 2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  // --- Animation Variants ---
  const menuVariants: Variants = {
    initial: {
      x: "100%",
    },
    animate: {
      x: "0%",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const, // Custom "Doorknob" easing for premium feel
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const containerVars: Variants = {
    initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const linkVars: Variants = {
    initial: {
      y: "30vh",
      opacity: 0,
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] as const },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] as const },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled || menuOpen
            ? "bg-[#FFFFFF] shadow-lg"
            : "bg-[#FFFFFF] backdrop-blur-lg shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
          {/* Logo Area */}
          <div className="absolute top-0 left-4 sm:left-6 lg:left-8 z-[60]">
            <Link
              to="/"
              onClick={(e) => handleScrollTo("#home", e)}
              className="block"
            >
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#FFFFFF] p-1 rounded-b-2xl flex items-center justify-center transform transition-all duration-300 relative top-[-1px]"
              >
                <img
                  src={logo}
                  alt="Eco Village"
                  className="h-12 md:h-18 w-20 md:w-30 object-contain mt-5"
                />
              </motion.div>
            </Link>
          </div>

          {/* Spacer for Center alignment if needed, or just let justifying-between handle it */}
          <div className="hidden lg:block w-20"></div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.path}
                  onClick={(e) => handleScrollTo(item.path, e)}
                  className="group relative block overflow-hidden pb-1"
                >
                  {/* Primary Text (Slides Up) */}
                  <span className="block text-sm font-bold tracking-widest text-[#1B4B33] transition-transform duration-500 group-hover:-translate-y-full">
                    {item.label}
                  </span>

                  {/* Hover Text (Slides In from Bottom) */}
                  <span className="absolute top-0 left-0 text-sm font-bold tracking-widest text-[#EAB308] translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                    {item.label}
                  </span>

                  {/* Elegant Underline (Expands from Center) */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#EAB308] -translate-x-1/2 transition-all duration-300 group-hover:w-full ease-out" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden absolute right-4 p-2.5 text-[#1B4B33] rounded-lg transition-all duration-300 z-[60]"
            onClick={() => setMenuOpen(true)}
          >
            <TbMenu3 className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.nav>

      <SideEnquireButton />

      {/* --- Modern Fullscreen Mobile Menu --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-[#051F14] z-50 flex flex-col justify-between"
          >
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest-500/20 rounded-full blur-[120px] pointer-events-none text-white/5" />

            {/* Menu Header with Close Button Area */}
            <div className="flex justify-between items-center p-6 z-10 w-full">
              <div className="w-10"></div> {/* Spacer for alignment */}
              <button
                onClick={() => setMenuOpen(false)}
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:rotate-90 transition-all duration-300 text-white cursor-pointer"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            {/* Links Container */}
            <div className="flex flex-col justify-center px-8 h-full z-10">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-6"
              >
                {navItems.map((item, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.div variants={linkVars}>
                      <a
                        href={item.path}
                        onClick={(e) => handleScrollTo(item.path, e)}
                        className="group flex flex-col"
                      >
                        <span className="text-xs text-[#EAB308] uppercase tracking-widest font-medium mb-1 opacity-100 transform translate-y-0 transition-all duration-300 block font-sans">
                          {item.subtitle}
                        </span>
                        <span className="text-4xl sm:text-5xl font-heading text-white font-normal tracking-wide transition-all duration-300 flex items-center gap-4 active:text-[#EAB308]">
                          {item.label}
                        </span>
                      </a>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Footer / CTA in Menu */}
            <div className="p-8 border-t border-white/10 z-10 bg-black/20 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex gap-4 text-white/60">
                  <a
                    href="#"
                    className="hover:text-[#EAB308] transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#EAB308] transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#EAB308] transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setEnquiryOpen(true);
                  }}
                  className="px-6 py-3 bg-[#EAB308] text-[#051F14] font-bold tracking-widest uppercase text-sm transition-colors duration-300"
                >
                  Book a Site Visit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </>
  );
};

export default Navbar;
