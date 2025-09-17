import React from 'react'

const articles = [
  {
    title: 'State of AI Automation 2025',
    description:
      'A comprehensive overview of enterprise AI automation trends, ROI benchmarks, and adoption playbooks.',
    href: '/insights/state-of-ai-automation-2025',
    tag: 'Report',
    date: '2025-09-10',
  },
  {
    title: 'Measuring Agentic ROI',
    description:
      'A practical framework to quantify value and align cost with outcomes for multi-agent systems.',
    href: '/insights/measuring-agentic-roi',
    tag: 'Framework',
    date: '2025-09-15',
  },
  {
    title: 'Designing Trustworthy AI Systems',
    description:
      'Frameworks and practices for security, governance, and human-in-the-loop control in production AI.',
    href: '/insights/trustworthy-ai-systems',
    tag: 'Guide',
    date: '2025-08-21',
  },
  {
    title: 'From POC to Platform: Scaling GenAI',
    description:
      'Architecture patterns, cost controls, and product strategies to graduate pilots into durable platforms.',
    href: '/insights/scaling-genai-platforms',
    tag: 'Playbook',
    date: '2025-07-30',
  },
  {
    title: 'Autonomous Experimentation Playbook (2026)',
    description:
      'How to run continuous, policy-safe experiments with eval gates and auto-rollback.',
    href: '/blog/ai-2026-autonomous-experimentation-playbook',
    tag: 'Playbook',
    date: '2025-09-15',
  },
]

export default function InsightsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Insights & Research</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Research reports, guides, and playbooks from our AI and engineering teams.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {articles.map((a) => (
              <article key={a.href} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/10 transition">
                <div className="flex items-center gap-x-3 text-xs">
                  <time dateTime={a.date} className="text-gray-400">
                    {new Date(a.date).getFullYear()}
                  </time>
                  <span className="rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300">{a.tag}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={a.href}>
                    <span className="absolute inset-0" />
                    {a.title}
                  </a>
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-300">{a.description}</p>
                <div className="mt-6">
                  <a href={a.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                    Read more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

