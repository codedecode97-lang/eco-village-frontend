import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none overflow-y-auto">
            <motion.div
              className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl relative pointer-events-auto overflow-hidden my-8"
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Premium Header with Gradient */}
              <div className="relative bg-nature-green-dark px-6 py-6 sm:px-8 sm:py-8">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-forest-400/10 rounded-full blur-2xl" />

                {/* Close button - Always visible */}
                <motion.button
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-colors shadow-lg cursor-pointer"
                  onClick={onClose}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close"
                >
                  <FaTimes className="w-5 h-5" />
                </motion.button>

                <div className="relative pr-10">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-3"
                  >
                    <p className="text-xs font-semibold text-white tracking-wide">
                      PROPERTY ENQUIRY
                    </p>
                  </motion.div>

                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl sm:text-3xl font-bold text-white mb-2"
                  >
                    Get Expert Consultation
                  </motion.h2>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-forest-100 text-sm max-w-lg"
                  >
                    Fill the form and we'll get back to you within 24 hours.
                  </motion.p>
                </div>
              </div>

              {/* Form Section */}
              <div className="px-6 py-6 sm:px-8 sm:py-8 bg-nature-cream max-h-[80vh] overflow-y-auto">
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="flex flex-col">
                    <label className="mb-1.5 text-slate-700 font-bold text-sm">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="px-4 py-3 bg-white border-2 border-beige-200 rounded-xl focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition-all text-forest-900 font-medium placeholder:text-forest-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="flex flex-col">
                    <label className="mb-1.5 text-slate-700 font-bold text-sm">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="px-4 py-3 bg-white border-2 border-beige-200 rounded-xl focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition-all text-forest-900 font-medium placeholder:text-forest-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Property Type */}
                  <div className="flex flex-col">
                    <label className="mb-1.5 text-slate-700 font-bold text-sm">
                      Property Type
                    </label>
                    <select className="px-4 py-3 bg-white border-2 border-beige-200 rounded-xl focus:border-forest-500 focus:ring-2 focus:ring-forest-100 outline-none transition-all text-forest-900 font-medium">
                      <option value="">Select Type</option>
                      <option value="Plots">Plots</option>
                      <option value="2BHK Villa">2BHK Villa</option>
                      <option value="3BHK Villa">3BHK Villa</option>
                      <option value="4BHK Bungalow">4BHK Bungalow</option>
                      <option value="Farmhouse">Farmhouse</option>
                    </select>
                  </div>

                  {/* Terms */}
                  <div className="sm:col-span-2">
                    <div className="flex items-start gap-2 p-3 bg-forest-50 border border-forest-100 rounded-xl">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="mt-0.5 w-4 h-4 text-forest-600 border-2 border-beige-300 rounded focus:ring-2 focus:ring-forest-500"
                      />
                      <label
                        htmlFor="terms"
                        className="text-xs text-forest-700 leading-relaxed"
                      >
                        I agree to receive calls/messages from{" "}
                        <span className="font-bold text-forest-900">
                          Eco Urban Developers
                        </span>{" "}
                        and accept the terms.
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="sm:col-span-2 mt-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01, y: -1 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full px-8 py-3.5 bg-nature-green-dark hover:bg-nature-green-dark/90 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>SUBMIT ENQUIRY</span>
                      <FaPaperPlane />
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
