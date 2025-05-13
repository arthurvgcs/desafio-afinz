import type { ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useFetch } from "../hooks/useFetch";
import { axiosHttpClient } from "../service/axiosHttpClient";
import { getBalanceService } from "../service/balanceService";
import { getProfileService } from "../service/profileService";

interface BalanceContextType {
  balanceVisible: boolean;
  name: string;
  agency: number;
  account: number;
  balance: number;
  toggleBalanceVisibility: () => void;
  setBalance: (value: number) => void;
  loadingBalance: boolean;
  loadingProfile: boolean;
  errorBalance: string | null;
  errorProfile: string | null;
}

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export const BalanceProvider = ({ children }: { children: ReactNode }) => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [name, setName] = useState("");
  const [agency, setAgency] = useState(0);
  const [account, setAccount] = useState(0);
  const [balance, setBalance] = useState(0);

  const toggleBalanceVisibility = () => setBalanceVisible(!balanceVisible);

  const getProfile = useCallback(
    () => getProfileService(axiosHttpClient).getProfile(),
    []
  );

  const getBalance = useCallback(
    () => getBalanceService(axiosHttpClient).getBalance(),
    []
  );

  const {
    data: profile,
    loading: loadingProfile,
    error: errorProfile,
  } = useFetch(getProfile);

  const {
    data: balanceResponse,
    loading: loadingBalance,
    error: errorBalance,
  } = useFetch(getBalance);

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setAgency(profile.agency);
      setAccount(profile.account);
    }
  }, [profile]);

  useEffect(() => {
    if (balanceResponse) {
      setBalance(balanceResponse.balance);
    }
  }, [balanceResponse]);

  return (
    <BalanceContext.Provider
      value={{
        balanceVisible,
        toggleBalanceVisibility,
        name,
        agency,
        account,
        balance,
        setBalance,
        loadingBalance,
        loadingProfile,
        errorBalance,
        errorProfile,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalanceContext = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error(
      "useBalanceContext deve ser usado dentro de um BalanceProvider"
    );
  }
  return context;
};
