"use client"

import { Card, CardBody } from "@heroui/card"
import { Button } from "../ui/button"

export default function PreviewDownload() {
  return (
    <div className="min-h-screen max-h-screen flex items-center justify-center p-6 font-sans">
      <Card className="w-full max-w-5xl rounded-lg overflow-hidden border-none">
        <CardBody className="p-0">
          <div className="p-8 pb-4">
            <div className="relative aspect-video bg-[#E0E0E0] rounded-sm flex items-center justify-center overflow-hidden">
              <span className="text-2xl font-medium text-gray-800 tracking-tight">Preview</span>
            </div>
          </div>

          <div className="p-8 pt-4 pb-12">
            <Button className="w-full rounded-sm py-8 flex items-center justify-center cursor-pointer">
              <h1 className="text-2xl font-medium text-white tracking-tight">Download</h1>
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}