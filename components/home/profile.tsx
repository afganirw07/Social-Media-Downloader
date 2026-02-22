"use client"

import { useState, useMemo } from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link';

/* ───────────────── MOCK USER DATA ───────────────── */

const mockUser = {
    name: "Kalsah Alkautsar",
    email: "kalsah@email.com",
    isPremium: true,
}

/* ───────────────── MOCK HISTORY DATA ───────────────── */

const historyData = [
    {
        id: 1,
        title: "Funny Cat Compilation",
        platform: "TikTok",
        sizeMB: 72,
        quality: "720p",
        date: "12 Feb 2026",
    },
    {
        id: 2,
        title: "Instagram Travel Reel",
        platform: "Instagram",
        sizeMB: 128,
        quality: "1080p",
        date: "10 Feb 2026",
    },
]

export default function ProfilePage() {
    const searchParams = useSearchParams()
    const tabFromUrl = searchParams.get("tab")

    const [activeTab, setActiveTab] = useState<"account" | "history" | "back">(
        tabFromUrl === "history" ? "history" : "account"
    )

    const router = useRouter()

    const handleTabChange = (tab: "account" | "history") => {
        setActiveTab(tab)
        router.push(`/profile?tab=${tab}`)
    }

    const [name, setName] = useState(mockUser.name)
    const [email, setEmail] = useState(mockUser.email)


    const totalDownloads = historyData.length

    const totalSize = historyData.reduce(
        (acc, item) => acc + item.sizeMB,
        0
    )

    const favoritePlatform = useMemo(() => {
        const count: Record<string, number> = {}
        historyData.forEach((item) => {
            count[item.platform] = (count[item.platform] || 0) + 1
        })
        return Object.keys(count).reduce((a, b) =>
            count[a] > count[b] ? a : b
        )
    }, [])

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* ───────── SIDEBAR ───────── */}
                <Card className="md:col-span-1">
                    <CardContent className="flex flex-col items-center gap-4 py-6">

                        <Avatar className="h-20 w-20">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>KA</AvatarFallback>
                        </Avatar>

                        <div className="text-center">
                            <h2 className="font-semibold text-lg">{name}</h2>
                            <p className="text-sm text-muted-foreground">
                                {email}
                            </p>

                            <Badge
                                className={`mt-2 ${mockUser.isPremium
                                        ? "bg-emerald-500 text-white"
                                        : "bg-gray-200 text-gray-600"
                                    }`}
                            >
                                {mockUser.isPremium ? "Premium User" : "Free User"}
                            </Badge>
                        </div>

                        <Separator />

                        <div className="w-full space-y-2">
                            <Button
                                variant={activeTab === "account" ? "default" : "ghost"}
                                className="w-full justify-start"
                                onClick={() => handleTabChange("account")}
                            >
                                Account Settings
                            </Button>

                            <Button
                                variant={activeTab === "history" ? "default" : "ghost"}
                                className="w-full justify-start"
                                onClick={() => handleTabChange("history")}
                            >
                                Download History
                            </Button>
                            
                            <Link href="/home">
                            <Button
                                variant={activeTab === "back" ? "default" : "ghost"}
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

                {/* ───────── MAIN CONTENT ───────── */}
                <div className="md:col-span-3">

                    {/* ───────── ACCOUNT SETTINGS ───────── */}
                    {activeTab === "account" && (
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
                                        <Input
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium">
                                            Email
                                        </label>
                                        <Input
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>

                                    <Button>Save Changes</Button>
                                </CardContent>
                            </Card>

                            {/* ───────── STATS ───────── */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                                <Card>
                                    <CardContent className="py-6">
                                        <p className="text-sm text-muted-foreground">
                                            Total Downloads
                                        </p>
                                        <p className="text-2xl font-bold">
                                            {totalDownloads}
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="py-6">
                                        <p className="text-sm text-muted-foreground">
                                            Favorite Platform
                                        </p>
                                        <p className="text-2xl font-bold">
                                            {favoritePlatform}
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="py-6">
                                        <p className="text-sm text-muted-foreground">
                                            Total Size Downloaded
                                        </p>
                                        <p className="text-2xl font-bold">
                                            {totalSize} MB
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </>
                    )}

                    {/* ───────── DOWNLOAD HISTORY ───────── */}
                    {activeTab === "history" && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Download History</CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                {historyData.length === 0 && (
                                    <p className="text-muted-foreground">
                                        No download history yet.
                                    </p>
                                )}

                                {historyData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/40 transition"
                                    >
                                        <div>
                                            <p className="font-medium">
                                                {item.title}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {item.platform} • {item.date}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <Badge>{item.quality}</Badge>
                                            <p className="text-sm text-muted-foreground">
                                                {item.sizeMB} MB
                                            </p>
                                            <Button size="sm">
                                                Download Again
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    )}

                </div>
            </div>
        </div>
    )
}