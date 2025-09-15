import React from 'react'

export default function ContactPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 lg:py-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Have a question or want to collaborate? Reach out and our team will respond promptly.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <a href="mailto:hello@ziontechgroup.com" className="bg-white/5 p-6 rounded-2xl text-white hover:bg-white/10 transition">Email: hello@ziontechgroup.com</a>
          <a href="tel:+100000000" className="bg-white/5 p-6 rounded-2xl text-white hover:bg-white/10 transition">Phone: +1 (000) 000-0000</a>
        </div>
      </div>
    </div>
  )
}
