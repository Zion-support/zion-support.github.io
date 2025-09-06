
ursor/automate-test-improve-and-merge-code-646c;
import { motion  } from 'framer-motion';
import { Home, ArrowLeft, Search  } from 'lucide-react';
import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

=======
import { Link  } from 'react-router-dom';
import { Home, ArrowLeft  } from 'lucide-react';
import { Button  } from '../components/ui/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
ursor/integrate-build-improve-and-re-verify-9d47;
const NotFound: React.FC = () => {const NotFound = () => {import Button from '../components/Button';
const NotFound: React.FC = () => {return (<>;
      <SEO;
        title="404 - Page Not Found";
        description="The page you're looking for doesn't exist. Return to our homepage to explore our AI and technology solutions.";
        url="/404";
      />;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        <Header />;
        <main className="flex items-center justify-center min-h-[80vh] px-4">;
          <div className="text-center">;
            <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">;
              404;
            </div>;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Page Not Found;
            </h1>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              The page you're looking for doesn't exist or has been moved.;
              Let's get you back on track.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Button size="lg" asChild>;
                <Link to="/">;
                  <Home className="mr-2 h-5 w-5" />;
                  Go Home;
                </Link>;
              </Button>;
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" onClick={() => window.history.back()}>;
                <ArrowLeft className="mr-2 h-5 w-5" />;
                Go Back;
              </Button>;
            </div>;
          </div>;
        </main>;
        <Footer />;
      </div>;
    </>;
  )}export default NotFound;class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
import React from 'react'; import { Link } from 'react-router-dom'; const NotFound = () => { return ( <div className="min-h-screen bg-gray-50 flex items-center justify-center"> <div className="max-w-md w-full text-center"> <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1> <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2> <p className="text-gray-600 mb-8"> The page you're looking for doesn't exist or has been moved. </p> <Link to="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" > Go Home </Link> </div> </div> )}export default NotFound;import React from 'react'; import { Link } from 'react-router-dom'; const NotFound = () =>: any { return ( <div className="min - h-screen bg - gray - 50 flex items - center justify - center"> <div className="max - w-md w - full text - center"> <h1 className="text - 6xl font - bold text - gray - 900 mb - 4">404</h1> <h2 className="text - 2xl font - semibold text - gray - 700 mb - 4">Page Not Found</h2> <p className="text - gray - 600 mb - 8"> The page you're looking for doesn't exist or has been moved. </p> <Link to="/" className="inline - flex items - center px - 6 py - 3 border border - transparent text - base font - medium rounded - md text - white bg - blue - 600 hover:bg - blue - 700 focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - blue - 500" > Go Home </Link> </div> </div> )} export default NotFound;export default NotFound;export default NotFound;
ursor/integrate-build-improve-and-re-verify-9d47;
ursor/automate-test-improve-and-merge-code-646c;
>>>>>>> 157aff07b859488146569974cc7382910d9762e2
export default NotFound;