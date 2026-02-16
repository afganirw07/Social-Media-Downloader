import StepCardProps from "@/types/StepCardProps"

export default function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <div className="relative group">

      <div className="flex flex-col items-center text-center">
        {/* Number Badge */}
        <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black text-white
 rounded-full bg-linear-to-br bg-black text-white font-bold text-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>

        {/* Icon */}
        <div className="w-20 h-20 mb-4 text-gray-900 group-hover:text-black transition-colors duration-300">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 max-w-xs">
          {description}
        </p>
      </div>
    </div>
  )
}