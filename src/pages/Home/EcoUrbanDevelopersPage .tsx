import { motion } from "framer-motion";
import sitePlan from '../../assets/2.jpg';

// ================= ABOUT US =================
const AboutUsSection = () => (
  <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
    {/* Decorative Accent */}
    <motion.div
      className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-40 -z-10"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
    />
    <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:gap-16">
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-10 h-1 bg-blue-900 rounded-full"></span>
          <span className="uppercase text-blue-700 font-semibold tracking-widest text-xs">About Us</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
          Transforming Land into Vibrant Communities
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At <span className="font-bold text-blue-800">Eco Urban Developers LLP</span>, we specialize in transforming vast stretches of land into vibrant and eco-friendly residential communities. Based in Bardhhaman, West Bengal, we are passionate about creating spaces that blend modern living with the serenity of nature, ensuring a lifestyle that is both luxurious and sustainable.
        </p>
      </motion.div>
      <motion.div
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
          alt="Eco Urban Developers"
          className="rounded-3xl shadow-2xl border-4 border-blue-100 w-full max-w-md object-cover"
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(30,58,138,0.18)" }}
          transition={{ type: 'spring', stiffness: 120 }}
        />
      </motion.div>
    </div>
  </section>
);

// ================= FLAGSHIP PROJECT =================
const FlagshipProjectSection = () => (
  <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50 relative overflow-hidden">
    {/* Decorative Accent */}
    <motion.div
      className="absolute bottom-0 right-0 w-40 h-40 bg-blue-100 rounded-full opacity-30 -z-10"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
    />
    <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:gap-16">
      <motion.div
        className="md:w-1/2 order-2 md:order-1 mt-12 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80"
          alt="Eco Village Project"
          className="rounded-3xl shadow-2xl border-4 border-blue-100 w-full max-w-md object-cover"
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(30,58,138,0.18)" }}
          transition={{ type: 'spring', stiffness: 120 }}
        />
      </motion.div>
      <motion.div
        className="md:w-1/2 order-1 md:order-2"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-10 h-1 bg-blue-900 rounded-full"></span>
          <span className="uppercase text-blue-700 font-semibold tracking-widest text-xs">Flagship Project</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
          Our Flagship Project: Eco Village
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          A meticulously planned society offering residential plots, duplexes, and simplex homes. Our goal is to provide high-quality living spaces at affordable prices, ensuring our customers enjoy the perfect balance of comfort, convenience, and community.
        </p>
      </motion.div>
    </div>
  </section>
);

// ================= FEATURES =================
const features = [
  { title: "Grand Society Gate", image: "https://www.shutterstock.com/image-illustration/3d-images-modeling-work-societys-260nw-2065083827.jpg" },
  { title: "Black-Top Roads", image: "https://i.pinimg.com/736x/f0/7f/81/f07f817845e6c14b862bd08955f4d237.jpg" },
  { title: "Children's Zone", image: "https://www.shutterstock.com/image-photo/colorful-kids-play-garden-children-600nw-2485746507.jpg" },
  { title: "Clubhouse", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6O9mEI9-ia52c6GttJgfCr9VzEwZzlxjv4A&s" },
  { title: "Temple & Garden", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP14Ck973D2CirIUid4VSy2xQf7A_WQrmWEw&s" },
  { title: "Tree-Lined Avenues", image: "https://www.shutterstock.com/image-photo/treelined-avenue-260nw-211042516.jpg" },
  { title: "Street Lighting", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH2XLVCprc8u6DFZ_ZIq1Zo97YZis_WwFSg&s" },
  { title: "24x7 Security", image: "https://media.istockphoto.com/id/842004548/photo/security-guard-standing-arm-crossed.jpg?s=612x612&w=0&k=20&c=5mRb8Aq07t7B0GnusG5gVxBe4sUPaVIsfctwSzq-VQA=" },
];

const FeaturesSection = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    {/* Decorative Accent */}
    <motion.div
      className="absolute top-10 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-30 -z-10"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.2 }}
    />
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="block w-10 h-1 bg-blue-900 rounded-full"></span>
          <span className="uppercase text-blue-700 font-semibold tracking-widest text-xs">Features</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center leading-tight">
          What Makes Eco Village Unique?
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white border border-blue-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 group cursor-pointer"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.12, ease: 'easeOut' }}
            whileHover={{ scale: 1.07, y: -8, boxShadow: '0 12px 32px rgba(30,58,138,0.18)' }}
          >
            <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-blue-100 shadow-md flex items-center justify-center bg-blue-50 group-hover:bg-blue-100 transition-all duration-300">
              <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ================= WHY CHOOSE US =================
const whyChooseUs = [
  {
    title: "Sustainability",
    content: "We integrate green solutions at every step of development.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Amenities",
    content: "Thoughtfully planned features that enhance your lifestyle.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },
  {
    title: "Affordability",
    content: "Premium living spaces at prices that suit your budget.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLW3bcYpF-07FhP3HUOXcG4XoRN7AX_-naXg&s",
  },
  {
    title: "Trust",
    content: "Transparency, quality, and customer satisfaction are at the core.",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
  },
];

const WhyChooseUsSection = () => (
  <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50 relative overflow-hidden">
    {/* Decorative Accent */}
    <motion.div
      className="absolute left-0 bottom-0 w-32 h-32 bg-blue-100 rounded-full opacity-30 -z-10"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.2 }}
    />
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="block w-10 h-1 bg-blue-900 rounded-full"></span>
          <span className="uppercase text-blue-700 font-semibold tracking-widest text-xs">Why Choose Us</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center leading-tight">
          Why Choose Us?
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {whyChooseUs.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white/90 border border-blue-100 backdrop-blur-md rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.12, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(30,58,138,0.18)" }}
          >
            <div className="w-20 h-20 mb-6 rounded-full overflow-hidden border-4 border-blue-100 shadow-md flex items-center justify-center bg-blue-50 group-hover:bg-blue-100 transition-all duration-300">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-base">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ================= CALL TO ACTION =================
const CTASection = () => (
  <section className="py-24 bg-white text-blue-900 relative overflow-hidden">
    {/* Decorative Accent */}
    <motion.div
      className="absolute top-0 left-0 w-40 h-40 bg-blue-100/20 rounded-full -z-10"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.2 }}
    />
    <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:gap-16">
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-10 h-1 bg-blue-900 rounded-full"></span>
          <span className="uppercase text-blue-700 font-semibold tracking-widest text-xs">Get Started</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Your Dream Home Awaits
        </h2>
        <p className="text-lg md:text-xl mb-8 text-blue-900/90 max-w-xl">
          Whether you're looking for a residential plot or a ready-to-move-in duplex or simplex, Eco Village has something for everyone. Let us help you take the first step toward owning a home in a community built with care, precision, and love.
        </p>
        <motion.button
          className="px-10 py-4 bg-blue-900 text-white font-bold rounded-xl shadow-xl hover:bg-blue-100 hover:text-blue-900 transition-all duration-300 text-lg tracking-wide"
          whileHover={{ scale: 1.07 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Explore Homes
        </motion.button>
      </motion.div>
      <motion.div
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
          alt="Dream Home"
          className="rounded-3xl shadow-2xl border-4 border-blue-100 w-full max-w-md object-cover"
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(30,58,138,0.18)" }}
          transition={{ type: 'spring', stiffness: 120 }}
        />
      </motion.div>
    </div>
  </section>
);

// ================= MAIN PAGE =================
const EcoUrbanDevelopersPage = () => (
  <>
    {/* <HeroSection /> */}
    <AboutUsSection />
    <FlagshipProjectSection />
    <FeaturesSection />
    <WhyChooseUsSection />
    <CTASection />
    <motion.section 
      className="my-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h2 
        className="text-3xl font-bold text-blue-900 mb-2 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Eco Village Master Plan
      </motion.h2>
      <motion.p 
        className="text-center text-gray-600 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Explore the complete layout of our township, including plots, amenities, and green spaces.
      </motion.p>
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img src={sitePlan} alt="Eco Village Master Plan" className="rounded-lg shadow-lg max-w-full h-auto border border-blue-100" />
      </motion.div>
    </motion.section>
    {/* <TestimonialsSection /> */}
  </>
);

export default EcoUrbanDevelopersPage;
