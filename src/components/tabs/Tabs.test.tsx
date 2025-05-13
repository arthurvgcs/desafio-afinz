import { fireEvent, render, screen } from '@testing-library/react';
import { TabProvider } from '../../context/TabContext';
import Tabs from './Tabs';

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