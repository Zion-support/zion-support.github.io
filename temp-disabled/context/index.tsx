import React from 'react';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>;
}

export function MessagingProvider({ children }: { children: React.ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>;
}

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>;
}

export function RequestQuoteWizardProvider({ children }: { children: React.ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>;
}

export function useRequestQuoteWizard() {
  return { step: 0 } as const;
}

export { ViewModeProvider, useViewMode } from './ViewModeContext';