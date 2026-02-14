import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaUsers, FaProjectDiagram, FaCity, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import teamImg from "../../assets/2.jpg";

// Animated counter hook
function useCount(to: number, duration = 1000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = 0;
    const startTime = performance.now();
    const animate = (t: number) => {
      const elapsed = t - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * (to - start) + start);
      setValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return value;
}

const About: React.FC = () => {
  const happy = useCount(250, 1400);
  const years = useCount(15, 1200);
  const acres = useCount(30, 1000);

  return (
    <main className="overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Magical floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, 50, -30, 0],
            x: [0, 30, -20, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.3, 0.5, 0.4, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
          animate={{ 
            y: [0, -40, 30, 0],
            x: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
            opacity: [0.2, 0.4, 0.3, 0.2]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold rounded-full shadow-lg">
                  About Us
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6 text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 leading-tight"
              >
                Building Dreams,
                <br />
                Creating Communities
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-6 text-lg text-slate-700 leading-relaxed"
              >
                At <span className="font-bold text-blue-900">Eco Urban Developers LLP</span>, we design and build sustainable residential communities with a focus on quality, transparency, and long-term value.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="#mission"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300"
                >
                  Our Mission
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 z-10"
                  animate={{ opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <img 
                  src={teamImg} 
                  alt="Eco Urban Project" 
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border-4 border-blue-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-blue-900">{happy}+</p>
                    <p className="text-sm font-semibold text-slate-600">Happy Families</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section id="mission" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mission & Vision Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-black text-blue-900"
                >
                  Our Mission
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 text-lg text-slate-700 leading-relaxed"
                >
                  To create inclusive, well-planned neighbourhoods that balance ecology, community and economic value. We prioritise green spaces, intelligent layouts and durable construction so your investment grows in value while improving everyday life for residents.
                </motion.p>
              </div>

              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-black text-blue-900"
                >
                  Our Vision
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 text-lg text-slate-700 leading-relaxed"
                >
                  Be a trusted developer known for integrity, timely delivery and thoughtful design — shaping the future of living in West Bengal and neighbouring regions.
                </motion.p>
              </div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid sm:grid-cols-3 gap-6 mt-8"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                    <FaUsers className="text-blue-600 text-4xl mb-3" />
                    <p className="text-4xl font-black text-blue-900">{happy}+</p>
                    <p className="text-sm font-semibold text-slate-600 mt-1">Happy Families</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-green-100">
                    <FaLeaf className="text-green-600 text-4xl mb-3" />
                    <p className="text-4xl font-black text-blue-900">{years}+</p>
                    <p className="text-sm font-semibold text-slate-600 mt-1">Years Experience</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
                    <FaCity className="text-purple-600 text-4xl mb-3" />
                    <p className="text-4xl font-black text-blue-900">{acres}+</p>
                    <p className="text-sm font-semibold text-slate-600 mt-1">Acres Developed</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Why Choose Us Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="sticky top-24 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl shadow-xl border border-blue-100">
                <h4 className="text-2xl font-black text-blue-900 mb-6">Why Choose Us</h4>
                <div className="space-y-4">
                  {[
                    { icon: FaProjectDiagram, text: "Transparent pricing and clear documentation" },
                    { icon: FaPhoneAlt, text: "Timely project delivery and strong after-sales" },
                    { icon: FaCity, text: "Focus on sustainability and community spaces" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-white text-lg" />
                      </div>
                      <span className="text-slate-700 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Team & CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-black text-blue-900">Meet Our Team</h3>
            <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
              A dedicated team of experts committed to delivering excellence in every project
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Amit Roy", role: "Founder & Managing Director", color: "from-blue-500 to-cyan-500" },
              { name: "Suman Das", role: "Head - Operations", color: "from-purple-500 to-pink-500" },
              { name: "Rina Gupta", role: "Lead Architect", color: "from-green-500 to-emerald-500" },
              { name: "Anil Sen", role: "Sales & Customer Relations", color: "from-orange-500 to-red-500" },
            ].map((member, idx) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-slate-100 overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${member.color} rounded-2xl mb-4 flex items-center justify-center text-white font-black text-5xl relative overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{ 
                        x: ['-100%', '100%'],
                      }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <span className="relative z-10">{member.name.split(' ')[0][0]}</span>
                  </div>
                  <h5 className="font-black text-xl text-blue-900">{member.name}</h5>
                  <p className="text-sm text-slate-600 font-semibold mt-1">{member.role}</p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            />
            <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="text-white">
                <h4 className="text-3xl font-black">Ready to discuss your project?</h4>
                <p className="text-blue-100 mt-2 text-lg">Contact our advisors for a free consultation</p>
              </div>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-900 rounded-xl font-black shadow-xl hover:shadow-2xl transition-all"
              >
                Contact Us Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;