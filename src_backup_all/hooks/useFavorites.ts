import { useMemo } from 'react';

export interface FavoriteItem {
  item_id: string;
  type?: string;
}

export function useFavorites() {
  const favorites = useMemo<FavoriteItem[]>(() => [], []);
  return { favorites };
}

export default useFavorites;

