import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import SearchPage from "@/pages/SearchPage";
import { SitemapPage } from "@/components/SitemapPage";

const ContentRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/blog/:slug" element={<BlogPost />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/sitemap-page" element={<SitemapPage />} />
		</Routes>
	);
};

export default ContentRoutes;
