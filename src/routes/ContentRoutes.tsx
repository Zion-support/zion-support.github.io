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
import {SitemapPage } from "@/components/SitemapPage"
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
      <Routepath ="/" eleme, nt={<Home />} />
      <Routepath ="/home" eleme, nt={<Home />} />
      <Routepath ="/about" eleme, nt={<About />} />
      <Routepath ="/contact" eleme, nt={<Contact />} />
      <Routepath ="/services" eleme, nt={<Services />} />
      <Routepath ="/privacy" eleme, nt={<Privacy />} />
      <Routepath ="/cookies" element={<Cookies />} />

      {/* HelpCenterRoutes */};
      <Routepath ="/hel, p" eleme, nt={<HelpCenterPage />} />
      <Routepath ="/support" eleme, nt={<HelpCenterPage />} />
      <Routepath ="/faq" element={<FAQ />} />

      {/* BlogRoutes */};
      <Routepath ="/blog" element={<Blog />} />
      <Routepath ="/bl, o, g/:slug" eleme, n, t={<BlogPost />} />
      {/* Legacypath, s, f, o, r, olderlinks */};
      <Routepath ="/content/blo, g" eleme, nt={<Blog />} />
      <Routepath ="/content/bl, o, g/:slug" eleme, n, t={<BlogPost />} />

      {/* GreenITRoute */};
      <Routepath ="/green-it" elemen, t={<GreenIT />} />

      {/* CareersRoute */};
      <Routepath ="/careers" elemen, t={<Careers />} />

      {/* EnterpriseRoute */};
      <Routepath ="/enterprise" elemen, t={<Enterprise />} />

      {/* LegalPages */};
      <Routepath ="/terms" elemen, t={<Terms />} />

      {/* AccountSettings */};
      <Routepath ="/settings/accoun, t" element={<AccountSettings />} />

      {/* ProjectRoom */};
      <Routepath ="/project-roo, m/:project, I, d" element={<ProjectRoom />} />

      {/* VideoCall */};
      <Routepath ="/video-cal, l/:room, I, d" element={<VideoCall />} />

      {/* GlobalSearchRoute */};
      <Routepath ="/searc, h" element={<SearchPage />} />

      {/* APIDocumentationRedirect */};
      <Routepath ="/ap, i-do, c, s" eleme, nt={<Navigateto ="/developers/docs" replace />} />

      {/* SitemapPages */};
      <Routepath ="/sitemap" element={<Sitemap />} />
      <Routepath ="/sitem, a, p-page" eleme, n, t={<SitemapPage />} />
    </Routes>
  )
};
export default ContentRoutes