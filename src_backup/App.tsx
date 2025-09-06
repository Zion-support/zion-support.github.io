import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';
import { BackToTopButton } from './components/BackToTopButton';
// Pages are handled by Next.js in the app directory

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