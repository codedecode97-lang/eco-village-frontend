import React from "react";
import sitePlan from "../../../assets/2.jpg";
import { FaDownload } from "react-icons/fa";
import GSAPTextReveal from "../../../components/animations/GSAPTextReveal";
import { motion } from "framer-motion";

const MasterPlan = () => {
  const [timer, setTimer] = React.useState(5);
  const [isDownloading, setIsDownloading] = React.useState(false);

  // Using the sitePlan image itself for download demonstration.
  // Ideally, this should be a PDF link.
  const fileLink = sitePlan;

  React.useEffect(() => {
    let timerId: ReturnType<typeof setInterval> | undefined;
    if (isDownloading && timer > 0) {
      timerId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      // Trigger download
      const link = document.createElement("a");
      link.href = fileLink;
      link.download = "EcoVillage_MasterPlan.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
      setTimer(5);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [isDownloading, timer, fileLink]);

  const handleClick = () => {
    setIsDownloading(true);
  };

  return (
    <motion.section
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#051F14] to-[#02110b] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative Wave Divider - Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#051F14"
          ></path>
        </svg>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-forest-500/10 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] animate-pulse"></span>
              <span className="text-xs font-bold text-white/70 tracking-[0.2em] uppercase">
                Blueprint
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white font-heading leading-tight">
            Master 
            <span className="text-[#EAB308] italic font-serif inline-block">
              <GSAPTextReveal elementType="span"> Planned </GSAPTextReveal>
            </span>
          </h2>

          <p className="text-lg text-white/60 leading-relaxed text-justify font-light max-w-2xl mx-auto ">
            Explore the high-resolution master plan of Eco Village. Designed
            with 45% open spaces, wide roads, and vastu-compliant plots for a
            harmonious living experience.
          </p>
        </motion.div>

        {/* Large Image Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          {/* Glass Frame */}
          <div className="p-2 md:p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl">
            <div className="relative rounded-[1.5rem] overflow-hidden bg-[#05110a]">
              <img
                src={sitePlan}
                alt="Master Plan High Resolution"
                className="w-full h-auto object-contain min-h-[400px] md:min-h-[600px] hover:scale-105 transition-transform duration-1000 ease-in-out cursor-zoom-in"
              />

              {/* Badge */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur border border-white/20 rounded-lg flex flex-col items-center">
                <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">
                  Total Area
                </span>
                <span className="text-lg font-bold text-[#EAB308]">
                  12.5 Acres
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features & CTA - Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-t border-white/10 pt-10">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full md:w-auto">
            {[
              { label: "Open Space", val: "45%" },
              { label: "Internal Roads", val: "30-40 Ft" },
              { label: "Plots", val: "Vastu Compliant" },
              { label: "Security", val: "24/7 Gated" },
            ].map((item, i) => (
              <li key={i} className="text-center md:text-left">
                <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-1">
                  {item.label}
                </p>
                <p className="text-lg md:text-xl font-semibold text-white italic">
                  {item.val}
                </p>
              </li>
            ))}
          </ul>

          <button
            onClick={handleClick}
            disabled={isDownloading}
            className={`group relative px-8 py-4 bg-[#EAB308] text-[#0B2313] rounded-xl overflow-hidden font-bold shadow-lg hover:shadow-[#EAB308]/20 transition-all duration-300 whitespace-nowrap w-full md:w-auto cursor-pointer ${isDownloading ? "opacity-80 cursor-wait" : ""}`}
          >
            <span className="relative z-10 flex items-center justify-center gap-3 tracking-wider">
              {isDownloading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-[#0B2313] border-t-transparent rounded-full animate-spin"></span>
                  <span>Starting in {timer}s...</span>
                </>
              ) : (
                <>
                  <FaDownload />
                  DOWNLOAD HD PLAN
                </>
              )}
            </span>
            {!isDownloading && (
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            )}
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default MasterPlan;
