import {
  Download,
  Zap,
  Shield,
  Sparkles,
  CreditCard,
  Clock,
  Smartphone,
  History
} from "lucide-react"

import { Card, CardHeader, CardBody } from "@heroui/card"

export default function Features() {

  const mainFeatures = [
    {
      icon: Download,
      title: "Multi-Platform Support",
      description:
        "Download videos from TikTok, YouTube, Instagram, Facebook, and more in one place."
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description:
        "Paste your link and get your video ready in seconds with our optimized servers."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your downloads remain private. We do not store personal data or downloaded content."
    },
    {
      icon: Sparkles,
      title: "High Quality Downloads",
      description:
        "Get the best available resolution for your videos, including HD and up to 4K quality."
    },
    {
      icon: CreditCard,
      title: "20 Free Credits Daily",
      description:
        "Enjoy 20 free downloads every day. Upgrade to premium for unlimited access."
    },
    {
      icon: Clock,
      title: "No Waiting Time",
      description:
        "Instant processing without long queues or unnecessary delays."
    },
    {
      icon: Smartphone,
      title: "Works on Any Device",
      description:
        "Fully responsive and optimized for desktop, tablet, and mobile devices."
    },
    {
      icon: History,
      title: "Download History",
      description:
        "Access and manage your previous downloads easily from your dashboard."
    }
  ]

  return (
    <div className="px-4 relative z-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-center items-center flex-col text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 max-w-4xl tracking-tight mb-6">
            Why Choose Us
          </h2>
          <p className="mt-2 text-md md:text-xl text-gray-600 max-w-2xl">
            Experience fast, secure, and reliable video downloads with 20 free credits daily.
            Upgrade anytime for unlimited access.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-6 border rounded-2xl border-gray-200 bg-[#FEFEFE] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="flex flex-col items-start gap-4 p-0 mb-4">

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#be185d]">
                    <Icon className="w-6 h-6 text-black" strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                </CardHeader>

                <CardBody className="p-0">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardBody>
              </Card>
            )
          })}
        </div>

      </div>
    </div>
  )
}
