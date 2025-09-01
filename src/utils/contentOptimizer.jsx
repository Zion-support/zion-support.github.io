export class ContentOptimizer {
    static MIN_WORD_COUNT = 300;
    static MIN_HEADING_COUNT = 2;
    static MIN_IMAGE_COUNT = 1;
    static MIN_LINK_COUNT = 3;

    static analyzeContent(content, page) {
        const wordCount = this.countWords(content);
        const headingCount = this.countHeadings(content);
        const imageCount = this.countImages(content);
        const linkCount = this.countLinks(content);
        const readabilityScore = this.calculateReadabilityScore(content);
        const seoScore = this.calculateSEOScore(content, page);
        const issues = this.identifyIssues(content, page, {
            wordCount,
            headingCount,
            imageCount,
            linkCount
        });
        const suggestions = this.generateSuggestions(issues, page);

        return {
            page,
            wordCount,
            headingCount,
            imageCount,
            linkCount,
            readabilityScore,
            seoScore,
            issues,
            suggestions
        };
    }

    static countWords(content) {
        // Remove HTML tags and count words
        const textContent = content.replace(/<[^>]*>/g, ' ').trim();
        return textContent.split(/\s+/).filter(word => word.length > 0).length;
    }

    static countHeadings(content) {
        const headingMatches = content.match(/<h[1-6][^>]*>/gi);
        return headingMatches ? headingMatches.length : 0;
    }

    static countImages(content) {
        const imageMatches = content.match(/<img[^>]*>/gi);
        return imageMatches ? imageMatches.length : 0;
    }

    static countLinks(content) {
        const linkMatches = content.match(/<a[^>]*>/gi);
        return linkMatches ? linkMatches.length : 0;
    }

    static calculateReadabilityScore(content) {
        const textContent = content.replace(/<[^>]*>/g, ' ').trim();
        const sentences = textContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
        const words = textContent.split(/\s+/).filter(w => w.length > 0);
        const syllables = this.countSyllables(textContent);

        if (sentences.length === 0 || words.length === 0)
            return 0;

        // Flesch Reading Ease formula
        const score = 206.835 - (1.015 * (words.length / sentences.length)) - (84.6 * (syllables / words.length));
        return Math.max(0, Math.min(100, score));
    }

    static countSyllables(text) {
        // Simplified syllable counting
        const words = text.toLowerCase().split(/\s+/);
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

    static calculateSEOScore(content, page) {
        let score = 100;

        // Check for title
        if (!content.includes('<title>'))
            score -= 20;

        // Check for meta description
        if (!content.includes('name="description"'))
            score -= 15;

        // Check for headings
        if (!content.includes('<h1>'))
            score -= 10;
        if (!content.includes('<h2>'))
            score -= 5;

        // Check for images with alt text
        const images = content.match(/<img[^>]*>/gi) || [];
        const imagesWithAlt = images.filter(img => img.includes('alt='));
        if (images.length > 0 && imagesWithAlt.length === 0)
            score -= 10;

        // Check for internal links
        const internalLinks = content.match(/href="\/[^"]*"/g) || [];
        if (internalLinks.length < 2)
            score -= 10;

        return Math.max(0, score);
    }

    static identifyIssues(content, page, metrics) {
        const issues = [];

        if (metrics.wordCount < this.MIN_WORD_COUNT) {
            issues.push({
                type: 'word_count',
                severity: 'medium',
                message: `Content is too short. Aim for at least ${this.MIN_WORD_COUNT} words.`
            });
        }

        if (metrics.headingCount < this.MIN_HEADING_COUNT) {
            issues.push({
                type: 'heading_count',
                severity: 'low',
                message: `Add more headings to improve content structure.`
            });
        }

        if (metrics.imageCount < this.MIN_IMAGE_COUNT) {
            issues.push({
                type: 'image_count',
                severity: 'low',
                message: `Consider adding images to make content more engaging.`
            });
        }

        if (metrics.linkCount < this.MIN_LINK_COUNT) {
            issues.push({
                type: 'link_count',
                severity: 'low',
                message: `Add more internal and external links for better SEO.`
            });
        }

        return issues;
    }

    static generateSuggestions(issues, page) {
        const suggestions = [];

        issues.forEach(issue => {
            switch (issue.type) {
                case 'word_count':
                    suggestions.push('Expand your content with more detailed information, examples, or related topics.');
                    break;
                case 'heading_count':
                    suggestions.push('Break down your content into sections with descriptive headings (H2, H3).');
                    break;
                case 'image_count':
                    suggestions.push('Add relevant images, diagrams, or infographics to illustrate your points.');
                    break;
                case 'link_count':
                    suggestions.push('Include links to related pages on your site and authoritative external sources.');
                    break;
            }
        });

        return suggestions;
    }

    static optimizeContent(content, page) {
        const analysis = this.analyzeContent(content, page);
        const optimizedContent = content;

        // Apply optimizations based on analysis
        if (analysis.issues.length > 0) {
            // Add suggestions as comments
            const optimizationComments = analysis.suggestions.map(suggestion => `<!-- TODO: ${suggestion} -->`).join('\n');
            return `${optimizationComments}\n\n${optimizedContent}`;
        }

        return optimizedContent;
    }
}

export default ContentOptimizer;
