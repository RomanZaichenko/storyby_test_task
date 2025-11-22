import {Hero} from "@/components/sections/Hero";
import {Benefits} from "@/components/sections/Benefits";
import {Reviews} from "@/components/sections/Reviews";
import {Footer} from "@/components/sections/Footer";

export default function DemoLandingPage() {
  return (
    <main className = "min-h-screen flex flex-col">
      <Hero/>
      <Benefits/>
      <Reviews/>
      <Footer/>
    </main>
  )
}