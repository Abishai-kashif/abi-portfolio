"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Instagram, Facebook } from "lucide-react";

// Sample socialLinks data (replace with actual data from "@/data")
const socialLinks = [
  {
    url: "https://x.com/abishai_k11572",
    icon: <Twitter className="w-6 h-6" />,
    name: "Twitter",
  },
  {
    url: "https://www.linkedin.com/in/abishai-k-b482362ba/",
    icon: <Linkedin className="w-6 h-6" />,
    name: "LinkedIn",
  },
  {
    url: "https://github.com/Abishai-kashif",
    icon: <Github className="w-6 h-6" />,
    name: "GitHub",
  },
  {
    url: "https://www.instagram.com/abi_zeries_official/",
    icon: <Instagram className="w-6 h-6" />,
    name: "Instagram",
  },
  {
    url: "https://www.facebook.com/abishai.kashif.2025/",
    icon: <Facebook className="w-6 h-6" />,
    name: "Facebook",
  },
];

export default function MyOnlinePresenceSection() {
  return (
    <section className="pt-16 pb-32 px-4 min-h-[50vh] flex items-center">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="_h2 text-white mb-5"
        >
          My Online <span className="text-light-purple">Presence</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="_p mb-12"
        >
          Discover and connect with me across my favorite platforms
        </motion.p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="group relative flex flex-col items-center w-24 h-24 sm:w-28 sm:h-28"
            >
              <div className="relative w-full h-full flex items-center justify-center bg-dark-purple/50 rounded-[20px] border border-purple-400/30 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 transform-gpu group-hover:scale-110">
                <span className="text-purple-300 group-hover:text-white transition-colors">
                  {link.icon}
                </span>
                <div className="absolute inset-0 rounded-[20px] border-2 border-transparent group-hover:border-light-purple transition-all duration-300" />
              </div>
              <span className="mt-2 text-sm sm:text-base text-white group-hover:text-purple-300 transition-colors">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
