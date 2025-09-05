export default function SolutionsPage() {
  return (
    <div className=&quot;min-h-screen bg-white&quot;>
      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
            Our Solutions
          </h1>
          <p className=&quot;text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto&quot;>
            Comprehensive AI-powered platforms and solutions designed to transform your business operations and drive innovation.
          </p>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Enterprise-Grade AI Solutions
            </h2>
            <p className=&quot;text-xl text-gray-600 max-w-2xl mx-auto&quot;>
              From research automation to business operations, our solutions are built to scale and deliver measurable results
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* AI Research Assistant */}
            <div className=&quot;bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow&quot;>
              <div className=&quot;h-48 bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center&quot;>
                <svg className=&quot;w-20 h-20 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z&quot; />
                </svg>
              </div>
              <div className=&quot;p-6&quot;>
                <h3 className=&quot;text-xl font-bold text-gray-900 mb-3&quot;>AI Autonomous Research Assistant</h3>
                <p className=&quot;text-gray-600 mb-4&quot;>
                  Revolutionize research with autonomous AI that works 24/7 to accelerate discovery and innovation across all fields.
                </p>
                <div className=&quot;flex items-center justify-between&quot;>
                  <a href=&quot;/ai-autonomous-research-assistant&quot; className=&quot;text-red-600 hover:text-red-700 font-medium&quot;>
                    Learn More →
                  </Link>
                  <span className=&quot;text-sm text-gray-500&quot;>Research Platform</span>
                </div>
              </div>
            </div>

            {/* Quantum Neural Networks */}
            <div className=&quot;bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow&quot;>
              <div className=&quot;h-48 bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center&quot;>
                <svg className=&quot;w-20 h-20 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                </svg>
              </div>
              <div className=&quot;p-6&quot;>
                <h3 className=&quot;text-xl font-bold text-gray-900 mb-3&quot;>Quantum Neural Network Platform</h3>
                <p className=&quot;text-gray-600 mb-4&quot;>
                  Next-generation quantum computing platform for complex problem solving and advanced AI applications.
                </p>
                <div className=&quot;flex items-center justify-between&quot;>
                  <a href=&quot;/quantum-neural-network-platform&quot; className=&quot;text-purple-600 hover:text-purple-700 font-medium&quot;>
                    Learn More →
                  </Link>
                  <span className=&quot;text-sm text-gray-500&quot;>Quantum Platform</span>
                </div>
              </div>
            </div>

            {/* Autonomous Business Operations */}
            <div className=&quot;bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow&quot;>
              <div className=&quot;h-48 bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center&quot;>
                <svg className=&quot;w-20 h-20 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z&quot; />
                </svg>
              </div>
              <div className=&quot;p-6&quot;>
                <h3 className=&quot;text-xl font-bold text-gray-900 mb-3&quot;>Autonomous Business Operations Platform</h3>
                <p className=&quot;text-gray-600 mb-4&quot;>
                  Streamline workflows and optimize decision-making with intelligent automation and process optimization.
                </p>
                <div className=&quot;flex items-center justify-between&quot;>
                  <a href=&quot;/autonomous-business-operations-platform&quot; className=&quot;text-indigo-600 hover:text-indigo-700 font-medium&quot;>
                    Learn More →
                  </Link>
                  <span className=&quot;text-sm text-gray-500&quot;>Business Platform</span>
                </div>
              </div>
            </div>

            {/* IT Asset Management */}
            <div className=&quot;bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow&quot;>
              <div className=&quot;h-48 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center&quot;>
                <svg className=&quot;w-20 h-20 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01&quot; />
                </svg>
              </div>
              <div className=&quot;p-6&quot;>
                <h3 className=&quot;text-xl font-bold text-gray-900 mb-3&quot;>AI-Powered IT Asset Management</h3>
                <p className=&quot;text-gray-600 mb-4&quot;>
                  Intelligent asset tracking, optimization, and lifecycle management for modern IT infrastructure.
                </p>
                <div className=&quot;flex items-center justify-between&quot;>
                  <a href=&quot;/ai-powered-it-asset-management&quot; className=&quot;text-orange-600 hover:text-orange-700 font-medium&quot;>
                    Learn More →
                  </Link>
                  <span className=&quot;text-sm text-gray-500&quot;>IT Platform</span>
                </div>
              </div>
            </div>

            {/* Cybersecurity Suite */}
            <div className=&quot;bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow&quot;>
              <div className=&quot;h-48 bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center&quot;>
                <svg className=&quot;w-20 h-20 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <div className=&quot;p-6&quot;>
                <h3 className=&quot;text-xl font-bold text-gray-900 mb-3&quot;>Advanced Cybersecurity Suite</h3>
                <p className=&quot;text-gray-600 mb-4&quot;>
                  Comprehensive security solutions with SOC2 compliance automation and advanced threat detection.
                </p>
                <div className=&quot;flex items-center justify-between&quot;>
                  <a href=&quot;/advanced-cybersecurity-suite&quot; className=&quot;text-green-600 hover:text-green-700 font-medium&quot;>
                    Learn More →
                  </Link>
                  <span className=&quot;text-sm text-gray-500&quot;>Security Platform</span>
                </div>
              </div>
            </div>

            {/* AI Automation Services */}
            <div className=&quot;bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow&quot;>
              <div className=&quot;h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center&quot;>
                <svg className=&quot;w-20 h-20 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                </svg>
              </div>
              <div className=&quot;p-6&quot;>
                <h3 className=&quot;text-xl font-bold text-gray-900 mb-3&quot;>Advanced AI Automation Services</h3>
                <p className=&quot;text-gray-600 mb-4&quot;>
                  Transform operations with intelligent automation that learns and adapts to your business needs.
                </p>
                <div className=&quot;flex items-center justify-between&quot;>
                  <a href=&quot;/advanced-ai-automation-services&quot; className=&quot;text-blue-600 hover:text-blue-700 font-medium&quot;>
                    Learn More →
                  </Link>
                  <span className=&quot;text-sm text-gray-500&quot;>Automation Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className=&quot;py-20 bg-gray-50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Solution Categories
            </h2>
            <p className=&quot;text-xl text-gray-600 max-w-2xl mx-auto&quot;>
              Organized by industry and use case to help you find the perfect solution for your needs
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            <div className=&quot;bg-white p-6 rounded-xl shadow-sm text-center&quot;>
              <div className=&quot;w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <svg className=&quot;w-8 h-8 text-blue-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>Research & Development</h3>
              <p className=&quot;text-gray-600 text-sm&quot;>
                AI-powered research platforms and autonomous discovery systems
              </p>
            </div>

            <div className=&quot;bg-white p-6 rounded-xl shadow-sm text-center&quot;>
              <div className=&quot;w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <svg className=&quot;w-8 h-8 text-green-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>Cybersecurity</h3>
              <p className=&quot;text-gray-600 text-sm&quot;>
                Advanced security solutions and compliance automation
              </p>
            </div>

            <div className=&quot;bg-white p-6 rounded-xl shadow-sm text-center&quot;>
              <div className=&quot;w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <svg className=&quot;w-8 h-8 text-purple-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>IT Infrastructure</h3>
              <p className=&quot;text-gray-600 text-sm&quot;>
                Scalable infrastructure and asset management solutions
              </p>
            </div>

            <div className=&quot;bg-white p-6 rounded-xl shadow-sm text-center&quot;>
              <div className=&quot;w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <svg className=&quot;w-8 h-8 text-orange-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>Business Operations</h3>
              <p className=&quot;text-gray-600 text-sm&quot;>
                Process automation and operational optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Industry Applications
            </h2>
            <p className=&quot;text-xl text-gray-600 max-w-2xl mx-auto&quot;>
              Our solutions are designed to work across all industries and business types
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <svg className=&quot;w-10 h-10 text-blue-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Healthcare</h3>
              <p className=&quot;text-gray-600&quot;>
                Drug discovery, clinical research, patient care optimization, and medical device innovation
              </p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <svg className=&quot;w-10 h-10 text-green-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Finance</h3>
              <p className=&quot;text-gray-600&quot;>
                Risk modeling, algorithmic trading, fraud detection, and portfolio optimization
              </p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <svg className=&quot;w-10 h-10 text-purple-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Manufacturing</h3>
              <p className=&quot;text-gray-600&quot;>
                Process optimization, quality control, predictive maintenance, and supply chain management
              </p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <svg className=&quot;w-10 h-10 text-orange-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Retail</h3>
              <p className=&quot;text-gray-600&quot;>
                Customer behavior analysis, inventory optimization, demand forecasting, and personalized marketing
              </p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <svg className=&quot;w-10 h-10 text-red-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Technology</h3>
              <p className=&quot;text-gray-600&quot;>
                Software development, system architecture, cloud optimization, and AI model development
              </p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <svg className=&quot;w-10 h-10 text-indigo-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Energy</h3>
              <p className=&quot;text-gray-600&quot;>
                Grid optimization, renewable energy forecasting, demand response, and sustainability analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-purple-600 text-white&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
            Ready to Transform Your Business?
          </h2>
          <p className=&quot;text-xl text-purple-100 mb-8 max-w-2xl mx-auto&quot;>
            Discover how our AI-powered solutions can accelerate your growth and drive innovation across your organization.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
            <a href=&quot;/contact&quot; className=&quot;bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors&quot;>
              Schedule a Consultation
            </Link>
            <a href=&quot;/services&quot; className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors&quot;>
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}