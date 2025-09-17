"use client"

import React from 'react'

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Zion Tech Group</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">AI, automation, and secure infrastructure for modern enterprises.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">Get Started</a>
              <a href="/updates" className="text-sm font-semibold leading-6 text-white hover:text-blue-400">See updates <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
