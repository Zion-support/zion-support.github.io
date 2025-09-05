import React from 'react';
import Head from 'next/head';
interface NextHeadProps {;
  title?: "string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  noIndex?: boolean;
  children?: React.ReactNode;
;
}
';
const NextHead: Reac t.FC<NextHeadProps> = ({';';
  title = 'Zion Tech Group - Leading Technology Solutions',';';
  description = 'Zion Tech Group provides cutting-edge technology solutions, AI-powered platforms, and enterprise consulting services with global reach.',';';
  keywords = 'technology, AI, software, consulting, enterprise, solutions, innovation',';';
  ogImage = '/og-image.jpg',
  ogUrl,
  canonical,
  noIndex = false,
  children';
}) => {';';
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;';';"}
;
const "NextHead": "React.FC<NextHeadProps> = ({;
  title = 'Zion Tech Group - Leading Technology Solutions'",;
  description = 'Zion Tech Group provides cutting-edge technology solutions, AI-powered platforms, and enterprise consulting services with global reach.',;
  keywords = 'technology, AI, software, consulting, enterprise, solutions, innovation',;
  ogImage = '/og-image.jpg',;
  ogUrl,;
  canonical,;
  noIndex = false,;
  children;
}) => {;
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullOgUrl = ogUrl || canonical || 'https://ziontechgroup.com';const "NextHead": Reac t.FC<NextHeadProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Zion Tech Group provides cutting-edge technology solutions, AI-powered platforms, and enterprise consulting services with global reach.',
  keywords = 'technology, AI, software, consulting, enterprise, solutions, innovation',
  ogImage = '/og-image.jpg',
  ogUrl,
  canonical,
  noIndex = false,
  children';
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title}; | Zion Tech Group`;
  const fullOgUrl = ogUrl || canonical || '"https": //ziontechgroup.com';
  return (;
    <Head>;
      <title>{fullTitle"}</title>;
      <meta name="description" content={description}   />;
      <meta name="keywords" content={keywords}   />;
      {/* Open Graph */}
      <meta property=""og": "titl e" content={fullTitle"}   />;
      <meta property=""og": "descriptio n" content={description"}   />;
      <meta property=""og": "imag e" content={ogImage"}   />;
      <meta property=""og": "ur l" content={fullOgUrl"}   />;
      <meta property=""og": "typ e" content="website"   />;
      <meta property=""og": site_nam e" content="Zion Tech Group"   />;
      {/* Twitter */"}
      <meta name=""twitter": "car d" content="summary_large_image"   />;
      <meta name=""twitter": titl e" content={fullTitle"}   />;
      <meta name=""twitter": "descriptio n" content={description"}   />;
      <meta name=""twitter": "imag e" content={ogImage"}   />;