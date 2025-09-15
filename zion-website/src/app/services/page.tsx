<<<<<<< HEAD
import React from 'react'

export default function ServicesPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Services</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Comprehensive AI solutions tailored to your business goals.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">What we offer</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {[{name:'AI Strategy & Consulting', description:'Assessment and planning for AI transformation.'},{name:'Custom AI Development', description:'Tailored AI solutions for your needs.'}].map((s)=> (
              <div key={s.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white">{s.name}</h3>
                <p className="text-gray-300 mt-3">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Let's discuss how our AI services can transform your business.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Schedule Consultation</a>
          </div>
=======
import { LightBulbIcon, CogIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const services = [
  { name: 'AI Consulting', description: 'Strategy, readiness, and roadmap for AI adoption.', icon: LightBulbIcon },
  { name: 'Managed AI Operations', description: 'Operate and optimize AI systems with SLAs.', icon: CogIcon },
  { name: 'Enterprise Enablement', description: 'Training, governance, and change management.', icon: UserGroupIcon }
]

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Services</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">From strategy to production, we partner across your AI journey.</p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="rounded-2xl bg-white/5 p-6">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <s.icon className="h-5 w-5 text-blue-400" />
                  {s.name}
                </dt>
                <dd className="mt-3 text-sm text-gray-300">{s.description}</dd>
              </div>
            ))}
          </dl>
>>>>>>> 230e5e007f55 (Checkpoint before follow-up message)
        </div>
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======

>>>>>>> 230e5e007f55 (Checkpoint before follow-up message)
