export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Agent Policy-as-Code Starter Kit
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            Get up and running with executable policies for AI systems in weeks. The Starter Kit
            includes versioned policy packs, CI checks, runtime guards, and audit‑ready evidence
            exports that integrate with your existing workflows.
          </p>
          <h2>What’s inside</h2>
          <ul>
            <li>Prebuilt policies for data handling, safety, and tool use</li>
            <li>CI integrations with pass/fail gates and exceptions</li>
            <li>Runtime guardrails with telemetry and incident hooks</li>
            <li>Evidence bundles for audits and reviews</li>
          </ul>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Request a demo
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}