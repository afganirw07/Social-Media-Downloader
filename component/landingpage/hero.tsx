import { InputInputGroup } from "../input";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube, FaInstagram, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Hero() {

    return (
        <>
            <div className="bg-grid-fade flex flex-col justify-center items-center py-16 px-4 lg:px-8">
                <h1 className="text-3xl md:text-7xl font-bold text-center text-black max-w-4xl md:max-w-6xl">
                    Download Videos From Any Social Media Instantly
                </h1>

                <p className="mt-6 text-lg md:text-xl text-center text-gray-600 max-w-2xl">
                    Download videos from any social media platform in high quality. Just paste the link and download instantly.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    {/* No watermark Badge */}
                    <div className="group relative flex items-center gap-2 rounded-full border border-blue-500/30 bg-linear-to-r from-blue-500/10 to-transparent px-5 py-2.5 text-sm font-medium text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                            <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <span>No watermark</span>
                    </div>

                    {/* HD Quality Badge */}
                    <div className="group relative flex items-center gap-2 rounded-full border border-green-500/30 bg-linear-to-r from-green-500/10 to-transparent px-5 py-2.5 text-sm font-medium text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-green-500/30">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20">
                            <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span>HD Quality</span>
                    </div>

                    {/* 100% Free Badge */}
                    <div className="group relative flex items-center gap-2 rounded-full border border-purple-500/30 bg-linear-to-r from-purple-500/10 to-transparent px-5 py-2.5 text-sm font-medium text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/30">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20">
                            <svg className="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span>100% Free</span>
                    </div>

                    {/* Fast Download Badge */}
                    <div className="group relative flex items-center gap-2 rounded-full border border-orange-500/30 bg--to-r from-orange-500/10 to-transparent px-5 py-2.5 text-sm font-medium text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-500/30">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20">
                            <svg className="h-4 w-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <span>Fast Download</span>
                    </div>

                    {/* link */}
                    <div className="w-full max-w-xl mt-4">
                        <InputInputGroup/>
                    </div>
                </div>

                {/* Platform icons */}
                        <div className="flex gap-6 mt-6 text-3xl text-gray-700">
                        <AiFillTikTok className="hover:text-black transition-colors cursor-pointer" />
                        <FaYoutube className="hover:text-red-600 transition-colors cursor-pointer" />
                        <FaInstagram className="hover:text-pink-600 transition-colors cursor-pointer" />
                        <FaSquareXTwitter className="hover:text-black transition-colors cursor-pointer" />
                        </div>
            </div>
        </>
    )
}