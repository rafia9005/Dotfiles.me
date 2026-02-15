"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogCard } from "./blog-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	thumbnail: string;
	tags: string[];
}

interface BlogSectionProps {
	posts: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
	const sectionRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const gridRef = useRef<HTMLDivElement>(null);
	const linkRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		// Header animation
		gsap.fromTo(
			headerRef.current,
			{ opacity: 0, y: 30 },
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				scrollTrigger: {
					trigger: headerRef.current,
					start: "top 85%",
					toggleActions: "play none none none"
				}
			}
		);

		// Animate the underline
		const underline = headerRef.current?.querySelector(".header-underline");
		if (underline) {
			gsap.fromTo(
				underline,
				{ scaleX: 0, transformOrigin: "left" },
				{
					scaleX: 1,
					duration: 0.6,
					delay: 0.3,
					scrollTrigger: {
						trigger: headerRef.current,
						start: "top 85%",
						toggleActions: "play none none none"
					}
				}
			);
		}

		// Blog cards staggered animation
		const blogCards = gridRef.current?.querySelectorAll(".blog-card-wrapper");
		if (blogCards && blogCards.length > 0) {
			gsap.fromTo(
				blogCards,
				{ opacity: 0, y: 40, scale: 0.95 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.5,
					stagger: {
						each: 0.12,
						from: "start"
					},
					ease: "power2.out",
					scrollTrigger: {
						trigger: gridRef.current,
						start: "top 80%",
						toggleActions: "play none none none"
					}
				}
			);
		}

		// View all link animation
		gsap.fromTo(
			linkRef.current,
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				scrollTrigger: {
					trigger: linkRef.current,
					start: "top 90%",
					toggleActions: "play none none none"
				}
			}
		);

	}, { scope: sectionRef, dependencies: [posts] });

	return (
		<section ref={sectionRef} className="py-20 px-6" id="blog">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div ref={headerRef} className="mb-12 opacity-0">
					<h2 className="text-2xl font-bold text-foreground mb-2">Latest Articles</h2>
					<div className="header-underline w-12 h-1 bg-primary rounded-full" />
				</div>

				{/* Posts Grid */}
				<div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{posts.map((post, index) => (
						<div key={post.slug} className="blog-card-wrapper opacity-0">
							<BlogCard post={post} index={index} />
						</div>
					))}
				</div>

				{/* View All Link */}
				<div ref={linkRef} className="mt-10 text-center opacity-0">
					<Link
						href="/blog"
						className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						View all articles
						<ArrowRight className="w-4 h-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}
