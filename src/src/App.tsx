import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceMonitor from './components/PerformanceMonitor';
import SEO from './components/SEO';

// Lazy load components
const Home = React.lazy(() => import('../pages/Home'));
// const Services = React.lazy(() => import('../pages/Services'));
// const Contact = React.lazy(() => import('../pages/Contact'));
// const NotFound = React.lazy(() => import('../pages/NotFound'));

function App() {
  return (
    <ErrorBoundary>
      <SEO />
      <PerformanceMonitor />
      <div className='App'>
        <Header />
        <Suspense fallback={<LoadingSpinner size="xl" className="min-h-screen" />}>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;