"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  name: string
  role: string
  avatar: string
  content: string
  rating: number
  platform?: string
}

export default function TestimonialCard({
  name,
  role,
  avatar,
  content,
  rating,
  platform
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        "{content}"
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
          {avatar}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
        {platform && (
          <div className="ml-auto">
            <span className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-medium">
              {platform}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}