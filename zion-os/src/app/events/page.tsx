import Link from &quot;next/link&quot;;

export const metadata = {
  title: &quot;Events - Zion Tech Group | Conferences, Webinars & Workshops&quot;,
  description: &quot;Join Zion Tech Group at upcoming technology events, conferences, webinars, and workshops. Network with industry leaders and learn about the latest innovations.&quot;,
  keywords: &quot;events, conferences, webinars, workshops, technology events, Zion Tech Group, AI conferences, quantum computing events&quot;};

export default function EventsPage() {
  return (
    <div className=&quot;min-h-screen&quot;>
      {/* Hero Section */}
      <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            <span className=&quot;gradient-text&quot;>Events</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
            Join us at industry-leading events, conferences, and workshops to discover 
            the future of technology and connect with innovation leaders
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;>
              <div>
                <div className=&quot;flex items-center mb-4&quot;>
                  <span className=&quot;bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3&quot;>
                    FEATURED EVENT
                  </span>
                  <span className=&quot;text-gray-400 text-sm&quot;>January 15-17, 2025</span>
                </div>
                <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
                  Zion Tech Summit 2025
                </h2>
                <p className=&quot;text-gray-300 text-lg mb-6 leading-relaxed&quot;>
                  Our flagship annual conference bringing together technology leaders, innovators, 
                  and visionaries to explore the future of AI, quantum computing, and enterprise 
                  technology solutions.
                </p>
                <div className=&quot;flex flex-wrap gap-3 mb-6&quot;>
                  <span className=&quot;bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm&quot;>AI & ML</span>
                  <span className=&quot;bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm&quot;>Quantum Computing</span>
                  <span className=&quot;bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm&quot;>Cybersecurity</span>
                </div>
                <div className=&quot;space-y-2 mb-6 text-sm&quot;>
                  <div className=&quot;flex items-center text-gray-300&quot;>
                    <svg className=&quot;w-4 h-4 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z&quot; />
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M15 11a3 3 0 11-6 0 3 3 0 016 0z&quot; />
                    </svg>
                    San Francisco, CA
                  </div>
                  <div className=&quot;flex items-center text-gray-300&quot;>
                    <svg className=&quot;w-4 h-4 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot; />
                    </svg>
                    3 Days
                  </div>
                  <div className=&quot;flex items-center text-gray-300&quot;>
                    <svg className=&quot;w-4 h-4 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z&quot; />
                    </svg>
                    1,000+ Attendees
                  </div>
                </div>
                <div className=&quot;flex flex-col sm:flex-row gap-4&quot;>
                  <Link href=&quot;/events/zion-tech-summit-2025&quot; className=&quot;btn-primary&quot;>
                    Register Now
                  </Link>
                  <Link href=&quot;/events/zion-tech-summit-2025/agenda&quot; className=&quot;btn-secondary&quot;>
                    View Agenda
                  </Link>
                </div>
              </div>
              <div className=&quot;relative&quot;>
                <div className=&quot;w-full h-64 lg:h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center&quot;>
                  <svg className=&quot;w-24 h-24 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4&quot; />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Event Types
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Discover different types of events we host and participate in
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <div className=&quot;card text-center group hover:bg-blue-500/10 transition-colors&quot;>
              <div className=&quot;w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30&quot;>
                <svg className=&quot;w-10 h-10 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Conferences</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Large-scale industry events featuring keynote speakers, panel discussions, 
                and networking opportunities
              </p>
              <Link href=&quot;/events/category/conferences&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                View Conferences →
              </Link>
            </div>
            
            <div className=&quot;card text-center group hover:bg-purple-500/10 transition-colors&quot;>
              <div className=&quot;w-20 h-20 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/30&quot;>
                <svg className=&quot;w-10 h-10 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Webinars</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Online educational sessions covering specific topics, technologies, 
                and industry trends
              </p>
              <Link href=&quot;/events/category/webinars&quot; className=&quot;text-purple-400 hover:text-purple-300 text-sm font-medium&quot;>
                View Webinars →
              </Link>
            </div>
            
            <div className=&quot;card text-center group hover:bg-green-500/10 transition-colors&quot;>
              <div className=&quot;w-20 h-20 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30&quot;>
                <svg className=&quot;w-10 h-10 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Workshops</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Hands-on training sessions and interactive learning experiences 
                for practical skill development
              </p>
              <Link href=&quot;/events/category/workshops&quot; className=&quot;text-green-400 hover:text-green-300 text-sm font-medium&quot;>
                View Workshops →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Upcoming Events
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Mark your calendar for these exciting upcoming events
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* Event 1 */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-full h-48 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-16 h-16 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                </svg>
              </div>
              <div className=&quot;flex items-center mb-3&quot;>
                <span className=&quot;bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded-full mr-3&quot;>
                  WEBINAR
                </span>
                <span className=&quot;text-gray-400 text-sm&quot;>January 8, 2025</span>
              </div>
              <h3 className=&quot;text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors&quot;>
                AI in Enterprise: Implementation Strategies
              </h3>
              <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                Learn practical strategies for implementing AI solutions in enterprise 
                environments, including best practices and common pitfalls to avoid.
              </p>
              <div className=&quot;flex items-center text-sm text-gray-400 mb-4&quot;>
                <svg className=&quot;w-4 h-4 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot; />
                </svg>
                60 minutes
              </div>
              <Link href=&quot;/events/ai-enterprise-implementation-webinar&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                Register Now →
              </Link>
            </div>

            {/* Event 2 */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-16 h-16 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                </svg>
              </div>
              <div className=&quot;flex items-center mb-3&quot;>
                <span className=&quot;bg-purple-500/20 text-purple-400 text-xs font-bold px-2 py-1 rounded-full mr-3&quot;>
                  WORKSHOP
                </span>
                <span className=&quot;text-gray-400 text-sm&quot;>January 22, 2025</span>
              </div>
              <h3 className=&quot;text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors&quot;>
                Quantum Computing Fundamentals
              </h3>
              <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                Hands-on workshop covering the basics of quantum computing, qubits, 
                and quantum algorithms for beginners and intermediate developers.
              </p>
              <div className=&quot;flex items-center text-sm text-gray-400 mb-4&quot;>
                <svg className=&quot;w-4 h-4 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot; />
                </svg>
                4 hours
              </div>
              <Link href=&quot;/events/quantum-computing-fundamentals-workshop&quot; className=&quot;text-purple-400 hover:text-purple-300 text-sm font-medium&quot;>
                Register Now →
              </Link>
            </div>

            {/* Event 3 */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-full h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-16 h-16 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <div className=&quot;flex items-center mb-3&quot;>
                <span className=&quot;bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full mr-3&quot;>
                  CONFERENCE
                </span>
                <span className=&quot;text-gray-400 text-sm&quot;>February 10-12, 2025</span>
              </div>
              <h3 className=&quot;text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors&quot;>
                Cybersecurity Innovation Summit
              </h3>
              <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                Three-day conference focused on emerging cybersecurity threats, 
                AI-powered security solutions, and industry best practices.
              </p>
              <div className=&quot;flex items-center text-sm text-gray-400 mb-4&quot;>
                <svg className=&quot;w-4 h-4 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z&quot; />
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M15 11a3 3 0 11-6 0 3 3 0 016 0z&quot; />
                </svg>
                New York, NY
              </div>
              <Link href=&quot;/events/cybersecurity-innovation-summit-2025&quot; className=&quot;text-green-400 hover:text-green-300 text-sm font-medium&quot;>
                Register Now →
              </Link>
            </div>

            {/* Event 4 */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-full h-48 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-16 h-16 text-red-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 19l9 2-9-18-9 18 9-2zm0 0v-8&quot; />
                </svg>
              </div>
              <div className=&quot;flex items-center mb-3&quot;>
                <span className=&quot;bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded-full mr-3&quot;>
                  WORKSHOP
                </span>
                <span className=&quot;text-gray-400 text-sm&quot;>February 25, 2025</span>
              </div>
              <h3 className=&quot;text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors&quot;>
                Space Technology Applications
              </h3>
              <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                Explore practical applications of space technology in telecommunications, 
                Earth observation, and satellite navigation systems.
              </p>
              <div className=&quot;flex items-center text-sm text-gray-400 mb-4&quot;>
                <svg className=&quot;w-4 h-4 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot; />
                </svg>
                6 hours
              </div>
              <Link href=&quot;/events/space-technology-applications-workshop&quot; className=&quot;text-red-400 hover:text-red-300 text-sm font-medium&quot;>
                Register Now →
              </Link>
            </div>

            {/* Event 5 */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-full h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-16 h-16 text-indigo-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z&quot; />
                </svg>
              </div>
              <div className=&quot;flex items-center mb-3&quot;>
                <span className=&quot;bg-indigo-500/20 text-indigo-400 text-xs font-bold px-2 py-1 rounded-full mr-3&quot;>
                  WEBINAR
                </span>
                <span className=&quot;text-gray-400 text-sm&quot;>March 5, 2025</span>
              </div>
              <h3 className=&quot;text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors&quot;>
                AI Content Generation Best Practices
              </h3>
              <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                Learn how to effectively use AI content generation tools while maintaining 
                quality, authenticity, and ethical standards.
              </p>
              <div className=&quot;flex items-center text-sm text-gray-400 mb-4&quot;>
                <svg className=&quot;w-4 h-4 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot; />
                </svg>
                90 minutes
              </div>
              <Link href=&quot;/events/ai-content-generation-best-practices&quot; className=&quot;text-indigo-400 hover:text-indigo-300 text-sm font-medium&quot;>
                Register Now →
              </Link>
            </div>

            {/* Event 6 */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-full h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-16 h-16 text-yellow-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10&quot; />
                </svg>
              </div>
              <div className=&quot;flex items-center mb-3&quot;>
                <span className=&quot;bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded-full mr-3&quot;>
                  CONFERENCE
                </span>
                <span className=&quot;text-gray-400 text-sm&quot;>March 20-22, 2025</span>
              </div>
              <h3 className=&quot;text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors&quot;>
                Enterprise IT Transformation
              </h3>
              <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                Conference focused on digital transformation, cloud migration, and modernizing 
                enterprise IT infrastructure for the future.
              </p>
              <div className=&quot;flex items-center text-sm text-gray-400 mb-4&quot;>
                <svg className=&quot;w-4 h-4 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z&quot; />
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M15 11a3 3 0 11-6 0 3 3 0 016 0z&quot; />
                </svg>
                Austin, TX
              </div>
              <Link href=&quot;/events/enterprise-it-transformation-2025&quot; className=&quot;text-yellow-400 hover:text-yellow-300 text-sm font-medium&quot;>
                Register Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/20 to-gray-900/20&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Past Events
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Relive the highlights from our previous events and access recorded content
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;card&quot;>
              <div className=&quot;w-full h-32 bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-xl mb-4 flex items-center justify-center&quot;>
                <svg className=&quot;w-12 h-12 text-gray-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>AI Ethics Workshop</h3>
              <p className=&quot;text-gray-400 text-sm mb-3&quot;>December 10, 2024</p>
              <Link href=&quot;/events/past/ai-ethics-workshop-december-2024&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                View Recording →
              </Link>
            </div>
            
            <div className=&quot;card&quot;>
              <div className=&quot;w-full h-32 bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-xl mb-4 flex items-center justify-center&quot;>
                <svg className=&quot;w-12 h-12 text-gray-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Quantum Computing Summit</h3>
              <p className=&quot;text-gray-400 text-sm mb-3&quot;>November 15-17, 2024</p>
              <Link href=&quot;/events/past/quantum-computing-summit-november-2024&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                View Highlights →
              </Link>
            </div>
            
            <div className=&quot;card&quot;>
              <div className=&quot;w-full h-32 bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-xl mb-4 flex items-center justify-center&quot;>
                <svg className=&quot;w-12 h-12 text-gray-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Cybersecurity Conference</h3>
              <p className=&quot;text-gray-400 text-sm mb-3&quot;>October 20-22, 2024</p>
              <Link href=&quot;/events/past/cybersecurity-conference-october-2024&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                View Highlights →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Can't Find What You're Looking For?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              We're constantly adding new events. Contact us to suggest topics or 
              request custom workshops for your organization.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;btn-primary text-lg px-8 py-4&quot;>
                Contact Us
              </Link>
              <Link href=&quot;/events/custom&quot; className=&quot;btn-secondary text-lg px-8 py-4&quot;>
                Request Custom Event
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}