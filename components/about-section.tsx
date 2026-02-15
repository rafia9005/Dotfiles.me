"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const bioRef = useRef<HTMLDivElement>(null);
	const setupRef = useRef<HTMLDivElement>(null);
	const specsRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);

	const skills = [
		{ category: "Languages", items: ["Go", "TypeScript", "Python", "JavaScript", "PHP"] },
		{ category: "Frontend", items: ["Next.js", "React", "Vue.js", "TailwindCSS"] },
		{ category: "Backend", items: ["NestJS", "Go Fiber", "Laravel", "Express"] },
		{ category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
		{ category: "Tools", items: ["Docker", "Git", "Linux", "Vim"] },
	];

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

		// Animate the underline separately
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

		// Bio paragraphs animation
		const bioParas = bioRef.current?.querySelectorAll("p");
		if (bioParas) {
			gsap.fromTo(
				bioParas,
				{ opacity: 0, y: 25 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					stagger: 0.15,
					scrollTrigger: {
						trigger: bioRef.current,
						start: "top 80%",
						toggleActions: "play none none none"
					}
				}
			);
		}

		// Setup images animation with parallax
		const setupImages = setupRef.current?.querySelectorAll(".setup-image");
		if (setupImages) {
			gsap.fromTo(
				setupImages,
				{ opacity: 0, y: 40, scale: 0.95 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.8,
					stagger: 0.2,
					ease: "power3.out",
					scrollTrigger: {
						trigger: setupRef.current,
						start: "top 80%",
						toggleActions: "play none none none"
					}
				}
			);
		}

		// Specs grid animation
		const specItems = specsRef.current?.querySelectorAll(".spec-item");
		if (specItems) {
			gsap.fromTo(
				specItems,
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.4,
					stagger: 0.08,
					scrollTrigger: {
						trigger: specsRef.current,
						start: "top 80%",
						toggleActions: "play none none none"
					}
				}
			);
		}

		// Skills animation - each category row
		const skillRows = skillsRef.current?.querySelectorAll(".skill-row");
		if (skillRows) {
			skillRows.forEach((row, index) => {
				gsap.fromTo(
					row,
					{ opacity: 0, x: -30 },
					{
						opacity: 1,
						x: 0,
						duration: 0.5,
						delay: index * 0.1,
						scrollTrigger: {
							trigger: skillsRef.current,
							start: "top 80%",
							toggleActions: "play none none none"
						}
					}
				);

				// Animate skill pills within each row
				const pills = row.querySelectorAll(".skill-pill");
				gsap.fromTo(
					pills,
					{ opacity: 0, scale: 0.8 },
					{
						opacity: 1,
						scale: 1,
						duration: 0.3,
						stagger: 0.05,
						delay: 0.2 + index * 0.1,
						scrollTrigger: {
							trigger: skillsRef.current,
							start: "top 80%",
							toggleActions: "play none none none"
						}
					}
				);
			});
		}

	}, { scope: sectionRef });

	return (
		<section ref={sectionRef} className="py-20 px-6" id="about">
			<div className="max-w-4xl mx-auto">
				{/* Section Header */}
				<div ref={headerRef} className="mb-12 opacity-0">
					<h2 className="text-2xl font-bold text-foreground mb-2">About Me</h2>
					<div className="header-underline w-12 h-1 bg-primary rounded-full" />
				</div>

				{/* Bio */}
				<div ref={bioRef} className="mb-12">
					<div className="space-y-4 text-muted-foreground leading-relaxed">
						<p className="opacity-0">
							I'm a <span className="text-foreground font-medium">Full Stack Developer</span> with 
							2+ years of experience building modern web applications. I specialize in 
							Go, TypeScript, and cloud technologies.
						</p>
						<p className="opacity-0">
							Currently studying <span className="text-foreground font-medium">Computer and Network Engineering</span> at 
							SMK Negeri 6 Malang (2023-2026). I'm passionate about open-source software and 
							use <span className="text-primary font-mono text-sm">Arch Linux</span> as my daily driver.
						</p>
						<p className="opacity-0">
							I enjoy building tools and applications that solve real problems. When I'm not coding, 
							you'll find me customizing my Linux setup or exploring new technologies.
						</p>
					</div>
				</div>

				{/* Setup Images */}
				<div ref={setupRef} className="mb-12">
					<h3 className="text-lg font-semibold text-foreground mb-4">My Setup</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<a
							href="https://github.com/rafia9005/config"
							target="_blank"
							rel="noopener noreferrer"
							className="setup-image opacity-0 group relative aspect-video rounded-lg overflow-hidden border border-border"
						>
							<Image
								src="/desktop.png"
								alt="Desktop Setup"
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-300"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
							<p className="absolute bottom-4 left-4 text-white font-medium">Arch Linux + BSPWM</p>
						</a>
						<div className="setup-image opacity-0 relative aspect-video rounded-lg overflow-hidden border border-border">
							<Image
								src="/setup.jpg"
								alt="Desk Setup"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
							<p className="absolute bottom-4 left-4 text-white font-medium">Workspace</p>
						</div>
					</div>
				</div>

				{/* Specs */}
				<div 
					ref={specsRef}
					className="mb-12 p-6 rounded-lg border border-border bg-card"
				>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
						<div className="spec-item opacity-0">
							<p className="text-muted-foreground mb-1">Distro</p>
							<p className="font-mono text-primary">Arch Linux</p>
						</div>
						<div className="spec-item opacity-0">
							<p className="text-muted-foreground mb-1">Laptop</p>
							<p className="font-mono text-foreground">Acer Nitro 5</p>
						</div>
						<div className="spec-item opacity-0">
							<p className="text-muted-foreground mb-1">CPU</p>
							<p className="font-mono text-foreground">Ryzen 5 3550H</p>
						</div>
						<div className="spec-item opacity-0">
							<p className="text-muted-foreground mb-1">RAM</p>
							<p className="font-mono text-foreground">16GB</p>
						</div>
						<div className="spec-item opacity-0">
							<p className="text-muted-foreground mb-1">GPU</p>
							<p className="font-mono text-foreground">RX 560X</p>
						</div>
						<div className="spec-item opacity-0">
							<p className="text-muted-foreground mb-1">WM</p>
							<p className="font-mono text-foreground">BSPWM</p>
						</div>
						<div className="spec-item opacity-0">
							<p className="text-muted-foreground mb-1">Editor</p>
							<p className="font-mono text-foreground">Neovim</p>
						</div>
						<div className="spec-item opacity-0">
							<p className="text-muted-foreground mb-1">Terminal</p>
							<p className="font-mono text-foreground">Kitty</p>
						</div>
					</div>
				</div>

				{/* Skills */}
				<div ref={skillsRef}>
					<h3 className="text-lg font-semibold text-foreground mb-6">Tech Stack</h3>
					<div className="space-y-4">
						{skills.map((skill) => (
							<div key={skill.category} className="skill-row opacity-0 flex flex-col sm:flex-row gap-3">
								<div className="sm:w-24 flex-shrink-0">
									<span className="text-sm text-primary font-medium">{skill.category}</span>
								</div>
								<div className="flex flex-wrap gap-2">
									{skill.items.map((item) => (
										<span
											key={item}
											className="skill-pill px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
