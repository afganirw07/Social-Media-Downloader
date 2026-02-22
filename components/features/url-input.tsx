"use client"

import { Field } from "@/components/ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { ArrowRight } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"
import {
    InstagramDownloader,
    TikTokDownloader,
    FacebookDownloader,
    TwitterDownloader,
    YouTubeDownloader
} from "@/services/MediaDownloader"
import { useState } from "react"
import { toast } from "sonner"

interface InputInputGroupProps {
    setPreviewData: (data: any) => void
}

export function InputInputGroup({ setPreviewData }: InputInputGroupProps) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const { data: session } = useSession()
    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText()
            const input = document.getElementById("input-group-url") as HTMLInputElement
            if (input) {
                input.value = text
                input.focus()
            }
        } catch (err) {
            console.error("Failed to read clipboard:", err)
        }
    }

    const toLogin = () => {
        router.push("/signin")
    }

    const handleDownload = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!session) {
            toLogin()
            return
        }

        const input = document.getElementById("input-group-url") as HTMLInputElement
        const url = input?.value

        if (!url) return

        try {
            setLoading(true)
            toast.success("Downloading...")
            let result;
            if (url.includes("instagram.com")) {
                result = await InstagramDownloader({ url, fileType: "mp4", userId: session.user.id })
            } else if (url.includes("tiktok.com")) {
                result = await TikTokDownloader({ url, fileType: "mp4", userId: session.user.id })
            } else if (url.includes("facebook.com")) {
                result = await FacebookDownloader({ url, fileType: "mp4", userId: session.user.id })
            } else if (url.includes("twitter.com") || url.includes("x.com")) {
                result = await TwitterDownloader({ url, fileType: "mp4", userId: session.user.id })
            } else if (url.includes("youtube.com") || url.includes("youtu.be")) {
                result = await YouTubeDownloader({ url, fileType: "mp4", userId: session.user.id })
            } else {
                alert("Platform not supported yet")
                return
            }

            // console.log("====RESULT====",result)

            if (result) {
                setLoading(false)
                setPreviewData(result)
            }
        } catch (error) {
            console.error("Download error:", error)
            setLoading(false)
            toast.error("Failed to fetch video data")
        }
    }

    return (
        <div className="w-full max-w-xl mx-auto space-y-3">
            <Field>
                <InputGroup className="h-15 px-2 md:px-4 rounded-xl border border-gray-300 bg-white focus-within:border-gray-500 focus-within:ring-4 focus-within:ring-gray-100 transition-all overflow-hidden">

                    <InputGroupInput
                        id="input-group-url"
                        placeholder="Paste your video link..."
                        className="text-base text-gray-900 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:outline-none px-4"
                    />


                    <InputGroupAddon align="inline-end" className="gap-1 pr-1.5">
                        <button
                            type="button"
                            onClick={handlePaste}
                            className="px-4 h-10 cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                            Paste
                        </button>

                        <button
                            type="submit"
                            onClick={handleDownload}
                            className="group flex items-center cursor-pointer  gap-2 px-4 h-10 bg-black hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-colors ">
                            {loading ? "Loading..." : "Download"}
                            <div className="transition-transform duration-300 group-hover:translate-x-1">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </button>
                    </InputGroupAddon>

                </InputGroup>
            </Field>
        </div>
    )
}