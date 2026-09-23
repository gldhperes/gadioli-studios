import { useReveal } from '../../hooks/useReveal.ts';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    text: 'O convite ficou mais bonito do que eu imaginava. O atendimento foi muito cuidadoso do começo ao fim.',
    author: 'Marina A.',
  },
  {
    text: 'Escolhi o modelo, mandei as informações e recebi tudo pronto com muita rapidez.',
    author: 'Bianca R.',
  },
  {
    text: 'A experiência foi simples e o resultado teve cara de papelaria premium.',
    author: 'Camila S.',
  },
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div ref={ref} className={`reveal ${styles.header}`}>
          <h2 className={styles.title}>
            Design bonito, atendimento cuidadoso e compra simples.
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, idx) => (
            <div key={idx} className={styles.card}>
              <span className={styles.quoteMark}>"</span>
              <p className={styles.text}>{t.text}</p>
              <p className={styles.author}>— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}