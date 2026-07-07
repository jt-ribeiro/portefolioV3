"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { lang, toggle, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`} ref={menuRef}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Tomás Ribeiro">
          <span className={styles.logoText}>tr<span className={styles.logoDot}>.</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Navegação principal">
          {t.header.nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.navLink} ${pathname === href ? styles.navLinkActive : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className={styles.right}>
          <button
            className={styles.langBtn}
            onClick={toggle}
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
            id="lang-toggle-btn"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>

          <a
            href="/Tomas_Ribeiro_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvBtn}
          >
            {t.header.cv}
          </a>

          {/* Burger */}
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            id="mobile-menu-button"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            id="mobile-menu"
          >
            <div className={styles.mobileInner}>
              {t.header.nav.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${styles.mobileLink} ${pathname === href ? styles.mobileLinkActive : ""}`}
                >
                  {label}
                </Link>
              ))}
              <button className={styles.mobileLangBtn} onClick={toggle} id="mobile-lang-toggle-btn">
                {lang === "pt" ? "🇬🇧 Switch to English" : "🇵🇹 Mudar para Português"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
