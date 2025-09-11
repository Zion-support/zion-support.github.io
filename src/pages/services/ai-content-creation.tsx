import React from 'react';

const AIContentCreation: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
            AI Content Creation Services
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Transform your content strategy with our advanced AI-powered content
            creation solutions. Generate high-quality, engaging content at
            scale.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          <div className='bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700'>
            <h3 className='text-xl font-semibold mb-4 text-cyan-400'>
              Blog Posts & Articles
            </h3>
            <p className='text-gray-300 mb-4'>
              Generate comprehensive blog posts and articles tailored to your
              industry and audience.
            </p>
            <ul className='text-sm text-gray-400 space-y-2'>
              <li>• SEO-optimized content</li>
              <li>• Multiple writing styles</li>
              <li>• Research-backed insights</li>
            </ul>
          </div>

          <div className='bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700'>
            <h3 className='text-xl font-semibold mb-4 text-cyan-400'>
              Social Media Content
            </h3>
            <p className='text-gray-300 mb-4'>
              Create engaging social media posts across all platforms with
              consistent brand voice.
            </p>
            <ul className='text-sm text-gray-400 space-y-2'>
              <li>• Platform-specific formatting</li>
              <li>• Hashtag optimization</li>
              <li>• Visual content suggestions</li>
            </ul>
          </div>

          <div className='bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700'>
            <h3 className='text-xl font-semibold mb-4 text-cyan-400'>
              Marketing Copy
            </h3>
            <p className='text-gray-300 mb-4'>
              Craft compelling marketing copy that converts visitors into
              customers.
            </p>
            <ul className='text-sm text-gray-400 space-y-2'>
              <li>• Email campaigns</li>
              <li>• Ad copy variations</li>
              <li>• Landing page content</li>
            </ul>
          </div>
        </div>

        <div className='text-center'>
          <button className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105'>
            Get Started with AI Content Creation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIContentCreation;
