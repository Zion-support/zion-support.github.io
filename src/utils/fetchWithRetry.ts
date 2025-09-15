export const fetchWithRetry = async (
  url: string,
  options: RequestInit & FetchWithRetryOptions = {}
): Promise<Response> => {
      return response;
    } catch (error) {
      lastError = error as Error;
      
};

export default fetchWithRetry;