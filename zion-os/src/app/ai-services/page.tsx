import Link from &quot;next/link&quot;;

export const metadata = {
  title: &quot;AI Services - Zion Tech Group | Artificial Intelligence & Machine Learning Solutions&quot;,
  description: &quot;Transform your business with Zion Tech Group's cutting-edge AI services including autonomous operations, business intelligence, content generation, and research automation.&quot;,
  keywords: &quot;AI services, artificial intelligence, machine learning, autonomous business, business intelligence, content generation, Zion Tech Group&quot;};

export default function AIServicesPage() {
  return (
    <div className=&quot;min-h-screen&quot;>
      {/* Hero Section */}
      <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            AI & <span className=&quot;gradient-text&quot;>Machine Learning</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
            Harness the power of artificial intelligence to automate operations, 
            enhance decision-making, and create intelligent business processes.
          </p>
        </div>
      </section>

      {/* AI Services Overview */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;>
            <div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
                Transform Your Business with AI
              </h2>
              <p className=&quot;text-lg text-gray-300 mb-6 leading-relaxed&quot;>
                Our AI solutions are designed to help businesses of all sizes leverage 
                the power of artificial intelligence to gain competitive advantages, 
                improve efficiency, and drive innovation.
              </p>
              <p className=&quot;text-lg text-gray-300 leading-relaxed&quot;>
                From autonomous business operations to intelligent content generation, 
                we provide end-to-end AI solutions that integrate seamlessly with 
                your existing infrastructure.
              </p>
            </div>
            <div className=&quot;card bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8&quot;>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Why Choose Our AI Services?</h3>
              <ul className=&quot;space-y-3 text-gray-300&quot;>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-green-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M5 13l4 4L19 7&quot; />
                  </svg>
                  Custom-built solutions for your specific needs
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-green-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M5 13l4 4L19 7&quot; />
                  </svg>
                  Enterprise-grade security and compliance
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-green-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M5 13l4 4L19 7&quot; />
                  </svg>
                  24/7 support and maintenance
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-green-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M5 13l4 4L19 7&quot; />
                  </svg>
                  Scalable solutions that grow with your business
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Our AI Solutions
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Comprehensive AI services designed to address your most pressing business challenges
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* Autonomous Business Operations */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors&quot;>
                <svg className=&quot;w-8 h-8 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Autonomous Business Operations</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Automate complex business processes with AI-powered decision-making systems.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-300&quot;>
                <li>• Process automation & optimization</li>
                <li>• Intelligent workflow management</li>
                <li>• Predictive maintenance</li>
                <li>• Resource allocation optimization</li>
              </ul>
              <Link href=&quot;/ai-autonomous-business-operations&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>

            {/* Business Intelligence */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors&quot;>
                <svg className=&quot;w-8 h-8 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Business Intelligence & Analytics</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Transform data into actionable insights with advanced AI analytics.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-300&quot;>
                <li>• Predictive analytics & forecasting</li>
                <li>• Real-time data processing</li>
                <li>• Customer behavior analysis</li>
                <li>• Performance optimization insights</li>
              </ul>
              <Link href=&quot;/ai-business-intelligence&quot; className=&quot;text-purple-400 hover:text-purple-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>

            {/* Content Generation */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors&quot;>
                <svg className=&quot;w-8 h-8 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>AI Content Generation</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Create high-quality, engaging content at scale with AI-powered tools.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-300&quot;>
                <li>• Automated content creation</li>
                <li>• Multi-language support</li>
                <li>• SEO optimization</li>
                <li>• Brand voice consistency</li>
              </ul>
              <Link href=&quot;/ai-content-generator&quot; className=&quot;text-green-400 hover:text-green-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>

            {/* Research Automation */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors&quot;>
                <svg className=&quot;w-8 h-8 text-red-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Research & Development</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Accelerate research with AI-powered data analysis and insights.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-300&quot;>
                <li>• Data mining & analysis</li>
                <li>• Pattern recognition</li>
                <li>• Hypothesis generation</li>
                <li>• Research optimization</li>
              </ul>
              <Link href=&quot;/ai-autonomous-research-assistant&quot; className=&quot;text-red-400 hover:text-red-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>

            {/* AI Agents */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors&quot;>
                <svg className=&quot;w-8 h-8 text-yellow-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>AI Agents & Assistants</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Deploy intelligent AI agents to handle complex tasks and interactions.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-300&quot;>
                <li>• Virtual assistants</li>
                <li>• Customer service bots</li>
                <li>• Task automation</li>
                <li>• Intelligent routing</li>
              </ul>
              <Link href=&quot;/ai-agents&quot; className=&quot;text-yellow-400 hover:text-yellow-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>

            {/* AI Governance */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors&quot;>
                <svg className=&quot;w-8 h-8 text-indigo-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>AI Governance & Ethics</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Ensure responsible AI deployment with governance frameworks.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-300&quot;>
                <li>• Ethical AI guidelines</li>
                <li>• Bias detection & mitigation</li>
                <li>• Transparency & explainability</li>
                <li>• Compliance frameworks</li>
              </ul>
              <Link href=&quot;/ai-governance&quot; className=&quot;text-indigo-400 hover:text-indigo-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Stack */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Our AI Technology Stack
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Built on cutting-edge technologies and frameworks for maximum performance and scalability
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            <div className=&quot;card text-center&quot;>
              <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl font-bold text-blue-400&quot;>ML</span>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Machine Learning</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                TensorFlow, PyTorch, Scikit-learn
              </p>
            </div>
            
            <div className=&quot;card text-center&quot;>
              <div className=&quot;w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl font-bold text-purple-400&quot;>NLP</span>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Natural Language Processing</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                GPT, BERT, Transformers
              </p>
            </div>
            
            <div className=&quot;card text-center&quot;>
              <div className=&quot;w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl font-bold text-green-400&quot;>CV</span>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Computer Vision</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                OpenCV, YOLO, ResNet
              </p>
            </div>
            
            <div className=&quot;card text-center&quot;>
              <div className=&quot;w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl font-bold text-red-400&quot;>RL</span>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Reinforcement Learning</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                Stable Baselines, Gym
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              AI Use Cases
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Real-world applications of our AI solutions across various industries
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Healthcare</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Medical image analysis, drug discovery, patient care optimization, and predictive diagnostics.
              </p>
            </div>
            
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Finance</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Fraud detection, risk assessment, algorithmic trading, and customer service automation.
              </p>
            </div>
            
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Manufacturing</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Predictive maintenance, quality control, supply chain optimization, and production planning.
              </p>
            </div>
            
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Retail</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Customer segmentation, demand forecasting, inventory management, and personalized marketing.
              </p>
            </div>
            
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Transportation</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Route optimization, autonomous vehicles, traffic prediction, and fleet management.
              </p>
            </div>
            
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Education</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Personalized learning, content generation, student performance analysis, and adaptive testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Ready to Harness the Power of AI?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Let's discuss how our AI solutions can transform your business 
              and give you a competitive edge in the market.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;btn-primary text-lg px-8 py-4&quot;>
                Get Started
              </Link>
              <Link href=&quot;/case-studies&quot; className=&quot;btn-secondary text-lg px-8 py-4&quot;>
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}