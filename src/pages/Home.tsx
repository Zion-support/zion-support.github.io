import React from 'react';

import { CheckCircle } from 'lucide-react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
;

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Zion Tech Group - Leading AI & IT Solutions | Transform Your Business
        </title>
        <meta
          name='description'
          content='Zion Tech Group delivers cutting-edge AI and IT solutions that transform businesses. Expert consulting services with proven results.'
        />
        <meta
          name='keywords'
          content='AI solutions, IT consulting, cybersecurity, machine learning, cloud infrastructure, digital transformation'
        />
      </Helmet>

      <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50'>
        {/* Hero Section */}
        <section className='relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <div className='inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8'>
                <span className='w-4 h-4 mr-2'>✨</span>
                Trusted by 500+ companies worldwide
                <span className='w-4 h-4 ml-2'>🚀</span>
              </div>
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
                Leading AI & Technology Solutions
              </h1>
              <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
                Transform your business with cutting-edge AI micro SaaS and
                enterprise IT solutions. Build faster, scale smarter, and
                achieve unprecedented results.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  to='/services'
                  className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                >
                  Explore Services
                </Link>
                <Link
                  to='/contact'
                  className='border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors'
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Our Core Services
              </h2>
              <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                Comprehensive solutions designed to accelerate your digital
                transformation
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300'>
                <div className='text-center mb-6'>
                  <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                    <span className='w-8 h-8 text-blue-600'>⚡</span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    AI Services & Solutions
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Advanced artificial intelligence solutions including machine
                    learning, deep learning, and AI automation.
                  </p>
                  <div className='text-3xl font-bold text-blue-600 mb-4'>
                    Starting at $5,000
                  </div>
                </div>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-center gap-3'>
                    <span className='w-5 h-5 text-green-600'>✔️</span>
                    <span className='text-gray-700'>
                      Machine Learning Models
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <span className='w-5 h-5 text-green-600'>✔️</span>
                    <span className='text-gray-700'>Deep Learning Systems</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <span className='w-5 h-5 text-green-600'>✔️</span>
                    <span className='text-gray-700'>AI Automation</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <span className='w-5 h-5 text-green-600'>✔️</span>
                    <span className='text-gray-700'>Predictive Analytics</span>
                  </li>
                </ul>
                <Link
                  to='/services/ai-services'
                  className='block w-full text-center py-3 px-4 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors'
                >
                  Learn More
                </Link>
              </div>

              <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-blue-300 ring-2 ring-blue-100 relative'>
                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                  <span className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold'>
                    Most Popular
                  </span>
                </div>
                <div className='text-center mb-6'>
                  <div className='w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                    <span className='w-8 h-8 text-purple-600'>🚀</span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    Micro SaaS Solutions
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Scalable software-as-a-service applications designed for
                    rapid deployment and growth.
                  </p>
                  <div className='text-3xl font-bold text-blue-600 mb-4'>
                    Starting at $3,000
                  </div>
                </div>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='w-5 h-5 text-green-600' />
                    <span className='text-gray-700'>Rapid Development</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='w-5 h-5 text-green-600' />
                    <span className='text-gray-700'>Scalable Architecture</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='w-5 h-5 text-green-600' />
                    <span className='text-gray-700'>Cloud-Native Design</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='w-5 h-5 text-green-600' />
                    <span className='text-gray-700'>API-First Approach</span>
                  </li>
                </ul>
                <Link
                  to='/services/micro-saas'
                  className='block w-full text-center py-3 px-4 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-colors'
                >
                  Learn More
                </Link>
              </div>

              <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300'>
                <div className='text-center mb-6'>
                  <div className='w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                    <span className='w-8 h-8 text-green-600'>🛡️</span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    IT Services & Solutions
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Comprehensive IT infrastructure, cloud migration, and DevOps
                    services.
                  </p>
                  <div className='text-3xl font-bold text-blue-600 mb-4'>
                    Starting at $2,500
                  </div>
                </div>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='w-5 h-5 text-green-600' />
                    <span className='text-gray-700'>Cloud Migration</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='w-5 h-5 text-green-600' />
                    <span className='text-gray-700'>DevOps & SRE</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='w-5 h-5 text-green-600' />
                    <span className='text-gray-700'>
                      Infrastructure Management
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='w-5 h-5 text-green-600' />
                    <span className='text-gray-700'>Security & Compliance</span>
                  </li>
                </ul>
                <Link
                  to='/services/it-services'
                  className='block w-full text-center py-3 px-4 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors'
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-blue-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Join hundreds of enterprises already leveraging our AI and
              technology solutions.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/contact'
                className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Start Your Project
              </Link>
              <Link
                to='/about'
                className='border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
