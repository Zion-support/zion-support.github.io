import React from 'react'

const solutions = [
  {
    name: 'AI Research Assistant',
    description: 'Autonomous research platform that accelerates scientific discovery.',
    href: '/solutions/ai-autonomous-research',
  },
  {
    name: 'Quantum Neural Networks',
    description: 'Next-generation computing for complex problem solving.',
    href: '/solutions/quantum-neural-networks',
  },
  {
    name: 'Autonomous Business Operations',
    description: 'AI-powered automation for enterprise efficiency.',
    href: '/solutions/autonomous-business',
  },
  {
    name: 'IT Asset Management',
    description: 'Intelligent management of digital infrastructure.',
    href: '/solutions/it-asset-management',
  },
]

export default function SolutionsPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-8 lg:py-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Solutions</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Explore our portfolio of scalable AI and technology solutions.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <article key={s.name} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold text-white">{s.name}</h3>
              <p className="mt-2 text-sm text-gray-300">{s.description}</p>
              <a href={s.href} className="mt-4 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300">
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
