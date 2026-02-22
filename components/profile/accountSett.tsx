"use client"

import { useState, useEffect } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ProfileStats from "./profileStats"

interface Props {
  user: any
  historyData: any[]
}

export default function AccountSettings({ user, historyData }: Props) {
  const [name, setName] = useState(user?.name || user?.email?.split('@')[0] || "")
  const [email, setEmail] = useState(user?.email || "")

  useEffect(() => {
    if (user) {
      setName(user.name || user.email?.split('@')[0] || "")
      setEmail(user.email || "")
    }
  }, [user])

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">
              Full Name
            </label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label className="text-sm font-medium">
              Email
            </label>
            <Input value={email} disabled className="bg-muted cursor-not-allowed" />
            <p className="text-xs text-muted-foreground mt-1">Email cannot be changed.</p>
          </div>

          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      <ProfileStats historyData={historyData} user={user} />
    </>
  )
}
