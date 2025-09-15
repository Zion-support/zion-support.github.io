<<<<<<< HEAD
import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10 text-center text-gray-400">
      <p className="text-sm">© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
    </footer>
  )
}
=======
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Zion Tech Group</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="/about" className="text-gray-400 hover:text-white">About</a>
            <a href="/services" className="text-gray-400 hover:text-white">Services</a>
            <a href="/solutions" className="text-gray-400 hover:text-white">Solutions</a>
            <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

>>>>>>> 230e5e007f55 (Checkpoint before follow-up message)
