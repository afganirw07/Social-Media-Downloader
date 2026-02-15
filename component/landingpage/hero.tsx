

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

                {/* badges */}
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    <div className="group relative flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 hover:shadow-blue-500/20">
                        <span>No watermark</span>
                    </div>

                    <div className="group relative flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 hover:shadow-green-500/20">
                        <span>HD Quality</span>
                    </div>

                    <div className="group relative flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 hover:shadow-purple-500/20">
                        <span>100% Free</span>
                    </div>

                    <div className="group relative flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 hover:shadow-orange-500/20">
                        <span>Fast Download</span>
                    </div>


                    {/* link */}
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}