import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PO.GG, The Best League of Legends Stats Site",
  description: "PO.GG gathers and analyzes millions of League of Legends matches every week to give you the best insights on how to play and win.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
