"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./page.module.css";

const skillsData = [
  {
    category: "Frontend",
    icon: "🖥️",
    color: "#3b82f6",
    skills: [
      { name: "React & Next.js", level: 95, icon: "⚛️" },
      { name: "JavaScript ES6+", level: 90, icon: "🟨" },
      { name: "HTML5 / CSS3 / SCSS", level: 100, icon: "🌐" },
      { name: "React Native", level: 85, icon: "📱" },
      { name: "Vue.js", level: 70, icon: "🟢" },
      { name: "Ionic", level: 65, icon: "🔌" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#7c3aed",
    skills: [
      { name: "Node.js & APIs REST", level: 90, icon: "🟩" },
      { name: "PHP", level: 90, icon: "🐘" },
      { name: "AI / TensorFlow.js", level: 85, icon: "🧠" },
      { name: "C / C++", level: 75, icon: "⚙️" },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "#06b6d4",
    skills: [
      { name: "PostgreSQL / MySQL", level: 90, icon: "🗄️" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "Prisma ORM", level: 85, icon: "🔷" },
    ],
  },
  {
    category: "Tools & Design",
    icon: "🎨",
    color: "#10b981",
    skills: [
      { name: "Git & GitHub", level: 92, icon: "🔀" },
      { name: "Figma / UI Design", level: 85, icon: "🎨" },
      { name: "Framer Motion", level: 90, icon: "✨" },
      { name: "Docker", level: 65, icon: "🐳" },
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
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.pageHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.pageTag}>./skills</span>
          <h1 className={styles.pageTitle}>
            O meu <span className={styles.accent}>Arsenal</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Tecnologias que uso no dia a dia para entregar produtos de qualidade.
          </p>
        </motion.div>

        <div className={styles.categoriesGrid}>
          {skillsData.map(({ category, icon, color, skills }, catIdx) => (
            <motion.div
              key={category}
              className={styles.categoryCard}
              style={{ "--cat-color": color }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: catIdx * 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{icon}</span>
                <h2 className={styles.categoryName}>{category}</h2>
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
          <p>
            Experiência comprovada em desenvolvimento Frontend e Backend, gestão de bases de dados
            e ferramentas de design. Sempre em aprendizagem contínua — se existe uma nova tecnologia
            que resolve um problema real, vou dominá-la.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
