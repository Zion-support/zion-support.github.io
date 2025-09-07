
export default function Footer() {const currentYear = new Date().getFullYear();
  }
  const footerSections = [;

        </svg>;
      );
    }];
  return (

              {social_links.map ((social) => (
                <a;
                  }
                  key={social.name}
                  href={social.href}

                    {social.icon}
                  </div>;
                </a>))}
            </div>;
          </div>;
          {/* Footer Sections */}
          {footer_sections.map ((section) => (<div key={section.title}>;

                {section.links.map ((link) => (
                  <li key={link.name}>;
                    <Link;
                      href={link.href}

                        {link.name}
                      </span>;
                    </Link>;
                  </li>))}
              </ul>;
            </div>))}
        </div>;
        {/* Newsletter Signup */}

              >;
                Subscribe;
              </button>;
            </div>;
          </div>;
        </div>;
        {/* Bottom Footer */}

                Accessibility;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>)}
      links: [
        { name: 'AI Solutions, href: /ai-solutions' },
        { name: 'Quantum Computing, href: /quantum-computing' },
        { name: 'Enterprise Security, href: /ai-powered-enterprise-security' },
        { name: 'Research & Development, href: /research-development' },
        { name: 'Consulting, href: /consulting' }]},
    {
      title: 'AI Platforms,
      links: [
        { name: Autonomous Systems', href: '/ai-autonomous-systems },
        { name: Business Intelligence', href: '/ai-business-intelligence },
        { name: Content Generation', href: '/ai-content-generator },
        { name: Research Assistant', href: '/ai-autonomous-research-assistant },
        { name: Neural Networks', href: '/quantum-neural-network-platform }]},
    {
      title: Resources',
      links: [
        { name: 'Case Studies, href: /case-studies' },
        { name: 'White Papers, href: /white-papers' },
        { name: 'Documentation, href: /docs' },
        { name: 'Webinars, href: /webinars' },
        { name: 'Events, href: /events' }]}],

  const socialLinks = $2;
      href: 'https://linkedin.com/company/ziontechgroup, 
      icon: (
        <svg className = $2;
    { 
      name: Twitter', 
      href: 'https://twitter.com/ziontechgroup, 
      icon: (
        <svg className = $2;
    { 
      name: GitHub', 
      href: 'https://github.com/ziontechgroup, 
      icon: (
        <svg className = $2;
    { 
      name: YouTube', 
      href: 'https://youtube.com/@ziontechgroup, 
      icon: (
        <svg className = $2;
    { 
      name: Discord', 
      href: 'https://discord.gg/ziontechgroup', 
      icon: (
        <svg className = $2;
  return (
    <footer className="bg-black/95 border-t border-white/20 role=contentinfo" aria-label="Site footer>
      <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12>
          {/* Company Info */}
          <div className=lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6>
              <div className=w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg>Z</span>
              </div>
              <span className=text-xl font-bold gradient-text text-shadow">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6>
              Leading provider of AI-powered technology solutions, autonomous systems, and quantum computing innovations.
            </p>
            <div className=flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank
                  rel=noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/10 group
                  aria-label={`Follow us on ${social.name}`}
                >
                  <div className=group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-lg>{section.title}</h3>
              <ul className=space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-200 text-sm group flex items-center
                      aria-label={`Navigate to ${link.name} page`}
                    >
                      <span className=group-hover:translate-x-1 transition-transform duration-200">
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
        <div className="border-t border-white/10 pt-8 mb-8>
          <div className=max-w-md">
            <h3 className="text-white font-semibold mb-3>Stay Updated</h3>
            <p className=text-gray-400 text-sm mb-4">
              Get the latest insights on AI technology and industry trends.
            </p>
            <div className="flex space-x-2>
              <input
                type=email"
                placeholder="Enter your email
                className=flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                aria-label="Email address for newsletter
              />
              <button
                className=px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                aria-label="Subscribe to newsletter
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className=border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0>
            <div className=text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md: justify-end space-x-6 text-sm>
              <Link href=/privacy" className="text-gray-400 hover:text-white transition-colors duration-200>
                Privacy Policy
              </Link>
              <Link href=/terms" className="text-gray-400 hover:text-white transition-colors duration-200>
                Terms of Service
              </Link>
              <Link href=/cookies" className="text-gray-400 hover:text-white transition-colors duration-200>
                Cookie Policy
              </Link>
              <Link href=/accessibility" className="text-gray-400 hover:text-white transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
