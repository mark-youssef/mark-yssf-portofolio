import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mark Youssef | Software Engineer",
  description:
    "Mark Youssef is a software engineer/developer that is passionate about frontend and animations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      />
    </html>
  );
}
