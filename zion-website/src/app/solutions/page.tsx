import React from 'react'

export default function SolutionsPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Flagship Solutions</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Revolutionary AI platforms for measurable impact.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Platforms</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">What we build</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {[{name:'AI Research Assistant', description:'Autonomous research with retrieval and evals.'},{name:'IT Asset Management', description:'Intelligent asset tracking and optimization.'}].map((s)=> (
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
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your business?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Let's discuss how our AI solutions can accelerate your growth.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Get Started</a>
            <a href="/services" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">View Services <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}
