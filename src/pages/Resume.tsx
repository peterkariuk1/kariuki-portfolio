import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";
import CustomCursor from "../components/CustomCursor";

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <CustomCursor />

      <div className="relative z-10 container mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-amber-400 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            My Resume
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Download to view my latest resume below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="/kariukiresume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition duration-300"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
