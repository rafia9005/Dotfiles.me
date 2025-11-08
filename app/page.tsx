import { AboutSection } from "@/components/about-section";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <Footer/>
    </>
  );
}
