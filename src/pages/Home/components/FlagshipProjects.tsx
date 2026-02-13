import { motion } from "framer-motion";

import GSAPTextReveal from "../../../components/animations/GSAPTextReveal";
import TextMarquee from "../../../components/animations/TextMarquee";
import FlagshipProject from "../../../assets/flagshipproject.MP4";
import primeLocation from "../../../../public/primeLocation.jpeg";
import primeLfullyPlannedTownshipocation from "../../../../public/fullyPlannedTownship.jpeg";
import primeHighwayConnectiviry from "../../../../public/primeHighwayConnectiviry.jpeg";
import smartSecruity from "../../../../public/smartSecruity.jpeg";
import FreeholdOwnership from "../../../../public/FreeholdOwnership.jpeg";
import GreenLandscapeZones from "../../../../public/GreenLandscapeZones.jpeg";
import SmartFutureInvestment from "../../../../public/SmartFutureInvestment.jpeg";
import SpaciousOpenAreas from "../../../../public/SpaciousOpenAreas.jpeg";
import wideRoas from "../../../../public/wideinternalroads.jpeg";


import Amenities from "./Amenities";


const features = [
  { image: primeLocation },
  { image: wideRoas },
  { image: primeLfullyPlannedTownshipocation },
  { image: FreeholdOwnership },
  { image: smartSecruity },
  { image: primeHighwayConnectiviry },
  { image: GreenLandscapeZones },
  { image: SpaciousOpenAreas },
  { image: SmartFutureInvestment },
];

const FlagshipProjects = () => (
  <>
  <section
    id="flagshipproject"
    className="relative z-10 py-32 bg-[#e3efe8] overflow-hidden"
  >
    {/* Subtle Gradient for Depth (No Patterns/Bubbles) */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-stone-200/20 pointer-events-none" />

    {/* Top Wave Divider - White "Sky" Dipping into Beige "Hill" */}
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[120px]"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="#e3efe8"
        ></path>
      </svg>
    </div>

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mt-4">
      {/* Centered Section Label */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/30 backdrop-blur-lg rounded-full border border-white/50 shadow-lg shadow-black/5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-forest-600"></span>
          </span>
          <span className="text-sm font-bold text-forest-900 tracking-widest uppercase">
            Flagship Project
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        {/* Heading Section */}
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-forest-950 leading-tight font-heading">
            Eco Village{" "}
            <span className="mt-2 md:mt-4 text-2xl md:text-4xl text-forest-700 block">
              <GSAPTextReveal elementType="span">
                A Township Like Bardhaman Has Never Seen Before
              </GSAPTextReveal>
            </span>
          </h2>
        </div>

        {/* Video Section - Full Width/Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto w-full"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-[4px] md:border-[6px] border-white/50">
            <video
              src={FlagshipProject}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent"></div>

            {/* Floating feature badge - Dark Green Theme */}
           
          </div>
        </motion.div>

        {/* Content Paragraphs - Below Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
 <div className="text-lg text-slate-600 leading-relaxed text-justify space-y-6 [&_strong]:text-green-600">
  <p>
    <strong>Eco Village</strong> is a landmark residential township
    redefining modern living in Bardhaman. Thoughtfully planned across{" "}
    <strong>35+ acres</strong>, this integrated, eco-friendly gated
    community blends nature, comfort, and connectivity to create a
    truly elevated lifestyle.
  </p>

  <p>
    Strategically located in{" "}
    <strong>Bardhaman’s fastest-growing corridor</strong>, just{" "}
    <strong>10–15 minutes from the city center</strong>, Eco Village
    offers the rare privilege of peaceful green living without
    sacrificing urban convenience. With seamless{" "}
    <strong>highway connectivity via the Bardhaman–Katwa Highway</strong>,
    residents enjoy excellent access to schools, markets,
    healthcare, and transport hubs.
  </p>

  <p>
    Designed for{" "}
    <strong>end users, investors, and weekend home buyers</strong>,
    Eco Village offers a diverse range of residential options including{" "}
    <strong>
      residential plots, 2BHK Simplex House, 3BHK Duplex House,
      4BHK Duplex Villa, and farmhouses
    </strong>
    —each crafted to provide comfort, privacy, and long-term value.
  </p>

  <p>
    Eco Village is not just a residential project; it is a{" "}
    <strong>self-sustained lifestyle ecosystem</strong>, built for
    today’s needs and tomorrow’s aspirations.
  </p>
</div>


        </motion.div>
      </div>

      {/* Modern Text Texture Transition - Full Width */}
      <div className="mt-24 mb-24 border-y border-white/5 py-8 overflow-hidden w-screen max-w-[100vw] relative left-[50%] -translate-x-[50%] bg-[#1E3D2F]">
        <TextMarquee
          text="SUSTAINABLE LIVING • MODERN ARCHITECTURE • GREEN SPACES • COMMUNITY FIRST • "
          className="text-6xl md:text-8xl font-heading font-bold text-white/5 tracking-tight uppercase"
          speed={25}
        />
      </div>

 

   
    </div>
  </section>
  <Amenities /> 
     {/* Key Highlights Section - Modern Premium Grid */}
      <section className="mt-32 mb-5 relative px-4 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-forest-950 text-4xl md:text-5xl font-heading font-bold  ">
            Signature{" "}
            <span className="text-forest-600 italic inline-block">
              <GSAPTextReveal elementType="span" delay={0.2}>
                Features
              </GSAPTextReveal>
            </span>
          </h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-slate-600 text-lg mt-4"
          >
            Distinct qualities that make Eco Village the ultimate destination
            for sustainable living.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 bg-forest-400 mx-auto mt-6 rounded-full"
          />
        </motion.div>

        {/* Dynamic Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 p-2 cursor-pointer">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer h-64"
            >
              <img
                src={item.image}
                alt="Feature"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

      
      </section>
  </>
);

export default FlagshipProjects;
