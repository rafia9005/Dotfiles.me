"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface GitHubRepo {
	id: number;
	name: string;
	description: string;
	html_url: string;
	homepage: string | null;
	stargazers_count: number;
	forks_count: number;
	language: string;
	topics: string[];
}

const staticProjects: GitHubRepo[] = [
	{
		id: 1,
		name: "wa-gateway",
		description: "API gateway to send messages and media to WhatsApp using whatsapp-web.js. It allows users to interact with WhatsApp through a RESTful interface.",
		html_url: "https://github.com/terarush/wa-gateway",
		homepage: null,
		stargazers_count: 4,
		forks_count: 4,
		language: "TypeScript",
		topics: ["whatsapp", "api", "gateway"],
	},
	{
		id: 2,
		name: "go-auth-service",
		description: "A Go-based authentication service that supports login and registration with email, as well as OAuth integration with Google and GitHub.",
		html_url: "https://github.com/rafia9005/go-auth-service",
		homepage: null,
		stargazers_count: 1,
		forks_count: 0,
		language: "Go",
		topics: ["auth", "oauth", "golang"],
	},
	{
		id: 3,
		name: "ComicHive",
		description: "ComicHive is an open-source platform for reading manga, manhwa, and watching anime without ads. Discover thousands of your favorite titles!",
		html_url: "https://github.com/terarush/ComicHive",
		homepage: null,
		stargazers_count: 9,
		forks_count: 14,
		language: "Svelte",
		topics: ["manga", "anime", "svelte"],
	},
	{
		id: 4,
		name: "Dotfiles.me",
		description: "Personal portfolio built with Next.js 16, featuring animations, Markdown blog, and Retro UI.",
		html_url: "https://github.com/rafia9005/Dotfiles.me",
		homepage: "https://ahmadrafi.tech",
		stargazers_count: 0,
		forks_count: 0,
		language: "TypeScript",
		topics: ["portfolio", "nextjs", "react"],
	},
	{
		id: 5,
		name: "Ravit",
		description: "A comprehensive full-stack social media application built with modular Go backend architecture and React TypeScript frontend. Features OAuth2 authentication.",
		html_url: "https://github.com/rafia9005/Ravit",
		homepage: null,
		stargazers_count: 2,
		forks_count: 1,
		language: "TypeScript",
		topics: ["social-media", "golang", "react"],
	},
	{
		id: 6,
		name: "Lumie-Assistant",
		description: "Lumie is a lightweight 2D AI assistant that brings personality to your workspace. By toggling between idle.png and speak.png, it provides a responsive interface.",
		html_url: "https://github.com/rafia9005/Lumie-Assistant",
		homepage: null,
		stargazers_count: 0,
		forks_count: 0,
		language: "TypeScript",
		topics: ["ai", "assistant", "electron"],
	},
];

const languageColors: Record<string, string> = {
	TypeScript: "bg-blue-500",
	Go: "bg-cyan-500",
	Svelte: "bg-orange-500",
	Shell: "bg-green-500",
	JavaScript: "bg-yellow-500",
	Python: "bg-blue-400",
};

export function ProjectSection() {
	const [repos, setRepos] = useState<GitHubRepo[]>([]);
	const [loading, setLoading] = useState(true);
	const sectionRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const gridRef = useRef<HTMLDivElement>(null);
	const linkRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setTimeout(() => {
			setRepos(staticProjects);
			setLoading(false);
		}, 300);
	}, []);

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

		// Project cards staggered animation with hover effect
		const projectCards = gridRef.current?.querySelectorAll(".project-card");
		if (projectCards && projectCards.length > 0) {
			gsap.fromTo(
				projectCards,
				{ opacity: 0, y: 50, scale: 0.9 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.6,
					stagger: {
						each: 0.1,
						from: "start"
					},
					ease: "back.out(1.2)",
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

	}, { scope: sectionRef, dependencies: [repos, loading] });

	return (
		<section ref={sectionRef} className="py-20 px-6 bg-muted/30" id="projects">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div ref={headerRef} className="mb-12 opacity-0">
					<h2 className="text-2xl font-bold text-foreground mb-2">Projects</h2>
					<div className="header-underline w-12 h-1 bg-primary rounded-full" />
				</div>

				{/* Projects Grid */}
				{loading ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{[...Array(6)].map((_, i) => (
							<div key={i} className="h-48 rounded-lg bg-card animate-pulse" />
						))}
					</div>
				) : (
					<div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{repos.map((repo) => (
							<a
								key={repo.id}
								href={repo.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="project-card opacity-0 group p-5 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
							>
								<div className="flex items-start justify-between mb-3">
									<div className="flex items-center gap-2 text-muted-foreground">
										<Github className="w-4 h-4" />
										<span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
											{repo.name}
										</span>
									</div>
									<ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
								</div>

								<p className="text-sm text-muted-foreground mb-4 line-clamp-2">
									{repo.description}
								</p>

								<div className="flex flex-wrap gap-1.5 mb-4">
									{repo.topics.slice(0, 3).map((topic) => (
										<span
											key={topic}
											className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
										>
											{topic}
										</span>
									))}
								</div>

								<div className="flex items-center gap-4 text-xs text-muted-foreground">
									{repo.language && (
										<div className="flex items-center gap-1.5">
											<span className={`w-2.5 h-2.5 rounded-full ${languageColors[repo.language] || "bg-gray-500"}`} />
											<span>{repo.language}</span>
										</div>
									)}
									<div className="flex items-center gap-1">
										<Star className="w-3.5 h-3.5" />
										<span>{repo.stargazers_count}</span>
									</div>
									<div className="flex items-center gap-1">
										<GitFork className="w-3.5 h-3.5" />
										<span>{repo.forks_count}</span>
									</div>
								</div>
							</a>
						))}
					</div>
				)}

				{/* View All Link */}
				<div ref={linkRef} className="mt-8 text-center opacity-0">
					<a
						href="https://github.com/rafia9005?tab=repositories"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						<Github className="w-4 h-4" />
						View all projects on GitHub
						<ExternalLink className="w-3.5 h-3.5" />
					</a>
				</div>
			</div>
		</section>
	);
}
