import Hero from "@/components/sections/hero";
import Features from "@/components/sections/feature";
import HowItWorks from "@/components/sections/how-it-works";
import Platforms from "@/components/sections/platform";


export default function Home() {
  return (
    <>
<div className="min-h-screen w-full bg-white relative">
  {/* Dual Gradient Overlay Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
      `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />

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
        <Features/>
      </section>

      {/* PLATFORMS */}
      <section className="relative z-10 min-h-screen">
        <Platforms/>
      </section>
</div>
    </>
  );
}
