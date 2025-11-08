"use client"

import { motion } from "framer-motion"
import { Code2, Rocket, GraduationCap, Briefcase } from "lucide-react"

export function AboutSection() {
    const skills = [
        { category: "Languages", items: ["Go", "TypeScript", "Python", "JavaScript", "PHP"] },
        { category: "Frontend", items: ["Next.js", "React", "Vue.js", "Svelte", "TailwindCSS"] },
        { category: "Backend", items: ["NestJS", "Go Fiber", "Laravel", "Express", "Hono"] },
        { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Supabase"] },
        { category: "Tools", items: ["Docker", "Git", "Linux", "Vim", "Jenkins"] },
    ]

    const highlights = [
        {
            icon: Briefcase,
            title: "Professional Experience",
            description: "2+ years building scalable web applications for various clients and companies.",
        },
        {
            icon: Code2,
            title: "Tech Stack",
            description: "Proficient in modern frameworks and cloud technologies across full stack development.",
        },
        {
            icon: GraduationCap,
            title: "Continuous Learning",
            description: "Currently studying Computer and Network Engineering at SMK Negeri 6 Malang.",
        },
        {
            icon: Rocket,
            title: "Project Delivery",
            description: "Successfully delivered numerous projects from concept to production deployment.",
        },
    ]

    return (
        <section className="w-full py-16 px-6">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-3">
                        About Me
                    </h2>
                    <p className="text-muted-foreground">
                        Passionate developer focused on creating impactful solutions
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 p-6 rounded-lg border border-border bg-card"
                >
                    <div className="space-y-4 text-foreground">
                        <p className="leading-relaxed">
                            Hi, I'm <span className="font-semibold text-primary">Ahmad Rafi'i</span>, a dedicated Full Stack Developer
                            with <span className="font-semibold">2 years of experience</span> building modern, scalable, and responsive
                            web applications. My journey in web development began with a strong enthusiasm for solving real-world problems
                            using technology, and since then, I have consistently expanded my expertise across both frontend and backend stacks.
                        </p>
                        <p className="leading-relaxed">
                            Currently working at <span className="font-semibold">TeraRush</span>, where I develop and deploy scalable digital
                            solutions for clients, leveraging modern frameworks and cloud technologies. I collaborate with cross-functional teams
                            to deliver secure, high-performance web platforms and microservices, while leading technical initiatives focused on
                            infrastructure optimization.
                        </p>
                        <p className="leading-relaxed">
                            Beyond my professional work, I'm actively pursuing my studies in <span className="font-semibold">Computer and Network
                                Engineering</span> at SMK Negeri 6 Malang (2023-2026), where I'm gaining practical skills and industry-relevant
                            knowledge. I also provide freelance web development services, helping various clients bring their ideas to life
                            with tailored solutions.
                        </p>
                        <p className="leading-relaxed">
                            I'm an <span className="font-semibold text-primary">Linux enthusiast</span> 🐧 and daily driver of{" "}
                            <span className="font-mono text-sm bg-muted px-2 py-0.5 rounded">Arch Linux</span>, where I customize my entire
                            workflow with tools like <span className="font-mono text-sm">i3wm</span>, <span className="font-mono text-sm">Neovim</span>,
                            and <span className="font-mono text-sm">tmux</span>. I believe in the power of open-source software and the philosophy
                            of having complete control over my development environment. My dotfiles are meticulously crafted to maximize productivity
                            and aesthetic appeal.
                        </p>
                        <p className="leading-relaxed">
                            I'm based in <span className="font-semibold">Malang, East Java, Indonesia</span> 🇮🇩, and I'm passionate about
                            continuous learning, staying up-to-date with the latest technologies, and contributing to the developer community.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-12"
                >
                    <a href="https://github.com/rafia9005/config" target="_blank" rel="noopener noreferrer">
                        <h3 className="text-2xl font-bold text-foreground mb-4">My Setup</h3>
                        <div className="relative rounded-lg overflow-hidden border border-border bg-card group">
                            <img
                                src="/desktop.png"
                                alt="My Linux Desktop Setup"
                                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                <p className="text-foreground font-semibold text-lg">Arch Linux + BSPWM</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm mt-3 text-center">
                            My customized Arch Linux setup with BSPWM, Neovim, and custom dotfiles
                        </p>

                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            className="p-6 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Skills Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-bold text-foreground mb-6">Tech Stack</h3>
                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.category}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="sm:w-32 flex-shrink-0">
                                        <h4 className="font-mono text-sm font-semibold text-primary">
                                            {skill.category}
                                        </h4>
                                    </div>
                                    <div className="flex-1 flex flex-wrap gap-2">
                                        {skill.items.map((item, i) => (
                                            <motion.span
                                                key={item}
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: (index * 0.1) + (i * 0.05), type: "spring" }}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-secondary-foreground border border-border hover:border-primary/50 transition-colors cursor-default"
                                            >
                                                {item}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-8 rounded-lg border border-border bg-gradient-to-br from-primary/5 to-accent/5 text-center"
                >
                    <h3 className="text-xl font-bold text-foreground mb-3">
                        Let's Work Together
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <motion.a
                            href="mailto:rafia9005@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-mono text-sm hover:opacity-90 transition-opacity"
                        >
                            Get in Touch
                        </motion.a>
                        <motion.a
                            href="https://github.com/rafia9005"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 rounded-full border border-border bg-background font-mono text-sm hover:bg-accent transition-colors"
                        >
                            View GitHub
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
