import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Users, 
  Globe, 
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Network,
  Server,
  Database,
  Key,
  Monitor,
  TrendingUp,
  Clock,
  Bot,
  Sparkles
} from 'lucide-react';
import { ENHANCED_SERVICES } from '@/data/enhancedServices';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';
import { TrustedBySection } from '@/components/TrustedBySection';

// Filter cybersecurity services
const CYBERSECURITY_SERVICES = ENHANCED_SERVICES.filter(service => 
  service.category.includes('Cybersecurity') || 
  service.category.includes('Security') ||
  service.category.includes('Zero Trust')
);

const SECURITY_SERVICE_CATEGORIES = [
  {
    id: 'threat-detection',
    name: 'Threat Detection & Response',
    description: 'AI-powered security monitoring and incident response',
    icon: Eye,
    services: CYBERSECURITY_SERVICES.filter(s => s.title.includes('Threat Detection'))
  },
  {
    id: 'zero-trust',
    name: 'Zero Trust Security',
    description: 'Identity verification and access management',
    icon: Lock,
    services: CYBERSECURITY_SERVICES.filter(s => s.title.includes('Zero Trust'))
  }
];

export default function CybersecurityServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (category: string) => {
    const categoryData = SECURITY_SERVICE_CATEGORIES.find(cat => cat.id === category);
    return categoryData?.icon || Shield;
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time': return 'One-time';
      case 'monthly': return 'Monthly';
      case 'hourly': return 'Hourly';
      case 'project-based': return 'Project-based';
      default: return model;
    }
  };

  return (
    <>
      <SEOHead 
        title="Cybersecurity Services - Zion Tech Group"
        description="Comprehensive cybersecurity solutions including zero trust security, threat detection, and compliance services to protect your business."
        keywords={['cybersecurity', 'security services', 'threat detection', 'compliance', 'zero trust']}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Cybersecurity Services",
          "description": "Comprehensive cybersecurity solutions",
          "url": "https://ziontechgroup.com/services/cybersecurity",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          }
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
        {/* Hero Section */}
        <section className="py-32 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-40 right-20 w-24 h-24 bg-orange-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-40 left-20 w-20 h-20 bg-red-600/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                Cybersecurity
              </span>
              <br />
              <span className="text-white">That Never Sleeps</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Protect your business with enterprise-grade cybersecurity solutions. Our AI-powered security 
              platform provides 24/7 protection against evolving cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 text-lg">
                <Link to="/contact">Get Security Assessment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Security Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From threat detection to compliance management, we provide end-to-end cybersecurity protection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CYBERSECURITY_SERVICES.map((service, index) => (
                <Card key={index} className="bg-zinc-800/50 border-zinc-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-red-500/20 rounded-lg">
                        <Shield className="w-6 h-6 text-red-400" />
                      </div>
                      <Badge variant="secondary" className="bg-red-500/20 text-red-400 border-red-500/30">
                        {service.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Starting from</span>
                        <span className="text-2xl font-bold text-white">{service.pricing?.startingPrice || 'Contact Us'}</span>
                      </div>
                      <Button asChild className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                        <Link to={`/services/${service.slug}`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <TrustedBySection />

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-500/10 to-orange-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a comprehensive security assessment and discover how we can protect your digital assets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 text-lg">
                <Link to="/contact">Schedule Security Audit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                <Link to="/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
