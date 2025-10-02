import React from 'react'';
import { Link } from 'react-router-dom'';
import { Helmet } from 'react-helmet-async'';

const DocumentationPage: React.FC  = () => {
  const documentationSections = [
    {
      title: "Getting Started","
      description: "Quick start guides and tutorials to help you get up and running with our solutions.","
      icon: "🚀","
      links: [,
        { title: "Quick Start Guide", href: "/docs/quick-start" },"
        { title: "Installation Guide", href: "/docs/installation" },"
        { title: "First Steps Tutorial", href: "/docs/first-steps" },"
        { title: "Basic Configuration", href: "/docs/configuration" }"
      ]
    },
    {
      title: "API Documentation","
      description: "Comprehensive API reference and integration guides for developers.","
      icon: "🔌","
      links: [,
        { title: "API Reference", href: "/docs/api-reference" },"
        { title: "Authentication", href: "/docs/authentication" },"
        { title: "Rate Limits", href: "/docs/rate-limits" },"
        { title: "SDK Downloads", href: "/docs/sdk" }"
      ]
    },
    {
      title: "User Guides","
      description: "Step-by-step guides for using our platform features and capabilities.","
      icon: "📖","
      links: [,
        { title: "Dashboard Guide", href: "/docs/dashboard" },"
        { title: "Analytics Setup", href: "/docs/analytics" },"
        { title: "Automation Workflows", href: "/docs/workflows" },"
        { title: "Integration Setup", href: "/docs/integrations" }"
      ]
    },
    {
      title: "Developer Resources","
      description: "Resources and tools for developers building with our platform.","
      icon: "👨‍💻","
      links: [,
        { title: "Code Examples", href: "/docs/examples" },"
        { title: "Best Practices", href: "/docs/best-practices" },"
        { title: "Testing Guide", href: "/docs/testing" },"
        { title: "Troubleshooting", href: "/docs/troubleshooting" }"
      ]
    },
    {
      title: "Security & Compliance","
      description: "Security guidelines, compliance information, and best practices.","
      icon: "🔒","
      links: [,
        { title: "Security Overview", href: "/docs/security" },"
        { title: "Data Privacy", href: "/docs/privacy" },"
        { title: "Compliance Guide", href: "/docs/compliance" },"
        { title: "Security Best Practices", href: "/docs/security-best-practices" }"
      ]
    },
    {
      title: "Support & Community","
      description: "Get help, connect with the community, and find additional resources.","
      icon: "🤝","
      links: [,
        { title: "Support Center", href: "/docs/support" },"
        { title: "Community Forum", href: "/docs/community" },"
        { title: "FAQ", href: "/docs/faq" },"
        { title: "Contact Support", href: "/contact" }"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation, guides, and resources for Zion Tech Group's AI and technology solutions." />"
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">"
        {/* Header */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">"
          <div className="container mx-auto px-6 text-center">"
            <h1 className="text-4xl md: text-5xl font-bold mb-4">Documentation</h1>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Comprehensive guides, API documentation, and resources to help you get the most out of our solutions.
            </p>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8 bg-white border-b">"
          <div className="container mx-auto px-6">"
            <div className="max-w-2xl mx-auto">"
              <div className="relative">"
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent",
                />
                <div className="absolute left-4 top-3.5 text-gray-400">"
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">"
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />"
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-20">"
          <div className="container mx-auto px-6">"
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">"
              {documentationSections.map((section, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover: shadow-lg transition-shadow">"
                  <div className="text-4xl mb-4">{section.icon}</div>"
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>"
                  <p className="text-gray-600 mb-6">{section.description}</p>"
                  <ul className="space-y-2">"
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.href}
                          className="text-blue-600 hover: text-blue-800 transition-colors text-sm",
                        >
                          {link.title} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Topics</h2>"
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">"
                Most frequently accessed documentation and guides
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8">"
              <div className="bg-gray-50 p-8 rounded-xl">"
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Start Guides</h3>"
                <ul className="space-y-2 text-gray-600">"
                  <li>• <Link to="/docs/quick-start" className="text-blue-600 hover: text-blue-800">Getting Started with AI Services</Link></li>"
                  <li>• <Link to="/docs/micro-saas-setup" className="text-blue-600 hover: text-blue-800">Setting Up Your Micro SaaS</Link></li>"
                  <li>• <Link to="/docs/cloud-migration" className="text-blue-600 hover: text-blue-800">Cloud Migration Guide</Link></li>"
                  <li>• <Link to="/docs/automation-setup" className="text-blue-600 hover: text-blue-800">Automation Setup</Link></li>"
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">"
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integration Guides</h3>"
                <ul className="space-y-2 text-gray-600">"
                  <li>• <Link to="/docs/api-integration" className="text-blue-600 hover: text-blue-800">API Integration</Link></li>"
                  <li>• <Link to="/docs/webhook-setup" className="text-blue-600 hover: text-blue-800">Webhook Configuration</Link></li>"
                  <li>• <Link to="/docs/sdk-integration" className="text-blue-600 hover: text-blue-800">SDK Integration</Link></li>"
                  <li>• <Link to="/docs/third-party-apis" className="text-blue-600 hover: text-blue-800">Third-party API Integration</Link></li>"
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">"
                <h3 className="text-xl font-bold text-gray-900 mb-4">Troubleshooting</h3>"
                <ul className="space-y-2 text-gray-600">"
                  <li>• <Link to="/docs/common-issues" className="text-blue-600 hover: text-blue-800">Common Issues</Link></li>"
                  <li>• <Link to="/docs/error-codes" className="text-blue-600 hover: text-blue-800">Error Codes Reference</Link></li>"
                  <li>• <Link to="/docs/performance-optimization" className="text-blue-600 hover: text-blue-800">Performance Optimization</Link></li>"
                  <li>• <Link to="/docs/debugging-guide" className="text-blue-600 hover: text-blue-800">Debugging Guide</Link></li>"
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">"
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Topics</h3>"
                <ul className="space-y-2 text-gray-600">"
                  <li>• <Link to="/docs/custom-models" className="text-blue-600 hover: text-blue-800">Custom AI Models</Link></li>"
                  <li>• <Link to="/docs/scaling-guide" className="text-blue-600 hover: text-blue-800">Scaling Your Solution</Link></li>"
                  <li>• <Link to="/docs/security-hardening" className="text-blue-600 hover: text-blue-800">Security Hardening</Link></li>"
                  <li>• <Link to="/docs/monitoring-setup" className="text-blue-600 hover: text-blue-800">Monitoring & Alerting</Link></li>"
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>"
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">"
                Can't find what you're looking for? Our support team is here to help.';
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">"
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">"
                <div className="text-4xl mb-4">💬</div>"
                <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat</h3>"
                <p className="text-gray-600 mb-4">Get instant help from our support team</p>"
                <Link 
                  to="/contact" 
                  className="text-blue-600 font-semibold hover: text-blue-800 transition-colors",
                >
                  Start Chat →
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">"
                <div className="text-4xl mb-4">📧</div>"
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>"
                <p className="text-gray-600 mb-4">Send us your questions and we'll respond quickly</p>';
                <Link 
                  to="/contact" 
                  className="text-blue-600 font-semibold hover: text-blue-800 transition-colors",
                >
                  Send Email →
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">"
                <div className="text-4xl mb-4">📞</div>"
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phone Support</h3>"
                <p className="text-gray-600 mb-4">Speak directly with our technical experts</p>"
                <Link 
                  to="/contact" 
                  className="text-blue-600 font-semibold hover: text-blue-800 transition-colors",
                >
                  Call Us →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-800 text-white">"
          <div className="container mx-auto px-6 text-center">"
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>"
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">"
              Explore our solutions and start building with our comprehensive documentation and support.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">"
              <Link 
                to="/services" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover: bg-blue-700 transition-colors",
              >
                Explore Services
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover: bg-white hover:text-gray-800 transition-colors",
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocumentationPage;