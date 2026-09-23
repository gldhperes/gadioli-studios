import { useEffect } from 'react';
import { X } from 'lucide-react';
import OrderForm from '../components/sections/OrderForm';

// Interface
import type IModel from '../interfaces/IModel';

// Style
import styles from './OrderDrawer.module.css';

interface OrderDrawerProps {
    open: boolean;
    onClose: () => void;
    modelName?: string;
    models: IModel[];
}

export default function OrderDrawer({ open, onClose, modelName, }: OrderDrawerProps) {

    // Trava o scroll da página enquanto o drawer está aberto
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    // Fecha com tecla Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (open) window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <>
            <div className={styles.backdrop} onClick={onClose} />
            <aside className={styles.drawer}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Finalizar Pedido</h2>
                    <button onClick={onClose} className={styles.closeBtn} aria-label="Fechar">
                        <X size={20} />
                    </button>
                </div>
                <div className={styles.body}>
                    <OrderForm
                        preselectedModel={modelName}
                        // onClose={onClose}
                    />
                </div>
            </aside>
        </>
    );
}