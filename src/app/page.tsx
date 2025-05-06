import ProductGrid from "@/app/_components/ProductGrid";
import AboutUs from "./_components/AboutUs";
import Partners from "./_components/Partners";
import Contact from "./_components/Contact";
import Process from "./_components/Process";
import Hero from "./_components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";
import FullBg from "@/public/full-bg.png";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden w-full">
      <main className="flex flex-col w-full mt-16 md:mt-0 items-center sm:items-start">
        <Image 
            className="fixed object-cover scale-105 h-screen w-screen top-0 -left-1 -z-1 blur-xs"
            src={FullBg}
            height={800}
            alt="background"
            />
        <Hero />
        <Process />
        <ProductGrid />
        <div className="bg-white mb-[84px] w-full h-[64px]"/>
        <AboutUs/>
        <Partners />
        <div className="w-full">
          <Contact/>
        </div>
      </main>
      <div className="w-full h-fit bg-white z-10">
        <Footer />

      </div>
    </div>
  );
}
