"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function CTASection() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let’s discuss your project and explore how our innovative strategies can drive your business forward.
        </p>
        <Link
          href="#contact"
          className="bg-white text-black py-3 px-8 rounded-full font-semibold shadow hover:bg-gray-200 transition"
        >
          Let’s Talk
        </Link>
      </div>
    </section>
  );
}
  
  export default CTASection;