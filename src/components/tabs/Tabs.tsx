import styles from './Tabs.module.css';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className={styles.tabs}>
      <div className={`${styles.tab} ${activeTab === 'saldo' ? styles.activeTab : ''}`}
        onClick={() => setActiveTab('saldo')}>
        Saldo
      </div>
      <div className={`${styles.tab} ${activeTab === 'transferir' ? styles.activeTab : ''}`}
        onClick={() => setActiveTab('transferir')}>
        Transferir
      </div>
    </div>
  );
}