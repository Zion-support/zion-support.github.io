export default function LLMGuardrailPatterns2026() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Guide</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">LLM Guardrail Patterns (2026)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Practical guardrail patterns for safe, reliable AI systems: policy checks in CI/CD and runtime,
          sandboxed tool use, content filters, and live eval gates with audit evidence.
        </p>
        <div className="mt-8 space-y-6 text-gray-300">
          <h2 className="text-2xl font-semibold text-white">Patterns covered</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Risk-tiered prompts with constraints and templates</li>
            <li>Policy-as-code checks before and after deployment</li>
            <li>Permissioned tool use with sandboxes and scopes</li>
            <li>Canary evals and auto-rollback with evidence bundles</li>
          </ul>
          <p>
            Use these patterns to improve safety while maintaining velocity. We include implementation
            tips and reference configurations to get started quickly.
          </p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Get the full guide →
          </a>
        </div>
      </div>
    </div>
  )
}

