import Hero from "@/components/sections/hero";
import Features from "@/components/sections/feature";
import HowItWorks from "@/components/sections/how-it-works";
import Platforms from "@/components/sections/platform";


export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full bg-white relative">

        {/* HERO */}
        <section className="relative z-0 min-h-screen">
          <Hero />
        </section>

        {/* HOW IT WORKS */}
        <section className="relative z-10 min-h-screen">
          <HowItWorks />
        </section>

        {/* FEATURES */}
        <section className="relative z-10 min-h-screen">
          <Features />
        </section>

        {/* PLATFORMS */}
        <section className="relative z-10 min-h-screen">
          <Platforms />
        </section>
      </div>
    </>
  );
}
