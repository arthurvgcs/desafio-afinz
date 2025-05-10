import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

interface BalanceContextType {
  balanceVisible: boolean;
  toggleBalanceVisibility: () => void;
}

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export const BalanceProvider = ({ children }: { children: ReactNode }) => {
  const [balanceVisible, setBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => setBalanceVisible(!balanceVisible);

  return (
    <BalanceContext.Provider value={{ balanceVisible, toggleBalanceVisibility }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalanceContext = () => {
  const context = useContext(BalanceContext);
  if (!context) throw new Error('O useBalanceContext deve ser usado dentro de um BalanceProvider');
  return context;
};