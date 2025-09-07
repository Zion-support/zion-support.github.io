:components-disabled/components/SEO.tsx
import React from 'react';
import Head from 'next/head';

import React from 'react';''
import { Helmet } from 'react-helmet-async';'
:temp-disabled/src/components/SEO.tsx
interface SEOProps {
  // TODO: Implement
}
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

:components-disabled/components/SEO.tsx
export default function SEO({
  title = "Zion Tech Group",""
  description = "Leading technology solutions provider","
  canonical,"
  ogImage = "/og-image.jpg",""
  ogType = "website",""
  twitterCard = "summary_large_image"")
}: SEOProps) {
  return (
    <Head>

      <title>{title}</title>"
const SEO: React.FC<SEOProps> = ({
</SEOProps>
    <Helmet>
</Helmet>
      <title>{title}</title>'
:temp-disabled/src/components/SEO.tsx
      <meta name="description" content={description} />"
</meta>"
      <meta name="keywords" content={keywords} />"
</meta>"
      <link rel="canonical" href={canonical} />"
</link>"
      <meta property="og:title" content={title} />"
      <meta property="og:description" content={description} />"
:components-disabled/components/SEO.tsx
      <meta property="og:type" content={ogType} />"
      <meta property="og:image" content={ogImage} />"
</meta>"
      <meta property="og:image" content={ogImage} />"
</meta>"
      <meta property="og:type" content={ogType} />"
</meta>"
      <meta property="og:url" content={canonical} />"
</meta>"
:temp-disabled/src/components/SEO.tsx
      <meta name="twitter:card" content={twitterCard} />"
      <meta name="twitter:title" content={title} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={ogImage} />"
</meta>"
      <meta name="robots" content="index,follow" />"
</meta>"
      <meta name="author" content="Zion Tech Group" />"
</meta>"
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />"
</meta>
:components-disabled/components/SEO.tsx
    )"
    </Helmet>)"

:temp-disabled/src/components/SEO.tsx
