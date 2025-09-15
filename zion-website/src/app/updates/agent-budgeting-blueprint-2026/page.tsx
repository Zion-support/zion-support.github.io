
export default function AgentBudgetingBlueprintPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        <p className="text-sm text-blue-300">Blueprint • 2026</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Agent Budgeting & Cost Controls (2026)
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Set budgets, enforce spend guardrails, and route by cost–quality tradeoffs with audit evidence.
        </p>
        <div className="prose prose-invert mt-10">
          <h2>Overview</h2>
          <p>
            This blueprint outlines how to instrument objective budgets, enforce spend guardrails, and use
            evaluation signals to make reliable, cost‑aware routing decisions across models and tools.
          </p>
          <h2>Key Components</h2>
          <ul>
            <li>Budget definitions with owners, limits, and alert thresholds</li>
            <li>Policy‑as‑code guardrails with abort switches and evidence capture</li>
            <li>Eval‑driven routing that balances cost, latency, and quality</li>
            <li>Signed audit trails for compliance and finance reviews</li>
          </ul>
          <h2>Getting Started</h2>
          <ol>
            <li>Define budgets per route and environment</li>
            <li>Wire live evals and cost meters into traces</li>
            <li>Enable guardrails and auto‑rollback policies</li>
            <li>Review evidence bundles and iterate</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

