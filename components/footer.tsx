"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const links = [
		{ label: "Home", href: "/" },
		{ label: "About", href: "/#about" },
		{ label: "Projects", href: "/#projects" },
		{ label: "Blog", href: "/blog" },
		{ label: "Contact", href: "/#contact" },
	];

	const socials = [
		{ icon: Github, href: "https://github.com/rafia9005", label: "GitHub" },
		{
			icon: Linkedin,
			href: "https://linkedin.com/in/rafia9005",
			label: "LinkedIn",
		},
		{ icon: Mail, href: "mailto:rafia9005@gmail.com", label: "Email" },
	];

	return (
		<footer className="border-t border-border">
			<div className="max-w-6xl mx-auto px-6 py-12">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					{/* Logo & Copyright */}
					<div className="text-center md:text-left">
						<Link
							href="/"
							className="text-lg font-bold text-foreground"
						>
							ahmadrafi01<span className="text-primary">._</span>
						</Link>
						<p className="text-sm text-muted-foreground mt-2">
							© {currentYear} Ahmad Rafi'i. All rights reserved.
						</p>
					</div>

					{/* Links */}
					<div className="flex flex-wrap justify-center gap-6">
						{links.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Socials */}
					<div className="flex gap-4">
						{socials.map((social) => (
							<Link
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors"
								aria-label={social.label}
							>
								<social.icon className="w-5 h-5" />
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
