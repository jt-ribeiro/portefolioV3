"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

const skillsData = [
  {
    categoryKey: "Frontend",
    icon: "🖥️",
    color: "#3b82f6",
    skills: [
      { name: "React & Next.js", level: 90, icon: "⚛️" },
      { name: "JavaScript ES6+", level: 90, icon: "🟨" },
      { name: "HTML5 / CSS3 / SCSS", level: 95, icon: "🌐" },
      { name: "Vue.js", level: 75, icon: "🟢" },
      { name: "React Native", level: 80, icon: "📱" },
      { name: "P5.js", level: 70, icon: "🎨" },
    ],
  },
  {
    categoryKey: "Backend",
    icon: "⚙️",
    color: "#7c3aed",
    skills: [
      { name: "Node.js & Express", level: 85, icon: "🟩" },
      { name: "PHP", level: 85, icon: "🐘" },
      { name: "REST APIs", level: 90, icon: "🔌" },
      { name: "Laravel", level: 55, icon: "🏗️" },
      { name: "TensorFlow.js", level: 75, icon: "🧠" },
      { name: "TypeScript (básico)", level: 50, icon: "🔷" },
    ],
  },
  {
    categoryKey: "Bases de Dados",
    icon: "🗄️",
    color: "#06b6d4",
    skills: [
      { name: "MySQL", level: 90, icon: "🗄️" },
      { name: "PostgreSQL", level: 85, icon: "🐘" },
      { name: "Firebase", level: 65, icon: "🔥" },
    ],
  },
  {
    categoryKey: "Mobile & Tools",
    icon: "📱",
    color: "#10b981",
    skills: [
      { name: "Ionic", level: 65, icon: "⚡" },
      { name: "Git & GitHub", level: 90, icon: "🔀" },
      { name: "SCRUM / MVC", level: 80, icon: "📋" },
      { name: "Figma", level: 75, icon: "🎨" },
      { name: "Claude & Cursor (AI Dev)", level: 90, icon: "🤖" },
    ],
  },
];


function SkillBar({ skill, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className={styles.skillItem} ref={ref}>
      <div className={styles.skillHeader}>
        <span className={styles.skillIcon}>{skill.icon}</span>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillPercent}>{skill.level}%</span>
      </div>
      <div className={styles.track}>
        <motion.div
          className={styles.fill}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.pageHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.pageTag}>{s.tag}</span>
          <h1 className={styles.pageTitle}>
            {s.title} <span className={styles.accent}>{s.titleAccent}</span>
          </h1>
          <p className={styles.pageSubtitle}>{s.subtitle}</p>
        </motion.div>

        <div className={styles.categoriesGrid}>
          {skillsData.map(({ categoryKey, icon, color, skills }, catIdx) => (
            <motion.div
              key={categoryKey}
              className={styles.categoryCard}
              style={{ "--cat-color": color }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: catIdx * 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{icon}</span>
                <h2 className={styles.categoryName}>{categoryKey}</h2>
              </div>
              <div className={styles.skillsList}>
                {skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    color={color}
                    delay={catIdx * 0.05 + i * 0.07}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.summary}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>{s.summary}</p>
        </motion.div>
      </div>
    </section>
  );
}
