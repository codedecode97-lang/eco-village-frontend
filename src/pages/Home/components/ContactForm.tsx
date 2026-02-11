import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setShowThankYou(true);
      setFormData({ name: "", phone: "", email: "", message: "" });

      // Hide Thank You message after 3 seconds
      setTimeout(() => {
        setShowThankYou(false);
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#fcfdfc] rounded-[3rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(27,75,51,0.08)] border border-white relative overflow-hidden h-full">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9EEE2] rounded-bl-[100%] opacity-50 pointer-events-none" />

      <h3 className="text-3xl font-bold text-forest-950 mb-2 font-heading">
        Send Enquiry
      </h3>
      <p className="text-slate-500 mb-10">
        We usually respond within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder=" "
              className="peer w-full bg-transparent border-b-2 border-slate-200 py-3 text-forest-950 font-medium placeholder-transparent focus:outline-none focus:border-forest-800 transition-colors"
            />
            <label className="absolute left-0 -top-3.5 text-slate-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-forest-800 peer-focus:text-xs font-bold uppercase tracking-wide cursor-text">
              Full Name *
            </label>
          </div>

          <div className="relative group">
            <input
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder=" "
              className="peer w-full bg-transparent border-b-2 border-slate-200 py-3 text-forest-950 font-medium placeholder-transparent focus:outline-none focus:border-forest-800 transition-colors"
            />
            <label className="absolute left-0 -top-3.5 text-slate-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-forest-800 peer-focus:text-xs font-bold uppercase tracking-wide cursor-text">
              Phone Number *
            </label>
          </div>
        </div>

        <div className="relative group">
          <input
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder=" "
            className="peer w-full bg-transparent border-b-2 border-slate-200 py-3 text-forest-950 font-medium placeholder-transparent focus:outline-none focus:border-forest-800 transition-colors"
          />
          <label className="absolute left-0 -top-3.5 text-slate-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-forest-800 peer-focus:text-xs font-bold uppercase tracking-wide cursor-text">
            Email Address *
          </label>
        </div>

        <div className="relative group">
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder=" "
            className="peer w-full bg-transparent border-b-2 border-slate-200 py-3 text-forest-950 font-medium placeholder-transparent focus:outline-none focus:border-forest-800 transition-colors resize-none"
          />
          <label className="absolute left-0 -top-3.5 text-slate-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-forest-800 peer-focus:text-xs font-bold uppercase tracking-wide cursor-text">
            Message *
          </label>
        </div>

        <div className="pt-4 ">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="relative px-8 py-4 bg-forest-900 text-white font-bold uppercase tracking-[0.2em] rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl hover:bg-forest-950 transition-all duration-300 w-full md:w-auto disabled:opacity-70 cursor-pointer"
          >
            <span className="relative z-10 transition-colors">
              {status === "submitting" ? "Sending..." : "Submit Request"}
            </span>
          </button>
        </div>
      </form>

      {/* Abstract Plant Shadow */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.05] pointer-events-none rotate-12">
        <FaLeaf size={300} className="text-forest-900" />
      </div>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-[3rem] z-50 flex flex-col items-center justify-center text-center p-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <h3 className="text-3xl font-bold text-forest-950 mb-2">
              Thank You!
            </h3>
            <p className="text-slate-500 max-w-sm">
              We've received your message and will get back to you within 24
              hours.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
