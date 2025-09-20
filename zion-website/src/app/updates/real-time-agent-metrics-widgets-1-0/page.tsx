<<<<<<< HEAD
export const metadata = {,
  title: 'Real‑Time Guardrail Metrics Widgets v1.0 — Launch';
  description: 'Drop-in UI widgets for live safety, latency and quality guardrails with alerts.',
}
,
export default function Page() {,
  return (,
    <div className="bg-black min-h-screen">,
      <h1>Real-Time Agent Metrics Widgets v1.0</h1>,
    </div>,
  );
}
,
=======
export const metadata = {
  title: 'Real‑Time Guardrail Metrics Widgets v1.0 — Launch',
  description: 'Drop-in UI widgets for live safety, latency and quality guardrails with alerts.',
}

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-300">Launch • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Real-Time Agent Metrics Widgets v1.0
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Drop-in dashboards for traces, guardrail events, and eval signals to monitor agent reliability.
        </p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Highlights</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Plug-and-play widgets for latency, cost, and safety SLIs</li>
              <li>Support for shadow testing and canary eval rollouts</li>
              <li>Exportable evidence bundles and shareable dashboards</li>
            </ul>
          </div>
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
