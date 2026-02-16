// src/components/landingpage/platforms/platform-card.tsx
"use client"

import { useState } from "react"
import { Check } from "lucide-react"

interface PlatformCardProps {
  name: string
  icon: React.ReactNode
  color: string
  gradient: string
  features: string[]
  popular?: boolean
}

export default function PlatformCard({
  name,
  icon,
  color,
  gradient,
  features,
  popular = false
}: PlatformCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow-lg">
            MOST POPULAR
          </span>
        </div>
      )}

      <div
        className={`relative p-8 rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
          isHovered
            ? `border-transparent shadow-2xl scale-105`
            : "border-gray-200 shadow-md"
        }`}
        style={{
          background: isHovered ? gradient : "white",
        }}
      >
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${color}, transparent)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon & Name */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`text-5xl transition-transform duration-300 ${
                isHovered ? "scale-110 rotate-6" : ""
              }`}
              style={{ color: isHovered ? "white" : color }}
            >
              {icon}
            </div>
            <h3
              className={`text-2xl font-bold transition-colors duration-300 ${
                isHovered ? "text-white" : "text-gray-900"
              }`}
            >
              {name}
            </h3>
          </div>

          {/* Features */}
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 transition-all duration-300"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isHovered ? "bg-white/20" : "bg-gray-100"
                  }`}
                >
                  <Check
                    className={`w-3 h-3 transition-colors duration-300 ${
                      isHovered ? "text-white" : color
                    }`}
                    style={{ color: !isHovered ? color : undefined }}
                  />
                </div>
                <span
                  className={`text-sm transition-colors duration-300 ${
                    isHovered ? "text-white" : "text-gray-700"
                  }`}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Try Now Button */}
          <button
            className={`w-full mt-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              isHovered
                ? "bg-white text-gray-900 shadow-xl"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Try Now
          </button>
        </div>
      </div>
    </div>
  )
}