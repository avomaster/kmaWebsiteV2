'use client';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
        >
          Transform Your Digital<br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Presence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Full-service digital solutions combining marketing expertise with cutting-edge technology development.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="inline-block"
        >
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold flex items-center mx-auto">
            Start Your Journey
            <FiChevronRight className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

  export default Hero;