"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	thumbnail: string;
	tags: string[];
}

interface BlogCardProps {
	post: BlogPost;
	index: number;
}

export const BlogCard = memo(function BlogCard({ post, index }: BlogCardProps) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.05 }}
		>
			<Link href={`/blog/${post.slug}`} className="group block">
				<div className="rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors">
					{/* Thumbnail */}
					{post.thumbnail && (
						<div className="relative aspect-video overflow-hidden bg-muted">
							<Image
								src={post.thumbnail}
								alt={post.title}
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-300"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								unoptimized={!post.thumbnail.startsWith("http")}
							/>
						</div>
					)}

					{/* Content */}
					<div className="p-5">
						{/* Tags */}
						<div className="flex flex-wrap gap-2 mb-3">
							{post.tags.slice(0, 2).map((tag) => (
								<span
									key={tag}
									className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary"
								>
									{tag}
								</span>
							))}
						</div>

						{/* Title */}
						<h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
							{post.title}
						</h3>

						{/* Excerpt */}
						<p className="text-sm text-muted-foreground mb-4 line-clamp-2">
							{post.excerpt}
						</p>

						{/* Footer */}
						<div className="flex items-center justify-between text-xs text-muted-foreground">
							<div className="flex items-center gap-1.5">
								<Calendar className="w-3.5 h-3.5" />
								<span>
									{new Date(post.date).toLocaleDateString("en-US", {
										month: "short",
										day: "numeric",
										year: "numeric",
									})}
								</span>
							</div>
							<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
						</div>
					</div>
				</div>
			</Link>
		</motion.article>
	);
});
