#!/usr/bin/env python3
"""
Website Analysis Script for Zion Tech Group
Analyzes routes, navigation links, and identifies potential issues
"""

import re
import json
from collections import defaultdict

# Extract all routes from App.tsx
routes = [
    '/', '/about', '/contact', '/blog', '/blog/:slug', '/faq', '/help', '/support',
    '/community', '/docs', '/webinars', '/white-papers', '/case-studies', '/training',
    '/accessibility', '/security', '/compliance', '/careers', '/team', '/press',
    '/privacy', '/terms', '/cookies', '/sitemap', '/signup', '/status', '/demo',
    '/search', '/developer-portal', '/onsite-support', '/pricing', '/pricing-2030',
    '/pricing-guide', '/services', '/services-catalog', '/services-overview',
    '/services-comparison', '/revolutionary-services-2030', '/comprehensive-services',
    '/revolutionary-services-showcase-2030', '/innovative-services-showcase-2025',
    '/comprehensive-services-landing-2025', '/innovative-services-showcase-2028',
    '/pricing-guide-2028', '/comprehensive-services-landing-2028', '/ai-services',
    '/it-services', '/micro-saas', '/request-quote', '/dashboard', '/login',
    '/marketplace', '/partners'
]

# Service routes
service_routes = [
    '/services/affiliate-marketing-tracker', '/services/uptime-sla-monitor',
    '/services/soc2-compliance-tracker', '/services/employee-scheduling-saas',
    '/services/ai-support-helpdesk', '/services/micro-saas-solutions',
    '/services/cloud-devops', '/services/digital-twin', '/services/data-analytics',
    '/services/iot-edge', '/services/blockchain-enterprise-solutions',
    '/services/healthcare-tech', '/services/sustainability',
    '/services/zero-trust-network-architecture', '/services/incident-response-platform',
    '/services/it-infrastructure', '/services/ai-business-intelligence',
    '/services/ai-sales-copilot', '/services/cloud-finops-optimizer',
    '/services/ai-compliance-assistant', '/services/ai-auto-email-responder',
    '/services/mobile-feedback-surveys', '/services/ai-compliance-copilot',
    '/services/llm-content-studio', '/services/finops-advisor',
    '/services/vendor-risk-management', '/services/ai-seo-optimizer',
    '/services/saas-churn-predictor', '/services/ai-incident-postmortems',
    '/services/ai-lead-scoring', '/services/website-ai-chatbot',
    '/services/rag-search', '/services/mlops-pipeline',
    '/services/ecommerce-personalization', '/services/returns-management',
    '/services/api-monitoring', '/services/gdpr-cookie-compliance',
    '/services/ai-proofreading-studio', '/services/digital-transformation',
    '/services/it-consulting', '/services/onsite-support', '/services/green-it',
    '/services/quantum-computing', '/services/space-tech',
    '/services/ai-cybersecurity-suite', '/services/quantum-ai-platform',
    '/services/ai-healthcare-analytics', '/services/ai-workflow-orchestrator',
    '/services/ai-data-governance', '/services/edge-computing-platform',
    '/services/ai-customer-success-platform', '/services/ai-business-intelligence-platform',
    '/services/ai-financial-trading-platform', '/services/ai-supply-chain-optimization',
    '/services/ai-hr-platform', '/services/ai-marketing-automation',
    '/services/ai-legal-research-platform', '/services/ai-education-platform'
]

all_routes = routes + service_routes

# Navigation links from header and footer
header_links = [
    '/', '/services', '/ai-services', '/it-services', '/micro-saas',
    '/pricing-guide', '/about', '/contact', '/services-catalog',
    '/services-comparison', '/request-quote', '/revolutionary-services-showcase-2030',
    '/innovative-services-showcase-2025', '/faq', '/blog', '/help', '/support'
]

footer_links = [
    '/revolutionary-services-2030', '/services/micro-saas-solutions',
    '/services/cloud-finops-optimizer', '/services/finops-advisor',
    '/services/edge-computing-platform', '/services/quantum-ai-platform',
    '/services/iot-edge', '/services/digital-twin', '/services/blockchain-enterprise-solutions',
    '/services/healthcare-tech', '/services/sustainability', '/services/green-it',
    '/services/quantum-computing', '/services/space-tech', '/about', '/contact',
    '/blog', '/faq', '/careers', '/team', '/press', '/privacy', '/terms',
    '/cookies', '/help', '/support', '/docs', '/community', '/webinars',
    '/white-papers', '/case-studies', '/training'
]

def analyze_website():
    print("=== ZION TECH GROUP WEBSITE ANALYSIS ===\n")
    
    # Check for broken links
    broken_links = []
    all_nav_links = set(header_links + footer_links)
    
    print("1. BROKEN LINK ANALYSIS:")
    print("-" * 40)
    
    for link in all_nav_links:
        if link not in all_routes:
            broken_links.append(link)
    
    if broken_links:
        print("❌ BROKEN LINKS FOUND:")
        for link in broken_links:
            print(f"  - {link}")
    else:
        print("✅ No broken links found in navigation!")
    
    print(f"\n2. ROUTE STATISTICS:")
    print("-" * 40)
    print(f"Total routes defined: {len(all_routes)}")
    print(f"Main page routes: {len(routes)}")
    print(f"Service routes: {len(service_routes)}")
    print(f"Navigation links: {len(all_nav_links)}")
    
    print(f"\n3. MISSING ROUTES (if any):")
    print("-" * 40)
    missing_routes = set(all_nav_links) - set(all_routes)
    if missing_routes:
        for route in sorted(missing_routes):
            print(f"  - {route}")
    else:
        print("✅ All navigation links have corresponding routes!")
    
    print(f"\n4. ORPHANED ROUTES:")
    print("-" * 40)
    orphaned = set(all_routes) - set(all_nav_links)
    if orphaned:
        print(f"Found {len(orphaned)} routes not in navigation:")
        for route in sorted(orphaned):
            if not route.startswith('/blog/') and route != '*':
                print(f"  - {route}")
    
    print(f"\n5. RECOMMENDATIONS:")
    print("-" * 40)
    print("✅ Fix any broken links identified above")
    print("✅ Add missing routes to navigation if needed")
    print("✅ Consider organizing services in categories")
    print("✅ Implement breadcrumb navigation")
    print("✅ Add sitemap.xml generation")
    
    return {
        'broken_links': broken_links,
        'total_routes': len(all_routes),
        'missing_routes': list(missing_routes),
        'orphaned_routes': list(orphaned)
    }

if __name__ == "__main__":
    results = analyze_website()
