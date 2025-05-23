import { useTabContext } from '../../context/TabContext';
import styles from './Tabs.module.css';

export default function Tabs() {
  const { activeTab, setActiveTab } = useTabContext();

  return (
    <div className={styles.tabs}>
      <div className={`${styles.tab} ${activeTab === 'saldo' ? styles.activeTab : ''}`} onClick={() => setActiveTab('saldo')}>
        Saldo
      </div>
      <div className={`${styles.tab} ${activeTab === 'transferir' ? styles.activeTab : ''}`} onClick={() => setActiveTab('transferir')}>
        Transferir
      </div>
    </div>
  );
}