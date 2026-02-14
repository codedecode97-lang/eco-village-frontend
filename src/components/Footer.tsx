import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/1.png";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-16 pb-6 border-t-4 border-blue-900/20 overflow-hidden">
      {/* Decorative Circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-200/20 blur-3xl"
        animate={{ y: [0, 15, 0], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-300/20 blur-3xl"
        animate={{ y: [0, -15, 0], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-10 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Brand Section */}
        <div className="text-left">
          <div className="flex flex-col sm:flex-row items-start gap-3 mb-3">
            <img src={logo} alt="Eco Urban Developers Logo" className="w-20 drop-shadow-md" />
            <h2 className="text-xl font-bold text-blue-900 leading-tight">
              Eco Urban Developers LLP
            </h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
            Building sustainable, vibrant communities in Bardhhaman and beyond.
            Your dream home, our commitment to quality and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div className="pl-0 sm:pl-6 lg:pl-12 text-left">
          <h3 className="text-lg font-semibold text-blue-900 mb-3 relative inline-block">
            Quick Links
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-blue-700 rounded-full"></span>
          </h3>
          <ul className="flex flex-col gap-2 text-gray-700 text-sm mt-2">
            <li><a href="#projects" className="hover:text-blue-800 transition-all duration-300 hover:pl-1">Projects</a></li>
            <li><a href="#foundation" className="hover:text-blue-800 transition-all duration-300 hover:pl-1">Foundation</a></li>
            <li><a href="#careers" className="hover:text-blue-800 transition-all duration-300 hover:pl-1">Careers</a></li>
            <li><a href="#blog" className="hover:text-blue-800 transition-all duration-300 hover:pl-1">Blog</a></li>
            <li><a href="#faq" className="hover:text-blue-800 transition-all duration-300 hover:pl-1">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left">
          <h3 className="text-lg font-semibold text-blue-900 mb-3 relative inline-block">
            Contact
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-blue-700 rounded-full"></span>
          </h3>
          <div className="text-gray-700 text-sm flex flex-col gap-1 mt-2">
            <p>Bardhhaman, West Bengal, India</p>
            <a
              href="tel:+919999999999"
              className="text-blue-900 font-semibold hover:underline"
            >
              +91 99999 99999
            </a>
            <a
              href="mailto:info@ecourban.com"
              className="text-blue-900 font-semibold hover:underline"
            >
              info@ecourban.com
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-left">
          <h3 className="text-lg font-semibold text-blue-900 mb-3 relative inline-block">
            Connect
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-blue-700 rounded-full"></span>
          </h3>
          <div className="flex justify-start gap-4 mt-2">
            {[
              { Icon: FaFacebookF, color: "hover:text-blue-700", link: "https://facebook.com" },
              { Icon: FaInstagram, color: "hover:text-pink-500", link: "https://instagram.com" },
              { Icon: FaLinkedinIn, color: "hover:text-blue-800", link: "https://linkedin.com" },
              { Icon: FaWhatsapp, color: "hover:text-green-600", link: "https://wa.me/message/5APMEDN4IONDP1" },
            ].map(({ Icon, color, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-blue-900 text-xl ${color} transition-all duration-300 p-2 rounded-full border border-blue-900/20 hover:border-blue-900/50 hover:scale-110 shadow-sm`}
                whileHover={{ y: -4 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="mt-12 pt-6 border-t border-blue-200 text-center text-gray-600 text-sm px-4 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-900">Eco Urban Developers LLP</span>. All
        rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
