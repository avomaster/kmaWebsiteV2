"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Testimonials() {
  const testimonials = [
    {
      quote: "Koch Media Agency transformed our digital presence. Their data-driven approach delivered amazing results in the European market.",
      client: "Jane Doe, CEO of European Ventures",
      image: "/testimonials/jane.jpg",
    },
    {
      quote: "The innovative strategies from Koch Media Agency boosted our growth and exceeded our expectations.",
      client: "John Smith, CMO at Global Brands",
      image: "/testimonials/john.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 border border-gray-700 rounded-lg bg-black bg-opacity-50">
              <p className="text-xl text-gray-300 mb-4">“{t.quote}”</p>
              <div className="flex items-center">
                <Image src={t.image} alt={t.client} width={50} height={50} className="rounded-full mr-4" />
                <span className="text-gray-400 text-sm">{t.client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  
  export default Testimonials;