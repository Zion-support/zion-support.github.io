import React from 'react'
import { Cog6ToothIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const services = [
  { title: 'AI Consulting', desc: 'Strategy, roadmaps, and implementation guidance.', icon: BoltIcon },
  { title: 'Platform Engineering', desc: 'Reliable infrastructure and DevOps at scale.', icon: Cog6ToothIcon },
  { title: 'Security & Compliance', desc: 'Protect data and meet regulatory standards.', icon: ShieldCheckIcon },
]

export default function ServicesPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-40 lg:py-44 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Services</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">End-to-end services to accelerate your AI transformation.</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-white/5 p-6 rounded-2xl">
            <div className="flex items-center gap-3">
              <s.icon className="h-6 w-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            </div>
            <p className="mt-2 text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}