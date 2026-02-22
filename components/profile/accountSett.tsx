"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ProfileStats from "./profileStats"
import { historyData } from "./mock"

interface Props {
  user: any
}

export default function AccountSettings({ user }: Props) {
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)

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
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      <ProfileStats historyData={historyData} />
    </>
  )
}