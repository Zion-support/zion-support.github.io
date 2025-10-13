import React, { useCallback, useState, useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';

// Dynamically import heavy components for better performance
const ServiceCard = lazy(() => import('../components/ServiceCard'));

// Loading skeleton component
const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Analytics tracking for phone clicks
  const handlePhoneClick = useCallback(() => {
    if (
      typeof window !== 'undefined' &&
      (
        window as unknown as {
          gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void;
        }
      ).gtag
    ) {
      (
        window as unknown as {
          gtag: (command: string, action: string, parameters: Record<string, unknown>) => void;
        }
      ).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta
          name="description"
          content="Leading provider of AI-powered enterprise solutions, automation, and digital transformation services."
        />
        <meta
          name="keywords"
          content="AI solutions, enterprise AI, digital transformation, automation, cloud services"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <main id="main-content" className="container mx-auto px-4 py-16" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            aria-labelledby="hero-heading"
          >
            <h1 id="hero-heading" className="text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="gradient-text block mt-2">AI-Powered Solutions</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8" role="doc-subtitle">
              Achieve 300% ROI • 70% Cost Reduction • 90% Efficiency Gains
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
              Leading provider of enterprise AI solutions, quantum computing, and digital transformation. 
              We help businesses harness the power of artificial intelligence to drive unprecedented growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 text-lg"
                aria-label="Call us at (302) 464-0950"
              >
                Get Started Today: (302) 464-0950
              </a>
              <a
                href="/services"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 text-lg"
              >
                Explore Solutions
              </a>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white mb-16 rounded-2xl">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">300%</div>
                  <div className="text-indigo-200">Average ROI</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">70%</div>
                  <div className="text-indigo-200">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">90%</div>
                  <div className="text-indigo-200">Efficiency Gains</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-indigo-200">Projects Delivered</div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-4xl font-bold text-center text-gray-900 mb-12">
              Our Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Harness the power of artificial intelligence to drive innovation and efficiency in
                    your organization.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Machine Learning Models</li>
                    <li>• Predictive Analytics</li>
                    <li>• Natural Language Processing</li>
                  </ul>
                </article>
              </Suspense>

              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="text-4xl mb-4">⚛️</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quantum Computing</h3>
                  <p className="text-gray-600 mb-4">
                    Leverage quantum computing power for complex problem-solving and optimization challenges.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Quantum Algorithms</li>
                    <li>• Optimization Problems</li>
                    <li>• Advanced Cryptography</li>
                  </ul>
                </article>
              </Suspense>

              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Digital Transformation</h3>
                  <p className="text-gray-600 mb-4">
                    Transform your business processes with cutting-edge technology and expert consultation.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Process Automation</li>
                    <li>• Cloud Migration</li>
                    <li>• System Integration</li>
                  </ul>
                </article>
              </Suspense>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 bg-gray-50 rounded-2xl mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                What Our Clients Say
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 mb-4">
                    "Zion Tech Group transformed our operations with AI solutions that delivered 250% ROI in just 6 months."
                  </p>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">CEO, TechCorp</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 mb-4">
                    "Their quantum computing solutions solved problems we thought were impossible. Exceptional work!"
                  </p>
                  <div className="font-semibold text-gray-900">Michael Chen</div>
                  <div className="text-sm text-gray-500">CTO, InnovateLabs</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 mb-4">
                    "The digital transformation exceeded our expectations. Our efficiency increased by 85%."
                  </p>
                  <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                  <div className="text-sm text-gray-500">VP Operations, GlobalTech</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;
