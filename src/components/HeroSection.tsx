import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Image with smooth Ken Burns effect - Cinematic night scene with illuminated skyscrapers */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=3840&q=90')",
          filter: "brightness(0.7) contrast(1.1) saturate(1.2)",
        }}
        initial={{ scale: 1.1, x: 0, y: 0 }}
        animate={{ 
          scale: [1.1, 1.15, 1.12, 1.1],
          x: [0, -15, 8, 0],
          y: [0, -8, 4, 0]
        }}
        transition={{ 
          duration: 35,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.33, 0.66, 1]
        }}
      />

      {/* Premium Multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-slate-900/50 to-black/70" />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
        animate={{
          opacity: [0.6, 0.8, 0.7, 0.8, 0.6]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Enhanced animated light beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
        animate={{ 
          x: [0, 100, -50, 0],
          opacity: [0, 0.5, 0.3, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
        animate={{ 
          x: [0, -80, 60, 0],
          opacity: [0, 0.4, 0.2, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* Premium floating gradient orbs with glow */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)",
        }}
        animate={{ 
          y: [0, 50, -30, 40, 0],
          x: [0, 40, -20, 30, 0],
          opacity: [0.4, 0.7, 0.5, 0.8, 0.4],
          scale: [1, 1.3, 0.9, 1.2, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 100%)",
        }}
        animate={{ 
          y: [0, -60, 40, -50, 0],
          x: [0, -50, 30, -40, 0],
          opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
          scale: [1, 1.4, 0.8, 1.3, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.03) 50%, transparent 100%)",
        }}
        animate={{ 
          y: [0, -50, 30, -40, 0],
          x: [0, -40, 20, -30, 0],
          opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
          scale: [1, 1.2, 0.9, 1.3, 1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-32 w-72 h-72 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(147, 51, 234, 0.03) 50%, transparent 100%)",
        }}
        animate={{ 
          y: [0, 45, -25, 35, 0],
          x: [0, 35, -15, 25, 0],
          opacity: [0.2, 0.5, 0.3, 0.4, 0.2],
          scale: [1, 1.35, 0.85, 1.2, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Enhanced floating particles with varied sizes */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: i % 3 === 0 
              ? "rgba(59, 130, 246, 0.4)" 
              : i % 3 === 1 
              ? "rgba(6, 182, 212, 0.3)" 
              : "rgba(251, 191, 36, 0.25)",
            boxShadow: i % 3 === 0 
              ? "0 0 10px rgba(59, 130, 246, 0.5)" 
              : i % 3 === 1 
              ? "0 0 10px rgba(6, 182, 212, 0.4)" 
              : "0 0 10px rgba(251, 191, 36, 0.4)",
          }}
          animate={{
            y: [0, -40, -80, -40, 0],
            x: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
            opacity: [0, 0.6, 1, 0.6, 0],
            scale: [0, 1, 1.5, 1, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Hero content with parallax effect */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-10"
        >
      

          {/* Main heading with enhanced gradient and glow */}
         {/* Main heading with enhanced gradient and glow */}
<div className="px-4">
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
    className="font-black text-white leading-tight tracking-tight text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw]"
  >
    <motion.span
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7, duration: 0.8 }}
      className="block text-white/90"
    >
      Welcome to
    </motion.span>
    <motion.span
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 1, type: "spring", stiffness: 80 }}
      className="block relative bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
    >
      Eco Urban Developers
      <motion.div
        className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full shadow-lg shadow-blue-500/50"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
      />
    </motion.span>
  </motion.h1>
</div>


          {/* Enhanced Subtitle with elegant fade-in */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="relative"
            >
             Building Dreams, Developing Communities
              <motion.span
                className="inline-block ml-2 text-cyan-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✦
              </motion.span>
            </motion.span>
          </motion.p>

      
          {/* Stats Counter - NEW FEATURE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8"
          >
            {[
              { number: "250+", label: "Happy Families" },
              { number: "15+", label: "Years Experience" },
              { number: "30+", label: "Acres Developed" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + i * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 30px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll indicator with premium animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4 text-white/70 cursor-pointer hover:text-white transition-colors group"
          >
            <span className="text-sm font-semibold tracking-widest uppercase">Scroll to explore</span>
            <motion.div
              className="relative"
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-100"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
