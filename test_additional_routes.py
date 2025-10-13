#!/usr/bin/env python3
"""
Test additional routes that weren't included in the initial analysis.
"""

import requests
import time
import json

def test_routes():
    """Test additional routes from App.tsx."""
    base_url = "https://ziontechgroup.com"
    
    # Additional routes from App.tsx
    additional_routes = [
        # Additional AI Services
        "/ai-chatbot-builder",
        "/ai-code-assistant", 
        "/ai-design-studio",
        "/ai-computer-vision",
        "/ai-conversational-ai",
        "/ai-crm",
        "/ai-customer-insights",
        "/ai-data-visualization",
        "/ai-devops-automation",
        "/ai-document-intelligence",
        
        # Additional IT Services
        "/cloud-consulting",
        "/data-center-solutions",
        "/disaster-recovery",
        "/it-support",
        "/managed-services",
        "/security-audit",
        "/technology-consulting",
        
        # Zion AI Services
        "/zion-ai-video-generator",
        "/zion-ai-invoice-generator",
        "/zion-ai-customer-insights",
        "/zion-ai-voice-assistant-pro",
        "/zion-ai-code-reviewer",
        "/zion-ai-contract-analyzer",
        "/zion-ai-supply-chain-optimizer",
        "/zion-ai-translator-pro",
        "/zion-ai-data-cleaner",
    ]
    
    results = {
        'working': [],
        'broken': [],
        'missing': []
    }
    
    session = requests.Session()
    session.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    })
    
    for route in additional_routes:
        url = base_url + route
        try:
            response = session.get(url, timeout=10, allow_redirects=True)
            if response.status_code == 200:
                results['working'].append(route)
                print(f"✓ {route} - Working")
            else:
                results['broken'].append({
                    'route': route,
                    'status': response.status_code
                })
                print(f"✗ {route} - Status: {response.status_code}")
        except Exception as e:
            results['missing'].append({
                'route': route,
                'error': str(e)
            })
            print(f"✗ {route} - Error: {str(e)}")
        
        time.sleep(0.5)  # Be respectful to the server
    
    return results

def main():
    print("Testing additional routes from App.tsx...")
    results = test_routes()
    
    print(f"\nResults:")
    print(f"Working: {len(results['working'])}")
    print(f"Broken: {len(results['broken'])}")
    print(f"Missing: {len(results['missing'])}")
    
    if results['broken']:
        print("\nBroken routes:")
        for route in results['broken']:
            print(f"  - {route['route']} (Status: {route['status']})")
    
    if results['missing']:
        print("\nMissing routes:")
        for route in results['missing']:
            print(f"  - {route['route']} (Error: {route['error']})")
    
    # Save results
    with open('additional_routes_test.json', 'w') as f:
        json.dump(results, f, indent=2)
    
    print(f"\nDetailed results saved to: additional_routes_test.json")

if __name__ == "__main__":
    main()