
import React from 'react'

export default function CaseStudiesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Case Studies</h1>
          <p className="mt-4 text-lg text-gray-300">
            Real-world examples of how our AI and technology solutions have transformed businesses.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Financial Services</h3>
              <p className="mt-2 text-sm text-gray-300">
                How we helped a major financial institution reduce costs by 40% with AI automation and improve customer satisfaction.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Healthcare</h3>
              <p className="mt-2 text-sm text-gray-300">
                Transforming patient care with AI-powered diagnostics and treatment recommendations, improving outcomes by 60%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
