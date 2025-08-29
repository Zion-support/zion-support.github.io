import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Mail, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-zion-slate-light mb-4">404</div>
          <div className="w-24 h-1 bg-gradient-to-r from-zion-cyan to-zion-purple mx-auto"></div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-zion-slate-dark mb-6">
          Page Not Found
        </h1>

        <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Don't worry, we're here to help you find what you need.
        </p>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Link
            to="/"
            className="flex flex-col items-center p-6 bg-zion-slate-light/20 rounded-lg hover:bg-zion-slate-light/30 transition-colors group"
          >
            <Home className="w-8 h-8 text-zion-cyan mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-zion-slate-dark">Go Home</span>
          </Link>

          <Link
            to="/search"
            className="flex flex-col items-center p-6 bg-zion-slate-light/20 rounded-lg hover:bg-zion-slate-light/30 transition-colors group"
          >
            <Search className="w-8 h-8 text-zion-cyan mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-zion-slate-dark">Search Site</span>
          </Link>

          <Link
            to="/contact"
            className="flex flex-col items-center p-6 bg-zion-slate-light/20 rounded-lg hover:bg-zion-slate-light/30 transition-colors group"
          >
            <Mail className="w-8 h-8 text-zion-cyan mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-zion-slate-dark">Contact Us</span>
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-slate-dark mb-6">
            Popular Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/about"
              className="p-4 bg-white border border-zion-slate-light rounded-lg hover:border-zion-cyan hover:shadow-md transition-all text-left"
            >
              <h3 className="font-semibold text-zion-slate-dark mb-1">About Us</h3>
              <p className="text-sm text-zion-slate-light">
                Learn about our company, mission, and team
              </p>
            </Link>

            <Link
              to="/services"
              className="p-4 bg-white border border-zion-slate-light rounded-lg hover:border-zion-cyan hover:shadow-md transition-all text-left"
            >
              <h3 className="font-semibold text-zion-slate-dark mb-1">Our Services</h3>
              <p className="text-sm text-zion-slate-light">
                Explore our technology solutions and services
              </p>
            </Link>

            <Link
              to="/careers"
              className="p-4 bg-white border border-zion-slate-light rounded-lg hover:border-zion-cyan hover:shadow-md transition-all text-left"
            >
              <h3 className="font-semibold text-zion-slate-dark mb-1">Careers</h3>
              <p className="text-sm text-zion-slate-light">
                Join our team and grow with us
              </p>
            </Link>

            <Link
              to="/news"
              className="p-4 bg-white border border-zion-slate-light rounded-lg hover:border-zion-cyan hover:shadow-md transition-all text-left"
            >
              <h3 className="font-semibold text-zion-slate-dark mb-1">Latest News</h3>
              <p className="text-sm text-zion-slate-light">
                Stay updated with our latest developments
              </p>
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-zion-slate-light/20 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-zion-slate-dark mb-4">
            Need Help? Contact Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Phone className="w-4 h-4 text-zion-cyan" />
              <span>+1 (302) 464-0950</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Mail className="w-4 h-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-zion-slate-light text-zion-slate-dark rounded-lg hover:bg-zion-slate-light/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-zion-slate-light">
          <p className="text-sm text-zion-slate-light">
            If you believe this is an error, please{' '}
            <Link to="/contact" className="text-zion-cyan hover:underline">
              contact our support team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
