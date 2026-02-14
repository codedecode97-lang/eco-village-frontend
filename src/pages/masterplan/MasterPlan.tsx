import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaTree, FaRoad, FaHome, FaPhone, FaDownload } from "react-icons/fa";
import heroImg from "../../assets/1.png";
import planImg from "../../assets/2.jpg";

// small counter hook
function useCount(to: number, duration = 1000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = 0;
    const startTime = performance.now();
    let raf = 0;
    const animate = (t: number) => {
      const elapsed = t - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * (to - start) + start);
      setValue(current);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return value;
}

const MasterPlan: React.FC = () => {
  const plots = useCount(120, 1400);
  const parks = useCount(12, 1000);
  const amenities = useCount(8, 1100);

  const markerPulse = {
    initial: { scale: 0.85, opacity: 0.8 },
    animate: { scale: [0.85, 1.15, 0.95], opacity: [0.9, 0.6, 0.9] },
  };

  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Magical floating gradient blobs */}
      <motion.div
        className="fixed top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none z-0"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(16, 185, 129, 0.4) 100%)",
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none z-0"
        style={{
          background: "linear-gradient(135deg, rgba(236, 72, 153, 0.4) 0%, rgba(139, 92, 246, 0.4) 100%)",
        }}
        animate={{
          y: [0, 50, 0],
          x: [0, -40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-6"
              >
                <span className="px-6 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-bold rounded-full shadow-lg">
                  MASTER PLAN
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-green-600 to-blue-700 leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Your Dream Layout
              </motion.h1>

              <motion.p
                className="text-xl text-slate-700 mb-8 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Explore the thoughtfully planned layout emphasising green corridors, 
                efficient road networks and vibrant community spaces
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.a
                  href="#plan"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                >
                  View Master Plan
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all"
                >
                  Schedule Visit
                </motion.a>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <motion.div
                className="group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -8 }}
              >
                {/* Gradient glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                
                {/* Image container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <motion.img
                    src={heroImg}
                    alt="Eco Urban masterplan hero"
                    className="w-full h-96 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl"
                >
                  <p className="text-3xl font-black">{plots}+</p>
                  <p className="text-sm font-medium">Premium Plots</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Section */}
      <section id="plan" className="relative py-15 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm font-bold rounded-full shadow-lg">
                DETAILED LAYOUT
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-green-600 to-blue-700 mb-4">
              Interactive Master Plan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore residential plots, parks, internal roads, and essential amenities. 
              Click markers for more details
            </p>
          </motion.div>

          {/* Master Plan Image with Markers */}
          <motion.div
            className="group relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -4 }}
          >
            {/* Gradient glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            
            <div className="relative">
              <img src={planImg} alt="Master plan" className="w-full h-[600px] object-cover" />

              {/* Pulsing markers with tooltips */}
              <motion.div
                aria-label="Residential Area"
                variants={markerPulse}
                initial="initial"
                animate="animate"
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute cursor-pointer"
                style={{ left: "18%", top: "28%" }}
                whileHover={{ scale: 1.3 }}
              >
                <div className="relative group/marker">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full bg-blue-600/40 blur-md" />
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-xl">
                      <FaHome className="text-lg" />
                    </div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-blue-900 text-white text-sm font-bold rounded-lg shadow-xl opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap">
                    Residential Plots
                  </div>
                </div>
              </motion.div>

              <motion.div
                aria-label="Green Spaces"
                variants={markerPulse}
                initial="initial"
                animate="animate"
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute cursor-pointer"
                style={{ left: "62%", top: "46%" }}
                whileHover={{ scale: 1.3 }}
              >
                <div className="relative group/marker">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full bg-green-500/30 blur-md" />
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-xl">
                      <FaTree className="text-lg" />
                    </div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-green-900 text-white text-sm font-bold rounded-lg shadow-xl opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap">
                    Parks & Gardens
                  </div>
                </div>
              </motion.div>

              <motion.div
                aria-label="Road Network"
                variants={markerPulse}
                initial="initial"
                animate="animate"
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute cursor-pointer"
                style={{ left: "45%", top: "65%" }}
                whileHover={{ scale: 1.3 }}
              >
                <div className="relative group/marker">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-md" />
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-xl">
                      <FaRoad className="text-lg" />
                    </div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-purple-900 text-white text-sm font-bold rounded-lg shadow-xl opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap">
                    Smart Roads
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 text-center">
                <p className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">{plots}+</p>
                <p className="text-slate-700 font-bold mt-2">Available Plots</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 text-center">
                <p className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">{parks}+</p>
                <p className="text-slate-700 font-bold mt-2">Parks & Open Spaces</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 text-center">
                <p className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">{amenities}+</p>
                <p className="text-slate-700 font-bold mt-2">Key Amenities</p>
              </div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <FaTree className="text-white text-2xl" />
                </div>
                <h4 className="text-2xl font-black text-blue-900 mb-4">Green Spaces</h4>
                <p className="text-slate-700 leading-relaxed">
                  Large parks and tree-lined promenades for fresh air and community events
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <FaRoad className="text-white text-2xl" />
                </div>
                <h4 className="text-2xl font-black text-blue-900 mb-4">Connectivity</h4>
                <p className="text-slate-700 leading-relaxed">
                  Smart internal road network with safe pedestrian pathways and cycling tracks
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <h4 className="text-2xl font-black text-blue-900 mb-4">Amenities</h4>
                <p className="text-slate-700 leading-relaxed">
                  Community centre, play areas, rainwater harvesting and thoughtful utilities planning
                </p>
              </div>
            </motion.div>
          </div>

   
        </div>
      </section>

      {/* Gallery */}
      <section className="relative  bg-gradient-to-b from-white to-gray-50">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg">
                PROJECT GALLERY
              </span>
            </motion.div>
            
            <h3 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 mb-4">
              Visual Journey
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Project images and neighborhood views showcasing the lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[heroImg, planImg, heroImg].map((src, idx) => {
              const gradients = [
                "from-blue-500 to-cyan-500",
                "from-purple-500 to-pink-500",
                "from-green-500 to-emerald-500",
              ];
              
              return (
                <motion.div
                  key={idx}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                >
                  {/* Gradient glow */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${gradients[idx]} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                  
                  {/* Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <motion.img
                      src={src}
                      alt={`gallery-${idx}`}
                      className="w-full h-72 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden mt-15">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #667eea 100%)",
            backgroundSize: "200% 200%",
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h4 className="text-4xl md:text-5xl font-black mb-6">
              Want a Guided Tour?
            </h4>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Book a site visit or request an interactive walkthrough of the master plan
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="tel:+919999999999"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
              >
                <FaPhone />
                Call Now
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default MasterPlan;