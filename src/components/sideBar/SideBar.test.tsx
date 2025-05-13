import { render, screen } from '@testing-library/react';
import Sidebar from './SideBar';

describe('Sidebar', () => {
  test('renderiza corretamente a logo, o nome e o CNPJ da empresa', () => {
    render(<Sidebar />);

    expect(screen.getByText('TechSolutions LTDA')).toBeInTheDocument();
    
    expect(screen.getByText('CNPJ: 12.770.589/0001-91')).toBeInTheDocument();

    expect(screen.getByTestId('company-icon')).toBeInTheDocument();
  });

  test('renderiza itens de navegação corretamente', () => {
    render(<Sidebar />);

    expect(screen.getByText('Extrato')).toBeInTheDocument();
    expect(screen.getByText('Transferências')).toBeInTheDocument();
    expect(screen.getByText('Pagamentos')).toBeInTheDocument();
    expect(screen.getByText('Cobrança')).toBeInTheDocument();
  });

  test('renderiza os ícones corretos na navegação', () => {
    render(<Sidebar />);

    expect(screen.getByTestId('document-icon')).toBeInTheDocument();
    expect(screen.getByTestId('increasing-icon')).toBeInTheDocument();
    expect(screen.getByTestId('accounting-dollar-icon')).toBeInTheDocument();
    expect(screen.getByTestId('move-up-down-icon')).toBeInTheDocument();
  });
});