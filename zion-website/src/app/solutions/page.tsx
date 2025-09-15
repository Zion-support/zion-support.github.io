import React from 'react'
import { RocketLaunchIcon, LightBulbIcon, CpuChipIcon } from '@heroicons/react/24/outline'

const solutions = [
  { name: 'AI Research Assistant', desc: 'Autonomous research platform accelerating discovery.', href: '/solutions/ai-autonomous-research', icon: LightBulbIcon },
  { name: 'Quantum Neural Networks', desc: 'Next-generation computing for complex problems.', href: '/solutions/quantum-neural-networks', icon: CpuChipIcon },
  { name: 'Autonomous Operations', desc: 'AI-powered automation for enterprise efficiency.', href: '/solutions/autonomous-business', icon: RocketLaunchIcon },
]

export default function SolutionsPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Solutions</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Flagship platforms transforming industries.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {solutions.map((s) => (
            <article key={s.name} className="flex flex-col items-start bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-x-3 text-xs">
                <s.icon className="h-5 w-5 text-blue-400" />
                <span className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300">AI Platform</span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={s.href}><span className="absolute inset-0" />{s.name}</a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-300">{s.desc}</p>
              </div>
              <div className="relative mt-8">
                <a href={s.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Learn more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
