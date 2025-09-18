
import React from 'react'
import { siteUpdates } from '@/data/updates'

export default function UpdatesPage() {
  const safeDate = (d?: string) => (d ? new Date(d).getTime() : 0)
  const updates = [...siteUpdates].sort((a, b) => safeDate(b.date) - safeDate(a.date))

  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Updates</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">Latest guides, launches, and blueprints.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-2">
          {updates.map((item) => (
            <article key={item.href} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-200">
              <div className="flex items-center gap-2 text-xs text-blue-300">
                {item.tag && (
                  <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 ring-1 ring-inset ring-blue-500/20">{item.tag}</span>
                )}
                {item.date && (
                  <time dateTime={item.date} className="text-gray-400">
                    {new Date(item.date).toLocaleDateString()}
                  </time>
                )}
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
    </div>
  )
}

