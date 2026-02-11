import { motion } from "framer-motion";
import {
  FaLeaf,
  FaRoad,
  FaChild,
  FaBuilding,
  FaPray,
  FaTree,
  FaDumbbell,
  FaRecycle,
} from "react-icons/fa";

import GSAPTextReveal from "../../../components/animations/GSAPTextReveal";
import GSAPStaggerWrapper from "../../../components/animations/GSAPStaggerWrapper";

import mainRoad from "../../../../public/Amenity_ 30ft main road and 20ft link road.jpg.jpeg";
import openGym from "../../../../public/Amenity_  Open Gym.jpg.jpeg";
import amenityTemple from "../../../../public/Amenity_  Temple.jpg.jpeg";
import chatPujaGhat from "../../../../public/Amenity_ Chhath Puja Ghats.jpg.jpeg";
import clubHouse from "../../../../public/Amenity_ Club house.jpg.jpeg";
import communityHall from "../../../../public/Amenity_ Community hall.jpg.jpeg";
import kidsPlayArea from "../../../../public/Amenity_ Kids Play area.jpg.jpeg";
import garden from "../../../../public/Amenity_ Vibrant garden.jpg.jpeg";
import palyGround from "../../../../public/playground.png";

const features = [
  {
    title: "Grand Entrance & Wide Roads",
    icon: FaRoad,
    desc: "30 ft wide main road and 20 ft internal link roads for smooth traffic flow and a premium first impression.",
    image: mainRoad,
  },
  {
    title: "Vibrant Green Garden",
    icon: FaTree,
    desc: "Beautifully landscaped gardens offering fresh air and peaceful walks.",
    image: garden,
  },
  {
    title: "Kids Play Area",
    icon: FaChild,
    desc: "Safe and joyful play zones designed for children’s development.",
    image: kidsPlayArea,
  },
  {
    title: "Open Gym",
    icon: FaDumbbell,
    desc: "Outdoor fitness spaces promoting a healthy lifestyle.",
    image: openGym,
  },
  {
    img_title: "42,000+ sq.ft. Club House",
    title: "Club House",
    icon: FaBuilding,
    desc: "A modern clubhouse for celebrations and indoor recreation.",
    image: clubHouse,
  },
  {
    title: "Community Hall",
    icon: FaBuilding,
    desc: "Spacious hall for events and cultural programs.",
    image: communityHall,
  },
  {
    title: "Temple",
    icon: FaPray,
    desc: "A serene spiritual space for daily prayers.",
    image: amenityTemple,
  },
  {
    img_title: "1.4 acres private pond with Chhath ghat",
    title: "Chhath Puja Ghats",
    icon: FaPray,
    desc: "Dedicated ghats preserving traditions and values.",
    image: chatPujaGhat,
  },
  {
    img_title: "50,000+ sq.ft. Dedicated Playground",
    title: "Sustainable Living",
    icon: FaRecycle,
    desc: "Designed to live green, clean, and conscious.",
    image: palyGround,
  },
];

const Amenities = () => (
  <section
    // id="ourofferings"
    className="relative py-32 bg-forest-900 overflow-hidden"
  >
    {/* Background Leaves */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute md:top-40 top-20 md:right-10 right-5 opacity-10 text-white rotate-45">
        <FaLeaf size={300} />
      </div>
      <div className="absolute md:bottom-20 bottom-10 md:left-10 left-5 opacity-10 text-white -rotate-45">
        <FaLeaf size={300} />
      </div>
    </div>

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h3 className="text-white text-4xl md:text-5xl font-bold mb-4">
          World-Class{" "}
          <span className="text-forest-400 italic">
            <GSAPTextReveal elementType="span">
              Amenities
            </GSAPTextReveal>
          </span>
        </h3>

  <p className="text-lg text-forest-100 max-w-2xl mx-auto leading-relaxed font-light">
  Experience over{" "}
  <span className="text-white font-semibold">
    25+ premium amenities
  </span>{" "}
  curated to elevate your living standards and foster a vibrant community.
</p>

      </motion.div>

      {/* Grid */}
      <GSAPStaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group relative h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer"
          >
            {/* Image */}
            <div className="absolute inset-0">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition duration-300" />
            </div>

            {/* 🔥 Top Left Badge */}
            {feature.img_title && (
              <div className="absolute top-4 left-4 z-20">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-xl shadow-lg">
  {feature.img_title}
</div>

              </div>
            )}

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
             <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 text-white border border-white/20 group-hover:bg-green-600 group-hover:text-white transition duration-300">
  <feature.icon size={22} />
</div>


              <h3 className="text-2xl font-bold text-white leading-tight">
                {feature.title}
              </h3>

              {/* 🔥 ORIGINAL COLLAPSE ANIMATION BACK */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                <div className="overflow-hidden">
                  <p className="text-white/80 text-sm leading-relaxed pt-3 pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {feature.desc}
                  </p>

                  <div className="w-full h-[1px] bg-white/20 group-hover:bg-green-400/60 transition-colors duration-300 origin-left scale-x-0 group-hover:scale-x-100 mt-2" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </GSAPStaggerWrapper>
    </div>
  </section>
);

export default Amenities;
