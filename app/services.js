'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  { 
    title: 'Digital Marketing', 
    description: 'SEO, PPC, Social Media, Content Strategy',
    icon: '/icons/marketing.svg'
  },
  // Add other services with their respective icons
];

function ServicesOverview() {
  return (
    <section className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-colors"
            >
              <Image 
                src={service.icon} 
                alt={service.title} 
                width={60} 
                height={60} 
                className="mb-4"
              />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

  export default ServicesOverview;