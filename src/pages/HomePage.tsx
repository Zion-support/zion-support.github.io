import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Globe } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <div className='text-center'>
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                Zion Tech Group
              </span>
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
              Revolutionary AI solutions for enterprise. Transform your business
              with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous
              Operations.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/contact'
                className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
              >
                Get Started Today
              </Link>
              <Link
                to='/services'
                className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Enterprise-Grade AI Solutions
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Cutting-edge technology that drives innovation and delivers
              measurable results
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
              <Award className='w-12 h-12 text-blue-400 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-white mb-3'>
                AI Excellence
              </h3>
              <p className='text-gray-300'>
                Award-winning AI solutions trusted by Fortune 500 companies
                worldwide.
              </p>
            </div>

            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
              <Users className='w-12 h-12 text-purple-400 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-white mb-3'>
                Expert Team
              </h3>
              <p className='text-gray-300'>
                World-class AI engineers and researchers with decades of
                combined experience.
              </p>
            </div>

            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center'>
              <Globe className='w-12 h-12 text-green-400 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-white mb-3'>
                Global Impact
              </h3>
              <p className='text-gray-300'>
                Transforming businesses across industries with scalable AI
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
            Join the AI revolution and unlock the full potential of your
            enterprise with our cutting-edge solutions.
          </p>
          <Link
            to='/contact'
            className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center'
          >
            Start Your Journey
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
