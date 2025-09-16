export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p>&copy; 2025 Zion Holdings. All rights reserved.</p>
=======
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </div>
            <p className="text-gray-400 text-base">
              Leading the future of AI and technology solutions. Transform your business with cutting-edge innovation.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><a href="/solutions/ai-autonomous-research" className="text-base text-gray-300 hover:text-white transition-colors duration-200">AI Research Assistant</a></li>
                  <li><a href="/solutions/quantum-neural-networks" className="text-base text-gray-300 hover:text-white transition-colors duration-200">Quantum Neural Networks</a></li>
                  <li><a href="/solutions/autonomous-business" className="text-base text-gray-300 hover:text-white transition-colors duration-200">Autonomous Business Ops</a></li>
                  <li><a href="/solutions/it-asset-management" className="text-base text-gray-300 hover:text-white transition-colors duration-200">IT Asset Management</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><a href="/about" className="text-base text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
                  <li><a href="/research" className="text-base text-gray-300 hover:text-white transition-colors duration-200">Research</a></li>
                  <li><a href="/careers" className="text-base text-gray-300 hover:text-white transition-colors duration-200">Careers</a></li>
                  <li><a href="/contact" className="text-base text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><a href="/support" className="text-base text-gray-300 hover:text-white transition-colors duration-200">Help Center</a></li>
                  <li><a href="/documentation" className="text-base text-gray-300 hover:text-white transition-colors duration-200">Documentation</a></li>
                  <li><a href="/api" className="text-base text-gray-300 hover:text-white transition-colors duration-200">API Reference</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><a href="/privacy" className="text-base text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-base text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a></li>
                  <li><a href="/cookies" className="text-base text-gray-300 hover:text-white transition-colors duration-200">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
>>>>>>> origin/feature/updates-2025-09
        </div>
      </div>
    </footer>
  )
<<<<<<< HEAD
}
=======
}

>>>>>>> origin/feature/updates-2025-09
