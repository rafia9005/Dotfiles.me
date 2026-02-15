import { Metadata } from "next";
import { BlogPageClient } from "@/components/blog-page-client";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Ahmad Rafi'i",
  description: "Articles about web development, Linux, and technology. Explore tutorials, insights, and experiences from a Full Stack Developer.",
  openGraph: {
    title: "Blog | Ahmad Rafi'i",
    description: "Articles about web development, Linux, and technology",
    url: "https://dotfiles.me/blog",
    siteName: "Ahmad Rafi'i Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Ahmad Rafi'i",
    description: "Articles about web development, Linux, and technology",
    creator: "@rafia9005",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogPageClient posts={posts} />;
}

