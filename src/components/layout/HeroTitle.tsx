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
      <h1 className={`${styles.mainTitle} bg-gradient-to-r from-[#9E5A4E] to-[#625591] bg-clip-text text-transparent`}>
        <span>مركز </span>
        <span className="font-bold">Focus</span>
        <span> للتعليم</span>
      </h1>
      <p className={styles.subtitle}>
        التحضير المهني لامتحان Digital SAT
      </p>
    </motion.div>
  );
}
