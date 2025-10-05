<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
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
=======
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
=======
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61

const AppRouter: React.FC = () => {
  return (
    <Router>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8245
=======
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
=======
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;