import React from 'react'
import { getLatestUpdates } from '../data/updates'

export default function HomePage() {
  const latest = getLatestUpdates(6)

  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-36 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Leading the Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI & Technology</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transform your business with AI, quantum computing, and autonomous solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200">
                Get Started
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
                Learn More <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Promo banner for new content */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm:p-5 text-center">
          <p className="text-sm sm:text-base font-semibold text-blue-200">
            New: AI Governance Maturity Model (2026) —
            <a href="/updates/ai-governance-maturity-model-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">read the framework</a>
            <span className="mx-2 text-blue-300/60">|</span>
            See all <a href="/updates" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">updates</a>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What's New</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">Fresh content, announcements, and research drops.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3">
          {latest.map((item) => (
            <article key={item.href} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-2 text-xs text-blue-300">
                <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 ring-1 ring-inset ring-blue-500/20">{item.tag}</span>
                {item.date ? (
                  <time dateTime={item.date} className="text-gray-400">{new Date(item.date).toLocaleDateString()}</time>
                ) : null}
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                  <span className="absolute inset-0" />
                  {item.title}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
              <a href={item.href} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                Read more <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a href="/updates" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
            View all updates <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </div>
  )
}