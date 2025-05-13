import { fireEvent, render, screen } from '@testing-library/react';
import { useTransferContext } from '../../context/TransferContext';
import ErrorModal from '../error/ErrorModal';

jest.mock('../../context/TransferContext');

describe('ErrorModal', () => {
  const mockOnClose = jest.fn();

  const mockUseTransferContext = useTransferContext as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('não deve renderizar o modal se isOpen for false', () => {
    mockUseTransferContext.mockReturnValue({ errorMessage: 'Erro de teste' });

    const { container } = render(<ErrorModal isOpen={false} onClose={mockOnClose} />);
    
    expect(container).toBeEmptyDOMElement();
  });

  it('deve exibir o modal com a mensagem de erro quando isOpen for true', () => {
    mockUseTransferContext.mockReturnValue({ errorMessage: 'Erro de teste' });

    render(<ErrorModal isOpen={true} onClose={mockOnClose} />);
    
    expect(screen.getByText('Erro')).toBeInTheDocument();
    expect(screen.getByText('Erro de teste')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /fechar/i })).toBeInTheDocument();
  });

  it('deve chamar a função onClose ao clicar no botão "Fechar"', () => {
    mockUseTransferContext.mockReturnValue({ errorMessage: 'Erro de teste' });

    render(<ErrorModal isOpen={true} onClose={mockOnClose} />);
    
    fireEvent.click(screen.getByRole('button', { name: /fechar/i }));
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});