"use client";

import { useRef } from "react";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const leftColRef = useRef<HTMLDivElement>(null);
	const rightColRef = useRef<HTMLDivElement>(null);

	const contacts = [
		{
			icon: Mail,
			label: "Email",
			value: "rafia9005@gmail.com",
			href: "mailto:rafia9005@gmail.com",
		},
		{
			icon: Phone,
			label: "Phone",
			value: "+62 821-4333-8737",
			href: "tel:+6282143338737",
		},
		{
			icon: MapPin,
			label: "Location",
			value: "Malang, Indonesia",
			href: null,
		},
	];

	const socials = [
		{ icon: Github, label: "GitHub", href: "https://github.com/rafia9005" },
		{ icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/rafia9005" },
		{ icon: Mail, label: "Email", href: "mailto:rafia9005@gmail.com" },
	];

	useGSAP(() => {
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

		const description = leftColRef.current?.querySelector(".contact-description");
		if (description) {
			gsap.fromTo(
				description,
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					scrollTrigger: {
						trigger: leftColRef.current,
						start: "top 80%",
						toggleActions: "play none none none"
					}
				}
			);
		}

		const contactItems = leftColRef.current?.querySelectorAll(".contact-item");
		if (contactItems) {
			gsap.fromTo(
				contactItems,
				{ opacity: 0, x: -30 },
				{
					opacity: 1,
					x: 0,
					duration: 0.5,
					stagger: 0.1,
					delay: 0.2,
					scrollTrigger: {
						trigger: leftColRef.current,
						start: "top 80%",
						toggleActions: "play none none none"
					}
				}
			);
		}

		const socialLinks = leftColRef.current?.querySelectorAll(".social-link");
		if (socialLinks) {
			gsap.fromTo(
				socialLinks,
				{ opacity: 0, y: 15, scale: 0.9 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.4,
					stagger: 0.08,
					delay: 0.4,
					scrollTrigger: {
						trigger: leftColRef.current,
						start: "top 80%",
						toggleActions: "play none none none"
					}
				}
			);
		}

		gsap.fromTo(
			rightColRef.current,
			{ 
				opacity: 0, 
				x: window.innerWidth < 768 ? 0 : 50, 
				y: window.innerWidth < 768 ? 30 : 0, 
				scale: 0.95 
			},
			{
				opacity: 1,
				x: 0,
				y: 0,
				scale: 1,
				duration: 0.8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: rightColRef.current,
					start: "top 80%",
					toggleActions: "play none none none"
				}
			}
		);

		const ctaTags = rightColRef.current?.querySelectorAll(".cta-tag");
		if (ctaTags) {
			gsap.fromTo(
				ctaTags,
				{ opacity: 0, scale: 0.8 },
				{
					opacity: 1,
					scale: 1,
					duration: 0.3,
					stagger: 0.05,
					delay: 0.3,
					scrollTrigger: {
						trigger: rightColRef.current,
						start: "top 80%",
						toggleActions: "play none none none"
					}
				}
			);
		}

	}, { scope: sectionRef });

	return (
		<section ref={sectionRef} id="contact" className="py-20 px-6 bg-muted/30 overflow-hidden">
			<div className="max-w-4xl mx-auto">
				<div ref={headerRef} className="mb-12 opacity-0">
					<h2 className="text-2xl font-bold text-foreground mb-2">Get In Touch</h2>
					<div className="header-underline w-12 h-1 bg-primary rounded-full" />
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					<div ref={leftColRef}>
						<p className="contact-description opacity-0 text-muted-foreground mb-8 leading-relaxed">
							I'm always open to discussing new projects, creative ideas, or 
							opportunities. Feel free to reach out through any of these channels.
						</p>

						<div className="space-y-4">
							{contacts.map((contact) => (
								<div key={contact.label} className="contact-item opacity-0 flex items-center gap-4">
									<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
										<contact.icon className="w-5 h-5 text-primary" />
									</div>
									<div>
										<p className="text-xs text-muted-foreground">{contact.label}</p>
										{contact.href ? (
											<Link
												href={contact.href}
												className="text-foreground hover:text-primary transition-colors"
											>
												{contact.value}
											</Link>
										) : (
											<p className="text-foreground">{contact.value}</p>
										)}
									</div>
								</div>
							))}
						</div>

						<div className="mt-8">
							<p className="text-sm text-muted-foreground mb-4">Connect with me</p>
							<div className="flex gap-3">
								{socials.map((social) => (
									<Link
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="social-link opacity-0 w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
									>
										<social.icon className="w-5 h-5" />
									</Link>
								))}
							</div>
						</div>
					</div>

					<div
						ref={rightColRef}
						className="p-6 rounded-lg border border-border bg-card opacity-0"
					>
						<h3 className="text-lg font-semibold text-foreground mb-2">
							Available for Work
						</h3>
						<p className="text-sm text-muted-foreground mb-6">
							Currently open to freelance projects and full-time opportunities. 
							Let's build something great together.
						</p>

						<div className="flex flex-wrap gap-2 mb-6">
							{["Remote", "Freelance", "Full-time", "Contract"].map((type) => (
								<span
									key={type}
									className="cta-tag text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
								>
									{type}
								</span>
							))}
						</div>

						<Link
							href="mailto:rafia9005@gmail.com"
							className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
						>
							<Mail className="w-4 h-4" />
							Send Message
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}