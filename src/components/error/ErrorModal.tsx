import { useTransferContext } from '../../context/TransferContext';
import styles from './ErrorModal.module.css';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ErrorModal:React.FC<ErrorModalProps> = ({ 
  isOpen, 
  onClose
}) => {

  const errorMessage = useTransferContext().errorMessage;

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>!</div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Erro</h2>
          <p className={styles.message}>{errorMessage}</p>
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;