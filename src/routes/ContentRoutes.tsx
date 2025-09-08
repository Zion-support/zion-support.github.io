import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Sitemap from "@/pages/Sitemap";

const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/sitemap" element={<Sitemap />} />
    </Routes>
  );
};

export default ContentRoutes;
