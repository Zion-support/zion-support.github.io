export class ContentQualityAnalyzer {
    static instance;
    analyzedPages = new Map();

    static getInstance() {
        if (!ContentQualityAnalyzer.instance) {
            ContentQualityAnalyzer.instance = new ContentQualityAnalyzer();
        }
        return ContentQualityAnalyzer.instance;
    }

    analyzePageContent(pageUrl, title, content, metaDescription = '', images = [], links = []) {
        // Check if we already analyzed this page
        const existing = this.analyzedPages.get(pageUrl);
        if (existing) {
            return existing;
        }

        const wordCount = this.calculateWordCount(content);
        const headingCount = this.countHeadings(content);
        const imageCount = images.length;
        const linkCount = links.length;
        const metaDescriptionLength = metaDescription.length;
        const hasStructuredData = this.checkStructuredData(content);
        const readabilityScore = this.calculateReadabilityScore(content);
        const seoScore = this.calculateSeoScore({
            title,
            wordCount,
            headingCount,
            imageCount,
            linkCount,
            metaDescriptionLength,
            hasStructuredData
        });

        const issues = this.identifyIssues({
            title,
            wordCount,
            headingCount,
            imageCount,
            linkCount,
            metaDescriptionLength,
            hasStructuredData
        });

        const recommendations = this.generateRecommendations(issues);
        const overallScore = Math.round((readabilityScore + seoScore) / 2);

        const metrics = {
            pageUrl,
            title,
            wordCount,
            headingCount,
            imageCount,
            linkCount,
            metaDescriptionLength,
            hasStructuredData,
            readabilityScore,
            seoScore,
            overallScore,
            issues,
            recommendations
        };

        this.analyzedPages.set(pageUrl, metrics);
        return metrics;
    }

    calculateWordCount(content) {
        if (!content) return 0;
        // Remove HTML tags and count words
        const cleanContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        return cleanContent.split(' ').filter(word => word.length > 0).length;
    }

    countHeadings(content) {
        if (!content) return 0;
        const headingMatches = content.match(/<h[1-6][^>]*>/gi);
        return headingMatches ? headingMatches.length : 0;
    }

    checkStructuredData(content) {
        if (!content) return false;
        // Check for JSON-LD, microdata, or RDFa
        return content.includes('application/ld+json') ||
            content.includes('itemtype=') ||
            content.includes('vocab=');
    }

    calculateReadabilityScore(content) {
        if (!content) return 0;
        const wordCount = this.calculateWordCount(content);
        const sentenceCount = this.countSentences(content);
        const syllableCount = this.estimateSyllableCount(content);
        
        if (wordCount === 0 || sentenceCount === 0) return 0;
        
        // Flesch Reading Ease formula
        const fleschScore = 206.835 - (1.015 * (wordCount / sentenceCount)) - (84.6 * (syllableCount / wordCount));
        // Convert to 0-100 scale
        return Math.max(0, Math.min(100, fleschScore));
    }

    countSentences(content) {
        if (!content) return 0;
        const cleanContent = content.replace(/<[^>]*>/g, ' ').trim();
        const sentences = cleanContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
        return sentences.length;
    }

    estimateSyllableCount(content) {
        if (!content) return 0;
        // Simple syllable estimation
        const words = content.toLowerCase().split(/\s+/);
        let syllableCount = 0;
        
        words.forEach(word => {
            if (word.length <= 3) {
                syllableCount += 1;
            } else {
                // Count vowel groups
                const vowelGroups = word.match(/[aeiouy]+/g);
                syllableCount += vowelGroups ? vowelGroups.length : 1;
            }
        });
        
        return syllableCount;
    }

    calculateSeoScore(metrics) {
        let score = 100;
        
        // Title length check
        if (!metrics.title || metrics.title.length < 30 || metrics.title.length > 60) {
            score -= 10;
        }
        
        // Word count check
        if (metrics.wordCount < 300) {
            score -= 15;
        } else if (metrics.wordCount > 2000) {
            score -= 5;
        }
        
        // Heading structure check
        if (metrics.headingCount < 2) {
            score -= 10;
        }
        
        // Meta description check
        if (metrics.metaDescriptionLength < 120 || metrics.metaDescriptionLength > 160) {
            score -= 10;
        }
        
        // Image optimization check
        if (metrics.imageCount > 0 && metrics.imageCount < 3) {
            score += 5;
        }
        
        // Link structure check
        if (metrics.linkCount < 2) {
            score -= 5;
        }
        
        // Structured data bonus
        if (metrics.hasStructuredData) {
            score += 10;
        }
        
        return Math.max(0, Math.min(100, score));
    }

    identifyIssues(metrics) {
        const issues = [];
        
        if (!metrics.title || metrics.title.length < 30) {
            issues.push({
                type: 'title_too_short',
                severity: 'high',
                message: 'Title is too short for optimal SEO',
                suggestion: 'Expand title to 30-60 characters'
            });
        }
        
        if (metrics.wordCount < 300) {
            issues.push({
                type: 'content_too_short',
                severity: 'high',
                message: 'Content is too short for good SEO',
                suggestion: 'Add more relevant content (minimum 300 words)'
            });
        }
        
        if (metrics.headingCount < 2) {
            issues.push({
                type: 'poor_structure',
                severity: 'medium',
                message: 'Insufficient heading structure',
                suggestion: 'Add more headings (H2, H3) for better organization'
            });
        }
        
        if (metrics.metaDescriptionLength < 120 || metrics.metaDescriptionLength > 160) {
            issues.push({
                type: 'meta_description_length',
                severity: 'medium',
                message: 'Meta description length is not optimal',
                suggestion: 'Keep meta description between 120-160 characters'
            });
        }
        
        if (metrics.linkCount < 2) {
            issues.push({
                type: 'insufficient_links',
                severity: 'low',
                message: 'Not enough internal/external links',
                suggestion: 'Add relevant internal and external links'
            });
        }
        
        if (!metrics.hasStructuredData) {
            issues.push({
                type: 'no_structured_data',
                severity: 'low',
                message: 'No structured data found',
                suggestion: 'Consider adding JSON-LD structured data'
            });
        }
        
        return issues;
    }

    generateRecommendations(issues) {
        return issues.map(issue => ({
            priority: issue.severity === 'high' ? 1 : issue.severity === 'medium' ? 2 : 3,
            category: issue.type,
            message: issue.message,
            suggestion: issue.suggestion,
            actionable: true
        })).sort((a, b) => a.priority - b.priority);
    }

    getAnalytics() {
        const pages = Array.from(this.analyzedPages.values());
        const totalPages = pages.length;
        
        if (totalPages === 0) {
            return {
                totalPages: 0,
                averageScore: 0,
                scoreDistribution: {},
                commonIssues: []
            };
        }
        
        const averageScore = Math.round(
            pages.reduce((sum, page) => sum + page.overallScore, 0) / totalPages
        );
        
        const scoreDistribution = {
            excellent: pages.filter(p => p.overallScore >= 90).length,
            good: pages.filter(p => p.overallScore >= 70 && p.overallScore < 90).length,
            fair: pages.filter(p => p.overallScore >= 50 && p.overallScore < 70).length,
            poor: pages.filter(p => p.overallScore < 50).length
        };
        
        const allIssues = pages.flatMap(page => page.issues);
        const issueCounts = {};
        allIssues.forEach(issue => {
            issueCounts[issue.type] = (issueCounts[issue.type] || 0) + 1;
        });
        
        const commonIssues = Object.entries(issueCounts)
            .map(([type, count]) => ({ type, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5);
        
        return {
            totalPages,
            averageScore,
            scoreDistribution,
            commonIssues
        };
    }

    clearCache() {
        this.analyzedPages.clear();
    }
}

export default ContentQualityAnalyzer;