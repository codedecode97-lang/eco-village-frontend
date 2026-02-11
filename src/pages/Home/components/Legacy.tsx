import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import TextMarquee from "../../../components/animations/TextMarquee";
import GSAPTextReveal from "../../../components/animations/GSAPTextReveal";
import GSAPStaggerWrapper from "../../../components/animations/GSAPStaggerWrapper";
import GSAPCounter from "../../../components/animations/GSAPCounter";
import ScrollImageAnimation from "../../../components/animations/ScrollImageAnimation";

const Legacy = () => {
  return (
    <section
      id="legacy"
      className="relative py-20 md:py-32 bg-[#1B4B33] font-sans overflow-hidden"
    >
      <div className="relative z-20">
        <div className="mb-20">
          <TextMarquee
            text="LUXURY • NATURE • SUSTAINABILITY • COMMUNITY • "
            speed={25}
            className="opacity-80 text-white font-heading tracking-widest"
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section: Legacy Title & Stats */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
            {/* Title */}
            <div className="text-center lg:text-left relative">
              <motion.div
                animate={{ scaleX: [0.2, 1, 0.2] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-24 h-[2px] bg-[#EAB308] mx-auto lg:mx-0 mb-6 origin-left shadow-[0_0_10px_#EAB308]"
              />
              <GSAPTextReveal
                elementType="h2"
                className="text-4xl md:text-5xl font-bold text-white tracking-[0.1em] uppercase font-heading drop-shadow-lg"
              >
                Our Legacy
              </GSAPTextReveal>
              <p className="text-white/60 text-sm mt-4 tracking-widest uppercase lg:text-left">
                Building Trust Since 2010
              </p>
            </div>

            {/* Stats Grid */}
            <GSAPStaggerWrapper className="flex flex-wrap justify-center lg:justify-end gap-x-16 gap-y-10 text-center">
              {[
                { end: 15, suffix: "+", label: "Years of Excellence" },
                { end: 20, suffix: "Lakhs+", label: "Sq. Ft Area Developed" },
                { end: 500, suffix: "+", label: "Happy Families" },
                // { end: 4, suffix: "+", label: "Cities Covered" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="text-5xl md:text-6xl font-bold text-[#EAB308] mb-2 font-heading tracking-tight group-hover:text-[#EAB308] transition-colors duration-500">
                    <GSAPCounter
                      end={stat.end}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                  <div className="h-px w-full bg-[#EAB308]/50 mb-3 group-hover:bg-[#EAB308]/50 transition-colors"></div>
                  <div className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em] leading-tight max-w-[100px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </GSAPStaggerWrapper>
          </div>

          {/* Hero Image Section with Scroll Animation */}
          <div className="relative z-20">
            <ScrollImageAnimation />
          </div>

          {/* Bottom Section: Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center space-y-12 relative"
          >
            {/* Decorative Quotes */}
            <div className="absolute -top-10 left-10 text-9xl text-white/5 font-serif font-bold leading-none select-none">
              “
            </div>

            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
                <FaLeaf className="text-[#EAB308] text-sm md:text-base animate-pulse" />
                <span className="text-sm md:text-base font-bold text-white tracking-[0.2em] uppercase">
                  Our Story
                </span>
              </div>
              <GSAPTextReveal
                elementType="h2"
                className="text-4xl md:text-5xl font-bold text-white tracking-[0.1em] uppercase font-heading"
              >
                Vision to Reality
              </GSAPTextReveal>
            </div>

            <p className="text-white/90 leading-relaxed font-sans text-lg md:text-xl font-light max-w-4xl mx-auto tracking-wide text-justify ">
              <span className="font-semibold text-[#EAB308]">Eco Village</span>{" "}
              is a first-of-its-kind integrated township offering luxury living
              at an affordable price—right where the next growth of Bardhaman is
              taking shape. A thoughtfully planned township designed to redefine
              urban living in Bardhaman. Blending modern infrastructure,
              eco-friendly planning, and premium amenities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
