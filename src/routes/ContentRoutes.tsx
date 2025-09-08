<<<<<<< HEAD
=======
import React from 'react';
import { Route } from 'react-router-dom';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7



import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import GreenIT from "@/pages/GreenIT";
import Careers from "@/pages/Careers";
import SearchPage from "@/pages/SearchPage";
import { SitemapPage } from "@/components/SitemapPage";
import HelpCenterPage from "@/pages/HelpCenterPage";
import AccountSettings from "@/pages/AccountSettings";
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";

const ContentRoutes = () => {
  return (
    <Routes>
      {/* Content Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      {/* Help Center Routes */}
      <Route path="/help" element={<HelpCenterPage />} />
      <Route path="/support" element={<HelpCenterPage />} />
      
      {/* Blog Routes */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      
      {/* Green IT Route */}
      <Route path="/green-it" element={<GreenIT />} />
      
      {/* Careers Route */}
      <Route path="/careers" element={<Careers />} />


      {/* Global Search Route */}
      <Route path="/search" element={<SearchPage />} />
      
      {/* Sitemap Pages */}
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/sitemap-page" element={<SitemapPage />} />
    </Routes>
>>>>>>> origin/cursor/website-audit-and-enhancement-3805
  );
<<<<<<< HEAD
};

export default ContentRoutes;
=======
}
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
