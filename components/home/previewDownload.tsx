"use client"

import { useState } from "react"

/* ───────────────── TYPES ───────────────── */

interface DownloadItem {
  quality: string
  format: string
  size?: string
  url: string
}

interface VideoData {
  thumbnail: string
  username: string
  title?: string
  downloads: DownloadItem[]
}

/* ───────────────── MOCK (fallback) ───────────────── */

const MOCK_DATA: VideoData = {
  thumbnail: "https://picsum.photos/seed/vidly/800/450",
  username: "username",
  title: "Amazing video title goes here for preview",
  downloads: [
    { quality: "1080p", format: "MP4", size: "128 MB", url: "#" },
    { quality: "720p", format: "MP4", size: "72 MB", url: "#" },
    { quality: "480p", format: "MP4", size: "38 MB", url: "#" },
    { quality: "Audio", format: "MP3", size: "5.2 MB", url: "#" },
  ],
}

/* ───────────────── QUALITY STYLE MAP ───────────────── */

const QUALITY_STYLE: Record<
  string,
  { pill: string; dot: string }
> = {
  "1080p": {
    pill: "bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-400",
  },
  "720p": {
    pill: "bg-blue-50 text-blue-700",
    dot: "bg-blue-400",
  },
  "480p": {
    pill: "bg-violet-50 text-violet-700",
    dot: "bg-violet-400",
  },
  "Audio": {
    pill: "bg-orange-50 text-orange-700",
    dot: "bg-orange-400",
  },
}

/* ───────────────── ICONS ───────────────── */

const ShieldIcon = () => (
  <svg
    className="w-3.5 h-3.5 text-gray-500 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const DownloadArrow = () => (
  <svg
    className="w-3 h-3 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
)

/* ───────────────── COMPONENT ───────────────── */

export default function PreviewDownload({
  data = MOCK_DATA,
}: {
  data?: VideoData
}) {
  const [removeWatermark, setRemoveWatermark] = useState(true)
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white bg-grid-fade flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white border border-black/8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.04)] overflow-hidden">

        {/* ───────── THUMBNAIL ───────── */}
        <div className="relative aspect-video bg-gray-100 overflow-hidden">
          <img
            src={data.thumbnail}
            alt="video thumbnail"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-3.5 left-4 right-4">
            <p className="text-[11px] font-medium text-white/70 mb-0.5">
              @{data.username}
            </p>
            {data.title && (
              <p className="text-sm font-semibold text-white leading-snug line-clamp-2">
                {data.title}
              </p>
            )}
          </div>
        </div>

        {/* ───────── BODY ───────── */}
        <div className="px-5 pt-5">

          {/* Watermark Toggle */}
          <div className="flex items-center justify-between pb-4 mb-1.5 border-b border-black/6">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <ShieldIcon />
              Remove Watermark
              <span
                className={`text-[11px] font-semibold px-2 py-0.5 rounded-full transition-colors ${
                  removeWatermark
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {removeWatermark ? "On" : "Off"}
              </span>
            </div>

            <button
              onClick={() => setRemoveWatermark((prev) => !prev)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
                removeWatermark ? "bg-gray-900" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-[3px] left-[3px] w-4.5 h-4.5 bg-white rounded-full shadow-sm transition-transform duration-300 ${
                  removeWatermark ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Download List */}
          <div className="flex flex-col gap-1 pb-2">
            {data.downloads.map((item, i) => {
              const style =
                QUALITY_STYLE[item.quality] ?? QUALITY_STYLE["480p"]

              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                    hoveredRow === i
                      ? "bg-gray-100"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {/* Left */}
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold font-mono ${style.pill}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${style.dot}`}
                      />
                      {item.quality}
                    </span>

                    <span className="text-[11px] font-medium font-mono text-gray-400">
                      {item.format}
                    </span>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-2">
                    {item.size && (
                      <span className="text-[11px] text-gray-400">
                        {item.size}
                      </span>
                    )}

                    <a href={item.url}>
                      <button className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-900 hover:bg-gray-800 active:scale-95 text-white text-[11px] font-semibold rounded-full transition-all duration-150">
                        Download
                        <DownloadArrow />
                      </button>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ───────── FOOTER ───────── */}
        <div className="px-5 py-3.5 border-t border-black/6 flex items-center justify-center gap-1">
          <span className="text-[11px] text-gray-400">Powered by</span>
          <span className="text-[11px] font-semibold text-gray-700">
            Vidly
          </span>
          <span className="text-[11px] text-gray-400">
            · Free & No watermark
          </span>
        </div>
      </div>
    </div>
  )
}