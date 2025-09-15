import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10 text-center text-gray-400">
      <p className="text-sm">© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
    </footer>
  )
}
