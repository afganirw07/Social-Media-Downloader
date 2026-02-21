import HomepageSection from "@/components/home/homepage"
import PreviewDownload from "@/components/home/previewDownload"
import Footer from "@/components/sections/footer"

export default function Homepage() {
    return (
        <div className="flex flex-col gap-6">
            <HomepageSection />
            <PreviewDownload/>
            <Footer />
        </div>
    )
}   
