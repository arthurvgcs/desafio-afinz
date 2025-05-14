import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

export type ReceiptData = {
  newBalance: string | number;
  status: string;
  date: string;
  time: string;
  agency: string;
  account: string;
  amount: string | number;
  sourceAccount: string | number;
  sourceAgency: string | number;
};

interface TransferContextType {
  transferType: string;
  setTransferType: (value: string) => void;
  agencyTransfer: string;
  setAgencyTransfer: (value: string) => void;
  accountTransfer: string;
  setAccountTransfer: (value: string) => void;
  amount: number;
  setAmount: (value: number) => void;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  receiptData: ReceiptData;
  setReceiptData: (value: ReceiptData) => void;
  isError: boolean;
  setIsError: (value: boolean) => void;
  agencyError: string;
  setAgencyError: (value: string) => void;
  accountError: string;
  setAccountError: (value: string) => void;
  amountError: string;
  setAmountError: (value: string) => void;
  errorMessage: string;
  setErrorMessage: (value: string) => void;
}

const TransferContext = createContext<TransferContextType | undefined>(
  undefined
);

export const TransferProvider = ({ children }: { children: ReactNode }) => {
  const [transferType, setTransferType] = useState(
    "TED (Transferência entre contas)"
  );
  const [agencyTransfer, setAgencyTransfer] = useState("");
  const [accountTransfer, setAccountTransfer] = useState("");
  const [amount, setAmount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [receiptData, setReceiptData] = useState<ReceiptData>(
    {} as ReceiptData
  );
  const [agencyError, setAgencyError] = useState("");
  const [accountError, setAccountError] = useState("");
  const [amountError, setAmountError] = useState("");

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
        isError,
        setIsError,
        agencyError,
        setAgencyError,
        accountError,
        setAccountError,
        amountError,
        setAmountError,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </TransferContext.Provider>
  );
};

export const useTransferContext = () => {
  const context = useContext(TransferContext);
  if (!context)
    throw new Error(
      "O useTransferContext deve ser usado dentro de um TransferProvider"
    );
  return context;
};
