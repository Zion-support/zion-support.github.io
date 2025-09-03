<<<<<<< HEAD
import React from &apos;react';
import { Routes, Route, Navigate } from &apos;react-router-dom';

// Import all the page components
import Home from &apos;../pages/Home';
import About from &apos;../pages/About';
import Contact from &apos;../pages/Contact';
import Services from &apos;../pages/Services';
import ComprehensiveServices from &apos;../pages/ComprehensiveServices';
import AIServices from &apos;../pages/AIServices';
import ITServices from &apos;../pages/ITServices';
import MicroSaaS from &apos;../pages/MicroSaaS';
import Privacy from &apos;../pages/Privacy';
import Cookies from &apos;../pages/Cookies';
import HelpCenterPage from &apos;../pages/HelpCenterPage';
import FAQ from &apos;../pages/FAQ';
import Blog from &apos;../pages/Blog';
import BlogPost from &apos;../pages/BlogPost';
import GreenIT from &apos;../pages/GreenIT';
import Careers from &apos;../pages/Careers';
import Enterprise from &apos;../pages/Enterprise';
import Terms from &apos;../pages/Terms';
import AccountSettings from &apos;../pages/AccountSettings';
import ProjectRoom from &apos;../pages/ProjectRoom';
import VideoCall from &apos;../pages/VideoCall';
import SearchPage from &apos;../pages/SearchPage';
import Sitemap from &apos;../pages/Sitemap';
import SitemapPage from &apos;../pages/SitemapPage';&apos;&apos;

=======
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
>>>>>>> main
const ContentRoutes = () => {
  return (}
    <Routes>
<<<<<<< HEAD
      <;<Route path=&quot;/&quot; element={&quot;}&quot;<Home />} />
      <Route path=&quot;/home&quot; element={&quot;}<Home />} />
      <Route path=&quot;/about&quot; element={&quot;}<About />} />
      <Route path=&quot;/contact&quot; element={&quot;}<Contact />} />
      <Route path=&quot;/services&quot; element={&quot;}<Services />} />
      <Route path=&quot;/comprehensive-services&quot; element={&quot;}<ComprehensiveServices />} />
      <Route path=&quot;/ai-services&quot; element={&quot;}<AIServices />} />
      <Route path=&quot;/it-services&quot; element={&quot;}<ITServices />} />
      <Route path=&quot;/micro-saas&quot; element={&quot;}<MicroSaaS />} />
      <Route path=&quot;/services/micro-saas-solutions&quot; element={&quot;}<MicroSaaS />} />
      <Route path=&quot;/privacy&quot; element={&quot;}<Privacy />} />
      <Route path=&quot;/cookies&quot; element={&quot;}<Cookies />} />
      <Route path=&quot;/help&quot; element={&quot;}<HelpCenterPage />} />
      <Route path=&quot;/support&quot; element={&quot;}<HelpCenterPage />} />
      <Route path=&quot;/faq&quot; element={&quot;}<FAQ />} />
      <Route path=&quot;/blog&quot; element={&quot;}<Blog />} />
      <Route path=&quot;/blog/:slug&quot; element={&quot;}<BlogPost />} />
      <Route path=&quot;/content/blog&quot; element={&quot;}<Blog />} />
      <Route path=&quot;/content/blog/:slug&quot; element={&quot;}<BlogPost />} />
      <Route path=&quot;/green-it&quot; element={&quot;}<GreenIT />} />
      <Route path=&quot;/careers&quot; element={&quot;}<Careers />} />
      <Route path=&quot;/enterprise&quot; element={&quot;}<Enterprise />} />
      <Route path=&quot;/terms&quot; element={&quot;}<Terms />} />
      <Route path=&quot;/settings/account&quot; element={&quot;}<AccountSettings />} />
      <Route path=&quot;/project-room/:projectId&quot; element={&quot;}<ProjectRoom />} />
      <Route path=&quot;/video-call/:roomId&quot; element={&quot;}<VideoCall />} />
      <Route path=&quot;/search&quot; element={&quot;}<SearchPage />} />
      <Route path=&quot;/api-docs&quot; element={&quot;}<Navigate to=&quot;/developers/docs&quot; replace />} />&quot;
      <Route path=&quot;/sitemap&quot; element={&quot;}<Sitemap />} />
      <Route path=&quot;/sitemap-page&quot; element={&quot;}<SitemapPage />} />
    <;</Routes>
=======
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
    </Routes>;
>>>>>>> main
  );
};
export { ContentRoutes };
export default ContentRoutes;