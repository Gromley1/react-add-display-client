import { useEffect, useState, useCallback } from "react";

type Error = Response | string | null | undefined;

interface ApiResponse<T> {
  data: T | null;
  error: Error;
  loading: boolean;
}

const DEFAULT_OPTIONS: RequestInit = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function useFetch<T>(
  url: string,
  options: RequestInit = DEFAULT_OPTIONS
): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(url, { headers: options.headers });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const json = await response.json();
      setData(json);
      setError(null);
    } catch (error) {
      const errorResponse = error as Response;
      setError(errorResponse.statusText);
    }

    setLoading(false);
  }, [url, options.headers]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading };
}
