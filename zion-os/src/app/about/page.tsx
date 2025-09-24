export default function AboutPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>About Zion Tech Group</h1>
          <p className='text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto'>
            Pioneering the future of AI-powered technology solutions and autonomous business operations.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Leading the AI Revolution</h2>
              <p className='text-lg text-gray-600 mb-6'>
                Founded with a vision to democratize advanced AI technology, Zion Tech Group has been at the
                forefront of innovation in artificial intelligence, quantum computing, and autonomous systems.
              </p>
              <p className='text-lg text-gray-600 mb-6'>
                Our mission is to empower businesses with cutting-edge technology solutions that drive growth,
                efficiency, and competitive advantage in an increasingly digital world.
              </p>
              <p className='text-lg text-gray-600'>
                With a team of world-class engineers, researchers, and strategists, we're building the future of
                intelligent automation and decision-making systems.
              </p>
            </div>
            <div className='bg-gray-100 p-8 rounded-xl'>
              <div className='space-y-6'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <span className='w-6 h-6 text-blue-600'>⚡</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900'>Innovation First</h3>
                    <p className='text-gray-600'>Pioneering breakthrough technologies</p>
                  </div>
                </div>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
                    <span className='w-6 h-6 text-green-600'>🔒</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900'>Security Focused</h3>
                    <p className='text-gray-600'>Enterprise-grade security standards</p>
                  </div>
                </div>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <span className='w-6 h-6 text-purple-600'>🤝</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900'>Customer Success</h3>
                    <p className='text-gray-600'>Dedicated support and success teams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Our Mission & Values</h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Driving innovation while maintaining the highest standards of ethics and responsibility.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='w-8 h-8 text-blue-600'>💡</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Innovation</h3>
              <p className='text-gray-600'>Pushing the boundaries of what's possible with AI and emerging technologies.</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='w-8 h-8 text-green-600'>🧭</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Integrity</h3>
              <p className='text-gray-600'>Building trust through transparent, ethical, and responsible development.</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='w-8 h-8 text-purple-600'>👥</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Collaboration</h3>
              <p className='text-gray-600'>Working with clients and partners to create lasting impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Zion Tech Group by the Numbers</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-4xl font-bold text-blue-600 mb-2'>2018</div>
              <div className='text-gray-600'>Founded</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-blue-600 mb-2'>100+</div>
              <div className='text-gray-600'>Team Members</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-blue-600 mb-2'>25+</div>
              <div className='text-gray-600'>Countries Served</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-blue-600 mb-2'>$50M+</div>
              <div className='text-gray-600'>Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Leadership Team</h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Experienced leaders driving innovation and growth across our business.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-xl shadow-sm'>
              <div className='w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6' />
              <h3 className='text-xl font-semibold text-gray-900 text-center mb-2'>Dr. Sarah Chen</h3>
              <p className='text-blue-600 text-center mb-4'>Chief Executive Officer</p>
              <p className='text-gray-600 text-center'>Former AI Research Director at Google; PhD, Stanford.</p>
            </div>
            <div className='bg-white p-8 rounded-xl shadow-sm'>
              <div className='w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6' />
              <h3 className='text-xl font-semibold text-gray-900 text-center mb-2'>Michael Rodriguez</h3>
              <p className='text-blue-600 text-center mb-4'>Chief Technology Officer</p>
              <p className='text-gray-600 text-center'>Quantum computing expert with 15+ years in advanced tech.</p>
            </div>
            <div className='bg-white p-8 rounded-xl shadow-sm'>
              <div className='w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6' />
              <h3 className='text-xl font-semibold text-gray-900 text-center mb-2'>Dr. James Kim</h3>
              <p className='text-blue-600 text-center mb-4'>Chief Research Officer</p>
              <p className='text-gray-600 text-center'>Leader in autonomous systems and AI research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-blue-600 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Join Us in Shaping the Future</h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Ready to partner with a company that's redefining what's possible with AI and technology?
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a href='/contact' className='bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors'>
              Get in Touch
            </a>
            <a href='/careers' className='border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'>
              View Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}