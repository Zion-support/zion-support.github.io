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

const ContentRoutes = () => {
  return (}
    <Routes>
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
  );
};

export { ContentRoutes };
export default ContentRoutes;