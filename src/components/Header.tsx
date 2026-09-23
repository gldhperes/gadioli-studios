import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Modelos', to: '/modelos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: any) => {
    setMenuOpen(false);
    if (window.location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.bar} ${scrolled ? styles.barScrolled : ''}`}>
        <Link to="/" className={styles.logo}>
          Gadioli<span className={styles.logoAccent}>.</span>
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) =>
            link.to ? (
              <Link key={link.to} to={link.to} className={styles.navLink}>
                {link.label}
              </Link>
            ) : (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={styles.navLink}
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        <div className={styles.rightSide}>

          <Link to={"/modelos"} className={styles.buyButton}>
            Comprar
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={styles.menuButton}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={styles.mobileLink}
            >
              {link.label}
            </button>
          ))}
          <Link to={"/modelos"} className={styles.mobileBuyButton}>
            Comprar
          </Link>
        </div>
      )}
    </header>
  );
}