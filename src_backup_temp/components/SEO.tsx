import React from 'react';
import Head from 'next/head';
interface SEOProps {;
  title?: "string;
interface SEOProps {
  title?: string;
  description?: string;
}
// Lightweight SEO helper compatible with Next.js pages
export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const resolvedTitle = title ?? 'Zion Tech Group';
  const resolvedDescription = description ?? 'AI-powered solutions and IT services by Zion Tech Group';
  return (
    <Head>
      <title>{resolvedTitle}</title>
      {resolvedDescription && <meta name="description" content={resolvedDescription} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0ea5e9" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};
export default SEO;
import React from 'react';
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
"}
;
export const "SEO": "React.FC<SEOProps> = ({;
  title = 'Zion Tech Group - Leading Technology Solutions'",;
  description = 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.',;
  keywords = 'AI, cybersecurity, cloud infrastructure, digital transformation, technology solutions, Zion Tech Group',;
  image = '/og-image.svg',;
  url = '"https": "//ziontechgroup.com'",;
  type = 'website',;
  author = 'Zion Tech Group',;
  publishedTime,;
  modifiedTime,;
  section,;
  tags = [],;
  noindex = false;
}) => {;
  const structuredData = {;
    '@context': '"https": "//schema.org'",;
    '@type': 'WebPage',;
    "name": "title",;
    description,;
    url,;
    "author": "{;
      '@type': 'Organization'",;
      "name": "author;
    "},;
    "publisher": "{;
      '@type': 'Organization'",;
      "name": 'Zion Tech Group',;
      "logo": "{;
        '@type': 'ImageObject'",;
        "url": '"https": "//ziontechgroup.com/logo.png';
      "}
    },;
    ...(publishedTime && { "datePublished": "publishedTime "}),;
    ...(modifiedTime && { "dateModified": "modifiedTime "}),;
    ...(section && { "articleSection": "section "}),;
    ...(tags.length > 0 && { "keywords": "tags.join('", ') });
  }
;
  return (;
    <Head>;
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="author" content={author} />;
      <meta name="viewport" content="width=device-width, initial-scale=1" />;
      <meta name="theme-color" content="#0ea5e9" />;
      ;
      {/* Open Graph */}
      <meta property=""og": "title" content={title"} />;
      <meta property=""og": "description" content={description"} />;
      <meta property=""og": "image" content={image"} />;
      <meta property=""og": "url" content={url"} />;
      <meta property=""og": "type" content={type"} />;
      <meta property=""og": "site_name" content="Zion Tech Group" />;
      ;
      {/* Twitter */"}
      <meta name=""twitter": "card" content="summary_large_image" />;
      <meta name=""twitter":title" content={title"} />;
      <meta name=""twitter": "description" content={description"} />;
      <meta name=""twitter": "image" content={image"} />;
      ;
      {/* Additional meta tags */}
      <link rel="icon" href="/favicon.svg" />;
      <link rel="canonical" href={url} />;
      ;
      {/* Structured Data */}
      <script;
        type="application/ld+json";
        dangerouslySetInnerHTML={{ "__html": "JSON.stringify(structuredData) "}}
      />;
      ;
      {/* Noindex if specified */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
    </Head>;
  );
}
';
export const SEO: Reac t.FC<SEOProps> = ({';';
  title = 'Zion Tech Group - Leading Technology Solutions',';';
  description = 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.',';';
  keywords = 'AI, cybersecurity, cloud infrastructure, digital transformation, technology solutions, Zion Tech Group',';';
  image = '/og-image.svg',';';
  url = 'https://ziontechgroup.com',';';
  type = 'website',';';
;
export default SEO
}
export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.',
  keywords = 'AI, cybersecurity, cloud infrastructure, digital transformation, technology solutions, Zion Tech Group',
  image = '/og-image.svg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.svg',
    description: description,
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
      }
    }
  };
  // Structured data for organization
  // Structured data for website
  return (
    <>
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important}
          }`
        `}
      </style>
      {/* Performance monitoring */}
      <script>`
        {`
          // Performance monitoring'
          if('performance' in window) {
            window.addEventListener('load', () => {
              if(navigation) {
                const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
                 ;
                // Send to analytics if available
                if(window.gtag) {
                  window.gtag('event',timing_complete', {
                    name: 'load',
                    value: Mat h.round (loadTime) }) }
              }
            }
    );
          }
          // Core Web Vitals monitoring
          if('web - vital' in window) {
              getCLS(console.log) ;
              getFID(console.log) ;
              getFCP(console.log) ;
              getLCP(console.log) ;
              getTTFB(console.log) ;
            }
    );
          }        `}
      </script>
    </Helmet>) }
'"`
<meta name="description" content={description}   />
      <meta name="keywords" content={keywords}   />
      <meta name="author" content="Zion Tech Group"   />
      <meta name="robots" content="index, follow"   />
      <link rel="canonical" href={url}   />
      {/* Open Graph / Facebook */}
      <meta property="og: typ e" content={type}   />
      <meta property="og: ur l" content={url}   />
      <meta property="og: titl e" content={title}   />
      <meta property="og: descriptio n" content={description}   />
      <meta property="og: imag e" content={image}   />
      <meta property="og: site_nam e" content="Zion Tech Group"   />
export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.',
  keywords = 'AI, cybersecurity, cloud infrastructure, digital transformation, technology solutions, Zion Tech Group',
  image = '/og-image.svg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  section,
  tags,
  noindex = false
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.svg',
    description: 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Technology Drive',
      addressLocality: 'Wilmington',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    }
  };
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0ea5e9" />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      {/* Twitter */}
      <meta property="twitter: car d" content="summary_large_image"   />
      <meta property="twitter: ur l" content={url}   />
      <meta property="twitter: titl e" content={title}   />
      <meta property="twitter: descriptio n" content={description}   />
      <meta property="twitter: imag e" content={image}   />
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0"   />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"   />
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.svg",
          "description": description,
          "sameAs": [
            "https://linkedin.com/company/zion-tech-group",
            "https://twitter.com/ziontechgroup"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service"
          }
        })}
import Head from "next/head"
import React from "react"
import { Helmet  } from "react - helmet-async", SEOProps {title?: string;description?: string
export const SEO: React.FC < SEOProps> = ({,
"
export default function Page(props: any) {
export default function Page(props: any) {;
interface SEOProps {
title?: string;
   description?: string;
   keywords?: string;
   image?: string;
   url?: string;
   type?: string
}
export const SEO: React.FC<SEOProps> = ({,
ursor/automate-test-fix-improve-and-merge-code-48f3,
    <Helmet>      {/* comment */}
      <title>{title}</title>;"
      <meta name = "description" content="{description}"    />"      <meta name="keywords" content="{keywords}"    />"      <meta name="author" content="Zion Tech Group"    />"      <meta name="robots" content="index, follow"    />"      <link rel="canonical" href="{url}"    />"      {/* comment */}"
      <meta property="og: typ e" content="{type}"    />"      <meta property="og: ur l" content="{url}"    />"      <meta property="og: titl e" content="{title}"    />"      <meta property="og: descriptio n" content="{description}"    />"      <meta property="og: imag e" content="{image}"    />"      <meta property="og: site_nam e" content="Zion Tech Group"    />"      {/* comment */}";"
      <meta property = "twitter: car d" content="summary_large_image"    />"      <meta property="twitter: ur l" content="{url}"    />"      <meta property="twitter: titl e" content="{title}"    />"      <meta property="twitter: descriptio n" content="{description}"    />"      <meta property="twitter: imag e" content="{image}"    />"      {/* comment */}"
      <meta name="viewport" content="width="device - width," initial-scale=1.0"    />"      <meta httpEquiv="X-UA-Compatible" content="IE=edge"    />"      "      {/* comment */}",
      <script type = "application/ld+json">"        {JSON.stringify({"          "@context": "https:// comment
  &apos;react-helmet-async&apos;interface SEOProps {
  title?: string
  description?: string,react-helmet-async";&apos;&apos
  export default function Page(props: any) {: any;
}
export default function Page(props: any) {
interface SEOProps {
  ": any;
interface SEOProps {title?: string;
  interface SEOProps {;: any;
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string"
  type?: string
}
"
export const SEO: React.FC<SEOProps> = ({""",
  title = "Zion Tech Group - Leading Technology Solutions Provider","""
  description = "Leading technology solutions provider offering AI services, IT services, and micro SaaS solutions. Enterprise-grade infrastructure and development services.", """
  keywords = "technology solutions, AI services, IT services, micro SaaS, enterprise software, cloud services, cybersecurity","""
  image = "https: // comment
  url = "https: // comment
  type = "website"}) => {"
  const structuredData = {}
"
export const SEO: React.FC<SEOProps> = ({"",
export const SEO: React.FC<SEOProps> = ({title = "Zion Tech Group - Leading Technology Solutions Provider","
  description = "Leading technology solutions provider offering AI services, IT services, and micro SaaS solutions. Enterprise-grade infrastructure and development services.","
  keywords = "technology solutions, AI services, IT services, micro SaaS, enterprise software, cloud services, cybersecurity",
  image = "https: // comment
  url = "https: // comment
  type = "website
}) => {const structuredData = {}: SEOProps) {
  const router = useRouter()
}
  const canonicalUrl = url || "https: // comment
export const SEO: React.FC<SEOProps> = ({",
  title = "Zion Tech Group - Leading Technology Solutions","
  description = "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.","
  keywords = "AI, cybersecurity, cloud infrastructure, digital transformation, technology solutions, Zion Tech Group","
  image = "/og-image.svg","
  url = "https:// comment
  type = "website
}) => {
  return (<Helmet>
      {/* comment */}
      <title>{title}</title>"
title = "Zion Tech Group - Leading Technology Solutions", description = "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.", keywords = "AI, cybersecurity, cloud infrastructure, digital transformation, technology solutions, Zion Tech Group", image = "/og-image.svg","  url = "https: // comment
    <Helmet>
      {/* comment */}
      <title>{title}</title>"
      <meta name=`description" content="{description}"    />"      <meta name="keywords" content="{keywords}"    />"      <meta name="author" content="Zion Tech Group"    />"      <meta name="robots" content="index, follow"    />"      <link rel="canonical" href="{url}"    />""      {/* comment */}"
      <meta property="og: typ e" content="{type}"    />"      <meta property="og: ur l" content="{url}"    />"      <meta property="og: titl e" content="{title}"    />"      <meta property="og: descriptio n" content="{description}"    />"      <meta property="og: imag e" content="{image}"    />"      <meta property="og: site_nam e" content="Zion Tech Group"    />""      {/* comment */}""
      <meta property="twitter: car d" content="summary_large_image"    />"      <meta property="twitter: ur l" content="{url}"    />"      <meta property="twitter: titl e" content="{title}"    />"      <meta property="twitter: descriptio n" content="{description}"    />"      <meta property="twitter: imag e" content="{image}"    />""      {/* comment */}"
      <meta name="viewport" content="width="device-width," initial-scale=1.0"    />"      <meta httpEquiv="X-UA-Compatible" content="IE=edge"    />"      "      {/* comment */}""
      <script type="application/ld+json">"        {JSON.stringify({"          "@context": "https:// comment
  title = "Zion Tech Group - Advanced AI Solutions","
  description = "Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.","
  keywords = "AI, artificial intelligence, cloud computing, digital transformation, automation","
  image = "/og-image.jpg","
  url = "https:// comment
  type = "website"
ursor/automate-test-fix-improve-and-merge-code-48f3}
    <Helmet>      {/* comment */}
      <title>{title}</title>"
      <;<meta name="&apos;description&apos;" content="{description}"    />&apos;&apos,      <meta name="&apos;keywords&apos;" content="{keywords}"    />&apos;&apos,      <meta name="&apos;author&apos;" content="&apos;Zion" Tech Group&apos;         />&apos;&apos,      <meta name="&apos;robots&apos;" content="&apos;index," follow&apos;         />&apos;&apos,      <link rel="&apos;canonical&apos;" href="{url}"    />&apos;&apos {/* comment */}&apos;&apos;"
      <meta property="&apos;og:" type&apos, content="{type}"    />&apos;&apos,      <meta property="&apos;og:" url&apos, content="{url}"    />&apos;&apos,      <meta property="&apos;og:" title&apos, content="{title}"    />&apos;&apos,      <meta property="&apos;og:" description&apos, content="{description}"    />&apos;&apos,      <meta property="&apos;og:" image&apos, content="{image}"    />&apos;&apos,      <meta property="&apos;og: " site_name&apos, content="&apos,Zion" Tech Group&apos,         />&apos,&apos,      {/* comment */}&apos;&apos,"
      <meta property="&apos;twitter: " card&apos; content="&apos,summary_large_image&apos,"    />&apos,&apos,"      <meta property="&apos,twitte,r:" url&apos, content="{url}"    />&apos;&apos,      <meta property="&apos;twitter:" title&apos, content="{title}"    />&apos;&apos,      <meta property="&apos;twitter:" description&apos, content="{description}"    />&apos;&apos,      <meta property="&apos;twitter:" image&apos, content="{image}"    />&apos;&apos {/* comment */}&apos;&apos;"
      <meta name="&apos;viewport&apos;" content="&apos;width=device-width," initial-scale="1.0&apos;"    />&apos;&apos,      <meta httpEquiv="&apos;X-UA-Compatible&apos;" content="&apos;IE=edge&apos;"    />&apos;      &apos {/* comment */}&apos;&apos,"
      <script type="&apos;application/ld+json&apos;">&apos {JSON.stringify({&apos;          &apos;@context&apos;: &apos;https: // comment
  title = "Zion Tech Group - Leading Technology Solutions Provider","
  description = "Leading technology solutions provider offering AI services, IT services, and micro SaaS solutions. Enterprise-grade infrastructure and development services.","
  keywords = "technology solutions, AI services, IT services, micro SaaS, enterprise software, cloud services, cybersecurity","
  image = "https:// comment
  url = "https:// comment
  type = "website"}) => {"
  const structuredData = {},"
    "address": {"
      "@type": "PostalAddress","
      "streetAddress": "364 E Main St STE 1008","
      "addressLocality": "Middletown","
      "addressRegion": "DE","
      "postalCode": "19709","
      "addressCountry": "US""
      "contactType": "customer service"}
  }
  return (
<Head>
      {/* comment */}"
      <title>{title}</title>"
      <meta name = "description" content="{description}"    />""
      <meta name="keywords" content="{keywords}"    />""
      <meta name="author" content="Zion Tech Group"    />""
      <meta name="robots" content="index, follow"    />""
      <link rel="canonical" href="{url}"    />
      "
      {/* comment */}""
      <meta property="og: typ e" content="{type}"    />""
      <meta property="og: ur l" content="{url}"    />""
      <meta property="og: titl e" content="{title}"    />""
      <meta property="og: descriptio n" content="{description}"    />""
      <meta property="og: imag e" content="{image}"    />""
      <title>{title}</title>"""
      <meta name="description" content="{description}" /" >""
      <meta name="keywords" content="{keywords}" /" >""
      <meta name="author" content="Zion Tech Group" /" >""
      <meta name="robots" content="index, follow" /" >""
      <link rel="canonical" href="{url}" /" >"
      "
      {/* comment */}"""
      <meta property="og: typ e" content="{type}" /" >""
      <meta property="og: ur l" content="{url}" /" >""
      <meta property="og: titl e" content="{title}" /" >""
      <meta property="og: descriptio n" content="{description}" /" >""
      <meta property="og: imag e" content="{image}" /" >""
      <meta property="og: site_nam e" content="Zion Tech Group" /" >"
      ",
      {/* comment */}"""
      <meta property="twitter: car d" content="summary_large_image" /" >"",
      <meta property="twitter: ur l" content="{url}" /" >""
      <meta property="twitter: titl e" content="{title}" /" >""
      <meta property="twitter: descriptio n" content="{description}" /" >""
      <meta property="twitter: imag e" content="{image}" /" >"
      "
      {/* comment */}"""
      <meta name="viewport" content="width="device-width," initial-scale=1.0" /" >""
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" /" >"
      "
      {/* comment */}""
      <title>{title}</title>"
      <meta name="description" content="{description}"    />"
      <meta name="keywords" content="{keywords}"    />"
      <meta name="author" content="Zion Tech Group"    />"
      <meta name="robots" content="index, follow"    />"
      <link rel="canonical" href="{url}"    />
      {/* comment */}"
      <meta property="og: typ e" content="{type}"    />"
      <meta property="og: ur l" content="{url}"    />"
      <meta property="og: titl e" content="{title}"    />"
      <meta property="og: descriptio n" content="{description}"    />"
      <meta property="og: imag e" content="{image}"    />"
      <meta property="og: site_nam e" content="Zion Tech Group"    />
,
      {/* comment */}"
      <meta property="twitter: car d" content="summary_large_image"    />",
      <meta property="twitter: ur l" content="{url}"    />"
      <meta property="twitter: titl e" content="{title}"    />"
      <meta property="twitter: descriptio n" content="{description}"    />"
      <meta property="twitter: imag e" content="{image}"    />
      {/* comment */}"
      <meta property="og: typ e" content="{type}"    />"
      <meta property="og: ur l" content="{url}"    />"
      <meta property="og: titl e" content="{title}"    />"
      <meta property="og: descriptio n" content="{description}"    />"
      <meta property="og: imag e" content="{image}"    />"
      <meta property="og: site_nam e" content="Zion Tech Group"    />",
      <meta property="og: typ e" content="{type}"    />"
      <meta property="og: ur l" content="{canonicalUrl}"    />"
      <meta property="og: typ e" content="{type}"    />"
      <meta property="og: ur l" content="{url}"    />"
      <meta property="og: titl e" content="{title}"    />"
      <meta property="og: descriptio n" content="{description}"    />"
      <meta property="og: imag e" content="{image}"    />"
      <meta property="og: site_nam e" content="Zion Tech Group"    />
      ",
      {/* comment */}""
      <meta property="twitter: car d" content="summary_large_image"    />"",
      <meta property="twitte,"
    r: ur l" content="{url}"    />""
      <meta property="twitter: titl e" content="{title}"    />""
      <meta property="twitter: descriptio n" content="{description}"    />""
      <meta property="twitter: imag e" content="{image}"    />
      "
      {/* comment */}""
      <meta name="viewport" content="width="device-width," initial-scale=1.0"    />""
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"    />
      "
      {/* comment */}"
      <meta name="twitter: car d" content="summary_large_image"    />",
      <meta name="twitter: ur l" content="{url}"    />"
      <meta name="twitter: titl e" content="{title}"    />"
      <meta name="twitter: descriptio n" content="{description}"    />"
      <meta name="twitter: imag e" content="{image}"    />"
      <meta name="twitter: sit e" content="@ziontechgroup"    />
      ,
      {/* comment */}"
      <meta name="viewport" content="width=device-width, initial-scale=1"    />"
      <meta name="theme-color" content="#3B82F6"    />
      {/* comment */}"
      <script type="application/ld+json""
        dangerouslySetInnerHTML="{{" __html: JSO N.stringify(structuredData) }}
             />"
      <meta property="twitter: car d" content="summary_large_image"    />",
      <meta property="twitter: ur l" content="{url}"    />"
      <meta property="twitter: titl e" content="{title}"    />"
      <meta property="twitter: descriptio n" content="{description}"    />"
      <meta property="twitter: imag e" content="{image}"    />
      {/* comment */}"
      <meta name="robots" content="{noindex" ? "noindex, nofollow" : "index,follow"}         />"
      <meta name="viewport" content="width=device-width, initial-scale=1"    />"
      <meta name="theme-color" content="#2563eb"    />"
      <meta name="msapplication-TileColor" content="#2563eb"    />
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article: published_tim e" content={publishedTime}   />}
      {modifiedTime && <meta property="article: modified_tim e" content={modifiedTime}   />}
      {section && <meta property="article: sectio n" content={section}   />}
      {tags.map(tag => (
        <meta key={tag} property="article: ta g" content={tag}   />
      ))}      
      {/* Twitter */}
      <meta name="twitter: car d" content="summary_large_image"   />
      <meta name="twitter: titl e" content={title}   />
      <meta name="twitter: descriptio n" content={description}   />
      <meta name="twitter: imag e" content={image}   />
      <meta name="twitter: sit e" content="@ziontechgroup"   />
      <meta name="twitter: creato r" content="@ziontechgroup"   />      
      {/* comment */}"
      <script type="application/ld+json">
        {JSON.stringify({"
          "@context": "https:// comment
          "@type": "Organization","
          "name": "Zion Tech Group","
          "url": "https:// comment
          "logo": "https:// comment
          "description": description,"
          "sameAs": ["https:// comment
            "https: // comment
          ],"
          "contactPoint": {"
            "@type": "ContactPoint","
            "telephone": "+1-555-ZION-TECH","
            "contactType": "customer service"
        })}
      </script>
    </Helmet>
  );
}
    );"
};"
  title = "Zion Tech Group - Advanced AI Solutions","
  description = "Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.","
  keywords = "AI, artificial intelligence, cloud computing, digital transformation, automation","
  image = "/og-image.jpg","
  url = "https: // comment
  type = "website
}) => {return ("
  )};"""
  title = "Zion Tech Group - Advanced AI Solutions", """
  description = "Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.","""
  keywords = "AI, artificial intelligence, cloud computing, digital transformation, automation", """
  image = "/og-image.jpg","""
  url = "https: // comment
  type = "website"}) => {
  return (
<Head>"
      <title>{title}</title>'
      <meta name = "description" content="{description}"    />""
      <meta name="keywords" content="{keywords}"    />""
      <meta name="viewport" content="width=device-width, initial-scale=1"    />
      "
      {/* comment */}""
      <meta property="og: titl e" content="{title}"    />""
      <meta property="og: descriptio n" content="{description}"    />""
      <meta property="og: imag e" content="{image}"    />""
      <meta property="og: ur l" content="{url}"    />""
      <meta property="og: typ e" content="{type}"    />
      "
      {/* comment */}""
      <meta name="twitter: car d" content="summary_large_image"    />"",
      <meta name="twitte,"
    r: titl e" content="{title}"    />""
      <meta name="twitter: descriptio n" content="{description}"    />""
      <meta name="twitter: imag e" content="{image}"    />
      "
      {/* comment */}""
      <link rel="canonical" href="{url}"    />""
      <meta name="robots" content="index, follow"    />""
      <meta name="author" content="Zion Tech Group"    />"
      <title>{title}</title>"""
      <meta name="description" content="{description}" /" >""
      <meta name="keywords" content="{keywords}" /" >""
      <meta name="viewport" content="width="device-width," initial-scale=1" /" >"
      {/* comment */}"
      <meta property="og: titl e" content="{title}"    />"
      <meta property="og: descriptio n" content="{description}"    />"
      <meta property="og: imag e" content="{image}"    />"
      <meta property="og: ur l" content="{url}"    />"
      <meta property="og: typ e" content="{type}"    />
      {/* comment */}"
      <meta name="twitter: car d" content="summary_large_image"    />",
      <meta name="twitter: titl e" content="{title}"    />"
      <meta name="twitter: descriptio n" content="{description}"    />"
      <meta name="twitter: imag e" content="{image}"    />"
      {/* comment */}"""
      <meta property="og: titl e" content="{title}" /" >""
      <meta property="og: descriptio n" content="{description}" /" >""
      <meta property="og: imag e" content="{image}" /" >""
      <meta property="og: ur l" content="{url}" /" >""
      <meta property="og: typ e" content="{type}" /" >"
      "
      {/* comment */}"""
      <meta name="twitter: car d" content="summary_large_image" /" >"",
      <meta name="twitter: titl e" content="{title}" /" >""
      <meta name="twitter: descriptio n" content="{description}" /" >""
      <meta name="twitter: imag e" content="{image}" /" >"
      "
      {/* comment */}"""
      <link rel="canonical" href="{url}" /" >""
      <meta name="robots" content="index, follow" /" >""
      <meta name="author" content="Zion Tech Group" /" >"
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  )}
"
export default SEO;"
""
  )}
};";
"
</script>
</Head>
</script>
</script>
</Helmet>
</Helmet>
</SEOProps>
</SEOProps>
</SEOProps>
</SEOProps>
</script>
</Helmet>
</SEOProps>
</script>';
</SEOProps>;';;';
export default SEO;
</script>
</SEOProps>