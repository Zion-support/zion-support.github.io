// SEO constants for the Zion Tech Group website

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const seoConstants = {
  defaultTitle: "Zion Tech Group - Advanced AI and IT Solutions",
  defaultDescription:
    "Leading provider of AI and IT solutions for businesses. Expert consulting, development, and implementation services.",
  defaultKeywords: [
    "AI",
    "IT solutions",
    "technology",
    "consulting",
    "development",
  ],
  defaultOgImage: "/images/og-image.jpg",
  defaultOgType: "website",
  defaultTwitterCard: "summary_large_image",
  baseUrl: process.env.REACT_APP_BASE_URL || "https://ziontechgroup.com",
};

export const pageSEOData: Record<string, SEOProps> = {
  home: {
    title: "Zion Tech Group - Advanced AI and IT Solutions",
    description:
      "Leading provider of AI and IT solutions for businesses. Expert consulting, development, and implementation services.",
    keywords: [
      "AI",
      "IT solutions",
      "technology",
      "consulting",
      "development",
      "artificial intelligence",
    ],
  },
  about: {
    title: "About Us - Zion Tech Group",
    description:
      "Learn about Zion Tech Group's mission, team, and expertise in AI and IT solutions.",
    keywords: ["about", "company", "team", "mission", "expertise"],
  },
  services: {
    title: "Our Services - AI and IT Solutions",
    description:
      "Comprehensive AI and IT services including consulting, development, and implementation.",
    keywords: [
      "services",
      "AI consulting",
      "IT development",
      "implementation",
      "solutions",
    ],
  },
  contact: {
    title: "Contact Us - Zion Tech Group",
    description:
      "Get in touch with our team for AI and IT solutions. Contact information and inquiry form.",
    keywords: ["contact", "get in touch", "inquiry", "support"],
  },
};
