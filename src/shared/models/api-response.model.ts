export interface ApiResponse<T> {
  data: T;
  error: Error;
  loading: boolean;
}

export type Error = Response | string | null | undefined;
