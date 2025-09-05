import Link from &quot;next/link&quot;;

export const metadata = {
  title: &quot;AI Autonomous Business Manager - Zion Tech Group&quot;,
  description: &quot;Transform your business operations with our AI-powered autonomous business manager. Intelligent decision-making, process automation, and strategic optimization.&quot;,
  keywords: &quot;AI business manager, autonomous business, business automation, AI decision making, Zion Tech Group&quot;};

export default function AIBusinessManagerPage() {
  return (
    <div className=&quot;min-h-screen py-20 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;max-w-7xl mx-auto&quot;>
        {/* Hero Section */}
        <div className=&quot;text-center mb-16&quot;>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            AI Autonomous <span className=&quot;gradient-text&quot;>Business Manager</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
            Intelligent business management that operates autonomously, making strategic decisions 
            and optimizing operations 24/7 without human intervention.
          </p>
        </div>

        {/* Overview Section */}
        <section className=&quot;mb-20&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;>
            <div>
              <h2 className=&quot;text-3xl font-bold mb-6&quot;>Revolutionary Business Management</h2>
              <p className=&quot;text-lg text-gray-300 mb-6 leading-relaxed&quot;>
                Our AI Autonomous Business Manager represents the next evolution in business 
                management technology. It combines advanced artificial intelligence, machine 
                learning, and autonomous decision-making to manage your business operations 
                with unprecedented efficiency and intelligence.
              </p>
              <p className=&quot;text-lg text-gray-300 leading-relaxed&quot;>
                From strategic planning to daily operations, the system continuously learns, 
                adapts, and optimizes every aspect of your business, ensuring maximum 
                performance and growth potential.
              </p>
            </div>
            <div className=&quot;card bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8&quot;>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Key Benefits</h3>
              <ul className=&quot;space-y-3 text-gray-300&quot;>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-green-400 mr-3&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                    <path fillRule=&quot;evenodd&quot; d=&quot;M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z&quot; clipRule=&quot;evenodd&quot; />
                  </svg>
                  24/7 Autonomous Operation
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-green-400 mr-3&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                    <path fillRule=&quot;evenodd&quot; d=&quot;M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z&quot; clipRule=&quot;evenodd&quot; />
                  </svg>
                  Real-time Decision Making
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-green-400 mr-3&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                    <path fillRule=&quot;evenodd&quot; d=&quot;M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z&quot; clipRule=&quot;evenodd&quot; />
                  </svg>
                  Continuous Learning & Optimization
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-green-400 mr-3&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                    <path fillRule=&quot;evenodd&quot; d=&quot;M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z&quot; clipRule=&quot;evenodd&quot; />
                  </svg>
                  Predictive Analytics
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;mb-20&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <h2 className=&quot;text-3xl font-bold mb-4&quot;>Core Features</h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Comprehensive autonomous business management capabilities
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Strategic Planning</h3>
              <p className=&quot;text-gray-400&quot;>
                AI-powered strategic planning that analyzes market conditions, 
                competitive landscape, and internal capabilities to develop optimal strategies.
              </p>
            </div>

            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Resource Optimization</h3>
              <p className=&quot;text-gray-400&quot;>
                Intelligent allocation and optimization of human, financial, and 
                technological resources for maximum efficiency and ROI.
              </p>
            </div>

            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Performance Monitoring</h3>
              <p className=&quot;text-gray-400&quot;>
                Real-time monitoring of all business metrics with automated 
                alerts and proactive intervention when needed.
              </p>
            </div>

            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-yellow-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Risk Management</h3>
              <p className=&quot;text-gray-400&quot;>
                Advanced risk assessment and mitigation strategies with 
                continuous monitoring and automated response systems.
              </p>
            </div>

            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-indigo-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Team Management</h3>
              <p className=&quot;text-gray-400&quot;>
                Intelligent team coordination, task assignment, and performance 
                optimization based on individual strengths and workload.
              </p>
            </div>

            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-red-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 7h8m0 0v8m0-8l-8 8-4-4-6 6&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Growth Optimization</h3>
              <p className=&quot;text-gray-400&quot;>
                Data-driven growth strategies with market expansion analysis, 
                customer acquisition optimization, and revenue maximization.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className=&quot;mb-20&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <h2 className=&quot;text-3xl font-bold mb-4&quot;>How It Works</h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              The autonomous business management process
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl font-bold text-blue-400&quot;>1</span>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Data Collection</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                Continuously gathers data from all business systems, 
                market sources, and external factors.
              </p>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl font-bold text-purple-400&quot;>2</span>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Analysis & Learning</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                AI algorithms analyze patterns, learn from outcomes, 
                and identify optimization opportunities.
              </p>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl font-bold text-green-400&quot;>3</span>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Decision Making</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                Autonomous decisions are made based on data analysis, 
                business rules, and predictive models.
              </p>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl font-bold text-yellow-400&quot;>4</span>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Execution & Monitoring</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                Actions are executed automatically with continuous 
                monitoring and adjustment as needed.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className=&quot;mb-20&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <h2 className=&quot;text-3xl font-bold mb-4&quot;>Use Cases</h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Industries and scenarios where AI business management excels
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>E-commerce & Retail</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                Inventory management, pricing optimization, customer service automation, 
                and supply chain optimization.
              </p>
            </div>
            
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Financial Services</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                Risk assessment, portfolio management, fraud detection, 
                and regulatory compliance automation.
              </p>
            </div>
            
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Manufacturing</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                Production optimization, quality control, predictive maintenance, 
                and supply chain management.
              </p>
            </div>
            
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Healthcare</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                Patient scheduling, resource allocation, treatment optimization, 
                and administrative efficiency.
              </p>
            </div>
            
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Technology Companies</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                Product development prioritization, customer success optimization, 
                and operational scaling.
              </p>
            </div>
            
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Consulting Firms</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                Project management, resource allocation, client relationship management, 
                and knowledge management.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;text-center&quot;>
          <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-12&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Ready to Automate Your Business Management?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
              Transform your business operations with AI-powered autonomous management. 
              Let our experts help you implement the future of business.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;btn-primary text-lg px-8 py-4&quot;>
                Get Started
              </Link>
              <Link href=&quot;/ai-services&quot; className=&quot;btn-secondary text-lg px-8 py-4&quot;>
                View All AI Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}