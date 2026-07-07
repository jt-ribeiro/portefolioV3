"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

function useTypewriter(words, speed = 75, pause = 2200) {
  const [display, setDisplay] = useState(words[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let t;
    if (!deleting && display === current) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display === "") {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(
        () => setDisplay(deleting ? current.slice(0, display.length - 1) : current.slice(0, display.length + 1)),
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(t);
  }, [display, deleting, wordIdx, words, speed, pause]);

  return display;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;
  const role = useTypewriter(h.roles);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* Name */}
        <motion.div className={styles.nameBlock} {...fadeUp(0.1)}>
          <span className={styles.greeting}>{h.greeting}</span>
          <h1 className={styles.name}>{h.name}<span className={styles.accent}>.</span></h1>
        </motion.div>

        {/* Role */}
        <motion.div className={styles.roleRow} {...fadeUp(0.25)}>
          <span className={styles.prompt}>→</span>
          <span className={styles.role}>{role}</span>
          <span className={styles.cursor} aria-hidden="true">_</span>
        </motion.div>

        {/* Description */}
        <motion.p className={styles.desc} {...fadeUp(0.4)}>
          {h.description}
        </motion.p>

        {/* CTAs */}
        <motion.div className={styles.ctas} {...fadeUp(0.55)}>
          <Link href="/projects" className={styles.btnPrimary}>{h.btnProjects}</Link>
          <Link href="/contact" className={styles.btnSecondary}>{h.btnContact}</Link>
        </motion.div>

        {/* Tech stack strip */}
        <motion.div className={styles.stackRow} {...fadeUp(0.7)}>
          {["React", "Next.js", "Node.js", "PostgreSQL", "TensorFlow.js"].map((tech, i) => (
            <span key={tech} className={styles.stackItem}>
              {tech}
              {i < 4 && <span className={styles.stackDot} aria-hidden="true">/</span>}
            </span>
          ))}
        </motion.div>

        {/* Stats — minimal, no cards */}
        <motion.div className={styles.stats} {...fadeUp(0.85)}>
          {h.stats.map(({ num, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Side tag */}
      <motion.div
        className={styles.sideTag}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-hidden="true"
      >
        <span>Viana do Castelo · Portugal</span>
      </motion.div>
    </section>
  );
}
