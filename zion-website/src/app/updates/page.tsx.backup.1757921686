import React from 'react'
import { updates } from '@/data/updates'

export const metadata = {
  title: 'Updates | Zion Tech Group',
  description: 'Latest courses, announcements, research, and releases from Zion Tech Group.',
}

export default function UpdatesPage() {
  const sorted = [...updates].sort((a, b) => (a.date < b.date ? 1 : -1))
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Updates</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Courses, announcements, research, and product releases.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {sorted.map((item) => (
          <article key={item.id} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-2 text-xs text-blue-300">
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 ring-1 ring-inset ring-blue-500/20">{item.tag}</span>
              <time dateTime={item.date} className="text-gray-400">{new Date(item.date).toLocaleDateString()}</time>
            </div>
            <h2 className="mt-3 text-lg font-semibold leading-6 text-white">
              <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                <span className="absolute inset-0" />
                {item.title}
              </a>
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
            <a href={item.href} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
              Read more <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}

