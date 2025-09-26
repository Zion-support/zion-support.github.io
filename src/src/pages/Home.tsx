import { ArrowRight, Shield, Zap, Users, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      {/* Hero Section */}
      <section className='container mx-auto px-6 py-20'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-5xl md:text-7xl font-bold text-gray-900 mb-6'>
            Zion Tech Group
          </h1>
          <p className='text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed'>
            Leading the future of technology with innovative solutions, 
            cutting-edge AI, and transformative digital experiences.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2'>
              Explore Services
              <ArrowRight className='w-5 h-5' />
            </button>
            <button className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200'>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='container mx-auto px-6 py-20'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Why Choose Zion Tech Group?
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            We deliver exceptional technology solutions that drive business growth and innovation.
          </p>
        </div>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6'>
              <Shield className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>Enterprise Security</h3>
            <p className='text-gray-600'>
              Advanced cybersecurity solutions protecting your business from evolving threats.
            </p>
          </div>
          
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6'>
              <Zap className='w-8 h-8 text-green-600' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>AI Innovation</h3>
            <p className='text-gray-600'>
              Cutting-edge artificial intelligence solutions that transform your operations.
            </p>
          </div>
          
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6'>
              <Users className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>Expert Team</h3>
            <p className='text-gray-600'>
              World-class engineers and consultants dedicated to your success.
            </p>
          </div>
          
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6'>
              <Globe className='w-8 h-8 text-orange-600' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>Global Reach</h3>
            <p className='text-gray-600'>
              Serving clients worldwide with localized expertise and support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-blue-600 py-20'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Join thousands of companies that trust Zion Tech Group for their technology needs.
          </p>
          <button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200'>
            Start Your Journey Today
          </button>
        </div>
      </section>
    </div>
  );
}
