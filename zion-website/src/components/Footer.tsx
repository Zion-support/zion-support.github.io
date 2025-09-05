const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Research', href: '/research' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' }],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/ziontechgroup',
      icon: (props: any) => (
        <svg fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; {...props}>
          <path d=&quot;M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z&quot;/>
        </svg>
      )},
    {
      name: 'Twitter',
      href: 'https://twitter.com/ziontechgroup',
      icon: (props: any) => (
        <svg fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; {...props}>
          <path d=&quot;M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84&quot; />
        </svg>
      )},
    {
      name: 'GitHub',
      href: 'https://github.com/ziontechgroup',
      icon: (props: any) => (
        <svg fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; {...props}>
          <path fillRule=&quot;evenodd&quot; d=&quot;M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z&quot; clipRule=&quot;evenodd&quot; />
        </svg>
      )},
    {
      name: 'YouTube',
      href: 'https://youtube.com/@ziontechgroup',
      icon: (props: any) => (
        <svg fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; {...props}>
          <path d=&quot;M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z&quot;/>
        </svg>
      )}]}

export default function Footer() {
  return (
    <footer className=&quot;bg-gray-900 border-t border-white/10&quot;>
      <div className=&quot;max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8&quot;>
        <div className=&quot;xl:grid xl:grid-cols-3 xl:gap-8&quot;>
          <div className=&quot;space-y-8 xl:col-span-1&quot;>
            <div className=&quot;text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent&quot;>
              Zion Tech Group
            </div>
            <p className=&quot;text-gray-400 text-base&quot;>
              Leading the future of AI and technology solutions. Transform your business with cutting-edge innovation.
            </p>
            <div className=&quot;flex space-x-6&quot;>
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className=&quot;text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110&quot;
                >
                  <span className=&quot;sr-only&quot;>{item.name}</span>
                  <item.icon className=&quot;h-6 w-6&quot; aria-hidden=&quot;true&quot; />
                </Link>
              ))}
            </div>
          </div>
          <div className=&quot;mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2&quot;>
            <div className=&quot;md:grid md:grid-cols-2 md:gap-8&quot;>
              <div>
                <h3 className=&quot;text-sm font-semibold text-gray-400 tracking-wider uppercase&quot;>Solutions</h3>
                <ul role=&quot;list&quot; className=&quot;mt-4 space-y-4&quot;>
                  <li>
                    <a href=&quot;/solutions/ai-autonomous-research&quot; className=&quot;text-base text-gray-300 hover:text-white transition-colors duration-200&quot;>
                      AI Research Assistant
                    </Link>
                  </li>
                  <li>
                    <a href=&quot;/solutions/quantum-neural-networks&quot; className=&quot;text-base text-gray-300 hover:text-white transition-colors duration-200&quot;>
                      Quantum Neural Networks
                    </Link>
                  </li>
                  <li>
                    <a href=&quot;/solutions/autonomous-business&quot; className=&quot;text-base text-gray-300 hover:text-white transition-colors duration-200&quot;>
                      Autonomous Business Ops
                    </Link>
                  </li>
                  <li>
                    <a href=&quot;/solutions/it-asset-management&quot; className=&quot;text-base text-gray-300 hover:text-white transition-colors duration-200&quot;>
                      IT Asset Management
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=&quot;mt-12 md:mt-0&quot;>
                <h3 className=&quot;text-sm font-semibold text-gray-400 tracking-wider uppercase&quot;>Company</h3>
                <ul role=&quot;list&quot; className=&quot;mt-4 space-y-4&quot;>
                  <li>
                    <a href=&quot;/about&quot; className=&quot;text-base text-gray-300 hover:text-white transition-colors duration-200&quot;>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a href=&quot;/research&quot; className=&quot;text-base text-gray-300 hover:text-white transition-colors duration-200&quot;>
                      Research
                    </Link>
                  </li>
                  <li>
                    <a href=&quot;/careers&quot; className=&quot;text-base text-gray-300 hover:text-white transition-colors duration-200&quot;>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <a href=&quot;/contact&quot; className=&quot;text-base text-gray-300 hover:text-white transition-colors duration-200&quot;>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=&quot;md:grid md:grid-cols-2 md:gap-8&quot;>
              <div>
                <h3 className=&quot;text-sm font-semibold text-gray-400 tracking-wider uppercase&quot;>Support</h3>
                <ul role=&quot;list&quot; className=&quot;mt-4 space-y-4&quot;>
                  <li>
                    <a href=&quot;/support&quot; className=&quot;text-base text-gray-300 hover:text-white transition-colors duration-200&quot;>
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <a href=&quot;/documentation&quot; className=&quot;text-base text-gray-300 hover:text-white transition-colors duration-200&quot;>
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <a href=&quot;/api&quot; className=&quot;text-base text-gray-300 hover:text-white transition-colors duration-200&quot;>
                      API Reference
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=&quot;mt-12 md:mt-0&quot;>
                <h3 className=&quot;text-sm font-semibold text-gray-400 tracking-wider uppercase&quot;>Legal</h3>
                <ul role=&quot;list&quot; className=&quot;mt-4 space-y-4&quot;>
                  <li>
                    <a href=&quot;/privacy&quot; className=&quot;text-base text-gray-300 hover:text-white transition-colors duration-200&quot;>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <a href=&quot;/terms&quot; className=&quot;text-base text-gray-300 hover:text-white transition-colors duration-200&quot;>
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <a href=&quot;/cookies&quot; className=&quot;text-base text-gray-300 hover:text-white transition-colors duration-200&quot;>
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=&quot;mt-12 border-t border-gray-800 pt-8&quot;>
          <p className=&quot;text-base text-gray-400 xl:text-center&quot;>
            &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}