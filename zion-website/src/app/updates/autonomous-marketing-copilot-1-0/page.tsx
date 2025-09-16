export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-16 lg:px-8">
        <p className="text-sm text-blue-300">Launch • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Autonomous Marketing Copilot v1.0
        </h1>
        <p className="mt-4 text-gray-300">
          Plan campaigns, generate assets, and auto‑schedule multi‑channel posts with policy guardrails, approval flows,
          and live evaluation signals. Integrates with brand kits, content calendars, and analytics for closed‑loop
          optimization.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
            <li>Campaign planner with objectives, audiences, and budget guardrails</li>
            <li>Asset generation for blog, video scripts, email, and social variants</li>
            <li>Policy‑as‑code checks for claims, compliance, and brand tone</li>
            <li>Auto‑scheduling with best‑time predictions and content calendar sync</li>
            <li>Live evals for engagement, quality, and safety with rollback rules</li>
          </ul>
        </div>
        <div className="mt-10">
          <a href="/contact" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
            Request a demo
          </a>
        </div>
      </div>
    </div>
  )
}

