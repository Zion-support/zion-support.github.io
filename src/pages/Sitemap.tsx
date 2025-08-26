import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowRight, ExternalLink, Home, Users, Briefcase, Settings, Shield, Cloud, Database, Brain, Building2 } from 'lucide-react';

const Sitemap = () => {
  const mainPages = [
    { path: '/', title: 'Home', description: 'Main landing page', icon: Home },
    { path: '/match', title: 'AI Talent Matcher', description: 'Find the perfect talent match', icon: Brain },
    { path: '/talent', title: 'Talent Directory', description: 'Browse available talent', icon: Users },
    { path: '/services', title: 'Services', description: 'Overview of all services', icon: Briefcase },
    { path: '/contact', title: 'Contact', description: 'Get in touch with us', icon: ExternalLink },
    { path: '/partners', title: 'Partners', description: 'Our business partners', icon: Users },
    { path: '/blog', title: 'Blog', description: 'Latest insights and updates', icon: ExternalLink },
  ];

  const servicePages = [
    { path: '/ai-solutions', title: 'AI Solutions', description: 'Artificial Intelligence services', icon: Brain },
    { path: '/cybersecurity', title: 'Cybersecurity', description: 'Security and protection services', icon: Shield },
    { path: '/cloud-devops', title: 'Cloud & DevOps', description: 'Cloud infrastructure and operations', icon: Cloud },
    { path: '/data-analytics', title: 'Data Analytics', description: 'Data insights and analysis', icon: Database },
    { path: '/enterprise-solutions', title: 'Enterprise Solutions', description: 'Large-scale business solutions', icon: Building2 },
    { path: '/it-onsite-services', title: 'IT Onsite Services', description: 'On-site technical support', icon: Settings },
    { path: '/micro-saas-services', title: 'Micro SaaS Services', description: 'Small business software solutions', icon: Briefcase },
  ];

  const additionalPages = [
    { path: '/enhanced-services', title: 'Enhanced Services', description: 'Premium service offerings' },
    { path: '/equipment', title: 'Equipment', description: 'Hardware and equipment rentals' },
    { path: '/analytics', title: 'Analytics Dashboard', description: 'Performance metrics and insights' },
    { path: '/mobile-launch', title: 'Mobile App', description: 'Download our mobile application' },
    { path: '/community', title: 'Community', description: 'Join our community' },
    { path: '/categories', title: 'Categories', description: 'Browse service categories' },
    { path: '/zion-hire-ai', title: 'Zion Hire AI', description: 'AI-powered hiring platform' },
    { path: '/request-quote', title: 'Request Quote', description: 'Get a custom quote' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through all the pages and services available on our platform. 
            Find exactly what you're looking for with our comprehensive site structure.
          </p>
        </div>

        {/* Main Pages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Home className="w-8 h-8 text-blue-400" />
            Main Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page) => {
              const IconComponent = page.icon;
              return (
                <Card key={page.path} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                      <CardTitle className="text-white">{page.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300">
                      {page.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={page.path}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Visit Page
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Service Pages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-green-400" />
            Service Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePages.map((page) => {
              const IconComponent = page.icon;
              return (
                <Card key={page.path} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-6 h-6 text-green-400" />
                      <CardTitle className="text-white">{page.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300">
                      {page.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={page.path}>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        View Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Pages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <ExternalLink className="w-8 h-8 text-purple-400" />
            Additional Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalPages.map((page) => (
              <Card key={page.path} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white">{page.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {page.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={page.path}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Explore
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Quick Navigation</CardTitle>
              <CardDescription className="text-gray-300">
                Use these quick links to jump to the most important sections
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Link to="/services">
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    All Services
                  </Button>
                </Link>
                <Link to="/talent">
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    Find Talent
                  </Button>
                </Link>
                <Link to="/match">
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    AI Matcher
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;