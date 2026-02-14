import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/1.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ Loader state

    // Enquiry form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { label: string; visited: string }[] = [
    { label: "HOME",  visited: "/" },
    { label: "ABOUT US",  visited: "/about" },
    { label: "MASTER PLAN", visited: "/masterplan" },
    { label: "TESTIMONIALS", visited: "/testimonials" },
    { label: "CONTACT US",  visited: "/contact" },
  ];
  // ✅ Handle Form Submit with loader
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // start loader

    const formData = { name, email, country, phone, projectType, message, location, budget };

    try {
      const res = await fetch("http://localhost:3000/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Enquiry sent successfully!");
        setEnquiryOpen(false);
        setName("");
        setEmail("");
        setCountry("");
        setPhone("");
        setProjectType("");
        setMessage("");
        setLocation("");
        setBudget("");
      } else {
        alert("❌ Failed to send enquiry.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error occurred. Try again later.");
    } finally {
      setLoading(false); // stop loader
    }
  };
  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700  ${
          scrolled
            ? "bg-white shadow-lg border-b border-slate-100"
            : "bg-white/95 backdrop-blur-lg shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          {/* Professional Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center space-x-3"
            >
           <div className="relative h-12 flex items-center">
  <img
    src={logo}
    alt="Eco Urban Developers"
    className="w-25 h-25 object-contain drop-shadow-md -mt-2 scale-110"
  />
</div>
              {/* <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-slate-800 leading-tight">
                  Eco Urban
                </h1>
                <p className="text-xs text-slate-500 font-medium">Developers</p>
              </div> */}
            </motion.div>
          </Link>

          {/* Professional Desktop Menu */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden lg:flex items-center space-x-1"
          >
            {navItems.map((item, idx) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.05, duration: 0.4 }}
              >
                <Link
                  to={item.visited}
                  className="relative px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Underline effect */}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Professional CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:flex items-center space-x-3"
          >
            <motion.button
              onClick={() => setEnquiryOpen(true)}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 text-sm font-bold text-blue-600 hover:text-blue-700 border-2 border-blue-600 hover:border-blue-700 rounded-lg transition-all duration-300 hover:shadow-md cursor-pointer"
            >
              ENQUIRE NOW
            </motion.button>

            <motion.a
              href="https://wa.me/message/5APMEDN4IONDP1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              <span>WHATSAPP</span>
            </motion.a>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2.5 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Modern Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-slate-700/50">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Menu
                </h2>
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-slate-700/50 text-white hover:bg-slate-600/50 transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Menu Items */}
              <ul className="flex flex-col gap-2 p-6">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={item.visited}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300 border border-transparent hover:border-blue-500/30"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="p-6 flex flex-col gap-4 border-t border-slate-700/50">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                  onClick={() => {
                    setEnquiryOpen(true);
                    setMenuOpen(false);
                  }}
                >
                  ENQUIRY
                </motion.button>
                
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  href="https://wa.me/message/5APMEDN4IONDP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>WHATSAPP</span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Premium ENQUIRY MODAL */}
        {/* ✅ Enquiry Modal */}
      <AnimatePresence>
        {enquiryOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl p-6 sm:p-10 max-w-lg w-full relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <button
                className="absolute top-4 right-4 text-2xl text-blue-900 hover:text-blue-700 focus:outline-none"
                onClick={() => setEnquiryOpen(false)}
              >
                <FaTimes />
              </button>

              <h2 className="text-2xl sm:text-2xl font-semibold text-blue-900 text-center mb-2 leading-tight">
                Still confused? Let our advisors assist you!
              </h2>

              <form
                className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm"
                onSubmit={handleSubmit}
              >
                {/* All form inputs same as before */}
                <div className="flex flex-col col-span-1">
                  <label className="mb-1 text-gray-700 font-medium">Your Name*</label>
                  <input
                    type="text"
                    required
                    className="border-b border-gray-300 focus:border-blue-900 outline-none py-1 px-0 bg-transparent"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col col-span-1">
                  <label className="mb-1 text-gray-700 font-medium">Email*</label>
                  <input
                    type="email"
                    required
                    className="border-b border-gray-300 focus:border-blue-900 outline-none py-1 px-0 bg-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col col-span-1">
                  <label className="mb-1 text-gray-700 font-medium">Select Country</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="border-b border-gray-300 focus:border-blue-900 outline-none py-1 px-0 bg-transparent"
                  >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col col-span-1">
                  <label className="mb-1 text-gray-700 font-medium">Phone*</label>
                  <input
                    type="tel"
                    required
                    className="border-b border-gray-300 focus:border-blue-900 outline-none py-1 px-0 bg-transparent"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="flex flex-col col-span-1">
                  <label className="mb-1 text-gray-700 font-medium">Project Type</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="border-b border-gray-300 focus:border-blue-900 outline-none py-1 px-0 bg-transparent"
                  >
                    <option value="">Project Type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>

                <div className="flex flex-col col-span-1">
                  <label className="mb-1 text-gray-700 font-medium">Message</label>
                  <input
                    type="text"
                    className="border-b border-gray-300 focus:border-blue-900 outline-none py-1 px-0 bg-transparent"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="flex flex-col col-span-1">
                  <label className="mb-1 text-gray-700 font-medium">Select Location</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border-b border-gray-300 focus:border-blue-900 outline-none py-1 px-0 bg-transparent"
                  >
                    <option value="">Select Location</option>
                    <option value="Bardhhaman">Bardhhaman</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Durgapur">Durgapur</option>
                  </select>
                </div>

                <div className="flex flex-col col-span-1">
                  <label className="mb-1 text-gray-700 font-medium">Select Budget</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="border-b border-gray-300 focus:border-blue-900 outline-none py-1 px-0 bg-transparent"
                  >
                    <option value="">Select Budget</option>
                    <option value="Below 20Lakh">Below 20 Lakh</option>
                    <option value="20-40Lakh">20-40 Lakh</option>
                    <option value="Above 40Lakh">Above 40 Lakh</option>
                  </select>
                </div>

                {/* Terms */}
                <div className="col-span-1 sm:col-span-2 mt-2">
                  <p className="text-xs text-gray-700 text-center">
                    I agree that by clicking on 'Submit', I am explicitly soliciting a call or
                    message from Eco Urban Developers LLP or its associates on my mobile
                    number to assist me. I also agree to the Terms & Conditions and Privacy
                    Policy.
                  </p>
                </div>

                {/* ✅ Submit Button with Loader */}
                <div className="col-span-1 sm:col-span-2 flex justify-center mt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-8 py-2 border border-blue-900 text-blue-900 rounded-md font-semibold hover:bg-blue-900 hover:text-white transition-all shadow-sm flex items-center gap-2 ${
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-blue-900"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "SUBMIT"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
