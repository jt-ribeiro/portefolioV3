"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

function useTypewriter(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;
    if (!isDeleting && display === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && display === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplay(isDeleting ? current.slice(0, display.length - 1) : current.slice(0, display.length + 1));
      }, isDeleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [display, isDeleting, wordIndex, words, speed, pause]);

  return display;
}

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;
  const role = useTypewriter(h.roles);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 179, 237, ${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <motion.div className={styles.content} variants={container} initial="hidden" animate="show">
        <motion.div className={styles.badge} variants={item}>
          <span className={styles.badgeDot} />
          {h.badge}
        </motion.div>

        <motion.h1 className={styles.title} variants={item}>
          {h.greeting}{" "}
          <span className={styles.gradientText}>{h.name}</span>
        </motion.h1>

        <motion.div className={styles.roleRow} variants={item}>
          <span className={styles.rolePrefix}>→ </span>
          <span className={styles.role}>{role}</span>
          <span className={styles.cursor}>|</span>
        </motion.div>

        <motion.p className={styles.description} variants={item}>
          {h.description}
        </motion.p>

        <motion.div className={styles.actions} variants={item}>
          <Link href="/projects" className={styles.btnPrimary}>
            {h.btnProjects}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            {h.btnContact}
          </Link>
        </motion.div>

        <motion.div className={styles.stats} variants={item}>
          {h.stats.map(({ num, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        aria-hidden="true"
      >
        <motion.div
          className={styles.scrollDot}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
