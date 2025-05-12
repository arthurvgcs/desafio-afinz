import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

interface TransferContextType {
  transferType: string;
  setTransferType: (value: string) => void;
  agencyTransfer: string;
  setAgencyTransfer: (value: string) => void;
  accountTransfer: string;
  setAccountTransfer: (value: string) => void;
  amount: string;
  setAmount: (value: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  receiptData: any;
  setReceiptData: (value: any) => void;
}

const TransferContext = createContext<TransferContextType | undefined>(undefined);

export const TransferProvider = ({ children }: { children: ReactNode }) => {
  const [transferType, setTransferType] = useState('TED (Transferência entre contas)');
  const [agencyTransfer, setAgencyTransfer] = useState('');
  const [accountTransfer, setAccountTransfer] = useState('');
  const [amount, setAmount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [receiptData, setReceiptData] = useState<any>(null);

  return (
    <TransferContext.Provider
      value={{
        transferType,
        setTransferType,
        agencyTransfer,
        setAgencyTransfer,
        accountTransfer,
        setAccountTransfer,
        amount,
        setAmount,
        isModalOpen,
        setIsModalOpen,
        receiptData,
        setReceiptData,
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