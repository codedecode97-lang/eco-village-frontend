import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";
import GSAPTextReveal from "../../../components/animations/GSAPTextReveal";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-[#D9EEE2] overflow-hidden"
    >
      {/* Organic Background Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d9eee2]/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EAB308]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/60 backdrop-blur-lg rounded-full border border-white/50 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-forest-600"></span>
              </span>
              <span className="text-sm font-bold text-forest-900 tracking-widest uppercase">
                Get In Touch
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-forest-950 font-heading leading-tight">
            Let's Discuss {""}
            <span className="text-forest-600/80 italic inline-block">
              <GSAPTextReveal elementType="span" delay={0.2}>
                Your Future
              </GSAPTextReveal>
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
            Visit our site or reach out to our sales team for a personalized
            tour of Eco Village.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Info & Map (Spend 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 gap-5 pt-6">
              {[
                {
                  label: "Call Us",
                  val: "09422799537",
                  link: "tel:+919999999999",
                  icon: FaPhoneAlt,
                  color: "bg-blue-50 text-blue-600",
                },
                {
                  label: "Email Us",
                  val: "info@eco-village.co.in",
                  link: "mailto:info@ecourban.com",
                  icon: FaEnvelope,
                  color: "bg-amber-50 text-amber-600",
                },
                {
                  label: "Visit Office",
                  val: "Bardhaman, West Bengal",
                  link: "https://www.google.com/maps?ll=23.475155,87.641963&z=9&t=h&hl=en&gl=IN&mapclient=embed&cid=3758190289065925971",
                  icon: FaMapMarkedAlt,
                  color: "bg-emerald-50 text-emerald-600",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target={item.label === "Visit Office" ? "_blank" : undefined}
                  rel={
                    item.label === "Visit Office"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group relative flex items-center gap-6 p-6 bg-white rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-forest-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 w-1 bg-forest-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom`}
                  />

                  <div
                    className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon size={22} />
                  </div>

                  <div className="relative z-10 flex-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-xl font-bold text-forest-950 group-hover:text-forest-700 transition-colors">
                      {item.val}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Stylish Map Container */}
            <div className="relative h-80 w-full mt-8 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border-[8px] border-white bg-white group hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-500">
              <iframe
                title="Eco Village Map"
                className="w-full h-full rounded-[2rem] grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d365349.3285936645!2d87.64196335548718!3d23.47515527784462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1seco%20village%20burdwan!5e1!3m2!1sen!2sin!4v1760361846190!5m2!1sen!2sin"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-forest-900 tracking-wide">
                  Eco Village Site
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form  */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
