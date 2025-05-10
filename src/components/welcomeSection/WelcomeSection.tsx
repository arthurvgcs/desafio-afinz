import styles from './WelcomeSection.module.css';

interface Props {
  title: string;
  subtitle: string;
}

export default function WelcomeSection({ title, subtitle }: Props) {
  return (
    <div className={styles.welcomeSection}>
      <h1 className={styles.greeting}>{title}</h1>
      <p className={styles.subGreeting}>{subtitle}</p>
    </div>
  );
}