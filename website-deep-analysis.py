#!/usr/bin/env python3
"""
Deep Website Analysis Script for Zion Tech Group
Performs comprehensive analysis of all links, sublinks, and content
"""

import requests
import time
import json
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import logging
from collections import defaultdict
import sys
from typing import Dict, List, Set, Tuple
import re

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('zion-website-deep-analysis.log'),
        logging.StreamHandler(sys.stdout)
    ]
)

class ZionWebsiteAnalyzer:
    def __init__(self, base_url: str = "https://ziontechgroup.com"):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        
        # Analysis results
        self.visited_urls: Set[str] = set()
        self.broken_links: List[Dict] = []
        self.missing_content: List[Dict] = []
        self.working_links: List[str] = []
        self.page_analysis: Dict[str, Dict] = {}
        self.link_hierarchy: Dict[str, List[str]] = defaultdict(list)
        
        # Statistics
        self.total_pages = 0
        self.total_links = 0
        self.start_time = time.time()
        
    def is_valid_url(self, url: str) -> bool:
        """Check if URL is valid and belongs to the same domain"""
        try:
            parsed = urlparse(url)
            return (
                parsed.scheme in ['http', 'https'] and
                parsed.netloc in ['ziontechgroup.com', 'www.ziontechgroup.com'] and
                not url.startswith('#') and
                not url.startswith('mailto:') and
                not url.startswith('tel:')
            )
        except:
            return False
    
    def get_page_content(self, url: str) -> Tuple[bool, str, int]:
        """Fetch page content and return status"""
        try:
            response = self.session.get(url, timeout=30, allow_redirects=True)
            return True, response.text, response.status_code
        except requests.RequestException as e:
            return False, str(e), 0
    
    def extract_links(self, html_content: str, base_url: str) -> List[str]:
        """Extract all links from HTML content"""
        soup = BeautifulSoup(html_content, 'html.parser')
        links = []
        
        # Find all anchor tags
        for a_tag in soup.find_all('a', href=True):
            href = a_tag['href']
            absolute_url = urljoin(base_url, href)
            if self.is_valid_url(absolute_url):
                links.append(absolute_url)
        
        # Find all form actions
        for form in soup.find_all('form', action=True):
            action = form['action']
            absolute_url = urljoin(base_url, action)
            if self.is_valid_url(absolute_url):
                links.append(absolute_url)
        
        # Find all image sources that might be links
        for img in soup.find_all('img', src=True):
            src = img['src']
            absolute_url = urljoin(base_url, src)
            if self.is_valid_url(absolute_url):
                links.append(absolute_url)
        
        return list(set(links))  # Remove duplicates
    
    def analyze_page_content(self, html_content: str, url: str) -> Dict:
        """Analyze page content for completeness and quality"""
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Remove script and style elements
        for script in soup(["script", "style"]):
            script.decompose()
        
        # Get text content
        text_content = soup.get_text()
        
        # Analysis metrics
        analysis = {
            'url': url,
            'title': soup.title.string if soup.title else 'No title',
            'meta_description': '',
            'content_length': len(text_content.strip()),
            'has_navigation': bool(soup.find('nav') or soup.find('header')),
            'has_footer': bool(soup.find('footer')),
            'has_main_content': bool(soup.find('main') or soup.find('article') or soup.find('section')),
            'image_count': len(soup.find_all('img')),
            'form_count': len(soup.find_all('form')),
            'link_count': len(soup.find_all('a')),
            'headings': [],
            'content_issues': []
        }
        
        # Extract meta description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc:
            analysis['meta_description'] = meta_desc.get('content', '')
        
        # Extract headings
        for i in range(1, 7):
            headings = soup.find_all(f'h{i}')
            analysis['headings'].extend([h.get_text().strip() for h in headings])
        
        # Check for content issues
        if analysis['content_length'] < 100:
            analysis['content_issues'].append('Very short content')
        
        if not analysis['has_navigation']:
            analysis['content_issues'].append('Missing navigation')
        
        if not analysis['has_main_content']:
            analysis['content_issues'].append('Missing main content area')
        
        if analysis['image_count'] == 0:
            analysis['content_issues'].append('No images found')
        
        return analysis
    
    def analyze_page(self, url: str, depth: int = 0, max_depth: int = 5) -> None:
        """Analyze a single page and its links recursively"""
        if depth > max_depth or url in self.visited_urls:
            return
        
        self.visited_urls.add(url)
        self.total_pages += 1
        
        logging.info(f"🔍 Analyzing page {self.total_pages}: {url} (depth: {depth})")
        
        # Get page content
        success, content, status_code = self.get_page_content(url)
        
        if not success:
            self.broken_links.append({
                'url': url,
                'error': content,
                'status_code': status_code,
                'depth': depth
            })
            logging.error(f"❌ Failed to fetch {url}: {content}")
            return
        
        if status_code != 200:
            self.broken_links.append({
                'url': url,
                'error': f"HTTP {status_code}",
                'status_code': status_code,
                'depth': depth
            })
            logging.warning(f"⚠️  HTTP {status_code} for {url}")
            return
        
        # Analyze page content
        page_analysis = self.analyze_page_content(content, url)
        self.page_analysis[url] = page_analysis
        
        # Check for missing content
        if page_analysis['content_issues']:
            self.missing_content.append({
                'url': url,
                'issues': page_analysis['content_issues'],
                'depth': depth
            })
        
        # Extract and analyze links
        links = self.extract_links(content, url)
        self.link_hierarchy[url] = links
        self.total_links += len(links)
        
        # Recursively analyze linked pages
        for link in links:
            if link not in self.visited_urls:
                time.sleep(1)  # Be respectful to the server
                self.analyze_page(link, depth + 1, max_depth)
    
    def generate_report(self) -> Dict:
        """Generate comprehensive analysis report"""
        end_time = time.time()
        duration = end_time - self.start_time
        
        report = {
            'analysis_summary': {
                'base_url': self.base_url,
                'total_pages_analyzed': self.total_pages,
                'total_links_found': self.total_links,
                'analysis_duration_seconds': round(duration, 2),
                'start_time': time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(self.start_time)),
                'end_time': time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(end_time))
            },
            'broken_links': {
                'count': len(self.broken_links),
                'details': self.broken_links
            },
            'missing_content': {
                'count': len(self.missing_content),
                'details': self.missing_content
            },
            'working_links': {
                'count': len(self.working_links),
                'urls': self.working_links
            },
            'page_analysis': self.page_analysis,
            'link_hierarchy': dict(self.link_hierarchy),
            'recommendations': self.generate_recommendations()
        }
        
        return report
    
    def generate_recommendations(self) -> List[str]:
        """Generate actionable recommendations based on analysis"""
        recommendations = []
        
        if self.broken_links:
            recommendations.append(f"Fix {len(self.broken_links)} broken links to improve user experience")
        
        if self.missing_content:
            recommendations.append(f"Address {len(self.missing_content)} pages with missing content")
        
        # Content quality recommendations
        short_content_pages = [url for url, analysis in self.page_analysis.items() 
                             if analysis['content_length'] < 200]
        if short_content_pages:
            recommendations.append(f"Enhance content on {len(short_content_pages)} pages with minimal content")
        
        no_nav_pages = [url for url, analysis in self.page_analysis.items() 
                       if not analysis['has_navigation']]
        if no_nav_pages:
            recommendations.append(f"Add navigation to {len(no_nav_pages)} pages")
        
        no_images_pages = [url for url, analysis in self.page_analysis.items() 
                          if analysis['image_count'] == 0]
        if no_images_pages:
            recommendations.append(f"Consider adding images to {len(no_images_pages)} pages for better visual appeal")
        
        return recommendations
    
    def save_report(self, filename: str = 'zion-website-deep-analysis-report.json') -> None:
        """Save analysis report to file"""
        report = self.generate_report()
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False)
        
        logging.info(f"📊 Report saved to {filename}")
    
    def print_summary(self) -> None:
        """Print analysis summary to console"""
        report = self.generate_report()
        
        print("\n" + "="*80)
        print("🌐 ZION TECH GROUP WEBSITE DEEP ANALYSIS REPORT")
        print("="*80)
        
        summary = report['analysis_summary']
        print(f"📊 Analysis Summary:")
        print(f"   • Base URL: {summary['base_url']}")
        print(f"   • Total Pages Analyzed: {summary['total_pages_analyzed']}")
        print(f"   • Total Links Found: {summary['total_links_found']}")
        print(f"   • Analysis Duration: {summary['analysis_duration_seconds']} seconds")
        print(f"   • Start Time: {summary['start_time']}")
        print(f"   • End Time: {summary['end_time']}")
        
        print(f"\n🔗 Link Analysis:")
        print(f"   • Broken Links: {report['broken_links']['count']}")
        print(f"   • Missing Content Issues: {report['missing_content']['count']}")
        print(f"   • Working Links: {report['working_links']['count']}")
        
        if report['broken_links']['count'] > 0:
            print(f"\n❌ Broken Links Found:")
            for link in report['broken_links']['details'][:10]:  # Show first 10
                print(f"   • {link['url']} - {link['error']}")
            if len(report['broken_links']['details']) > 10:
                print(f"   ... and {len(report['broken_links']['details']) - 10} more")
        
        if report['missing_content']['count'] > 0:
            print(f"\n⚠️  Content Issues Found:")
            for issue in report['missing_content']['details'][:10]:  # Show first 10
                print(f"   • {issue['url']} - {', '.join(issue['issues'])}")
            print(f"   ... and {len(report['missing_content']['details']) - 10} more")
        
        if report['recommendations']:
            print(f"\n💡 Recommendations:")
            for rec in report['recommendations']:
                print(f"   • {rec}")
        
        print("\n" + "="*80)

def main():
    """Main execution function"""
    print("🚀 Starting Zion Tech Group Website Deep Analysis...")
    print("This will analyze all pages, links, and content comprehensively.")
    print("Please be patient as this may take several minutes.\n")
    
    # Initialize analyzer
    analyzer = ZionWebsiteAnalyzer()
    
    try:
        # Start analysis from the main page
        analyzer.analyze_page(analyzer.base_url)
        
        # Generate and save report
        analyzer.save_report()
        
        # Print summary
        analyzer.print_summary()
        
        print(f"\n✅ Analysis completed successfully!")
        print(f"📊 Detailed report saved to: zion-website-deep-analysis-report.json")
        print(f"📝 Log file saved to: zion-website-deep-analysis.log")
        
    except KeyboardInterrupt:
        print("\n⚠️  Analysis interrupted by user")
        analyzer.save_report('zion-website-deep-analysis-report-interrupted.json')
    except Exception as e:
        print(f"\n❌ Analysis failed with error: {e}")
        logging.error(f"Analysis failed: {e}")
        analyzer.save_report('zion-website-deep-analysis-report-error.json')

if __name__ == "__main__":
    main()