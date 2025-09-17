export default function APIPage() {
	return (
		<div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold mb-4">API</h1>
				<p className="text-white/70 mb-6">Programmatic access to Zion OS services.</p>
				<a href="/docs/api/rest" className="btn-primary">View REST API Docs</a>
			</div>
		</div>
	);
}