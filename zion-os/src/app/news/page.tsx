import Link from &quot;next/link&quot;;

export const metadata = {
  title: &quot;News & Insights - Zion Tech Group | Latest Technology Updates&quot;,
  description: &quot;Stay updated with the latest news, insights, and thought leadership from Zion Tech Group. Discover industry trends, company updates, and technology innovations.&quot;,
  keywords: &quot;news, insights, technology updates, AI news, quantum computing, cybersecurity, Zion Tech Group&quot;};

export default function NewsPage() {
  return (
    <div className=&quot;min-h-screen&quot;>
      {/* Hero Section */}
      <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            <span className=&quot;gradient-text&quot;>News & Insights</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
            Stay ahead with the latest technology trends, company updates, and industry insights 
            from Zion Tech Group
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;>
              <div>
                <div className=&quot;flex items-center mb-4&quot;>
                  <span className=&quot;bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3&quot;>
                    FEATURED
                  </span>
                  <span className=&quot;text-gray-400 text-sm&quot;>December 15, 2024</span>
                </div>
                <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
                  Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform
                </h2>
                <p className=&quot;text-gray-300 text-lg mb-6 leading-relaxed&quot;>
                  Our new AI platform transforms how businesses analyze data and make decisions. 
                  Using advanced machine learning algorithms, it provides real-time insights and 
                  predictive analytics that drive strategic growth.
                </p>
                <div className=&quot;flex flex-wrap gap-3 mb-6&quot;>
                  <span className=&quot;bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm&quot;>AI</span>
                  <span className=&quot;bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm&quot;>Business Intelligence</span>
                  <span className=&quot;bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm&quot;>Platform Launch</span>
                </div>
                <Link href=&quot;/news/ai-business-intelligence-platform-launch&quot; className=&quot;btn-primary&quot;>
                  Read Full Article
                </Link>
              </div>
              <div className=&quot;relative&quot;>
                <div className=&quot;w-full h-64 lg:h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center&quot;>
                  <svg className=&quot;w-24 h-24 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Browse by Category
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Find the latest news and insights in your area of interest
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6&quot;>
            <Link href=&quot;/news/category/ai&quot; className=&quot;card text-center group hover:bg-blue-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                </svg>
              </div>
              <h3 className=&quot;font-semibold mb-2&quot;>AI & Machine Learning</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>Latest developments in artificial intelligence</p>
            </Link>
            
            <Link href=&quot;/news/category/quantum&quot; className=&quot;card text-center group hover:bg-purple-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                </svg>
              </div>
              <h3 className=&quot;font-semibold mb-2&quot;>Quantum Computing</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>Breakthroughs in quantum technology</p>
            </Link>
            
            <Link href=&quot;/news/category/cybersecurity&quot; className=&quot;card text-center group hover:bg-green-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;font-semibold mb-2&quot;>Cybersecurity</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>Security trends and threat intelligence</p>
            </Link>
            
            <Link href=&quot;/news/category/company&quot; className=&quot;card text-center group hover:bg-red-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-red-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4&quot; />
                </svg>
              </div>
              <h3 className=&quot;font-semibold mb-2&quot;>Company News</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>Updates about Zion Tech Group</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Latest News
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Stay informed with our most recent articles and insights
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* News Article 1 */}
            <article className=&quot;card group&quot;>
              <div className=&quot;w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-16 h-16 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                </svg>
              </div>
              <div className=&quot;flex items-center mb-3&quot;>
                <span className=&quot;bg-purple-500/20 text-purple-400 text-xs font-bold px-2 py-1 rounded-full mr-3&quot;>
                  QUANTUM
                </span>
                <span className=&quot;text-gray-400 text-sm&quot;>December 12, 2024</span>
              </div>
              <h3 className=&quot;text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors&quot;>
                Quantum Computing Breakthrough: New Algorithm Reduces Error Rates by 60%
              </h3>
              <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                Our research team has developed a revolutionary quantum error correction algorithm 
                that significantly improves the reliability of quantum computations.
              </p>
              <Link href=&quot;/news/quantum-error-correction-breakthrough&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                Read More →
              </Link>
            </article>

            {/* News Article 2 */}
            <article className=&quot;card group&quot;>
              <div className=&quot;w-full h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-16 h-16 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <div className=&quot;flex items-center mb-3&quot;>
                <span className=&quot;bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full mr-3&quot;>
                  SECURITY
                </span>
                <span className=&quot;text-gray-400 text-sm&quot;>December 10, 2024</span>
              </div>
              <h3 className=&quot;text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors&quot;>
                New Cybersecurity Framework Addresses AI-Powered Threats
              </h3>
              <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                Zion Tech Group introduces comprehensive security protocols designed to protect 
                organizations from increasingly sophisticated AI-generated cyber attacks.
              </p>
              <Link href=&quot;/news/ai-cybersecurity-framework&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                Read More →
              </Link>
            </article>

            {/* News Article 3 */}
            <article className=&quot;card group&quot;>
              <div className=&quot;w-full h-48 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-16 h-16 text-red-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4&quot; />
                </svg>
              </div>
              <div className=&quot;flex items-center mb-3&quot;>
                <span className=&quot;bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded-full mr-3&quot;>
                  COMPANY
                </span>
                <span className=&quot;text-gray-400 text-sm&quot;>December 8, 2024</span>
              </div>
              <h3 className=&quot;text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors&quot;>
                Zion Tech Group Expands to European Market
              </h3>
              <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                We're excited to announce our expansion into the European market with new 
                offices in London, Berlin, and Paris to better serve our international clients.
              </p>
              <Link href=&quot;/news/european-market-expansion&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                Read More →
              </Link>
            </article>

            {/* News Article 4 */}
            <article className=&quot;card group&quot;>
              <div className=&quot;w-full h-48 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-16 h-16 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 19l9 2-9-18-9 18 9-2zm0 0v-8&quot; />
                </svg>
              </div>
              <div className=&quot;flex items-center mb-3&quot;>
                <span className=&quot;bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded-full mr-3&quot;>
                  SPACE TECH
                </span>
                <span className=&quot;text-gray-400 text-sm&quot;>December 5, 2024</span>
              </div>
              <h3 className=&quot;text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors&quot;>
                Satellite Communication Technology Advances
              </h3>
              <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                Our space technology division has developed next-generation satellite 
                communication systems with improved bandwidth and reliability.
              </p>
              <Link href=&quot;/news/satellite-communication-advances&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                Read More →
              </Link>
            </article>

            {/* News Article 5 */}
            <article className=&quot;card group&quot;>
              <div className=&quot;w-full h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-16 h-16 text-indigo-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z&quot; />
                </svg>
              </div>
              <div className=&quot;flex items-center mb-3&quot;>
                <span className=&quot;bg-indigo-500/20 text-indigo-400 text-xs font-bold px-2 py-1 rounded-full mr-3&quot;>
                  AI
                </span>
                <span className=&quot;text-gray-400 text-sm&quot;>December 3, 2024</span>
              </div>
              <h3 className=&quot;text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors&quot;>
                AI Content Generation: Balancing Creativity and Ethics
              </h3>
              <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                Our AI ethics team explores the challenges and opportunities in AI-generated 
                content, ensuring responsible development and deployment.
              </p>
              <Link href=&quot;/news/ai-content-generation-ethics&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                Read More →
              </Link>
            </article>

            {/* News Article 6 */}
            <article className=&quot;card group&quot;>
              <div className=&quot;w-full h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl mb-6 flex items-center justify-center&quot;>
                <svg className=&quot;w-16 h-16 text-yellow-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10&quot; />
                </svg>
              </div>
              <div className=&quot;flex items-center mb-3&quot;>
                <span className=&quot;bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded-full mr-3&quot;>
                  RESEARCH
                </span>
                <span className=&quot;text-gray-400 text-sm&quot;>November 30, 2024</span>
              </div>
              <h3 className=&quot;text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors&quot;>
                Research Partnership with Leading Universities
              </h3>
              <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                Zion Tech Group announces strategic research partnerships with MIT, Stanford, 
                and Cambridge to advance AI and quantum computing technologies.
              </p>
              <Link href=&quot;/news/university-research-partnerships&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                Read More →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Stay Updated
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Subscribe to our newsletter for the latest news, insights, and technology updates
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 max-w-md mx-auto&quot;>
              <input
                type=&quot;email&quot;
                placeholder=&quot;Enter your email&quot;
                className=&quot;flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500&quot;
              />
              <button className=&quot;btn-primary px-8 py-3&quot;>
                Subscribe
              </button>
            </div>
            <p className=&quot;text-gray-400 text-sm mt-4&quot;>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <div className=&quot;card&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Want to Share Your Story?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Are you a journalist or industry analyst? We'd love to connect and share 
              insights about our latest innovations and industry trends.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;btn-primary text-lg px-8 py-4&quot;>
                Contact Media Relations
              </Link>
              <Link href=&quot;/about&quot; className=&quot;btn-secondary text-lg px-8 py-4&quot;>
                Learn About Zion Tech Group
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}