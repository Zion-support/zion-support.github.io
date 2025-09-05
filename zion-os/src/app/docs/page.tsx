import Link from &quot;next/link&quot;;

export const metadata = {
  title: &quot;Documentation - Zion Tech Group | Technical Guides & Resources&quot;,
  description: &quot;Access comprehensive technical documentation, guides, and resources for Zion Tech Group's products and services. Find API docs, tutorials, and best practices.&quot;,
  keywords: &quot;documentation, technical guides, API docs, tutorials, Zion Tech Group, developer resources, technical resources&quot;};

export default function DocumentationPage() {
  return (
    <div className=&quot;min-h-screen&quot;>
      {/* Hero Section */}
      <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            <span className=&quot;gradient-text&quot;>Documentation</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
            Comprehensive technical documentation, guides, and resources to help you 
            get the most out of Zion Tech Group's products and services
          </p>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30&quot;>
            <div className=&quot;text-center mb-12&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
                Quick Start Guides
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Get up and running quickly with our step-by-step guides
              </p>
            </div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6&quot;>
                  <svg className=&quot;w-10 h-10 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                  </svg>
                </div>
                <h3 className=&quot;text-xl font-semibold mb-3&quot;>Zion OS Platform</h3>
                <p className=&quot;text-gray-300 mb-4&quot;>
                  Deploy your first digital economy in minutes
                </p>
                <Link href=&quot;/docs/zion-os/quickstart&quot; className=&quot;btn-primary&quot;>
                  Get Started
                </Link>
              </div>
              
              <div className=&quot;text-center&quot;>
                <div className=&quot;w-20 h-20 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6&quot;>
                  <svg className=&quot;w-10 h-10 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                  </svg>
                </div>
                <h3 className=&quot;text-xl font-semibold mb-3&quot;>AI Services</h3>
                <p className=&quot;text-gray-300 mb-4&quot;>
                  Integrate AI capabilities into your applications
                </p>
                <Link href=&quot;/docs/ai-services/quickstart&quot; className=&quot;btn-primary&quot;>
                  Get Started
                </Link>
              </div>
              
              <div className=&quot;text-center&quot;>
                <div className=&quot;w-20 h-20 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6&quot;>
                  <svg className=&quot;w-10 h-10 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                  </svg>
                </div>
                <h3 className=&quot;text-xl font-semibold mb-3&quot;>API Integration</h3>
                <p className=&quot;text-gray-300 mb-4&quot;>
                  Connect to our services via REST APIs
                </p>
                <Link href=&quot;/docs/api/quickstart&quot; className=&quot;btn-primary&quot;>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Documentation Categories
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Find the documentation you need organized by product and service
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* Zion OS Platform */}
            <div className=&quot;card group hover:bg-blue-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Zion OS Platform</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Complete documentation for the Zion OS digital economy platform
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Platform Overview</li>
                <li>• Installation & Setup</li>
                <li>• Configuration Guide</li>
                <li>• API Reference</li>
                <li>• Deployment Guide</li>
              </ul>
              <Link href=&quot;/docs/zion-os&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                View Documentation →
              </Link>
            </div>
            
            {/* AI Services */}
            <div className=&quot;card group hover:bg-purple-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>AI Services</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Documentation for AI and machine learning services
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• AI Services Overview</li>
                <li>• Content Generation</li>
                <li>• Business Intelligence</li>
                <li>• Autonomous Operations</li>
                <li>• AI Governance</li>
              </ul>
              <Link href=&quot;/docs/ai-services&quot; className=&quot;text-purple-400 hover:text-purple-300 text-sm font-medium&quot;>
                View Documentation →
              </Link>
            </div>
            
            {/* Quantum Services */}
            <div className=&quot;card group hover:bg-indigo-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-indigo-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Quantum Services</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Guides for quantum computing and quantum algorithms
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Quantum Computing Basics</li>
                <li>• Algorithm Implementation</li>
                <li>• Quantum Error Correction</li>
                <li>• Performance Optimization</li>
                <li>• Use Case Examples</li>
              </ul>
              <Link href=&quot;/docs/quantum-services&quot; className=&quot;text-indigo-400 hover:text-indigo-300 text-sm font-medium&quot;>
                View Documentation →
              </Link>
            </div>
            
            {/* Cybersecurity */}
            <div className=&quot;card group hover:bg-green-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Cybersecurity</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Security implementation and best practices
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Security Framework</li>
                <li>• Threat Detection</li>
                <li>• Compliance Guidelines</li>
                <li>• Incident Response</li>
                <li>• Security Testing</li>
              </ul>
              <Link href=&quot;/docs/cybersecurity&quot; className=&quot;text-green-400 hover:text-green-300 text-sm font-medium&quot;>
                View Documentation →
              </Link>
            </div>
            
            {/* Enterprise IT */}
            <div className=&quot;card group hover:bg-red-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-red-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Enterprise IT</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Infrastructure and enterprise solutions guides
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Infrastructure Setup</li>
                <li>• Cloud Migration</li>
                <li>• DevOps Practices</li>
                <li>• Monitoring & Alerting</li>
                <li>• Disaster Recovery</li>
              </ul>
              <Link href=&quot;/docs/enterprise-it&quot; className=&quot;text-red-400 hover:text-red-300 text-sm font-medium&quot;>
                View Documentation →
              </Link>
            </div>
            
            {/* Space Technology */}
            <div className=&quot;card group hover:bg-yellow-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-yellow-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 19l9 2-9-18-9 18 9-2zm0 0v-8&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Space Technology</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Satellite and space technology documentation
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Satellite Systems</li>
                <li>• Ground Station Setup</li>
                <li>• Communication Protocols</li>
                <li>• Data Processing</li>
                <li>• System Maintenance</li>
              </ul>
              <Link href=&quot;/docs/space-technology&quot; className=&quot;text-yellow-400 hover:text-yellow-300 text-sm font-medium&quot;>
                View Documentation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              API Documentation
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Comprehensive API references and integration guides
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>REST API Reference</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Complete REST API documentation with examples, authentication, 
                and error handling for all Zion Tech Group services.
              </p>
              <div className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <div>• Authentication & Authorization</div>
                <div>• Request/Response Formats</div>
                <div>• Rate Limiting</div>
                <div>• Error Codes</div>
                <div>• SDK Examples</div>
              </div>
              <Link href=&quot;/docs/api/rest&quot; className=&quot;btn-primary&quot;>
                View REST API Docs
              </Link>
            </div>
            
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>GraphQL API</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                GraphQL API documentation for flexible data querying and 
                real-time subscriptions across our services.
              </p>
              <div className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <div>• Schema Documentation</div>
                <div>• Query Examples</div>
                <div>• Mutations & Subscriptions</div>
                <div>• Type Definitions</div>
                <div>• Playground Access</div>
              </div>
              <Link href=&quot;/docs/api/graphql&quot; className=&quot;btn-primary&quot;>
                View GraphQL Docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials & Examples */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Tutorials & Examples
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Step-by-step tutorials and practical examples to help you succeed
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;card group&quot;>
              <div className=&quot;w-full h-32 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-12 h-12 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-3&quot;>Building Your First AI Chatbot</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Learn how to create an intelligent chatbot using our AI services 
                and integrate it into your application.
              </p>
              <div className=&quot;flex items-center text-sm text-gray-400 mb-4&quot;>
                <svg className=&quot;w-4 h-4 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot; />
                </svg>
                15 min read
              </div>
              <Link href=&quot;/docs/tutorials/ai-chatbot&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                Read Tutorial →
              </Link>
            </div>
            
            <div className=&quot;card group&quot;>
              <div className=&quot;w-full h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-12 h-12 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-3&quot;>Quantum Algorithm Implementation</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Step-by-step guide to implementing quantum algorithms using 
                our quantum computing services.
              </p>
              <div className=&quot;flex items-center text-sm text-gray-400 mb-4&quot;>
                <svg className=&quot;w-4 h-4 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot; />
                </svg>
                25 min read
              </div>
              <Link href=&quot;/docs/tutorials/quantum-algorithm&quot; className=&quot;text-purple-400 hover:text-purple-300 text-sm font-medium&quot;>
                Read Tutorial →
              </Link>
            </div>
            
            <div className=&quot;card group&quot;>
              <div className=&quot;w-full h-32 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-12 h-12 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-3&quot;>Security Best Practices</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Comprehensive guide to implementing security best practices 
                across your applications and infrastructure.
              </p>
              <div className=&quot;flex items-center text-sm text-gray-400 mb-4&quot;>
                <svg className=&quot;w-4 h-4 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot; />
                </svg>
                20 min read
              </div>
              <Link href=&quot;/docs/tutorials/security-best-practices&quot; className=&quot;text-green-400 hover:text-green-300 text-sm font-medium&quot;>
                Read Tutorial →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/20 to-gray-900/20&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Developer Resources
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Additional resources to help developers build with our platform
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>
                <svg className=&quot;w-8 h-8 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4&quot; />
                </svg>
              </div>
              <h3 className=&quot;font-semibold mb-2&quot;>SDKs & Libraries</h3>
              <p className=&quot;text-gray-400 text-sm mb-3&quot;>
                Official SDKs for popular programming languages
              </p>
              <Link href=&quot;/docs/sdks&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm&quot;>
                View SDKs →
              </Link>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>
                <svg className=&quot;w-8 h-8 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;font-semibold mb-2&quot;>Code Samples</h3>
              <p className=&quot;text-gray-400 text-sm mb-3&quot;>
                Ready-to-use code examples and snippets
              </p>
              <Link href=&quot;/docs/code-samples&quot; className=&quot;text-purple-400 hover:text-purple-300 text-sm&quot;>
                View Samples →
              </Link>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>
                <svg className=&quot;w-8 h-8 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z&quot; />
                </svg>
              </div>
              <h3 className=&quot;font-semibold mb-2&quot;>Community</h3>
              <p className=&quot;text-gray-400 text-sm mb-3&quot;>
                Connect with other developers
              </p>
              <Link href=&quot;/docs/community&quot; className=&quot;text-green-400 hover:text-green-300 text-sm&quot;>
                Join Community →
              </Link>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>
                <svg className=&quot;w-8 h-8 text-red-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z&quot; />
                </svg>
              </div>
              <h3 className=&quot;font-semibold mb-2&quot;>Status Page</h3>
              <p className=&quot;text-gray-400 text-sm mb-3&quot;>
                Service status and uptime information
              </p>
              <Link href=&quot;/status&quot; className=&quot;text-red-400 hover:text-red-300 text-sm&quot;>
                Check Status →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Help & Support */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Need Help?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Can't find what you're looking for? Our support team is here to help
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;btn-primary text-lg px-8 py-4&quot;>
                Contact Support
              </Link>
              <Link href=&quot;/docs/faq&quot; className=&quot;btn-secondary text-lg px-8 py-4&quot;>
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}