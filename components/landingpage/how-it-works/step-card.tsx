// step-card.tsx
interface StepCardProps {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

export default function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <div className="relative group">
      <div className="flex flex-col items-center text-center">
        {/* Number Badge */}
        <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-600 text-white rounded-full font-bold text-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 group-hover:scale-110 group-hover:shadow-emerald-500/50 transition-all duration-300">
          {number}
        </div>

        {/* Icon */}
        <div className="w-20 h-20 mb-4 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  )
}