<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';

=======
import React from 'react';
import { Link } from 'react-router-dom';
=======
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
import React from "react";
import MainLayout from "../components/layout/MainLayout";
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const NotFound: React.FC = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
<<<<<<< HEAD
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="btn-primary"
        >
          Go Home
        </a>
=======
        <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Home
        </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Animation */}
          <motion.div
            className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Page Not Found
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
            It might have been moved, deleted, or doesn&apos;t exist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Search Suggestions */}
          <div className="mt-12 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Maybe you were looking for:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/services"
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-gray-700/50"
              >
                Our Services
              </Link>
              <Link
                to="/about"
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-gray-700/50"
              >
                About Us
              </Link>
              <Link
                to="/pricing"
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-gray-700/50"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-gray-700/50"
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to our homepage to explore our AI and technology solutions."
        url="/404"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main className="flex items-center justify-center min-h-[80vh] px-4">
          <div className="text-center">
            <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
              404
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </div>
          </div>
        </main>

        <Footer />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
    <MainLayout title="404 - Page Not Found - Zion Tech Group" description="The page you're looking for doesn't exist.">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-8">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Go Home
        </a>
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
      </div>
    </MainLayout>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default NotFound;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
export default NotFound;
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react'; import { Link } from 'react-router-dom'; const NotFound = () => { return ( <div className="min-h-screen bg-gray-50 flex items-center justify-center"> <div className="max-w-md w-full text-center"> <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1> <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2> <p className="text-gray-600 mb-8"> The page you're looking for doesn't exist or has been moved. </p> <Link to="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" > Go Home </Link> </div> </div> )}; export default NotFound;

import React from 'react'; import { Link } from 'react-router-dom'; const NotFound = () =>: any { return ( <div className="min - h-screen bg - gray - 50 flex items - center justify - center"> <div className="max - w-md w - full text - center"> <h1 className="text - 6xl font - bold text - gray - 900 mb - 4">404</h1> <h2 className="text - 2xl font - semibold text - gray - 700 mb - 4">Page Not Found</h2> <p className="text - gray - 600 mb - 8"> The page you're looking for doesn't exist or has been moved. </p> <Link to="/" className="inline - flex items - center px - 6 py - 3 border border - transparent text - base font - medium rounded - md text - white bg - blue - 600 hover:bg - blue - 700 focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - blue - 500" > Go Home </Link> </div> </div> )} export default NotFound;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
export default NotFound;
>>>>>>> main
=======
export default NotFound;
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
export default NotFound;
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
