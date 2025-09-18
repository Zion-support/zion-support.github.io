
import React from 'react'

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-lg text-gray-300">
            Comprehensive AI and technology solutions tailored to your business needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">AI Consulting</h3>
              <p className="mt-2 text-sm text-gray-300">
                Strategic guidance on AI implementation, architecture design, and technology roadmap development.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Custom Development</h3>
              <p className="mt-2 text-sm text-gray-300">
                Bespoke AI solutions and applications built specifically for your unique business requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
