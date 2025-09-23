import React from 'react'

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">AI Lab Research Portal</h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We launched the AI Lab Research Portal: a centralized hub for research briefs, curated datasets,
            and evaluation results with live benchmarks and citations. Explore reproducible experiments and
            compare models across tasks.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Searchable research briefs with executive summaries</li>
              <li>Datasets with clear licenses and data cards</li>
              <li>Live benchmarks with downloadable notebooks</li>
              <li>APIs for programmatic access</li>
            </ul>
            <p>Access requires a free account. Teams can request enterprise workspace provisioning.</p>
          </div>
          <div className="mt-10">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">
              Get access
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

