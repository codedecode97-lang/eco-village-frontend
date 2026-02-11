import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaFileContract,
  FaRupeeSign,
} from "react-icons/fa";
import GSAPTextReveal from "../../../components/animations/GSAPTextReveal";
import herosectionVedio from "../../../../public/IMG_4454.MP4";

const heroContent = [
  {
    title: "Welcome to Eco Village",
    description: "The Future of Living in Bardhaman",
  },
  {
    title: "Where Nature Is Your Neighbor",
    description: "Green landscapes, open skies, and a lifestyle designed to help you breathe better.",
  },
  {
    title: "Designed for Spacious Living",
    description: "Wide roads, low-density planning, and homes that give you room to truly live.",
  },
  {
    title: "Luxury That Feels Effortless",
    description: "Modern villas, private gardens, and amenities that blend seamlessly with nature.",
  },
  {
    title: "A Community Built with Care",
    description: " Every detail planned to create a safe, serene, and future-ready environment.",
  },
  {
    title: "More Than a Home. A Way of Life",
    description: "Perfect for families, weekend living, and long-term peace of mind.",
  },
 
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // First item (Welcome) stays for 10 seconds, others for 5 seconds
    const delay = currentIndex === 0 ? 10000 : 5000;
    
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.length);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-forest-950 mt-5"
    >
      {/* Background Video */}
      <video
        src={herosectionVedio}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlays - Darken for readability */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-forest-950/60" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center w-full">
        {/* Eyebrow Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2"
        >
          {/* <span className="text-brand-room text-sm md:text-base font-bold tracking-[0.1em] uppercase text-yellow-500/90 drop-shadow-md bg-white/15 rounded-full border border-white/40 shadow-lg p-2 px-4">
            Eco Village Developer
          </span> */}
        </motion.div>

        <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1] font-heading tracking-tight mb-6 drop-shadow-xl flex flex-col items-center gap-2">
          <motion.div
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-white">
              {heroContent[currentIndex].title}
            </h1>
          </motion.div>
        </div>

        {/* Subheading */}
        <motion.p
          key={`desc-${currentIndex}`}
          className="text-lg md:text-2xl text-beige-100/90 mb-5 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02, color: "#e3efe8" }}
        >
          {heroContent[currentIndex].description}
        </motion.p>

        {/* Primary Action Button */}
        <motion.div
          className="relative z-30"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#legacy"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-forest-700 hover:bg-forest-600 text-white rounded-full font-bold text-lg tracking-wide shadow-lg hover:shadow-forest-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Discover More</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Project Highlights / Trust Indicators */}
 
    </section>
  );
};

export default HeroSection;
