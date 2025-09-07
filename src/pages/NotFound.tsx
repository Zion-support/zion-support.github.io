import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
 ;
  return (
    <>
      <SEO;
title=\"404 - Page Not Found\"
        description=\"The page you're looking for doesn't exist. Return to our homepage to explore our AI and technology solutions.\"
        url=\"/404\"
      />
      "
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900\" />
        <Header />
        "
        <main className=\"flex items-center justify-center min-h-[80vh] px-4\" />"
          <div className=\"text-center\" />"
            <div className=\"text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8\" />
              404;
            </div>"
            <h1 className=\"text-4xl md: text-6xl font-bold text-white mb-6\" />
              Page Not Found;
            </h1>"
            <p className=\"text-xl text-gray-300 mb-8 max-w-2xl mx-auto\" />
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>"
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\" />"
              <Button size=\"lg\" asChild />"
                <Link to=\"/\" />"
                  <Home className=\"mr-2 h-5 w-5\" />
                  Go Home;
                </Link>}
              </Button>}"
              <Button size=\"lg\" variant=\"outline\" className=\"text-white border-white hover:bg-white hover:text-gray-900\" onClick={() = /> window.history.back()}>"
                <ArrowLeft className=\"mr-2 h-5 w-5\" />
                Go Back;
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
};


export default NotFound;"