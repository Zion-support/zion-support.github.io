import React from 'react'

export default function CanaryAndShadowTestingForAgents2026Page() {
    return (
        <div className="bg-black min-h-screen">
            <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
                <p className="text-sm text-blue-300">Field Guide • 2025-09-16</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Canary + Shadow Testing for Agents (2026)
                </h1>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                    Incremental rollout patterns with objective gates to de-risk production launches.
                </p>
                <div className="mt-8 prose prose-invert prose-lg max-w-none">
                    <h2>Key patterns</h2>
                    <ul>
                        <li>Shadow runs with evidence capture prior to canaries</li>
                        <li>Metric gates and rollback triggers</li>
                        <li>Gradual traffic ramp with budget controls</li>
                    </ul>
                    <p className="mt-6">
                        <a href="/updates/evals-in-prod-control-plane-2026" className="text-blue-400">See the control plane →</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

