export default function ResearchPage() {
  const areas = [
    { name: 'Foundation Models', description: 'Adapting multi-modal models for enterprise tasks.' },
    { name: 'Systems & Optimization', description: 'Inference acceleration and cost/performance trade-offs.' },
    { name: 'Applied Science', description: 'Safety, robustness, and domain evaluation methods.' },
  ]
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Research</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">Advancing practical AI systems.</p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {areas.map((a) => (
              <div key={a.name} className="rounded-2xl bg-white/5 p-6">
                <dt className="text-base font-semibold leading-7 text-white">{a.name}</dt>
                <dd className="mt-3 text-sm text-gray-300">{a.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
