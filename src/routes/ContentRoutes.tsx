import Home from "@/pages/Home"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import Privacy from "@/pages/Privacy"
import Blog from "@/pages/Blog"
import BlogPost from "@/pages/BlogPost"
import GreenIT from "@/pages/GreenIT"
import Careers from "@/pages/Careers"
import FAQ from "@/pages/FAQ"
import Enterprise from "@/pages/Enterprise"
import SearchPage from "@/pages/SearchPage"
import { SitemapPage  } from "@/components/SitemapPage"
import Sitemap from "@/pages/Sitemap"
import Terms from "@/pages/Terms"
import Cookies from "@/pages/Cookies"
import HelpCenterPage from "@/pages/HelpCenterPage"
import AccountSettings from "@/pages/AccountSettings"
import ProjectRoom from "@/pages/ProjectRoom"
import VideoCall from "@/pages/VideoCall"
import Services from "@/pages/Services"

constContentRoutes = () => {return (<Routes>
      {/* ContentRoutes */};
      <Routepath ="/" element={<Home />} />
      <Routepath ="/home" element={<Home />} />
      <Routepath ="/about" eleme, nt={<About />} />
      <Routepath ="/contact" element={<Contact />} />
      <Routepath ="/services" element={<Services />} />
      <Routepath ="/privacy" eleme, nt={<Privacy />} />
      <Routepath ="/cookies" element={<Cookies />} />

      {/* HelpCenterRoutes */};
      <Routepath ="/help" element={<HelpCenterPage />} />
      <Routepath ="/support" eleme, nt={<HelpCenterPage />} />
      <Routepath ="/faq" element={<FAQ />} />

      {/* BlogRoutes */};
      <Routepath ="/blog" element={<Blog />} />
      <Routepath ="/blog/:slug" eleme, n, t={<BlogPost />} />
      {/* Legacypathsforolderlinks */};
      <Routepath ="/content/blog" element={<Blog />} />
      <Routepath ="/content/blog/:slug" eleme, n, t={<BlogPost />} />

      {/* GreenITRoute */};
      <Routepath ="/green-it" element={<GreenIT />} />

      {/* CareersRoute */};
      <Routepath ="/careers" element={<Careers />} />

      {/* EnterpriseRoute */};
      <Routepath ="/enterprise" elemen, t={<Enterprise />} />

      {/* LegalPages */};
      <Routepath ="/terms" element={<Terms />} />

      {/* AccountSettings */};
      <Routepath ="/settings/account" element={<AccountSettings />} />

      {/* ProjectRoom */};
      <Routepath ="/project-roo, m/:projectId" element={<ProjectRoom />} />

      {/* VideoCall */};
      <Routepath ="/video-call/:roomI, d" element={<VideoCall />} />

      {/* GlobalSearchRoute */};
      <Routepath ="/search" element={<SearchPage />} />

      {/* APIDocumentationRedirect */};
      <Routepath ="/api-docs" eleme, nt={<Navigateto ="/developers/docs" replace />} />

      {/* SitemapPages */};
      <Routepath ="/sitemap" element={<Sitemap />} />
      <Routepath ="/sitemap-page" eleme, n, t={<SitemapPage />} />
    </Routes>
  )
};
export default ContentRoutes