import type { HttpClient } from "../httpClient";

interface TransferPayload {
  value: number;
  agency: number;
  account: number;
}

type TransferResponse = {
  status: "APPROVED" | "PROCESSING";
  dateTime: string;
  to: {
    agency: number;
    account: number;
  };
  value: number;
}

export const createTransferService = (http: HttpClient) => ({
  transfer: (payload: TransferPayload) => http.post<TransferResponse>("/transfer", payload),
});