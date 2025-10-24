<<<<<<< HEAD
/**
 * Sitemap Generator
 * Generates sitemap and robots.txt for SEO optimization
 */;
export interface SitemapEntry {
;
  loc: string,lastmod: string,changefreq: string,priority: number,
}
}
;
export const generateSitemap = (): SitemapEntry[] => {;
  const baseUrl = 'https: //ziontechgroup.com';
  const currentDate = new Date().toISOString();
;
return [
    {;
lo,c: loc,lastmod: currentDate,changefreq: changefreq,priority: 1.0,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.8,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.9,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.9,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.9,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.9,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.9,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.8,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.9,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.8,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.7,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.8,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.8,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.3,}
    {;
loc: loc,lastmod: currentDate,changefreq: changefreq,priority: 0.3,}
  ]
}
;
export const generateRobotsTxt = (): string => {;
  return `User-agent: *;
Allow: /;
Sitemap: https://ziontechgroup.com/sitemap.xml
# Crawl-delay for better server performance;
Crawl-dela,y: 1
# Disallow admin and private areas,Disallow: /admin/;
Disallow: /api/;
Disallow: /_next/;
Disallo,w: /private/`,}
=======
'use client';
import React from 'react';

interface sitemapGeneratorProps {
  className?: string;
}

const sitemapGenerator: React.FC<sitemapGeneratorProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>sitemapGenerator</h2>
      <p>sitemapGenerator component for enhanced functionality.</p>
    </div>
  );
};

export default sitemapGenerator;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
