import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterTop from "@/components/FooterTop";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NMBS",
  description: "Noorder Multidiensten Bouw en Schoonmaak",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="lg:px-32 xl:px-56 px-2 w-full flex flex-col justify-between">
          <Toaster />
          <Navbar />
          {children}
        </div>
        <FooterTop />
        <Footer />
      </body>
    </html>
  );
}
