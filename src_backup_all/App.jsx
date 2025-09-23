import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import Footer from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));

// Enhanced Service Pages - only the ones we created and know work
const Q420o25CuttingEdgeServicesShowcase = React.lazy(
  () => import('./pages/Q420o25CuttingEdgeServicesShowcase')
);
const Zion20o26InnovativeServicesShowcase = React.lazy(
  () => import('./pages/Zion20o26InnovativeServicesShowcase')
);

// Loading component
const LoadingSpinner = () => (
  <div className='flex items-center justify-center min-h-screen'>
    <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan'></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light'>
        <AppHeader />

        <main className='flex-1'>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/blog/:slug' element={<BlogPost />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/careers' element={<Careers />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/terms' element={<Terms />} />
              <Route path='/sitemap' element={<Sitemap />} />
              <Route path='/green-it' element={<GreenIT />} />
              <Route path='/partners' element={<PartnersPage />} />
              <Route path='/login' element={<Login />} />

              {/* Enhanced Service Routes - only the working ones */}
              <Route
                path='/q4-20o25-cutting-edge-services'
                element={<Q420o25CuttingEdgeServicesShowcase />}
              />
              <Route
                path='/zion-20o26-innovative-services'
                element={<Zion20o26InnovativeServicesShowcase />}
              />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;
