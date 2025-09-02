import { Routes, Route, Navigate } from 'react-router-dom';
// Import all the page components
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import ComprehensiveServices from '../pages/ComprehensiveServices';
import AIServices from '../pages/AIServices';
import ITServices from '../pages/ITServices';
import MicroSaaS from '../pages/MicroSaaS';
import Privacy from '../pages/Privacy';
import Cookies from '../pages/Cookies';
import HelpCenterPage from '../pages/HelpCenterPage';
import FAQ from '../pages/FAQ';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import GreenIT from '../pages/GreenIT';
import Careers from '../pages/Careers';
import Enterprise from '../pages/Enterprise';
import Terms from '../pages/Terms';
import AccountSettings from '../pages/AccountSettings';
import ProjectRoom from '../pages/ProjectRoom';
import VideoCall from '../pages/VideoCall';
import SearchPage from '../pages/SearchPage';
import Sitemap from '../pages/Sitemap';
import SitemapPage from '../pages/SitemapPage';
const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
      <Route path="/ai-services" element={<AIServices />} />
      <Route path="/it-services" element={<ITServices />} />
      <Route path="/micro-saas" element={<MicroSaaS />} />
      <Route path="/services/micro-saas-solutions" element={<MicroSaaS />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/help" element={<HelpCenterPage />} />
      <Route path="/support" element={<HelpCenterPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/: slug" element={<BlogPost />} />
      <Route path="/content/blog" element={<Blog />} />
      <Route path="/content/blog/:slug" element={<BlogPost />} />
      <Route path="/green-it" element={<GreenIT />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/settings/account" element={<AccountSettings />} />
      <Route path="/project-room/:projectId" element={<ProjectRoom />} />
      <Route path="/video-call/:roomId" element={<VideoCall />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/api-docs" element={<Navigate to="/developers/docs" replace />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/sitemap-page" element={<SitemapPage />} />
    </Routes>
  );
};
export { ContentRoutes };
export default ContentRoutes;