import { useBalanceContext } from '../../context/BalanceContext';
import { useTransferContext } from '../../context/TransferContext';
import { createAccountService } from '../../service/accountService';
import { axiosHttpClient } from '../../service/axiosHttpClient';
import { createTransferService } from '../../service/transferService';
import { formatCurrencyFromCents } from '../../utils/formatCurrency';
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
    agencyError, setAgencyError,
    accountError, setAccountError,
    amountError, setAmountError,
    setErrorMessage,
  } = useTransferContext();
  const {
    agency,
    account,
    balance,
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
      setErrorMessage(
        error.response?.data?.message || "Erro ao validar conta ou transferir"
      );
      setIsError(true);
    }
  };

  const handleAgencyChange = (e:any) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setAgencyTransfer(value);
      if (value.length > 0 && value.length !== 4) {
        setAgencyError('A agência deve ter exatamente 4 dígitos');
      } else {
        setAgencyError('');
      }
    }
  };

  // Validate account input - only numbers and 4 or 5 digits
  const handleAccountChange = (e:any) => {
    const value = e.target.value;
    
    // Allow only numbers
    if (value === '' || /^\d+$/.test(value)) {
      setAccountTransfer(value);
      
      // Validate length
      if (value.length > 0 && (value.length < 4 || value.length > 5)) {
        setAccountError('A conta deve ter 4 ou 5 dígitos');
      } else {
        setAccountError('');
      }
    }
  };

  const handleAmountChange = (e:any) => {
    const rawValue = e.target.value.replace(/\D/g, ''); // remove tudo que não é número
    const numericValue = parseInt(rawValue || '0', 10);
    if(numericValue > balance) {
      setAmountError('Valor maior que o saldo disponível');
    } else {
      setAmountError('');
    }
    setAmount(numericValue);
  };

  const isFormValid = 
  /^\d{4}$/.test(agencyTransfer) &&
  /^\d{4,5}$/.test(accountTransfer) &&
  amount > 0 &&
  amount <= balance;

  return (
    <>
    <ErrorModal isOpen={isError} onClose={() => setIsError(false)} />
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
          <input type="text" id="agency" className={`${styles.input} ${agencyError ? styles.inputError : ''}`}value={agencyTransfer}
            onChange={handleAgencyChange} />
            {agencyError && <p className={styles.errorText}>{agencyError}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="account" className={styles.label}>Conta</label>
          <input type="text" id="account" className={`${styles.input} ${accountError ? styles.inputError : ''}`} value={accountTransfer}
            onChange={handleAccountChange} />
            {accountError && <p className={styles.errorText}>{accountError}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="amount" className={styles.label}>Valor</label>
          <input 
            type="text" 
            id="amount" 
            className={`${styles.input} ${amountError ? styles.inputError : ''}`}
            value={formatCurrencyFromCents(amount)}
            onChange={handleAmountChange}
          />
          {amountError && <p className={styles.errorText}>{amountError}</p>}
        </div>
        <div className={styles.formActions}>
          <button type="submit" className={styles.transferButton} disabled={!isFormValid}>Transferir</button>
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