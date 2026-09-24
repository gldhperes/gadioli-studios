import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

// Componentes
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderDrawer from '../components/OrderDrawer';
import SEO from '../components/SEO';

// Interfaces
import type IModel from '../interfaces/IModel';

// Data
import models from '../data/models';

// Style
import styles from './ModelDetail.module.css';

export default function ModelDetail() {
  const { slug } = useParams();
  const [model, setModel] = useState<IModel | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const found = models.find((m) => m.slug === slug) ?? null;

    setModel(found);
  }, [slug]);

  const handleBuy = () => {
    if (!model) return;
    setDrawerOpen(true);
  };

  if (!model) {
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.notFound}>
          <h1 className={styles.notFoundTitle}>Modelo não encontrado</h1>
          <Link to="/" className={styles.backLink}>Voltar para a página inicial</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const details = [
    { label: 'Preço', value: `R$ ${model.price.toFixed(2).replace('.', ',')}` },
    { label: 'O que pode ser personalizado', value: model.customization || 'Textos, data, horário, local, paleta de cores e pequenos ajustes visuais.' },
    { label: 'Prazo de entrega', value: model.delivery_time || 'Entrega em até 3 dias úteis após confirmação do pagamento.' },
    { label: 'Após a compra', value: model.after_purchase || 'Após a compra, você preencherá um formulário com todos os dados do seu evento e anexará o comprovante Pix.' },
  ];

  return (
    <div className={styles.wrapper}>
      <SEO
        title={model.seo?.title || `${model.name} | Gadioli Studio`}
        description={
          model.seo?.description ||
          model.description
        }
        canonical={`/modelos/${model.slug}`}
        image={model.image_url}
      />
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Link to="/modelos" className={styles.backNav}>
            <ArrowLeft size={16} /> Voltar para modelos
          </Link>

          <div className={styles.grid}>
            {/* Left: Image */}
            <div className={styles.leftCol}>
              <div className={styles.imageWrap}>
                <img src={model.image_url} alt={`${model.name} - convite de ${model.category.toLowerCase()}`} className={styles.detailImage} />
              </div>
            </div>

            {/* Right: Details */}
            <div>
              <span className={styles.badge}>{model.category}</span>
              <h1 className={styles.title}>{model.name}</h1>
              <p className={styles.description}>{model.description}</p>

              <div className={styles.details}>
                {details.map((d) => (
                  <div key={d.label} className={styles.detailItem}>
                    <p className={styles.detailLabel}>{d.label}</p>
                    <p className={styles.detailValue}>{d.value}</p>
                  </div>
                ))}
              </div>

              <button onClick={handleBuy} className={styles.buyButton}>
                Comprar este Modelo
                <Check size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <OrderDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        modelName={model?.name}
        models={model ? [model] : []}
      />
    </div>
  );
}