import React from 'react'

const updates = [
  {
    title: 'Introducing AI Governance Toolkit',
    date: '2025-09-15',
    summary:
      'A comprehensive governance toolkit enabling safe, auditable AI decision-making across your enterprise.',
    href: '/updates/ai-governance-toolkit'
  },
  {
    title: 'New Course: Advanced Blockchain Development',
    date: '2025-09-10',
    summary:
      'Comprehensive blockchain course covering smart contracts, DeFi, L2 scaling, and security.',
    href: '/updates/advanced-blockchain-course'
  }
]

export default function UpdatesIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-28 pb-16">
      <h1 className="text-4xl font-bold tracking-tight">Latest Updates</h1>
      <p className="mt-4 text-white/70 max-w-2xl">
        Product announcements, courses, and community news.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {updates.map((item) => (
          <a key={item.title} href={item.href} className="group rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <div className="text-sm text-white/60">{item.date}</div>
            <h2 className="mt-2 text-xl font-semibold group-hover:text-blue-400 transition-colors">{item.title}</h2>
            <p className="mt-2 text-white/70 text-sm">{item.summary}</p>
            <div className="mt-4 text-blue-400 text-sm">Read more →</div>
          </a>
        ))}
      </div>
    </div>
  )
}

