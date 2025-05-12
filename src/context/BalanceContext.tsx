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
}

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export const BalanceProvider = ({ children }: { children: ReactNode }) => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [balance, setBalance] = useState(0);
  const [name, setName] = useState('');
  const [agency, setAgency] = useState(0);
  const [account, setAccount] = useState(0);

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
        const profile = await getProfileInformation();
        setName(profile.name);
        setAgency(profile.agency);
        setAccount(profile.account);
      } catch (error) {
        console.error('Erro ao buscar perfil:', error);
      }
    }
    fetchProfile();
    async function fetchBalance() {
      try {
        const balance = await getBalanceInformation();
        setBalance(balance.balance);
      } catch (error) {
        console.error('Erro ao buscar saldo:', error);
      }
    }
    fetchBalance();
  }, []);

  const toggleBalanceVisibility = () => setBalanceVisible(!balanceVisible);

  return (
    <BalanceContext.Provider value={{ balanceVisible, agency, name, balance, account, toggleBalanceVisibility }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalanceContext = () => {
  const context = useContext(BalanceContext);
  if (!context) throw new Error('O useBalanceContext deve ser usado dentro de um BalanceProvider');
  return context;
};