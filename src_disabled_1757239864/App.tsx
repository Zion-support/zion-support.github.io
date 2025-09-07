import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Service Pages
import AIServices from './pages/AIServices';
import ITServices from './pages/ITServices';
import MicroSaaS from './pages/MicroSaaS';
import Cybersecurity from './pages/Cybersecurity';
import CloudMigration from './pages/CloudMigration';
import MobileDevelopment from './pages/MobileDevelopment';

// Additional Pages
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Support from './pages/Support';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <AccessibilityEnhancer>
            <Router>
              <ScrollToTop />
              <PerformanceMonitor />
              <div className="min-h-screen bg-background text-foreground" id="main-content">
                <Routes>
                  {/* Main Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  {/* Service Routes */}
                  <Route path="/services/ai-services" element={<AIServices />} />
                  <Route path="/services/it-services" element={<ITServices />} />
                  <Route path="/services/micro-saas" element={<MicroSaaS />} />
                  <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                  <Route path="/services/cloud-solutions" element={<CloudMigration />} />
                  <Route path="/services/mobile-development" element={<MobileDevelopment />} />
                  
                  {/* Additional Routes */}
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/support" element={<Support />} />
                  
                  {/* 404 Route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </Router>
          </AccessibilityEnhancer>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './components/Header';
import { Footer  } from './components/Footer';
import { ThemeProvider  } from './components/ThemeProvider';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';
import BackToTop from './components/BackToTopButton';
import Pricing from './pages/Pricing';

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
            <ToastContainer />
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
import { BackToTopButton  } from './components/BackToTopButton';
// Simple Home component;
const Home = () => (<div className="hero">;
    <div className="text-center">;
      <h1 className="text-4xl font-bold text-white mb-4">;
        Zion Tech Group;
      </h1>;
      <p className="text-xl text-blue-100 mb-8">;
        AI, Micro SaaS, and IT Services;
      </p>;
      <p className="text-gray-300 mb-8">;
        Leading technology solutions in AI, cybersecurity, cloud, and digital transformation.;
      </p>;
      <div className="cta-buttons">;
        <button className="btn-primary">;
          Get Started;
        </button>;
        <button className="btn-secondary">;
          Learn More;
        </button>;
      </div>;
    </div>;
  </div>;
)function App() {return (<ThemeProvider>;
      <ErrorBoundary>;
        <Router>;
          <ScrollToTop />;
          <div className="min-h-screen flex flex-col">;
            <Header />;
            <main className="flex-1">;
              <div className="min-h-screen flex items-center justify-center">;
                <div className="text-center">;
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">;
                    Zion Tech Group;
                  </h1>;
                  <p className="text-xl text-gray-600 mb-8">;
                    AI, Micro SaaS, and IT Services;
                  </p>;
                  <p className="text-gray-500">;
                    This is a Vite-based React application. The main pages are handled by Next.js in the app directory.;
                  </p>;
                </div>;
              </div>;
            </main>;
            <Footer />;
            <BackToTopButton />;
          </div>;
        </Router>;
      </ErrorBoundary>;
    </ThemeProvider>;
  )}export default App;
import React from 'react';

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Zion Tech Group
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    AI, Micro SaaS, and IT Services
                  </p>
                  <p className="text-gray-500">
                    This is a Vite-based React application. The main pages are handled by Next.js in the app directory.
                  </p>
                </div>
              </div>
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
