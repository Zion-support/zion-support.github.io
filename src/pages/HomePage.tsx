import React from 'react';
import Head from 'next/head';
import { NewContent2025PromotionBanner, NewContent2025ShowcaseSection } from '../components/NewContent2025PromotionBanner';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI & Technology Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services." />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* New Content Promotion Banner */}
        <NewContent2025PromotionBanner />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transforming businesses through cutting-edge technology solutions.
              From AI and blockchain to cloud infrastructure and micro SaaS platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* New Content Showcase Section */}
        <NewContent2025ShowcaseSection />
      </div>
    </>
  );
};

export default HomePage;