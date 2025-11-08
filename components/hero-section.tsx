"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GitHubStats {
  public_repos: number
  followers: number
  created_at: string
}

export function HeroSection() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/rafia9005')
      .then(res => res.json())
      .then(data => {
        setStats(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching GitHub data:', err)
        setLoading(false)
      })
  }, [])

  const joinYear = stats?.created_at ? new Date(stats.created_at).getFullYear() : "...";

  return (
    <div className="w-full">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] w-full overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
      >
        <img src="/banner.gif" alt="Hero banner" className="h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      </motion.div>

      <div className="relative px-6 pb-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="-mt-16 flex-shrink-0"
            >
              <div className="h-32 w-32 rounded-full border-4 border-foreground">
                <img 
                  src="/avatar.jpeg" 
                  alt="Profile Avatar" 
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex-1 pb-2 pt-1"
            >
              <h1 className="text-3xl font-bold text-foreground">Ahmad Rafi'i</h1>
              <p className="mt-1 font-mono text-sm text-muted-foreground">@ahmadrafi01._</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 max-w-2xl"
          >
            <p className="text-base leading-relaxed text-foreground">
              💻 Full Stack Developer passionate about building modern, scalable web applications. 
              Specializing in Go, TypeScript, and cloud technologies ☁️. 
              Currently pursuing studies in Computer and Network Engineering 🎓.
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 flex gap-6 border-t border-border pt-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-sm text-muted-foreground">Projects</p>
              <p className="text-xl font-semibold text-foreground">
                {loading ? "..." : stats?.public_repos || "0"}
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-sm text-muted-foreground">Followers</p>
              <p className="text-xl font-semibold text-foreground">
                {loading ? "..." : stats?.followers || "0"}
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-sm text-muted-foreground">Joined</p>
              <p className="text-xl font-semibold text-foreground">{joinYear}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
