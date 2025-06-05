import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";
// import CustomCursor from '../components/CustomCursor';
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "An elegant e-commerce platform offering a curated collection of luxury perfumes, delivering premium fragrances swiftly across Kenya.",
      technologies: [
        "React",
        "Node.js",
        "FireBase",
        "BackBlaze Bucket",
        "Tailwind CSS",
      ],
      link: "https://loriskenya.com",
      github: "https://github.com/peterkariuk1/loriskenya",
    },
    {
      title: "AI LangChain Weather Agent",
      description:
        "An AI-powered weather assistant built with LangChain, offering real-time forecasts and natural language insights through intelligent agent-based queries.",
      technologies: ["TypeScript", "Python", "LangChain", "Gemini", "FastAPI"],
      link: "https://unavailableatthemoment.com",
      github: "https://github.com/peterkariuk1/Weather-Agent-using-LangChain",
    },
    {
      title: "Alumni PLatform",
      description:
        "A dedicated alumni platform fostering meaningful connections among former students of Mithui Secondary School, strengthening community ties and supporting mentorship initiatives.",
      technologies: ["React.js", "Express.js", "FireBase", "CSS"],
      link: "https://mithui-alumni-association.vercel.app",
      github: "https://github.com/peterkariuk1/Mithui-Alumni",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform specializing in high-performance laptops, TechIQ Solutions delivers cutting-edge technology and expert support to customers across Kenya.",
      technologies: ["React", "Daraja", "Node.js", "FireBase", "FireStore"],
      link: "https://techiq.vercel.app",
      github: "https://github.com/peterkariuk1/techiq",
    },
    {
      title: "Real Estate Platform",
      description:
        "A dynamic real estate platform delivering the latest property listings and market insights, helping buyers and investors stay ahead in Kenya’s fast-moving real estate scene.",
      technologies: ["React.js", "Express.js", "FireBase", "CSS"],
      link: "https://transpoint.vercel.app",
      github: "https://github.com/peterkariuk1/transpoint",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      {/* <CustomCursor /> */}

      <div className="relative z-10 container mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
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
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A showcase of my latest work in web development, mobile apps, and
            innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-500 text-lg">More projects coming soon...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
