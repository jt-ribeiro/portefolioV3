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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav} ref={menuRef}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Tomás Ribeiro - Home">
          <span className={styles.logoMark}>TR</span>
          <span className={styles.logoText}>Tomás Ribeiro</span>
        </Link>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {t.header.nav.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${pathname === href ? styles.active : ""}`}
              >
                {label}
                {pathname === href && (
                  <motion.span
                    className={styles.activeDot}
                    layoutId="nav-indicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className={styles.actions}>
          {/* Language Toggle */}
          <button
            className={styles.langToggle}
            onClick={toggle}
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
            id="lang-toggle-btn"
          >
            <motion.span
              key={lang}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className={styles.langLabel}
            >
              {lang === "pt" ? "🇵🇹 PT" : "🇬🇧 EN"}
            </motion.span>
            <span className={styles.langSep}>|</span>
            <span className={styles.langOther}>
              {lang === "pt" ? "EN" : "PT"}
            </span>
          </button>

          {/* CV Button */}
          <a
            href="/Tomas_Ribeiro_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            {t.header.cv}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          id="mobile-menu-button"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              id="mobile-menu"
            >
              {t.header.nav.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={href}
                    className={`${styles.mobileLink} ${pathname === href ? styles.mobileLinkActive : ""}`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              {/* Language toggle in mobile menu */}
              <div className={styles.mobileLangRow}>
                <button
                  className={styles.mobileLangBtn}
                  onClick={toggle}
                  id="mobile-lang-toggle-btn"
                >
                  {lang === "pt" ? "🇬🇧 Switch to English" : "🇵🇹 Mudar para Português"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
