import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Counter from "@/components/Counter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mi proyecto personal",
  description: "Bel <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <Counter />
        {children}
        <Footer />
      </body>
    </html>
  );
}
