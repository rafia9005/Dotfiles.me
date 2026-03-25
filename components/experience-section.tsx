"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getExperience, formatExperienceDate, calculateDuration } from "@/lib/linkedin";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const experiencesRef = useRef<HTMLDivElement>(null);

	const experiences = getExperience();

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

		// Experience cards animation
		const experienceCards = experiencesRef.current?.querySelectorAll(".experience-card");
		if (experienceCards) {
			gsap.fromTo(
				experienceCards,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					stagger: 0.1,
					scrollTrigger: {
						trigger: experiencesRef.current,
						start: "top 80%",
						toggleActions: "play none none none"
					}
				}
			);
		}
	}, { scope: sectionRef });

	return (
		<section ref={sectionRef} className="py-20 px-6" id="experience">
			<div className="max-w-4xl mx-auto">
				{/* Section Header */}
				<div ref={headerRef} className="mb-12 opacity-0">
					<h2 className="text-2xl font-bold text-foreground mb-2">Experience</h2>
					<div className="header-underline w-12 h-1 bg-primary rounded-full" />
				</div>

				{/* Experience List */}
				<div ref={experiencesRef} className="space-y-6">
					{experiences.map((exp) => (
						<div 
							key={exp.id} 
							className="experience-card opacity-0 p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
						>
							<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
								<div>
									<h3 className="text-base font-semibold text-foreground">
										{exp.title}
									</h3>
									<p className="text-sm text-muted-foreground">
										{exp.company} · {exp.employmentType}
									</p>
								</div>
								<div className="text-xs text-muted-foreground whitespace-nowrap">
									{formatExperienceDate(exp.startDate)} - {exp.endDate ? formatExperienceDate(exp.endDate) : "Present"}
									<span className="ml-1">({calculateDuration(exp.startDate, exp.endDate)})</span>
								</div>
							</div>
							{exp.location && (
								<p className="text-xs text-muted-foreground mb-2">{exp.location}</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
