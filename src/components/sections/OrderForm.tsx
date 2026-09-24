import { useState, useEffect } from 'react';
import { Check, ChevronRight, ChevronLeft, Loader2, Copy } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal.ts';
import styles from './OrderForm.module.css';
import pixImg from "../../assets/QRCode.png";


interface OrderFormProps {
  preselectedModel?: string;
  onClose?: () => void;
}

interface OrderFormData {
  client_name: string;
  email: string;
  phone: string;

  event_date: string;
  event_time: string;
  event_location: string;

  names: string;
  age: string;
  message: string;

  notes: string;


}

export default function OrderForm({ preselectedModel }: OrderFormProps) {
  const WHATSAPP_NUMBER = '5521997857619';
  const ref = useReveal();
  const pixKey = "7f3cb7fb-ea5b-437a-80d6-5850eeb170a3";
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState<OrderFormData>({
    client_name: '', email: '', phone: '', event_date: '',
    event_time: '', event_location: '', names: '', age: '', message: '',
    notes: ''
  });

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const key = pixKey;

    try {
      await navigator.clipboard.writeText(key);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Erro ao copiar chave:", error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const modelo = params.get('modelo');
    if (modelo) {
      setForm((f: any) => ({ ...f, }));
      setStep(1);
      const el = document.querySelector('#pedido');
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, []);

  const update = <K extends keyof OrderFormData>(
    key: K,
    value: OrderFormData[K]
  ) => {
    setForm((f) => ({
      ...f,
      [key]: value,
    }));
  };



  const handleSubmit = () => {
    setLoading(true);

    try {
      const message = `
Olá, Gadioli Studio! Gostaria de solicitar um convite.

*DADOS DO SOLICITANTE*
Nome: ${form.client_name}

*DADOS DO EVENTO*
Nome do(a) Aniversariante: ${form.names}
Modelo: ${preselectedModel}
Idade: ${form.age}
Data: ${form.event_date}
Horário: ${form.event_time}
Local: ${form.event_location}

*OBSERVAÇÕES*
${form.notes || 'Nenhuma observação.'}

Estou enviando este pedido através do site Gadioli Studio.
`.trim();

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, '_blank');

      setStep(step + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const canAdvance = () => {

    const required: Partial<Record<number,
      (keyof OrderFormData)[]>> = {
      0: ['client_name', 'names', 'age', 'event_date', 'event_time', 'event_location'],
    };
    const req = required[step];
    if (!req) return true;
    return req.every((f) => form[f].trim() !== '');
  };

  if (done) {
    return (
      <section id="pedido" className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.successWrap}>
            <div className={styles.successIcon}>
              <Check size={28} />
            </div>
            <h2 className={styles.successTitle}>Pedido enviado com sucesso!</h2>
            <p className={styles.successText}>
              Recebemos seu pedido. O Gadioli Studio entrará em contato em breve para confirmar os detalhes e iniciar a personalização do seu convite.
            </p>
            <button
              onClick={() => {
                setDone(false); setStep(0); setForm(() => (
                  {
                    client_name: '', email: '', phone: '', event_date: '',
                    event_time: '', event_location: '', names: '', age: '', message: '',
                    notes: ''
                  }
                ));
              }}
              className={styles.resetLink}
            >
              Enviar outro pedido
            </button>
          </div>
        </div>
      </section>
    );
  }

  const steps = [
    { label: 'Dados do convite' },
    { label: 'Detalhes' },
    { label: 'Pagamento' },
  ];

  return (
    <section id="pedido" className={styles.section}>
      <div ref={ref} className={`reveal ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Finalize seu pedido com os dados do evento.</h2>

          <div className={styles.instructions}>
            <div className={`${styles.instruction} ${step > 0 ? styles.instructionCompleted : ''}`}
            >
              <span className={styles.instructionNumber}>1</span>
              <span>Preencha os dados do convite.</span>
            </div>

            <div
              className={`${styles.instruction} ${step > 1 ? styles.instructionCompleted : ''
                }`}
            >
              <span className={styles.instructionNumber}>2</span>
              <span>
                Enviar o pedido abrirá uma conversa conosco pelo
                WhatsApp contendo o formulário que você preencheu.
                Após o envio retorne ao site para concluir o pagamento e finalizar o pedido.
              </span>
            </div>

            <div
              className={`${styles.instruction} ${step > 3 ? styles.instructionCompleted : ''
                }`}
            >
              <span className={styles.instructionNumber}>3</span>
              <span>
                Faça no Pix e envie o comprovante para a conversa conosco para
                finalizar o pedido.
              </span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className={styles.progress}>
          {steps.map((_, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div className={`${styles.stepCircle} ${idx <= step ? styles.stepCircleActive : ''}`}>
                {idx < step ? <Check size={14} /> : idx + 1}
              </div>
              {idx < steps.length - 1 && (
                <div className={`${styles.stepConnector} ${idx < step ? styles.stepConnectorActive : ''}`} />
              )}
            </div>
          ))}
        </div>

        <div className={styles.formCard}>

          {/* Step 1: Event */}
          {step === 0 && (
            <div className={styles.formGroup}>
              <div>
                <label className={styles.label}>Nome do solicitante *</label>
                <input className={styles.input} value={form.client_name}

                  onChange={(e) => update('client_name', e.target.value)}
                  placeholder="Seu nome" />
              </div>
              <div>
                <label className={styles.label}>Nome do(a) Aniversariante *</label>
                <input className={styles.input} value={form.names}

                  onChange={(e) => update('names', e.target.value)}
                  placeholder="Ex: Maria, João, José" />
              </div>

              <div>
                <label className={styles.label}>Idade do(a) aniversariante *</label>
                <input className={styles.input} value={form.age}

                  onChange={(e) => update('age', e.target.value)}
                  placeholder="Ex: 7, 10, 25, 50" />
              </div>

              {/* <div className={styles.twoCol}> */}
              <div>
                <label className={styles.label}>Data do evento *</label>
                <input className={styles.input} type="date" value={form.event_date}

                  onChange={(e) => update('event_date', e.target.value)}
                />
              </div>

              <div>
                <label className={styles.label}>Horário *</label>
                <input className={styles.input} type="time" value={form.event_time}

                  onChange={(e) => update('event_time', e.target.value)}
                />
              </div>

              <div>
                <label className={styles.label}>Local do evento *</label>
                <input className={styles.input} value={form.event_location}
                  onChange={(e) => update('event_location', e.target.value)}
                  placeholder="Endereço ou nome do local" />
              </div>

              <div>
                <label className={styles.label}>Observações</label>
                <textarea className={`${styles.input} ${styles.textareaSm}`} value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  placeholder="Informações adicionais, referências, dúvidas" />
              </div>

            </div>
          )}

          {step === 1 && (
            <div className={styles.checkForm}>
              <div>
                <p className={styles.label}>Nome do solicitante: {form.client_name}</p>
                <p className={styles.label}>Nome do(a) Aniversariante: {form.names}</p>
                <p className={styles.label}>Idade do(a) aniversariante: {form.age}</p>
                <p className={styles.label}>Data do evento: {form.event_date}</p>
                <p className={styles.label}>Horário: {form.event_time}</p>
                <p className={styles.label}>Local do evento:{form.event_location}</p>
                <p className={styles.label}>Observações: {form.notes}</p>
              </div>
            </div>
          )}

          {(step === 2) && (
            <div className={styles.formGroup} style={{ alignItems: 'center' }}>
              <div>
                <img src={pixImg} />
              </div>

              <div>
                <button
                  className={`${styles.nextBtn} ${copied ? styles.copied : ""}`}
                  onClick={handleCopy}
                  type="button"
                >

                  <span className={styles.copyIcon}>
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </span>

                  <span style={{ marginRight: "20px" }}>
                    {copied ? "Chave copiada!" : "Copiar chave:"}
                  </span>

                  <span>{pixKey}</span>
                </button>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className={styles.navRow}>
            {(step > 0) && (
              <button onClick={() => setStep(step - 1)} className={styles.backBtn}>
                <ChevronLeft size={16} /> Voltar
              </button>)}

            {(step > -1 && step !== 1 && step < 2) && (

              <button
                onClick={() => canAdvance() && setStep(step + 1)}
                disabled={!canAdvance()}
                className={styles.nextBtn}
              >
                Continuar para Passo {step + 2}
                <ChevronRight size={16} />
              </button>
            )}

            {step == 1 && (
              < button
                onClick={handleSubmit}
                className={styles.submitBtn}
              >
                {loading ? <Loader2 size={16} className={styles.spin} /> : <Check size={16} />}
                {loading ? 'Enviando...' : 'Enviar Pedido'}
              </button>

            )}
          </div>
        </div>
      </div>
    </section >
  );
}