"use client"

import { Card, CardBody } from "@heroui/card"
import { Button } from "../ui/button"

interface PreviewDownloadProps {
  previewData: any
}

export default function PreviewDownload({ previewData }: PreviewDownloadProps) {
  if (!previewData) return null

  const { title, thumbnail, downloadUrl, videoUrl } = previewData

  const handleManualDownload = () => {
    if (downloadUrl || videoUrl) {
      window.open(downloadUrl || videoUrl, '_blank')
    }
  }

  return (
    <div className="flex items-center justify-center p-6 font-sans">
      <Card className="w-full max-w-5xl rounded-lg overflow-hidden border-none">
        <CardBody className="p-0">
          <div className="p-8 pb-4">
            <div className="relative aspect-video bg-[#E0E0E0] rounded-sm flex items-center justify-center overflow-hidden">
              {thumbnail ? (
                <img src={thumbnail} alt={title || "Preview"} className="w-full h-full object-cover" />
              ) : (
                <span className="text-2xl font-medium text-gray-800 tracking-tight">{title || "Preview"}</span>
              )}
            </div>
            {title && <p className="mt-4 text-center font-medium text-gray-700">{title}</p>}
          </div>

          <div className="p-8 pt-4 pb-12">
            <Button
              onClick={handleManualDownload}
              className="w-full rounded-sm py-8 flex items-center justify-center cursor-pointer bg-black hover:bg-gray-800 text-white"
            >
              <h1 className="text-2xl font-medium tracking-tight">Download Now</h1>
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
