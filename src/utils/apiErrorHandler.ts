import { toast } from "@/hooks/use-toast";

export const showApiError = (error: any, fallbackMessage?: string) => {
  const message = error?.message || fallbackMessage || "An unexpected error occurred";
  toast({
    title: "Error",
    description: message,
    variant: "destructive",
  });
};

export const handleApiError = (error: any): string => {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  if (error?.message) {
    return error.message;
  }
  return "An unexpected error occurred";
};

export const isNetworkError = (error: any): boolean => {
  return error?.name === "TypeError" || error?.code === "NETWORK_ERROR";
};

export const isTimeoutError = (error: any): boolean => {
  return error?.name === "AbortError" || error?.code === "TIMEOUT";
};