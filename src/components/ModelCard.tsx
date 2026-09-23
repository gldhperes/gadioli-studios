import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Interface
import type IModel from '../interfaces/IModel';

// Style
import styles from './ModelCard.module.css';

interface ModelCardProps {
    model: IModel;
}
/* ModelCard — card reutilizável de modelo de convite
   Usado em: src/pages/Modelos.jsx (catálogo) e potencialmente em outras listagens
   Dados vêm da entidade Model (name, slug, category, description, price, image_url) */
export default function ModelCard({ model }: ModelCardProps) {
    return (
        <Link
            key={model.id || model.slug}
            to={`/modelos/${model.slug}`}
            className={styles.card}
        >
            <p className={styles.badge}>{model.category}</p>

            <div className={styles.cardInfoLeft}>
                <h3 className={styles.cardName}>{model.name}</h3>
                <p className={styles.cardDesc}>{model.description}</p>
            </div>

            <div className={styles.cardInfo}>
                <span className={styles.price}>R$ {model.price}</span>

                <span className={styles.detailsLink}>
                    Ver detalhes
                    <ArrowRight size={14} />
                </span>
            </div>


            <div className={styles.imageWrap}>
                <img
                    src={model.image_url}
                    alt={model.name}
                    className={styles.image}
                />

            </div>

        </Link>
    );
}