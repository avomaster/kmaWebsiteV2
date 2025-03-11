'use client';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

function Navigation() {
  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2"
        >
          <Image 
            src="/logo.png" 
            alt="Koch Media Logo" 
            width={160} 
            height={40} 
            className="h-10 w-auto"
          />
        </motion.div>

        <div className="hidden md:flex space-x-8 items-center">
          {['Services', 'Work', 'About', 'Blog'].map((item) => (
            <motion.a
              key={item}
              whileHover={{ scale: 1.05, color: '#9333ea' }}
              className="cursor-pointer hover:text-purple-400 transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-full"
          >
            Contact
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
  
  export default Navigation;