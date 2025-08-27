import React from 'react';
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
  TrendingUp
} from 'lucide-react';

export default function CybersecurityServicesPage() {
  const services = [
    {
      title: "Zero Trust Security Framework",
      description: "Implement enterprise-grade security with our comprehensive zero trust architecture",
      features: ["Identity verification", "Continuous monitoring", "Threat detection", "Compliance reporting"],
      price: "From $3,000/month",
      icon: Shield
    },
    {
      title: "Advanced Threat Detection",
      description: "AI-powered security monitoring and real-time threat response",
      features: ["24/7 monitoring", "AI threat analysis", "Automated response", "Incident management"],
      price: "From $2,500/month",
      icon: Eye
    },
    {
      title: "Security Compliance & Auditing",
      description: "Ensure your organization meets industry security standards and regulations",
      features: ["SOC2 compliance", "GDPR compliance", "Regular audits", "Risk assessment"],
      price: "From $4,000/month",
      icon: CheckCircle
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC2 compliance and 24/7 monitoring"
    },
    {
      icon: Brain,
      title: "AI-Powered Protection",
      description: "Advanced threat detection using machine learning algorithms"
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Comprehensive network protection and firewall management"
    },
    {
      icon: Users,
      title: "Access Control",
      description: "Secure user authentication and role-based permissions"
    }
  ];

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
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Security?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine advanced technology with proven expertise to deliver security that exceeds expectations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-lg w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions designed to protect your business from all angles
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-gradient-to-br from-zinc-800 to-zinc-900 border-zinc-700">
                  <CardHeader>
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-lg w-16 h-16 mb-4 flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-2xl font-bold text-red-400 mb-4">
                      {service.price}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't wait until it's too late. Get a comprehensive security assessment and protect your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Security Assessment
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Security Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
