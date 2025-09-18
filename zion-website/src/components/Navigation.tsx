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