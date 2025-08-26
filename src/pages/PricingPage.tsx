import { Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICE_PRICING_TIERS, CONTACT_INFO, SERVICE_GUARANTEES } from '../data/comprehensiveServices';
=======
import { Check, Star, Zap, Brain, Server, Shield, Building } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: selectedPlan === 'monthly' ? 99 : 990,
      period: selectedPlan === 'monthly' ? 'month' : 'year',
      features: [
        'Up to 5 users',
        'Basic AI services',
        'Email support',
        'Standard security',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: selectedPlan === 'monthly' ? 299 : 2990,
      period: selectedPlan === 'monthly' ? 'month' : 'year',
      features: [
        'Up to 25 users',
        'Advanced AI services',
        'Priority support',
        'Enhanced security',
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'Training sessions'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: selectedPlan === 'monthly' ? 999 : 9990,
      period: selectedPlan === 'monthly' ? 'month' : 'year',
      features: [
        'Unlimited users',
        'All AI services',
        '24/7 dedicated support',
        'Enterprise security',
        'Custom analytics',
        'Full API access',
        'Custom development',
        'On-site training',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      popular: false,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const serviceCategories = [
    {
      name: 'Micro SAAS Solutions',
      icon: Zap,
      services: [
        { name: 'AI-Powered Lead Scoring', price: '$299/month', features: ['Predictive analytics', 'Automated scoring', 'CRM integration'] },
        { name: 'SmartContract AI', price: '$499/month', features: ['AI contract review', 'Risk assessment', 'Compliance checking'] },
        { name: 'Quantum Analytics', price: '$799/month', features: ['Quantum algorithms', 'Complex optimization', 'Research tools'] },
        { name: 'Blockchain Supply Chain', price: '$599/month', features: ['Transparent tracking', 'Smart contracts', 'Audit trails'] },
        { name: 'AR/VR Business Solutions', price: '$899/month', features: ['Immersive training', '3D visualization', 'Interactive experiences'] }
      ]
    },
    {
      name: 'AI Services',
      icon: Brain,
      services: [
        { name: 'Quantum Machine Learning', price: '$1,299/month', features: ['Quantum algorithms', 'ML optimization', 'Research platform'] },
        { name: 'AI Ethics & Governance', price: '$899/month', features: ['Ethical AI framework', 'Bias detection', 'Compliance tools'] },
        { name: 'Edge AI & IoT Intelligence', price: '$699/month', features: ['Edge processing', 'Real-time AI', 'IoT analytics'] },
        { name: 'AI-Powered Cybersecurity', price: '$799/month', features: ['Threat detection', 'AI analysis', 'Incident response'] },
        { name: 'Generative AI & Content Creation', price: '$599/month', features: ['Content generation', 'AI writing', 'Creative tools'] }
      ]
    },
    {
      name: 'IT Infrastructure',
      icon: Server,
      services: [
        { name: 'Enterprise Network Infrastructure', price: 'From $5,000', features: ['Network design', 'Security implementation', 'Performance optimization'] },
        { name: 'Cybersecurity Assessment', price: 'From $3,000', features: ['Security audit', 'Vulnerability assessment', 'Compliance review'] },
        { name: 'Cloud Migration & Optimization', price: 'From $8,000', features: ['Cloud strategy', 'Migration planning', 'Cost optimization'] },
        { name: 'Data Center Design', price: 'From $15,000', features: ['Infrastructure design', 'Capacity planning', 'Energy efficiency'] },
        { name: 'IT Support & Managed Services', price: 'From $2,500/month', features: ['24/7 monitoring', 'Proactive maintenance', 'Help desk support'] }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Zap,
      services: [
        { name: 'Quantum Computing Solutions', price: '$2,500/month', features: ['Quantum simulation', 'Algorithm development', 'Research support'] },
        { name: 'Blockchain Development', price: '$1,800/month', features: ['Smart contracts', 'DApp development', 'DeFi solutions'] },
        { name: 'IoT Platform Management', price: '$950/month', features: ['Device management', 'Data analytics', 'Predictive maintenance'] },
        { name: 'Edge Computing Solutions', price: '$1,200/month', features: ['Edge AI', 'Real-time processing', 'Low latency'] },
        { name: 'AR/VR Development', price: '$1,500/month', features: ['Immersive experiences', '3D modeling', 'Interactive applications'] }
      ]
    },
    {
      name: 'Industry Solutions',
      icon: Building,
      services: [
        { name: 'Healthcare IT Solutions', price: 'From $4,500/month', features: ['HIPAA compliance', 'Patient management', 'Telemedicine platform'] },
        { name: 'Financial Technology', price: 'From $3,800/month', features: ['Digital banking', 'Payment processing', 'Regulatory compliance'] },
        { name: 'Manufacturing Intelligence', price: 'From $2,900/month', features: ['Industry 4.0', 'Predictive maintenance', 'Quality control'] },
        { name: 'Retail Technology', price: 'From $2,200/month', features: ['E-commerce platform', 'Inventory management', 'Customer analytics'] },
        { name: 'Education Technology', price: 'From $1,800/month', features: ['LMS platform', 'Online learning', 'Student management'] }
      ]
    }
  ];

  const addOnServices = [
    {
      name: 'Custom AI Model Development',
      description: 'Tailored AI solutions for your specific needs',
      price: 'From $25,000',
      icon: Brain
    },
    {
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      price: 'From $5,000',
      icon: Shield
    },
    {
      name: 'Digital Transformation Consulting',
      description: 'Strategic guidance for your digital journey',
      price: 'From $15,000',
      icon: Zap
    },
    {
      name: '24/7 Support & Monitoring',
      description: 'Round-the-clock technical support and system monitoring',
      price: 'From $2,000/month',
      icon: Server
    },
    {
      name: 'Quantum Computing Consultation',
      description: 'Expert guidance on quantum computing implementation',
      price: 'From $8,000',
      icon: Brain
    },
    {
      name: 'Blockchain Strategy & Development',
      description: 'Complete blockchain solution design and implementation',
      price: 'From $12,000',
      icon: Shield
    },
    {
      name: 'IoT Platform Customization',
      description: 'Tailored IoT solutions for your industry needs',
      price: 'From $6,000',
      icon: Server
    },
    {
      name: 'AR/VR Content Creation',
      description: 'Custom immersive content and applications',
      price: 'From $4,500',
      icon: Zap
    }
  ];

  return (
    <>
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our comprehensive AI, IT, and Micro SAAS services"
        canonical="https://ziontechgroup.com/pricing"
      />
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our core services with transparent pricing.
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-lg ${selectedPlan === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Monthly
              </span>
              <button
                onClick={() => setSelectedPlan(selectedPlan === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-zion-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    selectedPlan === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${selectedPlan === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Yearly
                <span className="ml-2 text-zion-cyan text-sm">Save 20%</span>
              </span>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-zion-purple to-zion-purple-dark border-2 border-zion-cyan'
                    : 'bg-zion-blue-dark border border-zion-blue-light'
                } hover:border-zion-cyan transition-all duration-300 transform hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-zion-slate-light">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark'
                      : 'bg-zion-blue-light hover:bg-zion-cyan text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Service Categories */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Service-Specific Pricing
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="py-3 border-b border-zion-blue-light/30 last:border-b-0">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-zion-slate-light font-medium">{service.name}</span>
                            <span className="text-zion-cyan font-semibold text-sm">{service.price}</span>
                          </div>
                          {service.features && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {service.features.map((feature, featureIndex) => (
                                <span key={featureIndex} className="px-2 py-1 text-xs bg-zion-blue-light/20 text-zion-slate-light rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Add-on Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Add-on Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {addOnServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-zion-slate-light text-sm mb-3">{service.description}</p>
                        <span className="text-zion-cyan font-semibold text-lg">{service.price}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan at any time?</h3>
                <p className="text-zion-slate-light">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
              </div>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom pricing for enterprise clients?</h3>
                <p className="text-zion-slate-light">Absolutely! We provide custom pricing for enterprise clients with specific requirements. Contact our sales team for a personalized quote.</p>
              </div>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What payment methods do you accept?</h3>
                <p className="text-zion-slate-light">We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.</p>
              </div>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Is there a setup fee?</h3>
                <p className="text-zion-slate-light">No setup fees for our standard plans. Custom implementations may have associated costs, which we'll discuss upfront.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your specific needs and get a personalized quote for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-colors">
                  Get Custom Quote
                </button>
                <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/20 px-8 py-4 rounded-lg font-semibold transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PricingPage;
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Star, Shield, Zap, Users, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { SERVICE_PRICING_TIERS } from '@/data/enhancedServices';
import { SEO } from '@/components/SEO';

const pricingFeatures = {
  starter: [
    "Core functionality implementation",
    "Basic technical support (8/5)",
    "Comprehensive documentation",
    "Online training sessions",
    "Email support",
    "Basic customization",
    "Standard deployment",
    "Monthly reporting"
  ],
  professional: [
    "Advanced features & capabilities",
    "Priority support (12/7)",
    "Custom documentation",
    "On-site training available",
    "Phone & email support",
    "Advanced customization",
    "Integration support",
    "Performance optimization",
    "Weekly reporting",
    "SLA guarantees",
    "Dedicated account manager"
  ],
  enterprise: [
    "Custom development & features",
    "24/7 dedicated support",
    "Custom documentation & training",
    "On-site training & workshops",
    "Priority phone, email & chat",
    "Full customization & integration",
    "Custom integrations",
    "Performance & security audit",
    "Real-time monitoring",
    "Custom reporting & analytics",
    "Dedicated project manager",
    "On-site implementation support",
    "Custom SLA agreements",
    "Quarterly business reviews"
  ]
};

const additionalServices = [
  {
    name: "AI Model Training",
    description: "Custom AI model development and training",
    price: "$5,000 - $25,000",
    features: ["Data preparation", "Model training", "Performance optimization", "Deployment support"]
  },
  {
    name: "Cybersecurity Audit",
    description: "Comprehensive security assessment and recommendations",
    price: "$3,000 - $15,000",
    features: ["Vulnerability assessment", "Penetration testing", "Compliance review", "Security roadmap"]
  },
  {
    name: "Cloud Migration",
    description: "Complete cloud infrastructure migration",
    price: "$10,000 - $50,000",
    features: ["Architecture design", "Data migration", "Testing & validation", "Go-live support"]
  },
  {
    name: "Digital Transformation",
    description: "End-to-end business transformation consulting",
    price: "$25,000 - $100,000+",
    features: ["Strategy development", "Technology assessment", "Change management", "Implementation oversight"]
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Pricing & Service Tiers - Zion Tech Group" 
        description="Transparent pricing for enterprise IT services, AI solutions, and digital transformation. Choose from Starter, Professional, or Enterprise tiers with flexible billing options."
        keywords="IT services pricing, AI solutions cost, enterprise pricing, digital transformation pricing"
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  SERVICE_CATEGORIES, 
  SERVICE_PRICING_TIERS, 
  CONTACT_INFO, 
  SERVICE_GUARANTEES,
  COMPREHENSIVE_SERVICES
} from '@/data/comprehensiveServices';
import { 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Globe,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
  Calendar,
  Clock,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';

export default function PricingPage() {
=======
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MICRO_SAAS_SERVICES, 
  MICRO_SAAS_CATEGORIES,
  PRICING_TIERS,
  CONTACT_INFO 
} from "@/data/microSaasServices";
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Code, 
  DollarSign, 
  Heart, 
  ShoppingCart, 
  GraduationCap,
  Star,
  CheckCircle,
  X,
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Zap,
  Users,
  Lock,
  Clock,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const categoryIcons = {
  'AI Business Solutions': Brain,
  'IT Infrastructure': Cloud,
  'Data Analytics': BarChart3,
  'AI Development': Code,
  'FinTech': DollarSign,
  'HealthTech': Heart,
  'E-commerce': ShoppingCart,
  'EdTech': GraduationCap
};

const pricingFeatures = {
  basic: [
    "Core service functionality",
    "Standard support (8/5)",
    "Basic integrations",
    "Community documentation",
    "Email support"
  ],
  professional: [
    "All Basic features",
    "Advanced analytics",
    "Priority support (12/7)",
    "Custom integrations",
    "Phone & email support",
    "Dedicated account manager",
    "Training sessions"
  ],
  enterprise: [
    "All Professional features",
    "Custom development",
    "24/7 dedicated support",
    "White-label solutions",
    "SLA guarantees",
    "On-site training",
    "Custom contracts",
    "Dedicated infrastructure"
  ]
};

const comparisonFeatures = [
  "AI-Powered Automation",
  "Real-time Analytics",
  "Multi-cloud Support",
  "API-First Architecture",
  "Scalable Infrastructure",
  "Custom Integrations",
  "White-label Solutions",
  "24/7 Technical Support",
  "99.9% Uptime Guarantee",
  "SOC 2 Type II Compliant",
  "30-Day Money Back Guarantee",
  "Free Migration Support"
];

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const filteredServices = selectedCategory === 'all' 
import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  Phone, 
  Mail, 
  Globe,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Clock,
  Users,
  Code,
  Database,
  Smartphone,
  Lock,
  BarChart3,
  Network,
  Cloud,
  Server
} from 'lucide-react';
import { PRICING_TIERS, CONTACT_INFO, SERVICE_CATEGORIES } from '@/data/enhancedServices';

export default function PricingPage() {
  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      services: ["AI Development", "Machine Learning Models", "Chatbot Development", "Predictive Analytics"]
    },
    {
      name: "IT Infrastructure",
      icon: <Server className="w-6 h-6" />,
      services: ["Cloud Migration", "DevOps Automation", "Cybersecurity", "Network Management"]
    },
    {
      name: "Web Development",
      icon: <Code className="w-6 h-6" />,
      services: ["Custom Websites", "E-commerce Platforms", "Progressive Web Apps", "API Development"]
    },
    {
      name: "Business Solutions",
      icon: <BarChart3 className="w-6 h-6" />,
      services: ["Process Automation", "CRM Integration", "Data Analytics", "Workflow Optimization"]
    },
    {
      name: "Digital Marketing",
      icon: <Globe className="w-6 h-6" />,
      services: ["SEO Optimization", "Social Media Management", "Content Automation", "Analytics Dashboard"]
    },
    {
      name: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      services: ["Cross-platform Apps", "Native Development", "App Store Optimization", "Maintenance"]
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Service Pricing & Plans - Zion Tech Group" 
        description="Transparent pricing for our comprehensive IT & AI services. Choose from Basic, Professional, or Enterprise plans tailored to your business needs."
        keywords="IT services pricing, AI development cost, cloud migration pricing, cybersecurity pricing, business automation cost"
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
    ? MICRO_SAAS_SERVICES 
    : MICRO_SAAS_SERVICES.filter(service => 
        service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );

  const getDiscountedPrice = (price: number) => {
    return billingCycle === 'yearly' ? Math.round(price * 0.8) : price;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
      <section className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transparent Pricing Plans
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Choose the pricing tier that best fits your business size and requirements. 
            All plans include our comprehensive service guarantees and ongoing support.
=======
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Choose the perfect plan for your business. All our micro SAAS services come with 
            flexible pricing and enterprise-grade features at startup prices.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-zion-purple' : 'bg-zion-slate-light'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Yearly
              <Badge className="ml-2 bg-green-500 text-white">Save 20%</Badge>
            </span>
          </div>
      <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <GradientHeading level="h1" className="text-5xl md:text-6xl font-bold mb-6">
            Transparent Pricing Plans
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
            Choose the perfect plan for your business needs. All plans include our commitment to quality, 
            security, and ongoing support to ensure your success.
          </p>
          
          {/* Contact Banner */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-cyan mb-2" />
                <p className="text-zion-slate-light text-sm">Call for Custom Quote</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-white font-semibold hover:text-zion-cyan transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-cyan mb-2" />
                <p className="text-zion-slate-light text-sm">Email for Details</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-semibold hover:text-zion-cyan transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="w-8 h-8 text-zion-cyan mb-2" />
                <p className="text-zion-slate-light text-sm">Visit Website</p>
                <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-zion-cyan transition-colors">
                  {CONTACT_INFO.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Choose Your Plan</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Start with our Basic plan and scale up as your business grows. All plans include our core features and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`relative bg-white/5 backdrop-blur-sm border ${
                key === 'professional' 
                  ? 'border-zion-cyan/50 bg-zion-cyan/10 scale-105' 
                  : 'border-white/20'
              }`}>
                {key === 'professional' && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-zion-cyan to-blue-500 text-white border-0">
                    Most Popular
                  </Badge>
                )}
                
        </div>
      </div>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Start with Basic and scale up as your business grows. All plans include our core features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`relative ${key === 'professional' ? 'border-zion-purple border-2 scale-105 shadow-xl' : ''}`}>
                {key === 'professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-zion-purple text-white px-4 py-2">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-zion-blue">{tier.name}</CardTitle>
                  <CardDescription>
                    Perfect for {key === 'basic' ? 'startups' : key === 'professional' ? 'growing businesses' : 'enterprises'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-zion-blue">{tier.multiplier}x</span>
                    <span className="text-gray-600 ml-2">base pricing</span>
                  </div>
                  <ul className="text-left space-y-3 mb-8">
                    {pricingFeatures[key as keyof typeof pricingFeatures].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={key === 'professional' ? 'default' : 'outline'}>
=======
                <CardHeader className="text-center">
                  <CardTitle className={`text-3xl ${
                    key === 'professional' ? 'text-zion-cyan' : 'text-white'
                  }`}>
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-lg">
                    {tier.description}
                  </CardDescription>
                  <div className="text-4xl font-bold text-white mt-6">
                    {tier.priceRange}
                  </div>
                  <p className="text-zion-slate-light text-sm mt-2">
                    Starting price for standard implementation
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-4 text-left mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      key === 'professional' 
                        ? 'bg-zion-cyan hover:bg-zion-cyan-dark text-white' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                    }`}
                    onClick={() => window.open(`mailto:${CONTACT_INFO.email}?subject=Pricing Inquiry: ${tier.name} Tier`, '_blank')}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Service Pricing by Category
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our comprehensive range of micro SAAS solutions with transparent pricing
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setSelectedCategory(value)}>
            <TabsList className="grid w-full grid-cols-9 bg-zion-blue border-zion-blue-light mb-8">
              <TabsTrigger value="all" className="text-white">All</TabsTrigger>
              {MICRO_SAAS_CATEGORIES.map((category) => {
                const IconComponent = categoryIcons[category.label as keyof typeof categoryIcons];
                return (
                  <TabsTrigger key={category.value} value={category.value} className="text-white">
                    {IconComponent && <IconComponent className="h-4 w-4 mr-2" />}
                    {category.label.split(' ')[0]}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            
            <TabsContent value={selectedCategory} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <Card key={service.id} className="bg-white border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                    <div className="relative">
                      <img 
                        src={service.images[0]} 
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 right-4 bg-zion-purple">
                        {service.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {service.description.substring(0, 120)}...
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm">{service.rating}</span>
                          <span className="text-gray-500 text-sm ml-1">({service.reviewCount})</span>
                        </div>
                        <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                          AI Score: {service.aiScore}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-zion-blue">
                          ${getDiscountedPrice(service.price)}
                          <span className="text-sm text-gray-500">/{billingCycle === 'monthly' ? 'month' : 'month (billed yearly)'}</span>
                        </div>
                        {billingCycle === 'yearly' && (
                          <Badge className="bg-green-500 text-white">
                            Save ${Math.round(service.price * 0.2)}/month
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-2 mb-4">
                        {service.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="mr-2 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
=======
      {/* Service Category Pricing */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Service Category Pricing</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Detailed pricing for each service category. Contact us for custom quotes and enterprise solutions.
            </p>
          </div>

          <Tabs defaultValue="ai-services" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white/10 backdrop-blur-sm border border-white/20">
              {serviceCategories.map((category) => (
                <TabsTrigger 
                  key={category.name} 
                  value={category.name.toLowerCase().replace(/\s+/g, '-')}
                  className="text-white hover:text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white"
                >
                  <span className="mr-2">{category.icon}</span>
                  <span className="hidden lg:inline">{category.name.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceCategories.map((category) => (
              <TabsContent key={category.name} value={category.name.toLowerCase().replace(/\s+/g, '-')} className="mt-8">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center">
                      {category.icon}
                      <span className="ml-3">{category.name}</span>
                    </CardTitle>
                    <CardDescription className="text-zion-slate-light text-lg">
                      Comprehensive solutions for {category.name.toLowerCase()} needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-2">Basic</h4>
                        <div className="text-2xl font-bold text-zion-cyan mb-4">$399 - $1,999</div>
                        <ul className="text-left space-y-2 text-zion-slate-light text-sm">
                          {category.services.slice(0, 2).map((service, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                              {service}
                            </li>
                          ))}
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                            Email support
                          </li>
                        </ul>
                      </div>
                      
                      <div className="text-center p-6 bg-zion-cyan/10 rounded-lg border border-zion-cyan/30">
                        <h4 className="text-lg font-semibold text-white mb-2">Professional</h4>
                        <div className="text-2xl font-bold text-zion-cyan mb-4">$1,999 - $4,999</div>
                        <ul className="text-left space-y-2 text-zion-slate-light text-sm">
                          {category.services.map((service, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                              {service}
                            </li>
                          ))}
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                            Priority support
                          </li>
                        </ul>
                      </div>
                      
                      <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-2">Enterprise</h4>
                        <div className="text-2xl font-bold text-zion-cyan mb-4">$4,999+</div>
                        <ul className="text-left space-y-2 text-zion-slate-light text-sm">
                          {category.services.map((service, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                              {service}
                            </li>
                          ))}
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                            24/7 dedicated support
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                            Custom development
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What's Included in Every Plan</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Core features and benefits that come with all our service plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Enterprise Security</h4>
              <p className="text-zion-slate-light">Bank-level security standards and compliance with industry regulations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Expert Support</h4>
              <p className="text-zion-slate-light">Dedicated support team with deep technical expertise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Fast Implementation</h4>
              <p className="text-zion-slate-light">Quick deployment with minimal disruption to your business</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Ongoing Optimization</h4>
              <p className="text-zion-slate-light">Continuous improvement and performance optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              We deliver enterprise-grade solutions with startup agility and proven results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Immediate Deployment",
                description: "All services ready for instant deployment"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Enterprise Security",
                description: "SOC 2 compliance and 24/7 monitoring"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Dedicated Support",
                description: "24/7 technical support with account managers"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Proven ROI",
                description: "Average 300% ROI within 6 months"
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
=======
      {/* FAQ Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Common questions about our pricing and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">How do you determine pricing for custom projects?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Pricing is based on project complexity, scope, timeline, and specific requirements. 
                  We provide detailed quotes after understanding your needs through a consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Do you offer payment plans or financing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Yes, we offer flexible payment plans for larger projects. We can structure payments 
                  to align with project milestones or your budget requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">What's included in ongoing support and maintenance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Ongoing support includes monitoring, updates, security patches, performance optimization, 
                  and technical assistance. Response times vary by plan tier.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Can I upgrade or downgrade my plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Absolutely! You can upgrade or downgrade your plan at any time. We'll work with you 
                  to ensure a smooth transition with minimal disruption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Contact our team to discuss your needs and get a custom quote for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-zion-blue mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">{CONTACT_INFO.mobile}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a href={CONTACT_INFO.website} className="text-zion-cyan hover:underline">
                      {CONTACT_INFO.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-zion-blue mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Link to="/request-quote">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Request Custom Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/micro-saas-services">
                  <Button variant="outline" className="w-full border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                    View All Services
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 p-6 bg-zion-blue/5 rounded-lg border border-zion-blue/20">
                <h4 className="font-medium text-zion-blue mb-2">What's Included:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 Technical Support</li>
                  <li>• 99.9% Uptime Guarantee</li>
                  <li>• SOC 2 Type II Compliant</li>
                  <li>• 30-Day Money Back Guarantee</li>
                  <li>• Free Migration Support</li>
                  <li>• Custom Integration Services</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                Explore All Micro SAAS Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
=======
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-zion-slate-light text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a personalized quote and consultation. We'll help you choose the right plan for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-10 py-4 text-lg"
              onClick={() => window.open(`mailto:${CONTACT_INFO.email}?subject=Pricing Consultation`, '_blank')}
            >
              Get Custom Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-10 py-4 text-lg"
              onClick={() => window.open(`tel:${CONTACT_INFO.phone}`, '_blank')}
            >
              Call {CONTACT_INFO.phone}
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-zion-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-2">Proven Track Record</h4>
                <p className="text-zion-slate-light text-sm">Successfully delivered 500+ projects</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-zion-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-2">Fast Delivery</h4>
                <p className="text-zion-slate-light text-sm">Average project completion in 4-8 weeks</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-zion-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-2">Expert Team</h4>
                <p className="text-zion-slate-light text-sm">Certified professionals with 10+ years experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
}
