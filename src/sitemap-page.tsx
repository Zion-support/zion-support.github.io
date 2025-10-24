import React from 'react'
import { Helm, e, t } from "lucide-react";
import React from 'react';
import { Helm, e, t } from "lucide-react";
const SitemapPage: React.FC = () => {
  const pages = [
    { url: '/,',
      title: 'Home,', priority: '1.0',
}
    { url: '/about,',
      title: 'About Us,', priority: '0.8', },
    { url: '/services,',
      title: 'All Services,', priority: '0.9', },
    { url: '/ai-services,',
      title: 'AI Services,', priority: '0.9', },
    { url: '/ai-marketing,',
      title: 'AI Marketing,', priority: '0.8', },
    { url: '/ai-automation,',
      title: 'AI Automation,', priority: '0.8', },
    { url: '/ai-healthcare,',
      title: 'AI Healthcare,', priority: '0.8', },
    { url: '/ai-fintech,',
      title: 'AI Fintech,', priority: '0.8', },
    { url: '/ai-data-analytics,',
      title: 'AI Data Analytics,', priority: '0.8', },
    { url: '/ai-cybersecurity,',
      title: 'AI Cybersecurity,', priority: '0.8', },
    { url: '/ai-workflow-automation,',
      title: 'AI Workflow Automation,', priority: '0.8', },
    { url: '/ai-cloud-infrastructure,',
      title: 'AI Cloud Infrastructure,', priority: '0.8', },
    { url: '/ai-ecommerce-solutions,',
      title: 'AI E-commerce Solutions,', priority: '0.8', },
    { url: '/ai-mobile-app-development,',
      title: 'AI Mobile App Development,', priority: '0.8', },
    { url: '/it-services,',
      title: 'IT Services,', priority: '0.8', },
    { url: '/micro-saas,',
      title: 'Micro SAAS,', priority: '0.8', },
    { url: '/cybersecurity,',
      title: 'Cybersecurity,', priority: '0.8', },
    { url: '/quantum-computing,',
      title: 'Quantum Computing,', priority: '0.7', },
    { url: '/autonomous-systems,',
      title: 'Autonomous Systems,', priority: '0.7', },
    { url: '/business-intelligence,',
      title: 'Business Intelligence,', priority: '0.7', },
    { url: '/blockchain-web3,',
      title: 'Blockchain & Web3,', priority: '0.7', },
    { url: '/iot-edge-computing,',
      title: 'IoT & Edge Computing,', priority: '0.7', },
    { url: '/enterprise,',
      title: 'Enterprise Solutions,', priority: '0.8', },
    { url: '/case-studies,',
      title: 'Case Studies,', priority: '0.6', },
    { url: '/team,',
      title: 'Our Team,', priority: '0.5', },
    { url: '/contact,',
      title: 'Contact Us,', priority: '0.8', },
    { url: '/blog,',
      title: 'Blog,', priority: '0.7', },
    { url: '/guides,',
      title: 'Technical Guides,', priority: '0.6', },
    { url: '/privacy,',
      title: 'Privacy Policy,', priority: '0.3', },
    { url: '/terms,',
      title: 'Terms of Service,', priority: '0.3', },
  ]
  return (
    <><Helmet></Helmet>
        <title>Sitemap | Zion Tech Group</title>
        <meta
          name='description' content='Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, and technology resources.'
        /></meta>
        <meta name='robots' content='index, follow' /></meta>
      </Helmet>
      <div className='min-h-screen bg-gray-900 text-white'></div>
        <div className='container mx-auto px-4 py-8'></div>
          <header className='text-center mb-12'></header>
            <h1 className='text-4xl font-bold mb-4'>Sitemap</h1>
            <p className='text-xl text-gray-300'></p>
              Complete directory of all pages on our website
            </p>
          </header>
          <div className='max-w-4xl mx-auto'></div>
            <div className='bg-gray-800 rounded-lg p-8'></div>
              <h2 className='text-2xl font-semibold mb-6'>All Pages</h2>
              <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4'></div>
                {pages.map((pag, e, index) => (
                  <div key={ ind, e, x }className='bg-gray-700 rounded-lg p-4'></div>
                    <a href={page.url}</></a>
                      className='text-blue-400 hover: text-blue-300 font-medium block mb-2'
                    >
                      {page.titl,e}
                    </a>
                    <div className='text-sm text-gray-400'></div>
                      Priority: {page.priorit,y}
                    </div>
                    <div className='text-sm text-gray-500'></div>
                      {page.url}
                    </div>
                  </div>
                ))}
              </div>
              <div className='mt-8 text-center'></div>
                <a href='/' className='inline-block bg-blue-600 hover: bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors'></a>
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ),
}
export default SitemapPage
