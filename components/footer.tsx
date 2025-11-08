"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/rafia9005",
      icon: Github,
    },
    {
      name: "Email",
      href: "mailto:rafia9005@gmail.com",
      icon: Mail,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/rafia9005",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/rafia9005",
      icon: Twitter,
    },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ahmad Rafi'i. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
