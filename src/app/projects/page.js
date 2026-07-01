"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

// Static data (URLs, tech, colors) stays outside translations
const PROJECT_META = [
  { github: "https://github.com/jt-ribeiro/hand-voice-chrome-ext", demo: "", website: "", tech: ["TensorFlow.js", "Handpose", "Web Speech API", "Chrome APIs"], color: "#3b82f6", icon: "🧠" },
  { github: "https://github.com/jt-ribeiro/reservas-qr.git", demo: "", website: "", tech: ["Next.js", "Prisma", "PostgreSQL", "QR Code"], color: "#7c3aed", icon: "📱" },
  { github: "https://github.com/jt-ribeiro/RestaurantV2-app", demo: "/0210.mp4", website: "", tech: ["React", "PHP", "MySQL", "SCSS"], color: "#06b6d4", icon: "🍽️" },
  { github: "https://github.com/jt-ribeiro/websiteDentista.git", demo: "", website: "", tech: ["Next.js 14", "Framer Motion", "Lucide React", "Chatbot"], color: "#10b981", icon: "🦷" },
  { github: "https://github.com/jt-ribeiro/CryptoHub.git", demo: "", website: "", tech: ["HTML5", "Sass", "JavaScript", "Chart.js"], color: "#f59e0b", icon: "📊" },
  { github: "https://github.com/jt-ribeiro/goldylocks-pos-frontend", demo: "", website: "", tech: ["Vue.js", "PHP", "MySQL", "Jest"], color: "#ef4444", icon: "⚙️" },
  { github: "https://github.com/jt-ribeiro/barbosa-martins-advocacia", demo: "", website: "https://vercel.com/tomas-ribeiros-projects-2ec4a16d/barbosa-martins-advocacia", tech: ["React", "Sass", "Framer Motion", "Figma"], color: "#8b5cf6", icon: "⚖️" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          className={styles.pageHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.pageTag}>{p.tag}</span>
          <h1 className={styles.pageTitle}>
            {p.title} <span className={styles.accent}>{p.titleAccent}</span>
          </h1>
          <p className={styles.pageSubtitle}>{p.subtitle}</p>
        </motion.div>

        <motion.div className={styles.grid} variants={containerVariants} initial="hidden" animate="show">
          {p.items.map((item, i) => (
            <ProjectCard
              key={item.title}
              text={item}
              meta={PROJECT_META[i]}
              labels={p.labels}
              isSelected={selected === i}
              onSelect={() => setSelected(selected === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ text, meta, labels, isSelected, onSelect }) {
  return (
    <motion.article
      className={`${styles.card} ${isSelected ? styles.cardOpen : ""}`}
      variants={cardVariants}
      style={{ "--card-color": meta.color }}
      whileHover={{ y: isSelected ? 0 : -5 }}
      transition={{ duration: 0.25 }}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect()}
      aria-expanded={isSelected}
    >
      <div className={styles.cardTop}>
        <span className={styles.cardIcon}>{meta.icon}</span>
        <div className={styles.cardMeta}>
          <h2 className={styles.cardTitle}>{text.title}</h2>
          <p className={styles.cardShort}>{text.short}</p>
        </div>
        <motion.div
          className={styles.chevron}
          animate={{ rotate: isSelected ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.div>
      </div>

      <div className={styles.highlight}>
        <span className={styles.highlightDot} />
        {text.highlight}
      </div>

      <AnimatePresence initial={false}>
        {isSelected && (
          <motion.div
            className={styles.cardBody}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className={styles.cardBodyInner}>
              <p className={styles.cardDesc}>{text.desc}</p>
              <div className={styles.techList}>
                {meta.tech.map((t) => (
                  <span key={t} className={styles.techBadge}>{t}</span>
                ))}
              </div>
              <div className={styles.cardLinks} onClick={(e) => e.stopPropagation()}>
                {meta.github && (
                  <a href={meta.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    {labels.github}
                  </a>
                )}
                {meta.website && (
                  <a href={meta.website} target="_blank" rel="noreferrer" className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    {labels.website}
                  </a>
                )}
                {meta.demo && (
                  <a href={meta.demo} target="_blank" rel="noreferrer" className={`${styles.linkBtn} ${styles.linkBtnDemo}`}>
                    ▶ {labels.demo}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
