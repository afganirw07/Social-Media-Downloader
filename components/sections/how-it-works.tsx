import { Link2, Download, Sparkles } from "lucide-react"
import StepCard from "../../components/landingpage/how-it-works/step-card"

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Paste URL",
      description: "Copy the video link from any social media platform and paste it into our input box",
      icon: <Link2 className="w-full h-full text-[#be185d]" strokeWidth={1.5} />
    },
    {
      number: "2",
      title: "Click Download",
      description: "Our system instantly processes your video and prepares it for download in the best quality",
      icon: <Download className="w-full h-full text-[#be185d]
" strokeWidth={1.5} />
    },
    {
      number: "3",
      title: "Enjoy Your Video",
      description: "Save the video to your device and enjoy it offline, anytime, anywhere. No watermarks!",
      icon: <Sparkles className="w-full h-full text-[#be185d]" strokeWidth={1.5} />
    }
  ]

  return (
    <div className="px-4 relative z-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-center items-center flex-col text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 max-w-4xl tracking-tight mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-600 max-w-2xl leading-relaxed">
            Download videos in 3 simple steps. Login to start using your free daily credits.
          </p>

        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
      </div>
    </div>
  )
}