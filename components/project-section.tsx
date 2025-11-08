"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import Image from "next/image";

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
  updated_at: string;
}

export function ProjectSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const staticProjects: GitHubRepo[] = [
      {
        id: 1,
        name: "wa-gateway",
        description: "This project provides an API gateway to send messages and media to WhatsApp using whatsapp-web.js. It allows users to interact with WhatsApp through a RESTful interface, enabling the sending of text and media.",
        html_url: "https://github.com/terarush/wa-gateway",
        homepage: null,
        stargazers_count: 3,
        forks_count: 4,
        language: "TypeScript",
        topics: ["whatsapp", "api", "gateway"],
        updated_at: new Date().toISOString(),
      },
      {
        id: 2,
        name: "go-auth-service",
        description: "A Go-based authentication service that supports login and registration with email, as well as OAuth integration with Google and GitHub. The service is built with Docker and Docker Compose for easy deployment.",
        html_url: "https://github.com/rafia9005/go-auth-service",
        homepage: null,
        stargazers_count: 1,
        forks_count: 0,
        language: "Go",
        topics: ["auth", "oauth", "golang"],
        updated_at: new Date().toISOString(),
      },
      {
        id: 3,
        name: "ComicHive",
        description: "ComicHive is an open-source platform for reading manga, manhwa, and watching anime without ads. Discover thousands of your favorite titles and enjoy a comfortable and interactive reading experience!",
        html_url: "https://github.com/terarush/ComicHive",
        homepage: null,
        stargazers_count: 9,
        forks_count: 12,
        language: "Svelte",
        topics: ["manga", "anime", "comics"],
        updated_at: new Date().toISOString(),
      },
      {
        id: 4,
        name: "config",
        description: "This repository contains my personal configuration files (dotfiles) for various tools and environments. These dotfiles are designed to set up a productive and visually appealing development environment.",
        html_url: "https://github.com/rafia9005/config",
        homepage: null,
        stargazers_count: 0,
        forks_count: 0,
        language: "CSS",
        topics: ["dotfiles", "config", "linux"],
        updated_at: new Date().toISOString(),
      },
      {
        id: 5,
        name: "Dotfiles.me",
        description: "My portfolio website built with Next.js, TypeScript, and TailwindCSS. Showcasing my projects, skills, and experience as a Full Stack Developer.",
        html_url: "https://github.com/rafia9005/Dotfiles.me",
        homepage: "https://ahmadrafi.tech",
        stargazers_count: 0,
        forks_count: 0,
        language: "TypeScript",
        topics: ["portfolio", "nextjs", "react"],
        updated_at: new Date().toISOString(),
      },
    ];

    setTimeout(() => {
      setRepos(staticProjects);
      setLoading(false);
    }, 500);
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-400",
      Python: "bg-blue-500",
      Go: "bg-cyan-400",
      Java: "bg-orange-500",
      PHP: "bg-purple-400",
      Vue: "bg-green-400",
      HTML: "bg-orange-400",
      CSS: "bg-blue-300",
    };
    return colors[language] || "bg-gray-400";
  };

  return (
    <section className="w-full py-16 px-6" id="projects">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Latest Projects
          </h2>
          <p className="text-muted-foreground">
            My most recent work and contributions
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-64 rounded-lg border border-border bg-card animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative h-full"
              >
                <div className="h-full p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Github className="w-5 h-5 text-muted-foreground" />
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {repo.name}
                      </h3>
                    </div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                    {repo.description || "No description available"}
                  </p>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground font-mono"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      {repo.language && (
                        <div className="flex items-center gap-1">
                          <span
                            className={`w-3 h-3 rounded-full ${getLanguageColor(
                              repo.language
                            )}`}
                          />
                          <span className="text-xs">{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span className="text-xs">{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        <span className="text-xs">{repo.forks_count}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/rafia9005?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-all duration-300 font-medium"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
