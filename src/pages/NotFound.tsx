import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number */}
          <div className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple mb-8">
            404
          </div>
          
          {/* Error Message */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Page Not Found
          </h1>
          
          <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track to exploring our amazing services.
          </p>
          
          {/* Navigation Options */}
          <div className="space-y-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/" className="group bg-zion-slate-dark/50 backdrop-blur-lg rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  Go Home
                </h3>
                <p className="text-zion-slate-light text-sm">
                  Return to our homepage and explore our services
                </p>
              </Link>
              
              <Link to="/services" className="group bg-zion-slate-dark/50 backdrop-blur-lg rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  Our Services
                </h3>
                <p className="text-zion-slate-light text-sm">
                  Discover what we can do for your business
                </p>
              </Link>
              
              <Link to="/contact" className="group bg-zion-slate-dark/50 backdrop-blur-lg rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  Contact Us
                </h3>
                <p className="text-zion-slate-light text-sm">
                  Get in touch with our team for assistance
                </p>
              </Link>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/" className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Back to Homepage
            </Link>
            
            <Link to="/contact" className="inline-flex items-center px-10 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan/10 hover:border-zion-cyan/50 transition-all duration-300 transform hover:scale-105">
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Need Help?
            </Link>
          </div>
          
          {/* Additional Help */}
          <div className="mt-16 p-6 bg-zion-slate-dark/30 rounded-2xl border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              Still Can't Find What You're Looking For?
            </h3>
            <p className="text-zion-slate-light mb-4">
              Our team is here to help. Contact us directly and we'll guide you to the right place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div className="flex items-center justify-center">
                <svg className="w-4 h-4 text-zion-cyan mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-4 h-4 text-zion-cyan mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-zion-slate-light">+1 302 464 0950</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
