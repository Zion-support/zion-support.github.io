import useSWR from 'swr';

export function useCurrentUser() {
  const { data, error, mutate } = useSWR('/api/user', async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  });

  return {
    user: data?.user || null,
    loading: !data && !error,
    error,
    mutate,
  };
}