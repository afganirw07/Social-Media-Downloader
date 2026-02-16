import { Check, X } from "lucide-react" 
import { cn } from "lib/utils"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: PricingFeature[]
  isPremium?: boolean
  badge?: string
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  isPremium = false,
  badge
}: PricingCardProps) {
  return (
    <div className={cn(
      "relative rounded-2xl p-8 transition-all duration-300",
      isPremium 
        ? "bg-linear-to-br from-blue-600 to-purple-600 shadow-xl hover:shadow-2xl" 
        : "bg-white/70 backdrop-blur-sm border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg"
    )}>
      
      {badge && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}
      
      <div className="text-center mb-6">
        <h4 className={cn(
          "text-2xl font-bold mb-2",
          isPremium ? "text-white" : "text-gray-900"
        )}>
          {title}
        </h4>
        <div className={cn(
          "text-4xl font-bold mb-2",
          isPremium ? "text-white" : "text-gray-900"
        )}>
          {price}
          <span className={cn(
            "text-lg font-normal",
            isPremium ? "text-blue-100" : "text-gray-500"
          )}>
            {period}
          </span>
        </div>
        <p className={cn(
          "text-sm",
          isPremium ? "text-blue-100" : "text-gray-600"
        )}>
          {description}
        </p>
      </div>
      
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
              isPremium
                ? "bg-white/20"
                : feature.included
                ? "bg-blue-100"
                : "bg-gray-100"
            )}>
              {feature.included ? (
                <Check className={cn("w-3 h-3", isPremium ? "text-white" : "text-blue-600")} />
              ) : (
                <X className="w-3 h-3 text-gray-400" />
              )}
            </div>
            <span className={cn(
              "text-sm",
              isPremium
                ? "text-white font-medium"
                : feature.included
                ? "text-gray-700"
                : "text-gray-400"
            )}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <button className={cn(
        "w-full py-3 px-6 font-semibold rounded-xl transition-all duration-300",
        isPremium
          ? "bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl"
          : "border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
      )}>
        {isPremium ? "Upgrade Now" : "Get Started"}
      </button>
    </div>
  )
}