import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function AppButton({ children, ...rest }: Props) {
  return (
    <button {...rest} className={`px-4 py-2 rounded bg-blue-600 text-white ${rest.className ?? ''}`.trim()}>
      {children}
    </button>
  );
}
