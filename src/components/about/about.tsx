import { Container } from '@/components/container';

import styles from './about.module.css';

export function About() {
  return (
    <section className={styles.about}>
      <Container>
        <h2 className={styles.title}>What is Timely.rest?</h2>
        <p className={styles.desc}>
          Timely.rest is your free, open-source online timer to boost productivity. Run multiple timers, store sessions locally, and stay focused effortlessly. Perfect for students, professionals, and anyone aiming for peak performance.
        </p>
      </Container>
       <Container>
        <h2 className={styles.title}>Features</h2>
        <p className={styles.desc}>
          ⌛ Unlimited number of timers
          ⚡ Run multiple timers simultaneously
          📝 Name timers for better management
          🛸 Minimal and distraction-free
          ⭐ Privacy friendly; no data collection
        </p>
      </Container>
      
    </section>
  );
}
