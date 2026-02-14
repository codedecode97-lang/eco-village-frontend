import { motion } from "framer-motion";

const properties = [
  {
    image:
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "PS Logistics Park",
    type: "Industrial Units",
    price: "₹1.66 Cr",
    priceLabel: "onwards",
    status: "Under Construction",
    location: "Kona Expressway",
    views: null,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/022/337/200/small_2x/modern-house-illustration-generative-ai-free-photo.jpg",
    title: "Sansara",
    type: "3/4/4.5/5 BHK Duplex",
    price: "₹3.59 Cr",
    priceLabel: "onwards",
    status: "Under Construction",
    location: "Howrah",
    views: 397315,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/022/903/424/small_2x/ai-generative-3d-modern-luxury-real-estate-house-for-sale-and-rent-luxury-property-concept-ai-generated-artwork-photo.jpg",
    title: "Jade Grove",
    type: "2BHK, 3BHK, 4BHK",
    price: "₹1.03 Cr",
    priceLabel: "onwards",
    status: "Under Construction",
    location: "Near Entally",
    views: null,
  },
  {
    image:
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "PS Logistics Park",
    type: "Industrial Units",
    price: "₹1.66 Cr",
    priceLabel: "onwards",
    status: "Under Construction",
    location: "Kona Expressway",
    views: null,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/022/337/200/small_2x/modern-house-illustration-generative-ai-free-photo.jpg",
    title: "Sansara",
    type: "3/4/4.5/5 BHK Duplex",
    price: "₹3.59 Cr",
    priceLabel: "onwards",
    status: "Under Construction",
    location: "Howrah",
    views: 397315,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/022/903/424/small_2x/ai-generative-3d-modern-luxury-real-estate-house-for-sale-and-rent-luxury-property-concept-ai-generated-artwork-photo.jpg",
    title: "Jade Grove",
    type: "2BHK, 3BHK, 4BHK",
    price: "₹1.03 Cr",
    priceLabel: "onwards",
    status: "Under Construction",
    location: "Near Entally",
    views: null,
  },
];

function Property() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-blue-900 tracking-wide uppercase">Featured Properties</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Properties
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover premium residential and commercial spaces designed for modern living
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, idx) => (
            <motion.div
              key={`${prop.title}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-slate-900 rounded-full text-xs font-semibold shadow-lg">
                    {prop.status}
                  </span>
                </div>

                {/* Views Badge */}
                {prop.views && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/80 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 5c-7.633 0-11 6.5-11 7s3.367 7 11 7 11-6.5 11-7-3.367-7-11-7zm0 12c-5.177 0-8.241-4.217-9.13-5 .889-.783 3.953-5 9.13-5 5.177 0 8.241 4.217 9.13 5-.889.783-3.953 5-9.13 5zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                      </svg>
                      {prop.views.toLocaleString()}
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title and Price */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-sm text-slate-500">{prop.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {prop.price}
                    </div>
                    <div className="text-xs text-slate-500">{prop.priceLabel}</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                  <span className="text-sm text-slate-600 font-medium">{prop.location}</span>
                </div>

                {/* View Details Button */}
                <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  View Details
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Property;
