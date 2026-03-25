import { AboutSection } from "@/components/about-section";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectSection } from "@/components/project-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { getLatestPosts } from "@/lib/blog";

export default function Home() {
  const latestPosts = getLatestPosts(3);

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <ExperienceSection/>
      <ProjectSection/>
      <BlogSection posts={latestPosts}/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
