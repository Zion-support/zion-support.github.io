import React from 'react'

export default function ProductionEvidenceBundles2026Page() {
    return (
        <div className="bg-black min-h-screen">
            <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
                <p className="text-sm text-blue-300">Blueprint • 2025-09-16</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Production Evidence Bundles (2026)
                </h1>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                    Standardized artifacts for audits: inputs, outputs, policies, evals, and traces.
                </p>
                <div className="mt-8 prose prose-invert prose-lg max-w-none">
                    <h2>Overview</h2>
                    <p>
                        Evidence bundles capture end-to-end change context: policies, inputs/outputs, eval scores,
                        lineage, and trace excerpts. This blueprint outlines the reference structure, retention policy,
                        and verification workflow for auditor-ready exports.
                    </p>
                    <h3>Core components</h3>
                    <ul>
                        <li>Policy-as-code checks and exception tracking</li>
                        <li>Objective eval signals and thresholds</li>
                        <li>Signed manifests with provenance and timestamps</li>
                    </ul>
                    <p className="mt-6">
                        <a href="/contact" className="text-blue-400">Request a walkthrough →</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

