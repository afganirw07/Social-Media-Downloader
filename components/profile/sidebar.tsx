"use client"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { signOut } from "next-auth/react"

interface Props {
  user: any
  activeTab: "account" | "history"
  onTabChange: (tab: "account" | "history") => void
}

export default function ProfileSidebar({
  user,
  activeTab,
  onTabChange,
}: Props) {
  const displayName = user?.name || user?.email?.split('@')[0] || "User"
  console.log('user===',user)
  const initials = displayName.substring(0, 2).toUpperCase()

  return (
    <Card className="md:col-span-1 border-none shadow-sm">
      <CardContent className="flex flex-col items-center gap-4 py-6 px-4">

        <Avatar className="h-20 w-20 border-2 border-primary/10">
          <AvatarImage src={user?.image || "https://github.com/shadcn.png"} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div className="text-center">
          <h2 className="font-semibold text-lg truncate max-w-[180px]">{displayName}</h2>
          <p className="text-sm text-muted-foreground truncate max-w-[180px]">
            {user?.email}
          </p>

          <Badge
            className={`mt-2 ${user?.isPremium
              ? "bg-emerald-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-100"
              }`}
          >
            {user?.name ? "Premium User" : "Free User"}
          </Badge>
        </div>

        <Separator />

        <div className="w-full space-y-1">
          <Button
            variant={activeTab === "account" ? "default" : "ghost"}
            className="w-full justify-start font-medium"
            onClick={() => onTabChange("account")}
          >
            Account Settings
          </Button>

          <Button
            variant={activeTab === "history" ? "default" : "ghost"}
            className="w-full justify-start font-medium"
            onClick={() => onTabChange("history")}
          >
            Download History
          </Button>

          <Link href="/home" className="block w-full">
            <Button
              variant="ghost"
              className="w-full justify-start font-medium"
            >
              Back
            </Button>
          </Link>

          <Button
            variant="outline"
            className="w-full justify-start text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600 font-medium transition-colors"
            onClick={() => signOut({ callbackUrl: "/auth/login" })}
          >
            Logout
          </Button>
        </div>

      </CardContent>
    </Card>
  )
}
