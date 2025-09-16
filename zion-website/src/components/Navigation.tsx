"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Updates', href: '/updates' },
  { name: 'Blog', href: '/blog' }
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Home</span>
            <span className="text-white font-semibold">Zion</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200 hover:-translate-y-0.5">{item.name}</Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/contact" className="text-sm font-semibold leading-6 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105">Get Started</Link>
        </div>
        <button type="button" className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>
    </header>
  )
}
