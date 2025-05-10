import styles from './TransferForm.module.css';

interface Props {
  transferType: string;
  setTransferType: (value: string) => void;
  agency: string;
  setAgency: (value: string) => void;
  account: string;
  setAccount: (value: string) => void;
  amount: string;
  setAmount: (value: string) => void;
}

export default function TransferForm({
  transferType, setTransferType,
  agency, setAgency,
  account, setAccount,
  amount, setAmount
}: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Transferência realizada:', { transferType, agency, account, amount });
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Dados da transferência</h2>
      </div>
      <form className={styles.transferForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="transferType" className={styles.label}>Tipo de transferência</label>
          <div className={styles.selectWrapper}>
            <select id="transferType" className={styles.select} value={transferType}
              onChange={(e) => setTransferType(e.target.value)} disabled>
              <option value="TED (Transferência entre contas)">TED (Transferência entre contas)</option>
              <option value="PIX">PIX</option>
              <option value="DOC">DOC</option>
            </select>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="agency" className={styles.label}>Agência</label>
          <input type="text" id="agency" className={styles.input} value={agency}
            onChange={(e) => setAgency(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="account" className={styles.label}>Conta</label>
          <input type="text" id="account" className={styles.input} value={account}
            onChange={(e) => setAccount(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="amount" className={styles.label}>Valor</label>
          <input type="text" id="amount" className={styles.input} value={amount}
            onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className={styles.formActions}>
          <button type="submit" className={styles.transferButton}>Transferir</button>
        </div>
      </form>
    </div>
  );
}