export default function CaseStudiesPage() {
  return (
    <div className=&quot;min-h-screen py-20&quot;>
      {/* Hero Section */}
      <section className=&quot;relative mb-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center&quot;>
            <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
              Case <span className=&quot;bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent&quot;>Studies</span>
            </h1>
            <p className=&quot;text-xl text-white/80 max-w-4xl mx-auto&quot;>
              Real-world examples of how our AI-powered solutions have transformed businesses and delivered measurable results across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className=&quot;mb-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-white/10&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8 items-center&quot;>
              <div>
                <div className=&quot;inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-4&quot;>
                  Featured Case Study
                </div>
                <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>
                  Healthcare AI Diagnostic Platform
                </h2>
                <p className=&quot;text-lg text-white/80 mb-6&quot;>
                  Revolutionized medical diagnostics for a major healthcare network using AI-powered image analysis and predictive modeling.
                </p>
                <div className=&quot;grid grid-cols-2 gap-6 mb-6&quot;>
                  <div>
                    <div className=&quot;text-2xl font-bold text-white mb-1&quot;>95%</div>
                    <div className=&quot;text-white/70 text-sm&quot;>Accuracy Improvement</div>
                  </div>
                  <div>
                    <div className=&quot;text-2xl font-bold text-white mb-1&quot;>60%</div>
                    <div className=&quot;text-white/70 text-sm&quot;>Faster Diagnosis</div>
                  </div>
                  <div>
                    <div className=&quot;text-2xl font-bold text-white mb-1&quot;>$2M+</div>
                    <div className=&quot;text-white/70 text-sm&quot;>Annual Savings</div>
                  </div>
                  <div>
                    <div className=&quot;text-2xl font-bold text-white mb-1&quot;>50K+</div>
                    <div className=&quot;text-white/70 text-sm&quot;>Patients Served</div>
                  </div>
                </div>
                <a
                  href=&quot;/case-studies/healthcare-ai-diagnostics&quot;
                  className=&quot;inline-flex items-center text-purple-400 hover:text-purple-300 font-medium&quot;
                >
                  Read Full Case Study →
                </Link>
              </div>
              <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10&quot;>
                <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Key Technologies Used</h3>
                <div className=&quot;space-y-3&quot;>
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <div className=&quot;w-2 h-2 bg-purple-400 rounded-full&quot;></div>
                    <span className=&quot;text-white/80&quot;>Computer Vision AI</span>
                  </div>
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <div className=&quot;w-2 h-2 bg-cyan-400 rounded-full&quot;></div>
                    <span className=&quot;text-white/80&quot;>Predictive Analytics</span>
                  </div>
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <div className=&quot;w-2 h-2 bg-green-400 rounded-full&quot;></div>
                    <span className=&quot;text-white/80&quot;>Machine Learning</span>
                  </div>
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <div className=&quot;w-2 h-2 bg-yellow-400 rounded-full&quot;></div>
                    <span className=&quot;text-white/80&quot;>Natural Language Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className=&quot;mb-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Success Stories</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* Financial Services */}
            <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300&quot;>
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4&quot;>
                <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>AI-Powered Trading System</h3>
              <p className=&quot;text-white/70 mb-4&quot;>
                Developed an autonomous trading platform for a hedge fund that increased returns by 40% while reducing risk.
              </p>
              <div className=&quot;flex justify-between items-center mb-4&quot;>
                <span className=&quot;text-cyan-400 text-sm font-medium&quot;>Financial Services</span>
                <span className=&quot;text-white/60 text-sm&quot;>2024</span>
              </div>
              <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>40%</div>
                  <div className=&quot;text-white/60&quot;>Return Increase</div>
                </div>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>30%</div>
                  <div className=&quot;text-white/60&quot;>Risk Reduction</div>
                </div>
              </div>
              <a href=&quot;/case-studies/ai-trading-system&quot; className=&quot;text-cyan-400 hover:text-cyan-300 font-medium text-sm&quot;>
                Read More →
              </Link>
            </div>

            {/* Manufacturing */}
            <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300&quot;>
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4&quot;>
                <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Smart Factory Automation</h3>
              <p className=&quot;text-white/70 mb-4&quot;>
                Implemented autonomous robotics and predictive maintenance for a manufacturing company, reducing downtime by 70%.
              </p>
              <div className=&quot;flex justify-between items-center mb-4&quot;>
                <span className=&quot;text-green-400 text-sm font-medium&quot;>Manufacturing</span>
                <span className=&quot;text-white/60 text-sm&quot;>2024</span>
              </div>
              <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>70%</div>
                  <div className=&quot;text-white/60&quot;>Downtime Reduction</div>
                </div>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>45%</div>
                  <div className=&quot;text-white/60&quot;>Efficiency Gain</div>
                </div>
              </div>
              <a href=&quot;/case-studies/smart-factory-automation&quot; className=&quot;text-green-400 hover:text-green-300 font-medium text-sm&quot;>
                Read More →
              </Link>
            </div>

            {/* Retail */}
            <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-300&quot;>
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4&quot;>
                <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Personalized Shopping Experience</h3>
              <p className=&quot;text-white/70 mb-4&quot;>
                Created an AI-powered recommendation engine for an e-commerce platform, increasing sales by 35%.
              </p>
              <div className=&quot;flex justify-between items-center mb-4&quot;>
                <span className=&quot;text-yellow-400 text-sm font-medium&quot;>Retail</span>
                <span className=&quot;text-white/60 text-sm&quot;>2024</span>
              </div>
              <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>35%</div>
                  <div className=&quot;text-white/60&quot;>Sales Increase</div>
                </div>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>50%</div>
                  <div className=&quot;text-white/60&quot;>Customer Engagement</div>
                </div>
              </div>
              <a href=&quot;/case-studies/personalized-shopping&quot; className=&quot;text-yellow-400 hover:text-yellow-300 font-medium text-sm&quot;>
                Read More →
              </Link>
            </div>

            {/* Transportation */}
            <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300&quot;>
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4&quot;>
                <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Autonomous Fleet Management</h3>
              <p className=&quot;text-white/70 mb-4&quot;>
                Developed an AI system for a logistics company that optimized routes and reduced fuel costs by 25%.
              </p>
              <div className=&quot;flex justify-between items-center mb-4&quot;>
                <span className=&quot;text-red-400 text-sm font-medium&quot;>Transportation</span>
                <span className=&quot;text-white/60 text-sm&quot;>2024</span>
              </div>
              <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>25%</div>
                  <div className=&quot;text-white/60&quot;>Fuel Cost Reduction</div>
                </div>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>20%</div>
                  <div className=&quot;text-white/60&quot;>Delivery Time</div>
                </div>
              </div>
              <a href=&quot;/case-studies/autonomous-fleet&quot; className=&quot;text-red-400 hover:text-red-300 font-medium text-sm&quot;>
                Read More →
              </Link>
            </div>

            {/* Energy */}
            <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300&quot;>
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4&quot;>
                <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Smart Grid Optimization</h3>
              <p className=&quot;text-white/70 mb-4&quot;>
                Implemented AI-powered energy management for a utility company, reducing energy waste by 30%.
              </p>
              <div className=&quot;flex justify-between items-center mb-4&quot;>
                <span className=&quot;text-indigo-400 text-sm font-medium&quot;>Energy</span>
                <span className=&quot;text-white/60 text-sm&quot;>2024</span>
              </div>
              <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>30%</div>
                  <div className=&quot;text-white/60&quot;>Energy Waste Reduction</div>
                </div>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>15%</div>
                  <div className=&quot;text-white/60&quot;>Cost Savings</div>
                </div>
              </div>
              <a href=&quot;/case-studies/smart-grid-optimization&quot; className=&quot;text-indigo-400 hover:text-indigo-300 font-medium text-sm&quot;>
                Read More →
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300&quot;>
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4&quot;>
                <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>AI Threat Detection</h3>
              <p className=&quot;text-white/70 mb-4&quot;>
                Built an intelligent security system for a financial institution that detected 99.9% of cyber threats.
              </p>
              <div className=&quot;flex justify-between items-center mb-4&quot;>
                <span className=&quot;text-purple-400 text-sm font-medium&quot;>Cybersecurity</span>
                <span className=&quot;text-white/60 text-sm&quot;>2024</span>
              </div>
              <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>99.9%</div>
                  <div className=&quot;text-white/60&quot;>Threat Detection</div>
                </div>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>90%</div>
                  <div className=&quot;text-white/60&quot;>False Positive Reduction</div>
                </div>
              </div>
              <a href=&quot;/case-studies/ai-threat-detection&quot; className=&quot;text-purple-400 hover:text-purple-300 font-medium text-sm&quot;>
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className=&quot;mb-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>What Our Clients Say</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10&quot;>
              <div className=&quot;flex items-center mb-4&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-3&quot;>
                  <span className=&quot;text-white font-bold&quot;>J</span>
                </div>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>John Smith</div>
                  <div className=&quot;text-white/60 text-sm&quot;>CTO, HealthTech Inc.</div>
                </div>
              </div>
              <p className=&quot;text-white/80 text-sm&quot;>
                &quot;Zion Tech Group's AI diagnostic platform has transformed our healthcare delivery. The accuracy and speed improvements are remarkable.&quot;
              </p>
            </div>

            <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10&quot;>
              <div className=&quot;flex items-center mb-4&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-3&quot;>
                  <span className=&quot;text-white font-bold&quot;>S</span>
                </div>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>Sarah Johnson</div>
                  <div className=&quot;text-white/60 text-sm&quot;>CEO, FinTech Solutions</div>
                </div>
              </div>
              <p className=&quot;text-white/80 text-sm&quot;>
                &quot;The AI trading system has given us a competitive edge. Returns are up 40% while risk has decreased significantly.&quot;
              </p>
            </div>

            <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10&quot;>
              <div className=&quot;flex items-center mb-4&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3&quot;>
                  <span className=&quot;text-white font-bold&quot;>M</span>
                </div>
                <div>
                  <div className=&quot;text-white font-semibold&quot;>Mike Chen</div>
                  <div className=&quot;text-white/60 text-sm&quot;>Operations Director, AutoCorp</div>
                </div>
              </div>
              <p className=&quot;text-white/80 text-sm&quot;>
                &quot;Smart factory automation has revolutionized our production line. Downtime is down 70% and efficiency is through the roof.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Ready to Create Your Success Story?</h2>
          <p className=&quot;text-xl text-white/70 mb-8&quot;>
            Let's discuss how our AI solutions can transform your business and deliver measurable results.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
            <a
              href=&quot;/contact&quot;
              className=&quot;bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-200&quot;
            >
              Start Your Project
            </Link>
            <a
              href=&quot;/services&quot;
              className=&quot;border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200&quot;
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}