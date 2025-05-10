import styles from './App.module.css';
import BalanceCard from './components/balanceCard/BalanceCard';
import Sidebar from './components/sideBar/SideBar';
import Tabs from './components/tabs/Tabs';
import TransferForm from './components/transferForm/TransferForm';
import WelcomeSection from './components/welcomeSection/WelcomeSection';
import { BalanceProvider } from './context/BalanceContext';
import { useTabContext } from './context/TabContext';
import { TransferProvider } from './context/TransferContext';

export default function App() {
  const { activeTab } = useTabContext();
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()} às ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Tabs />

        {activeTab === 'saldo' && (
          <BalanceProvider>
            <WelcomeSection title="Bom dia, {Nome}" subtitle="Veja como anda a saúde da sua conta bancária" />
            <BalanceCard formattedDate={formattedDate} />
          </BalanceProvider>
        )}

        {activeTab === 'transferir' && (
          <>
            <WelcomeSection title="Área de transferência" subtitle="Preencha os dados para realizar sua transferência entre contas." />
            <div className={styles.flexContainer}>
              <TransferProvider>
                <TransferForm/>
              </TransferProvider>
              <BalanceProvider>
                <BalanceCard formattedDate={formattedDate} />
              </BalanceProvider>
            </div>
          </>
        )}
      </div>
    </div>
  );
}