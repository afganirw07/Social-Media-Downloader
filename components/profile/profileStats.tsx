"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useMemo, useState } from "react"


interface Props {
  historyData: any[]
  user: any
}

export default function ProfileStats({ historyData, user }: Props) {
  const totalDownloads = historyData.length
  const [download, setDownload] = useState(user?.downloads || 0)

  const totalSize = historyData.reduce(
    (acc, item) => acc + (item.sizeMB || 0),
    0
  )


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

    return keys.reduce((a, b) =>
      count[a] > count[b] ? a : b
    )
  }, [historyData])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

      <Card>
        <CardContent className="py-6">
          <p className="text-sm text-muted-foreground">
            Total Downloads
          </p>
          <p className="text-2xl font-bold">
            {totalDownloads}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="py-6">
          <p className="text-sm text-muted-foreground">
            Favorite Platform
          </p>
          <p className="text-2xl font-bold">
            {favoritePlatform}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="py-6">
          <p className="text-sm text-muted-foreground">
            Total Size Downloaded
          </p>
          <p className="text-2xl font-bold">
            {totalSize} MB
          </p>
        </CardContent>
      </Card>

    </div>
  )
}