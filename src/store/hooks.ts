// Minimal no-op implementations to satisfy imports in components that expect Redux hooks
import React from 'react';

export function useAppDispatch() {
  return ((action: any) => {
    console.log('Dispatch action:', action);
  }) as unknown as (action: any) => void;
}

export function useAppSelector<TSelected>(_selector: (state: unknown) => TSelected): TSelected {
  return undefined as unknown as TSelected;
}

export function getApiUrl() {
  return '';
}

