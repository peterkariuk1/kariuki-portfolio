
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navItems = [
    { label: 'Résumé', href: '/resume' },
    { label: 'Projects', href: '/projects' },
    { label: 'GitHub', href: 'https://github.com/peterkariuk1/', external: true },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="flex items-center space-x-3 text-white/80"
    >
      {navItems.map((item, index) => (
        <React.Fragment key={item.label}>
          {item.external ? (
            <motion.a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-lg font-light tracking-wide hover:text-amber-400 transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ) : (
            <Link to={item.href}>
              <motion.span
                className="relative text-lg font-light tracking-wide hover:text-amber-400 transition-colors duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.span>
            </Link>
          )}
          {index < navItems.length - 1 && (
            <span className="text-white/40 text-lg">|</span>
          )}
        </React.Fragment>
      ))}
    </motion.nav>
  );
};

export default Navigation;
