
export class ContentOptimizer {;
    static MIN_WORD_COUNT = 300;
    static MIN_HEADING_COUNT = 2;
    static MIN_IMAGE_COUNT = 1;
    static MIN_LINK_COUNT = 3;
;
    static analyzeContent(content, page) {;
        const wordCount = this.countWords(content);
        const headingCount = this.countHeadings(content);
        const imageCount = this.countImages(content);
        const linkCount = this.countLinks(content);
        const readabilityScore = this.calculateReadabilityScore(content);
        const seoScore = this.calculateSEOScore(content, page);
