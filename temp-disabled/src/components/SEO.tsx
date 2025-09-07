
import React from 'react';''
import { Helmet } from 'react-helmet-async';'
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

const SEO: React.FC<SEOProps> = ({
</SEOProps>
    <Helmet>
</Helmet>
      <title>{title}</title>'
      <meta name="description" content={description} />"
</meta>"
      <meta name="keywords" content={keywords} />"
</meta>"
      <link rel="canonical" href={canonical} />"
</link>"
      <meta property="og:title" content={title} />"
</meta>"
      <meta property="og:description" content={description} />"
</meta>"
      <meta property="og:image" content={ogImage} />"
</meta>"
      <meta property="og:type" content={ogType} />"
</meta>"
      <meta property="og:url" content={canonical} />"
</meta>"
      <meta name="twitter:card" content={twitterCard} />"
</meta>"
      <meta name="twitter:title" content={title} />"
</meta>"
      <meta name="twitter:description" content={description} />"
</meta>"
      <meta name="twitter:image" content={ogImage} />"
</meta>"
      <meta name="robots" content="index,follow" />"
</meta>"
      <meta name="author" content="Zion Tech Group" />"
</meta>"
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />"
</meta>
    </Helmet>)"

