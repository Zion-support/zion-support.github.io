import React, { useState } from "react"
import { Link } from "react-router-dom"
import { SEOHead } from "../components/seo/SEOHead"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {;
  Shield,;
  Lock,;
  Eye,;
  AlertTriangle,;
  Users,;
  Globe,;
  Phone,;
  Mail,;
  MapPin,;
  Star,;
  CheckCircle,;
  ArrowRight,;
  Zap,;
  Brain,;
  Network,;
  Server,;
  Database,;
  Key,;
  Monitor,;
  TrendingUp,;
  ShieldCheck,;
  FileText,;
  Clock,;
  DollarSign,;
  Code;
} from "lucide-react"
import { ENHANCED_SERVICES } from "@/data/enhancedServices"
import { COMPREHENSIVE_SERVICES } from "@/data/comprehensiveServices"
import { TrustedBySection } from "@/components/TrustedBySection"
import { QuoteFormSection } from "@/components/QuoteFormSection"
//[^;]*
const CYBERSECURITY_SERVICES = COMPREHENSIVE_SERVICES.filter(service =>;
  service.category === 'Cybersecurity'
),;
const SECURITY_SERVICE_CATEGORIES = [;
  {;
    id: 'threat-detection',name: 'Threat Detection & Response',description: 'AI-powered security monitoring and incident response',icon: Eye,services: CYBERSECURITY_SERVICES.filter(s => s.title.includes('Threat Detection'));
  };
  {;
    id: 'zero-trust',name: 'Zero Trust Security',description: 'Identity verification and access management',icon: Lock,services: CYBERSECURITY_SERVICES.filter(s => s.title.includes('Zero Trust'));
  };
];
export default function CybersecurityServicesPage() {;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  ;
  //[^;]*
  const securityTechnologies = [;
    'SIEM PlatformsEDR Solutions',;
    'Zero Trust NetworkIdentity Management',;
    'Threat IntelligenceVulnerability Management',;
    'Incident ResponseSecurity Automation'
  ],;

  const complianceStandards = [;
    'SOC 2 Type IIISO 27001',;
    'PCI DSSNIST Framework',;
    'GDPR ComplianceHIPAA Security',;
    'FedRAMPCIS Controls'
  ],;

  const threatIntelligence = [;
    'Dark Web MonitoringThreat Hunting',;
    'Malware AnalysisAPT Detection'
    'IOC ManagementThreat Modeling'
    'Risk AssessmentSecurity Metrics'
  ];
  const securityServices = [;
    {;
      id: 1,title: 'Threat Detection & Response',description: 'AI-powered security monitoring and incident response',category: 'Security',icon: '🛡️',features: ['Real-time monitoringAI threat detection', 'Incident response'],;
      price: 2500,currency: '$',duration: 'Monthly'
    };
    {;
      id: 2,title: 'Zero Trust Security',description: 'Identity verification and access management',category: 'Security',icon: '🔐',features: ['Identity managementAccess control', 'Multi-factor auth'],;
      price: 1800,currency: '$',duration: 'Monthly'
    };
    {;
      id: 3,title: 'Compliance Management',description: 'Regulatory compliance and audit support',category: 'Security',icon: '📋',features: ['SOC 2 complianceISO 27001', 'GDPR support'],;
      price: 3200,currency: '$',duration: 'Monthly'
    };
  ];
  const getCategoryIcon = (category: string) => {;
    const categoryData = SECURITY_SERVICE_CATEGORIES.find(cat => cat.id === category)
    return categoryData?.icon || Shield
  },;
  const getPricingModelLabel = (model: string) => {;
    switch (model) {;
      case 'one-time': return 'One-time'
      case 'monthly': return 'Monthly',;
      case 'hourly': return 'Hourly',;
      case 'project-based': return 'Project-based',;
      default: return model;
    };
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">;
      <SEOHead;
        title="Cybersecurity Services - Zion Tech Group"
        description="Comprehensive cybersecurity solutions including zero trust security, threat detection, and compliance services to protect your business."
        keywords={['cybersecuritysecurity services', 'threat detectioncompliance', 'zero trust']};
        structuredData={{;
          "@context": "https: //schema.org"
          "@type": "Service",;
          "name": "Cybersecurity Services",;
          "description": "Comprehensive cybersecurity solutions",;
          "url": "https: //ziontechgroup.com/services/cybersecurity"
          "provider": {;
            "@type": "Organization",;
            "name": "Zion Tech Group"
          };
        }};
      />;
        {/* Hero Section */};
        <section className="py-32 px-4 relative overflow-hidden">;
          {/* Background Elements */};
          <div className="absolute inset-0">;
            <[^>]*/>
            <[^>]*/>
            <[^>]*/>
          </[^>]*>
          <div className="relative z-10 max-w-6xl mx-auto text-center">;
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">;
                Cybersecurity;
              </[^>]*>
              <[^>]*/>
              <span className="text-white">That Never Sleeps</[^>]*>
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">;
              Protect your business with enterprise-grade cybersecurity solutions. Our AI-powered security;
              platform provides 24/7 protection against evolving cyber threats.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Get Security Assessment;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/case-studies"
                className="[^"]*"
              >;
                View Case Studies;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
        {/* Security Service Categories */};
        <section className="py-16 bg-zion-blue-dark">;
          <div className="container mx-auto px-4 md: px-6">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Security Service Categories</[^>]*>
              <p className="text-zion-slate-light max-w-3xl mx-auto">;
                Comprehensive cybersecurity solutions designed to protect your business from all angles;
              </[^>]*>
            </[^>]*>
            <div className="grid gap-6 md:grid-cols-2">;
              {SECURITY_SERVICE_CATEGORIES.map((category) => {;
                const IconComponent = category.icon
                return (
                  <Card key={category.id} className="text-center hover: shadow-lg transition-shadow cursor-pointer border-red-500/20">;
                    <CardHeader>;
                      <div className="bg-red-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">;
                        <[^>]*/>
                      </[^>]*>
                      <CardTitle className="text-xl">{category.name}</[^>]*>
                      <CardDescription>{category.description}</[^>]*>
                    </[^>]*>
                    <CardContent>;
                      <Badge variant="secondary" className="bg-red-500/20 text-red-600">;
                        {category.services.length} Services;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                );
              })};
            </[^>]*>
          </[^>]*>
        </[^>]*>
        {/* Security Services Showcase */};
        <section className="py-16 bg-zion-blue">;
          <div className="container mx-auto px-4 md:px-6">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Security Services Showcase</[^>]*>
              <p className="text-zion-slate-light max-w-3xl mx-auto">;
                Discover how our cybersecurity solutions can protect your business and ensure compliance;
              </[^>]*>
            </[^>]*>
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">;
              <TabsList className="grid w-full grid-cols-3 mb-8">;
                <TabsTrigger value="all">All Security Services</[^>]*>
                {SECURITY_SERVICE_CATEGORIES.map((category) => (;
                  <TabsTrigger key={category.id} value={category.id}>;
                    {category.name};
                  </[^>]*>
                ))};
              </[^>]*>
              <TabsContent value="all" className="space-y-6">;
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">;
                  {CYBERSECURITY_SERVICES.map((service) => (;
                    <[^>]*/>
                  ))};
                </[^>]*>
              </[^>]*>
              {SECURITY_SERVICE_CATEGORIES.map((category) => (;
                <TabsContent key={category.id} value={category.id} className="space-y-6">;
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">;
                    {category.services.map((service) => (;
                      <[^>]*/>
                    ))};
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>
        {/* Security Benefits Section */};
        <section className="py-16 bg-background">;
          <div className="container mx-auto px-4 md:px-6">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Our Security Solutions?</[^>]*>
              <p className="text-muted-foreground max-w-3xl mx-auto">;
                Enterprise-grade protection with the agility and pricing of a startup;
              </[^>]*>
            </[^>]*>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">;
              <div className="text-center">;
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="font-semibold mb-2">24/7 Monitoring</[^>]*>
                <p className="text-muted-foreground text-sm">;
                  Round-the-clock security monitoring and threat detection;
                </[^>]*>
              </[^>]*>
              <div className="text-center">;
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="font-semibold mb-2">AI-Powered Detection</[^>]*>
                <p className="text-muted-foreground text-sm">;
                  Advanced AI algorithms for faster threat identification;
                </[^>]*>
              </[^>]*>
              <div className="text-center">;
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="font-semibold mb-2">Compliance Ready</[^>]*>
                <p className="text-muted-foreground text-sm">;
                  Meet SOC2, GDPR, HIPAA, and other compliance requirements;
                </[^>]*>
              </[^>]*>
              <div className="text-center">;
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="font-semibold mb-2">Rapid Response</[^>]*>
                <p className="text-muted-foreground text-sm">;
                  Automated incident response and threat mitigation;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
        {/* Security Implementation Process */};
        <section className="py-16 bg-muted/50">;
          <div className="container mx-auto px-4 md:px-6">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold tracking-tight mb-4">Security Implementation Process</[^>]*>
              <p className="text-muted-foreground max-w-3xl mx-auto">;
                Our proven methodology ensures comprehensive security implementation and ongoing protection;
              </[^>]*>
            </[^>]*>
            <div className="grid gap-8 md:grid-cols-4">;
              <div className="text-center">;
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">;
                  1;
                </[^>]*>
                <h3 className="font-semibold mb-2">Assessment</[^>]*>
                <p className="text-muted-foreground text-sm">;
                  Comprehensive security audit and vulnerability assessment;
                </[^>]*>
              </[^>]*>
              <div className="text-center">;
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">;
                  2;
                </[^>]*>
                <h3 className="font-semibold mb-2">Strategy</[^>]*>
                <p className="text-muted-foreground text-sm">;
                  Develop security roadmap and compliance strategy;
                </[^>]*>
              </[^>]*>
              <div className="text-center">;
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">;
                  3;
                </[^>]*>
                <h3 className="font-semibold mb-2">Implementation</[^>]*>
                <p className="text-muted-foreground text-sm">;
                  Deploy security solutions and monitoring systems;
                </[^>]*>
              </[^>]*>
              <div className="text-center">;
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">;
                  4;
                </[^>]*>
                <h3 className="font-semibold mb-2">Monitoring</[^>]*>
                <p className="text-muted-foreground text-sm">;
                  24/7 security monitoring and ongoing support;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
        {/* Compliance & Standards */};
        <section className="py-16 bg-background">;
          <div className="container mx-auto px-4 md:px-6">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold tracking-tight mb-4">Compliance & Standards</[^>]*>
              <p className="text-muted-foreground max-w-3xl mx-auto">;
                Our security solutions help you meet industry standards and regulatory requirements;
              </[^>]*>
            </[^>]*>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">;
              {[;
                { name: 'SOC2', icon: '🔒', description: 'Security Controls' };
                { name: 'GDPR', icon: '🇪🇺', description: 'Data Protection' };
                { name: 'HIPAA', icon: '🏥', description: 'Healthcare' };
                { name: 'PCI DSS', icon: '💳', description: 'Payment Security' };
                { name: 'ISO 27001', icon: '🌐', description: 'Information Security' };
                { name: 'NIST', icon: '🇺🇸', description: 'Cybersecurity Framework' };
              ].map((standard) => (;
                <Card key={standard.name} className="text-center hover:shadow-lg transition-shadow">;
                  <CardHeader>;
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-lg w-16 h-16 mb-4 flex items-center justify-center">;
                      <[^>]*/>
                    </[^>]*>
                    <CardTitle className="text-xl text-white">;
                      {service.title};
                    </[^>]*>
                    <CardDescription className="text-gray-400">;
                      {service.description};
                    </[^>]*>
                  </[^>]*>
                  <CardContent>;
                    <ul className="space-y-2 mb-6">;
                      {service.features.map((feature, featureIndex) => (;
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">;
                          <[^>]*/>
                          {feature};
                        </[^>]*>
                      ))};
                    </[^>]*>
                    <div className="text-2xl font-bold text-red-400 mb-4">;
                      {service.price};
                    </[^>]*>
                    <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">;
                      Get Started;
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>
        {/* Contact CTA */};
        <section className="py-16 bg-zion-blue">;
          <div className="container mx-auto px-4 md:px-6 text-center">;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Ready to Secure Your Business?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Don't wait until it's too late. Get a comprehensive security assessment and protect your business today.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Schedule Security Assessment;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/case-studies"
                className="[^"]*"
              >;
                View Security Case Studies;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      {/* Hero Section */};
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white">;
        <div className="container mx-auto px-4 py-20">;
          <div className="text-center max-w-4xl mx-auto">;
            <div className="mb-6">;
              <[^>]*/>
            </[^>]*>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">;
              Cybersecurity Solutions;
            </[^>]*>
            <p className="text-xl md:text-2xl mb-8 text-red-100">;
              Protect your business with enterprise-grade cybersecurity services and threat intelligence;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link to="/request-quote">;
                <Button size="lg" className="bg-white hover:bg-gray-100 text-red-600 font-semibold">;
                  Get Security Assessment;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
              <Link to="/contact">;
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">;
                  Contact Security Team;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Contact Information Banner */};
      <div className="bg-white border-b border-gray-200">;
        <div className="container mx-auto px-4 py-6">;
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">;
            <div className="flex items-center gap-6 text-sm text-gray-600">;
              <div className="flex items-center gap-2">;
                <[^>]*/>
                <span>+1 302 464 0950</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2">;
                <[^>]*/>
                <span>kleber@ziontechgroup.com</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2">;
                <[^>]*/>
                <span>364 E Main St STE 1008, Middletown DE 19709</[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="flex items-center gap-2">;
              <[^>]*/>
              <a;
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="[^"]*"
              >;
                ziontechgroup.com
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Security Threats Overview */};
      <div className="py-16 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              Modern Security Threats;
            </[^>]*>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Stay protected against evolving cyber threats with our comprehensive security solutions;
            </[^>]*>
          </[^>]*>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold mb-2">Ransomware Attacks</[^>]*>
              <p className="text-gray-600">Protect against data encryption and extortion attempts with advanced threat detection</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold mb-2">Social Engineering</[^>]*>
              <p className="text-gray-600">Defend against phishing, pretexting, and other human-based attack vectors</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold mb-2">Supply Chain Attacks</[^>]*>
              <p className="text-gray-600">Secure your software and hardware supply chain against compromise</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold mb-2">Data Breaches</[^>]*>
              <p className="text-gray-600">Prevent unauthorized access and protect sensitive information</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Cybersecurity Services Grid */};
      <section className="py-16 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">;
              Cybersecurity Services;
            </[^>]*>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Comprehensive security solutions to protect your business from all angles;
            </[^>]*>
          </[^>]*>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {CYBERSECURITY_SERVICES.map((service) => (;
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-500/20">;
                <div className="relative">;
                  <img;
                    src={service.images[0]};
                    alt={service.title};
                    className="[^"]*"
                  />;
                  {service.featured && (;&& (; (
                    <Badge className="absolute top-4 right-4 bg-red-600 text-white">;
                      Featured;
                    </[^>]*>
                  )};
                </[^>]*>
                <CardHeader>;
                  <div className="flex items-start justify-between mb-2">;
                    <Badge className="bg-red-100 text-red-800 border-red-200">;
                      {service.category};
                    </[^>]*>
                    <div className="flex items-center gap-1 text-sm text-gray-600">;
                      <[^>]*/>
                      <span>{service.rating}</[^>]*>
                      <span className="text-gray-400">({service.reviewCount})</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  <CardTitle className="text-xl leading-tight">{service.title}</[^>]*>
                  <CardDescription className="text-base leading-relaxed">;
                    {service.description};
                  </[^>]*>
                </[^>]*>
                <CardContent>;
                  <div className="flex items-center justify-between mb-4">;
                    <div className="text-3xl font-bold text-red-600">;
                      {service.currency}{service.price?.toLocaleString()};
                    </[^>]*>
                    <div className="flex items-center gap-2 text-sm text-gray-600">;
                      <[^>]*/>
                      <span>{service.availability}</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  <div className="flex flex-wrap gap-2 mb-4">;
                    {service.tags.map((tag) => (;
                      <Badge key={tag} variant="secondary" className="text-xs">;
                        {tag};
                      </[^>]*>
                    ))};
                  </[^>]*>
                  <div className="flex items-center justify-between">;
                    <div className="flex items-center gap-2 text-sm text-gray-600">;
                      <[^>]*/>
                      <span>AI Score: {service.aiScore}%</[^>]*>
                    </[^>]*>
                    <Link to={`/services/${service.id}`}>;
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">;
                        Learn More;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
          {filteredServices.length === 0 && (;&& (; (
            <div className="text-center py-16">;
              <h3 className="text-xl font-semibold text-zion-slate-light mb-2">No security services found</[^>]*>
              <p className="text-zion-slate-light mb-4">Try adjusting your search criteria or browse all security categories</[^>]*>
              <Button onClick={() => {;
                setSearchQuery('')
                setSelectedSubcategory('all'),;
                setPriceRange('all')
              }}>;
                Clear Filters;
              </[^>]*>
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>
      {/* Security Statistics */};
      <section className="py-16 bg-zion-blue">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">Security by the Numbers</[^>]*>
            <p className="text-zion-slate-light text-lg">;
              Our security solutions protect businesses worldwide;
            </[^>]*>
          </[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</[^>]*>
              <div className="text-white font-semibold">Threat Detection Rate</[^>]*>
              <div className="text-zion-slate-light text-sm">Advanced AI-powered threat detection</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</[^>]*>
              <div className="text-white font-semibold">Security Monitoring</[^>]*>
              <div className="text-zion-slate-light text-sm">Round-the-clock threat monitoring</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="text-4xl font-bold text-zion-cyan mb-2">15min</[^>]*>
              <div className="text-white font-semibold">Response Time</[^>]*>
              <div className="text-zion-slate-light text-sm">Average incident response time</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="text-4xl font-bold text-zion-cyan mb-2">100%</[^>]*>
              <div className="text-white font-semibold">Compliance Success</[^>]*>
              <div className="text-zion-slate-light text-sm">Regulatory compliance rate</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Security Services Grid */};
      <section className="py-20 bg-zion-blue-dark">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Comprehensive Security Services;
            </[^>]*>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">;
              Choose from our range of cybersecurity services designed to address specific;
              security challenges and protect your business assets.;
            </[^>]*>
          </[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {securityServices.map((service) => (;
              <div key={service.id} className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">;
                <div className="flex items-center mb-4">;
                  <div className="p-3 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-lg mr-4">;
                    <div className="text-white">;
                      {service.icon};
                    </[^>]*>
                  </[^>]*>
                  <div>;
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</[^>]*>
                  </[^>]*>
                </[^>]*>
                <h3 className="text-white text-xl font-bold mb-3">{service.title}</[^>]*>
                <p className="text-zion-slate-light mb-4">{service.description}</[^>]*>
                <div className="mb-4">;
                  <h4 className="text-white font-semibold mb-2">Key Features:</[^>]*>
                  <ul className="space-y-1">;
                    {service.features.slice(0, 3).map((feature, index) => (;
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">;
                        <[^>]*/>
                        {feature};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
                <div className="border-t border-zion-blue-light pt-4 mb-4">;
                  <div className="flex items-center justify-between text-sm">;
                    <div className="flex items-center text-zion-cyan">;
                      <[^>]*/>
                      <span className="font-semibold">{service.currency}{service.price.toLocaleString()}</[^>]*>
                    </[^>]*>
                    <div className="flex items-center text-zion-slate-light">;
                      <[^>]*/>
                      <span>{service.duration}</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
                <Link to="/request-quote">;
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
                    Get Quote;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Security Technologies */};
      <section className="py-20 bg-zion-blue">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Advanced Security Technologies;
            </[^>]*>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">;
              We leverage cutting-edge security technologies and tools to deliver;
              comprehensive protection for your business.;
            </[^>]*>
          </[^>]*>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">;
            {securityTechnologies.map((tech, index) => (;
              <div key={index} className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300">;
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-white font-semibold text-sm">{tech}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Compliance Standards */};
      <section className="py-20 bg-zion-blue-dark">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Compliance & Standards;
            </[^>]*>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">;
              Our security solutions help you meet industry standards and regulatory;
              requirements across multiple sectors.;
            </[^>]*>
          </[^>]*>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">;
            {complianceStandards.map((standard, index) => (;
              <div key={index} className="text-center p-6 bg-zion-blue border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300">;
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-white font-semibold text-sm">{standard}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Threat Intelligence */};
      <section className="py-20 bg-zion-blue">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Threat Intelligence & Monitoring;
            </[^>]*>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">;
              Stay ahead of emerging threats with our comprehensive threat intelligence;
              and 24/7 security monitoring services.;
            </[^>]*>
          </[^>]*>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">;
            {threatIntelligence.map((intel, index) => (;
              <div key={index} className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300">;
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-white font-semibold text-sm">{intel}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Why Choose ZionTech for Security */};
      <section className="py-20 bg-zion-blue-dark">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Why Choose ZionTech Group for Cybersecurity?;
            </[^>]*>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">;
              We combine deep security expertise with industry knowledge to deliver;
              solutions that protect your business and build customer trust.;
            </[^>]*>
          </[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <div className="text-center p-6">;
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-6">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-white text-xl font-bold mb-3">Certified Experts</[^>]*>
              <p className="text-zion-slate-light">;
                CISSP, CISM, and CEH certified security professionals with;
                extensive experience in enterprise security.;
              </[^>]*>
            </[^>]*>
            <div className="text-center p-6">;
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-white text-xl font-bold mb-3">Proven Track Record</[^>]*>
              <p className="text-zion-slate-light">;
                Successfully protected over 500+ businesses from cyber threats;
                with zero major security breaches.;
              </[^>]*>
            </[^>]*>
            <div className="text-center p-6">;
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-white text-xl font-bold mb-3">24/7 Support</[^>]*>
              <p className="text-zion-slate-light">;
                Round-the-clock security monitoring and incident response;
                to protect your business at all times.;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Security Pricing */};
      <section className="py-20 bg-zion-blue">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Transparent Security Pricing;
            </[^>]*>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">;
              Competitive pricing for enterprise-grade security solutions with;
              flexible payment options and comprehensive protection.;
            </[^>]*>
          </[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">;
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center">;
              <h3 className="text-white text-2xl font-bold mb-4">Essential Security</[^>]*>
              <div className="text-4xl font-bold text-zion-cyan mb-6">;
                $3,800<span className="text-lg text-zion-slate-light">/project</[^>]*>
              </[^>]*>
              <ul className="text-zion-slate-light space-y-2 mb-8">;
                <li>Basic security assessment</[^>]*>
                <li>Vulnerability scanning</[^>]*>
                <li>Security policy review</[^>]*>
                <li>Email support</[^>]*>
              </[^>]*>
              <Link to="/request-quote">;
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
                  Get Started;
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="bg-gradient-to-br from-zion-purple to-zion-purple-dark border border-zion-purple rounded-lg p-8 text-center relative">;
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                <span className="bg-zion-cyan text-zion-blue px-4 py-2 rounded-full text-sm font-bold">;
                  Most Popular;
                </[^>]*>
              </[^>]*>
              <h3 className="text-white text-2xl font-bold mb-4">Professional Security</[^>]*>
              <div className="text-4xl font-bold text-white mb-6">;
                $7,200<span className="text-lg text-zion-slate-light">/project</[^>]*>
              </[^>]*>
              <ul className="text-white space-y-2 mb-8">;
                <li>Comprehensive security audit</[^>]*>
                <li>Penetration testing</[^>]*>
                <li>Security architecture review</[^>]*>
                <li>Priority support</[^>]*>
              </[^>]*>
              <Link to="/request-quote">;
                <Button className="w-full bg-white text-zion-purple hover:bg-zion-slate-light">;
                  Get Started;
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center">;
              <h3 className="text-white text-2xl font-bold mb-4">Enterprise Security</[^>]*>
              <div className="text-4xl font-bold text-zion-cyan mb-6">;
                $15,000<span className="text-lg text-zion-slate-light">/project</[^>]*>
              </[^>]*>
              <ul className="text-zion-slate-light space-y-2 mb-8">;
                <li>Full security transformation</[^>]*>
                <li>SOC setup and management</[^>]*>
                <li>24/7 monitoring and response</[^>]*>
                <li>Dedicated security team</[^>]*>
              </[^>]*>
              <Link to="/request-quote">;
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
                  Contact Sales;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Contact Information */};
      <section className="py-20 bg-zion-blue-dark">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Ready to Secure Your Business?;
          </[^>]*>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">;
            Contact our cybersecurity experts today to discuss how we can help you;
            protect your business from evolving threats.;
          </[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">;
            <div className="text-center p-6">;
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-white font-bold mb-2">Visit Us</[^>]*>
              <p className="text-zion-slate-light text-sm">;
                364 E Main St STE 1008<[^>]*/>
                Middletown DE 19709;
              </[^>]*>
            </[^>]*>
            <div className="text-center p-6">;
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-white font-bold mb-2">Call Us</[^>]*>
              <p className="text-zion-cyan font-semibold">;
                +1 302 464 0950;
              </[^>]*>
            </[^>]*>
            <div className="text-center p-6">;
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-white font-bold mb-2">Email Us</[^>]*>
              <p className="text-zion-cyan font-semibold">;
                kleber@ziontechgroup.com
              </[^>]*>
            </[^>]*>
          </[^>]*>
          <div className="flex flex-wrap justify-center gap-4">;
            <Link to="/request-quote">;
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">;
                Request Security Quote;
              </[^>]*>
            </[^>]*>
            <Link to="/contact">;
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">;
                Schedule Security Consultation;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      <[^>]*/>
      <[^>]*/>
      {/* Security Framework */};
      <div className="py-16 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              Security Framework & Standards;
            </[^>]*>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Our security approach follows industry best practices and compliance standards;
            </[^>]*>
          </[^>]*>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-red-50 to-pink-50">;
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">SOC 2 Type II</[^>]*>
              <p className="text-gray-600">Security, availability, and processing integrity controls for service organizations</[^>]*>
            </[^>]*>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">;
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">ISO 27001</[^>]*>
              <p className="text-gray-600">International standard for information security management systems</[^>]*>
            </[^>]*>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50">;
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">PCI DSS</[^>]*>
              <p className="text-gray-600">Payment card industry data security standard compliance</[^>]*>
            </[^>]*>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-violet-50">;
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">NIST Framework</[^>]*>
              <p className="text-gray-600">Cybersecurity framework for critical infrastructure protection</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Security Process */};
      <div className="py-16 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              Our Security Process;
            </[^>]*>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Systematic approach to identifying, assessing, and mitigating security risks;
            </[^>]*>
          </[^>]*>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">;
                1;
              </[^>]*>
              <h3 className="text-xl font-semibold mb-2">Assessment</[^>]*>
              <p className="text-gray-600">Comprehensive security audit and vulnerability assessment</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">;
                2;
              </[^>]*>
              <h3 className="text-xl font-semibold mb-2">Strategy</[^>]*>
              <p className="text-gray-600">Develop security roadmap and prioritize remediation efforts</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">;
                3;
              </[^>]*>
              <h3 className="text-xl font-semibold mb-2">Implementation</[^>]*>
              <p className="text-gray-600">Deploy security controls and monitoring solutions</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">;
                4;
              </[^>]*>
              <h3 className="text-xl font-semibold mb-2">Monitoring</[^>]*>
              <p className="text-gray-600">Continuous threat monitoring and incident response</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Security Tools & Technologies */};
      <div className="py-16 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              Security Tools & Technologies;
            </[^>]*>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              State-of-the-art security tools and platforms for comprehensive protection;
            </[^>]*>
          </[^>]*>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <Card className="hover:shadow-lg transition-shadow">;
              <CardHeader>;
                <div className="bg-red-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <CardTitle>Threat Detection</[^>]*>
              </[^>]*>
              <CardContent>;
                <ul className="space-y-2 text-sm text-gray-600">;
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>SIEM platforms</[^>]*>
                  </[^>]*>
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>EDR solutions</[^>]*>
                  </[^>]*>
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>Network monitoring</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <Card className="hover:shadow-lg transition-shadow">;
              <CardHeader>;
                <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <CardTitle>Vulnerability Management</[^>]*>
              </[^>]*>
              <CardContent>;
                <ul className="space-y-2 text-sm text-gray-600">;
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>Automated scanning</[^>]*>
                  </[^>]*>
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>Penetration testing</[^>]*>
                  </[^>]*>
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>Code analysis</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <Card className="hover:shadow-lg transition-shadow">;
              <CardHeader>;
                <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <CardTitle>Access Control</[^>]*>
              </[^>]*>
              <CardContent>;
                <ul className="space-y-2 text-sm text-gray-600">;
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>Multi-factor authentication</[^>]*>
                  </[^>]*>
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>Identity management</[^>]*>
                  </[^>]*>
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>Privileged access</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <Card className="hover:shadow-lg transition-shadow">;
              <CardHeader>;
                <div className="bg-purple-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <CardTitle>Network Security</[^>]*>
              </[^>]*>
              <CardContent>;
                <ul className="space-y-2 text-sm text-gray-600">;
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>Firewall management</[^>]*>
                  </[^>]*>
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>VPN solutions</[^>]*>
                  </[^>]*>
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>Intrusion prevention</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <Card className="hover:shadow-lg transition-shadow">;
              <CardHeader>;
                <div className="bg-yellow-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <CardTitle>Data Protection</[^>]*>
              </[^>]*>
              <CardContent>;
                <ul className="space-y-2 text-sm text-gray-600">;
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>Encryption at rest</[^>]*>
                  </[^>]*>
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>Data loss prevention</[^>]*>
                  </[^>]*>
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>Backup security</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <Card className="hover:shadow-lg transition-shadow">;
              <CardHeader>;
                <div className="bg-cyan-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <CardTitle>Application Security</[^>]*>
              </[^>]*>
              <CardContent>;
                <ul className="space-y-2 text-sm text-gray-600">;
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>SAST/DAST testing</[^>]*>
                  </[^>]*>
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>API security</[^>]*>
                  </[^>]*>
                  <li className="flex items-center gap-2">;
                    <[^>]*/>
                    <span>Secure development</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Call to Action */};
      <div className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold mb-6">;
            Secure Your Business Today;
          </[^>]*>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">;
            Don't wait until it's too late. Our cybersecurity experts are ready to help you build;
            a robust security posture and protect your valuable assets.;
          </[^>]*>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Link to="/request-quote">;
              <Button size="lg" className="bg-white hover:bg-gray-100 text-red-600 font-semibold">;
                Get Security Assessment;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
            <Link to="/contact">;
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">;
                Contact Security Team;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Footer Contact */};
      <div className="bg-gray-900 text-white py-12">;
        <div className="container mx-auto px-4">;
          <div className="grid md: grid-cols-2 gap-8">;
            <div>;
              <h3 className="text-2xl font-bold mb-6 text-red-400">ZionTech Group</[^>]*>
              <p className="text-gray-300 mb-6">;
                Your trusted cybersecurity partner. We help businesses protect their digital assets;
                with comprehensive security solutions and expert guidance.;
              </[^>]*>
              <div className="flex space-x-4">;
                <a href="https://[^;]*
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <div>;
              <h3 className="text-xl font-semibold mb-6 text-red-400">Contact Information</[^>]*>
              <div className="space-y-4">;
                <div className="flex items-center gap-3">;
                  <[^>]*/>
                  <span>+1 302 464 0950</[^>]*>
                </[^>]*>
                <div className="flex items-center gap-3">;
                  <[^>]*/>
                  <span>kleber@ziontechgroup.com</[^>]*>
                </[^>]*>
                <div className="flex items-center gap-3">;
                  <[^>]*/>
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">;
            <p>&copy, 2024 ZionTech Group. All rights reserved. | <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">ziontechgroup.com</a></[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      <[^>]*/>
    </[^>]*>
  );
};
