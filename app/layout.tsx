import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POC-27 · Heat Stress & Occupational Health Risk Monitor",
  description: "Gulf Healthcare Real Rails Intelligence Library — POC-27",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
