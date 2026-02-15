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
	const postsPerPage = 9;

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

	const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
	const startIndex = (currentPage - 1) * postsPerPage;
	const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

	const handleSearch = (value: string) => {
		setSearchQuery(value);
		setCurrentPage(1);
	};

	return (
		<div className="min-h-screen pt-24 pb-16 px-6">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="mb-12"
				>
					<h1 className="text-3xl font-bold text-foreground mb-2">Blog</h1>
					<p className="text-muted-foreground mb-6">
						Articles about web development, Linux, and technology
					</p>

					{/* Search */}
					<div className="relative max-w-md">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
						<input
							type="text"
							placeholder="Search articles..."
							value={searchQuery}
							onChange={(e) => handleSearch(e.target.value)}
							className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-border bg-background focus:outline-none focus:border-primary transition-colors"
						/>
					</div>

					<p className="mt-3 text-sm text-muted-foreground">
						{filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
					</p>
				</motion.div>

				{/* Posts Grid */}
				{currentPosts.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{currentPosts.map((post, index) => (
							<BlogCard key={post.slug} post={post} index={index} />
						))}
					</div>
				) : (
					<div className="text-center py-16">
						<p className="text-muted-foreground">
							No articles found matching "{searchQuery}"
						</p>
					</div>
				)}

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="mt-12 flex items-center justify-center gap-2">
						<button
							onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
							disabled={currentPage === 1}
							className="p-2 rounded-lg border border-border hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							<ChevronLeft className="w-4 h-4" />
						</button>

						<div className="flex gap-1">
							{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
								<button
									key={page}
									onClick={() => setCurrentPage(page)}
									className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
										currentPage === page
											? "border-primary bg-primary text-primary-foreground"
											: "border-border hover:border-primary"
									}`}
								>
									{page}
								</button>
							))}
						</div>

						<button
							onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
							disabled={currentPage === totalPages}
							className="p-2 rounded-lg border border-border hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							<ChevronRight className="w-4 h-4" />
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
