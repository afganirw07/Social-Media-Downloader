// src/components/landingpage/platforms/platform-showcase.tsx
"use client"

import { motion } from "framer-motion"
import { AiFillTikTok } from "react-icons/ai"
import { FaYoutube, FaInstagram, FaFacebook, FaReddit, } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

export default function PlatformShowcase() {
  const platforms = [
    { icon: <AiFillTikTok className="hover:text-black transition-colors cursor-pointer" />, name: "TikTok", color: "#000000", delay: 0 },
    { icon: <FaYoutube className="hover:text-red-600 transition-colors cursor-pointer"/>, name: "YouTube", color: "#FF0000", delay: 0.1 },
    { icon: <FaInstagram className="hover:text-pink-600 transition-colors cursor-pointer"/>, name: "Instagram", color: "#E4405F", delay: 0.2 },
    { icon: <FaSquareXTwitter className="hover:text-black transition-colors cursor-pointer"/>, name: "X", color: "#000000", delay: 0.4 },
  ]

  return (
    <div className="relative py-12">
      {/* Floating platforms animation */}
      <div className="flex flex-wrap justify-center gap-6">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: platform.delay,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.3 },
            }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl bg-white shadow-lg border-2 border-gray-200 group-hover:border-transparent transition-all duration-300"
              style={{
                boxShadow: `0 10px 30px -10px ${platform.color}40`,
              }}
            >
              <div
                className="transition-colors duration-300"
                style={{ color: platform.color }}
              >
                {platform.icon}
              </div>
            </div>
            <p className="text-center text-xs font-medium text-gray-600 mt-2 group-hover:text-gray-900 transition-colors">
              {platform.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Animated text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-gray-500 mt-12 text-sm"
      >
        ...and many more platforms coming soon! 
      </motion.p>
    </div>
  )
}