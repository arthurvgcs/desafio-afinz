import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";

export function useFetch<T>(asyncFunction: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await asyncFunction();
      setData(result);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        if (err?.response?.status === 500) {
          setError(
            "Erro interno do servidor. Atualize a página para tentar novamente."
          );
          return;
        }
        const message =
          err?.response?.data?.message || err?.message || "Erro desconhecido.";
        setError(message);
        return;
      }
      setError("Erro desconhecido. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
