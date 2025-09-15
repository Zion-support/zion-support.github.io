import React from 'react'

export default function SolutionsPage() {
  const solutions = [
    { name: 'Autonomous Research Assistant', href: '/solutions/ai-autonomous-research' },
    { name: 'Quantum Neural Networks', href: '/solutions/quantum-neural-networks' },
    { name: 'Autonomous Business Operations', href: '/solutions/autonomous-business' },
  ]
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Solutions</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore our flagship platforms and accelerators.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {solutions.map((s) => (
            <a key={s.name} href={s.href} className="group block bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400">{s.name}</h3>
              <span className="mt-2 inline-block text-sm text-blue-400">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

