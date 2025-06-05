import React from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";

const Hero: React.FC = () => {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-7"
      >
        <h1 className="text-6xl md:text-8xl font-light text-white mb-5 tracking-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-amber-100 via-yellow-300 to-amber-200 bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-flow font-semibold">
            Kariuki
          </span>
        </h1>
        
      </motion.div>

      <Navigation />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gradient-to-b from-amber-400 to-transparent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
