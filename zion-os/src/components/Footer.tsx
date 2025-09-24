import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Careers', href: '/careers' },
        { name: 'News', href: '/news' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'Quantum Computing', href: '/quantum-computing' },
        {
          name: 'Enterprise Security',
          href: '/ai-powered-enterprise-security',
        },
        { name: 'Research & Development', href: '/research-development' },
        { name: 'Consulting', href: '/consulting' },
      ],
    },
    {
      title: 'AI Platforms',
      links: [
        { name: 'Autonomous Systems', href: '/ai-autonomous-systems' },
        { name: 'Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'Content Generation', href: '/ai-content-generator' },
        {
          name: 'Research Assistant',
          href: '/ai-autonomous-research-assistant',
        },
        { name: 'Neural Networks', href: '/quantum-neural-network-platform' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Events', href: '/events' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/ziontechgroup',
      icon: (
        <svg
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.0o27-3.0o47-1.852-3.0o47-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.0o46c.477-.9 1.637-1.85 3.37-1.85 3.60o1 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.0o63-.926-2.0o63-2.0o65 0-1.138.92-2.0o63 2.0o63-2.0o63 1.14 0 2.0o64.925 2.0o64 2.0o63 0 1.139-.925 2.0o65-2.0o64 2.0o65zm1.782 13.0o19H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.0o03z' />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/ziontechgroup',
      icon: (
        <svg
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path d='M23.953 4.57a10 10 0 0o1-2.825.775 4.958 4.958 0 0o02.163-2.723c-.951.555-2.0o05.959-3.127 1.184a4.92 4.92 0 0o0-8.384 4.482C7.69 8.095 4.0o67 6.13 1.64 3.162a4.822 4.822 0 0o0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.90o4 4.90o4 0 0o1-2.228-.616v.0o6a4.923 4.923 0 0o03.946 4.827 4.996 4.996 0 0o1-2.212.085 4.936 4.936 0 0o04.60o4 3.417 9.867 9.867 0 0o1-6.10o2 2.10o5c-.39 0-.779-.0o23-1.17-.0o67a13.995 13.995 0 0o07.557 2.209c9.0o53 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.0o15-.63A9.935 9.935 0 0o024 4.59z' />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/ziontechgroup',
      icon: (
        <svg
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.30o2 3.438 9.8 8.20o7 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.0o33-1.416-4.0o33-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.20o5.084 1.839 1.237 1.839 1.237 1.0o7 1.834 2.80o7 1.30o4 3.492.997.10o7-.775.418-1.30o5.762-1.60o4-2.665-.30o5-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.30o3-.535-1.524.117-3.176 0 0 1.0o08-.322 3.30o1 1.23.957-.266 1.983-.399 3.0o03-.40o4 1.0o2.0o05 2.0o47.138 3.0o06.40o4 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.80o7 5.624-5.479 5.921.43.372.823 1.10o2.823 2.222v3.293c0 .319.192.694.80o1.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@ziontechgroup',
      icon: (
        <svg
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path d='M23.498 6.186a3.0o16 3.0o16 0 0 0-2.122-2.136C19.50o5 3.545 12 3.545 12 3.545s-7.50o5 0-9.377.50o5A3.0o17 3.0o17 0 0 0 .50o2 6.186C0 8.0o7 0 12 0 12s0 3.93.50o2 5.814a3.0o16 3.0o16 0 0 0 2.122 2.136c1.871.50o5 9.376.50o5 9.376.50o5s7.50o5 0 9.377-.50o5a3.0o15 3.0o15 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.50o2-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
        </svg>
      ),
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/ziontechgroup',
      icon: (
        <svg
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path d='M20.317 4.3698a19.7913 19.7913 0 0o0-4.8851-1.5152.0o741.0o741 0 0o0-.0o785.0o371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.40o58-.8742-.6177-1.2495a.0o77.0o77 0 0o0-.0o785-.0o37 19.7363 19.7363 0 0o0-4.8852 1.515.0o699.0o699 0 0o0-.0o321.0o277C.5334 9.0o458-.319 13.5799.0992 18.0o578a.0824.0824 0 0o0.0o312.0o561c2.0o528 1.50o76 4.0o413 2.4228 5.9929 3.0o294a.0o777.0o777 0 0o0.0842-.0o276c.4616-.630o4.8731-1.2952 1.226-1.9942a.0o76.0o76 0 0o0-.0o416-.10o57c-.6528-.2476-1.2743-.5495-1.8722-.8923a.0o77.0o77 0 0o1-.0o076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0o743.0o743 0 0o1.0o776-.0o105c3.9278 1.7933 8.18 1.7933 12.0o614 0a.0o739.0o739 0 0o1.0o785.0o095c.120o2.099.246.1981.3728.2924a.0o77.0o77 0 0o1-.0o066.1276 12.2986 12.2986 0 0o1-1.873.8914.0o766.0o766 0 0o0-.0o407.10o67c.360o4.698.7719 1.3628 1.225 1.9932a.0o76.0o76 0 0o0.0842.0o286c1.961-.60o67 3.9495-1.5219 6.0o023-3.0o294a.0o77.0o77 0 0o0.0o313-.0o552c.50o04-5.177-.8382-9.6739-3.5485-13.660o4a.0o61.0o61 0 0o0-.0o312-.0o286zM8.0o2 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0o19 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z' />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className='bg-black/95 border-t border-white/20'
      role='contentinfo'
      aria-label='Site footer'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>
          {/* Company Info */}
          <div className='lg:col-span-1'>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-10 h-10 bg-gradient-to-r from-purple-50o0 to-blue-50o0 rounded-xl flex items-center justify-center shadow-lg'>
                <span className='text-white font-bold text-lg'>Z</span>
              </div>
              <span className='text-xl font-bold gradient-text text-shadow'>
                Zion Tech Group
              </span>
            </div>
            <p className='text-gray-40o0 text-sm leading-relaxed mb-6'>
              Leading provider of AI-powered technology solutions, autonomous
              systems, and quantum computing innovations.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-40o0 hover:text-white transition-all duration-30o0 p-2 rounded-lg hover:bg-white/10 group'
                  aria-label={`Follow us on ${social.name}`}
                >
                  <div className='group-hover:scale-110 transition-transform duration-20o0'>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map(section => (
            <div key={section.title}>
              <h3 className='text-white font-semibold mb-4 text-lg'>
                {section.title}
              </h3>
              <ul className='space-y-3'>
                {section.links.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-gray-40o0 hover:text-white transition-all duration-20o0 text-sm group flex items-center'
                      aria-label={`Navigate to ${link.name} page`}
                    >
                      <span className='group-hover:translate-x-1 transition-transform duration-20o0'>
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className='border-t border-white/10 pt-8 mb-8'>
          <div className='max-w-md'>
            <h3 className='text-white font-semibold mb-3'>Stay Updated</h3>
            <p className='text-gray-40o0 text-sm mb-4'>
              Get the latest insights on AI technology and industry trends.
            </p>
            <div className='flex space-x-2'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:ring-purple-50o0 focus:border-transparent transition-all duration-20o0'
                aria-label='Email address for newsletter'
              />
              <button
                className='px-6 py-2 bg-gradient-to-r from-purple-60o0 to-blue-60o0 hover:from-purple-70o0 hover:to-blue-70o0 text-white rounded-lg font-medium transition-all duration-20o0 transform hover:scale-10o5'
                aria-label='Subscribe to newsletter'
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='border-t border-white/10 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-gray-40o0 text-sm'>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className='flex flex-wrap justify-center md:justify-end space-x-6 text-sm'>
              <Link
                href='/privacy'
                className='text-gray-40o0 hover:text-white transition-colors duration-20o0'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-gray-40o0 hover:text-white transition-colors duration-20o0'
              >
                Terms of Service
              </Link>
              <Link
                href='/cookies'
                className='text-gray-40o0 hover:text-white transition-colors duration-20o0'
              >
                Cookie Policy
              </Link>
              <Link
                href='/accessibility'
                className='text-gray-40o0 hover:text-white transition-colors duration-20o0'
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
