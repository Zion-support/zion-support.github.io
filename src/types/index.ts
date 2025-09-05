export type User = {
  id: string;
  email: string;
  name: string;
};

export type ApiResponse<T> = {
  data: T;
  success: boolean;
  message?: string;
};