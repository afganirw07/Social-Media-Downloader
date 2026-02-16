"use client"

import { motion } from "framer-motion"

export default function FAQ() {
  const faqs = [
    {
      question: "Is this service really free?",
      answer: "Yes! Our free plan gives you 20 tokens per day to download videos from any supported platform. No credit card required.",
      gridArea: "lg:col-span-2" // wide
    },
    {
      question: "Which platforms?",
      answer: "We support TikTok, YouTube, Instagram, Facebook, Twitter, Reddit, and many more.",
      gridArea: "lg:row-span-2" // tall
    },
    {
      question: "Install software?",
      answer: "No installation needed! Completely web-based.",
      gridArea: "" // normal
    },
    {
      question: "Watermarks?",
      answer: "Free users get videos as they appear. Premium removes watermarks.",
      gridArea: "" // normal
    },
    {
      question: "Download quality?",
      answer: "Free: HD (1080p). Premium: Up to 4K quality with multiple options available.",
      gridArea: "lg:col-span-2" // wide
    },
    {
      question: "Daily limit?",
      answer: "Free: 20 tokens/day. Premium: Unlimited downloads.",
      gridArea: "" // normal
    },
    {
      question: "Safe and legal?",
      answer: "Our service is safe and secure. You're responsible for respecting copyright and creator rights.",
      gridArea: "lg:row-span-2" // tall
    },
    {
      question: "Private videos?",
      answer: "Only publicly accessible videos can be downloaded.",
      gridArea: "" // normal
    },
    {
      question: "Cancel subscription?",
      answer: "Cancel anytime from settings. Premium active until billing period ends.",
      gridArea: "" // normal
    },
    {
      question: "Store videos?",
      answer: "No, we don't store videos. Processed in real-time.",
      gridArea: "" // normal
    },
  ]

  return (
    <div className="bg-grid-fade w-full px-4 mt-60 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            We are here to help you with any questions you may have. Contact us at{" "}
            <a href="mailto:support@viddl.com" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
              support@viddl.com
            </a>
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className={faq.gridArea}
            >
              <div className="h-full p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
