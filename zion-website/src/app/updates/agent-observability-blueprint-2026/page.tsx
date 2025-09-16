// @ts-nocheck
export const metadata = {
    title: 'Agent Observability Blueprint (2026) — Guide',
    description: 'Traces, metrics, logs, eval overlays, and evidence bundling patterns for reliable agent systems.',
}

export default function Page() {
    return (
        <main className="bg-black min-h-screen">
            <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 text-gray-200">
                <p className="text-sm text-blue-300">Guide • 2025-09-16</p>
                <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Agent Observability Blueprint (2026)</h1>
                <p className="mt-6 text-lg text-gray-300">
                    A practical blueprint for end-to-end observability in production agent systems. Covering traces,
                    metrics, structured logs, eval overlays, and evidence bundling to speed incident analysis and
                    reduce mean time to resolution.
                </p>
                <section className="mt-10 space-y-6">
                    <h2 className="text-2xl font-semibold text-white">What you will learn</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Designing agent traces with tool/action spans and error taxonomies</li>
                        <li>Critical SLIs and SLOs for agent latency, quality, and stability</li>
                        <li>Live eval overlays for faster debugging and safe rollouts</li>
                        <li>Evidence bundles for reproducible incident investigations</li>
                        <li>Dashboards and alerts that matter for real-time agents</li>
                    </ul>
                </section>
                <div className="mt-10">
                    <a href="/updates" className="text-blue-400 hover:text-blue-300">Back to updates →</a>
                </div>
            </div>
        </main>
    )
}

