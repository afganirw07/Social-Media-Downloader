import Hero from "@/components/sections/hero";
import Features from "@/components/sections/feature";
import HowItWorks from "@/components/sections/how-it-works";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testi";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar";
import { CTA } from "@/components/sections/cta";


export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full relative">

        <NavbarDemo />

        {/* HERO */}
        <section id="#" className="relative z-0 min-h-screen">
          <Hero />
        </section>

        <section id="how-it-works" className="relative z-10 min-h-screen">
        </section>

        <section id="features " className="relative z-10 min-h-screen">
        </section>

        <section id="pricing" className="relative z-10 min-h-screen">
        </section>

        
      </div>
    </>
  );
}

