import React from 'react'

export default function AboutPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Zion Tech Group</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We are a research-driven technology company advancing AI, automation, and quantum solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Mission</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Innovation with Purpose</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We build trustworthy, impactful technology that empowers organizations and society.
          </p>
        </div>
      </div>
    </div>
  )
}

