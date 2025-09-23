
import { SitemapPage } from "@/components/SitemapPage";
import About from "@/pages/About";
import AccountSettings from "@/pages/AccountSettings";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import Cookies from "@/pages/Cookies";
import Enterprise from "@/pages/Enterprise";
import FAQ from "@/pages/FAQ";
import GreenIT from "@/pages/GreenIT";
import HelpCenterPage from "@/pages/HelpCenterPage";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import ProjectRoom from "@/pages/ProjectRoom";
import SearchPage from "@/pages/SearchPage";
import Services from "@/pages/Services";
import Sitemap from "@/pages/Sitemap";
import Terms from "@/pages/Terms";
import VideoCall from "@/pages/VideoCall";
import AIImplementationPlaybook2026 from "@/pages/resources/ai-implementation-playbook-2026";
import { Navigate, Route, Routes } from "react-router-dom";
import NewContentShowcase from "@/pages/NewContentShowcase";

const ContentRoutes = () => {
  return (
    <Routes>
      {/* Content Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />

      {/* Help Center Routes */}
      <Route path="/help" element={<HelpCenterPage />} />
      <Route path="/support" element={<HelpCenterPage />} />
      <Route path="/faq" element={<FAQ />} />

      {/* Blog Routes */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      {/* Legacy paths for older links */}
      <Route path="/content/blog" element={<Blog />} />
      <Route path="/content/blog/:slug" element={<BlogPost />} />

      {/* Green IT Route */}
      <Route path="/green-it" element={<GreenIT />} />

      {/* Careers Route */}
      <Route path="/careers" element={<Careers />} />

      {/* Enterprise Route */}
      <Route path="/enterprise" element={<Enterprise />} />

      {/* Legal Pages */}
      <Route path="/terms" element={<Terms />} />

      {/* Account Settings */}
      <Route path="/settings/account" element={<AccountSettings />} />

      {/* Project Room */}
      <Route path="/project-room/:projectId" element={<ProjectRoom />} />

      {/* Video Call */}
      <Route path="/video-call/:roomId" element={<VideoCall />} />

      {/* Global Search Route */}
      <Route path="/search" element={<SearchPage />} />

      {/* Resources */}
      <Route path="/resources/ai-implementation-playbook-2026" element={<AIImplementationPlaybook2026 />} />

      {/* New Content Showcase */}
      <Route path="/new-content-showcase" element={<NewContentShowcase />} />

      {/* API Documentation Redirect */}
      <Route path="/api-docs" element={<Navigate to="/developers/docs" replace />} />

      {/* Sitemap Pages */}
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/sitemap-page" element={<SitemapPage />} />
    </Routes>
  );
};

export default ContentRoutes;
