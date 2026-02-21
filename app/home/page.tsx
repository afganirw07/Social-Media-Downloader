"use client"

import { useState } from "react"
import HomepageSection from "@/components/home/homepage"
import PreviewDownload from "@/components/home/previewDownload"
import Footer from "@/components/sections/footer"

export default function Homepage() {

  const [previewData, setPreviewData] = useState<any>(null)

  return (
    <div className="flex flex-col gap-6">
      <HomepageSection setPreviewData={setPreviewData} />
      <PreviewDownload previewData={previewData} />
      <Footer />
    </div>
  )
}