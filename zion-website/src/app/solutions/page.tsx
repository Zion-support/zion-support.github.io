import React from 'react'
import { LightBulbIcon, CpuChipIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const solutions = [
  { title: 'AI Research Assistant', desc: 'Autonomous research to accelerate discovery.', icon: LightBulbIcon, href: '/solutions/ai-autonomous-research' },
  { title: 'Quantum Neural Networks', desc: 'Hybrid quantum-classical ML systems.', icon: CpuChipIcon, href: '/solutions/quantum-neural-networks' },
  { title: 'Autonomous Business Ops', desc: 'Automate processes with multi-agent AI.', icon: RocketLaunchIcon, href: '/solutions/autonomous-business' },
]

export default function SolutionsPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-40 lg:py-44 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Solutions</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">Production-ready solutions to power intelligent enterprises.</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((s) => (
          <a key={s.title} href={s.href} className="bg-white/5 p-6 rounded-2xl block hover:bg-white/10 transition">
            <div className="flex items-center gap-3">
              <s.icon className="h-6 w-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            </div>
            <p className="mt-2 text-gray-300">{s.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}