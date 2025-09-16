"use client"
export default function SecurityCopilotLaunchPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <div className="mx-auto lg:text-left">
          <h1 className="text-base font-semibold leading-7 text-blue-400">Launch</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Autonomous Security Copilot v1.0
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Proactive threat modeling, policy‑aware detections, and incident evidence bundles for AI systems.
            The Security Copilot continuously evaluates behaviors, enforces guardrails, and generates signed,
            audit‑ready evidence to accelerate investigations and compliance.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <a href="/updates/canary-ai-evals-rollouts" className="rounded-xl bg-white/5 p-5 text-blue-300 hover:bg-white/10 transition">
            Learn: Canary AI Evals Rollouts →
          </a>
          <a href="/updates/agent-risk-metrics-2026" className="rounded-xl bg-white/5 p-5 text-blue-300 hover:bg-white/10 transition">
            Read: Agent Risk Metrics 2026 →
          </a>
        </div>
      </div>
    </div>
  )
}

