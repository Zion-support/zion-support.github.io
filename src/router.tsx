<<<<<<< HEAD
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Team = lazy(() => import('./pages/Team'));
=======
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d

const AppRouter: React.FC = () => {
  return (
    <Router>
<<<<<<< HEAD
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
<<<<<<< HEAD
=======
          <Route path="/team" element={<Team />} />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8245
=======
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;