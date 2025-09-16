import React from 'react'

export const metadata = {
  title: 'Quantum Computing Center of Excellence — Zion Tech Group',
  description: 'Partnership announcement to accelerate quantum neural networks for enterprise.',
}

export default function QuantumPartnership() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Partnership: Quantum Computing Center of Excellence
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        We are partnering with leading research institutions to accelerate quantum neural networks for
        enterprise applications, spanning optimization, materials discovery, and secure computation.
      </p>
      <div className="mt-8">
        <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
          Learn more →
        </a>
      </div>
    </div>
  )
}

