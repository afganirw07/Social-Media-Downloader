"use client"

import { motion } from "framer-motion"
import TestimonialCard from "../landingpage/testimoni/testimonial-card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      avatar: "SJ",
      content: "This is the best video downloader I've ever used! Fast, simple, and no watermarks. Saves me hours every week for my content creation.",
      rating: 5,
      platform: "TikTok"
    },
    {
      name: "Michael Chen",
      role: "Digital Marketer",
      avatar: "MC",
      content: "Premium plan is absolutely worth it. Unlimited downloads and batch processing make my workflow so much faster. Highly recommend!",
      rating: 5,
      platform: "Instagram"
    },
    {
      name: "Emma Davis",
      role: "Social Media Manager",
      avatar: "ED",
      content: "I use this daily for downloading client content. The quality is always perfect and it supports all the platforms I need. Game changer!",
      rating: 5,
      platform: "YouTube"
    },
    {
      name: "Alex Rodriguez",
      role: "Video Editor",
      avatar: "AR",
      content: "Clean interface, lightning fast downloads. The 4K quality option is a must-have for professional work. Best $10 I've spent!",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      role: "Influencer",
      avatar: "LW",
      content: "Free plan is already amazing! I upgraded to premium for the watermark removal and it's been perfect for repurposing content.",
      rating: 5,
      platform: "TikTok"
    },
    {
      name: "David Kim",
      role: "Teacher",
      avatar: "DK",
      content: "I use this to download educational videos for my students. Simple, reliable, and works every time. Thank you for making this free!",
      rating: 5,
      platform: "YouTube"
    }
  ]

  return (
    <div className="bg-grid-fade py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-center text-black max-w-4xl md:max-w-6xl">
              Loved by Thousands
            </h2>
            <p className="mt-6 text-md md:text-xl text-center text-gray-600 max-w-2xl">
              See what our users are saying about their experience
            </p>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}