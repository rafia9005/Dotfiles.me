"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./theme-button";
import gsap from "gsap";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const navRef = useRef<HTMLElement>(null);

	const menuItems = [
		{ label: "Home", href: "/" },
		{ label: "About", href: "/#about" },
		{ label: "Projects", href: "/#projects" },
		{ label: "Blog", href: "/blog" },
		{ label: "Contact", href: "/#contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (navRef.current) {
			gsap.fromTo(
				navRef.current,
				{ y: -100, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
			);
		}
	}, []);

	return (
		<>
			<div
				className={`fixed z-50 w-full flex justify-center px-4 transition-all duration-300 ${
					scrolled ? "top-4" : "top-6"
				}`}
			>
				<nav
					ref={navRef}
					className="w-full max-w-4xl"
				>
					<div
						className={`relative rounded-lg border transition-all duration-300 ${
							scrolled
								? "bg-background/70 backdrop-blur-xl border-border/50 shadow-lg shadow-black/5"
								: "bg-background/50 backdrop-blur-md border-border/30"
						}`}
					>
					<div className="px-6 py-3">
						<div className="flex items-center justify-between relative">
							{/* Logo */}
							<Link
								href="/"
								className="text-lg font-bold text-foreground hover:text-primary transition-colors"
							>
								ahmadrafi01<span className="text-primary">._</span>
							</Link>

							{/* Desktop Menu - Centered */}
							<div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
								{menuItems.map((item) => (
									<Link
										key={item.label}
										href={item.href}
										className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all"
									>
										{item.label}
									</Link>
								))}
							</div>

							{/* Actions */}
							<div className="flex items-center gap-2">
								<ModeToggle />
								<Link
									href="https://github.com/rafia9005"
									target="_blank"
									rel="noopener noreferrer"
									className="hidden md:inline-flex px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
								>
									GitHub
								</Link>

									{/* Mobile Menu Button */}
									<div className="md:hidden">
										<button
											onClick={() => setIsOpen(!isOpen)}
											className="p-2 text-foreground hover:bg-muted/50 rounded-xl transition-colors"
										>
											{isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
										</button>
									</div>
								</div>
							</div>
						</div>

						{/* Mobile Menu Dropdown */}
					<AnimatePresence>
						{isOpen && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
								transition={{ duration: 0.2 }}
								className="md:hidden overflow-hidden border-t border-border/30"
							>
								<div className="px-4 py-4 space-y-1">
									{menuItems.map((item) => (
										<Link
											key={item.label}
											href={item.href}
											className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/50 rounded-xl transition-colors"
											onClick={() => setIsOpen(false)}
										>
											{item.label}
										</Link>
									))}
									<div className="pt-2">
										<Link
											href="https://github.com/rafia9005"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
											onClick={() => setIsOpen(false)}
										>
											View on GitHub
										</Link>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</nav>
		</div>

			{/* Mobile overlay */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40 md:hidden"
						onClick={() => setIsOpen(false)}
					/>
				)}
			</AnimatePresence>
		</>
	);
}
