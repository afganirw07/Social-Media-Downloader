"use client"

import PricingCard from "../landingpage/pricing/pricing-cards"
import { motion } from "framer-motion"

export default function Pricing() {
  const freeFeatures = [
    { text: "20 tokens per day", included: true },
    { text: "Standard download speed", included: true },
    { text: "All platforms supported", included: true },
    { text: "HD quality downloads", included: true },
    { text: "No watermark removal", included: false },
    { text: "No batch download", included: false },
    { text: "7 days history", included: true },
  ]

  const premiumFeatures = [
    { text: "Unlimited tokens", included: true },
    { text: "Priority download speed", included: true },
    { text: "All platforms supported", included: true },
    { text: "4K quality downloads", included: true },
    { text: "Watermark removal", included: true },
    { text: "Batch download", included: true },
    { text: "Forever history", included: true },
  ]

  return (
    <div className="w-full px-4 relative z-10 bg-grid-fade">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you need more power. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <PricingCard
              title="Free"
              price="$0"
              period="/month"
              description="Perfect for casual users"
              features={freeFeatures}
            />
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <PricingCard
              title="Premium"
              price="$9.99"
              period="/3 months"
              description="For power users"
              features={premiumFeatures}
              isPremium={true}
              badge="POPULAR"
            />
          </motion.div>

        </div>

        {/* FAQ Mini */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 my-4">
            No credit card required • Cancel anytime • 30-day money back guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Instant activation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Secure payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>24/7 support</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}