import { Container } from '@/components/container';

import styles from './footer.module.css';

export function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <p className={styles.line}>
          Made With Love ❤️ 
        </p>

        <p className={styles.line}>
          Created by Me For Students
        </p>
      </footer>
    </Container>
  );
}
