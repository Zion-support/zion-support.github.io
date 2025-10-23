import { Helmet } from 'lucide-react';
import {Helmet} from 'lucide-react';
import React from 'react';

constSitemapPage: React.FC= () =>{constpages= [
    { url: '/', title: 'Home', priority: '1.0'},
    {url: '/about', title: 'About Us', priority: '0.8'},
    {url: '/services', title: 'All Services', priority: '0.9'},
    {url: '/ai-services', title: 'AI Services', priority: '0.9'},
    {url: '/ai-marketing', title: 'AI Marketing', priority: '0.8'},
    {url: '/ai-automation', title: 'AI Automation', priority: '0.8'},
    {url: '/ai-healthcare', title: 'AI Healthcare', priority: '0.8'},
    {url: '/ai-fintech', title: 'AI Fintech', priority: '0.8'},
    {url: '/ai-data-analytics', title: 'AI Data Analytics', priority: '0.8'},
    {url: '/ai-cybersecurity', title: 'AI Cybersecurity', priority: '0.8'},
    {url: '/ai-workflow-automation', title: 'AI Workflow Automation', priority: '0.8'},
    {url: '/ai-cloud-infrastructure', title: 'AI Cloud Infrastructure', priority: '0.8'},
    {url: '/ai-ecommerce-solutions', title: 'AI E-commerce Solutions', priority: '0.8'},
    {url: '/ai-mobile-app-development', title: 'AI Mobile App Development', priority: '0.8'},
    {url: '/it-services', title: 'IT Services', priority: '0.8'},
    {url: '/micro-saas', title: 'Micro SAAS', priority: '0.8'},
    {url: '/cybersecurity', title: 'Cybersecurity', priority: '0.8'},
    {url: '/quantum-computing', title: 'Quantum Computing', priority: '0.7'},
    {url: '/autonomous-systems', title: 'Autonomous Systems', priority: '0.7'},
    {url: '/business-intelligence', title: 'Business Intelligence', priority: '0.7'},
    {url: '/blockchain-web3', title: 'Blockchain & Web3', priority: '0.7'},
    {url: '/iot-edge-computing', title: 'IoT & Edge Computing', priority: '0.7'},
    {url: '/enterprise', title: 'Enterprise Solutions', priority: '0.8'},
    {url: '/case-studies', title: 'Case Studies', priority: '0.6'},
    {url: '/team', title: 'Our Team', priority: '0.5'},
    {url: '/contact', title: 'Contact Us', priority: '0.8'},
    {url: '/blog', title: 'Blog', priority: '0.7'},
    {url: '/guides', title: 'Technical Guides', priority: '0.6'},
    {url: '/privacy', title: 'Privacy Policy', priority: '0.3'},
    {url: '/terms', title: 'Terms of Service', priority: '0.3'},
  ];
  return (
  <><Helme t><titl e>Sitemap | ZionTechGroup</titl><metaname="description"
         content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, and technologyresources."
        /><metaname="robots"content="index,follow" /></Helme><divclassName="min-h-screen bg-gray-900text-white"><divclassName="container mx-autopx-4py-8"><headerclassName="text-centermb-12"><h1className="text-4 xlfont-boldmb-4">Sitemap</h><spanclassName="text-xltext-gray-300"></spa></className="text-xltext-gray-300">Complete directory of all pages on our website
          </p></heade><divclassName="max-w-4xlmx-auto"><divclassName="bg-gray-800rounded-lgp-8"><h2className="text-2 xlfont-semiboldmb-6">AllPages</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-4">{pages.map((pageindex) => (
               <divkey={index}className="bg-gray-700rounded-lgp-4"><ahref={page.url}
                     className="text-blue-400 hover:text-blue-300font-mediumblockmb-2"
                    >{page.title}
                  </a><divclassName="text-smtext-gray-400">Priority: {page.priority}
                  </di><divclassName="text-smtext-gray-500">{page.url}
                  </di></di>))}
            </di><divclassName="mt-8text-center"><ahref="/"
                 className="inline-block bg-blue-600 hover:bg-blue-700text-white font-semibold py-2 px-6rounded-lgtransition-colors"
                >Back to Home
              </a></di></di></di></di></di></>
  );
};
export default SitemapPage;
