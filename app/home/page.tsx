import DownloadResult from "@/components/home/downloadResult"
import HomepageSection from "@/components/home/homepage"
import PreviewDownload from "@/components/home/previewDownload"
import Footer from "@/components/sections/footer"

const dummyData = {
  thumbnail: "https://picsum.photos/600/800",
  username: "darkNova",
  title: "Example TikTok video",
  downloads: [
    {
      quality: "1080p",
      format: "MP4",
      size: "12 MB",
      url: "#",
    },
    {
      quality: "720p",
      format: "MP4",
      size: "8 MB",
      url: "#",
    },
    {
      quality: "Audio",
      format: "MP3",
      size: "2 MB",
      url: "#",
    },
  ],
}

export default function Homepage() {
    return (
        <div className="flex flex-col gap-6">
            <HomepageSection />
            <PreviewDownload data={dummyData}/>
            {/* <DownloadResult {...dummyData}/> */}
            <Footer />
        </div>
    )
}   
