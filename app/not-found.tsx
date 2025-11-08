"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Home, ArrowLeft, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="w-full max-w-3xl">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="rounded-lg border border-border bg-card shadow-2xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm font-mono text-muted-foreground">
                ahmadrafi01@localhost: ~/404
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12 font-mono text-sm">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Terminal className="w-4 h-4" />
                <span className="font-bold">[rafii@rafii-nitroan51543 ~]#</span>
                <span className="text-muted-foreground">in</span>
                <span className="text-blue-500">~/portfolio</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">$</span>
                <span>cd /page-not-found</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 space-y-3"
            >
              <div className="flex items-start gap-3">
                <FileQuestion className="w-8 h-8 text-red-500 mt-1" />
                <div>
                  <p className="text-red-500 font-bold text-2xl mb-2">
                    bash: cd: /page-not-found: No such file or directory
                  </p>
                  <p className="text-muted-foreground">
                    Error 404: The page you're looking for doesn't exist
                  </p>
                </div>
              </div>

              <div className="mt-6 pl-11 space-y-1 text-muted-foreground">
                <p>
                  <span className="text-yellow-500">[WARN]</span> The requested
                  path could not be found in the file system
                </p>
                <p>
                  <span className="text-blue-500">[INFO]</span> You might have
                  followed a broken link or mistyped the URL
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 p-4 rounded-lg bg-muted/50 border border-border"
            >
              <p className="text-foreground mb-3 font-bold">
                $ cat available_commands.txt
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="text-green-500">→</span> ls /home - Navigate
                  to homepage
                </p>
                <p>
                  <span className="text-green-500">→</span> cd /blog - Browse
                  articles
                </p>
                <p>
                  <span className="text-green-500">→</span> cat /projects -
                  View my work
                </p>
                <p>
                  <span className="text-green-500">→</span> cd .. - Go back to
                  previous page
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/">
                <Button className="gap-2 font-mono">
                  <Home className="w-4 h-4" />
                  cd ~/home
                </Button>
              </Link>
              <Button
                variant="outline"
                className="gap-2 font-mono"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4" />
                cd ..
              </Button>
              <Link href="/blog">
                <Button variant="outline" className="gap-2 font-mono">
                  <Terminal className="w-4 h-4" />
                  cd ~/blog
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mt-6 flex items-center gap-2"
            >
              <span className="text-primary">$</span>
              <span className="text-muted-foreground">_</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center text-sm text-muted-foreground font-mono"
        >
          Process exited with code 404 • Press any key to continue
        </motion.p>
      </div>
    </div>
  );
}
