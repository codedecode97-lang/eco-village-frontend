import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import logo from "../../assets/logo.jpg";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/ecovillageofficia",
      color: "hover:bg-[#1877F2]",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/eco.villageofficial/",
      color: "hover:bg-[#E4405F]",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/111392006",
      color: "hover:bg-[#0A66C2]",
    },
    {
      icon: FaYoutube,
      link: "https://www.youtube.com/@ecovillage.official",
      color: "hover:bg-[#FF0000]",
    },
  ];

  return (
    <footer className="relative bg-[#112E1A] pt-20 overflow-hidden text-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          
          {/* Brand */}
         {/* Brand */}
<div className="space-y-6">
  <div className="flex items-center gap-2">
    <img
      src={logo}
      alt="Eco Village"
      className="w-12 h-12 object-contain rounded-full bg-white p-1"
    />
    <h2 className="text-2xl font-bold text-white font-heading">
      Eco Village
    </h2>
  </div>
  <p className="text-white/70 text-sm leading-relaxed">
    Eco Village, a Project by Eco Urban Developers.
  </p>
</div>


          {/* Useful Links */}
          <div className="lg:pl-8 lg:border-l lg:border-white/10">
            <div className="w-8 h-1 bg-[#6f9337] mb-6 rounded-full"></div>
            <h3 className="text-xl font-bold text-white mb-6 font-heading">
              Useful Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", path: "#home" },
                { label: "About Us", path: "#about" },
                { label: "Flagship Project", path: "#flagshipproject" },
                { label: "Our Offerings", path: "#ourofferings" },
                { label: "Testimonials", path: "#testimonials" },
                { label: "Contact", path: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    className="hover:text-[#6f9337] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div className="lg:pl-8 lg:border-l lg:border-white/10">
            <div className="w-8 h-1 bg-[#6f9337] mb-6 rounded-full"></div>
            <h3 className="text-xl font-bold text-white mb-6 font-heading">
              Working Hours
            </h3>
            <div className="space-y-4 text-sm">
              <p className="text-white/60 text-xs uppercase tracking-wider font-bold">
                Office Timing
              </p>
              <div>
                <p className="text-white font-medium">Monday - Sunday</p>
                <p className="text-[#6f9337]">10.00 AM - 8.00 PM</p>
              </div>
            </div>
          </div>

          {/* Subscribe */}
          <div className="lg:pl-8 lg:border-l lg:border-white/10">
            <div className="w-8 h-1 bg-[#6f9337] mb-6 rounded-full"></div>
            <h3 className="text-xl font-bold text-white mb-6 font-heading">
              Subscribe Us
            </h3>
            <p className="text-white/70 text-sm mb-6">
              Subscribe us to get latest news and useful tips.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#6f9337]"
              />
              <button
                type="button"
                className="px-6 py-2.5 bg-[#1F4D2B] hover:bg-[#6f9337] text-white text-sm font-bold rounded-full transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#6f9337]">
                <IoMdMail className="text-sm" />
              </div>
              <a
                href="mailto:info@eco-village.co.in"
                className="text-white hover:text-[#6f9337] transition-colors"
              >
                info@eco-village.co.in
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <span className="text-[#6f9337] font-bold uppercase tracking-wider">
                Call Us
              </span>
              <a
                href="tel:09422799537"
                className="text-3xl font-bold text-white hover:text-[#6f9337] transition-colors"
              >
                09422799537
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm font-medium">
                We Are Social
              </span>

              {socialLinks.map(({ icon: Icon, link, color }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${color} hover:border-transparent`}
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#0B2313] py-6 border-t border-white/5 text-center text-xs text-white/40">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white/80">
          Eco Urban Developers LLP
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
