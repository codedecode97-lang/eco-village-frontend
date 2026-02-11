import React from 'react'
import { motion } from "framer-motion";
import GSAPTextReveal from '../../../components/animations/GSAPTextReveal';
import plot from "../../../../public/plot.jpg.jpeg";
import TWoBHK from "../../../../public/2bhk.jpg.jpeg";
import ThreeBHK from "../../../../public/3bhk.jpg.jpeg";
import FourBHK from "../../../../public/4bhk.jpg.jpeg";
import Grand_Double_Storey_Bungalow from "../../../../public/Grand_Double_Storey_Bungalow_1920x1080.jpg.jpeg";

function OurOffering() {
  return (
    <>
      {/* Residential Options Section */}
      <section    id="ourofferings" className="mt-10 mb-10" >
   <div className="flex justify-center mb-8">
  <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/30 backdrop-blur-lg rounded-full border border-white/50 shadow-lg shadow-black/5">
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-forest-600"></span>
    </span>
    <span className="text-sm font-bold text-forest-900 tracking-widest uppercase">
      Our Offerings
    </span>
  </div>
</div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 px-4"
        >
          <h3 className="text-forest-950 text-4xl md:text-5xl font-heading font-bold">
            Residential{" "}
            <span className="text-forest-600 italic inline-block">
              <GSAPTextReveal elementType="span" delay={0.2}>
                Options
              </GSAPTextReveal>
            </span>
          </h3>

          <p className="text-slate-600 text-lg mt-4">
            Choose from our diverse range of premium residential configurations
            tailored to your lifestyle and investment goals.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-forest-400 mx-auto mt-6 rounded-full"
          />
        </motion.div>

        {/* Images Grid – 2 per row */}
      {/* Images Grid – 2 per row */}
<div className="max-w-6xl mx-auto space-y-16 px-4">
  {[plot,TWoBHK, ThreeBHK, FourBHK, Grand_Double_Storey_Bungalow].map(
    (image, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: idx * 0.15 }}
        whileHover={{ scale: 1.01 }}
        className="rounded-xl overflow-hidden shadow-xl"
      >
        <img
          src={image}
          alt={`Residential option ${idx + 1}`}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    )
  )}
</div>



      </section>
    </>
  )
}

export default OurOffering
