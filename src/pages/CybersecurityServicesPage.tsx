import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  ArrowRight,
  Zap,
  Brain,
  CheckCircle
} from 'lucide-react';

export default function CybersecurityServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
      <SEOHead
        title="Cybersecurity Services - Enterprise-Grade Security Solutions"
        description="Protect your business with our comprehensive cybersecurity services. AI-powered threat detection, incident response, and compliance solutions."
        keywords="cybersecurity, security services, threat detection, incident response, compliance, enterprise security"
      />
      
      {/* Hero Section */}
      <section className="py-32 px-4 relative overflow-hidden">
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

      {/* Security Services */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Security Service Categories</h2>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your business from all angles
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer border-red-500/20">
              <CardHeader>
                <div className="bg-red-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-10 w-10 text-red-600" />
                </div>
                <CardTitle className="text-xl">Threat Detection & Response</CardTitle>
                <CardDescription>AI-powered security monitoring and incident response</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-red-500/20 text-red-600">
                  24/7 Monitoring
                </Badge>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer border-red-500/20">
              <CardHeader>
                <div className="bg-red-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-10 w-10 text-red-600" />
                </div>
                <CardTitle className="text-xl">Zero Trust Security</CardTitle>
                <CardDescription>Identity verification and access management</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-red-500/20 text-red-600">
                  Access Control
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Our Security Solutions?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our cybersecurity services provide comprehensive protection with cutting-edge technology and expert support
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Monitoring</h3>
              <p className="text-muted-foreground text-sm">
                Continuous threat detection and monitoring
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">AI-Powered Detection</h3>
              <p className="text-muted-foreground text-sm">
                Advanced machine learning for threat identification
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Compliance Ready</h3>
              <p className="text-muted-foreground text-sm">
                Meet SOC2, GDPR, HIPAA, and other compliance requirements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Rapid Response</h3>
              <p className="text-muted-foreground text-sm">
                Automated incident response and threat mitigation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}