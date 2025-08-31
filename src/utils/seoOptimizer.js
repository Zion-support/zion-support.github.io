class SEOOptimizer {
    static DEFAULT_META_DESCRIPTIONS = {
        '/': 'Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services.',
        '/services': 'Comprehensive technology services including AI solutions, cybersecurity, cloud infrastructure, and digital transformation.',
        '/ai-solutions': 'Advanced AI solutions and autonomous systems. Machine learning, deep learning, and intelligent automation for modern businesses.',
        '/about': 'Learn about Zion Tech Group - a leading technology company specializing in AI, cybersecurity, and innovative IT solutions.',
        '/contact': 'Get in touch with Zion Tech Group for technology consulting, AI development, and digital transformation services.',
        '/pricing': 'Transparent pricing for our technology services. Affordable AI solutions, cybersecurity, and IT infrastructure services.',
        '/careers': 'Join our team of technology experts. Exciting career opportunities in AI, cybersecurity, and innovative technology.',
        '/blog': 'Insights and analysis on the latest technology trends, AI developments, and digital transformation strategies.',
        '/news': 'Latest news and updates from Zion Tech Group. Company announcements, partnerships, and technology achievements.',
        '/services/ai-autonomous-systems': 'AI autonomous systems and intelligent automation solutions. Transform your business with cutting-edge AI technology.',
        '/services/quantum-technology': 'Quantum computing and quantum technology solutions. Next-generation computing power for complex problem solving.',
        '/services/cybersecurity': 'Advanced cybersecurity solutions protecting your digital assets. Quantum-safe security and comprehensive threat protection.',
        '/services/it-infrastructure': 'Robust IT infrastructure solutions. Scalable, secure, and high-performance technology foundations for your business.',
        '/services/micro-saas-solutions': 'Innovative micro SaaS solutions designed for modern businesses. Scalable, cost-effective software-as-a-service platforms.',
        '/solutions/enterprise': 'Enterprise-grade technology solutions. Comprehensive IT services designed for large-scale business operations and growth.',
        '/solutions/healthcare': 'Healthcare technology solutions. Secure, compliant, and innovative IT services for the healthcare industry.'
    };

    static KEYWORD_MAPPINGS = {
        '/': ['AI marketplace', 'tech services', 'artificial intelligence', 'IT services', 'AI developers', 'technology marketplace', 'AI solutions', 'machine learning', 'digital transformation', 'micro SaaS', 'quantum computing', 'blockchain', 'cybersecurity', 'edge computing', 'metaverse'],
        '/services': ['AI services', 'cybersecurity', 'cloud infrastructure', 'IT solutions', 'digital transformation', 'automation', 'machine learning', 'blockchain', 'quantum computing'],
        '/ai-solutions': ['artificial intelligence', 'AI automation', 'machine learning', 'deep learning', 'neural networks', 'AI systems', 'intelligent automation', 'AI platforms'],
        '/about': ['Zion Tech Group', 'technology company', 'innovation', 'expertise', 'leadership', 'mission', 'vision', 'company history'],
        '/contact': ['contact us', 'get in touch', 'support', 'consultation', 'partnership', 'sales inquiry', 'technical support'],
        '/pricing': ['pricing plans', 'cost', 'subscription', 'enterprise pricing', 'custom solutions', 'affordable technology'],
        '/careers': ['job opportunities', 'careers', 'employment', 'work with us', 'join our team', 'technology jobs', 'AI careers'],
        '/blog': ['technology blog', 'industry insights', 'AI trends', 'tech news', 'thought leadership', 'expert analysis'],
        '/news': ['company news', 'press releases', 'announcements', 'updates', 'partnerships', 'achievements'],
        '/services/ai-autonomous-systems': ['AI autonomous systems', 'intelligent automation', 'business process automation', 'AI agents', 'autonomous operations', 'machine learning systems'],
        '/services/quantum-technology': ['quantum computing', 'quantum technology', 'quantum algorithms', 'quantum cryptography', 'quantum machine learning', 'quantum advantage'],
        '/services/cybersecurity': ['cybersecurity', 'information security', 'threat protection', 'security assessment', 'compliance', 'data protection', 'quantum-safe security'],
        '/services/it-infrastructure': ['IT infrastructure', 'network infrastructure', 'cloud infrastructure', 'data centers', 'server management', 'network security'],
        '/services/micro-saas-solutions': ['micro SaaS', 'software as a service', 'SaaS platforms', 'business software', 'cloud applications', 'subscription software'],
        '/solutions/enterprise': ['enterprise solutions', 'enterprise IT', 'large business solutions', 'scalable technology', 'enterprise software', 'business technology'],
        '/solutions/healthcare': ['healthcare technology', 'health IT', 'medical software', 'healthcare compliance', 'HIPAA solutions', 'medical technology']
    };

    static generateSEOData(path) {
        const title = this.generateTitle(path);
        const description = this.generateDescription(path);
        const keywords = this.generateKeywords(path);
        const canonicalUrl = this.generateCanonicalUrl(path);
        const structuredData = this.generateStructuredData(path);
        return {
            title,
            description,
            keywords,
            canonicalUrl,
            structuredData
        };
    }

    static generateTitle(path) {
        const baseTitle = 'Zion Tech Group';
        if (path === '/') {
            return `${baseTitle} - Revolutionary Technology Solutions`;
        }

        const pathSegments = path.split('/').filter(Boolean);
        if (pathSegments.length === 0) {
            return baseTitle;
        }
        const lastSegment = pathSegments[pathSegments.length - 1];
        const formattedSegment = lastSegment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        return `${formattedSegment} - ${baseTitle}`;
    }

    static generateDescription(path) {
        return this.DEFAULT_META_DESCRIPTIONS[path] ||
            'Professional technology solutions and services. Expert IT consulting, AI development, and digital transformation services for modern businesses.';
    }

    static generateKeywords(path) {
        return this.KEYWORD_MAPPINGS[path] ||
            ['technology', 'IT services', 'digital solutions', 'business technology', 'innovation'];
    }

    static generateCanonicalUrl(path) {
        const baseUrl = 'https://ziontechgroup.com';
        return `${baseUrl}${path}`;
    }

    static generateStructuredData(path) {
        const baseData = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": this.generateTitle(path),
            "description": this.generateDescription(path),
            "url": this.generateCanonicalUrl(path),
            "publisher": {
                "@type": "Organization",
                "name": "Zion Tech Group",
                "url": "https://ziontechgroup.com",
                "logo": "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",
                "description": "Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services.",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "364 E Main St STE 1008",
                    "addressLocality": "Middletown",
                    "addressRegion": "DE",
                    "postalCode": "19709",
                    "addressCountry": "US"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-302-464-0950",
                    "contactType": "customer service",
                    "email": "kleber@ziontechgroup.com"
                }
            }
        };

        if (path === '/') {
            return {
                ...baseData,
                "@type": "Organization"
            };
        }

        return baseData;
    }

    static generateMetaTags(seoData) {
        const tags = [];
        
        if (seoData.title) {
            tags.push(`<title>${seoData.title}</title>`);
            tags.push(`<meta property="og:title" content="${seoData.title}" />`);
            tags.push(`<meta name="twitter:title" content="${seoData.title}" />`);
        }
        
        if (seoData.description) {
            tags.push(`<meta name="description" content="${seoData.description}" />`);
            tags.push(`<meta property="og:description" content="${seoData.description}" />`);
            tags.push(`<meta name="twitter:description" content="${seoData.description}" />`);
        }
        
        if (seoData.keywords && Array.isArray(seoData.keywords)) {
            tags.push(`<meta name="keywords" content="${seoData.keywords.join(', ')}" />`);
        }
        
        if (seoData.canonicalUrl) {
            tags.push(`<link rel="canonical" href="${seoData.canonicalUrl}" />`);
            tags.push(`<meta property="og:url" content="${seoData.canonicalUrl}" />`);
        }
        
        if (seoData.structuredData) {
            tags.push(`<script type="application/ld+json">${JSON.stringify(seoData.structuredData)}</script>`);
        }
        
        return tags.join('\n    ');
    }
}

module.exports = SEOOptimizer;
