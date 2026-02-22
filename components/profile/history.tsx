import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Props {
  historyData: any[]
}

export default function DownloadHistory({ historyData }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Download History</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {historyData.length === 0 ? (
          <p className="text-center text-muted-foreground py-10">No download history found.</p>
        ) : (
          historyData.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/40 transition"
            >
              <div className="flex-1 min-w-0 pr-4">
                <p className="font-medium truncate" title={item.url}>
                  {item.url}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.platform} • {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Badge variant="outline">{item.fileType}</Badge>
                <Button size="sm" asChild>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    View Original
                  </a>
                </Button>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}