import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import EnquiryModal from "./EnquiryModal";

const SideEnquireButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:flex fixed top-1/3 right-20 z-[90] -translate-y-1/2 flex-col items-end">
        <motion.button
          className="bg-forest-700 text-white font-bold py-3 px-6 rounded-t-xl shadow-lg border-l-2 border-t-2 border-b-2 border-forest-600 origin-bottom-right transform rotate-[-90deg] translate-x-[42%] hover:bg-forest-600 transition-colors duration-300 tracking-wider flex items-center gap-2 cursor-pointer"
          onClick={() => setIsOpen(true)}
          style={{ transformOrigin: "bottom right" }}
          whileHover={{ x: -5 }}
        >
          <FaPaperPlane className="transform rotate-90" />
          ENQUIRE NOW
        </motion.button>
      </div>

      <EnquiryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default SideEnquireButton;
