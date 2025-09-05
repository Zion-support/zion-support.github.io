import Link from &quot;next/link&quot;;

export const metadata = {
  title: &quot;AI Automation Services - Zion Tech Group&quot;,
  description: &quot;Transform your business with intelligent AI automation solutions. Streamline operations, reduce costs, and enhance productivity with our cutting-edge automation technology.&quot;,
  keywords: &quot;AI automation, business process automation, intelligent automation, workflow automation, Zion Tech Group&quot;};

export default function AIAutomationServicesPage() {
  return (
    <div className=&quot;min-h-screen py-20 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;max-w-7xl mx-auto&quot;>
        {/* Hero Section */}
        <div className=&quot;text-center mb-16&quot;>
          <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
            <span className=&quot;gradient-text&quot;>AI Automation Services</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
            Transform your business operations with intelligent automation that learns, adapts, and scales with your needs.
          </p>
        </div>

        {/* Overview Section */}
        <section className=&quot;mb-20&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;>
            <div>
              <h2 className=&quot;text-3xl font-bold mb-6&quot;>Intelligent Automation for the Modern Enterprise</h2>
              <p className=&quot;text-lg text-gray-300 mb-6&quot;>
                Our AI automation services combine machine learning, natural language processing, and robotic process automation 
                to create intelligent systems that handle complex business processes with human-like understanding.
              </p>
              <p className=&quot;text-lg text-gray-300 mb-8&quot;>
                From customer service to supply chain management, our solutions adapt to your business needs and continuously 
                improve performance through advanced analytics and feedback loops.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4&quot;>
                <Link href=&quot;/contact&quot; className=&quot;btn-primary&quot;>
                  Get Started
                </Link>
                <Link href=&quot;/case-studies&quot; className=&quot;btn-secondary&quot;>
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8&quot;>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Key Benefits</h3>
              <ul className=&quot;space-y-3 text-gray-300&quot;>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-green-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M5 13l4 4L19 7&quot; />
                  </svg>
                  24/7 operational efficiency
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-green-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M5 13l4 4L19 7&quot; />
                  </svg>
                  Reduced operational costs by 40-60%
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-green-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M5 13l4 4L19 7&quot; />
                  </svg>
                  Improved accuracy and compliance
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-green-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M5 13l4 4L19 7&quot; />
                  </svg>
                  Scalable and adaptive solutions
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className=&quot;mb-20&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Our AI Automation Solutions</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* Process Automation */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Process Automation</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Automate repetitive business processes with intelligent workflows that adapt to changing conditions.
              </p>
              <Link href=&quot;/ai-autonomous-business-process-automation&quot; className=&quot;text-blue-400 hover:text-blue-300 transition-colors text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* Document Processing */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Document Processing</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Extract, classify, and process documents automatically with advanced OCR and NLP capabilities.
              </p>
              <Link href=&quot;/ai-content-generation&quot; className=&quot;text-green-400 hover:text-green-300 transition-colors text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* Customer Service Automation */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Customer Service Automation</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Provide instant, intelligent customer support with AI-powered chatbots and automated response systems.
              </p>
              <Link href=&quot;/ai-assistant&quot; className=&quot;text-purple-400 hover:text-purple-300 transition-colors text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* Data Analytics Automation */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-yellow-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Data Analytics Automation</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Automate data collection, processing, and analysis to generate actionable insights in real-time.
              </p>
              <Link href=&quot;/ai-business-intelligence&quot; className=&quot;text-yellow-400 hover:text-yellow-300 transition-colors text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* Supply Chain Automation */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-red-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Supply Chain Automation</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Optimize inventory management, demand forecasting, and logistics with intelligent automation.
              </p>
              <Link href=&quot;/ai-autonomous-logistics&quot; className=&quot;text-red-400 hover:text-red-300 transition-colors text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* Compliance Automation */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-indigo-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Compliance Automation</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Ensure regulatory compliance with automated monitoring, reporting, and audit trail systems.
              </p>
              <Link href=&quot;/ai-compliance-automation&quot; className=&quot;text-indigo-400 hover:text-indigo-300 transition-colors text-sm&quot;>
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className=&quot;mb-20&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Advanced Technology Stack</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Machine Learning</h4>
              <p className=&quot;text-sm text-gray-400&quot;>Advanced ML algorithms for pattern recognition and prediction</p>
            </div>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Natural Language Processing</h4>
              <p className=&quot;text-sm text-gray-400&quot;>Understanding and processing human language naturally</p>
            </div>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Computer Vision</h4>
              <p className=&quot;text-sm text-gray-400&quot;>Visual recognition and image processing capabilities</p>
            </div>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Robotic Process Automation</h4>
              <p className=&quot;text-sm text-gray-400&quot;>Automating repetitive digital tasks and workflows</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;text-center&quot;>
          <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 max-w-4xl mx-auto&quot;>
            <h2 className=&quot;text-3xl font-bold mb-4&quot;>Ready to Automate Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join hundreds of companies that have transformed their operations with our AI automation solutions.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;btn-primary&quot;>
                Start Your Automation Journey
              </Link>
              <Link href=&quot;/case-studies&quot; className=&quot;btn-secondary&quot;>
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}