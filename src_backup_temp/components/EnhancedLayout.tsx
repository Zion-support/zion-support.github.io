"children": "ReactNod e;
  title?: string;
  description?: string;
  keywords?: string",;
  ogImage?: "string",;
  canonical?: "string",,;
  noindex?: "boolean",;
  showPerformanceMetrics?: "boolean",;
  showSEOAnalysis?: "boolean"}
;
export const "EnhancedLayout": "React.FC<EnhancedLayoutProps> = ({ children",";
  title = "Zion Tech Group - Leading Technology Solutions Provider",";
  description = "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.",";
  keywords = "AI development, cloud architecture, digital transformation, technology solutions, machine learning, software development",";
  ogImage = ""https": "// comment;
  canonical",;
  noindex = false,;
  showPerformanceMetrics = false,;
  showSEOAnalysis = false}) => {;
  const fullTitle = title.includes("Zion Tech Group") ? title : "${title} | Zion Tech Group";
  const canonicalUrl = canonical || (typeof window !== "undefined" ? window.location.href : "");
  keywords?: string,;
  ogImage?: string,;
  canonical?: string,,;
  noindex?: boolean,;
  showPerformanceMetrics?: boolean,;
  showSEOAnalysis?: boolean}
export const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({ children,"
  title = "Zion Tech Group - Leading Technology Solutions Provider","
  description = "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.","
  keywords = "AI development, cloud architecture, digital transformation, technology solutions, machine learning, software development","
  ogImage = "https:// comment
  canonical,
  noindex = false,
  showPerformanceMetrics = false,
  showSEOAnalysis = false}) => {
  const fullTitle = title.includes("Zion Tech Group") ? title : "${title} | Zion Tech Group"
  const canonicalUrl = canonical || (typeof window !== "undefined" ? window.location.href : "")
}
  return ("
    <PerformanceOptimizer enabled = "{true}" "
      showMetrics="{showPerformanceMetrics}""
      optimizeImages="{true}""
      lazyLoadThreshold="{0.1}"
    >"
      <SEOOptimizer autoAnalyze="{true}""
        showDetails="{showSEOAnalysis}">
      >
<Head>
          {/* comment */}
          <title>{fullTitle}</title>"
          <meta name="description" content="{description}"    />
          <meta name="keywords" content="{keywords}"    />"
          <meta name="viewport" content="width=device-width, initial-scale=1"    />"
          <meta name="robots" content="{noindex" ? "noindex,nofollow" : "index,follow"}         />
          {/* comment */}"
          {canonicalUrl && <link rel="canonical" href="{canonicalUrl}"    />}
;
          {/* comment */}";
          <meta property=""og": "titl e" content="{fullTitle"}"    />";
          <meta property=""og": "descriptio n" content="{description"}"    />";
          <meta property=""og": "imag e" content="{ogImage"}"    />";
          <meta property=""og": "ur l" content="{canonicalUrl"}"    />";
          <meta property=""og": "typ e" content="website"    />";
          <meta property=""og": site_nam e" content="Zion Tech Group"    />";
          <meta property=""og": local e" content="en_US"    />;
          ",;
          {/* comment */}";
          <meta name=""twitter": "car d" content="summary_large_image"    />"",;
          <meta name=""twitter": "titl e" content="{fullTitle"}"    />";
          <meta name=""twitter": "descriptio n" content="{description"}"    />";
          <meta name=""twitter": "imag e" content="{ogImage"}"    />";
          <meta name=""twitter": "sit e" content="@ziontechgroup"    />";
          <meta name=""twitter": creato r" content="@ziontechgroup"    />;
          ",;
          {/* comment */}";
          <meta name="author" content="Zion Tech Group"    />";
          <meta name="publisher" content="Zion Tech Group"    />";
          <meta name="copyright" content="Zion Tech Group"    />";
          <meta name="language" content="en"    />";
          <meta name="revisit-after" content="7 days"    />";
          <meta name="rating" content="general"    />;
          {/* comment */}";
          <meta name="geo.region" content="US-DE"    />";
          <meta name="geo.placename" content="Middletown"    />";
          <meta name="geo.position" content="39.4496;-75.7163"    />";
          <meta name = "ICBM" content="39.4496, -75.7163"    />;
          {/* comment */}";
          <meta name="contact" content="kleber@ziontechgroup.com"    />";
          <meta name="phone" content="+1-302-464-0950"    />";
          <meta name="address" content="364 E Main St STE 1008, Middletown, DE 19709"    />;
          {/* comment */}";
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"    />";
          <meta name="format-detection" content="telephone=no"    />";
          <meta name="theme-color" content="#0ea5e9"    />";
          <meta name="msapplication-TileColor" content="#0ea5e9"    />";
          <meta name="apple-mobile-web-app-capable" content="yes"    />";
          <meta name="apple-mobile-web-app-status-bar-style" content="default"    />";
          <meta name="apple-mobile-web-app-title" content="Zion Tech Group"    />;
          {/* comment */}";
          <link rel="preconnect" href=""https": "// comment;
          <link rel="preconnect" href=""https":// comment;
          ",;
          {/* comment */}";
          <link rel="dns-prefetch" href="// comment;
          {/* comment */}";
          <link rel="preload" ";
            href="/fonts/inter-var.woff2" ";
            as="font" ";
            type="font/woff2" ";
            crossOrigin="anonymous"    />";
          <link rel="preload" ";
            href="/images/hero-bg.jpg" ";
            as="image"    />;
          {/* comment */}";
          <link rel="icon" href="/favicon.ico"    />";
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"    />";
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"    />";
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"    />";
          <link rel="manifest" href="/site.webmanifest"    />;
          {/* comment */}";
          <script type="application/ld+json"";
            dangerouslySetInnerHTML="{{";
              "__html": "JSO N.stringify({"",;
                "@context": ""https": "// comment;
                "@type": "Organization"",";
                "name": "Zion Tech Group",";
                "url": ""https": "// comment;
                "logo": ""https":// comment;
                "description": description",";
                "address": "{";
                  "@type": "PostalAddress"",";
                  "streetAddress": "364 E Main St STE 1008",";
                  "addressLocality": "Middletown",";
                  "addressRegion": "DE",";
                  "postalCode": "19709",";
                  "addressCountry": "US";
},";
                "contactPoint": "{";
                  "@type": "ContactPoint"",";
                  "telephone": "+1-302-464-0950",";
                  "contactType": "customer service",";
                  "email": "kleber@ziontechgroup.com";
},";
                "sameAs": "[";
                  ""https":// comment;
                  ""https": // comment;
                ]",";
                "service": "[;
                  {";
                    "@type": "Service"",";
                    "name": "AI Development",";
                    "description": "Custom AI solutions and machine learning models";
},;
                  {";
                    "@type": "Service",";
                    "name": "Cloud Architecture",";
                    "description": "Scalable cloud solutions and infrastructure design";
}>;
                  {";
                    "@type": "Service",";
                    "name": "Digital Transformation",";
                    "description": "End-to-end digital transformation services";
                ];
})>;
          {/* comment */}"
          <meta property="og: titl e" content="{fullTitle}"    />"
          <meta property="og: descriptio n" content="{description}"    />"
          <meta property="og: imag e" content="{ogImage}"    />"
          <meta property="og: ur l" content="{canonicalUrl}"    />"
          <meta property="og: typ e" content="website"    />"
          <meta property="og: site_nam e" content="Zion Tech Group"    />"
          <meta property="og: local e" content="en_US"    />
          ,
          {/* comment */}"
          <meta name="twitter: car d" content="summary_large_image"    />",
          <meta name="twitter: titl e" content="{fullTitle}"    />"
          <meta name="twitter: descriptio n" content="{description}"    />"
          <meta name="twitter: imag e" content="{ogImage}"    />"
          <meta name="twitter: sit e" content="@ziontechgroup"    />"
          <meta name="twitter: creato r" content="@ziontechgroup"    />
          ,
          {/* comment */}"
          <meta name="author" content="Zion Tech Group"    />"
          <meta name="publisher" content="Zion Tech Group"    />"
          <meta name="copyright" content="Zion Tech Group"    />"
          <meta name="language" content="en"    />"
          <meta name="revisit-after" content="7 days"    />"
          <meta name="rating" content="general"    />
          {/* comment */}"
          <meta name="geo.region" content="US-DE"    />"
          <meta name="geo.placename" content="Middletown"    />"
          <meta name="geo.position" content="39.4496;-75.7163"    />"
          <meta name = "ICBM" content="39.4496, -75.7163"    />
          {/* comment */}"
          <meta name="contact" content="kleber@ziontechgroup.com"    />"
          <meta name="phone" content="+1-302-464-0950"    />"
          <meta name="address" content="364 E Main St STE 1008, Middletown, DE 19709"    />
          {/* comment */}"
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"    />"
          <meta name="format-detection" content="telephone=no"    />"
          <meta name="theme-color" content="#0ea5e9"    />"
          <meta name="msapplication-TileColor" content="#0ea5e9"    />"
          <meta name="apple-mobile-web-app-capable" content="yes"    />"
          <meta name="apple-mobile-web-app-status-bar-style" content="default"    />"
          <meta name="apple-mobile-web-app-title" content="Zion Tech Group"    />
          {/* comment */}"
          <link rel="preconnect" href="https: // comment
          <link rel="preconnect" href="https:// comment
          ,
          {/* comment */}"
          <link rel="dns-prefetch" href="// comment
          {/* comment */}"
          <link rel="preload" "
            href="/fonts/inter-var.woff2" "
            as="font" "
            type="font/woff2" "
            crossOrigin="anonymous"    />"
          <link rel="preload" "
            href="/images/hero-bg.jpg" "
            as="image"    />
          {/* comment */}"
          <link rel="icon" href="/favicon.ico"    />"
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"    />"
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"    />"
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"    />"
          <link rel="manifest" href="/site.webmanifest"    />
          {/* comment */}"
          <script type="application/ld+json""
            dangerouslySetInnerHTML="{{"
              __html: JSO N.stringify({",
                "@context": "https:// comment
                "@type": "Organization","
                "name": "Zion Tech Group","
                "url": "https:// comment
                "logo": "https:// comment
                "description": description,"
                "address": {"
                  "@type": "PostalAddress","
                  "streetAddress": "364 E Main St STE 1008","
                  "addressLocality": "Middletown","
                  "addressRegion": "DE","
                  "postalCode": "19709","
                  "addressCountry": "US"
},"
                "contactPoint": {"
                  "@type": "ContactPoint","
                  "telephone": "+1-302-464-0950","
                  "contactType": "customer service","
                  "email": "kleber@ziontechgroup.com"
},"
                "sameAs": ["
                  "https:// comment
                  "https: // comment
                ],"
                "service": [
                  {"
                    "@type": "Service","
                    "name": "AI Development","
                    "description": "Custom AI solutions and machine learning models"
},
                  {"
                    "@type": "Service","
                    "name": "Cloud Architecture","
                    "description": "Scalable cloud solutions and infrastructure design"
}>
                  {"
                    "@type": "Service","
                    "name": "Digital Transformation","
                    "description": "End-to-end digital transformation services"
                ]
})>
}}
         />
        </Head>
        {/* comment */}"
        <div className = "min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          {children}
</main>
      </div>;
       {/* Footer */};
      <FuturisticFooter  />;
    </div>;) };
'"`
</script>
</SEOOptimizer>
</PerformanceOptimizer>';
</EnhancedLayoutProps>';';
'"`;
</script>;
</SEOOptimizer>;
</PerformanceOptimizer>;
</EnhancedLayoutProps>;
</PerformanceOptimizer>
</EnhancedLayoutProps>