import { useBalanceContext } from "../../context/BalanceContext";
import EyeIcon from "../../icons/EyeIcon";
import EyeOffIcon from "../../icons/EyeOffIcon";
import Spinner from "../../icons/Spinner";
import { formatCurrencyFromCents } from "../../utils/formatCurrency";
import styles from "./BalanceCard.module.css";

interface Props {
  formattedDate: string;
  isBalancePage?: boolean;
}

export default function BalanceCard({ formattedDate, isBalancePage }: Props) {
  const {
    balanceVisible,
    agency,
    account,
    balance,
    toggleBalanceVisibility,
    loadingBalance,
    loadingProfile,
    errorBalance,
    errorProfile,
  } = useBalanceContext();

  const renderBalance = () => {
    if (loadingBalance)
      return (
        <div className={styles.balanceLoading}>
          <Spinner size={40} color="#00C5CB" />
        </div>
      );
    if (errorBalance)
      return <div className={styles.balanceError}>{errorBalance}</div>;

    return (
      <>
        <div className={styles.balanceAmount} data-testid="balance-value">
          {balanceVisible ? (
            formatCurrencyFromCents(balance)
          ) : (
            <div className={styles.hiddenBalance} data-testid="hidden-balance" />
          )}
        </div>
        <div className={styles.balanceUpdateInfo}>
          Atualizado em: {formattedDate}
        </div>
      </>
    );
  };

  const renderAccountInfo = () => {
    if (!isBalancePage) return null;

    if (loadingProfile)
      return (
        <div className={styles.accountLoading}>
          <Spinner size={40} color="#00C5CB" />
        </div>
      );
    if (errorProfile)
      return <div className={styles.accountError}>{errorProfile}</div>;

    return (
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
    );
  };

  return (
    <div className={styles.balanceCard}>
      <div className={styles.balanceHeader}>
        <span className={styles.balanceLabel}>Saldo em conta</span>
        <button
          className={styles.visibilityToggle}
          onClick={toggleBalanceVisibility}
        >
          {balanceVisible ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
        </button>
      </div>

      {renderBalance()}
      {renderAccountInfo()}
    </div>
  );
}
