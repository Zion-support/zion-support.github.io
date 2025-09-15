import React from 'react'

export default function AboutPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-40 lg:py-44">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We build advanced AI and technology solutions that help organizations innovate faster and scale with confidence.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {["Innovation First","Customer Centric","Security by Design"].map((v) => (
            <div key={v} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">{v}</h3>
              <p className="mt-2 text-gray-300">We prioritize {v.toLowerCase()} in everything we deliver.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}