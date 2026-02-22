"use client"

import { useState } from "react"
import HomepageSection from "@/components/home/homepage"
import PreviewDownload from "@/components/home/previewDownload"
import Footer from "@/components/sections/footer"
import FloatingNavDemo from "@/components/floating-navbar-demo"

export default function Homepage() {

  const [previewData, setPreviewData] = useState<any>(null)

  return (
    <div className="flex flex-col gap-6">
      <FloatingNavDemo/>
      <HomepageSection setPreviewData={setPreviewData} />
      <PreviewDownload previewData={previewData} />
      <Footer />
    </div>
  )
}