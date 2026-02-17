"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardBody } from "@heroui/card"

export default function FAQ() {
  const faqs = [
    {
      question: "Is the service really free?",
      answer:
        "Yes. The Free plan gives you 20 download tokens per day with no credit card required. You can upgrade anytime for unlimited downloads.",
      gridArea: "lg:col-span-2",
    },
    {
      question: "What platforms are supported?",
      answer:
        "We support major platforms including TikTok, YouTube, Instagram, Facebook, Twitter (X), and more.",
      gridArea: "lg:row-span-2",
    },
    {
      question: "Do I need to install any software?",
      answer:
        "No installation is required. Everything works directly in your browser.",
      gridArea: "",
    },
    {
      question: "Are watermarks removed?",
      answer:
        "Yes. Videos are processed without added watermarks on both Free and Premium plans.",
      gridArea: "",
    },
    {
      question: "What download quality is available?",
      answer:
        "Both Free and Premium users can download videos in high quality, depending on availability from the source platform.",
      gridArea: "lg:col-span-2",
    },
    {
      question: "Is there a daily download limit?",
      answer:
        "Free accounts receive 20 tokens per day. Premium accounts have unlimited downloads with no daily limits.",
      gridArea: "",
    },
    {
      question: "Is it safe and legal to use?",
      answer:
        "Our platform is secure and processes videos in real-time. Users are responsible for respecting copyright and content ownership laws.",
      gridArea: "lg:row-span-2",
    },
    {
      question: "Can I download private videos?",
      answer:
        "No. Only publicly accessible videos can be processed and downloaded.",
      gridArea: "",
    },
    {
      question: "Can I cancel my Premium subscription anytime?",
      answer:
        "Yes. You can cancel anytime from your account settings. Your Premium access remains active until the end of the billing period.",
      gridArea: "",
    },
    {
      question: "Do you store downloaded videos?",
      answer:
        "No. We do not store videos on our servers. All processing happens in real-time.",
      gridArea: "",
    },
  ]


  return (
    <div className="w-full py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex justify-center items-center flex-col text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 max-w-4xl tracking-tight mb-6">
              Everything You Need to Know
            </h2>
            <p className="mt-2 text-md md:text-xl text-gray-600 max-w-2xl">
              Find answers about downloads, tokens, quality, and how our Free and Premium plans work.
            </p>
          </div>
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
              <Card
                className="h-full bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/10 group rounded-3xl"
                isHoverable
                shadow="sm"
              >
                <CardHeader className="p-6 pb-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                    {faq.question}
                  </h3>
                </CardHeader>
                <CardBody className="p-6 pt-3">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
