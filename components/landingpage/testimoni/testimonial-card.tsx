import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardBody } from "@heroui/card"

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
      transition={{ duration: 0.3 }}
    >
      <Card
        className="bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl rounded-3xl"
        isHoverable
      >
        <CardHeader className="flex flex-col items-start gap-4 p-6 pb-0">
          {/* Stars */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${index < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
                  }`}
              />
            ))}
          </div>
        </CardHeader>

        <CardBody className="p-6 pt-4">
          {/* Content */}
          <div className="px-2">
            <p className="text-md md:text-xl text-center text-gray-600 leading-relaxed italic">
              "{content}"
            </p>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-3 mt-8 border-t border-gray-100 pt-6">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              {avatar}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-900 truncate">{name}</h4>
              <p className="text-xs text-gray-500 truncate">{role}</p>
            </div>
            {platform && (
              <div className="ml-auto">
                <span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full font-medium border border-blue-100">
                  {platform}
                </span>
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </motion.div>
  )
}
