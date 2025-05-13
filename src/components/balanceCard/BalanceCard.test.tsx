import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import { useBalanceContext } from "../../context/BalanceContext";
import BalanceCard from "./BalanceCard";

// Mock do Contexto
jest.mock("../../context/BalanceContext", () => ({
  useBalanceContext: jest.fn(),
}));

describe('BalanceCard', () => {
  const mockToggleVisibility = jest.fn();

  beforeEach(() => {
    (useBalanceContext as jest.Mock).mockReturnValue({
      balanceVisible: true,
      balance: 100000, // R$ 1.000,00
      agency: '1234',
      account: '56789-0',
      formattedDate: '01/01/2025',
      loadingBalance: false,
      loadingProfile: false,
      errorBalance: null,
      errorProfile: null,
      toggleBalanceVisibility: mockToggleVisibility,
    });
  });

  it('deve exibir o saldo corretamente quando visível', () => {
    render(<BalanceCard formattedDate="01/01/2025" isBalancePage={true} />);

    expect(screen.getByText('R$ 1.000,00')).toBeInTheDocument();
  });

  // DANDO ERRO
  it('deve ocultar o saldo quando clicado no ícone de olho', () => {
    (useBalanceContext as jest.Mock).mockReturnValue({
      ...useBalanceContext(),
      balanceVisible: false,
    });

    render(<BalanceCard formattedDate="01/01/2025" isBalancePage={true} />);

    const hiddenBalance = screen.getByTestId("hidden-balance");
    expect(hiddenBalance).toBeInTheDocument();

    const eyeIcon = screen.getByRole("button");
    fireEvent.click(eyeIcon);

    const balanceValue = screen.getByTestId('balance-value');
    expect(balanceValue.textContent?.trim()).toBe('R$ 1.000,00');
  });

  it('deve exibir o texto de "Saldo em conta" corretamente', () => {
    render(<BalanceCard formattedDate="01/01/2025" isBalancePage={true} />);

    expect(screen.getByText('Saldo em conta')).toBeInTheDocument();
  });

  it('deve exibir as informações da conta (agência e conta) quando a página for de saldo', () => {
    render(<BalanceCard formattedDate="01/01/2025" isBalancePage={true} />);

    expect(screen.getByText('Agência')).toBeInTheDocument();
    expect(screen.getByText('1234')).toBeInTheDocument();
    expect(screen.getByText('Conta')).toBeInTheDocument();
    expect(screen.getByText('56789-0')).toBeInTheDocument();
  });

  it('não deve exibir as informações da conta quando a página não for de saldo', () => {
    render(<BalanceCard formattedDate="01/01/2025" isBalancePage={false} />);

    expect(screen.queryByText('Agência')).not.toBeInTheDocument();
    expect(screen.queryByText('Conta')).not.toBeInTheDocument();
  });

  it('deve exibir o ícone de carregamento se estiver carregando o saldo', () => {
    (useBalanceContext as jest.Mock).mockReturnValue({
      ...useBalanceContext(),
      loadingBalance: true,
    });

    render(<BalanceCard formattedDate="01/01/2025" isBalancePage={true} />);

    const spinner = screen.getByTestId('spinner-icon');
    expect(spinner).toBeInTheDocument();
  });

  it('deve exibir a mensagem de erro se ocorrer um erro no saldo', () => {
    (useBalanceContext as jest.Mock).mockReturnValue({
      ...useBalanceContext(),
      errorBalance: 'Erro ao carregar saldo',
    });

    render(<BalanceCard formattedDate="01/01/2025" isBalancePage={true} />);

    expect(screen.getByText('Erro ao carregar saldo')).toBeInTheDocument();
  });
});