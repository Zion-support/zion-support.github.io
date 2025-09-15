import React from 'react'

export default function ContactPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-40 lg:py-44 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact Us</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">We’d love to hear from you. Reach out for partnerships, demos, or support.</p>
          <a href="mailto:hello@ziontechgroup.com" className="mt-10 inline-block rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-all duration-200">
            hello@ziontechgroup.com
          </a>
        </div>
      </div>
    </div>
  )
}