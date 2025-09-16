"use client"
export default function ToolUseGuardrailsGuidePage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <div className="mx-auto lg:text-left">
          <h1 className="text-base font-semibold leading-7 text-blue-400">Guide</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Production Guardrails for Tool Use (2026)
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Design runtime policies, sandboxing, and least‑privilege adapters for safe tool use.
            Wire live evaluation gates, shadow testing, and abort switches into CI/CD and runtime to
            detect regressions and prevent incidents.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <a href="/updates/secure-agent-operations-blueprint-2026" className="rounded-xl bg-white/5 p-5 text-blue-300 hover:bg-white/10 transition">
            Blueprint: Secure Agent Ops 2026 →
          </a>
          <a href="/blog/ai-2026-operationalizing-live-evals-in-production" className="rounded-xl bg-white/5 p-5 text-blue-300 hover:bg-white/10 transition">
            Guide: Operationalizing Live Evals →
          </a>
        </div>
      </div>
    </div>
  )
}

