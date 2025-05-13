import AccountingDollarIcon from '../../icons/AccountingDollarIcon';
import CompanyIcon from '../../icons/CompanyIcon';
import DocumentIcon from '../../icons/DocumentIcon';
import IncreasingIcon from '../../icons/IncreasingIcon';
import MoveUpDownIcon from '../../icons/MoveUpDownIcon';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <CompanyIcon />
        </div>
        <div className={styles.companyName}>TechSolutions LTDA</div>
        <div className={styles.cnpj}>CNPJ: 12.770.589/0001-91</div>
      </div>

      <div className={styles.navContainer}>
        <div className={styles.navLabel}>CONTA</div>
        <div className={styles.navItem}><DocumentIcon size={20} /> <span>Extrato</span></div>
        <div className={styles.navItem}><IncreasingIcon size={20} /> <span>Transferências</span></div>
        <div className={styles.navItem}><AccountingDollarIcon size={20} /> <span>Pagamentos</span></div>
        <div className={styles.navItem}><MoveUpDownIcon size={20} /> <span>Cobrança</span></div>
      </div>
    </div>
  );
}