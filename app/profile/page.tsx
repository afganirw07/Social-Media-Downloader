"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { mockUser } from "@/components/profile/mock"
import ProfileLayout from "@/components/profile/profileLayout"

export default function ProfilePage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const tabFromUrl = searchParams.get("tab")

  const [activeTab, setActiveTab] = useState<"account" | "history">(
    tabFromUrl === "history" ? "history" : "account"
  )

  const handleTabChange = (tab: "account" | "history") => {
    setActiveTab(tab)
    router.push(`/profile?tab=${tab}`)
  }

  return (
    <ProfileLayout
      user={mockUser}
      activeTab={activeTab}
      onTabChange={handleTabChange}
    />
  )
}