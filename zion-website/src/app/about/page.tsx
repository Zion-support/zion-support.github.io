import React from 'react'
import { LightBulbIcon, GlobeAltIcon, ShieldCheckIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const values = [
  { name: 'Innovation First', description: "We push the boundaries of what's possible, constantly exploring new frontiers.", icon: LightBulbIcon },
  { name: 'Global Impact', description: 'Our solutions transform industries worldwide.', icon: GlobeAltIcon },
  { name: 'Trust & Security', description: 'We uphold the highest standards of security and ethics.', icon: ShieldCheckIcon },
  { name: 'Research Excellence', description: 'Breakthrough discoveries from a world-class team.', icon: AcademicCapIcon },
]

export default function AboutPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Zion Tech Group</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">We build AI and autonomous systems that advance human potential.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Core Values</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">What drives us</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {values.map((v) => (
              <div key={v.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <v.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {v.name}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-300">{v.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
