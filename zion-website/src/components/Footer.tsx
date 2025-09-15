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
