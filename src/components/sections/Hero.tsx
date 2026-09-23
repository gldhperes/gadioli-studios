import { ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal.ts';
import styles from './Hero.module.css';

const heroImages = [
  'https://media.base44.com/images/public/6a567992b959288ddd53cef6/31eb60177_generated_76820b12.png',
  'https://media.base44.com/images/public/6a567992b959288ddd53cef6/a4d3d8fbb_generated_dcedce51.png',
  'https://media.base44.com/images/public/6a567992b959288ddd53cef6/aa4ee3d86_generated_2067a579.png',
];

export default function Hero() {
  const ref = useReveal();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Content */}
          <div ref={ref} className={`reveal ${styles.leftCol}`}>
            <span className={styles.eyebrow}>
              Estúdio Gadioli de convites.
            </span>
            <h1 className={styles.title}>
              Convites personalizados para tornar seu momento inesquecível.
            </h1>
            <p className={styles.body}>
              Escolha um modelo pronto, envie os dados do evento e receba um convite finalizado manualmente pelo Gadioli Studio — com cuidado, beleza e atendimento próximo.
            </p>
            <div className={styles.buttons}>
              <a href="#modelos" className={styles.primaryBtn}>
                Ver Modelos
                <ArrowRight size={16} />
              </a>
              <a href="#como-funciona" className={styles.secondaryBtn}>
                Como Funciona
              </a>
            </div>
            <div className={styles.footerBar}>
              <span className={styles.dot} />
              <span>Personalização manual após a compra · Pagamento via Pix · Entrega posterior ao cliente</span>
            </div>
          </div>

          {/* Right: Images */}
          <div className={styles.rightCol}>
            <div className={styles.img1}>
              <img src={heroImages[0]} alt="Convite de casamento elegante" className={styles.heroImg} />
            </div>
            <div className={styles.img2}>
              <img src={heroImages[1]} alt="Convite de chá de bebê" className={styles.heroImg} />
            </div>
            <div className={styles.img3}>
              <img src={heroImages[2]} alt="Convite de 15 anos sofisticado" className={styles.heroImg} />
            </div>
            <div className={styles.overlayCard}>
              <p className={styles.overlayTitle}>Pedido sob medida</p>
              <p className={styles.overlayText}>
                Você compra o modelo, envia as informações e o estúdio personaliza tudo manualmente.
              </p>
            </div>
          </div>

          {/* Mobile image */}
          <div className={styles.mobileImage}>
            <div className={styles.mobileImgInner}>
              <img src={heroImages[0]} alt="Convite elegante" className={styles.heroImg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}