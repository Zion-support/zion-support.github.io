
export default function ApiHubPage() {
	return (
		<>
			<Head>
				<title>API | Zion Tech Group</title>
				<meta name="description" content="Zion Tech Group API hub and documentation." />
			</Head>
			<Layout>
				<section className="min-h-[60vh] px-4 py-24">
					<h1 className="text-5xl font-bold mb-4">API</h1>
					<p className="text-gray-300 mb-6">Access our API documentation and developer resources.</p>
					<Link className="text-cyan-300 underline" href="/api-documentation">Go to API Documentation</Link>
				</section>
			</Layout>
		</>
}