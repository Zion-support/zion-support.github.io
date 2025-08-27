import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const Sitemap: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Careers', href: '/careers' },
        { name: 'Team', href: '/team' },
        { name: 'Partners', href: '/partners' },
        { name: 'News', href: '/news' },
        { name: 'Events', href: '/events' },
        { name: 'Blog', href: '/blog' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Help Center', href: '/help' },
        { name: 'Request Quote', href: '/request-quote' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Research & Development', href: '/research-development' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'Sitemap', href: '/sitemap' }
      ]
    },
    {
      title: 'Services Overview',
      links: [
        { name: 'All Services', href: '/services' },
        { name: '2026 Services', href: '/services2026' },
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' }
      ]
    },
    {
      title: 'AI & Analytics Services',
      links: [
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Data Analytics', href: '/services/ai-data-analytics' },
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },
        { name: 'AI Project Manager', href: '/services/ai-project-manager' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI SEO Optimizer', href: '/services/ai-seo' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation' },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform' },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity' }
      ]
    },
    {
      title: 'Quantum & Advanced Tech',
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology' },
        { name: 'Space Technology', href: '/services/space-tech' }
      ]
    },
    {
      title: 'IT & Infrastructure',
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'IT Helpdesk', href: '/services/it-helpdesk' },
        { name: 'IT Consulting', href: '/services/it-consulting' },
        { name: 'Green IT Solutions', href: '/green-it' },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access' }
      ]
    },
    {
      title: 'Business Solutions',
      links: [
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
        { name: 'Returns Management', href: '/services/returns-management' },
        { name: 'Email Sequencer', href: '/services/email-sequencer' },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription' },
        { name: 'Micro CRM', href: '/services/micro-crm' },
        { name: 'Website Analytics', href: '/services/website-analytics' },
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking' },
        { name: 'Mobile Survey Platform', href: '/services/mobile-survey' },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk' },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal' },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys' }
      ]
    },
    {
      title: 'Marketplace & Resources',
      links: [
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Marketplace Products', href: '/marketplace/products' },
        { name: 'Marketplace Talent', href: '/marketplace/talent' },
        { name: 'Marketplace Equipment', href: '/marketplace/equipment' },
        { name: 'Marketplace Services', href: '/marketplace/services' },
        { name: 'Talent Solutions', href: '/talent' },
        { name: 'Equipment Services', href: '/equipment' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Developer Portal', href: '/developers' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Training', href: '/training' },
        { name: 'Support', href: '/support' }
      ]
    },
    {
      title: 'Legal & Support',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Security', href: '/security' },
        { name: 'Status', href: '/status' },
        { name: 'System Status', href: '/system-status' },
        { name: 'Accessibility', href: '/accessibility' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group website. Find all our services, pages, and resources organized by category."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Sitemap</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Complete overview of all pages and services available on Zion Tech Group. 
            Navigate through our comprehensive technology solutions and resources.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {sitemapSections.map((section, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Need Help Finding Something?</h3>
            <p className="text-slate-300 mb-6">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/help"
                className="px-6 py-3 border border-cyan-400/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
