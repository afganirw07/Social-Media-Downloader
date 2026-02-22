"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-5000",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 rounded-full border px-3 py-2 backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "bg-white/80 shadow-[0_10px_35px_rgba(0,0,0,0.12)] border-black/10"
            : "bg-white/60 shadow-[0_6px_20px_rgba(0,0,0,0.06)] border-black/5"
        )}
      >
        {/* Nav Items */}
        <div className="flex items-center gap-1">
          {navItems.map((navItem, idx) => (
            <a
              key={idx}
              href={navItem.link}
              className="relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-all duration-200 hover:bg-black/5 hover:text-black active:scale-95"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-black/10" />

        {/* Avatar */}
        <Avatar className="h-8 w-8 ring-2 ring-black/5">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="profile"
            className="grayscale"
          />
          <AvatarFallback>VN</AvatarFallback>
        </Avatar>
      </div>
    </motion.div>
  )
}