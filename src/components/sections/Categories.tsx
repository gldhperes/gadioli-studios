import { useReveal } from '../../hooks/useReveal.ts';
import categories from '../../data/categories.ts';

import styles from './Categories.module.css';
import { Link } from 'react-router-dom';

export default function Categories() {
  const headerRef = useReveal();

  const _Categories = Object.values(categories.Categories);
  const categoriesBG = [
    styles.cardBg1,
    styles.cardBg2,
    styles.cardBg3,
    styles.cardBg4,
    styles.cardBg5,
    styles.cardBg6,
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div ref={headerRef} className={`reveal ${styles.header}`}>
          <div>
            <span className={styles.eyebrow}>Encontre pelo tipo de momento</span>
            <h2 className={styles.title}>Categorias para cada celebração.</h2>
          </div>
          <p className={styles.subtitle}>
            Navegue por estilos e ocasiões para chegar rapidamente ao modelo ideal.
          </p>
        </div>

        <div className={styles.grid}>

          {_Categories.map((cat, i) => {
            const Icon = cat.icon;

            return (

              <Link key={cat.name} to={`/modelos?categoria=${encodeURIComponent(cat.name)}`}
                className={styles.card} style={{ backgroundColor: cat.bg }} >


                <Icon
                  size={24}
                  strokeWidth={1.5}
                  className={styles.icon}
                />

                <div>
                  <h3 className={styles.cardTitle}>{cat.name}</h3>

                  <div className={styles.cardMeta}>
                    <span className={styles.count}>
                      {cat.images.length} modelos
                    </span>

                    <span className={styles.viewLink}>
                      Ver modelos →
                    </span>
                  </div>
                </div>
              </Link>


            );
          })}
        </div>
      </div >
    </section >
  );
}