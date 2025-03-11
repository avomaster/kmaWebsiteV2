"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function WhyChooseUs() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 uppercase tracking-wide">Why Choose Us</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          With over 10 years of industry expertise, our data-driven strategies and award-winning projects set us apart. We understand both global and European markets, ensuring your business achieves unparalleled growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-700 rounded-lg bg-black bg-opacity-50">
            <h3 className="text-2xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-400 text-sm">
              A dedicated team of professionals with decades of combined experience.
            </p>
          </div>
          <div className="p-6 border border-gray-700 rounded-lg bg-black bg-opacity-50">
            <h3 className="text-2xl font-semibold mb-2">Data-Driven</h3>
            <p className="text-gray-400 text-sm">
              Strategies rooted in analytics that deliver measurable results.
            </p>
          </div>
          <div className="p-6 border border-gray-700 rounded-lg bg-black bg-opacity-50">
            <h3 className="text-2xl font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-400 text-sm">
              Proven success across diverse markets, with a focus on the European landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
  
  export default WhyChooseUs;