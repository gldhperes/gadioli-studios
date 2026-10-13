import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LegalPageProps {
  eyebrow: string;
  title: string;
  // updatedAt: string;
  intro: string;
  children: ReactNode;
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
  } as React.CSSProperties,
  main: {
    padding: '8rem 1.5rem 5rem',
  } as React.CSSProperties,
  container: {
    width: '100%',
    maxWidth: '72rem',
    margin: '0 auto',
  } as React.CSSProperties,
  header: {
    maxWidth: '48rem',
    margin: '0 auto 3rem',
    textAlign: 'center',
  } as React.CSSProperties,
  eyebrow: {
    display: 'block',
    marginBottom: '0.75rem',
    color: 'var(--muted-foreground)',
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
  } as React.CSSProperties,
  title: {
    margin: 0,
    color: 'var(--foreground)',
    fontFamily: 'var(--font-heading)',
    fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
    fontWeight: 500,
    letterSpacing: '-0.03em',
    lineHeight: 1.05,
  } as React.CSSProperties,
  updatedAt: {
    margin: '1rem 0 0',
    color: 'var(--muted-foreground)',
    fontSize: '0.875rem',
  } as React.CSSProperties,
  intro: {
    maxWidth: '42rem',
    margin: '1.5rem auto 0',
    color: 'var(--muted-foreground)',
    fontSize: '1rem',
    lineHeight: 1.8,
  } as React.CSSProperties,
  article: {
    maxWidth: '52rem',
    margin: '0 auto',
    padding: 'clamp(1.5rem, 4vw, 3.5rem)',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--card)',
    boxShadow: '0 1.5rem 4rem rgba(20, 22, 26, 0.05)',
  } as React.CSSProperties,
  section: {
    marginTop: '2.25rem',
  } as React.CSSProperties,
  sectionFirst: {
    marginTop: 0,
  } as React.CSSProperties,
  heading: {
    margin: '0 0 0.75rem',
    color: 'var(--foreground)',
    fontFamily: 'var(--font-heading)',
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 500,
    lineHeight: 1.2,
  } as React.CSSProperties,
  paragraph: {
    margin: '0 0 0.9rem',
    color: 'var(--muted-foreground)',
    fontSize: '0.98rem',
    lineHeight: 1.85,
  } as React.CSSProperties,
  list: {
    display: 'grid',
    gap: '0.7rem',
    margin: '0.5rem 0 0',
    paddingLeft: '1.25rem',
    color: 'var(--muted-foreground)',
    fontSize: '0.98rem',
    lineHeight: 1.75,
  } as React.CSSProperties,
  link: {
    color: 'var(--accent)',
    fontWeight: 600,
    textDecoration: 'underline',
    textUnderlineOffset: '0.2em',
  } as React.CSSProperties,
};

export function LegalSection({
  title,
  children,
  first = false,
}: {
  title: string;
  children: ReactNode;
  first?: boolean;
}) {
  return (
    <section style={first ? { ...styles.section, ...styles.sectionFirst } : styles.section}>
      <h2 style={styles.heading}>{title}</h2>
      {children}
    </section>
  );
}

export function LegalParagraph({ children }: { children: ReactNode }) {
  return <p style={styles.paragraph}>{children}</p>;
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul style={styles.list}>{children}</ul>;
}

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} style={styles.link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function LegalPage({
  eyebrow,
  title,
  // updatedAt,
  intro,
  children,
}: LegalPageProps) {
  return (
    <div style={styles.wrapper}>
      <Header />
      <main style={styles.main}>
        <div style={styles.container}>
          <header style={styles.header}>
            <span style={styles.eyebrow}>{eyebrow}</span>
            <h1 style={styles.title}>{title}</h1>
            {/* <p style={styles.updatedAt}>{updatedAt}</p> */}
            <p style={styles.intro}>{intro}</p>
          </header>
          <article style={styles.article}>{children}</article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
