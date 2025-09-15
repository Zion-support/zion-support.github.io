<<<<<<< HEAD
=======
'use client'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Updates', href: '/updates' },
  { name: 'New', href: '/updates/real-time-agent-cost-controller-1-0' },
]

>>>>>>> 60aabff78405a73f1a20f7e802e2036f236d650f
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