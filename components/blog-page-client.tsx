"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { BlogCard } from "@/components/blog-card";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  thumbnail: string;
  tags: string[];
}

interface BlogPageProps {
  posts: BlogPost[];
}

export function BlogPageClient({ posts }: BlogPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;

    const query = searchQuery.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [posts, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset to page 1 when search changes
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-8 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Articles about web development, Linux, and technology
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Results count */}
            <p className="mt-4 text-sm text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="pb-16 px-6">
        <div className="mx-auto max-w-6xl">
          {currentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No articles found matching "{searchQuery}"
              </p>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex items-center justify-center gap-2"
            >
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-border bg-card hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:bg-card disabled:hover:text-foreground"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      currentPage === page
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card hover:border-primary hover:text-primary"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-border bg-card hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:bg-card disabled:hover:text-foreground"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
