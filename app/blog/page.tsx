import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPageClient } from "@/components/blog-page-client";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  thumbnail: string;
  tags: string[];
}

function getAllPosts(): BlogPost[] {
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
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogPageClient posts={posts} />;
}

