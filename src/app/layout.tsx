
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Developer Portfolio | Software Developer",
    template: "%s | Developer Portfolio",
  },
  description:
    "Explore my software development portfolio, featuring web-based applications, technical skills, education, and professional experience.",
  keywords: [
    "Software Developer",
    "Web Developer",
    "Full-Stack Developer",
    "PHP Developer",
    "Laravel Developer",
    "JavaScript",
    "MySQL",
    "Next.js",
    "Software Development Portfolio",
  ],
  authors: [{ name: "Portfolio Owner" }],
  openGraph: {
    title: "Developer Portfolio | Software Developer",
    description:
      "Explore my software development projects, technical skills, and professional background.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
