import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const canSubmit = Boolean(name.trim() && email.trim() && phone.trim());

  useEffect(() => {
    if (status === "success") {
      const t = setTimeout(() => setStatus("idle"), 3500);
      return () => clearTimeout(t);
    }
  }, [status]);

  // ✅ API Integration for Contact Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("sending");

    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("❌ Error submitting contact form:", err);
      setStatus("error");
    }
  };

  return (
    <main className="overflow-x-hidden relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Magical floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ y: [0, 50, -30, 0], x: [0, -30, 20, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-cyan-400/15 to-green-400/15 rounded-full blur-3xl"
          animate={{ y: [0, -40, 30, 0], x: [0, 30, -20, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold rounded-full shadow-lg mb-6"
            >
              Contact Us
            </motion.span>

            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 mb-6">
              Let's Start a Conversation
            </h1>

            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Connect with our advisors for personalized assistance — site visits, pricing details, financing options and after-sales support.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: FaPhoneAlt,
                  title: "Call Us",
                  content: "+91 99999 99999",
                  href: "tel:+919999999999",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: FaEnvelope,
                  title: "Email",
                  content: "info@ecourban.com",
                  href: "mailto:info@ecourban.com",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: FaMapMarkerAlt,
                  title: "Visit",
                  content: "Bardhhaman, West Bengal",
                  href: "#map",
                  color: "from-green-500 to-emerald-500",
                },
              ].map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity`} />
                  <a
                    href={card.href}
                    className="relative block bg-white rounded-2xl p-6 shadow-xl border border-slate-100"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <card.icon className="text-white text-2xl" />
                    </div>
                    <h4 className="font-black text-xl text-blue-900">{card.title}</h4>
                    <p className="text-slate-600 font-semibold mt-2">{card.content}</p>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-20" />
              <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/50">
                <h3 className="text-3xl font-black text-blue-900 mb-6">Send us a message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter Name"
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter Email"
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone *</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="Enter Phone"
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none font-medium"
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.button
                      type="submit"
                      disabled={!canSubmit || status === "sending"}
                      whileHover={{ scale: canSubmit ? 1.02 : 1, y: canSubmit ? -2 : 0 }}
                      whileTap={{ scale: canSubmit ? 0.98 : 1 }}
                      className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "Sending..." : "Submit Enquiry"}
                    </motion.button>

                    <p className="text-sm text-slate-600">
                      Or call <a href="tel:+919999999999" className="text-blue-600 font-bold hover:underline">+91 99999 99999</a>
                    </p>
                  </div>

                  <AnimatePresence>
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-xl"
                      >
                        <FaCheckCircle className="text-green-600 text-2xl" />
                        <div>
                          <p className="font-bold text-green-900">Thanks! We received your message.</p>
                          <p className="text-sm text-green-700">We will contact you shortly.</p>
                        </div>
                      </motion.div>
                    )}

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-red-50 border-2 border-red-200 text-red-700 rounded-xl"
                      >
                        Something went wrong. Please try again later.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: "easeOut" }} className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg bg-gray-50">
              <iframe
                title="Eco Village Burdwan map"
                className="w-full h-72 sm:h-96 border-0"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d365349.3285936645!2d87.64196335548718!3d23.47515527784462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1seco%20village%20burdwan!5e1!3m2!1sen!2sin!4v1760361846190!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            <motion.aside initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }} className="bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10">
              <h4 className="font-semibold text-blue-900">Visit Us</h4>
              <p className="mt-2 text-sm text-gray-700">Office hours: Mon - Sat, 10:00 AM - 6:00 PM</p>
              <p className="mt-4 text-sm text-gray-700">Please call ahead to schedule a site visit — we’ll be happy to arrange a guided tour.</p>
              <div className="mt-4">
                <a href="/contact" className="inline-block px-4 py-2 bg-gradient-to-br from-blue-900 to-indigo-700 text-white rounded-full shadow-md">Schedule Visit</a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
