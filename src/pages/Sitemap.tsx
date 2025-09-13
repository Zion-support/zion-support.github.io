import React from 'react';
import { SEO } from '../components/SEO';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card.js';
import { Badge } from '../components/ui/badge.js';
import { 
  Home, 
  ShoppingCart, 
  FileText, 
  MessageSquare, 
  HelpCircle,
  Globe,
  Phone, 
  Mail 
} from 'lucide-react';

interface SitemapSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  links: {
    title: string;
    href: string;
    description?: string;
  }[];
}

const Sitemap: React.FC = () => {
  const sitemapSections: SitemapSection[] = [
    {
      id: 'main',
      title: 'Main Pages',
      description: 'Core pages of our website',
      icon: <Home className="h-5 w-5" />,
      links: [
        {
          title: 'Home',
          href: '/',
          description: 'Our main landing page'
        },
        {
          title: 'About',
          href: '/about',
          description: 'Learn about our company and mission'
        },
        {
          title: 'Services',
          href: '/services',
          description: 'Explore our comprehensive service offerings'
        },
        {
          title: 'Contact',
          href: '/contact',
          description: 'Get in touch with our team'
        }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      description: 'Our comprehensive service offerings',
      icon: <ShoppingCart className="h-5 w-5" />,
      links: [
        {
          title: 'AI Services',
          href: '/ai-services',
          description: 'Advanced AI-powered solutions'
        },
        {
          title: 'IT Infrastructure',
          href: '/it-infrastructure',
          description: 'Robust IT infrastructure solutions'
        },
        {
          title: 'Cloud Solutions',
          href: '/cloud-solutions',
          description: 'Scalable cloud computing services'
        },
        {
          title: 'Cybersecurity',
          href: '/cybersecurity',
          description: 'Comprehensive security solutions'
        }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      description: 'Helpful resources and information',
      icon: <FileText className="h-5 w-5" />,
      links: [
        {
          title: 'Blog',
          href: '/blog',
          description: 'Latest insights and updates'
        },
        {
          title: 'Case Studies',
          href: '/case-studies',
          description: 'Success stories and implementations'
        },
        {
          title: 'Documentation',
          href: '/documentation',
          description: 'Technical documentation and guides'
        },
        {
          title: 'FAQ',
          href: '/faq',
          description: 'Frequently asked questions'
        }
      ]
    },
    {
      id: 'support',
      title: 'Support',
      description: 'Get help and support',
      icon: <HelpCircle className="h-5 w-5" />,
      links: [
        {
          title: 'Help Center',
          href: '/help',
          description: 'Comprehensive help and support'
        },
        {
          title: 'Contact Support',
          href: '/contact',
          description: 'Reach out to our support team'
        },
        {
          title: 'Status Page',
          href: '/status',
          description: 'Check system status and uptime'
        }
      ]
    },
    {
      id: 'legal',
      title: 'Legal',
      description: 'Legal information and policies',
      icon: <Globe className="h-5 w-5" />,
      links: [
        {
          title: 'Privacy Policy',
          href: '/privacy',
          description: 'How we protect your data'
        },
        {
          title: 'Terms of Service',
          href: '/terms',
          description: 'Terms and conditions'
        },
        {
          title: 'Cookie Policy',
          href: '/cookies',
          description: 'Cookie usage and preferences'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Navigate our website easily with our comprehensive sitemap. Find all pages, services, and resources in one place."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Site Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate our website easily with our comprehensive sitemap. 
            Find all pages, services, and resources in one organized place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapSections.map((section) => (
            <Card key={section.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-400">
                    {section.icon}
                  </div>
                  <CardTitle className="text-white text-xl">
                    {section.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.links.map((link, index) => (
                    <div key={index} className="group">
                      <a
                        href={link.href}
                        className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors group-hover:bg-slate-600/50"
                      >
                        <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                          {link.title}
                        </div>
                        {link.description && (
                          <div className="text-sm text-gray-400 mt-1">
                            {link.description}
                          </div>
                        )}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-slate-800/50 border-slate-700 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need Help Finding Something?
              </h2>
              <p className="text-gray-300 mb-6">
                Can&apos;t find what you&apos;re looking for? Our team is here to help you navigate our services and find the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Contact Us
                </a>
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
