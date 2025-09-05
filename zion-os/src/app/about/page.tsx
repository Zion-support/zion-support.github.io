export default function AboutPage() {
  return (
    <div className=&quot;min-h-screen bg-white&quot;>
      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
            About Zion Tech Group
          </h1>
          <p className=&quot;text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto&quot;>
            Pioneering the future of AI-powered technology solutions and autonomous business operations.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;>
            <div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-6&quot;>
                Leading the AI Revolution
              </h2>
              <p className=&quot;text-lg text-gray-600 mb-6&quot;>
                Founded with a vision to democratize advanced AI technology, Zion Tech Group has been at the forefront of innovation in artificial intelligence, quantum computing, and autonomous systems.
              </p>
              <p className=&quot;text-lg text-gray-600 mb-6&quot;>
                Our mission is to empower businesses of all sizes with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
              </p>
              <p className=&quot;text-lg text-gray-600&quot;>
                With a team of world-class engineers, researchers, and business strategists, we're building the future of intelligent automation and decision-making systems.
              </p>
            </div>
            <div className=&quot;bg-gray-100 p-8 rounded-xl&quot;>
              <div className=&quot;space-y-6&quot;>
                <div className=&quot;flex items-center space-x-4&quot;>
                  <div className=&quot;w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center&quot;>
                    <svg className=&quot;w-6 h-6 text-blue-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                    </svg>
                  </div>
                  <div>
                    <h3 className=&quot;font-semibold text-gray-900&quot;>Innovation First</h3>
                    <p className=&quot;text-gray-600&quot;>Pioneering breakthrough technologies</p>
                  </div>
                </div>
                <div className=&quot;flex items-center space-x-4&quot;>
                  <div className=&quot;w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center&quot;>
                    <svg className=&quot;w-6 h-6 text-green-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                    </svg>
                  </div>
                  <div>
                    <h3 className=&quot;font-semibold text-gray-900&quot;>Security Focused</h3>
                    <p className=&quot;text-gray-600&quot;>Enterprise-grade security standards</p>
                  </div>
                </div>
                <div className=&quot;flex items-center space-x-4&quot;>
                  <div className=&quot;w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center&quot;>
                    <svg className=&quot;w-6 h-6 text-purple-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z&quot; />
                    </svg>
                  </div>
                  <div>
                    <h3 className=&quot;font-semibold text-gray-900&quot;>Customer Success</h3>
                    <p className=&quot;text-gray-600&quot;>Dedicated support and success teams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className=&quot;py-20 bg-gray-50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Our Mission & Values
            </h2>
            <p className=&quot;text-xl text-gray-600 max-w-2xl mx-auto&quot;>
              Driving innovation while maintaining the highest standards of ethics and responsibility
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <svg className=&quot;w-8 h-8 text-blue-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-4&quot;>Innovation</h3>
              <p className=&quot;text-gray-600&quot;>
                Continuously pushing the boundaries of what's possible with AI and emerging technologies.
              </p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <svg className=&quot;w-8 h-8 text-green-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-4&quot;>Integrity</h3>
              <p className=&quot;text-gray-600&quot;>
                Building trust through transparent, ethical, and responsible technology development.
              </p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <svg className=&quot;w-8 h-8 text-purple-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-4&quot;>Collaboration</h3>
              <p className=&quot;text-gray-600&quot;>
                Working together with clients, partners, and communities to create lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Zion Tech Group by the Numbers
            </h2>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8 text-center&quot;>
            <div>
              <div className=&quot;text-4xl font-bold text-blue-600 mb-2&quot;>2018</div>
              <div className=&quot;text-gray-600&quot;>Founded</div>
            </div>
            <div>
              <div className=&quot;text-4xl font-bold text-blue-600 mb-2&quot;>100+</div>
              <div className=&quot;text-gray-600&quot;>Team Members</div>
            </div>
            <div>
              <div className=&quot;text-4xl font-bold text-blue-600 mb-2&quot;>25+</div>
              <div className=&quot;text-gray-600&quot;>Countries Served</div>
            </div>
            <div>
              <div className=&quot;text-4xl font-bold text-blue-600 mb-2&quot;>$50M+</div>
              <div className=&quot;text-gray-600&quot;>Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className=&quot;py-20 bg-gray-50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Leadership Team
            </h2>
            <p className=&quot;text-xl text-gray-600 max-w-2xl mx-auto&quot;>
              Experienced leaders driving innovation and growth across all aspects of our business
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;bg-white p-8 rounded-xl shadow-sm&quot;>
              <div className=&quot;w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6&quot;></div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 text-center mb-2&quot;>Dr. Sarah Chen</h3>
              <p className=&quot;text-blue-600 text-center mb-4&quot;>Chief Executive Officer</p>
              <p className=&quot;text-gray-600 text-center&quot;>
                Former AI Research Director at Google, PhD in Computer Science from Stanford
              </p>
            </div>

            <div className=&quot;bg-white p-8 rounded-xl shadow-sm&quot;>
              <div className=&quot;w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6&quot;></div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 text-center mb-2&quot;>Michael Rodriguez</h3>
              <p className=&quot;text-blue-600 text-center mb-4&quot;>Chief Technology Officer</p>
              <p className=&quot;text-gray-600 text-center&quot;>
                Quantum computing expert with 15+ years in advanced technology development
              </p>
            </div>

            <div className=&quot;bg-white p-8 rounded-xl shadow-sm&quot;>
              <div className=&quot;w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6&quot;></div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 text-center mb-2&quot;>Dr. James Kim</h3>
              <p className=&quot;text-blue-600 text-center mb-4&quot;>Chief Research Officer</p>
              <p className=&quot;text-gray-600 text-center&quot;>
                Leading researcher in autonomous systems and AI consciousness evolution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-blue-600 text-white&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
            Join Us in Shaping the Future
          </h2>
          <p className=&quot;text-xl text-blue-100 mb-8 max-w-2xl mx-auto&quot;>
            Ready to partner with a company that's redefining what's possible with AI and technology?
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
            <a href=&quot;/contact&quot; className=&quot;bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors&quot;>
              Get in Touch
            </Link>
            <a href=&quot;/careers&quot; className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors&quot;>
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}