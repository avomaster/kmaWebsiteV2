"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Footer content, for example: */}
          <div className="flex space-x-4">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Koch Media Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
