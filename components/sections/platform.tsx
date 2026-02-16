"use client"

import { AiFillTikTok } from "react-icons/ai"
import { FaYoutube, FaInstagram, FaFacebook, FaReddit, FaTwitter } from "react-icons/fa"
import PlatformCard from "../../components/landingpage/platforms/platform-card"
import PlatformShowcase from "../../components/landingpage/platforms/platform-showcase" 
import { motion } from "framer-motion"
import { FaSquareXTwitter } from "react-icons/fa6"

export default function Platforms() {
  const platformsData = [
    {
      name: "TikTok",
      icon: <AiFillTikTok />,
      color: "#000000",
      gradient: "linear-gradient(135deg, #000000 0%, #4a4a4a 100%)",
      popular: true,
      features: [
        "Download videos without watermark",
        "Support HD & 4K quality",
        "Download with or without sound",
        "Fastest download speed",
      ],
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      color: "#FF0000",
      gradient: "linear-gradient(135deg, #FF0000 0%, #cc0000 100%)",
      popular: true,
      features: [
        "Download videos & shorts",
        "Multiple quality options (144p - 4K)",
        "Extract audio only (MP3)",
        "Download entire playlists",
      ],
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      color: "#E4405F",
      gradient: "linear-gradient(135deg, #833AB4 0%, #E4405F 50%, #FCAF45 100%)",
      popular: true,
      features: [
        "Download posts, reels & stories",
        "Support carousel/multiple photos",
        "IGTV & highlights support",
        "Anonymous download",
      ],
    },
    {
      name: "X",
      icon: <FaSquareXTwitter />,
      color: "#000000",
      gradient: "linear-gradient(135deg, #000000 0%, #4a4a4a 100%)",
      features: [
        "Download videos & GIFs",
        "Support threads with media",
        "High quality downloads",
        "No login required",
      ],
    },
  ]

  const stats = [
    { end: 1000000, label: "Videos Downloaded", suffix: "+" },
    { end: 50000, label: "Happy Users", suffix: "+" },
    { end: 15, label: "Platforms Supported", suffix: "" },
    { end: 99, label: "Success Rate", suffix: "%" },
  ]

  return (
    <div className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Supported Platforms
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download videos from all your favorite social media platforms. More platforms added regularly!
          </p>
        </motion.div>

        <div className="mb-16">
            <PlatformShowcase />
        </div>

        {/* Stats Section - FIXED LAYOUT */}
        {/* <div className="my-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <StatsCounter
                key={index}
                end={stat.end}
                label={stat.label}
                suffix={stat.suffix}
                duration={2.5}
              />
            ))}
          </div>
        </div> */}

        {/* Platform Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mt-4 mb-8">
            Platform Features
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {platformsData.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <PlatformCard {...platform} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Can't find your platform? Let us know!
          </p>
          <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Request a Platform
          </button>
        </motion.div>

      </div>
    </div>
  )
}