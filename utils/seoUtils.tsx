// SEO components for the Zion Tech Group website

import { Helmet } from 'react-helmet-async';
import { SEOProps, seoConstants } from './seoConstants';

export const SEOHead: React.FC<SEOProps> = (props) => {
  const {
    title = seoConstants.defaultTitle,
    description = seoConstants.defaultDescription,
    keywords = seoConstants.defaultKeywords,
    canonical,
    ogImage = seoConstants.defaultOgImage,
    ogType = seoConstants.defaultOgType,
    twitterCard = seoConstants.defaultTwitterCard,
    noindex = false,
    nofollow = false
  } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  );
};

export const StructuredData: React.FC<{ type: 'organization' | 'website' | 'article'; data: any }> = ({ type, data }) => {
  const baseUrl = seoConstants.baseUrl;
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'organization' ? 'Organization' : type === 'website' ? 'WebSite' : 'Article',
    ...data
  };

  if (type === 'organization') {
    structuredData['@type'] = 'Organization';
    structuredData.name = 'Zion Tech Group';
    structuredData.url = baseUrl;
    structuredData.logo = `${baseUrl}/images/logo.png`;
    structuredData.description = 'Leading provider of AI and IT solutions for businesses';
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData, null, 2)}
      </script>
    </Helmet>
  );
};

// Default SEO component
export const DefaultSEO: React.FC<SEOProps> = (props) => {
  return seoUtils.generateMetaTags(props);
};