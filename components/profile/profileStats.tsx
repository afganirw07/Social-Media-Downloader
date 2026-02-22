import { Card, CardContent } from "@/components/ui/card"
import { useMemo } from "react"

interface Props {
  historyData: any[]
}

export default function ProfileStats({ historyData }: Props) {
  const totalDownloads = historyData.length

  const totalSize = historyData.reduce(
    (acc, item) => acc + item.sizeMB,
    0
  )

  const favoritePlatform = useMemo(() => {
    const count: Record<string, number> = {}

    historyData.forEach((item) => {
      count[item.platform] = (count[item.platform] || 0) + 1
    })

    return Object.keys(count).reduce((a, b) =>
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