import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { axiosHttpClient } from '../service/axiosHttpClient';
import { getBalanceService } from '../service/balanceService';
import { getProfileService } from '../service/profileService';

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
  const [balance, setBalance] = useState(0);
  const [name, setName] = useState('');
  const [agency, setAgency] = useState(0);
  const [account, setAccount] = useState(0);
  const [loadingBalance, setLoadingBalance] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [errorBalance, setErrorBalance] = useState<string | null>(null);
  const [errorProfile, setErrorProfile] = useState<string | null>(null);

  const toggleBalanceVisibility = () => setBalanceVisible(!balanceVisible);

  async function getProfileInformation() {
    try {
      const response = await getProfileService(axiosHttpClient).getProfile();
      return response;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao obter perfil.');
    }
  }

  async function getBalanceInformation() {
    try {
      const response = await getBalanceService(axiosHttpClient).getBalance();
      return response;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao obter saldo.');
    }
  }

  useEffect(() => {
    async function fetchProfile() {
      try {
        setLoadingProfile(true);
        const profile = await getProfileInformation();
        setName(profile.name);
        setAgency(profile.agency);
        setAccount(profile.account);
      } catch (error: any) {
        if(error.response?.status === 500) {
          setErrorProfile('Erro interno do servidor, tente novamente mais tarde');
          return;
        }
        setErrorProfile(error.response?.data?.message || 'Erro ao buscar perfil.');
      } finally {
        setLoadingProfile(false);
      }
    }
    fetchProfile();
    async function fetchBalance() {
      try {
        setLoadingBalance(true);
        const balance = await getBalanceInformation();
        setBalance(balance.balance);
      } catch (error: any) {
        if(error.response?.status === 500) {
          setErrorBalance('Erro interno do servidor, tente novamente mais tarde');
          return;
        }
        setErrorBalance(error.response?.data?.message || 'Erro ao buscar saldo. Atualize a página para tentar novamente.');
      } finally {
        setLoadingBalance(false);
      }
    }
    fetchBalance();
  }, []);


  return (
    <BalanceContext.Provider value={{ balanceVisible, agency, name, balance, account, toggleBalanceVisibility, setBalance, loadingBalance, loadingProfile, errorBalance, errorProfile }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalanceContext = () => {
  const context = useContext(BalanceContext);
  if (!context) throw new Error('O useBalanceContext deve ser usado dentro de um BalanceProvider');
  return context;
};