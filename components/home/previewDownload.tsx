"use client"

import { Button } from "../ui/button"
import { Download } from "lucide-react"

interface PreviewDownloadProps {
  previewData: any
}

export default function PreviewDownload({ previewData }: PreviewDownloadProps) {
  if (!previewData) return null

  const videoUrl = typeof previewData === "string" ? previewData : previewData?.videoUrl

  const handleManualDownload = () => {
    window.open(videoUrl, "_blank")
  }

  return (
    <div className="flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl space-y-5">

        {/* Video Container */}
        <div className="relative aspect-video rounded-xl border border-gray-200 bg-gray-50 overflow-hidden shadow-sm">
          {videoUrl ? (
            <video
              src={videoUrl}
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-lg font-medium text-gray-400">No preview available</span>
            </div>
          )}
        </div>

        {/* Download Button */}
        <Button
          onClick={handleManualDownload}
          className="w-full h-12 rounded-xl cursor-pointer bg-black hover:bg-gray-900 text-white transition-colors duration-200"
        >
          <Download className="h-4 w-4" />
          <span className="text-sm font-semibold tracking-wide">Download</span>
        </Button>
      </div>
    </div>
  )
}
