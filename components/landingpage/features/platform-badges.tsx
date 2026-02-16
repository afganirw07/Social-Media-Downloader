
import { ReactNode } from "react"

interface PlatformBadgeProps {
  name: string
  icon: ReactNode
  colorClass?: string
}

export default function PlatformBadge({ name, icon, colorClass = "hover:text-blue-600" }: PlatformBadgeProps) {
  return (
    <div className={`flex items-center gap-3 px-6 py-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer ${colorClass}`}>
      <span className="text-gray-700 text-2xl">{icon}</span>
      <span className="font-medium text-gray-700">{name}</span>
    </div>
  )
}