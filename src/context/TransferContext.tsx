import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

interface TransferContextType {
  transferType: string;
  setTransferType: (value: string) => void;
  agency: string;
  setAgency: (value: string) => void;
  account: string;
  setAccount: (value: string) => void;
  amount: string;
  setAmount: (value: string) => void;
}

const TransferContext = createContext<TransferContextType | undefined>(undefined);

export const TransferProvider = ({ children }: { children: ReactNode }) => {
  const [transferType, setTransferType] = useState('TED (Transferência entre contas)');
  const [agency, setAgency] = useState('');
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <TransferContext.Provider
      value={{
        transferType,
        setTransferType,
        agency,
        setAgency,
        account,
        setAccount,
        amount,
        setAmount,
      }}
    >
      {children}
    </TransferContext.Provider>
  );
};

export const useTransferContext = () => {
  const context = useContext(TransferContext);
  if (!context) throw new Error('O useTransferContext deve ser usado dentro de um TransferProvider');
  return context;
};