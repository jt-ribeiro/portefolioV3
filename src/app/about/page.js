"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const highlights = [
  { emoji: "🎓", title: "Formação", value: "Lic. Computação Gráfica e Multimédia", sub: "ESTG Viana do Castelo" },
  { emoji: "💼", title: "Foco Atual", value: "Fullstack Development", sub: "React · Next.js · Node.js" },
  { emoji: "📍", title: "Localização", value: "Viana do Castelo", sub: "Portugal 🇵🇹" },
  { emoji: "🌐", title: "Idiomas", value: "Português (Nativo)", sub: "Inglês (Avançado)" },
  { emoji: "🚀", title: "Paixão", value: "IA & Inovação", sub: "TensorFlow · Automação" },
  { emoji: "🎯", title: "Objetivo", value: "Impacto Real", sub: "Produtos que as pessoas usam" },
];

const values = [
  {
    icon: "⚡",
    title: "Velocidade com Qualidade",
    desc: "Entrego rápido sem sacrificar código limpo, escalável e bem documentado.",
  },
  {
    icon: "🔍",
    title: "Mentalidade de Produto",
    desc: "Não código por código — penso sempre no utilizador final e no impacto real.",
  },
  {
    icon: "♾️",
    title: "Aprendizagem Contínua",
    desc: "Estou sempre a aprender. Se é novo, difícil ou parece impossível, conta comigo.",
  },
];

export default function About() {
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
          <span className={styles.pageTag}>whoami</span>
          <h1 className={styles.pageTitle}>
            Sobre <span className={styles.accent}>Mim</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Desenvolvedor apaixonado por criar experiências digitais que fazem a diferença.
          </p>
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
            <h2 className={styles.bioName}>Tomás Ribeiro <span className={styles.bioAge}>25</span></h2>
            <p className={styles.bioParagraph}>
              Gosto de explorar o desconhecido. Se é novo, difícil ou parece impossível — conta comigo.
              Trabalho bem em equipa mas também sei ser auto-suficiente. Estou sempre pronto para aprender,
              errar, corrigir e crescer, tanto pessoalmente como profissionalmente.
            </p>
            <p className={styles.bioParagraph}>
              A minha especialidade é o fullstack — do design da interface à arquitetura da API.
              Tenho especial interesse em IA aplicada ao produto e em criar interfaces que as pessoas adoram usar.
            </p>
            <a href="mailto:tomasribeiro930@gmail.com" className={styles.contactLink}>
              Vamos construir algo incrível juntos? →
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
          {highlights.map(({ emoji, title, value, sub }) => (
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
            Como trabalho
          </motion.h2>
          <div className={styles.valuesGrid}>
            {values.map(({ icon, title, desc }) => (
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
