"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface GitHubStats {
	public_repos: number;
	followers: number;
	created_at: string;
}

const CACHE_DURATION = 5 * 60 * 1000;
let cachedStats: GitHubStats | null = null;
let cacheTimestamp: number = 0;

export function HeroSection() {
	const [stats, setStats] = useState<GitHubStats | null>(null);
	const [loading, setLoading] = useState(true);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const now = Date.now();

		if (cachedStats && now - cacheTimestamp < CACHE_DURATION) {
			setStats(cachedStats);
			setLoading(false);
			return;
		}

		fetch("https://api.github.com/users/rafia9005")
			.then((res) => res.json())
			.then((data) => {
				cachedStats = data;
				cacheTimestamp = Date.now();
				setStats(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error("Error fetching GitHub data:", err);
				setLoading(false);
			});
	}, []);

	useGSAP(
		() => {
			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			tl.fromTo(
				".hero-banner",
				{ opacity: 0, scale: 1.1 },
				{ opacity: 1, scale: 1, duration: 1.2 },
			);

			tl.fromTo(
				".hero-avatar",
				{ opacity: 0, y: 30, scale: 0.8 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.8,
					ease: "back.out(1.5)",
				},
				"-=0.6",
			);

			tl.fromTo(
				".hero-text",
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
				"-=0.4",
			);

			tl.fromTo(
				".hero-desc",
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.6 },
				"-=0.3",
			);

			tl.fromTo(
				".hero-stat",
				{ opacity: 0, y: 15 },
				{ opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
				"-=0.2",
			);

			tl.fromTo(
				".hero-btn",
				{ opacity: 0, y: 10 },
				{ opacity: 1, y: 0, duration: 0.4, stagger: 0.05 },
				"-=0.2",
			);

			// Banner parallax effect
			gsap.to(".hero-banner img", {
				yPercent: 30,
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			});
		},
		{ scope: containerRef },
	);

	return (
		<section ref={containerRef} className="relative w-full flex flex-col">
			{/* Banner */}
			<div className="hero-banner relative h-64 sm:h-80 md:h-96 lg:h-[30rem] w-full overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-0">
				<Image
					src="/banner.gif"
					alt="Hero banner"
					fill
					priority
					className="object-cover opacity-80"
					unoptimized
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
			</div>

			{/* Content */}
			<div className="flex-1 w-full max-w-5xl mx-auto px-6 -mt-20 md:-mt-24 relative z-10 pb-10">
				<div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-10 mb-8">
					{/* Avatar */}
					<div className="hero-avatar relative opacity-0">
						<div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background overflow-hidden shadow-xl bg-background">
							<Image
								src="/avatar.jpeg"
								alt="Ahmad Rafi'i"
								fill
								priority
								className="object-cover"
								sizes="(max-width: 768px) 128px, 160px"
							/>
						</div>
					</div>

					{/* Name & Title */}
					<div className="flex-1 hero-text opacity-0">
						<h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2">
							Ahmad Rafi'i
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground font-medium">
							Full Stack Developer
						</p>
					</div>

					{/* Actions */}
					<div className="flex gap-3 hero-btn opacity-0">
						<Link
							href="https://github.com/rafia9005"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2.5 border border-border rounded-full hover:border-primary hover:text-primary transition-all hover:scale-110 bg-background"
						>
							<Github className="w-5 h-5" />
						</Link>
						<Link
							href="https://linkedin.com/in/rafia9005"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2.5 border border-border rounded-full hover:border-primary hover:text-primary transition-all hover:scale-110 bg-background"
						>
							<Linkedin className="w-5 h-5" />
						</Link>
					</div>
				</div>

				{/* Description */}
				<div className="hero-desc opacity-0 max-w-3xl mb-12">
					<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
						Passionate about building scalable web applications and
						exploring modern cloud technologies. Specializing in{" "}
						<span className="text-foreground font-medium">Go</span>,{" "}
						<span className="text-foreground font-medium">
							TypeScript
						</span>
						, and{" "}
						<span className="text-foreground font-medium">
							Linux
						</span>{" "}
						environments.
					</p>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-border/50">
					<div className="hero-stat opacity-0">
						<p className="text-sm text-muted-foreground mb-1">
							Projects
						</p>
						<p className="text-3xl font-bold text-foreground">
							{loading ? "..." : stats?.public_repos || "0"}
						</p>
					</div>
					<div className="hero-stat opacity-0">
						<p className="text-sm text-muted-foreground mb-1">
							Followers
						</p>
						<p className="text-3xl font-bold text-foreground">
							{loading ? "..." : stats?.followers || "0"}
						</p>
					</div>
					<div className="hero-stat opacity-0">
						<p className="text-sm text-muted-foreground mb-1">
							Experience
						</p>
						<p className="text-3xl font-bold text-foreground">2+</p>
					</div>
					<div className="hero-stat opacity-0">
						<p className="text-sm text-muted-foreground mb-1">
							Joined
						</p>
						<p className="text-3xl font-bold text-foreground">
							{stats?.created_at
								? new Date(stats.created_at).getFullYear()
								: "..."}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
