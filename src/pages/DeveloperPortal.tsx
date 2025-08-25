import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

<<<<<<< HEAD
export default function DeveloperPortal() {
  return (
    <>
      <Helmet>
        <title>Developer Portal - Zion Tech Group</title>
        <meta name="description" content="Access Zion Tech Group's developer resources, API documentation, SDKs, and tools to build powerful applications and integrations." />
        <meta name="keywords" content="developer portal, API documentation, SDKs, developer tools, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/developers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Developer</span> Portal
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Build the future with Zion Tech Group's comprehensive developer resources. 
              Access APIs, SDKs, documentation, and tools to create powerful applications.
            </p>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Quick Start</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Terminal className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">1. Get API Keys</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Sign up and get your API keys to start building with Zion's platform.
                </p>
                <Link to="/developers/api-keys" className="text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group">
                  Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">2. Read Documentation</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Explore our comprehensive API documentation and integration guides.
                </p>
                <Link to="/developers/docs" className="text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group">
                  View Docs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">3. Start Building</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Use our SDKs and tools to build your first integration or application.
                </p>
                <Link to="/developers/sdks" className="text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group">
                  Explore SDKs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Developer Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <FileCode className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">API Reference</h3>
                <p className="text-zion-slate-light mb-4">
                  Complete API documentation with examples, endpoints, and response formats.
                </p>
                <Link to="/developers/api-reference" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  View API Docs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Code className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">SDKs & Libraries</h3>
                <p className="text-zion-slate-light mb-4">
                  Official SDKs for popular programming languages and frameworks.
                </p>
                <Link to="/developers/sdks" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Browse SDKs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <BookOpen className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Tutorials</h3>
                <p className="text-zion-slate-light mb-4">
                  Step-by-step guides and tutorials to help you get started quickly.
                </p>
                <Link to="/developers/tutorials" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Start Learning <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Database className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Code Samples</h3>
                <p className="text-zion-slate-light mb-4">
                  Ready-to-use code examples and sample applications.
                </p>
                <Link to="/developers/code-samples" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  View Samples <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Shield className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Authentication</h3>
                <p className="text-zion-slate-light mb-4">
                  Learn about our authentication methods and security best practices.
                </p>
                <Link to="/developers/auth" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Security Guide <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Users className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Community</h3>
                <p className="text-zion-slate-light mb-4">
                  Connect with other developers and get help from our community.
                </p>
                <Link to="/developers/community" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Join Community <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* API Categories */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">API Categories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
                <h3 className="text-2xl font-bold text-white mb-4">Marketplace APIs</h3>
                <p className="text-zion-slate-light mb-6">
                  Access our marketplace data, search products and services, manage listings, and process transactions.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Product & Service Management
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Search & Discovery
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Order Processing
                  </div>
                </div>
                <Link to="/developers/marketplace-apis" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Explore Marketplace APIs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
                <h3 className="text-2xl font-bold text-white mb-4">Talent APIs</h3>
                <p className="text-zion-slate-light mb-6">
                  Integrate with our talent platform to find, hire, and manage tech professionals.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Talent Search & Matching
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Profile Management
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Hiring Workflows
                  </div>
                </div>
                <Link to="/developers/talent-apis" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Explore Talent APIs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-zion-blue-light/20 rounded-2xl p-12 border border-zion-purple/30 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-zion-slate-light mb-8">
                Join thousands of developers building the future with Zion Tech Group's platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/developers/signup"
                  className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Get Developer Account
                </Link>
                <Link
                  to="/developers/contact"
                  className="bg-transparent hover:bg-zion-purple/20 text-zion-cyan border-2 border-zion-cyan font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Contact Developer Support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  BookOpen, 
  Zap, 
  Shield, 
  Users, 
  MessageSquare, 
  Github, 
  ExternalLink,
  Terminal,
  Database,
  Webhook,
  Key,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DeveloperPortal() {
  const apiFeatures = [
    {
      title: 'RESTful APIs',
      description: 'Clean, intuitive REST APIs for all major platform features',
      icon: Code,
      status: 'Stable',
      docs: '/api-docs'
    },
    {
      title: 'Webhooks',
      description: 'Real-time notifications for platform events and updates',
      icon: Webhook,
      status: 'Beta',
      docs: '/api-docs/webhooks'
    },
    {
      title: 'Authentication',
      description: 'Secure OAuth 2.0 and API key authentication',
      icon: Key,
      status: 'Stable',
      docs: '/api-docs/auth'
    },
    {
      title: 'SDKs & Libraries',
      description: 'Official SDKs for JavaScript, Python, and more',
      icon: Terminal,
      status: 'Stable',
      docs: '/api-docs/sdks'
    }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: 'Get API Keys',
      description: 'Sign up and generate your API keys from the dashboard',
      action: 'Get Started'
    },
    {
      step: 2,
      title: 'Read Documentation',
      description: 'Explore our comprehensive API documentation and guides',
      action: 'View Docs'
    },
    {
      step: 3,
      title: 'Test Endpoints',
      description: 'Use our interactive API playground to test endpoints',
      action: 'Try API'
    },
    {
      step: 4,
      title: 'Build & Deploy',
      description: 'Integrate our APIs into your applications',
      action: 'View Examples'
    }
  ];

  const resources = [
    {
      title: 'API Reference',
      description: 'Complete API endpoint documentation with examples',
      icon: BookOpen,
      href: '/api-docs',
      badge: 'Complete'
    },
    {
      title: 'Getting Started Guide',
      description: 'Step-by-step tutorial for new developers',
      icon: Zap,
      href: '/api-docs/getting-started',
      badge: 'Beginner'
    },
    {
      title: 'Code Samples',
      description: 'Ready-to-use code examples in multiple languages',
      icon: Code,
      href: '/api-docs/samples',
      badge: 'Examples'
    },
    {
      title: 'SDK Downloads',
      description: 'Official SDKs and client libraries',
      icon: Terminal,
      href: '/api-docs/sdks',
      badge: 'Download'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and get help',
      icon: Users,
      href: '/community',
      badge: 'Community'
    },
    {
      title: 'Support & Help',
      description: 'Technical support and troubleshooting guides',
      icon: MessageSquare,
      href: '/help',
      badge: 'Support'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Developer Portal | Zion Tech Group" 
        description="Build powerful applications with Zion Tech Group's comprehensive APIs, SDKs, and developer tools."
        keywords="developer portal, API, SDK, documentation, Zion Tech Group, developers"
        canonical="https://ziontechgroup.com/developers"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Code className="h-16 w-16 text-zion-cyan" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Developer Portal</h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-6">
            Build powerful applications and integrations with our comprehensive APIs, SDKs, and developer tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple/90">
              <Link to="/api-docs">
                <BookOpen className="h-5 w-5 mr-2" />
                View API Documentation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* API Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Powerful APIs & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.title} className="border-zion-blue-light hover:bg-zion-blue-dark/50 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <IconComponent className="h-8 w-8 text-zion-cyan" />
                      <Badge variant={feature.status === 'Stable' ? 'default' : 'secondary'}>
                        {feature.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light mb-4">
                      {feature.description}
                    </CardDescription>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to={feature.docs}>
                        View Docs
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Start */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Get Started in 4 Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartSteps.map((step) => (
              <Card key={step.step} className="border-zion-blue-light text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <CardTitle className="text-white text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light mb-4">
                    {step.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full">
                    {step.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Developer Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.title} className="border-zion-blue-light hover:bg-zion-blue-dark/50 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <IconComponent className="h-6 w-6 text-zion-cyan" />
                      <Badge variant="outline" className="text-xs">
                        {resource.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light mb-4">
                      {resource.description}
                    </CardDescription>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to={resource.href}>
                        {resource.badge === 'Download' ? 'Download' : 'Learn More'}
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* API Status */}
        <Card className="mb-16 border-zion-blue-light">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Shield className="h-6 w-6 mr-2 text-zion-cyan" />
              API Status & Performance
            </CardTitle>
            <CardDescription className="text-zion-slate-light">
              Real-time status of our APIs and services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">&lt;100ms</div>
                <div className="text-zion-slate-light">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
                <div className="text-zion-slate-light">Monitoring</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button asChild variant="outline">
                <a href="/api-status" target="_blank" rel="noopener noreferrer">
                  View Detailed Status
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Get Help */}
        <Card className="border-zion-blue-light bg-zion-blue-dark/50">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-2xl">Need Developer Support?</CardTitle>
            <CardDescription className="text-zion-slate-light">
              Our developer support team is here to help you build amazing applications.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button asChild className="bg-zion-purple hover:bg-zion-purple/90">
                <Link to="/contact">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Contact Developer Support
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="mailto:dev-support@ziontechgroup.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Support
                </a>
              </Button>
            </div>
            <p className="text-zion-slate-light text-sm">
              Response time: Usually within 4 hours for developer inquiries
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
