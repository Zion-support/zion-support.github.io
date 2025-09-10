<<<<<<< HEAD
import { _Route, Routes, Navigate  } from 'react-router-dom'; import { _SitemapPage } from '@/components/SitemapPage'; ; const _ContentRoutes = ("props": "any) => {; return (; <Routes> {"}; <Route path="/" element={<Home  />} />" <Route path="/home" element={<Home  />} />" <Route path="/about" element={<About  />} />" <Route path="/contact" element={<Contact  />} />" <Route path="/services" element={<Services  />} />" <Route path="/privacy" element={<Privacy  />} />" <Route path="/cookies" element={<Cookies  />} /> {}" <Route path="/help" element={<HelpCenterPage  />} />" <Route path="/support" element={<HelpCenterPage  />} />" <Route path="/faq" element={<FAQ  />} /> {}" <Route path="/blog" element={<Blog  />} />" <Route path="/blog/: "slug" element={<BlogPost  />"} /> {}" <Route path="/content/blog" element={<Blog  />} />" <Route path="/content/blog/: "slug" element={<BlogPost  />"} /> {}" <Route path="/green-it" element={<GreenIT  />} /> {}" <Route path="/careers" element={<Careers  />} /> {}" <Route path="/enterprise" element={<Enterprise  />} /> {}" <Route path="/terms" element={<Terms  />} /> {}" <Route path="/settings/account" element={<AccountSettings  />} /> {}" <Route path="/project-room/: "projectId" element={<ProjectRoom  />"} /> {}" <Route path="/video-call/: "roomId" element={<VideoCall  />"} /> {}" <Route path="/search" element={<SearchPage  />} /> {}" <Route path="/api-docs" element={<Navigate to="/developers/docs" replace  />} /> {}" <Route path="/sitemap" element={<Sitemap  />} />" <Route path="/sitemap-page" element={<SitemapPage  />} />; </Routes>; );" };";" ;";" export default ContentRoutes;";
import { _Route,Routes,Navigate } from &apos;react-router-dom&apos;; import { _SitemapPage } from &apos;@/components/SitemapPage&apos;; ; const _ContentRoutes = (props) => {; return (; <Routes> {}; <Route path=&quot;/&quot; element={<Home />} />&quot; <Route path=&quot;/home&quot; element={<Home />} />&quot; <Route path=&quot;/about&quot; element={<About />} />&quot; <Route path=&quot;/contact&quot; element={<Contact />} />&quot; <Route path=&quot;/services&quot; element={<Services />} />&quot; <Route path=&quot;/privacy&quot; element={<Privacy />} />&quot; <Route path=&quot;/cookies&quot; element={<Cookies />} /> {}&quot; <Route path=&quot;/help&quot; element={<HelpCenterPage />} />&quot; <Route path=&quot;/support&quot; element={<HelpCenterPage />} />&quot; <Route path=&quot;/faq&quot; element={<FAQ />} /> {}&quot; <Route path=&quot;/blog&quot; element={<Blog />} />&quot; <Route path=&quot;/blog/:slug&quot; element={<BlogPost />} /> {}&quot; <Route path=&quot;/content/blog&quot; element={<Blog />} />&quot; <Route path=&quot;/content/blog/:slug&quot; element={<BlogPost />} /> {}&quot; <Route path=&quot;/green-it&quot; element={<GreenIT />} /> {}&quot; <Route path=&quot;/careers&quot; element={<Careers />} /> {}&quot; <Route path=&quot;/enterprise&quot; element={<Enterprise />} /> {}&quot; <Route path=&quot;/terms&quot; element={<Terms />} /> {}&quot; <Route path=&quot;/settings/account&quot; element={<AccountSettings />} /> {}&quot; <Route path=&quot;/project-room/:projectId&quot; element={<ProjectRoom />} /> {}&quot; <Route path=&quot;/video-call/:roomId&quot; element={<VideoCall />} /> {}&quot; <Route path=&quot;/search&quot; element={<SearchPage />} /> {}&quot; <Route path=&quot;/api-docs&quot; element={<Navigate to=&quot;/developers/docs&quot; replace />} /> {}&quot; <Route path=&quot;/sitemap&quot; element={<Sitemap />} />&quot; <Route path=&quot;/sitemap-page&quot; element={<SitemapPage />} />; </Routes>; );&quot; };&quot;;&quot; ;&quot;;&quot; export default ContentRoutes;&quot;; ;&apos;;&apos;;

import { Settings } from 'lucide-react';
const services = [];
const { Route,Routes,Navigate } from "react-router-dom"; import { _SitemapPage } from "@/components/SitemapPage"; ; const _ContentRoutes = (props) => {; return (; <Routes> {}; <Route path="/" element={<Home />} />" <Route path="/home" element={<Home />} />" <Route path="/about" element={<About />} />" <Route path="/contact" element={<Contact />} />" <Route path="/services" element={<Services />} />" <Route path="/privacy" element={<Privacy />} />" <Route path="/cookies" element={<Cookies />} /> {}" <Route path="/help" element={<HelpCenterPage />} />" <Route path="/support" element={<HelpCenterPage />} />" <Route path="/faq" element={<FAQ />} /> {}" <Route path="/blog" element={<Blog />} />" <Route path="/blog/:slug" element={<BlogPost />} /> {}" <Route path="/content/blog" element={<Blog />} />" <Route path="/content/blog/:slug" element={<BlogPost />} /> {}" <Route path="/green-it" element={<GreenIT />} /> {}" <Route path="/careers" element={<Careers />} /> {}" <Route path="/enterprise" element={<Enterprise />} /> {}" <Route path="/terms" element={<Terms />} /> {}" <Route path="/settings/account" element={<AccountSettings />} /> {}" <Route path="/project-room/:projectId" element={<ProjectRoom />} /> {}" <Route path="/video-call/:roomId" element={<VideoCall />} /> {}" <Route path="/search" element={<SearchPage />} /> {}" <Route path="/api-docs" element={<Navigate to="/developers/docs" replace />} /> {}" <Route path="/sitemap" element={<Sitemap />} />" <Route path="/sitemap-page" element={<SitemapPage />} />; </Routes>; );" };";" ;";" export default ContentRoutes;"; ;";";'"'"
=======
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import GreenIT from "@/pages/GreenIT";
import Careers from "@/pages/Careers";
import FAQ from "@/pages/FAQ";
import Enterprise from "@/pages/Enterprise";
import SearchPage from "@/pages/SearchPage";
import { SitemapPage } from "@/components/SitemapPage";
import Sitemap from "@/pages/Sitemap";
import Terms from "@/pages/Terms";
import Cookies from "@/pages/Cookies";
import HelpCenterPage from "@/pages/HelpCenterPage";
import AccountSettings from "@/pages/AccountSettings";
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";
import Services from "@/pages/Services";
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
    </Routes>);
};
export default ContentRoutes;
>>>>>>> origin/clean-error-fixing-automation
