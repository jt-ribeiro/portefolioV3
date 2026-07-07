"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

const EMAIL = "tomasribeiro930@gmail.com";
const GITHUB = "https://github.com/jt-ribeiro";
const LINKEDIN = "https://www.linkedin.com/in/tomás-ribeiro-4a0a9b390";

const METHOD_ICONS = [
  // Email
  <svg key="email" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>,
  // LinkedIn
  <svg key="linkedin" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>,
  // GitHub
  <svg key="github" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>,
];

const METHOD_COLORS = ["#3b82f6", "#0077b5", "#6e40c9"];
const METHOD_HREFS = [`mailto:${EMAIL}`, LINKEDIN, GITHUB];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();
  const c = t.contact;

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${c.form.subjectPrefix} ${formState.name}`);
    const body = encodeURIComponent(`${c.form.name}: ${formState.name}\n${c.form.email}: ${formState.email}\n\n${formState.message}`);
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`);
    setSent(true);
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.pageHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.pageTag}>{c.tag}</span>
          <h1 className={styles.pageTitle}>
            {c.title} <span className={styles.accent}>{c.titleAccent}</span>
          </h1>
          <p className={styles.pageSubtitle}>{c.subtitle}</p>
        </motion.div>

        <div className={styles.grid}>
          {/* Contact Methods */}
          <motion.div
            className={styles.methods}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>{c.methodsTitle}</h2>

            {c.methods.map(({ label, value, desc }, i) => (
              <a
                key={label}
                href={METHOD_HREFS[i]}
                target={METHOD_HREFS[i].startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={styles.methodCard}
                style={{ "--method-color": METHOD_COLORS[i] }}
              >
                <span className={styles.methodIcon}>{METHOD_ICONS[i]}</span>
                <div className={styles.methodInfo}>
                  <span className={styles.methodLabel}>{label}</span>
                  <span className={styles.methodValue}>{value}</span>
                  <span className={styles.methodDesc}>{desc}</span>
                </div>
                <svg className={styles.methodArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}

            {/* Quick copy */}
            <div className={styles.copyRow}>
              <code className={styles.emailCode}>{EMAIL}</code>
              <button
                className={`${styles.copyBtn} ${copied ? styles.copyBtnSuccess : ""}`}
                onClick={handleCopy}
                aria-label="Copiar email"
                id="copy-email-btn"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>✓</motion.span>
                  ) : (
                    <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className={styles.formWrapper}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  className={styles.form}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  id="contact-form"
                >
                  <h2 className={styles.sectionTitle}>{c.formTitle}</h2>

                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>{c.form.name}</label>
                    <input
                      id="name" type="text" required
                      placeholder={c.form.namePlaceholder}
                      className={styles.input}
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>{c.form.email}</label>
                    <input
                      id="email" type="email" required
                      placeholder={c.form.emailPlaceholder}
                      className={styles.input}
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>{c.form.message}</label>
                    <textarea
                      id="message" rows={5} required
                      placeholder={c.form.messagePlaceholder}
                      className={styles.textarea}
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    {c.form.submit}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className={styles.success}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className={styles.successIcon}>🚀</span>
                  <h3>{c.success.title}</h3>
                  <p>{c.success.message}</p>
                  <button onClick={() => setSent(false)} className={styles.resetBtn}>
                    {c.success.reset}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
