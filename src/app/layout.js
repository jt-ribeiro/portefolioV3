import { Inter, Outfit } from "next/font/google";
import "./globals.css";
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
    "Portfólio de Tomás Ribeiro, Fullstack Developer especializado em React, Next.js, Node.js e experiências digitais de alta performance.",
  keywords: ["fullstack developer", "react", "next.js", "portfólio", "tomás ribeiro"],
  openGraph: {
    title: "Tomás Ribeiro — Fullstack Developer",
    description: "Experiências digitais de ponta. Especializado em React, Next.js e Node.js.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
