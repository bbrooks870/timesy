import { Container } from '@/components/container';

import styles from './hero.module.css';

export function Hero() {
  return (
    <div className={styles.hero}>
      <Container>
        <img
          alt="Timesy Logo"
          className={styles.logo}
          height={45}
          src="/logo.svg"
          width={38.97}
        />

        <h1 className={styles.title}>Timely.rest</h1>
        <p className={styles.desc}>Free Online Timer for Maximum Focus</p>
      </Container>
    </div>
  );
}
