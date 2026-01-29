import { motion } from 'framer-motion';
import styles from './HeroTitle.module.css';

export default function HeroTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={styles.heroTitleContainer}
    >
      <h1 className={styles.mainTitle}>
        <span className={styles.arabicText}>مركز </span>
        <span className={styles.focusText}>Focus</span>
        <span className={styles.arabicText}> للتعليم</span>
      </h1>
      <p className={styles.subtitle}>
        التحضير المهني لامتحان Digital SAT
      </p>
    </motion.div>
  );
}
