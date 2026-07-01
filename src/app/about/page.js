"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.pageHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.pageTag}>{a.tag}</span>
          <h1 className={styles.pageTitle}>
            {a.title} <span className={styles.accent}>{a.titleAccent}</span>
          </h1>
          <p className={styles.pageSubtitle}>{a.subtitle}</p>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          className={styles.bioCard}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className={styles.bioAvatar}>
            <span className={styles.avatarInitials}>TR</span>
            <div className={styles.avatarGlow} />
          </div>
          <div className={styles.bioText}>
            <h2 className={styles.bioName}>
              {a.bioName} <span className={styles.bioAge}>{a.bioAge}</span>
            </h2>
            <p className={styles.bioParagraph}>{a.bioParagraph1}</p>
            <p className={styles.bioParagraph}>{a.bioParagraph2}</p>
            <a href="mailto:tomasribeiro930@gmail.com" className={styles.contactLink}>
              {a.contactCta}
            </a>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className={styles.bentoGrid}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {a.highlights.map(({ emoji, title, value, sub }) => (
            <motion.div key={title} className={styles.bentoCard} variants={fadeUp}>
              <span className={styles.bentoEmoji}>{emoji}</span>
              <span className={styles.bentoTitle}>{title}</span>
              <p className={styles.bentoValue}>{value}</p>
              <p className={styles.bentoSub}>{sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          className={styles.values}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 className={styles.sectionTitle} variants={fadeUp}>
            {a.valuesTitle}
          </motion.h2>
          <div className={styles.valuesGrid}>
            {a.values.map(({ icon, title, desc }) => (
              <motion.div key={title} className={styles.valueCard} variants={fadeUp}>
                <span className={styles.valueIcon}>{icon}</span>
                <h3 className={styles.valueTitle}>{title}</h3>
                <p className={styles.valueDesc}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
