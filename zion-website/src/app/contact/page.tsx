import React from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const contactMethods = [
  { name: 'Email', value: 'hello@ziontech.example', icon: EnvelopeIcon },
  { name: 'Phone', value: '+1 (555) 123-4567', icon: PhoneIcon },
  { name: 'Address', value: '500 Innovation Way, San Francisco, CA', icon: MapPinIcon },
]

export default function ContactPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">We'd love to hear from you.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {contactMethods.map((m) => (
            <div key={m.name} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-3 text-white">
                <m.icon className="h-6 w-6 text-blue-400" />
                <div className="font-semibold">{m.name}</div>
              </div>
              <div className="mt-2 text-gray-300">{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
