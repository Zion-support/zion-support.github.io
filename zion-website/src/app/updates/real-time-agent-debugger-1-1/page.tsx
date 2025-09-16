import React from 'react'

export default function RealTimeAgentDebugger11() {
	return (
		<div className="bg-black min-h-screen">
			<div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
				<h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Real‑Time Agent Debugger v1.1</h1>
				<p className="mt-4 text-lg leading-8 text-gray-300">
					Live traces, tool snapshots, and policy violations surfaced in one console for faster incident triage.
				</p>
				<div className="mt-8 space-y-6 text-gray-300">
					<ul className="list-disc pl-6 space-y-2">
						<li>Unified timeline: prompts, tools, and outputs</li>
						<li>Policy violation overlays with remediation hints</li>
						<li>Streaming telemetry for latency and token spend</li>
						<li>Exportable traces for audits and postmortems</li>
					</ul>
					<p>Related: <a className="text-blue-400 underline" href="/updates/production-ready-agent-guardrails-1-0">Agent Guardrails v1.0</a></p>
				</div>
			</div>
		</div>
	)
}

"use client"
export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Launch: Realtime Agent Debugger v1.1</h1>
        <p className="mt-4 text-gray-300">Trace diffs, token timelines, and tool-call replay with evidence export. Faster triage for production agents.</p>
        <div className="mt-8 text-sm text-gray-400">Published: 2025-09-15 · Tag: Launch</div>
      </div>
    </div>
  )
}

