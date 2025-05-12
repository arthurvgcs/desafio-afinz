import type { HttpClient } from "../httpClient";

type responseProfile = {
  name: string;
  agency: number;
  account: number;
};

export const getProfileService = (http: HttpClient) => ({
  getProfile: () => http.get<responseProfile>("/profile"),
});