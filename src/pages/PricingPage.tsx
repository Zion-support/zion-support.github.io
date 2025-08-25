<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Check, Star, Zap, Brain, Server, Shield } from 'lucide-react';
=======
import { Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICE_PRICING_TIERS, CONTACT_INFO, SERVICE_GUARANTEES } from '../data/comprehensiveServices';
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d

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
        { name: 'AI-Powered Lead Scoring', price: '$299/month' },
        { name: 'SmartContract AI', price: '$499/month' },
        { name: 'Quantum Analytics', price: '$799/month' },
        { name: 'Blockchain Supply Chain', price: '$599/month' },
        { name: 'AR/VR Business Solutions', price: '$899/month' }
      ]
    },
    {
      name: 'AI Services',
      icon: Brain,
      services: [
        { name: 'Quantum Machine Learning', price: '$1,299/month' },
        { name: 'AI Ethics & Governance', price: '$899/month' },
        { name: 'Edge AI & IoT Intelligence', price: '$699/month' },
        { name: 'AI-Powered Cybersecurity', price: '$799/month' },
        { name: 'Generative AI & Content Creation', price: '$599/month' }
      ]
    },
    {
      name: 'IT Infrastructure',
      icon: Server,
      services: [
        { name: 'Enterprise Network Infrastructure', price: 'From $5,000' },
        { name: 'Cybersecurity Assessment', price: 'From $3,000' },
        { name: 'Cloud Migration & Optimization', price: 'From $8,000' },
        { name: 'Data Center Design', price: 'From $15,000' },
        { name: 'IT Support & Managed Services', price: 'From $2,500/month' }
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
                        <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-zion-blue-light/30">
                          <span className="text-zion-slate-light">{service.name}</span>
                          <span className="text-zion-cyan font-semibold">{service.price}</span>
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
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const filteredServices = selectedCategory === 'all' 
    ? COMPREHENSIVE_SERVICES 
    : COMPREHENSIVE_SERVICES.filter(service => service.category === selectedCategory);

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  const getDiscountedPrice = (price: number, tier: string) => {
    const pricingTier = SERVICE_PRICING_TIERS[tier as keyof typeof SERVICE_PRICING_TIERS];
    if (pricingTier) {
      return price * (1 - pricingTier.discount);
    }
    return price;
  };

  const getYearlyDiscount = (monthlyPrice: number) => {
    return monthlyPrice * 0.8; // 20% discount for yearly billing
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <SEO 
        title="Pricing & Plans - Zion Tech Group" 
        description="Transparent pricing for our comprehensive IT and AI services. Choose from flexible pricing tiers designed for startups, SMBs, and enterprises."
        keywords="pricing, IT services pricing, AI services pricing, micro SAAS pricing, technology consulting pricing"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
<<<<<<< HEAD
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Choose the right service level for your business needs. All tiers include expert consultation, 
            implementation support, and ongoing maintenance.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-zion-cyan' : 'text-zion-slate-light'}`}>
              Monthly
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="bg-white/20 hover:bg-white/30"
            >
              <div className={`w-6 h-4 bg-white rounded-full p-0.5 transition-all duration-300 ${billingCycle === 'annual' ? 'translate-x-2' : ''}`}>
                <div className="w-3 h-3 bg-zion-blue rounded-full"></div>
              </div>
            </Button>
            <span className={`text-sm ${billingCycle === 'annual' ? 'text-zion-cyan' : 'text-zion-slate-light'}`}>
              Annual <Badge className="ml-1 bg-zion-cyan text-white">Save 20%</Badge>
            </span>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-zion-blue-dark py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Phone</p>
              <p className="text-white font-semibold">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Email</p>
              <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Address</p>
              <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Pricing Tiers */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`h-full ${key === 'professional' ? 'border-zion-purple shadow-xl scale-105' : 'border-zion-blue-light'}`}>
                <CardHeader className="text-center">
                  {key === 'professional' && (
                    <Badge className="w-fit mx-auto mb-2 bg-zion-purple text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-2xl text-zion-blue">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-zion-purple mb-2">
                    {tier.price}
                  </div>
                  <CardDescription className="text-zion-slate">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-zion-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-zion-blue hover:bg-zion-blue-dark">
                      Choose {tier.name}
                    </Button>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full">
                        Contact Sales
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 bg-zion-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Additional Services</h2>
            <p className="text-zion-slate text-lg max-w-2xl mx-auto">
              Need specialized services? We offer custom solutions tailored to your specific requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service) => (
              <Card key={service.name} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-blue">{service.name}</CardTitle>
                  <CardDescription className="text-zion-slate">
                    {service.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-zion-purple">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-zion-slate text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-zion-blue hover:bg-zion-blue-dark">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate text-lg max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Global Reach</h3>
              <p className="text-zion-slate">Serving clients worldwide with 24/7 support and local expertise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Enterprise Security</h3>
              <p className="text-zion-slate">Bank-grade security and compliance with industry standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Innovation First</h3>
              <p className="text-zion-slate">Cutting-edge AI and emerging technology solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Expert Team</h3>
              <p className="text-zion-slate">Certified professionals with deep industry expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-zion-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-zion-slate text-lg max-w-2xl mx-auto">
              Get answers to common questions about our services and pricing.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's included in the pricing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate">
                  All pricing includes implementation, training, documentation, and support. Enterprise tiers include 
                  dedicated project management and on-site support. Additional customization and integration work 
                  may incur additional costs.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer custom pricing for large projects?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate">
                  Yes, we offer custom pricing for enterprise projects and large-scale implementations. 
                  Contact our sales team for a personalized quote based on your specific requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What kind of support do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate">
                  Support varies by tier: Starter includes email support, Professional includes phone and email, 
                  and Enterprise includes 24/7 dedicated support with dedicated account managers.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I upgrade or downgrade my plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate">
                  Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, 
                  while downgrades take effect at the next billing cycle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/enhanced-services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                View All Services
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p className="text-sm">
              <strong>Contact:</strong> +1 302 464 0950 | kleber@ziontechgroup.com
            </p>
            <p className="text-sm">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-302a
=======
      <section className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transparent Pricing Plans
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Choose the pricing tier that best fits your business size and requirements. 
            All plans include our comprehensive service guarantees and ongoing support.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-zion-cyan' : 'bg-white/20'
              }`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Yearly
              <Badge className="ml-2 bg-green-500 text-white">Save 20%</Badge>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call {CONTACT_INFO.mobile}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue mb-4">Choose Your Plan</h2>
            <p className="text-xl text-zion-slate max-w-2xl mx-auto">
              Flexible pricing tiers designed to meet the needs of businesses at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              <div key={key} className={`relative p-8 rounded-2xl border-2 ${
                key === 'smb' 
                  ? 'border-zion-blue bg-zion-blue/5 scale-105 shadow-2xl' 
                  : 'border-zion-slate-light bg-white shadow-lg'
              }`}>
                {key === 'smb' && (
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zion-cyan text-white px-4 py-2">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zion-blue mb-2">{tier.name}</h3>
                  <p className="text-zion-slate">{tier.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-zion-slate">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-6">
                  <div className="text-sm text-zion-slate mb-2">
                    {tier.discount > 0 ? `${tier.discount * 100}% discount applied` : 'Standard pricing'}
                  </div>
                  <Button asChild className="w-full bg-zion-blue hover:bg-zion-blue-dark">
                    <a href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${tier.name} pricing tier`}>
                      Get {tier.name} Pricing
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Pricing */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue mb-4">Service Category Pricing</h2>
            <p className="text-xl text-zion-slate max-w-2xl mx-auto">
              Browse our services by category and see pricing for each service type
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCategory === 'all'
                  ? 'bg-zion-blue text-white'
                  : 'bg-zion-slate-light text-zion-slate hover:bg-zion-blue hover:text-white'
              }`}
            >
              All Categories
            </button>
            {SERVICE_CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === category.name
                    ? 'bg-zion-blue text-white'
                    : 'bg-zion-slate-light text-zion-slate hover:bg-zion-blue hover:text-white'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-zion-slate-light hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-zion-blue line-clamp-2">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-zion-slate mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Pricing by Tier */}
                  <div className="space-y-3 mb-4">
                    {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => {
                      const discountedPrice = getDiscountedPrice(service.price || 0, key);
                      const yearlyPrice = billingCycle === 'yearly' ? getYearlyDiscount(discountedPrice) : discountedPrice;
                      
                      return (
                        <div key={key} className="flex justify-between items-center p-2 bg-zion-slate-light rounded">
                          <span className="text-sm font-medium text-zion-slate">{tier.name}:</span>
                          <div className="text-right">
                            <div className="font-bold text-zion-purple">
                              {formatPrice(yearlyPrice)}
                            </div>
                            {billingCycle === 'yearly' && (
                              <div className="text-xs text-green-600">Save 20%</div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-zion-blue hover:bg-zion-blue-dark">
                      <Link to={`/services/${service.id}`}>View Details</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                      <a href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${service.title}`}>
                        Get Quote
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="bg-zion-slate-light py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-zion-slate max-w-2xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-zion-blue mb-4">How does the pricing tier system work?</h3>
              <p className="text-zion-slate leading-relaxed">
                We offer three pricing tiers: Startup (15% discount), Small & Medium Business (5% discount), and Enterprise (standard pricing). 
                Each tier includes different levels of support, delivery speed, and additional features. 
                The tier you qualify for depends on your business size and requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-zion-blue mb-4">Do you offer yearly billing discounts?</h3>
              <p className="text-zion-slate leading-relaxed">
                Yes! We offer a 20% discount for yearly billing compared to monthly billing. 
                This applies to all services and pricing tiers, providing significant savings for businesses 
                that commit to longer-term partnerships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-zion-blue mb-4">What's included in the service pricing?</h3>
              <p className="text-zion-slate leading-relaxed">
                Our service pricing includes the complete solution: planning, implementation, testing, deployment, 
                documentation, and ongoing support. We also provide training for your team and ensure compliance 
                with industry standards. There are no hidden fees or additional charges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-zion-blue mb-4">Can I customize a service package?</h3>
              <p className="text-zion-slate leading-relaxed">
                Absolutely! We understand that every business has unique needs. We offer custom service packages 
                that can be tailored to your specific requirements, timeline, and budget. Contact us for a 
                free consultation to discuss your custom needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-zion-blue mb-4">What payment terms do you offer?</h3>
              <p className="text-zion-slate leading-relaxed">
                We offer flexible payment terms including upfront payment, milestone-based payments, and 
                net 30 payment terms for qualified businesses. We also accept major credit cards, bank transfers, 
                and can work with your existing procurement processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="bg-zion-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Service Guarantees</h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We stand behind every service with comprehensive guarantees and ongoing support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_GUARANTEES.map((guarantee, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue-dark rounded-lg">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{guarantee}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-zion-purple to-zion-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and customized pricing proposal. 
            Our team will work with you to find the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call {CONTACT_INFO.mobile}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`mailto:${CONTACT_INFO.email}`}>Email Us</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-zion-slate-light">No hidden fees, clear pricing structure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Terms</h3>
              <p className="text-zion-slate-light">Payment plans that work for your business</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ROI Focused</h3>
              <p className="text-zion-slate-light">Services designed to deliver measurable results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="bg-zion-slate text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <a href={`tel:${CONTACT_INFO.mobile}`} className="hover:text-zion-cyan">
                    {CONTACT_INFO.mobile}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-zion-cyan">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-zion-cyan" />
                  <a href={CONTACT_INFO.website} className="hover:text-zion-cyan" target="_blank" rel="noopener noreferrer">
                    {CONTACT_INFO.website}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p>{CONTACT_INFO.businessHours}</p>
                <p className="text-zion-cyan font-semibold">{CONTACT_INFO.emergencySupport}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/comprehensive-services" className="block hover:text-zion-cyan">All Services</Link>
                <Link to="/contact" className="block hover:text-zion-cyan">Contact Us</Link>
                <Link to="/request-quote" className="block hover:text-zion-cyan">Request Quote</Link>
                <a href={CONTACT_INFO.website} className="block hover:text-zion-cyan" target="_blank" rel="noopener noreferrer">
                  Main Website
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
              <div className="space-y-2 text-sm">
                <p>✓ Competitive pricing</p>
                <p>✓ Flexible payment terms</p>
                <p>✓ No hidden fees</p>
                <p>✓ Money-back guarantee</p>
                <p>✓ Ongoing support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
