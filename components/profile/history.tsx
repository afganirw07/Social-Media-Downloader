import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { historyData } from "./mock"

export default function DownloadHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Download History</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {historyData.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/40 transition"
          >
            <div>
              <p className="font-medium">
                {item.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {item.platform} • {item.date}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Badge>{item.quality}</Badge>
              <p className="text-sm text-muted-foreground">
                {item.sizeMB} MB
              </p>
              <Button size="sm">
                Download Again
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}