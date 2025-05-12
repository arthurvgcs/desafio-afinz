import type { HttpClient } from "../httpClient";

interface TransferPayload {
  value: number;
  agency: number;
  account: number;
}

export const createTransferService = (http: HttpClient) => ({
  transfer: (payload: TransferPayload) => http.post("/transfer", payload),
});