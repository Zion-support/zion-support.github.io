import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
      <div className=relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20>
          <div className=text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6>
              <span className=bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto>
              Leading AI-powered technology solutions for modern businesses. 
              Transform your digital future with cutting-edge innovation and enterprise-grade reliability.
            </p>
            <div className=flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services
                className=bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-2xl inline-block hover:scale-105"
              >
                Explore Services
              </a>
              <a
                href="/contact
                className=bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl inline-block hover:scale-105"
              >
                Start Your Journey Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
