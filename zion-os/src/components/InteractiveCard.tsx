type Props = { title?: string; description?: string };

export default function InteractiveCard({ title = 'Card', description = '...' }: Props) {
	return (
		<div className="p-4 rounded-lg border border-white/10">
			<h3 className="font-semibold mb-1">{title}</h3>
			<p className="text-sm opacity-70">{description}</p>
		</div>
	);
}
