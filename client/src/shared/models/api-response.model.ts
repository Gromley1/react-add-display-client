export interface ApiResponse<T> {
  data: T | null;
  error: Error;
  loading: boolean;
}

export type Error = Response | string | null | undefined;
