import React from 'react'

const links = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Research', href: '/research' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="text-sm leading-6 text-gray-400 hover:text-blue-400">
              {l.name}
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
      </div>
    </footer>
  )
}
