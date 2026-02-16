import { motion } from "framer-motion";
import { FaLeaf, FaBuilding, FaShieldAlt } from "react-icons/fa";
import GSAPTextReveal from "../../../components/animations/GSAPTextReveal";
import Hero from "../../../assets/aboutus.png";

const AboutUs = () => (
  <section
    id="about"
    className="relative py-12 md:py-12 bg-gradient-to-b from-forest-300 via-forest-200 to-forest-100 overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Centered Label */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/30 backdrop-blur-lg rounded-full border border-white/50 shadow-lg shadow-black/5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-forest-600"></span>
          </span>
          <span className="text-sm font-bold text-forest-900 tracking-widest uppercase">
            About Us
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="relative rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] h-[600px] lg:h-[700px] w-full group">
            <img
              src={Hero}
              alt="Luxury Green Living"
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />

            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

            {/* Integrated Badge - Clean & Stable */}
            <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-md px-10 py-8 rounded-tr-[3rem]">
              <p className="text-5xl font-bold text-forest-950 font-heading">
                15+
              </p>
              <p className="text-sm uppercase tracking-widest text-forest-800/80 mt-1 font-medium">
                Years of Experience
              </p>
            </div>
          </div>

          {/* Decorative Outline - Subtle, Fixed */}
          <div className="absolute inset-0 border-2 border-forest-900/5 rounded-tr-[5rem] rounded-bl-[5rem] translate-x-6 translate-y-6 -z-10" />
        </motion.div>

        {/* Right: Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-10"
        >
          {/* Header */}
          <div>
            <h2 className="text-5xl lg:text-7xl font-bold text-forest-950 leading-[1.05] font-heading">
              <GSAPTextReveal elementType="span">Creating</GSAPTextReveal>{" "}
              <br />
              <span className="font-serif italic text-forest-700 font-light inline-block">
                <GSAPTextReveal elementType="span">Sustainable</GSAPTextReveal>
              </span>{" "}
              <br />
              <GSAPTextReveal elementType="span">Communities</GSAPTextReveal>
            </h2>
          </div>

          {/* Text */}
          <div className="text-lg text-slate-600 font-light leading-relaxed text-justify space-y-6">
            <p>
              At Eco Village, we believe that the future of living lies in
              harmony with nature. Our mission is not only to develop land but
              to create thoughtfully planned communities where modern lifestyles
              blend seamlessly with green, sustainable surroundings.
            </p>
            <p>
              With years of experience and careful planning, we focus on
              building eco-friendly infrastructure, well-designed roads, open
              green spaces, and essential urban amenities that ensure
              comfortable and healthy living. Quality, transparency, and
              customer satisfaction remain at the core of every project we
              undertake, helping our customers make safe and confident
              investments.
            </p>
            <p className="text-forest-900 font-medium border-l-4 border-[#EAB308] pl-4 italic">
              "At Eco Village, Your dream home is more than just an address—it
              is a promise of a greener, healthier, and more prosperous future."
            </p>
          </div>
          {/* Features List */}
          <div className="mt-8 border-t border-forest-900/5 pt-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: FaShieldAlt,
                  title: "Trust",
                  desc: "100% Transparency",
                },
                { icon: FaLeaf, title: "Nature", desc: "Eco-Friendly Living" },
                {
                  icon: FaBuilding,
                  title: "Execution",
                  desc: "Timely Delivery",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative pl-6 group cursor-pointer">
                  {/* Animated Vertical Line */}
                  <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-forest-100 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-forest-500 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </div>

                  <div className="mb-2 text-forest-300 group-hover:text-forest-600 transition-colors duration-300">
                    <item.icon size={24} />
                  </div>

                  <h4 className="text-lg font-bold text-forest-950 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium mt-1 group-hover:text-forest-700/80 transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutUs;
