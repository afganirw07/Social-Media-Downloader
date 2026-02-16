import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


export const PLATFORMS = [
    {
        id: "tiktok",
        name: "TikTok",
        icon: AiFillTikTok,
        color: "text-black",
        hoverColor: "hover:text-black",
    },
    {
        id: "youtube",
        name: "YouTube",
        icon: FaYoutube,
        color: "text-red-600",
        hoverColor: "hover:text-red-600",
    },
    {
        id: "instagram",
        name: "Instagram",
        icon: FaInstagram,
        color: "text-pink-600",
        hoverColor: "hover:text-pink-600",
    },
    {
        id: "facebook",
        name: "Facebook",
        icon: FaFacebook,
        color: "text-blue-600",
        hoverColor: "hover:text-blue-600",
    },
    {
        id: "twitter",
        name: "Twitter",
        icon: FaSquareXTwitter,
        color: "text-black",
        hoverColor: "hover:text-black",
    },
];

import { Download, Zap, Shield, Sparkles } from "lucide-react"

export const FEATURES_DATA = [
    {
        title: "No watermark",
        description: "Download videos without any annoying watermarks.",
        icon: Shield,
        iconColor: "text-blue-400",
        bgColor: "bg-blue-500/20",
        borderColor: "border-blue-500/30",
        gradientColor: "from-blue-500/10",
    },
    {
        title: "HD Quality",
        description: "Supports HD, 2K, and 4K video downloads.",
        icon: Sparkles,
        iconColor: "text-green-400",
        bgColor: "bg-green-500/20",
        borderColor: "border-green-500/30",
        gradientColor: "from-green-500/10",
    },
    {
        title: "100% Free",
        description: "No hidden costs, download as much as you want for free.",
        icon: Download,
        iconColor: "text-purple-400",
        bgColor: "bg-purple-500/20",
        borderColor: "border-purple-500/30",
        gradientColor: "from-purple-500/10",
    },
    {
        title: "Fast Download",
        description: "Optimized servers for high-speed video processing.",
        icon: Zap,
        iconColor: "text-orange-400",
        bgColor: "bg-orange-500/20",
        borderColor: "border-orange-500/30",
        gradientColor: "from-orange-500/10",
    },
];
