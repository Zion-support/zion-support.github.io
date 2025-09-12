// Minimal no-op implementations to satisfy imports in components that expect Redux hooks
import React from 'react';

export function useAppDispatch() {
  return (() => {}) as unknown as () => void;
}

export function useAppSelector<TSelected>(_selector: (state: unknown) => TSelected): TSelected {
  return undefined as unknown as TSelected;
}

export function getApiUrl() {
  return '';
}

