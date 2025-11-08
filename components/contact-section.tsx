"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, MapPin, Phone, Globe } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rafia9005@gmail.com",
      href: "mailto:rafia9005@gmail.com",
      description: "Send me an email",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 821-4333-8737",
      href: "tel:+6282143338737",
      description: "Call or WhatsApp",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Malang, East Java",
      href: null,
      description: "Indonesia",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rafia9005",
      href: "https://github.com/rafia9005",
      description: "Check out my repositories",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rafia9005",
      href: "https://linkedin.com/in/rafia9005",
      description: "Connect professionally",
    },
    {
      icon: Globe,
      label: "Portfolio",
      value: "ahmadrafi.tech",
      href: "https://ahmadrafi.teh",
      description: "Visit my website",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rafia9005",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/rafia9005",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/rafia9005",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rafia9005@gmail.com",
    },
  ];

  return (
    <section id="contact" className="w-full py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of these channels!
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {info.href ? (
                  <Link
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-3 p-5 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 group h-full"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          {info.label}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors text-sm mb-1">
                        {info.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className="flex flex-col gap-3 p-5 rounded-lg border border-border bg-card h-full">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          {info.label}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm mb-1">
                        {info.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="pt-8 text-center"
          >
            <div className="p-6 rounded-lg border border-border bg-card/50">
              <h4 className="text-sm font-medium text-foreground mb-2">
                Available for Work
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Currently open to freelance projects and full-time opportunities. Let's build something amazing together!
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                  Remote Work
                </span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                  Freelance
                </span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                  Full-time
                </span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                  Contract
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="pt-4 text-center"
          >
            <h4 className="text-sm font-medium text-muted-foreground mb-4">
              Connect on Social Media
            </h4>
            <div className="flex gap-3 justify-center">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border bg-card hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
