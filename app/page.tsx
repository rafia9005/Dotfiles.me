import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { AboutSection } from "@/components/about-section";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectSection } from "@/components/project-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  thumbnail: string;
  tags: string[];
}

function getLatestPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(contentDir);

  const posts = files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const filePath = path.join(contentDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        excerpt: data.excerpt as string,
        date: data.date as string,
        thumbnail: data.thumbnail as string,
        tags: data.tags as string[],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3); 

  return posts;
}

export default function Home() {
  const latestPosts = getLatestPosts();

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <ProjectSection/>
      <BlogSection posts={latestPosts}/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
