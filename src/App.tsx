import { useState } from 'react';
import styles from './App.module.css';
import BalanceCard from './components/balanceCard/BalanceCard';
import Sidebar from './components/sideBar/SideBar';
import Tabs from './components/tabs/Tabs';
import TransferForm from './components/transferForm/TransferForm';
import WelcomeSection from './components/welcomeSection/WelcomeSection';

export default function App() {
  const [transferType, setTransferType] = useState('TED (Transferência entre contas)');
  const [agency, setAgency] = useState('');
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('saldo');

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()} às ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;

  const toggleBalanceVisibility = () => setBalanceVisible(!balanceVisible);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'saldo' && (
          <>
            <WelcomeSection title="Bom dia, {Nome}" subtitle="Veja como anda a saúde da sua conta bancária" />
            <BalanceCard balanceVisible={balanceVisible} toggleBalanceVisibility={toggleBalanceVisibility} formattedDate={formattedDate} />
          </>
        )}

        {activeTab === 'transferir' && (
          <>
            <WelcomeSection title="Área de transferência" subtitle="Preencha os dados para realizar sua transferência entre contas." />
            <div className={styles.flexContainer}>
              <TransferForm
                transferType={transferType}
                setTransferType={setTransferType}
                agency={agency}
                setAgency={setAgency}
                account={account}
                setAccount={setAccount}
                amount={amount}
                setAmount={setAmount}
              />
              <BalanceCard balanceVisible={balanceVisible} toggleBalanceVisibility={toggleBalanceVisibility} formattedDate={formattedDate} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}