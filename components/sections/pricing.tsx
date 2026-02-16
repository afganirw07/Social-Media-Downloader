"use client"

import PricingCard from "../landingpage/pricing/pricing-cards"
import { motion } from "framer-motion"

export default function Pricing() {
  const freeFeatures = [
    { text: "20 download tokens per day", included: true },
    { text: "Standard processing speed", included: true },
    { text: "All major platforms supported", included: true },
    { text: "Watermark removal", included: true },
    { text: "Up to 4K quality", included: false },
    { text: "Batch downloads", included: false },
    { text: "Unlimited download history", included: false },
  ]


  const premiumFeatures = [
    { text: "Unlimited download tokens", included: true },
    { text: "Priority processing speed", included: true },
    { text: "All major platforms supported", included: true },
    { text: "Up to 4K quality", included: true },
    { text: "Watermark removal", included: true },
    { text: "Batch downloads", included: true },
    { text: "Unlimited download history", included: true },
  ]


  return (
    <div className="w-full px-4 py-10 relative z-10 bg-grid-fade">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex flex-col justify-center items-center">

            <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-center text-black max-w-4xl md:max-w-6xl">
              Simple Pricing
            </h2>
            <p className="mt-6 text-md md:text-xl text-center text-gray-600 max-w-2xl">
              Start free, upgrade when you need more power. No hidden fees.
            </p>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 ">

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



      </div>
    </div>
  )
}