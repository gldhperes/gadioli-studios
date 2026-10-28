import type { CSSProperties } from 'react';
import { MessageCircle } from 'lucide-react';

import wppNumber from '../data/wppNumber';

const WHATSAPP_NUMBER = wppNumber;
const DEFAULT_MESSAGE = 'Olá, Gadioli Studio! Gostaria de tirar uma dúvida.';

const styles = {
  link: {
    position: 'fixed',
    right: '1.25rem',
    bottom: '1.25rem',
    zIndex: 1000,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.65rem',
    minHeight: '3.25rem',
    padding: '0.75rem 1rem',
    borderRadius: '9999px',
    backgroundColor: '#25D366',
    color: '#FFFFFF',
    boxShadow: '0 0.75rem 2rem rgba(20, 22, 26, 0.18)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1,
    textDecoration: 'none',
    transition: 'transform 200ms ease, box-shadow 200ms ease',
  } as CSSProperties,
  icon: {
    flexShrink: 0,
  } as CSSProperties,
  label: {
    whiteSpace: 'nowrap',
  } as CSSProperties,
};

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com o Gadioli Studio pelo WhatsApp"
      title="Conversar pelo WhatsApp"
      style={styles.link}
      onMouseEnter={(event) => {
        event.currentTarget.style.transform = 'translateY(-2px)';
        event.currentTarget.style.boxShadow = '0 1rem 2.25rem rgba(20, 22, 26, 0.24)';
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = 'translateY(0)';
        event.currentTarget.style.boxShadow = '0 0.75rem 2rem rgba(20, 22, 26, 0.18)';
      }}
    >
      <MessageCircle size={22} strokeWidth={2.2} style={styles.icon} aria-hidden="true" />
      <span style={styles.label}>Fale conosco</span>
    </a>
  );
}
