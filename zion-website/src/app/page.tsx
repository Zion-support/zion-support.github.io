import React from 'react'
import { getLatestUpdates } from '../data/updates'

export default function HomePage() {
  const latest = getLatestUpdates(6)

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section with improved accessibility and performance */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-36 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Leading the Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                AI & Technology
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transform your business with cutting-edge AI, quantum computing, and autonomous solutions that drive innovation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
              <a 
                href="/contact" 
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 transform hover:scale-105"
                aria-label="Get started with our services"
              >
                Get Started
              </a>
              <a 
                href="/about" 
                className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200 flex items-center gap-1"
                aria-label="Learn more about our company"
              >
                Learn More 
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      {/* Enhanced promo banner with better accessibility */}
      <div className="mx-auto max-w-7xl px-6 mt-16">
        <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 sm:p-8 text-center backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300 ring-1 ring-blue-500/30">
              🚀 New Release
            </span>
          </div>
          <p className="text-sm sm:text-base font-semibold text-blue-200">
            AI Governance Maturity Model (2026) —
            <a 
              href="/updates/ai-governance-maturity-model-2026" 
              className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="Read the AI Governance Maturity Model framework"
            >
              read the framework
            </a>
            <span className="mx-2 text-blue-300/60" aria-hidden="true">|</span>
            See all <a 
              href="/updates" 
              className="underline decoration-blue-300/60 underline-offset-4 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="View all updates and announcements"
            >
              updates
            </a>
          </p>
        </div>
      </div>

      {/* Enhanced updates section with better performance */}
      <section className="mx-auto mt-16 max-w-7xl px-6 lg:px-8" aria-labelledby="updates-heading">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What's New</h2>
          <p id="updates-heading" className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Latest Updates
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Fresh content, announcements, and cutting-edge research drops from our AI innovation labs.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3">
          {latest.map((item, index) => (
            <article 
              key={item.href} 
              className="group relative flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2 text-xs text-blue-300 mb-3">
                <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-1 ring-1 ring-inset ring-blue-500/20 font-medium">
                  {item.tag}
                </span>
                {item.date && (
                  <time dateTime={item.date} className="text-gray-400">
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </time>
                )}
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-100 transition-colors duration-200">
                <a 
                  href={item.href} 
                  className="focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label={`Read more about ${item.title}`}
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  {item.title}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-300 line-clamp-3">
                {item.summary}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold leading-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                <a 
                  href={item.href}
                  className="flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label={`Read full article: ${item.title}`}
                >
                  Read more 
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a 
            href="/updates" 
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600/10 border border-blue-500/30 px-6 py-3 text-sm font-semibold text-blue-300 hover:text-white hover:bg-blue-600/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="View all updates and announcements"
          >
            View all updates 
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      {/* Enhanced footer section */}
      <footer className="mt-24 border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-white">Innovation at Scale</h3>
              <p className="mt-2 text-sm text-gray-300">
                Transforming enterprises with cutting-edge AI, quantum computing, and autonomous solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Services</a></li>
                <li><a href="/solutions" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Solutions</a></li>
                <li><a href="/research" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Research</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              <p className="mt-2 text-sm text-gray-300">
                Get the latest insights on AI innovation and enterprise technology.
              </p>
              <a 
                href="/updates" 
                className="mt-4 inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                Subscribe to updates <span aria-hidden="true" className="ml-1">→</span>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Zion Tech Group. Leading the future of AI & Technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}