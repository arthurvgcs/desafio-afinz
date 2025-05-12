import type { HttpClient } from "../httpClient";


export const createAccountService = (http: HttpClient) => ({
  consultAgencyAndAccount: (agency: number, account: number) =>
    http.get(`/consult-agency-account/${agency}/${account}`),
});