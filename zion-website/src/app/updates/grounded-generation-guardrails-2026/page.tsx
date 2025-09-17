import React from 'react'

export default function GroundedGenerationGuardrails2026Page() {
    return (
        <div className="bg-black min-h-screen">
            <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
                <p className="text-sm text-blue-300">Launch • 2025-09-16</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Grounded Generation Guardrails (2026)
                </h1>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                    Reduce hallucinations in production using retrieval, constraints, and objective eval gates.
                </p>
                <div className="mt-8 prose prose-invert prose-lg max-w-none">
                    <h2>What’s inside</h2>
                    <ul>
                        <li>Retrieval+quoting with citation thresholds</li>
                        <li>Schema and tool constraints</li>
                        <li>Live hallucination scorecards and gates</li>
                    </ul>
                    <p className="mt-6">
                        <a href="/updates/grounded-generation-blueprint-2026" className="text-blue-400">Blueprint details →</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
