<<<<<<< HEAD
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
=======
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
import { 
  Shield, 
  Lock, 
  Eye, 
<<<<<<< HEAD
  AlertTriangle, 
  Users, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink, 
  Zap, 
  Brain, 
  Network, 
  Smartphone, 
  CreditCard, 
  Clock, 
  Award, 
  BarChart3, 
  FileText, 
  Server, 
  Database, 
  Key, 
  Search, 
  Monitor, 
  AlertCircle, 
  TrendingUp, 
  DollarSign,
  Cloud
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';

const CYBERSECURITY_SERVICES = COMPREHENSIVE_SERVICES.filter(service => 
  service.category.includes('Cybersecurity') || 
  service.category.includes('Security') || 
  service.category.includes('Zero Trust')
);

export default function CybersecurityServicesPage() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <Shield className="h-16 w-16 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Cybersecurity Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
            Protect your business with enterprise-grade security solutions designed for the modern threat landscape
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>

      {/* Security Statistics */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-3xl font-bold text-white mb-2">$6.9T</h3>
              <p className="text-zion-cyan-light">Global Cybercrime Cost</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-3xl font-bold text-white mb-2">287</h3>
              <p className="text-zion-cyan-light">Days to Detect Breach</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-3xl font-bold text-white mb-2">+38%</h3>
              <p className="text-zion-cyan-light">Cyber Attacks Increase</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-3xl font-bold text-white mb-2">99.9%</h3>
              <p className="text-zion-cyan-light">Threat Detection Rate</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="container mx-auto px-4 py-16">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-sm border-zion-cyan/30">
            <TabsTrigger value="overview" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="services" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Security Services
            </TabsTrigger>
            <TabsTrigger value="compliance" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Compliance
            </TabsTrigger>
            <TabsTrigger value="pricing" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Pricing
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why Cybersecurity is Critical
                </h2>
                <p className="text-lg text-zion-cyan-light mb-6">
                  In today's interconnected world, cybersecurity isn't optional—it's essential. 
                  Our comprehensive security solutions protect your business from evolving threats, 
                  ensure compliance with industry standards, and safeguard your valuable data and reputation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Threat Protection</h3>
                      <p className="text-zion-cyan-light">Advanced detection and prevention of cyber threats in real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Compliance Assurance</h3>
                      <p className="text-zion-cyan-light">Meet industry standards and regulatory requirements with confidence</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">24/7 Monitoring</h3>
                      <p className="text-zion-cyan-light">Continuous security monitoring and incident response capabilities</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Security Framework</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan-light">Threat Detection</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-zion-blue-light rounded-full h-2">
                          <div className="bg-zion-cyan h-2 rounded-full" style={{ width: '99.9%' }}></div>
                        </div>
                        <span className="text-zion-cyan font-semibold">99.9%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan-light">Response Time</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-zion-blue-light rounded-full h-2">
                          <div className="bg-zion-cyan h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                        <span className="text-zion-cyan font-semibold">95%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan-light">Compliance Score</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-zion-blue-light rounded-full h-2">
                          <div className="bg-zion-cyan h-2 rounded-full" style={{ width: '98%' }}></div>
                        </div>
                        <span className="text-zion-cyan font-semibold">98%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan-light">Uptime</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-zion-blue-light rounded-full h-2">
                          <div className="bg-zion-cyan h-2 rounded-full" style={{ width: '99.99%' }}></div>
                        </div>
                        <span className="text-zion-cyan font-semibold">99.99%</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Security Services Tab */}
          <TabsContent value="services" className="mt-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Security Service Portfolio</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions designed to protect your business from all angles
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CYBERSECURITY_SERVICES.map((service) => (
                <SecurityServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="mt-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Compliance & Standards</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Meet industry standards and regulatory requirements with our compliance-focused security solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ComplianceCard
                icon={<FileText className="h-8 w-8 text-zion-cyan" />}
                title="SOC 2 Type II"
                description="Service Organization Control 2 compliance for data security and privacy"
                requirements={[
                  "Security controls implementation",
                  "Regular security assessments",
                  "Incident response procedures",
                  "Access control management"
                ]}
                industries={[
                  "SaaS companies",
                  "Cloud service providers",
                  "Financial services",
                  "Healthcare technology"
                ]}
              />
              <ComplianceCard
                icon={<Shield className="h-8 w-8 text-zion-cyan" />}
                title="ISO 27001"
                description="Information Security Management System certification"
                requirements={[
                  "Risk assessment and treatment",
                  "Security policy framework",
                  "Asset management",
                  "Business continuity planning"
                ]}
                industries={[
                  "Technology companies",
                  "Financial institutions",
                  "Government contractors",
                  "Healthcare organizations"
                ]}
              />
              <ComplianceCard
                icon={<Lock className="h-8 w-8 text-zion-cyan" />}
                title="GDPR Compliance"
                description="General Data Protection Regulation compliance for EU data handling"
                requirements={[
                  "Data protection principles",
                  "Individual rights management",
                  "Data breach notification",
                  "Privacy by design"
                ]}
                industries={[
                  "E-commerce",
                  "Marketing agencies",
                  "International businesses",
                  "Data processors"
                ]}
              />
              <ComplianceCard
                icon={<Server className="h-8 w-8 text-zion-cyan" />}
                title="HIPAA Compliance"
                description="Health Insurance Portability and Accountability Act compliance"
                requirements={[
                  "Administrative safeguards",
                  "Physical safeguards",
                  "Technical safeguards",
                  "Organizational requirements"
                ]}
                industries={[
                  "Healthcare providers",
                  "Health technology",
                  "Medical software",
                  "Health insurance"
                ]}
              />
              <ComplianceCard
                icon={<Database className="h-8 w-8 text-zion-cyan" />}
                title="PCI DSS"
                description="Payment Card Industry Data Security Standard compliance"
                requirements={[
                  "Network security",
                  "Vulnerability management",
                  "Access control",
                  "Security monitoring"
                ]}
                industries={[
                  "E-commerce",
                  "Payment processors",
                  "Financial services",
                  "Retail businesses"
                ]}
              />
              <ComplianceCard
                icon={<Key className="h-8 w-8 text-zion-cyan" />}
                title="Zero Trust Security"
                description="Modern security framework for comprehensive protection"
                requirements={[
                  "Identity verification",
                  "Device trust assessment",
                  "Network segmentation",
                  "Continuous monitoring"
                ]}
                industries={[
                  "Enterprise organizations",
                  "Remote work environments",
                  "High-security facilities",
                  "Government agencies"
                ]}
              />
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="mt-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Security Service Pricing Plans</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Flexible pricing options designed to meet your security needs and budget
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard
                title="Essential Security"
                price="$3,999"
                description="Basic security protection for small businesses"
                features={[
                  "Security assessment",
                  "Basic threat protection",
                  "Security awareness training",
                  "Email support",
                  "Monthly security reports"
                ]}
                popular={false}
              />
              <PricingCard
                title="Professional Security"
                price="$8,999"
                description="Comprehensive security solutions for growing businesses"
                features={[
                  "Advanced threat protection",
                  "24/7 security monitoring",
                  "Incident response",
                  "Priority support",
                  "Weekly security updates",
                  "Compliance assistance"
                ]}
                popular={true}
              />
              <PricingCard
                title="Enterprise Security"
                price="$24,999"
                description="Full-scale security transformation for large organizations"
                features={[
                  "End-to-end security strategy",
                  "Custom security solutions",
                  "24/7 dedicated monitoring",
                  "Dedicated security team",
                  "Continuous optimization",
                  "Advanced compliance"
                ]}
                popular={false}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modern Cyber Threats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Modern Cyber Threats</h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            Stay informed about the latest cybersecurity threats and how we protect against them
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ThreatCard
            icon={<AlertTriangle className="h-8 w-8 text-red-400" />}
            title="Ransomware Attacks"
            description="Malicious software that encrypts files and demands payment for decryption"
            impact="High - Data loss, business disruption, financial loss"
            prevention={[
              "Regular backups",
              "Employee training",
              "Advanced threat detection",
              "Incident response planning"
            ]}
            trend="Increasing 62% year-over-year"
          />
          <ThreatCard
            icon={<Users className="h-8 w-8 text-orange-400" />}
            title="Social Engineering"
            description="Manipulation tactics to trick employees into revealing sensitive information"
            impact="Medium - Data breaches, unauthorized access, reputation damage"
            prevention={[
              "Security awareness training",
              "Multi-factor authentication",
              "Verification procedures",
              "Regular security assessments"
            ]}
            trend="Growing sophistication in tactics"
          />
          <ThreatCard
            icon={<Network className="h-8 w-8 text-yellow-400" />}
            title="Supply Chain Attacks"
            description="Targeting third-party vendors to gain access to larger organizations"
            impact="High - Widespread data breaches, trust erosion"
            prevention={[
              "Vendor security assessments",
              "Supply chain monitoring",
              "Access controls",
              "Regular security audits"
            ]}
            trend="Increasing by 78% annually"
          />
          <ThreatCard
            icon={<Smartphone className="h-8 w-8 text-blue-400" />}
            title="Mobile Device Threats"
            description="Attacks targeting smartphones and tablets through malicious apps and networks"
            impact="Medium - Data theft, unauthorized access, malware spread"
            prevention={[
              "Mobile device management",
              "App security scanning",
              "Network security",
              "Regular updates"
            ]}
            trend="Rising with remote work adoption"
          />
          <ThreatCard
            icon={<Cloud className="h-8 w-8 text-purple-400" />}
            title="Cloud Security Breaches"
            description="Unauthorized access to cloud-based systems and data"
            impact="High - Data exposure, service disruption, compliance violations"
            prevention={[
              "Cloud security configuration",
              "Access management",
              "Data encryption",
              "Continuous monitoring"
            ]}
            trend="Growing with cloud adoption"
          />
          <ThreatCard
            icon={<Database className="h-8 w-8 text-green-400" />}
            title="Data Breaches"
            description="Unauthorized access to sensitive information and personal data"
            impact="Critical - Financial loss, legal consequences, reputation damage"
            prevention={[
              "Data encryption",
              "Access controls",
              "Regular security audits",
              "Incident response planning"
            ]}
            trend="Cost increasing 15% annually"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
            Let's discuss how our cybersecurity solutions can protect your business from evolving threats.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Security Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Request Security Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            Ready to strengthen your cybersecurity posture? Contact our security experts today.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 mx-auto mb-3 text-zion-cyan" />
              <h3 className="font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan-light">+1 302 464 0950</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <Mail className="h-8 w-8 mx-auto mb-3 text-zion-cyan" />
              <h3 className="font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-zion-cyan" />
              <h3 className="font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Security Service Card Component
function SecurityServiceCard({ service }: { service: any }) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
            {service.category}
          </Badge>
          <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            {service.subcategory}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-zion-cyan">
              {service.currency}{service.price?.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-white">{service.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-zion-cyan-light">Security Score:</span>
            <div className="flex items-center gap-2">
              <div className="w-16 bg-zion-blue-light rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" 
                  style={{ width: `${service.aiScore}%` }}
                ></div>
              </div>
              <span className="text-zion-cyan font-semibold">{service.aiScore}%</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white">
              Learn More
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Compliance Card Component
function ComplianceCard({ icon, title, description, requirements, industries }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  requirements: string[]; 
  industries: string[]; 
}) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-white mb-2">Key Requirements:</h4>
            <div className="space-y-2">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-zion-cyan-light text-sm">{req}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Target Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry, index) => (
                <Badge key={index} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan-light">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Threat Card Component
function ThreatCard({ icon, title, description, impact, prevention, trend }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  impact: string; 
  prevention: string[]; 
  trend: string; 
}) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-white mb-2">Impact Level:</h4>
            <p className="text-zion-cyan-light text-sm">{impact}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Prevention Strategies:</h4>
            <div className="space-y-2">
              {prevention.map((strategy, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-zion-cyan-light text-sm">{strategy}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Current Trend:</h4>
            <p className="text-zion-cyan-light text-sm">{trend}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Pricing Card Component
function PricingCard({ title, price, description, features, popular }: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <Card className={`relative bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300 ${popular ? 'ring-2 ring-zion-cyan' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-zion-cyan text-white px-3 py-1">Most Popular</Badge>
        </div>
      )}
      <CardHeader className="text-center pt-8">
        <CardTitle className="text-2xl text-white">{title}</CardTitle>
        <div className="text-4xl font-bold text-zion-cyan mb-2">{price}</div>
        <CardDescription className="text-zion-cyan-light">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-white text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
=======
  Zap, 
  AlertTriangle,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Network,
  Database,
  Smartphone,
  TrendingUp as Activity,
  Users
} from "lucide-react";
import { TrustedBySection } from "@/components/TrustedBySection";

const cybersecurityServices = [
  {
    id: "threat-detection",
    title: "AI-Powered Threat Detection",
    description: "Advanced cybersecurity using machine learning to detect and prevent sophisticated cyber threats in real-time.",
    price: 1200,
    currency: "$",
    period: "/month",
    features: [
      "Real-time threat detection",
      "Behavioral analysis",
      "Automated response",
      "Threat intelligence",
      "Compliance monitoring",
      "24/7 SOC support"
    ],
    icon: <Eye className="h-8 w-8" />,
    category: "Threat Detection",
    badge: "Popular",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "zero-trust",
    title: "Zero-Trust Security Framework",
    description: "Implementation of zero-trust security architecture with identity verification, micro-segmentation, and continuous monitoring.",
    price: 4200,
    currency: "$",
    period: "/month",
    features: [
      "Identity verification",
      "Micro-segmentation",
      "Continuous monitoring",
      "Access control",
      "Network isolation",
      "Security policies"
    ],
    icon: <Lock className="h-8 w-8" />,
    category: "Architecture",
    badge: "Enterprise",
    link: "/services",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing & Vulnerability Assessment",
    description: "Comprehensive security testing to identify vulnerabilities and assess your security posture.",
    price: 2500,
    currency: "$",
    period: "/assessment",
    features: [
      "External penetration testing",
      "Internal security assessment",
      "Web application testing",
      "Social engineering",
      "Detailed reporting",
      "Remediation guidance"
    ],
    icon: <AlertTriangle className="h-8 w-8" />,
    category: "Testing",
    badge: "Critical",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "incident-response",
    title: "Incident Response & Forensics",
    description: "Rapid response to security incidents with digital forensics and recovery services.",
    price: 3500,
    currency: "$",
    period: "/incident",
    features: [
      "24/7 incident response",
      "Digital forensics",
      "Evidence preservation",
      "Recovery planning",
      "Legal support",
      "Post-incident analysis"
    ],
    icon: <Activity className="h-8 w-8" />,
    category: "Response",
    badge: "Emergency",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "compliance-audit",
    title: "Compliance & Audit Services",
    description: "Ensure compliance with industry standards including SOC 2, ISO 27001, GDPR, and HIPAA.",
    price: 1800,
    currency: "$",
    period: "/month",
    features: [
      "Compliance assessment",
      "Policy development",
      "Audit preparation",
      "Gap analysis",
      "Training programs",
      "Ongoing support"
    ],
    icon: <Shield className="h-8 w-8" />,
    category: "Compliance",
    badge: "Required",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "security-training",
    title: "Security Awareness Training",
    description: "Comprehensive training programs to educate employees on cybersecurity best practices and threat awareness.",
    price: 450,
    currency: "$",
    period: "/user/month",
    features: [
      "Interactive training modules",
      "Phishing simulations",
      "Security assessments",
      "Progress tracking",
      "Compliance reporting",
      "Custom content"
    ],
    icon: <Users className="h-8 w-8" />,
    category: "Training",
    badge: "Essential",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  }
];

const securityBenefits = [
  {
    title: "Proactive Protection",
    description: "Identify and prevent threats before they can cause damage to your business",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Compliance Assurance",
    description: "Meet industry standards and regulatory requirements with confidence",
    icon: <Lock className="h-6 w-6" />
  },
  {
    title: "24/7 Monitoring",
    description: "Round-the-clock security monitoring and incident response capabilities",
    icon: <Eye className="h-6 w-6" />
  },
  {
    title: "Cost Reduction",
    description: "Prevent costly security breaches and minimize financial impact",
    icon: <TrendingUp className="h-6 w-6" />
  }
];

const securityThreats = [
  {
    title: "Ransomware Attacks",
    description: "Protect against encryption-based attacks that can cripple your business operations",
    icon: <AlertTriangle className="h-6 w-6" />
  },
  {
    title: "Data Breaches",
    description: "Safeguard sensitive information from unauthorized access and exfiltration",
    icon: <Database className="h-6 w-6" />
  },
  {
    title: "Phishing Scams",
    description: "Train employees to recognize and avoid sophisticated social engineering attacks",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Insider Threats",
    description: "Monitor and control access to prevent malicious or accidental insider incidents",
    icon: <Network className="h-6 w-6" />
  }
];

export default function CybersecurityServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Solutions for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
                Digital Age
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Protect your business with enterprise-grade cybersecurity solutions. From threat detection to compliance, 
              we deliver comprehensive security services that keep your assets safe and your business compliant.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Secure Your Business
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Security Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Cybersecurity?</h2>
            <p className="text-zion-slate-light text-lg">
              Comprehensive protection that adapts to evolving threats and business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan rounded-full mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Modern Security Threats</h2>
            <p className="text-zion-slate-light text-lg">
              Stay protected against evolving cyber threats and attack vectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityThreats.map((threat, index) => (
              <div key={index} className="text-center p-6 border border-zion-blue-light rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple rounded-full mb-4">
                  <div className="text-white">
                    {threat.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{threat.title}</h3>
                <p className="text-zion-slate-light">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Cybersecurity Service Portfolio</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Choose from our comprehensive range of security solutions designed to protect your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cybersecurityServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple">
                      {service.category}
                    </Badge>
                    {service.badge && (
                      <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-zion-blue/10 rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-zion-purple">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-muted-foreground">{service.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardContent className="pt-0">
                  <Button asChild className="w-full">
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Don't wait for a breach to happen. Protect your business with proactive cybersecurity solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Get Security Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Contact Security Experts
                </Button>
              </Link>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>📞 <strong>Mobile:</strong> +1 302 464 0950</p>
              <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
  );
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
}