<<<<<<< HEAD
'use client'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
<<<<<<< HEAD
<<<<<<< HEAD
  { name: 'Solutions', href: '/solutions' },
  { name: 'Research', href: '/research', tag: 'New' },
  { name: 'New', href: '/updates/real-time-ai-analytics-dashboard-v3-0' },
  { name: 'Contact', href: '/contact' },
=======
  { name: 'Blog', href: '/blog' },
  { name: 'Updates', href: '/updates' },
>>>>>>> cursor/create-and-deploy-new-content-8472
=======
  { name: 'Solutions', href: '/solutions' },
  { name: 'Blog', href: '/blog' },
  { name: 'Updates', href: '/updates' },
  { name: 'Contact', href: '/contact' },
>>>>>>> cursor/create-and-deploy-new-content-3afb
]

=======
>>>>>>> cursor/create-and-deploy-new-content-b0b6
export default function Navigation() {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Zion</div>
          <div className="space-x-6">
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/about" className="hover:text-blue-400">About</a>
            <a href="/contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}