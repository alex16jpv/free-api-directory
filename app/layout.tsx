import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free API Directory",
  description: "A directory of free APIs for web projects",
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
