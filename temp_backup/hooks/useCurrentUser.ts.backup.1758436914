import useSWR from 'swr';

export default function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/user');
  
  return {
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate,
  };
}