
import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import CustomCursor from '../components/CustomCursor';
import Hero from '../components/Hero';
import ContactSidebar from '../components/ContactSidebar';

const Index: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen relative overflow-hidden"
    >
      <ParticleBackground />
      <CustomCursor />
      <ContactSidebar />
      <Hero />
    </motion.div>
  );
};

export default Index;
