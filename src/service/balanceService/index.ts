import type { HttpClient } from "../httpClient";

type responseBalance = {
  balance: number;
};

export const getBalanceService = (http: HttpClient) => ({
  getBalance: () => http.get<responseBalance>("/balance"),
});