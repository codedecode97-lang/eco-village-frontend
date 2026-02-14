import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
const testimonials = [
  {
    title: "A Happy Homeowner",
    content:
      "Choosing Eco Village was the best decision we made for our family. The well-planned infrastructure, beautiful landscaping, and peaceful environment make it the perfect place to call home. Our kids love the dedicated play zone, and we enjoy the sense of community here. Thank you, Eco Urban Developers, for creating such a wonderful living space!",
    author: "— Ananya Sharma, Homeowner",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLWsbeN8NHefhwbV4e3kjNpzwIMZnMyU9ZKua1X5STfuaOxKcN9zX9gk8VI5LGMFqqyI&usqp=CAU",
  },
  {
    title: "A Satisfied Investor",
    content:
      "As an investor, I’ve always looked for projects that offer both value and quality, and Eco Village exceeded my expectations. The amenities, like the clubhouse and tree-lined roads, add so much to the property’s appeal. The team at Eco Urban Developers is transparent and professional, making the entire process smooth and stress-free. Highly recommended!",
    author: "— Ravi Gupta, Investor",
    image: "https://media.istockphoto.com/id/1456665538/video/three-businessmen-meeting-and-shaking-hands-in-a-conference-room.jpg?s=640x640&k=20&c=wqTvg9nV-lnqmvF68u6-9RWocdtgVTNXHzM4MkCoLFk=",
  },
  {
    title: "A Nature Lover",
    content:
      "Eco Village truly lives up to its name. The green spaces, gardens, and tree-lined roads make it a haven for nature lovers like me. I love waking up to the fresh air and peaceful surroundings every day. It’s a joy to live in a community that values sustainability and natural beauty.",
    author: "— Priya Sen, Resident",
    image: "https://img.freepik.com/free-photo/red-letters-love-lies-grass-forest_1304-4844.jpg",
  },
  {
    title: "A Young Couple",
    content:
      "As a newly married couple, we were looking for a home that would offer us modern amenities and a good community to start our new life. Eco Village gave us everything we dreamed of—secure, beautifully designed homes with all the facilities we need. The temple and clubhouse are our favorite spots to unwind and connect with other residents. We’re so glad we chose Eco Village!",
    author: "— Arjun & Sneha Mehta, Young Couple",
    image: "https://media.istockphoto.com/id/1160793235/photo/indian-young-couple-stock-image.jpg?s=612x612&w=0&k=20&c=TzPe2Qn8NLLpeLki64irGYGUIEp6Q_Ym7qpXrqw7t_A=",
  },
  {
    title: "A Senior Citizen's Perspective",
    content:
      "Eco Village is a peaceful and secure community where I feel safe and happy. The black-topped roads and streetlights make it easy to take evening walks, and the temple and gardens provide a serene environment for relaxation. The developers have truly thought of everything. I am grateful to be part of such a wonderful society.",
    author: "— Suresh Roy, Senior Citizen",
    image: "https://t4.ftcdn.net/jpg/04/94/19/79/360_F_494197934_E9yjpU4t1v2bL8lsZHGegFipBei3wM3Y.jpg",
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-blue-500",
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group relative h-full"
    >
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
      
      {/* Card */}
      <div className="relative h-full bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 flex flex-col">
        {/* Quote Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
          className={`w-16 h-16 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
        >
          <FaQuoteLeft className="text-white text-2xl" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-black text-blue-900 mb-4">{testimonial.title}</h3>
        
        {/* Content */}
        <p className="text-slate-700 leading-relaxed mb-6 flex-grow">{testimonial.content}</p>
        
        {/* Author with Image */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
          <motion.img
            src={testimonial.image}
            alt={testimonial.title}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <span className="text-slate-900 font-bold">{testimonial.author}</span>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Magical floating gradient blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{
          background: "linear-gradient(135deg, rgba(147, 51, 234, 0.4) 0%, rgba(236, 72, 153, 0.4) 100%)",
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(6, 182, 212, 0.4) 100%)",
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
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
            <span className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold rounded-full shadow-lg">
              TESTIMONIALS
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-blue-700 mb-4">
            What Our Clients Say
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real stories from real people who trusted us with their dream homes
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
        >
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
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #667eea 75%, #764ba2 100%)",
              backgroundSize: "200% 200%",
            }}
          />
          
          <div className="relative z-10 px-8 py-12 md:py-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Ready to Share Your Story?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join hundreds of happy families who found their dream homes with us
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
