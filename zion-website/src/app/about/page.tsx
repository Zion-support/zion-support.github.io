import React from 'react'

export default function AboutPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-8 lg:py-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Zion Tech Group</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            We are a research-driven technology company focused on AI, autonomous systems, and next-generation computing.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[{
            title: 'Innovation First',
            description: 'We push boundaries and turn cutting-edge research into practical solutions.'
          },{
            title: 'Customer Impact',
            description: 'We deliver measurable outcomes and long-term value for our partners.'
          },{
            title: 'Security & Ethics',
            description: 'We build secure, responsible systems aligned with strong ethical principles.'
          }].map((item) => (
            <div key={item.title} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
