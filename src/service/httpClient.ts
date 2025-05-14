export interface HttpClient {
  get<T = unknown>(url: string, config?: Record<string, unknown>): Promise<T>;
  post<T = unknown>(
    url: string,
    data?: unknown,
    config?: Record<string, unknown>
  ): Promise<T>;
  put<T = unknown>(
    url: string,
    data?: unknown,
    config?: Record<string, unknown>
  ): Promise<T>;
  delete<T = unknown>(
    url: string,
    config?: Record<string, unknown>
  ): Promise<T>;
}
