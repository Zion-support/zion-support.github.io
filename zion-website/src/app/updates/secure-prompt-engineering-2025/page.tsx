export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <p className="text-sm font-semibold text-blue-300">Guide • 2025-09-15</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">Secure Prompt Engineering (2025 Edition)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Practical strategies for prompt hardening, jailbreak resistance, and least-privilege tool-use in production systems.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <p>
            This guide covers threat models, defense-in-depth patterns, and measurable safeguards to reduce abuse and prompt
            injection risks while preserving capability.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Template discipline with explicit instructions and deny lists</li>
            <li>Context sandboxing and structural parsing</li>
            <li>Guardrail evaluators with rollback criteria</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

