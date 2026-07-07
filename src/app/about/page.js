"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section className={styles.about}>
      <div className={styles.container}>

        {/* Section label */}
        <motion.div className={styles.sectionLabel} {...fadeUp(0)}>
          <span className={styles.labelLine} />
          <span>{a.tag}</span>
        </motion.div>

        {/* Two-column layout */}
        <div className={styles.grid}>
          {/* Left: facts */}
          <motion.aside className={styles.sidebar} {...fadeUp(0.1)}>
            <div className={styles.initials}>TR</div>

            <div className={styles.factList}>
              {a.highlights.map(({ emoji, title, value, sub }) => (
                <div key={title} className={styles.fact}>
                  <span className={styles.factEmoji}>{emoji}</span>
                  <div>
                    <span className={styles.factLabel}>{title}</span>
                    <p className={styles.factValue}>{value}</p>
                    {sub && <p className={styles.factSub}>{sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            <a href="mailto:tomasribeiro930@gmail.com" className={styles.emailLink}>
              {a.contactCta}
            </a>
          </motion.aside>

          {/* Right: bio */}
          <div className={styles.content}>
            <motion.h1 className={styles.title} {...fadeUp(0.15)}>
              {a.title} <span className={styles.accent}>{a.titleAccent}</span>
            </motion.h1>

            <motion.p className={styles.lead} {...fadeUp(0.25)}>
              {a.bioParagraph1}
            </motion.p>

            <motion.p className={styles.body} {...fadeUp(0.35)}>
              {a.bioParagraph2}
            </motion.p>

            {/* How I work */}
            <motion.div className={styles.valuesSection} {...fadeUp(0.45)}>
              <h2 className={styles.valuesTitle}>{a.valuesTitle}</h2>
              <div className={styles.valuesList}>
                {a.values.map(({ icon, title, desc }) => (
                  <div key={title} className={styles.valueItem}>
                    <span className={styles.valueIcon}>{icon}</span>
                    <div>
                      <h3 className={styles.valueItemTitle}>{title}</h3>
                      <p className={styles.valueItemDesc}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
