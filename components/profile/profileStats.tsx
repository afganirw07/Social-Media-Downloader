"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useMemo } from "react"
import { DownloadCloud, Star, Zap } from "lucide-react"

interface Props {
  historyData: any[]
  user: any
}

export default function ProfileStats({ historyData, user }: Props) {
  const totalDownloads = historyData.length

  const favoritePlatform = useMemo(() => {
    if (historyData.length === 0) return "None"
    const count: Record<string, number> = {}

    historyData.forEach((item) => {
      if (item.platform) {
        count[item.platform] = (count[item.platform] || 0) + 1
      }
    })

    const keys = Object.keys(count)
    if (keys.length === 0) return "None"

    return keys.reduce((a, b) => (count[a] > count[b] ? a : b))
  }, [historyData])

  const stats = [
    {
      label: "Total Downloads",
      value: totalDownloads,
      icon: DownloadCloud,
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      label: "Favorite Platform",
      value: favoritePlatform,
      icon: Star,
      color: "text-amber-500",
      bg: "bg-amber-50 dark:bg-amber-950/30",
    },
    {
      label: "Account Type",
      value: user?.isPremium ? "Premium" : "Free",
      icon: Zap,
      color: user?.isPremium ? "text-emerald-500" : "text-gray-400",
      bg: user?.isPremium
        ? "bg-emerald-50 dark:bg-emerald-950/30"
        : "bg-gray-100 dark:bg-gray-800/30",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card
            key={stat.label}
            className="rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="flex items-center gap-4 py-5 px-5">
              <div className={`p-2.5 rounded-xl ${stat.bg}`}>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  {stat.label}
                </p>
                <p className="text-xl font-bold leading-tight mt-0.5">
                  {stat.value}
                </p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}