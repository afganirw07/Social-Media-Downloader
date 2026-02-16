interface StepCardProps {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

export default function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <div className="relative group">
      {/* Connection Line (hidden on last item) */}
      <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-linear-to-r from-blue-200 to-purple-200 -z-10 group-last:hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      <div className="flex flex-col items-center text-center">
        {/* Number Badge */}
        <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-purple-600 text-white font-bold text-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>

        {/* Icon */}
        <div className="w-20 h-20 mb-4 text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
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