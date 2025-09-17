import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import Footer from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import ErrorBoundary from './components/ErrorBoundary';
import { NotificationProvider } from './components/NotificationSystem';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const AIInnovationHub2026 = React.lazy(() => import('./pages/AIInnovationHub2026'));
const TechTrends2026 = React.lazy(() => import('./pages/TechTrends2026'));
const ComprehensiveTechInsights2026 = React.lazy(() => import('./pages/ComprehensiveTechInsights2026'));

// Loading component
const LoadingFallback = () => <LoadingSpinner size="large" text="Loading page..." className="min-h-screen" />;

function App() {
    return (
      <ErrorBoundary>
        <NotificationProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
              <AppHeader />

              <main className="flex-1">
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/pages/AIInnovationHub2026" element={<AIInnovationHub2026 />}/>
                    <Route path="/pages/TechTrends2026" element={<TechTrends2026 />}/>
                    <Route path="/pages/ComprehensiveTechInsights2026" element={<ComprehensiveTechInsights2026 />}/>
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <ChatAssistant />
            </div>
          </Router>
        </NotificationProvider>
      </ErrorBoundary>
    );
}

export default App;
