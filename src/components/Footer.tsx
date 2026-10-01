import { Instagram } from 'lucide-react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <h3 className={styles.brandTitle}>
              Gadioli<span className={styles.brandAccent}>.</span>
            </h3>
            <p className={styles.brandText}>
              Estúdio Gadioli de design digitais. Personalização manual, cuidado e beleza em cada projeto.
            </p>
          </div>
          <div className={styles.navCol}>
            <span className={styles.colLabel}>Navegação</span>
            {/* <a href="/modelos" className={styles.navLink}>Modelos</a> */}
            <Link to={"/modelos"} className={styles.navLink}>
              Modelos
            </Link>
            <a href="/#como-funciona" className={styles.navLink}>Como funciona</a>
            <a href="/#faq" className={styles.navLink}>FAQ</a>
            <a href="/#pedido" className={styles.navLink}>Fazer pedido</a>
          </div>
          <div className={styles.contactCol}>
            <span className={styles.colLabel}>Contato</span>
            <span className={styles.contactText}>Pagamento via Pix</span>
            <span className={styles.contactSub}>Personalização manual após a compra</span>
            <a href="https://www.instagram.com/gadioli_studios" target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
              <Instagram size={16} /> @gadiolistudio
            </a>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>© {anoAtual} Gadioli Studio. Todos os direitos reservados.</p>
          <a className={styles.madeWith} href="https://www.guilhermeperes.com.br" target="_blank" rel="noopener noreferrer">Feito com cuidado e atenção aos detalhes por <span className={styles.madeBy}>Guilherme Peres</span>.</a>
        </div>
      </div>
    </footer>
  );
}