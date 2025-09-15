import React from 'react'

export const metadata = {
  title: 'Latest Updates — Zion Tech Group',
  description: 'News, launches, courses, and announcements from Zion Tech Group and Zion Academy.',
}

const updates = [
  {
    title: 'Launch: AI Automation Starter Kits',
    date: '2025-09-15',
    summary:
      'Pre-built workflows to automate onboarding, support triage, analytics tagging, and data syncs. Built on secure serverless edge.',
    href: '/solutions/ai-autonomous-research',
    tag: 'Launch',
  },
  {
    title: 'Course: Advanced Blockchain Development',
    date: '2025-09-10',
    summary:
      'Deep dive into Solidity, Foundry tests, L2 rollups, security best practices, and gas optimizations.',
    href: '/research',
    tag: 'Course',
  },
  {
    title: 'Report: State of AI in Production 2025',
    date: '2025-09-05',
    summary:
      'Survey across 300 orgs on reliability, guardrails, evaluation, and ROI for AI systems at scale.',
    href: '/solutions',
    tag: 'Report',
  },
]

export default function UpdatesPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Latest Updates</h1>
          <p className="mt-4 text-lg text-gray-300">
            Releases, announcements, and learning resources. Follow what we are shipping every week.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((item) => (
            <article key={item.title} className="flex flex-col bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="px-2 py-0.5 rounded-full bg-blue-600/20 text-blue-300 border border-blue-600/30">{item.tag}</span>
                <time dateTime={item.date}>{new Date(item.date).toLocaleDateString()}</time>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-white">
                <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                  <span className="absolute inset-0" />
                  {item.title}
                </a>
              </h2>
              <p className="mt-3 text-sm text-gray-300 flex-1">{item.summary}</p>
              <a href={item.href} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

