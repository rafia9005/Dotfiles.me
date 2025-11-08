import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PageTransition from "@/components/page-transition";

export const metadata: Metadata = {
  title: "Ahmad Rafi'i | Full Stack Developer",
  description:
    "Full Stack Developer with 2 years of experience building modern, scalable web applications. Passionate about Linux, open-source, and creating impactful solutions.",
  keywords: [
    "Ahmad Rafi'i",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Go",
    "Linux",
    "Arch Linux",
    "TeraRush",
    "Malang",
    "Indonesia",
  ],
  authors: [{ name: "Ahmad Rafi'i", url: "https://github.com/rafia9005" }],
  creator: "Ahmad Rafi'i",
  publisher: "Ahmad Rafi'i",
  verification: {
    google: "28JnRXZJu_QndcQC_D1rpDYrWUgOq9k2KpM0mCNqEZA",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dotfiles.me",
    title: "Ahmad Rafi'i | Full Stack Developer",
    description:
      "Full Stack Developer with 2 years of experience. Linux enthusiast and open-source contributor.",
    siteName: "Ahmad Rafi'i Portfolio",
    images: [
      {
        url: "https://ahmadrafi.tech/thumnail.png",
        width: 1200,
        height: 630,
        alt: "Ahmad Rafi'i - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Rafi'i | Full Stack Developer",
    description:
      "Full Stack Developer with 2 years of experience. Linux enthusiast and open-source contributor.",
    creator: "@rafia9005",
    images: ["https://ahmadrafi.tech/thumnail.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://ahmadrafi.tech/avatar.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
