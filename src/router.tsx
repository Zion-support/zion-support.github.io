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
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-4daf
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0290
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fad3

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/team" element={<Team />} />
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
>>>>>>> cursor/fix-errors-and-merge-to-main-4daf
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0290
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fad3
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;