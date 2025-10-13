#!/usr/bin/env python3
"""
Comprehensive website analyzer to check all links and identify broken ones
"""
import requests
import time
import re
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import json
from collections import defaultdict

class WebsiteAnalyzer:
    def __init__(self, base_url="https://ziontechgroup.com"):
        self.base_url = base_url
        self.visited_urls = set()
        self.broken_links = []
        self.working_links = []
        self.missing_pages = []
        self.all_links = set()
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        
    def is_valid_url(self, url):
        """Check if URL is valid and belongs to the same domain"""
        try:
            parsed = urlparse(url)
            return parsed.netloc == urlparse(self.base_url).netloc or parsed.netloc == ''
        except:
            return False
    
    def normalize_url(self, url):
        """Normalize URL to handle relative paths"""
        if url.startswith('/'):
            return urljoin(self.base_url, url)
        elif not url.startswith('http'):
            return urljoin(self.base_url, '/' + url)
        return url
    
    def check_url(self, url):
        """Check if a single URL is accessible"""
        try:
            response = self.session.get(url, timeout=10, allow_redirects=True)
            if response.status_code == 200:
                return True, response.status_code
            else:
                return False, response.status_code
        except requests.exceptions.RequestException as e:
            return False, str(e)
    
    def extract_links(self, html_content, current_url):
        """Extract all links from HTML content"""
        soup = BeautifulSoup(html_content, 'html.parser')
        links = []
        
        # Extract all href attributes
        for link in soup.find_all('a', href=True):
            href = link['href']
            if self.is_valid_url(href):
                normalized_url = self.normalize_url(href)
                links.append({
                    'url': normalized_url,
                    'text': link.get_text(strip=True),
                    'source': current_url
                })
        
        # Extract all src attributes that might be links
        for img in soup.find_all('img', src=True):
            src = img['src']
            if self.is_valid_url(src):
                normalized_url = self.normalize_url(src)
                links.append({
                    'url': normalized_url,
                    'text': 'Image',
                    'source': current_url,
                    'type': 'image'
                })
        
        return links
    
    def analyze_page(self, url, depth=0, max_depth=3):
        """Analyze a single page and its links"""
        if url in self.visited_urls or depth > max_depth:
            return
        
        print(f"Analyzing: {url} (depth: {depth})")
        self.visited_urls.add(url)
        
        try:
            response = self.session.get(url, timeout=10, allow_redirects=True)
            if response.status_code == 200:
                self.working_links.append(url)
                self.all_links.add(url)
                
                # Extract links from this page
                links = self.extract_links(response.text, url)
                
                for link_info in links:
                    link_url = link_info['url']
                    self.all_links.add(link_url)
                    
                    # Check if it's a page link (not image)
                    if link_info.get('type') != 'image':
                        # Recursively analyze if it's a new page
                        if link_url not in self.visited_urls and depth < max_depth:
                            time.sleep(0.5)  # Be respectful to the server
                            self.analyze_page(link_url, depth + 1, max_depth)
            else:
                self.broken_links.append({
                    'url': url,
                    'status': response.status_code,
                    'error': f"HTTP {response.status_code}"
                })
        except requests.exceptions.RequestException as e:
            self.broken_links.append({
                'url': url,
                'status': 'ERROR',
                'error': str(e)
            })
    
    def find_missing_pages(self):
        """Find pages that are referenced but don't exist"""
        # This would need to be customized based on the site structure
        # For now, we'll check common page patterns
        common_pages = [
            '/about', '/contact', '/services', '/pricing', '/blog',
            '/privacy', '/terms', '/cookies', '/sitemap', '/team',
            '/careers', '/case-studies', '/demo', '/support'
        ]
        
        for page in common_pages:
            url = urljoin(self.base_url, page)
            if url not in self.all_links:
                is_working, status = self.check_url(url)
                if not is_working:
                    self.missing_pages.append({
                        'url': url,
                        'status': status,
                        'reason': 'Referenced but not accessible'
                    })
    
    def generate_report(self):
        """Generate a comprehensive analysis report"""
        report = {
            'summary': {
                'total_links_found': len(self.all_links),
                'working_links': len(self.working_links),
                'broken_links': len(self.broken_links),
                'missing_pages': len(self.missing_pages),
                'pages_analyzed': len(self.visited_urls)
            },
            'broken_links': self.broken_links,
            'missing_pages': self.missing_pages,
            'working_links': self.working_links[:50],  # Limit to first 50
            'all_links': list(self.all_links)
        }
        
        return report
    
    def run_analysis(self):
        """Run the complete website analysis"""
        print("Starting website analysis...")
        print(f"Base URL: {self.base_url}")
        
        # Start with the homepage
        self.analyze_page(self.base_url)
        
        # Find missing pages
        self.find_missing_pages()
        
        # Generate report
        report = self.generate_report()
        
        # Save report to file
        with open('website_analysis_report.json', 'w') as f:
            json.dump(report, f, indent=2)
        
        print(f"\nAnalysis complete!")
        print(f"Total links found: {report['summary']['total_links_found']}")
        print(f"Working links: {report['summary']['working_links']}")
        print(f"Broken links: {report['summary']['broken_links']}")
        print(f"Missing pages: {report['summary']['missing_pages']}")
        print(f"Pages analyzed: {report['summary']['pages_analyzed']}")
        
        return report

if __name__ == "__main__":
    analyzer = WebsiteAnalyzer()
    report = analyzer.run_analysis()
    
    # Print broken links
    if report['broken_links']:
        print("\n=== BROKEN LINKS ===")
        for link in report['broken_links']:
            print(f"❌ {link['url']} - {link['error']}")
    
    # Print missing pages
    if report['missing_pages']:
        print("\n=== MISSING PAGES ===")
        for page in report['missing_pages']:
            print(f"⚠️  {page['url']} - {page['reason']}")