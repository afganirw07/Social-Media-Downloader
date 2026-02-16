import { Link2, Download, Sparkles } from "lucide-react"
import StepCard from "../../components/landingpage/how-it-works/step-card"

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Paste URL",
      description: "Copy the video link from any social media platform and paste it into our input box",
      icon: <Link2 className="w-full h-full" strokeWidth={1.5} />
    },
    {
      number: "2",
      title: "Click Download",
      description: "Our system instantly processes your video and prepares it for download in the best quality",
      icon: <Download className="w-full h-full" strokeWidth={1.5} />
    },
    {
      number: "3",
      title: "Enjoy Your Video",
      description: "Save the video to your device and enjoy it offline, anytime, anywhere. No watermarks!",
      icon: <Sparkles className="w-full h-full" strokeWidth={1.5} />
    }
  ]

  return (
    <div className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download videos in 3 simple steps. No registration required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#home"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            Start Downloading Now
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Free forever • No credit card required
          </p>
        </div>

      </div>
    </div>
  )
}