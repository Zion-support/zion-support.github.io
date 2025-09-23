import React from 'react'

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Web3 Fundamentals Track
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-01</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A beginner-friendly curriculum for understanding wallets, NFTs, and L2 ecosystems—complete
            with hands-on projects and security best practices.
          </p>
          <ul className="mt-8 list-disc pl-6 space-y-2 text-gray-300">
            <li>Wallet safety and key management</li>
            <li>NFT standards and marketplaces</li>
            <li>Smart contracts and test networks</li>
            <li>Layer 2 overview and bridging</li>
          </ul>
          <div className="mt-10">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">Enroll interest</a>
          </div>
        </div>
      </div>
    </div>
  )
}

