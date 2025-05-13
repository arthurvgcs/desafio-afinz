import { useBalanceContext } from '../../context/BalanceContext';
import EyeIcon from '../../icons/EyeIcon.tsx';
import EyeOffIcon from '../../icons/EyeOffIcon.tsx';
import { formatCurrencyFromCents } from '../../utils/formatCurrency.ts';
import styles from './BalanceCard.module.css';

interface Props {
  formattedDate: string;
  isBalancePage?: boolean;
}

export default function BalanceCard({ formattedDate, isBalancePage }: Props) {
  const { balanceVisible, agency, account, balance, toggleBalanceVisibility } = useBalanceContext();

  return (
    <div className={styles.balanceCard}>
      <div className={styles.balanceHeader}>
        <span className={styles.balanceLabel}>Saldo em conta</span>
        <button className={styles.visibilityToggle} onClick={toggleBalanceVisibility}>
          {balanceVisible ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
        </button>
      </div>
      <div className={styles.balanceAmount}>
        {balanceVisible ? formatCurrencyFromCents(balance) : <div className={styles.hiddenBalance}></div>}
      </div>
      <div className={styles.balanceUpdateInfo}>Atualizado em: {formattedDate}</div>
      {isBalancePage && (
      <div className={styles.accountInfo}>
        <div className={styles.agencyInfo}>
          <span className={styles.infoLabel}>Agência</span>
          <span className={styles.infoValue}>{agency}</span>
        </div>
        <div className={styles.agencyInfo}>
          <span className={styles.infoLabel}>Conta</span>
          <span className={styles.infoValue}>{account}</span>
        </div>
      </div>
      )}
    </div>
  );
}