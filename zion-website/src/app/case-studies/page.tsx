export default function CaseStudiesPage() {
  const studies = [
    {
      title: 'Global Retailer: 22% Lift via AI Personalization',
      summary: 'Deployed recommendation models and propensity scoring to increase AOV and conversion.',
      metrics: ['+22% Conversion', '+18% AOV', '-28% Churn'],
      href: '/contact',
    },
    {
      title: 'Banking: Fraud Detection at Scale',
      summary: 'Hybrid GNN + gradient boosted models reduced false positives while catching more fraud.',
      metrics: ['-41% False Positives', '+19% Detection Rate', '<120ms Latency'],
      href: '/contact',
    },
    {
      title: 'Manufacturing: Predictive Maintenance',
      summary: 'Multimodal sensors + time-series forecasting to minimize downtime and maintenance costs.',
      metrics: ['-35% Downtime', '-24% Costs', '+16% Throughput'],
      href: '/contact',
    },
  ]

  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Proven Impact <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Case Studies</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">See how organizations use our AI solutions to unlock measurable business outcomes.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {studies.map((s) => (
            <article key={s.title} className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-gray-300 mb-4">{s.summary}</p>
              <ul className="text-sm text-gray-400 space-y-1 mb-6">
                {s.metrics.map((m) => (
                  <li key={m} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                    {m}
                  </li>
                ))}
              </ul>
              <a href={s.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">Talk to us <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to achieve similar results?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">We’ll help design and deliver a roadmap to measurable impact.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Book a consultation</a>
            <a href="/solutions" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Explore Solutions <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}