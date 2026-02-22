"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import ProfileLayout from "@/components/profile/profileLayout"
import { GetUserById } from "@/services/User"

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const searchParams = useSearchParams()
  const router = useRouter()
  const tabFromUrl = searchParams.get("tab")

  const [activeTab, setActiveTab] = useState<"account" | "history">(
    tabFromUrl === "history" ? "history" : "account"
  )

  const [userData, setUserData] = useState<any>(null)
  const [isDataLoading, setIsDataLoading] = useState(true)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login")
    } else if (status === "authenticated" && session?.user?.id) {
      const fetchData = async () => {
        try {
          setIsDataLoading(true)
          const res = await GetUserById(session.user.id)
          if (res.status) {
            setUserData(res.data)
          }
        } catch (error) {
          console.error("Error fetching user data:", error)
        } finally {
          setIsDataLoading(false)
        }
      }
      fetchData()
    }
  }, [status, router, session?.user?.id])

  const handleTabChange = (tab: "account" | "history") => {
    setActiveTab(tab)
    router.push(`/profile?tab=${tab}`)
  }

  if (status === "loading" || (status === "authenticated" && isDataLoading)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!session) return null

  return (
    <ProfileLayout
      user={userData || session.user}
      activeTab={activeTab}
      onTabChange={handleTabChange}
      historyData={userData?.downloads || []}
    />
  )
}