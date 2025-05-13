import { fireEvent, render, screen } from '@testing-library/react';
import ReceiptModal from './ReceiptDrawer';

describe('ReceiptModal', () => {
  const mockOnClose = jest.fn();

  const receiptData = {
    newBalance: '100000',
    status: 'APPROVED',
    date: '01/01/2025',
    time: '12:00',
    agency: '1234',
    account: '56789-0',
    amount: '50000',
    sourceAccount: '98765-4',
    sourceAgency: '4321',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('não deve renderizar se isOpen for false', () => {
    const { container } = render(
      <ReceiptModal isOpen={false} onClose={mockOnClose} receiptData={receiptData} />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('deve renderizar corretamente com os dados do comprovante', () => {
    render(
      <ReceiptModal isOpen={true} onClose={mockOnClose} receiptData={receiptData} />
    );

    expect(screen.getByText('Transferência realizada')).toBeInTheDocument();
    expect(screen.getByText('Novo Saldo')).toBeInTheDocument();
    expect(screen.getByText(/1.000,00/)).toBeInTheDocument();
    expect(screen.getByText(`${receiptData.date} - ${receiptData.time}`)).toBeInTheDocument();
    expect(screen.getByText(receiptData.agency)).toBeInTheDocument();
    expect(screen.getByText(receiptData.account)).toBeInTheDocument();
    expect(screen.getByText(/500,00/)).toBeInTheDocument();
    expect(screen.getByText(receiptData.sourceAccount)).toBeInTheDocument();
    expect(screen.getByText(receiptData.sourceAgency)).toBeInTheDocument();
  });

  it('deve exibir "Transferência em processamento" se status for diferente de APPROVED', () => {
    render(
      <ReceiptModal
        isOpen={true}
        onClose={mockOnClose}
        receiptData={{ ...receiptData, status: 'PROCESSING' }}
      />
    );

    expect(screen.getByText('Transferência em processamento')).toBeInTheDocument();
  });

  it('deve chamar onClose ao clicar no botão de fechar', () => {
    render(
      <ReceiptModal isOpen={true} onClose={mockOnClose} receiptData={receiptData} />
    );

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});