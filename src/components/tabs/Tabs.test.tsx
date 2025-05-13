import { fireEvent, render, screen } from '@testing-library/react';
import { TabProvider } from '../../context/TabContext'; // Altere o caminho conforme necessário
import Tabs from './Tabs'; // Altere o caminho conforme necessário

// Função para renderizar o componente com o contexto
const renderWithContext = () => {
  return render(
    <TabProvider>
      <Tabs />
    </TabProvider>
  );
};

describe('Tabs', () => {
  test('renderiza as tabs corretamente', () => {
    renderWithContext();
    expect(screen.getByText('Saldo')).toBeInTheDocument();
    expect(screen.getByText('Transferir')).toBeInTheDocument();
  });

  test('ativa a aba correta ao clicar', () => {
    renderWithContext();
    const saldoTab = screen.getByText('Saldo');
    const transferirTab = screen.getByText('Transferir');
    expect(saldoTab).toHaveClass('activeTab');
    expect(transferirTab).not.toHaveClass('activeTab');
    fireEvent.click(transferirTab);
    expect(transferirTab).toHaveClass('activeTab');
    expect(saldoTab).not.toHaveClass('activeTab');
  });
});