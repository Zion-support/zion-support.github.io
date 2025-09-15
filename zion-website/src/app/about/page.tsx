import React from 'react'

export default function AboutPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We are pioneers in artificial intelligence, quantum computing, and autonomous systems, dedicated to transforming industries and advancing human potential through technology.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Purpose</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Mission & Vision</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300">To accelerate human progress through cutting-edge AI and technology solutions that solve the world's most complex challenges while maintaining the highest ethical standards.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
              <p className="text-gray-300">A future where AI and technology seamlessly enhance human capabilities, creating a more intelligent, efficient, and sustainable world.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Story</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">From Research to Revolution</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-lg text-gray-300 mb-6">Founded in 2020 by a team of world-class AI researchers and technology entrepreneurs, Zion Tech Group emerged from a shared vision: to bridge the gap between cutting-edge research and real-world applications.</p>
            <p className="text-lg text-gray-300">What started as a small research lab has grown into a global technology powerhouse with offices in Silicon Valley, London, Tokyo, and Singapore.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join us in shaping the future</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Ready to be part of the AI revolution? Let's discuss how we can work together to transform your organization.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Get in Touch</a>
            <a href="/careers" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">View Careers <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

