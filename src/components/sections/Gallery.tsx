// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal.ts';
import styles from './Gallery.module.css';

import ModelCard from '../ModelCard.tsx';
import type IModel from '../../interfaces/IModel.ts';

interface GalleryProps {
  models?: IModel[];
}

export default function Gallery({ models = [] }: GalleryProps) {
  const headerRef = useReveal();
  const mainModels = models.filter((model) => model.isMain);
  return (
    <section id="modelos" className={styles.section}>
      <div className={styles.container}>
        <div ref={headerRef} className={`reveal ${styles.header}`}>
          <div>
            <span className={styles.eyebrow}>Galeria de modelos</span>
            <h2 className={styles.title}>Escolha o convite que mais combina com o seu evento.</h2>
          </div>
          <p className={styles.subtitle}>
            Cada modelo recebe seus textos, dados do evento e observações. Gadioli Studio personaliza e lhe entrega.
          </p>
        </div>

        <div className={styles.grid}>
          {mainModels.map((model: IModel) => (
            <ModelCard key={model.name} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
}