import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { History, ExternalLink, InboxIcon } from "lucide-react"

interface Props {
  historyData: any[]
}

const platformColors: Record<string, string> = {
  youtube: "bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400",
  instagram: "bg-pink-100 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400",
  tiktok: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  twitter: "bg-sky-100 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400",
  facebook: "bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
}

function getPlatformColor(platform: string) {
  return (
    platformColors[platform?.toLowerCase()] ||
    "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
  )
}

export default function DownloadHistory({ historyData }: Props) {
  return (
    <Card className="rounded-2xl border border-border/50 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <History className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg">Download History</CardTitle>
            <CardDescription className="text-xs mt-0.5">
              {historyData.length > 0
                ? `${historyData.length} item${historyData.length > 1 ? "s" : ""} downloaded`
                : "No downloads yet"}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="pt-5">
        {historyData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground">
            <InboxIcon className="h-12 w-12 opacity-30" />
            <p className="text-sm font-medium">No download history found.</p>
            <p className="text-xs opacity-70">
              Your download history will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {historyData.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 border border-border/50 rounded-xl hover:bg-muted/40 transition-colors group"
              >
                <div className="flex-1 min-w-0 pr-4">
                  <p
                    className="font-medium text-sm truncate group-hover:text-primary transition-colors"
                    title={item.url}
                  >
                    {item.url}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <Badge
                      className={`text-xs px-2 py-0 font-medium border-0 ${getPlatformColor(item.platform)}`}
                    >
                      {item.platform}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Badge variant="outline" className="text-xs hidden sm:flex">
                    {item.fileType}
                  </Badge>
                  <Button size="sm" variant="outline" className="rounded-lg gap-1.5" asChild>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">View</span>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}