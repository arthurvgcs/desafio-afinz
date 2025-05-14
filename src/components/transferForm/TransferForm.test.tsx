import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { BalanceProvider } from "../../context/BalanceContext";
import { TransferProvider } from "../../context/TransferContext";
import TransferForm from "./TransferForm";

jest.mock("../../service/axiosHttpClient", () => ({
  get: jest.fn(),
  post: jest.fn(),
}));

jest.mock("../../service/accountService", () => ({
  createAccountService: () => ({
    consultAgencyAndAccount: jest.fn().mockResolvedValue({}),
  }),
}));

jest.mock("../../service/transferService", () => ({
  createTransferService: () => ({
    transfer: jest.fn().mockResolvedValue({ status: "APPROVED" }),
  }),
}));

const renderWithContexts = (ui: React.ReactElement) => {
  return render(
    <BalanceProvider>
      <TransferProvider>{ui}</TransferProvider>
    </BalanceProvider>
  );
};

describe("TransferForm", () => {
  test("deve renderizar o formulário corretamente", () => {
    renderWithContexts(<TransferForm />);
    expect(screen.getByLabelText(/Agência/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Conta/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Valor/i)).toBeInTheDocument();
    expect(screen.getByText(/Transferir/i)).toBeDisabled();
  });

  test("deve validar os campos de agência e conta", () => {
    renderWithContexts(<TransferForm />);
    const agenciaInput = screen.getByLabelText(/Agência/i);
    const contaInput = screen.getByLabelText(/Conta/i);

    fireEvent.change(agenciaInput, { target: { value: "12" } });
    expect(
      screen.getByText(/A agência deve ter exatamente 4 dígitos/i)
    ).toBeInTheDocument();

    fireEvent.change(contaInput, { target: { value: "123" } });
    expect(
      screen.getByText(/A conta deve ter 4 ou 5 dígitos/i)
    ).toBeInTheDocument();
  });

  test("deve validar o campo de valor", () => {
    renderWithContexts(<TransferForm />);
    const valorInput = screen.getByLabelText(/Valor/i);

    fireEvent.change(valorInput, { target: { value: "R$ 2.000,00" } });
    expect(
      screen.getByText(/Valor maior que o saldo disponível/i)
    ).toBeInTheDocument();
  });

  test("deve permitir submissão com dados válidos", async () => {
    renderWithContexts(<TransferForm />);
    const agenciaInput = screen.getByLabelText(/Agência/i);
    const contaInput = screen.getByLabelText(/Conta/i);
    const valorInput = screen.getByLabelText(/Valor/i);
    const botaoTransferir = screen.getByText(/Transferir/i);

    fireEvent.change(agenciaInput, { target: { value: "1234" } });
    fireEvent.change(contaInput, { target: { value: "56789" } });
    fireEvent.change(valorInput, { target: { value: "50000" } });

    fireEvent.click(botaoTransferir);

    await waitFor(() => {
      expect(screen.getByText(/Transferir/)).toBeDisabled();
    });
  });
});
