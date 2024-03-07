import type { Metadata } from "next";
import "./globals.css";
import { outfit } from "./fonts";

export const metadata: Metadata = {
  title: "Frontend Mentor | Recipe page",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-neutral-eggshell`}>
        {children}
      </body>
    </html>
  );
}
