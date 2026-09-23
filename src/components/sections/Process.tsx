import { useReveal } from '../../hooks/useReveal.ts';
import styles from './Process.module.css';

const steps = [
  { num: '01', title: 'Escolha um modelo', desc: 'Navegue pelas categorias e encontre o convite ideal para seu momento.' },
  { num: '02', title: 'Preencha o formulário', desc: 'Informe nomes, data, local, mensagem, tema e observações do evento.' },
  { num: '03', title: 'Pague via Pix', desc: 'Anexe o comprovante no pedido para iniciar a produção manual.' },
  { num: '04', title: 'Receba o convite', desc: 'O arquivo final personalizado é enviado posteriormente ao cliente.' },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section id="como-funciona" className={styles.section}>
      <div className={styles.container}>
        <div ref={ref} className={`reveal ${styles.header}`}>
          <span className={styles.eyebrow}>Processo de compra</span>
          <h2 className={styles.title}>Do modelo escolhido ao convite personalizado.</h2>
          <p className={styles.desc}>
            O site não é uma plataforma de edição. Você escolhe um modelo e o Gadioli Studio personaliza manualmente após receber seu pedido.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => (
            <div key={step.num} className={styles.step}>
              {idx < steps.length - 1 && <div className={styles.connector} />}
              <div className={styles.stepInner}>
                <div className={styles.circle}>
                  <span className={styles.circleNum}>{step.num}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.noteBox}>
          <p className={styles.noteText}>
            <span className={styles.noteBold}>Pagamento preferencialmente via Pix.</span>{' '}
            O pedido começa a ser produzido somente após o envio do comprovante. Após a confirmação do pagamento, o Gadioli Studio entra em contato se algum ajuste for necessário.
          </p>
        </div>
      </div>
    </section>
  );
}