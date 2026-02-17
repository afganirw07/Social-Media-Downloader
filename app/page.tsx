import Hero from "@/components/sections/hero";
import Features from "@/components/sections/feature";
import HowItWorks from "@/components/sections/how-it-works";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testi";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar";
import CTASection from "@/components/sections/ctasection";


export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full relative">

        <NavbarDemo/>

        {/* HERO */}
        <section id="#" className="relative z-0 min-h-screen">
          <Hero />
        </section>

        {/* HOW IT WORKS */}
        <section className="relative z-10 min-h-screen">
          <HowItWorks />
        </section>

        {/* FEATURES */}
        <section id="features " className="relative z-10 min-h-screen">
          <Features />
        </section>

      {/* PLATFORMS
      <section className="relative z-10 min-h-screen">
        <Platforms/>
      </section> */}

      {/* PRICING */}
      <section id="pricing" className="relative z-10 min-h-screen">
        <Pricing/>
      </section>

        {/* TEstimonials */}
        <section className="relative z-10 min-h-screen">
          <Testimonials />
        </section>

      {/* FAQ */}
      <section className="relative z-10 min-h-screen">
        <FAQ/>
      </section>

      {/* CTA
      <section className="relative z-10 min-h-screen">
        <CTASection/>
      </section> */}

      <section id="contact">
      <Footer/>
      </section>
</div>
    </>
  );
}
