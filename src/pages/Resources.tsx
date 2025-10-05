import React from 'react';

const Resources: React.FC = () => {
  return (
    <div className='min-h-screen bg-slate-950'>
      <div className='container mx-auto px-6 py-20'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent'>
            AI Resources & Documentation
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Comprehensive resources, guides, and documentation to help you
            leverage the full power of our AI solutions and technologies.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300'>
            <div className='text-6xl mb-6'>📚</div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Documentation
            </h3>
            <p className='text-gray-300 mb-6'>
              Complete API documentation, integration guides, and technical
              specifications.
            </p>
            <a
              href='/<docs'
              className='inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300'
            >
              View Docs →
            </a>
          </div>

          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300'>
            <div className='text-6xl mb-6'>🎯</div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Best Practices
            </h3>
            <p className='text-gray-300 mb-6'>
              Industry best practices, optimization techniques, and
              implementation strategies.
            </p>
            <a
              href='/best-<practices'
              className='inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300'
            >
              Learn More →
            </a>
          </div>

          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300'>
            <div className='text-6xl mb-6'>🛠️</div>
            <h3 className='text-2xl font-bold text-white mb-4'>Tools & SDKs</h3>
            <p className='text-gray-300 mb-6'>
              Development tools, SDKs, and libraries to accelerate your AI
              implementation.
            </p>
            <a
              href='/<tools'
              className='inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300'
            >
              Get Tools →
            </a>
          </div>

          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300'>
            <div className='text-6xl mb-6'>🎓</div>
            <h3 className='text-2xl font-bold text-white mb-4'>Tutorials</h3>
            <p className='text-gray-300 mb-6'>
              Step-by-step tutorials and hands-on guides for getting started
              with our AI solutions.
            </p>
            <a
              href='/<tutorials'
              className='inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300'
            >
              Start Learning →
            </a>
          </div>

          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300'>
            <div className='text-6xl mb-6'>💡</div>
            <h3 className='text-2xl font-bold text-white mb-4'>Use Cases</h3>
            <p className='text-gray-300 mb-6'>
              Real-world examples and use cases demonstrating AI implementation
              success stories.
            </p>
            <a
              href='/use-<cases'
              className='inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300'
            >
              Explore Cases →
            </a>
          </div>

          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300'>
            <div className='text-6xl mb-6'>🔧</div>
            <h3 className='text-2xl font-bold text-white mb-4'>Support</h3>
            <p className='text-gray-300 mb-6'>
              Technical support, community forums, and expert assistance for
              your AI journey.
            </p>
            <a
              href='/<support'
              className='inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300'
            >
              Get Support →
            </a>
          </div>
        </div>

        <div className='mt-16 text-center'>
          <div className='bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Ready to Get Started?
            </h2>
            <p className='text-lg text-gray-300 mb-6 max-w-2xl mx-auto'>
              Join thousands of developers and enterprises who are already
              leveraging our AI solutions to transform their businesses.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/<contact'
                className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1'
              >
                Start Your Project
              </a>
              <a
                href='/<blog'
                className='border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300'
              >
                Read Our Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
