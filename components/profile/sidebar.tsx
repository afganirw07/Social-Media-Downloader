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
  return (
    <Card className="md:col-span-1">
      <CardContent className="flex flex-col items-center gap-4 py-6">

        <Avatar className="h-20 w-20">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>KA</AvatarFallback>
        </Avatar>

        <div className="text-center">
          <h2 className="font-semibold text-lg">{user.name}</h2>
          <p className="text-sm text-muted-foreground">
            {user.email}
          </p>

          <Badge
            className={`mt-2 ${
              user.isPremium
                ? "bg-emerald-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {user.isPremium ? "Premium User" : "Free User"}
          </Badge>
        </div>

        <Separator />

        <div className="w-full space-y-2">
          <Button
            variant={activeTab === "account" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => onTabChange("account")}
          >
            Account Settings
          </Button>

          <Button
            variant={activeTab === "history" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => onTabChange("history")}
          >
            Download History
          </Button>

          <Link href="/home">
            <Button
              variant="ghost"
              className="w-full justify-start mb-2"
            >
              Back
            </Button>
          </Link>

          <Button
            variant="outline"
            className="w-full justify-start text-red-500 border-red-300 hover:bg-red-50"
          >
            Logout
          </Button>
        </div>

      </CardContent>
    </Card>
  )
}