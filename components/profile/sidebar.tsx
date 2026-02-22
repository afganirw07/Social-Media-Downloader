"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { signOut } from "next-auth/react"
import {
  Settings,
  History,
  ArrowLeft,
  LogOut,
  Crown,
  User2,
} from "lucide-react"

interface Props {
  user: any
  activeTab: "account" | "history"
  onTabChange: (tab: "account" | "history") => void
}

export default function ProfileSidebar({ user, activeTab, onTabChange }: Props) {
  const displayName = user?.name || user?.email?.split("@")[0] || "User"
  const initials = displayName.substring(0, 2).toUpperCase()
  const isPremium = user?.isPremium

  return (
    <Card className="md:col-span-1 border border-border/50 shadow-sm rounded-2xl overflow-hidden">

      <CardContent className="flex flex-col items-center gap-4 px-5 pb-6 -mt-10">

        {/* Avatar */}
        <Avatar className="h-20 w-20 mt-10 border-4 border-background shadow-md ring-2 ring-purple-400/30">
          <AvatarImage src={user?.image || "https://github.com/shadcn.png"} />
          <AvatarFallback className="bg-purple-100 text-purple-700 font-bold text-lg">
            {initials}
          </AvatarFallback>
        </Avatar>

        {/* Info */}
        <div className="text-center space-y-1 w-full">
          <h2 className="font-bold text-lg truncate max-w-[200px] mx-auto leading-tight">
            {displayName}
          </h2>
          <p className="text-sm text-muted-foreground truncate max-w-[200px] mx-auto">
            {user?.email}
          </p>
          <div className="flex justify-center pt-1">
            <Badge
              className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${isPremium
                  ? "bg-emerald-500 hover:bg-emerald-500 text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted"
                }`}
            >
              {isPremium ? (
                <><Crown className="h-3 w-3" /> Premium</>
              ) : (
                <><User2 className="h-3 w-3" /> Free Plan</>
              )}
            </Badge>
          </div>
        </div>

        <Separator className="w-full" />

        {/* Navigation */}
        <div className="w-full space-y-1">
          <Button
            variant={activeTab === "account" ? "default" : "ghost"}
            className={`w-full justify-start gap-3 font-medium rounded-xl transition-all ${activeTab === "account"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
              }`}
            onClick={() => onTabChange("account")}
          >
            <Settings className="h-4 w-4 shrink-0" />
            Account Settings
          </Button>

          <Button
            variant={activeTab === "history" ? "default" : "ghost"}
            className={`w-full justify-start gap-3 font-medium rounded-xl transition-all ${activeTab === "history"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
              }`}
            onClick={() => onTabChange("history")}
          >
            <History className="h-4 w-4 shrink-0" />
            Download History
          </Button>

          <Link href="/home" className="block w-full">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 font-medium rounded-xl text-muted-foreground hover:text-foreground transition-all"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" />
              Back to Home
            </Button>
          </Link>

          <Separator className="my-1" />

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 font-medium rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30 transition-all"
            onClick={() => signOut({ callbackUrl: "/signin" })}
          >
            <LogOut className="h-4 w-4 shrink-0" />
            Logout
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
