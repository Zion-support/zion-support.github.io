import React from 'react'

export default function ServicesPage() {
  const services = [
    { name: 'AI Solutions', description: 'Custom AI models, copilots, and automation.' },
    { name: 'Micro-SaaS', description: 'Rapidly delivered SaaS tailored to your niche.' },
    { name: 'IT Services', description: 'Modern cloud-first infrastructure and DevOps.' },
  ]
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Services</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              From strategy to production, we deliver outcomes.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white">{s.name}</h3>
              <p className="mt-2 text-gray-300">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

