import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal.ts';

import styles from './CTASection.module.css';

export default function CTASection() {
  const ref = useReveal();

  return (
    <section className={styles.section}>
      <div ref={ref} className={`reveal ${styles.inner}`}>

        <h2 className={styles.title}>
          Seu convite perfeito está a poucos cliques.
        </h2>

        <Link to={`/modelos`} className={styles.button}>
          Escolher um Modelo
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}