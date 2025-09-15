import React from 'react'

type Insight = {
  title: string
  description: string
  href: string
  tag: string
  date: string
}

const insights: Insight[] = [
  {
    title: '2025 AI Trends: Autonomous Agents in the Enterprise',
    description: 'How agentic workflows are reshaping operations, cutting costs, and boosting velocity.',
    href: '/insights/ai-trends-2025',
    tag: 'Report',
    date: '2025-09-01',
  },
  {
    title: 'Quantum-Ready: Preparing Data Pipelines for Next-Gen Compute',
    description: 'Practical steps to modernize your stack ahead of quantum acceleration.',
    href: '/insights/quantum-ready-data',
    tag: 'Guide',
    date: '2025-08-15',
  },
  {
    title: 'Securing Autonomous Systems',
    description: 'Defense-in-depth for AI-driven automation across critical business functions.',
    href: '/insights/securing-autonomous-systems',
    tag: 'Best Practices',
    date: '2025-07-30',
  },
]

export const metadata = {
  title: 'Insights | Zion Tech Group',
  description: 'Articles, reports, and best practices on AI, autonomy, and next-gen technology.',
}

export default function InsightsPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Insights</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Research-backed guidance on AI adoption, autonomous operations, and the technologies shaping tomorrow.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((item) => (
            <article key={item.href} className="group rounded-2xl bg-white/5 p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-[1.01]">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={item.date} className="text-gray-400">
                  {new Date(item.date).getFullYear()}
                </time>
                <span className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300 group-hover:bg-gray-700 transition-colors duration-200">
                  {item.tag}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors duration-200">
                  <a href={item.href}>
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{item.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-white">
                    <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                      <span className="absolute inset-0" />
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

