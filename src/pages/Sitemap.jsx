
      ]
    }
  ];


import { Link } from 'react-router-dom';

export default function Sitemap() {
  const sitemapStructure = [

        { name: 'Partners', path: '/partners', description: 'Partnership programs' }
      ] }, {""
      title: 'Services', icon: Briefcase,
      pages: [""
        { name: 'AI Services', path: '/services/ai', description: 'Artificial intelligence solutions' }, ""
        { name: 'Cloud Solutions', path: '/services/cloud', description: 'Cloud infrastructure and migration' }","
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and compliance' }, ""
        { name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Hardware and network solutions' }","
        { name: 'Digital Transformation', path: '/services/transformation', description: 'Business transformation consulting' }, ""
        { name: 'Consulting', path: '/services/consulting', description: 'Strategic technology consulting' }
      ] }, {""
      title: 'Solutions', icon: Target,
      pages: [""
        { name: 'Industry Solutions', path: '/solutions/industry', description: 'Sector-specific solutions' }, ""
        { name: 'Manufacturing', path: '/solutions/manufacturing', description: 'Smart factory solutions' }","
        { name: 'Financial Services', path: '/solutions/financial', description: 'FinTech and banking solutions' }, ""
        { name: 'Healthcare', path: '/solutions/healthcare', description: 'Digital health solutions' }","
        { name: 'Retail', path: '/solutions/retail', description: 'E-commerce and retail solutions' }, ""
        { name: 'Education', path: '/solutions/education', description: 'EdTech solutions' }
      ] }, {""
      title: 'Resources', icon: FileText,
      pages: [""
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and examples' }, ""
        { name: 'Research & Development', path: '/research-development', description: 'Innovation and research' }","
        { name: 'Blog', path: '/blog', description: 'Latest insights and articles' }, ""
        { name: 'White Papers', path: '/white-papers', description: 'Industry research papers' }","
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' }, ""
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' }
      ] }, {""
      title: 'Events & News', icon: Video,
      pages: [""
        { name: 'Events', path: '/events', description: 'Upcoming and past events' }, ""
        { name: 'News', path: '/news', description: 'Company news and updates' }","
        { name: 'Press Releases', path: '/press', description: 'Official press releases' }, ""
        { name: 'Media Kit', path: '/media-kit', description: 'Brand assets and resources' }
      ] }, {""
      title: 'Support & Help', icon: HelpCircle,
      pages: [""
        { name: 'Help Center', path: '/support', description: 'Self-service support' }, ""
        { name: 'Training', path: '/training', description: 'Training and certification' }","
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' }, ""
        { name: 'Contact Support', path: '/contact', description: 'Get help from our team' }","
        { name: 'Status Page', path: '/status', description: 'System status and uptime' }
      ] }, {""
      title: 'Legal & Policies', icon: Users,
      pages: [""
        { name: 'Privacy Policy', path: '/privacy-policy', description: 'Data privacy information' }, ""
        { name: 'Terms of Service', path: '/terms-of-service', description: 'Terms and conditions' }","
        { name: 'Cookie Policy', path: '/cookie-policy', description: 'Cookie usage information' }, ""
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' }","
        { name: 'Security', path: '/security', description: 'Security practices and policies' }
      ] }, {""
      title: 'Developer Resources', icon: Globe,
      pages: [""
        { name: 'API Documentation', path: '/api', description: 'Developer API reference' }, ""
        { name: 'SDKs & Libraries', path: '/developers/sdks', description: 'Software development kits' }","
        { name: 'Code Examples', path: '/developers/examples', description: 'Sample code and tutorials' }, ""
        { name: 'Developer Blog', path: '/developers/blog', description: 'Technical articles' }","
        { name: 'Community Forum', path: '/community', description: 'Developer community' }
      ] }
  ];

  const externalLinks = [""
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', description: 'Follow us on LinkedIn' }, ""
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', description: 'Follow us on Twitter' }","
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', description: 'Open source projects' }, ""
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', description: 'Video content and tutorials' }","
    { name: 'Discord', url: 'https://discord.gg/ziontechgroup', description: 'Join our community' }

  ];

  return (""
    <div className="min-h-screen bg-zion-blue-dark">

            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
              Site Map
            </h1>""
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Navigate through all the pages and resources available on the Zion Tech Group website
            </p>""

            <p className="text-lg text-zion-slate-light">
              Find everything you need to explore our services, solutions, and resources
            </p>
          </div>
        </div>
      </section>


                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                ""
                <div className="space-y-4">
                  {section.pages.map((page, pageIndex) => (""
                    <div key={pageIndex} className="group">

                          <div className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                            {page.name}
                          </div>""

                          <div className="text-zion-slate-light text-sm">
                            {page.description}
                          </div>
                        </div>
                    ))}
                </div>
                {/* Quick Links */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-white mb-8">Quick Links</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:scale-105 transition-transform"
                        >
                            Get Started
                        </Link>
                        <Link
                            to="/services"
                            className="px-6 py-3 border-2 border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors"
                        >
                            View Services
                        </Link>
                        <Link
                            to="/help"
                            className="px-6 py-3 border-2 border-zion-purple text-zion-purple rounded-lg font-medium hover:bg-zion-purple hover:text-white transition-colors"
                        >
                            Get Help
                        </Link>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Connect with us on social media and explore additional resources
            </p>
          </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {link.name}
                </h3>""

                <p className="text-zion-slate-light text-sm">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>



                Search Website
              </Link>
            </div>
        </div>
      </section>
    </div>











