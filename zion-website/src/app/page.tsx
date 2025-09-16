"use client"

import React from 'react'
import Link from 'next/link'
import { LightBulbIcon, CpuChipIcon, GlobeAltIcon, ShieldCheckIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { getLatestUpdates } from '@/data/updates'

const features = [
  { name: 'AI-Powered Research', description: 'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.', icon: LightBulbIcon },
  { name: 'Quantum Computing', description: 'Next-generation quantum neural networks for solving complex computational problems.', icon: CpuChipIcon },
  { name: 'Global Solutions', description: 'Worldwide deployment of autonomous business operations and digital transformation.', icon: GlobeAltIcon },
  { name: 'Enterprise Security', description: 'Military-grade security protocols protecting your most valuable digital assets.', icon: ShieldCheckIcon },
  { name: 'Data Analytics', description: 'Advanced analytics and insights driving informed decision-making.', icon: ChartBarIcon },
  { name: 'Expert Team', description: 'World-class researchers and engineers pushing the boundaries of technology.', icon: UserGroupIcon }
]

export default function HomePage() {
  const latest = getLatestUpdates(6)

  return (
    <main className="bg-black text-white">
      <section className="relative isolate px-6 pt-24 pb-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Build with Zion</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">Production AI, agentic systems, and enterprise governance — from research to deployment.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/services" className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">Explore services</Link>
            <Link href="/updates" className="text-sm font-semibold leading-6 text-white">See updates →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">What we do</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
              <feature.icon className="h-8 w-8 text-blue-400" />
              <h3 className="mt-4 text-xl font-semibold">{feature.name}</h3>
              <p className="mt-2 text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mt-20">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Latest updates</h2>
          <Link href="/updates" className="text-blue-400 hover:text-blue-300">View all</Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((item) => (
            <article key={item.id} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="text-xs text-gray-400">
                <span className="px-2 py-1 rounded bg-white/10 text-blue-300">{item.tag}</span>
                <time className="ml-2" dateTime={item.date}>{new Date(item.date).toLocaleDateString()}</time>
              </div>
              <h3 className="mt-3 text-lg font-semibold">
                <Link href={item.href}>{item.title}</Link>
              </h3>
              <p className="mt-2 text-gray-300 line-clamp-3">{item.summary}</p>
              <div className="mt-4">
                <Link href={item.href} className="text-blue-400 hover:text-blue-300 font-medium">Read more →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

