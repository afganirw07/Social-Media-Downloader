import Hero from "@/components/sections/hero";
import Features from "@/components/sections/feature";
import HowItWorks from "@/components/sections/how-it-works";
import Platforms from "@/components/sections/platform";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testi";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";


export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full relative">

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

      {/* PLATFORMS
      <section className="relative z-10 min-h-screen">
        <Platforms/>
      </section> */}

      {/* PRICING */}
      <section className="relative z-10 min-h-screen">
        <Pricing/>
      </section>

      {/* PRICING */}
      <section className="relative z-10 min-h-screen">
        <Testimonials/>
      </section>

      {/* FAQ */}
      <section className="relative z-10 min-h-screen">
        <FAQ/>
      </section>
      <section className="mt-4">
      <Footer/>
      </section>
</div>
    </>
  );
}
