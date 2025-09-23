import type { ReactNode } from 'react';

export default function InteractiveCard({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-gray-200 p-4">{children}</div>;
}
type Props = { title?: string; description?: string };

export default function InteractiveCard({ title = 'Card', description = '...' }: Props) {
	return (
		<div className="p-4 rounded-lg border border-white/10">
			<h3 className="font-semibold mb-1">{title}</h3>
			<p className="text-sm opacity-70">{description}</p>
		</div>
	);
}
