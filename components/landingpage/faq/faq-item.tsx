"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItemProps {
  question: string
  answer: string
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200/50 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between text-left group"
      >
        <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors pr-8 text-lg">
          {question}
        </span>
        <div className={`shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-blue-600 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-600 border-blue-600 rotate-45' : ''}`}>
          <Plus className={`w-4 h-4 transition-colors ${isOpen ? 'text-white' : 'text-gray-500 group-hover:text-blue-600'}`} />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6 text-gray-600 leading-relaxed pr-12">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}