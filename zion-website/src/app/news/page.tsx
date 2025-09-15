import React from 'react'

export const metadata = {
  title: 'News & Updates - Zion Tech Group',
  description: 'Latest announcements, product updates, and partnerships from Zion Tech Group.',
}

const newsItems = [
  { title: 'Introducing Zion OS 1.2', date: '2025-09-10', desc: 'Performance and security enhancements across the stack.' },
  { title: 'New Service: AI Compliance Copilot', date: '2025-09-07', desc: 'Automate SOC2/ISO27001 evidence collection and policy upkeep.' },
  { title: 'Partnership Announcement', date: '2025-09-01', desc: 'Strategic alliance to accelerate enterprise AI adoption.' },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="px-6 pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">News & Updates</h1>
          <p className="mt-4 text-gray-300">Stay up to date with our latest releases and announcements.</p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          {newsItems.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <time dateTime={item.date}>{item.date}</time>
                <span className="rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300">Announcement</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="mt-10 flex items-center justify-center">
            <a href="/" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Back to Home →</a>
          </div>
        </div>
      </section>
    </div>
  )
}