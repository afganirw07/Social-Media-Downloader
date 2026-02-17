"use client"

import Link from "next/link"

export function CTA() {
    return (
        <section className="px-4 py-10 relative z-10">
            <div className="max-w-6xl mx-auto">

                <div className="p-10 md:p-16 ">

                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-10">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 max-w-4xl tracking-tight mb-6">
                            Start Downloading in Seconds.
                        </h2>

                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                            Get 20 free tokens per day or upgrade anytime for unlimited downloads.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

                        {/* Primary */}
                        <Link
                            href="/signup"
                            className="px-8 py-4 rounded-xl bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get Started Free
                        </Link>

                        {/* Secondary */}
                        <Link
                            href="/signin"
                            className="px-8 py-4 rounded-xl border border-gray-300 text-gray-900 font-semibold text-lg hover:border-black hover:bg-gray-50 transition-all duration-300"
                        >
                            View Pricing
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}
