import React from 'react'
import { UserGroupIcon, LightBulbIcon, CogIcon } from '@heroicons/react/24/outline'

const services = [
  { title: 'Advisory & Strategy', desc: 'Roadmaps, governance, and ROI modeling for AI adoption.', icon: UserGroupIcon },
  { title: 'Applied AI Engineering', desc: 'Model evaluation, fine-tuning, and integration with your stack.', icon: LightBulbIcon },
  { title: 'Platform & Operations', desc: 'MLOps, observability, and secure infrastructure at scale.', icon: CogIcon },
]

export default function ServicesPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Services</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">From strategy to deployment, we help you realize value from AI safely and quickly.</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <s.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                {s.title}
              </dt>
              <dd className="mt-4 text-base leading-7 text-gray-300">{s.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
