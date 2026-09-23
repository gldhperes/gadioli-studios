import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal.ts';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'Como funciona o processo?',
    a: 'Você escolhe um modelo, envia os dados pelo formulário, realiza o Pix, anexa o comprovante e recebe o convite personalizado depois.',
  },
  {
    q: 'Quanto tempo demora?',
    a: 'O prazo padrão é informado em cada modelo e começa após a confirmação do pagamento e envio das informações completas.',
  },
  {
    q: 'Posso alterar texto, cores e detalhes?',
    a: 'Sim. Textos, cores e pequenos ajustes visuais podem ser personalizados conforme o modelo escolhido.',
  },
  {
    q: 'Como faço o pagamento?',
    a: 'O pagamento é preferencialmente via Pix, com comprovante anexado no formulário de pedido.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const ref = useReveal();

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <div ref={ref} className={`reveal ${styles.header}`}>
          <h2 className={styles.title}>Perguntas frequentes</h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.item}>
              <button
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className={styles.button}
              >
                <span className={styles.question}>{faq.q}</span>
                {open === idx
                  ? <Minus size={18} className={styles.iconBtn} />
                  : <Plus size={18} className={styles.iconBtn} />}
              </button>
              <div className={`${styles.answerWrap} ${open === idx ? styles.answerWrapOpen : ''}`}>
                <p className={styles.answer}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}