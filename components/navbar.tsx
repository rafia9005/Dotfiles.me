"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./theme-button"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { label: "home", href: "/" },
        { label: "about", href: "#about" },
        { label: "projects", href: "#" },
        { label: "docs", href: "#" },
        { label: "contact", href: "#" },
    ]

    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 md:w-auto w-[calc(100%-2rem)]"
            >
                <div className="bg-background/80 backdrop-blur-xl border border-border rounded-md px-6 py-3 shadow-lg">
                    <div className="flex items-center justify-between gap-8">
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-mono text-sm font-bold text-primary whitespace-nowrap"
                        >
                            <Terminal className="w-4 h-4" />
                            ahmadrafi01._
                        </Link>

                        <div className="hidden md:flex items-center gap-6">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-2">
                            <ModeToggle />
                            <Button variant="ghost" size="sm" className="font-mono text-xs h-8 rounded-full">
                                linkedin
                            </Button>
                            <Button size="sm" className="font-mono text-xs h-8 rounded-full">
                                github
                            </Button>
                        </div>

                        <div className="flex md:hidden items-center gap-2">
                            <ModeToggle />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(!isOpen)}
                                className="h-8 w-8"
                            >
                                {isOpen ? <X size={16} /> : <Menu size={16} />}
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed top-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm z-50 md:hidden"
                        >
                            <div className="bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-xl">
                                <div className="space-y-1">
                                    {menuItems.map((item, index) => (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-4 py-2.5 rounded-lg font-mono text-sm text-foreground hover:bg-accent transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                                    <Button
                                        variant="ghost"
                                        className="flex-1 font-mono text-xs rounded-full"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        linkedin
                                    </Button>
                                    <Button
                                        className="flex-1 font-mono text-xs rounded-full"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        github
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
