import React from 'react'
import { LightBulbIcon, CogIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const services = [
  { name: 'AI Strategy & Consulting', description: 'Assessment, roadmap, and ROI planning for AI initiatives.', icon: LightBulbIcon, duration: '4-8 weeks' },
  { name: 'Custom AI Development', description: 'Tailored models, integrations, and validation.', icon: CogIcon, duration: '8-24 weeks' },
  { name: 'Integration & Deployment', description: 'Systems integration, APIs, optimization, and go-live.', icon: RocketLaunchIcon, duration: '4-12 weeks' },
]

export default function ServicesPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Professional AI Services</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">From strategy to implementation, we partner for outcomes.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {services.map((s) => (
            <div key={s.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-x-3 mb-4">
                <s.icon className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">{s.name}</h3>
              </div>
              <p className="text-gray-300 mb-6">{s.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-400 font-medium">Duration: {s.duration}</span>
                <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Learn more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
