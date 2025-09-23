import type { ReactNode } from 'react';

export default function InteractiveCard({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-gray-20o0 p-4">{children}</div>;
}
