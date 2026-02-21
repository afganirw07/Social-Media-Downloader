"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DownloadItem {
  quality: string
  format: string
  size?: string
  url: string
}

interface DownloadResultProps {
  thumbnail: string
  username: string
  title?: string
  downloads: DownloadItem[]
}

export default function DownloadResult({
  thumbnail,
  username,
  title,
  downloads,
}: DownloadResultProps) {
  return (
    <div className="w-full flex justify-center mt-16 px-4">
      <Card className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-6">

        {/* Header Info */}
        <div className="flex gap-4">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="w-32 h-32 rounded-xl object-cover"
          />

          <div className="flex flex-col justify-center space-y-1">
            <p className="text-zinc-400 text-sm">@{username}</p>
            {title && (
              <p className="text-white font-medium text-lg">{title}</p>
            )}
            <span className="text-xs bg-red-600 px-3 py-1 rounded-full w-fit">
              Ready to Download
            </span>
          </div>
        </div>

        {/* Download List */}
        <div className="space-y-3">
          {downloads.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-zinc-800 rounded-xl px-4 py-3"
            >
              <div className="flex flex-col">
                <span className="text-white font-medium">
                  {item.quality} • {item.format}
                </span>
                {item.size && (
                  <span className="text-zinc-400 text-sm">
                    {item.size}
                  </span>
                )}
              </div>

              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white rounded-xl"
              >
                <a href={item.url} target="_blank">
                  Download
                </a>
              </Button>
            </div>
          ))}
        </div>

      </Card>
    </div>
  )
}