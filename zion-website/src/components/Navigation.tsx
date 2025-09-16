'use client'
"use client"
"use client"


const navigation = [
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200 hover:-translate-y-0.5">{item.name}</a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/contact" className="text-sm font-semibold leading-6 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105">Get Started</a>
        </div>
      </nav>
