import React from 'react'
import { LightBulbIcon, CpuChipIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const areas = [
  { title: 'Foundation Models', desc: 'Training large-scale multimodal models with efficient architectures.', icon: AcademicCapIcon },
  { title: 'Reasoning Systems', desc: 'Agents with planning, tool-use, and verifiable reasoning.', icon: LightBulbIcon },
  { title: 'Quantum NN', desc: 'Hybrid quantum-classical models for optimization and simulation.', icon: CpuChipIcon },
]

export default function ResearchPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Research</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Exploring the frontiers of AI and computing through open innovation and rigorous experimentation.</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3">
          {areas.map((a) => (
            <div key={a.title} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <a.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                {a.title}
              </dt>
              <dd className="mt-4 text-base leading-7 text-gray-300">{a.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
