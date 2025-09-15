import React from 'react'

export default function ContactPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Reach out to explore partnerships, solutions, or research collaborations.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <a href="mailto:hello@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">hello@ziontechgroup.com</a>
        </div>
      </div>
    </div>
  )
}

