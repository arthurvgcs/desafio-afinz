import React from "react";
import { ReceiptData } from "../../context/TransferContext";
import CloseIcon from "../../icons/CloseIcon";
import TransferApprovedIcon from "../../icons/TransferApprovedIcon";
import TransferProcessingIcon from "../../icons/TransferProcessingIcon";
import { formatCurrencyFromCents } from "../../utils/formatCurrency";
import styles from "./ReceiptDrawer.module.css";

interface ReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  receiptData: ReceiptData;
}

const ReceiptModal: React.FC<ReceiptModalProps> = ({
  isOpen,
  onClose,
  receiptData,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={onClose}>
            <CloseIcon size={20} />
          </button>
        </div>

        <div className={styles.statusRow}>
          {receiptData.status === "APPROVED" ? (
            <div className={styles.statusAccepted}>
              <TransferApprovedIcon />
              <span className={styles.statusText}>Transferência realizada</span>
            </div>
          ) : (
            <div className={styles.statusProcessing}>
              <TransferProcessingIcon />
              <span className={styles.statusText}>
                Transferência em processamento
              </span>
            </div>
          )}
        </div>

        <div className={styles.receiptContent}>
          <div className={styles.infoGrid}>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>Novo Saldo</div>
              <div className={styles.infoValue}>
                {formatCurrencyFromCents(Number(receiptData.newBalance))}
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>Data - Hora</div>
              <div className={styles.infoValue}>
                {receiptData.date} - {receiptData.time}
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>Agência</div>
              <div className={styles.infoValue}>{receiptData.agency}</div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>Conta</div>
              <div className={styles.infoValue}>{receiptData.account}</div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>Valor</div>
              <div className={styles.infoValue}>
                {formatCurrencyFromCents(Number(receiptData.amount))}
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>Sua conta</div>
              <div className={styles.infoValue}>
                {receiptData.sourceAccount}
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>Sua agência</div>
              <div className={styles.infoValue}>{receiptData.sourceAgency}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;
