import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Tomás Ribeiro — Fullstack Developer",
  description:
    "Portfolio of Tomás Ribeiro, a Fullstack Developer specialized in React, Next.js, Node.js and high-performance digital experiences.",
  keywords: ["fullstack developer", "react", "next.js", "portfolio", "tomás ribeiro"],
  openGraph: {
    title: "Tomás Ribeiro — Fullstack Developer",
    description: "High-performance digital experiences. Specialized in React, Next.js and Node.js.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
