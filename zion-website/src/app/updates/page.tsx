import React from 'react'

export default function UpdatesPage() {
  const items = [
    {
      title: '2025 AI Enterprise Playbook Released',
      summary:
        'A practical guide to deploying multimodal AI agents across enterprise workflows, including governance and ROI frameworks.',
      href: '/research',
      date: '2025-09-15',
    },
    {
      title: 'New Course: Advanced Blockchain Development',
      summary:
        'Comprehensive blockchain course covering smart contracts, DeFi, L2 scaling, security, and audits with hands-on labs.',
      href: '/services',
      date: '2025-09-10',
    },
    {
      title: 'Launch: Autonomous Research Assistant',
      summary:
        'An AI-powered assistant that accelerates literature review, experiment planning, and insight generation for R&D teams.',
      href: '/solutions',
      date: '2025-09-03',
    },
  ]

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-base font-semibold leading-7 text-blue-400">Zion Updates</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Latest content, launches, and announcements
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Explore our newest research, courses, and product updates.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {items.map((item) => (
              <article key={item.title} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <time className="text-xs text-gray-400" dateTime={item.date}>
                  {new Date(item.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' })}
                </time>
                <h3 className="mt-2 text-lg font-semibold leading-6 text-white">
                  <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
                <a href={item.href} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

