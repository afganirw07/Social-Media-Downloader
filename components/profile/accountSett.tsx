"use client"

import { useState, useEffect } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import ProfileStats from "./profileStats"
import { User, Mail, ShieldCheck } from "lucide-react"

interface Props {
  user: any
  historyData: any[]
}

export default function AccountSettings({ user, historyData }: Props) {
  const [name, setName] = useState(user?.name || user?.email?.split("@")[0] || "")
  const [email, setEmail] = useState(user?.email || "")

  useEffect(() => {
    if (user) {
      setName(user.name || user.email?.split("@")[0] || "")
      setEmail(user.email || "")
    }
  }, [user])

  return (
    <div className="space-y-6">
      {/* Stats */}
      <ProfileStats historyData={historyData} user={user} />

      {/* Account Settings Card */}
      <Card className="rounded-2xl border border-border/50 shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">Account Settings</CardTitle>
              <CardDescription className="text-xs mt-0.5">
                Update your personal information
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-5 pt-6">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium flex items-center gap-2 text-foreground">
              <User className="h-4 w-4 text-muted-foreground" />
              Full Name
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="rounded-xl"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium flex items-center gap-2 text-foreground">
              <Mail className="h-4 w-4 text-muted-foreground" />
              Email Address
            </label>
            <Input
              value={email}
              disabled
              className="bg-muted cursor-not-allowed rounded-xl"
            />
            <p className="text-xs text-muted-foreground">
              Email address cannot be changed.
            </p>
          </div>

          <div className="pt-2">
            <Button className="rounded-xl px-6">Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
