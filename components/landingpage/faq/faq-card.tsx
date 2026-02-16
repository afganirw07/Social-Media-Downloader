"use client"

import { motion } from "framer-motion"

interface FAQCardProps {
  question: string
  answer: string
  index: number
}

export default function FAQCard({ question, answer, index }: FAQCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="h-full p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {question}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </motion.div>
  )
}