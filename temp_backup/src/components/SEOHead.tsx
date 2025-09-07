import React from 'react';
import { Helmet  } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;}
}
}

const SEOHead: React.FC<SEOHeadProps /> = ({ title = 'Zion Tech Group - Advanced IT & AI Solutions',description = 'Leading provider of cutting-edge IT services, AI solutions, and digital transformation services. Expert cybersecurity, cloud migration, and custom software development.',keywords = 'IT services, AI solutions, cybersecurity, cloud migration, software development, digital transformation, micro SaaS, mobile development',canonical,ogImage = '/og-image.jpg';}
   }) => {
}
}
const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;

const canonicalUrl  = canonical || window.location.href;

const defaultStructuredData = {"@context": "https://schema.org","@type": "Organization","name": "Zion Tech Group","url": "https://ziontechgroup.com","logo": "https://ziontechgroup.com/logo.png","description": description,"address": {"@type": "PostalAddress","addressCountry": "US";}"
    },"contactPoint": {"@type": "ContactPoint","telephone": "+1-555-ZION-TECH","contactType": "customer service";}"
    },"sameAs": [;"
      "https://linkedin.com/company/zion-tech-group","https://twitter.com/ziontechgroup"
];

  }return (<Helmet />;
      <title />{fullTitle}</title>;"
      <meta name="description" content={description} />;"
      <meta name="keywords" content={keywords} />;
      {/* Open Graph */}"
      <meta property="og: title" content={fullTitl}
} />;"
      <meta property="og: description" content={descriptio}
} />;"
      <meta property="og: image" content={ogImag}
} />;
      {/* Twitter */}"
      <meta name="twitter: card" content={twitterCar}
} />;"
      <meta name="twitter: title" content={fullTitl}
} />;"
      <meta name="twitter: description" content={descriptio}
} />;"
      <meta name="twitter: image" content={ogImag}
} />;
      {/* Additional SEO */}"
      <meta name="robots" content="index, follow" />;"
      <meta name="author" content="Zion Tech Group" />;"
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
      {/* Structured Data */}"
      <script type="application/ld+json" />;
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>;
    </Helmet>;
  )}

export default SEOHead;
 import { Helmet } from 'react - helmet - async'  interface SEOHeadProps {
  title?: string;
   description?: string;
   keywords?: string;
   image?: string;"
   url?: string;"";"
   type?: 'website' | 'article' | 'service';"";}
   structuredData?: object}
}

export function SEOHead ({ title = 'Zion Tech Group - Leading AI, Quantum Computing & Advanced Technology Solutions', description = 'Transform your business with cutting - edge AI, quantum computing, cybersecurity, and digital transformation solutions. Trusted by 1000 + companies worldwide.', keywords = 'AI solutions, quantum computing, cybersecurity, digital transformation, cloud services, DevOps, machine learning, space technology', image = '/images / zion - tech - group - og.jpg', url = 'https: ''';}
}
   title?: string;
   description?: string;
   keywords?: string;
   image?: string;
   url?: string;
   type?: 'website' | 'article' | 'service';
   structuredData?: object;
}

export function SEOHead ({ title = 'Zion Tech Group - Leading AI, Quantum Computing & Advanced Technology Solutions', description = 'Transform your business with cutting - edge AI, quantum computing, cybersecurity, and digital transformation solutions. Trusted by 1000 + companies worldwide.', keywords = 'AI solutions, quantum computing, cybersecurity, digital transformation, cloud services, DevOps, machine learning, space technology', image = '/images / zion - tech - group - og.jpg', url = 'https:''';}"