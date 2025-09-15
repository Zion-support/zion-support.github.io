"use client"
import React from 'react'

type UpdateItem = {
  title: string
  date: string
  summary: string
  href: string
  tag?: string
}

const updates: UpdateItem[] = [
  {
    title: 'Launch: Autonomous Research Assistant v2',
    date: '2025-09-15',
    summary:
      'Major upgrade with multi-agent collaboration, document-grounded reasoning, and faster retrieval.',
    href: '/solutions/ai-autonomous-research',
    tag: 'Product'
  },
  {
    title: 'New Course: Advanced Blockchain Development',
    date: '2025-09-10',
    summary:
      'Comprehensive course on smart contracts, DeFi primitives, L2 scaling, and security audits.',
    href: '/research',
    tag: 'Academy'
  },
  {
    title: 'Case Study: Global Retail AI Transformation',
    date: '2025-09-06',
    summary:
      'How a multi-national retailer reduced costs by 22% with autonomous operations.',
    href: '/services',
    tag: 'Case Study'
  },
  {
    title: 'Community Challenge: Build a DApp',
    date: '2025-09-01',
    summary: 'Join our DApp challenge and win prizes up to $1000 in ZION tokens.',
    href: '/contact',
    tag: 'Community'
  }
]

export default function UpdatesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-base font-semibold leading-7 text-blue-400">Updates</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What’s new at Zion
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Product launches, courses, case studies, and community announcements.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {updates.map((item) => (
              <article
                key={item.title}
                className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">
                    {item.tag}
                  </span>
                  <time dateTime={item.date}>{new Date(item.date).toLocaleDateString()}</time>
                </div>
                <h2 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
                <a
                  href={item.href}
                  className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300"
                >
                  Read more <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

