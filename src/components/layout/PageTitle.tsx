import { motion } from 'framer-motion';
import styles from './HeroTitle.module.css';

type PageTitleProps = {
  title: string;
  subtitle?: string;
  delay?: number;
};

export default function PageTitle({ title, subtitle, delay = 0 }: PageTitleProps) {
  const renderStyledTitle = (text: string) => {
    const parts = text.split(/(\bFocus\b|مركز)/g);

    return parts.map((part, index) => {
      if (part === 'Focus') {
        return (
          <span key={index} className={styles.focusText}>
            {part}
          </span>
        );
      } else if (part === 'مركز') {
        return (
          <span key={index} className={styles.arabicText}>
            {part}
          </span>
        );
      } else if (/[\u0600-\u06FF]/.test(part)) {
        return (
          <span key={index} className={styles.arabicText}>
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-center mb-16"
    >
      <h1 className={styles.mainTitle}>
        {renderStyledTitle(title)}
      </h1>
      {subtitle && (
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
