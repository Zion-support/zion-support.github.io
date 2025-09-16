export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Customer Win: Finance</h1>
      <p className="mt-4 text-gray-300">
        A Fortune 100 finance team reduced incident MTTR by 42% and improved first-contact resolution 28%
        using our real-time RAG and agentic ops toolkit.
      </p>
      <div className="mt-8 space-y-4 text-gray-300">
        <p>
          By combining retrieval observability with eval-backed releases, the team accelerated safe iteration while
          maintaining compliance and auditability.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>42% MTTR reduction across critical incidents</li>
          <li>28% improvement in first-contact resolution</li>
          <li>Policy-as-code controls for SOC 2 readiness</li>
        </ul>
        <p>
          Explore the playbook and templates to reproduce these outcomes in your org.
        </p>
      </div>
    </div>
  )
}

