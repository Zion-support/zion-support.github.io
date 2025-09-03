<<<<<<< HEAD
import { Route, Routes, Navigate  } from 'react-router-dom'; import { SitemapPage } from '@/components/SitemapPage'; ; const ContentRoutes = () => {; return(; <Routes>; {}; <Route path="/" element={<Home />} />";"";" <Route path="/home" element={<Home />} />";"";" <Route path="/about" element={<About />} />";"";" <Route path="/contact" element={<Contact />} />";"";" <Route path="/services" element={<Services />} />";"";" <Route path="/privacy" element={<Privacy />} />";"";" <Route path="/cookies" element={<Cookies />} />;"";" {}";"";" <Route path="/help" element={<HelpCenterPage />} />";"";" <Route path="/support" element={<HelpCenterPage />} />";"";" <Route path="/faq" element={<FAQ />} />;"";" {}";"";" <Route path="/blog" element={<Blog />} />";"";" <Route path="/blog/:slug" element={<BlogPost />} />;"";" {}";"";" <Route path="/content/blog" element={<Blog />} />";"";" <Route path="/content/blog/:slug" element={<BlogPost />} />;"";" {}";"";" <Route path="/green-it" element={<GreenIT />} />;"";" {}";"";" <Route path="/careers" element={<Careers />} />;"";" {}";"";" <Route path="/enterprise" element={<Enterprise />} />;"";" {}";"";" <Route path="/terms" element={<Terms />} />;"";" {}";"";" <Route path="/settings/account" element={<AccountSettings />} />;"";" {}";"";" <Route path="/project-room/:projectId" element={<ProjectRoom />} />;"";" {}";"";" <Route path="/video-call/:roomId" element={<VideoCall />} />;"";" {}";"";" <Route path="/search" element={<SearchPage />} />;"";" {}";"";" <Route path="/api-docs" element={<Navigate to="/developers/docs" replace />} />;"";" {}";"";" <Route path="/sitemap" element={<Sitemap />} />";"";" <Route path="/sitemap-page" element={<SitemapPage />} />; </Routes>; );" };";" ;";" export default ContentRoutes;";"";"
=======
import React from "react"
  );
export default function Contentroutes() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contentroutes</h1>
        <p className="text-lg text-gray-600 mb-8">
          This is a placeholder component for contentroutes.
        </p>
      </div>
  )
}
>>>>>>> main
