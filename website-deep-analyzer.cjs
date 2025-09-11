const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

class WebsiteDeepAnalyzer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingContent = [];
    this.analysisResults = {
      totalPages: 0,
      brokenLinks: 0,
      missingContent: 0,
      seoIssues: 0,
      accessibilityIssues: 0,
      performanceIssues: 0,
      recommendations: [],
    };
  }

  async analyzeWebsite() {
    console.log(`🚀 Starting deep analysis of ${this.baseUrl}`);
    console.log('='.repeat(60));

    try {
      // Start with the homepage
      await this.analyzePage(this.baseUrl);

      // Analyze additional important pages
      const importantPages = [
        '/about',
        '/services',
        '/contact',
        '/team',
        '/blog',
        '/careers',
        '/case-studies',
        '/partners',
        '/help',
        '/documentation',
        '/api',
        '/privacy-policy',
        '/terms-of-service',
      ];

      for (const page of importantPages) {
        const fullUrl = `${this.baseUrl}${page}`;
        if (!this.visitedUrls.has(fullUrl)) {
          await this.analyzePage(fullUrl);
        }
      }

      // Generate comprehensive report
      this.generateReport();
    } catch (error) {
      console.error('❌ Analysis failed:', error.message);
    }
  }

  async analyzePage(url) {
    if (this.visitedUrls.has(url)) return;

    this.visitedUrls.add(url);
    console.log(`📄 Analyzing: ${url}`);

    try {
      const response = await axios.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; ZionTechAnalyzer/1.0)',
        },
      });

      const $ = cheerio.load(response.data);

      // Check page content
      this.checkPageContent(url, $);

      // Check for broken links
      await this.checkLinks(url, $);

      // Check SEO elements
      this.checkSEO(url, $);

      // Check accessibility
      this.checkAccessibility(url, $);

      // Check performance indicators
      this.checkPerformance(url, $);
    } catch (error) {
      console.log(`❌ Failed to analyze ${url}: ${error.message}`);
      this.brokenLinks.push({
        url,
        error: error.message,
        type: 'page_unreachable',
      });
    }
  }

  checkPageContent(url, $) {
    const title = $('title').text().trim();
    const metaDescription = $('meta[name="description"]').attr('content') || '';
    const mainContent = $('main, .main, #main, .content, #content')
      .text()
      .trim();
    const headings = $('h1, h2, h3, h4, h5, h6').length;
    const images = $('img').length;
    const links = $('a').length;

    // Check if page has meaningful content
    const hasContent = mainContent.length > 100;
    const hasTitle = title.length > 0;
    const hasDescription = metaDescription.length > 0;
    const hasStructure = headings > 0;

    if (!hasContent || !hasTitle || !hasDescription || !hasStructure) {
      this.missingContent.push({
        url,
        issues: {
          noContent: !hasContent,
          noTitle: !hasTitle,
          noDescription: !hasDescription,
          noStructure: !hasStructure,
        },
        contentLength: mainContent.length,
        titleLength: title.length,
        descriptionLength: metaDescription.length,
        headingsCount: headings,
        imagesCount: images,
        linksCount: links,
      });
    }

    console.log(
      `   📊 Content: ${mainContent.length} chars, ${headings} headings, ${images} images, ${links} links`
    );
  }

  async checkLinks(url, $) {
    const links = $('a[href]');
    const linkPromises = [];

    links.each((i, link) => {
      const href = $(link).attr('href');
      if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
        const absoluteUrl = this.resolveUrl(url, href);
        if (absoluteUrl.startsWith(this.baseUrl)) {
          linkPromises.push(this.checkLink(absoluteUrl));
        }
      }
    });

    // Check a sample of links to avoid overwhelming the server
    const sampleLinks = linkPromises.slice(0, 10);
    await Promise.allSettled(sampleLinks);
  }

  async checkLink(linkUrl) {
    try {
      const response = await axios.head(linkUrl, {
        timeout: 5000,
        validateStatus: status => status < 400,
      });
    } catch (error) {
      this.brokenLinks.push({
        url: linkUrl,
        error: error.message,
        type: 'broken_link',
      });
    }
  }

  resolveUrl(base, relative) {
    try {
      return new URL(relative, base).href;
    } catch {
      return relative;
    }
  }

  checkSEO(url, $) {
    const title = $('title').text().trim();
    const metaDescription = $('meta[name="description"]').attr('content') || '';
    const h1Tags = $('h1');
    const canonical = $('link[rel="canonical"]').attr('href');
    const robots = $('meta[name="robots"]').attr('content') || '';

    let seoIssues = 0;

    if (title.length < 30 || title.length > 60) {
      seoIssues++;
      this.analysisResults.recommendations.push(
        `Page ${url}: Title length should be between 30-60 characters (current: ${title.length})`
      );
    }

    if (metaDescription.length < 120 || metaDescription.length > 160) {
      seoIssues++;
      this.analysisResults.recommendations.push(
        `Page ${url}: Meta description should be between 120-160 characters (current: ${metaDescription.length})`
      );
    }

    if (h1Tags.length > 1) {
      seoIssues++;
      this.analysisResults.recommendations.push(
        `Page ${url}: Should have only one H1 tag (current: ${h1Tags.length})`
      );
    }

    if (!canonical) {
      seoIssues++;
      this.analysisResults.recommendations.push(
        `Page ${url}: Missing canonical URL`
      );
    }

    this.analysisResults.seoIssues += seoIssues;
  }

  checkAccessibility(url, $) {
    const images = $('img');
    const forms = $('form');
    const buttons = $('button, input[type="submit"], input[type="button"]');

    let accessibilityIssues = 0;

    images.each((i, img) => {
      const alt = $(img).attr('alt');
      if (!alt && !$(img).attr('role') === 'presentation') {
        accessibilityIssues++;
        this.analysisResults.recommendations.push(
          `Page ${url}: Image missing alt text`
        );
      }
    });

    forms.each((i, form) => {
      const labels = $(form).find('label');
      const inputs = $(form).find('input, textarea, select');
      if (labels.length < inputs.length) {
        accessibilityIssues++;
        this.analysisResults.recommendations.push(
          `Page ${url}: Form inputs missing labels`
        );
      }
    });

    buttons.each((i, button) => {
      const text = $(button).text().trim();
      const ariaLabel = $(button).attr('aria-label');
      if (!text && !ariaLabel) {
        accessibilityIssues++;
        this.analysisResults.recommendations.push(
          `Page ${url}: Button missing accessible text or aria-label`
        );
      }
    });

    this.analysisResults.accessibilityIssues += accessibilityIssues;
  }

  checkPerformance(url, $) {
    const scripts = $('script[src]');
    const stylesheets = $('link[rel="stylesheet"]');
    const images = $('img');

    let performanceIssues = 0;

    // Check for external scripts that could be optimized
    scripts.each((i, script) => {
      const src = $(script).attr('src');
      if (src && !src.startsWith('/') && !src.startsWith('./')) {
        performanceIssues++;
        this.analysisResults.recommendations.push(
          `Page ${url}: Consider hosting external script locally: ${src}`
        );
      }
    });

    // Check for large number of resources
    if (scripts.length + stylesheets.length + images.length > 50) {
      performanceIssues++;
      this.analysisResults.recommendations.push(
        `Page ${url}: High number of resources (${scripts.length + stylesheets.length + images.length}) - consider optimization`
      );
    }

    this.analysisResults.performanceIssues += performanceIssues;
  }

  generateReport() {
    this.analysisResults.totalPages = this.visitedUrls.size;
    this.analysisResults.brokenLinks = this.brokenLinks.length;
    this.analysisResults.missingContent = this.missingContent.length;

    console.log('\n📊 ANALYSIS COMPLETE');
    console.log('='.repeat(60));
    console.log(`Total Pages Analyzed: ${this.analysisResults.totalPages}`);
    console.log(`Broken Links Found: ${this.analysisResults.brokenLinks}`);
    console.log(`Content Issues: ${this.analysisResults.missingContent}`);
    console.log(`SEO Issues: ${this.analysisResults.seoIssues}`);
    console.log(
      `Accessibility Issues: ${this.analysisResults.accessibilityIssues}`
    );
    console.log(
      `Performance Issues: ${this.analysisResults.performanceIssues}`
    );

    if (this.brokenLinks.length > 0) {
      console.log('\n🔗 BROKEN LINKS:');
      this.brokenLinks.forEach(link => {
        console.log(`   ❌ ${link.url} - ${link.error}`);
      });
    }

    if (this.missingContent.length > 0) {
      console.log('\n📝 CONTENT ISSUES:');
      this.missingContent.forEach(page => {
        console.log(`   ⚠️  ${page.url}`);
        if (page.issues.noContent) console.log('      - No meaningful content');
        if (page.issues.noTitle) console.log('      - Missing title');
        if (page.issues.noDescription)
          console.log('      - Missing meta description');
        if (page.issues.noStructure)
          console.log('      - No heading structure');
      });
    }

    if (this.analysisResults.recommendations.length > 0) {
      console.log('\n💡 RECOMMENDATIONS:');
      this.analysisResults.recommendations.forEach(rec => {
        console.log(`   💡 ${rec}`);
      });
    }

    // Save detailed report to file
    const report = {
      summary: this.analysisResults,
      brokenLinks: this.brokenLinks,
      missingContent: this.missingContent,
      recommendations: this.analysisResults.recommendations,
      timestamp: new Date().toISOString(),
    };

    fs.writeFileSync(
      'deep-website-analysis-report.json',
      JSON.stringify(report, null, 2)
    );
    console.log(
      '\n📄 Detailed report saved to: deep-website-analysis-report.json'
    );
  }
}

// Run the analysis
const analyzer = new WebsiteDeepAnalyzer('https://ziontechgroup.com');
analyzer.analyzeWebsite();
