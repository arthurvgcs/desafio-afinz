import { useBalanceContext } from '../../context/BalanceContext';
import { useTransferContext } from '../../context/TransferContext';
import { createAccountService } from '../../service/accountService';
import { axiosHttpClient } from '../../service/axiosHttpClient';
import { createTransferService } from '../../service/transferService';
import ErrorModal from '../error/ErrorModal';
import ReceiptDrawer from '../receipt/ReceiptDrawer';
import styles from './TransferForm.module.css';

export default function TransferForm() {
  const {
    transferType, setTransferType,
    agencyTransfer, setAgencyTransfer,
    accountTransfer, setAccountTransfer,
    amount, setAmount,
    isModalOpen, setIsModalOpen,
    receiptData, setReceiptData,
    isError, setIsError,
  } = useTransferContext();
  const {
    agency,
    account,
  } = useBalanceContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const accountService = createAccountService(axiosHttpClient);
      const accountResponse = await accountService.consultAgencyAndAccount(Number(agencyTransfer),
        Number(accountTransfer)
      );
      console.log("Conta e agência válidas:", accountResponse);
      const transferService = createTransferService(axiosHttpClient);
      const transferResponse = await transferService.transfer({
        value: Number(amount),
        agency: Number(agencyTransfer),
        account: Number(accountTransfer),
      });

      const now = new Date();
      setReceiptData({
        newBalance: transferResponse.value,
        status: transferResponse.status,
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        agency: agencyTransfer,
        account: accountTransfer,
        amount,
        sourceAccount: account,
        sourceAgency: agency,        
      });
      setIsModalOpen(true);
    } catch (error: any) {
      console.error(
        "Erro:",
        error.response?.data?.message || "Erro ao validar conta ou transferir"
      );
      setIsError(true);
    }
  };

  return (
    <>
    <ErrorModal isOpen={isError} message="Erro ao validar conta ou transferir" onClose={() => setIsError(false)} />
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
          <input type="text" id="agency" className={styles.input} value={agencyTransfer}
            onChange={(e) => setAgencyTransfer(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="account" className={styles.label}>Conta</label>
          <input type="text" id="account" className={styles.input} value={accountTransfer}
            onChange={(e) => setAccountTransfer(e.target.value)} />
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
      <ReceiptDrawer
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        receiptData={receiptData}
      />
    </div>
    </>
  );
}