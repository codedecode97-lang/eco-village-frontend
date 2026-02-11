import { motion } from "framer-motion";
import GSAPTextReveal from "../../../components/animations/GSAPTextReveal";
import GSAPStaggerWrapper from "../../../components/animations/GSAPStaggerWrapper";

const whyChooseUs = [
  {
    title: "Sustainability",
    content: "We integrate green solutions at every step of development.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Amenities",
    content: "Thoughtfully planned features that enhance your lifestyle.",
    image:
      "https://q-xx.bstatic.com/xdata/images/hotel/max500/389938873.jpg?k=9584e8cc2842bcc3478335cb6941d16a92d85ba23282c8250aab9e6281aac6e6&o=",
  },
  {
    title: "Affordability",
    content: "Premium living spaces at prices that suit your budget.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Trust",
    content:
      "Transparency, quality, and customer satisfaction are at the core.",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
  },
];

const WhyChooseUs = () => (
  <section
    // id="testimonials"
    className="relative py-32 bg-[#d9eee2] overflow-hidden"
  >
    {/* Background Decor */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-200 to-transparent opacity-50" />

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/15 rounded-full border border-white/40 shadow-lg mb-6">
          <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
          <span className="text-sm font-semibold text-forest-900 tracking-wide uppercase">
            Why Choose Us
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-forest-950 font-heading">
          Built on{" "}
          <span className="text-forest-600 inline-block ">
            <GSAPTextReveal elementType="span">Trust & Quality</GSAPTextReveal>
          </span>
        </h2>
      </motion.div>

      {/* Cards Grid - Large Image Style */}
      <GSAPStaggerWrapper className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
        {whyChooseUs.map((item, idx) => (
          <div
            key={idx}
            className="group relative h-full hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="relative h-full bg-white/15  rounded-3xl shadow-lg     overflow-hidden hover:shadow-2xl   transition-all duration-500 flex flex-col">
              {/* Large Image Header */}
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-white/10  group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="py-4 px-6 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-forest-900 mb-2 font-heading group-hover:text-forest-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed  text-sm flex-1">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </GSAPStaggerWrapper>
    </div>
  </section>
);

export default WhyChooseUs;
