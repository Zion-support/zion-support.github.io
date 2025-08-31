
class SEOOptimizer {
    constructor() {
        this.baseUrl = 'https://ziontechgroup.com';
        this.siteName = 'Zion Tech Group';
    }

    generateTitle(path) {
        const pathSegments = path.split('/').filter(Boolean);
        
        if (path === '/') {
            return `${this.siteName} - Revolutionary Micro SaaS & AI Solutions`;
        }
        
        if (pathSegments.length === 0) {
            return this.siteName;
        }
        
        const lastSegment = pathSegments[pathSegments.length - 1];
        const formattedSegment = lastSegment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        
        return `${formattedSegment} - ${this.siteName}`;
    }

    generateDescription(path) {
        const descriptions = {
            '/': 'Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services.',
            '/services': 'Comprehensive technology services including AI, cloud infrastructure, cybersecurity, and digital transformation solutions.',
            '/about': 'Learn about Zion Tech Group, our mission, team, and commitment to delivering innovative technology solutions.',
            '/contact': 'Get in touch with our expert team for technology solutions and consultations. Contact us today.',
            '/blog': 'Stay updated with the latest technology trends, insights, and industry news from Zion Tech Group.'
        };
        
        return descriptions[path] || 'Professional technology solutions and consulting services from Zion Tech Group.';
    }

    generateCanonicalUrl(path) {
        return `${this.baseUrl}${path}`;
    }

    generateMetaTags(path) {
        const title = this.generateTitle(path);
        const description = this.generateDescription(path);
        const canonicalUrl = this.generateCanonicalUrl(path);
        
        return {
            title,
            description,
            canonical: canonicalUrl,
            ogTitle: title,
            ogDescription: description,
            ogUrl: canonicalUrl,
            ogType: 'website',
            twitterCard: 'summary_large_image',
            twitterTitle: title,
            twitterDescription: description
        };
    }

    generateStructuredData(path) {
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
                "logo": "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc"
            }
        };

        // Add specific structured data based on page type
        if (path === '/') {
            return {
                ...baseData,
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
            };
        }

        if (path.startsWith('/services/')) {
            return {
                ...baseData,
                "@type": "Service",
                "serviceType": path.split('/').pop()?.replace(/-/g, ' '),
                "provider": {
                    "@type": "Organization",
                    "name": "Zion Tech Group"
                }
            };
        }

        return baseData;
    }

    analyzeContentQuality(content, page) {
        const issues = [];
        
        // Check for missing or short title
        if (!content.includes('<title>') || content.includes('<title></title>')) {
            issues.push({
                page,
                issue: 'missing-title',
                severity: 'high',
                suggestedFix: 'Add a descriptive title tag with relevant keywords'
            });
        }

        // Check for missing meta description
        if (!content.includes('name="description"')) {
            issues.push({
                page,
                issue: 'missing-description',
                severity: 'high',
                suggestedFix: 'Add a meta description tag with compelling content'
            });
        }

        // Check for short meta description
        const descMatch = content.match(/name="description" content="([^"]+)"/);
        if (descMatch && descMatch[1].length < 120) {
            issues.push({
                page,
                issue: 'short-description',
                severity: 'medium',
                suggestedFix: 'Expand meta description to 120-160 characters for better SEO'
            });
        }

        // Check for missing headings
        if (!content.includes('<h1>') && !content.includes('<h2>') && !content.includes('<h3>')) {
            issues.push({
                page,
                issue: 'no-headings',
                severity: 'medium',
                suggestedFix: 'Add proper heading structure (H1, H2, H3) for better content organization'
            });
        }

        // Check for minimal content
        const textContent = content.replace(/<[^>]*>/g, ' ').trim();
        const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;
        
        if (wordCount < 300) {
            issues.push({
                page,
                issue: 'minimal-content',
                severity: 'medium',
                suggestedFix: 'Add more content to improve SEO and user engagement'
            });
        }

        return issues;
    }

    generateSitemap(pages) {
        const sitemap = {
            urlset: {
                "@xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9",
                url: pages.map(page => ({
                    loc: `${this.baseUrl}${page.path}`,
                    lastmod: page.lastModified || new Date().toISOString(),
                    changefreq: page.changeFreq || 'weekly',
                    priority: page.priority || 0.5
                }))
            }
        };

        return sitemap;
    }

    optimizeForKeywords(content, keywords) {
        let optimizedContent = content;
        
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
            if (!regex.test(optimizedContent)) {
                // Add keyword naturally to content
                optimizedContent += `\n\n<p>Learn more about ${keyword} and how it can benefit your business.</p>`;
            }
        });
        
        return optimizedContent;
    }
}

export default SEOOptimizer;