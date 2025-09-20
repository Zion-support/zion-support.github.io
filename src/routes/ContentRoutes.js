import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from ";
import { Route } from 'react-router-dom, ';
import Blog from '@/pages/Blog;';
import BlogPost from '@/pages/BlogPost;';
export default function ContentRoutes() {
    return (_jsxs(_Fragment, { children: [_jsx(Route, { path: "blog", element: _jsx(Blog, {}) }), _jsx(Route, { path: "blog/:slug", element: _jsx(BlogPost, {}) })] }))
}
import { Route, Routes, Navigate } from "
import Home from "
import About from "
import Contact from "
import Privacy from "
import Blog from "
import BlogPost from "
import GreenIT from "
import Careers from "
import FAQ from "
import Enterprise from "
import SearchPage from "
import { SitemapPage } from "
import Sitemap from "
import Terms from "
import Cookies from "
import HelpCenterPage from "
import AccountSettings from "
import ProjectRoom from "
import VideoCall from "
import Services from "
const ContentRoutes = () => {
    return (<Routes>
      {/* Content Routes */}
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/privacy" element={<Privacy />}/>
      <Route path="/cookies" element={<Cookies />}/>
      
      {/* Help Center Routes */}
      <Route path="/help" element={<HelpCenterPage />}/>
      <Route path="/support" element={<HelpCenterPage />}/>
      <Route path="/faq" element={<FAQ />}/>
      
      {/* Blog Routes */}
      <Route path="/blog" element={<Blog />}/>
      <Route path="/blog/:slug" element={<BlogPost />}/>
      {/* Legacy paths for older links */}
      <Route path="/content/blog" element={<Blog />}/>
      <Route path="/content/blog/:slug" element={<BlogPost />}/>
      
      {/* Green IT Route */}
      <Route path="/green-it" element={<GreenIT />}/>

      {/* Careers Route */}
      <Route path="/careers" element={<Careers />}/>

      {/* Enterprise Route */}
      <Route path="/enterprise" element={<Enterprise />}/>

      {/* Legal Pages */}
      <Route path="/terms" element={<Terms />}/>

      {/* Account Settings */}
      <Route path="/settings/account" element={<AccountSettings />}/>
      
      {/* Project Room */}
      <Route path="/project-room/:projectId" element={<ProjectRoom />}/>
      
      {/* Video Call */}
      <Route path="/video-call/:roomId" element={<VideoCall />}/>

      {/* Global Search Route */}
      <Route path="/search" element={<SearchPage />}/>
      
      {/* API Documentation Redirect */}
      <Route path="/api-docs" element={<Navigate to="/developers/docs" replace/>}/>
      
      {/* Sitemap Pages */}
      <Route path="/sitemap" element={<Sitemap />}/>
      <Route path="/sitemap-page" element={<SitemapPage />}/>
    </Routes>)
};
export export default ContentRoutes;
