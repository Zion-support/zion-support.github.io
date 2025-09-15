import React from 'react'
import { LightBulbIcon, CpuChipIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const areas = [
  { name: 'AI & Machine Learning', icon: LightBulbIcon, topics: ['NLP', 'Vision', 'Reinforcement Learning'] },
  { name: 'Quantum + AI', icon: CpuChipIcon, topics: ['QNNs', 'Hybrid Systems', 'Error Correction'] },
  { name: 'Academic Partnerships', icon: AcademicCapIcon, topics: ['Stanford', 'MIT', 'Oxford'] },
]

export default function ResearchPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Research & Innovation</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Pushing the boundaries of AI through research and collaboration.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {areas.map((a) => (
            <div key={a.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-x-3 mb-4">
                <a.icon className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">{a.name}</h3>
              </div>
              <div className="space-y-1 text-gray-300">
                {a.topics.map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
