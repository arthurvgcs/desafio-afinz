import { useState } from 'react';
import styles from './App.module.css';
import AccountingDollarIcon from './icons/AccountingDollarIcon.tsx';
import CompanyIcon from './icons/CompanyIcon.tsx';
import DocumentIcon from './icons/DocumentIcon.tsx';
import EyeIcon from './icons/EyeIcon.tsx';
import EyeOffIcon from './icons/EyeOffIcon.tsx';
import IncreasingIcon from './icons/IncreasingIcon.tsx';
import MoveUpDownIcon from './icons/MoveUpDownIcon.tsx';

export default function App() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('saldo');

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()} às ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;

  const toggleBalanceVisibility = () => {
    setBalanceVisible(!balanceVisible);
  };

  return (
    <div className={styles.container}>
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
          
          <div className={styles.navItem}>
            <DocumentIcon size={20} />
            <span>Extrato</span>
          </div>
          
          <div className={styles.navItem}>
            <IncreasingIcon size={20} />
            <span>Transferências</span>
          </div>
          
          <div className={styles.navItem}>
            <AccountingDollarIcon size={20} />
            <span>Pagamentos</span>
          </div>
          
          <div className={styles.navItem}>
            <MoveUpDownIcon size={20} />
            <span>Cobrança</span>
          </div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.tabs}>
          <div 
            className={`${styles.tab} ${activeTab === 'saldo' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('saldo')}
          >
            Saldo
          </div>
          <div 
            className={`${styles.tab} ${activeTab === 'transferir' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('transferir')}
          >
            Transferir
          </div>
        </div>
        <div className={styles.welcomeSection}>
          <h1 className={styles.greeting}>Bom dia, {'{Nome}'}</h1>
          <p className={styles.subGreeting}>Veja como anda a saúde da sua conta bancária</p>
        </div>
        <div className={styles.balanceCard}>
          <div className={styles.balanceHeader}>
            <span className={styles.balanceLabel}>Saldo em conta</span>
            <button className={styles.visibilityToggle} onClick={toggleBalanceVisibility}>
              {balanceVisible ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>
          <div className={styles.balanceAmount}>
            {balanceVisible ? 'R$ {VALOR}' : 'R$ ••••••'}
          </div>
          
          <div className={styles.balanceUpdateInfo}>
            Atualizado em: {formattedDate}
          </div>

          <div className={styles.accountInfo}>
            <div className={styles.agencyInfo}>
              <span className={styles.infoLabel}>Agência</span>
              <span className={styles.infoValue}>{'{Agência}'}</span>
            </div>
            <div className={styles.agencyInfo}>
              <span className={styles.infoLabel}>Conta</span>
              <span className={styles.infoValue}>{'{Agência}'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}