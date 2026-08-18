import { motion } from 'framer-motion';
import styles from './HeroTitle.module.css';

type PageTitleProps = {
  title: string;
  subtitle?: string;
  delay?: number;
};

export default function PageTitle({ title, subtitle, delay = 0 }: PageTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-center mb-16"
    >
      <h1 className={`${styles.mainTitle} bg-gradient-to-r from-[#9E5A4E] to-[#625591] bg-clip-text text-transparent`}>
        {title}
      </h1>
      {subtitle && (
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
