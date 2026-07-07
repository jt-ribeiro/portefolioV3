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
    "Portfólio de Tomás Ribeiro — fullstack developer em Viana do Castelo. React, Next.js, Node.js e muito mais.",
  keywords: ["fullstack developer", "react", "next.js", "portfólio", "tomás ribeiro", "viana do castelo"],
  openGraph: {
    title: "Tomás Ribeiro — Fullstack Developer",
    description: "Construo produtos digitais rápidos e focados no utilizador.",
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
