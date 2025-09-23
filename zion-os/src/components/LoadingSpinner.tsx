interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function LoadingSpinner({ size = 'md', text }: LoadingSpinnerProps) {
  const dimension = size === 'sm' ? 16 : size === 'lg' ? 40 : 24;
  return (
    <div className="flex items-center justify-center gap-3" role="status" aria-live="polite">
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 24 24"
        className="animate-spin text-gray-400"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
        <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" fill="none" />
      </svg>
      {text ? <span className="text-sm text-gray-500">{text}</span> : null}
    </div>
  );
}
export default function LoadingSpinner() {
	return (
		<div role="status" aria-live="polite" aria-busy="true">
			Loading...
		</div>
	);
}
