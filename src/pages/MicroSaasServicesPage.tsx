import React, { useState, useEffect } from 'react';
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  ShoppingCart, 
  BarChart3, 
  Zap,
  Link as LinkIcon,
  Network,
  Monitor,
  Smartphone,
  Cpu,
  Brain,
  Eye,
  Lock,
  Leaf,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  Rocket,
  Lightbulb,
  Award,
  Clock,
  DollarSign
} from "lucide-react";
import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, MICRO_SAAS_SUBCATEGORIES, CONTACT_INFO, MARKET_ANALYSIS, SERVICE_BENEFITS, INTEGRATION_CAPABILITIES, SUPPORT_SERVICES } from "@/data/microSaasServices";

// Service category icons mapping
const categoryIcons: { [key: string]: React.ReactNode } = {
  'AI Business Solutions': <Zap className="w-6 h-6" />,
  'Quantum Computing': <Cpu className="w-6 h-6" />,
  'Blockchain Services': <Network className="w-6 h-6" />,
  'Edge Computing': <Monitor className="w-6 h-6" />,
  'Data Services': <Database className="w-6 h-6" />,
  'Autonomous Systems': <Rocket className="w-6 h-6" />,
  'IoT Solutions': <Smartphone className="w-6 h-6" />,
  'Neuromorphic Computing': <Brain className="w-6 h-6" />,
  'Privacy-Preserving AI': <Lock className="w-6 h-6" />,
  'Quantum AI': <Cpu className="w-6 h-6" />,
  'Biometric Security': <Eye className="w-6 h-6" />,
  'Extended Reality': <Globe className="w-6 h-6" />,
  'Green Computing': <Leaf className="w-6 h-6" />,
  'Multi-Agent AI': <Users className="w-6 h-6" />,
  'Explainable AI': <Target className="w-6 h-6" />
};

// Service highlights with benefits and features
const serviceHighlights = [
  {
    title: "Quantum Computing as a Service",
    description: "Access to quantum computing resources for complex optimization problems, cryptography, and scientific simulations",
    benefits: ["Quantum Advantage", "Cryptography", "Scientific Simulation", "Optimization"],
    icon: <Cpu className="w-8 h-8 text-zion-cyan" />,
    price: "$1,499/month",
    marketPrice: "$2,999/month",
    savings: "50%"
  },
  {
    title: "Edge AI Computing Platform",
    description: "Distributed AI computing platform that brings machine learning to edge devices for real-time processing",
    benefits: ["Real-time AI", "Edge Processing", "IoT Integration", "Low Latency"],
    icon: <Monitor className="w-8 h-8 text-zion-purple" />,
    price: "$599/month",
    marketPrice: "$1,199/month",
    savings: "50%"
  },
  {
    title: "Blockchain Infrastructure as a Service",
    description: "Complete blockchain infrastructure including node management, smart contracts, and DeFi protocol integration",
    benefits: ["Smart Contracts", "DeFi Integration", "Token Creation", "Multi-chain Support"],
    icon: <Network className="w-8 h-8 text-zion-blue" />,
    price: "$399/month",
    marketPrice: "$799/month",
    savings: "50%"
  },
  {
    title: "Neuromorphic Computing Platform",
    description: "Brain-inspired computing platform that mimics neural networks for ultra-efficient AI processing",
    benefits: ["Brain-inspired AI", "Energy Efficiency", "Cognitive Computing", "Robotics"],
    icon: <Brain className="w-8 h-8 text-zion-green" />,
    price: "$1,299/month",
    marketPrice: "$2,599/month",
    savings: "50%"
  }
];

// Pricing tiers for different service categories
const pricingTiers = [
  {
    name: "Starter",
    price: "$299",
    description: "Perfect for small businesses and startups",
    features: ["Core Features", "Email Support", "Basic Analytics", "Standard Integration"],
    popular: false,
    savings: "30-40% vs market"
  },
  {
    name: "Professional",
    price: "$799",
    description: "Ideal for growing businesses",
    features: ["Advanced Features", "Priority Support", "Advanced Analytics", "Custom Integration", "Training"],
    popular: true,
    savings: "40-50% vs market"
  },
  {
    name: "Enterprise",
    price: "$2,499+",
    description: "For large organizations with complex needs",
    features: ["Full Feature Set", "24/7 Support", "Custom Development", "Dedicated Manager", "On-site Training"],
    popular: false,
    savings: "50-60% vs market"
  }
];

// Market positioning and competitive advantages
const competitiveAdvantages = [
  {
    title: "Cutting-Edge Technology",
    description: "Access to the latest innovations in quantum computing, neuromorphic computing, and edge AI",
    icon: <Lightbulb className="w-6 h-6 text-zion-cyan" />
  },
  {
    title: "Competitive Pricing",
    description: "50% lower than market rates while maintaining premium features and support",
    icon: <DollarSign className="w-6 h-6 text-zion-green" />
  },
  {
    title: "Global Support",
    description: "24/7 support with dedicated account managers and on-site training available",
    icon: <Globe className="w-6 h-6 text-zion-purple" />
  },
  {
    title: "ROI Guarantee",
    description: "Average 300-500% ROI with measurable cost savings and efficiency gains",
    icon: <TrendingUp className="w-6 h-6 text-zion-blue" />
  }
];

export default function MicroSaasServicesPage() {
  const [listings, setListings] = useState<ProductListing[]>(MICRO_SAAS_SERVICES);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter services by category
  const filteredListings = selectedCategory === 'all' 
    ? listings 
    : listings.filter(service => service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Next-Generation Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Cutting-edge technology services including Quantum Computing, Edge AI, Blockchain, and Neuromorphic Computing. 
            Transform your business with innovative solutions that are 50% more affordable than market rates.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg">
              <Rocket className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
              <ExternalLink className="w-5 h-5 mr-2" />
              View All Services
            </Button>
          </div>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-dark/50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-zion-cyan text-lg font-semibold mb-4">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2 text-zion-cyan" />
                <div>
                  <p className="text-zion-slate-light">Mobile</p>
                  <p className="text-white font-medium">{CONTACT_INFO.mobile}</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2 text-zion-cyan" />
                <div>
                  <p className="text-zion-slate-light">Email</p>
                  <p className="text-white font-medium">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2 text-zion-cyan" />
                <div>
                  <p className="text-zion-slate-light">Address</p>
                  <p className="text-white font-medium">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Highlights */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Next-Generation Services
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Discover our most innovative solutions that are revolutionizing industries worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceHighlights.map((service, index) => (
              <div key={index} className="bg-zion-slate-darker rounded-lg p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <div className="text-right">
                    <p className="text-zion-cyan font-bold text-lg">{service.price}</p>
                    <p className="text-zion-slate-light text-sm line-through">{service.marketPrice}</p>
                    <span className="bg-zion-green text-black text-xs px-2 py-1 rounded-full font-bold">
                      Save {service.savings}
                    </span>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                <div className="space-y-1">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-zion-green" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 bg-zion-slate-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              We combine cutting-edge technology with exceptional value to deliver unmatched ROI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-zion-slate-dark rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{advantage.title}</h3>
                <p className="text-zion-slate-light text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Choose the plan that fits your business needs with guaranteed savings vs market rates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-zion-slate-darker rounded-lg p-8 border-2 ${
                tier.popular 
                  ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                  : 'border-zion-slate-light/20'
              } relative`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-black px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-white font-bold text-2xl mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-zion-cyan font-bold text-4xl">{tier.price}</span>
                    <span className="text-zion-slate-light text-lg">/month</span>
                  </div>
                  <p className="text-zion-slate-light text-sm mb-4">{tier.description}</p>
                  <div className="bg-zion-green/20 border border-zion-green text-zion-green px-3 py-1 rounded-full text-sm font-bold">
                    {tier.savings}
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 mr-3 text-zion-green flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-zion-cyan hover:bg-zion-cyan-dark text-white' 
                      : 'bg-zion-slate-light hover:bg-zion-slate text-zion-slate-dark'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI and Benefits */}
      <section className="py-16 bg-zion-slate-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven ROI and Business Impact
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Our services deliver measurable results with industry-leading return on investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zion-slate-dark rounded-lg p-6 text-center">
              <div className="text-zion-cyan font-bold text-3xl mb-2">300-500%</div>
              <div className="text-white font-semibold mb-2">Average ROI</div>
              <div className="text-zion-slate-light text-sm">Across all service categories</div>
            </div>
            <div className="bg-zion-slate-dark rounded-lg p-6 text-center">
              <div className="text-zion-green font-bold text-3xl mb-2">40-80%</div>
              <div className="text-white font-semibold mb-2">Cost Savings</div>
              <div className="text-zion-slate-light text-sm">Compared to market rates</div>
            </div>
            <div className="bg-zion-slate-dark rounded-lg p-6 text-center">
              <div className="text-zion-purple font-bold text-3xl mb-2">2-8</div>
              <div className="text-white font-semibold mb-2">Weeks to Value</div>
              <div className="text-zion-slate-light text-sm">Time to see results</div>
            </div>
            <div className="bg-zion-slate-dark rounded-lg p-6 text-center">
              <div className="text-zion-blue font-bold text-3xl mb-2">24/7</div>
              <div className="text-white font-semibold mb-2">Support Available</div>
              <div className="text-zion-slate-light text-sm">Global support coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integration
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Connect with your existing tools and platforms for maximum efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {INTEGRATION_CAPABILITIES.platforms.map((platform, index) => (
              <div key={index} className="bg-zion-slate-darker rounded-lg p-4 text-center border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="text-zion-cyan font-semibold">{platform}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 bg-zion-slate-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Support
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              From basic support to dedicated enterprise solutions, we've got you covered
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(SUPPORT_SERVICES.levels).map(([level, details]) => (
              <div key={level} className="bg-zion-slate-dark rounded-lg p-6 border border-zion-slate-light/20">
                <h3 className="text-white font-bold text-xl mb-4 capitalize">{level}</h3>
                <div className="mb-4">
                  <div className="text-zion-cyan font-semibold text-lg">{details.responseTime}</div>
                  <div className="text-zion-slate-light text-sm">Response Time</div>
                </div>
                <div className="space-y-3 mb-6">
                  {details.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-zion-green" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="text-zion-slate-light text-sm">
                  <div className="font-semibold mb-2">Channels:</div>
                  <div className="flex flex-wrap gap-2">
                    {details.channels.map((channel, idx) => (
                      <span key={idx} className="bg-zion-slate-darker px-2 py-1 rounded text-xs">
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already accelerated their digital transformation with Zion Tech Group
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call {CONTACT_INFO.mobile}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              Email {CONTACT_INFO.email}
            </Button>
          </div>
          <div className="mt-8 text-white/80 text-sm">
            <p>Visit our website: <a href={CONTACT_INFO.website} className="underline hover:text-white" target="_blank" rel="noopener noreferrer">{CONTACT_INFO.website}</a></p>
            <p className="mt-2">{CONTACT_INFO.address}</p>
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our Complete Service Portfolio
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Filter by category to find the perfect solution for your business needs
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-zion-cyan text-white'
                  : 'bg-zion-slate-darker text-zion-slate-light hover:bg-zion-slate-light hover:text-zion-slate-dark'
              }`}
            >
              All Services ({listings.length})
            </button>
            {MICRO_SAAS_CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-zion-cyan text-white'
                    : 'bg-zion-slate-darker text-zion-slate-light hover:bg-zion-slate-light hover:text-zion-slate-dark'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((service) => (
              <div key={service.id} className="bg-zion-slate-darker rounded-lg p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  {categoryIcons[service.category] || <Code className="w-6 h-6" />}
                  <div className="text-right">
                    <div className="text-zion-cyan font-bold text-xl">${service.price}</div>
                    <div className="text-zion-slate-light text-sm">/month</div>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-zion-slate-light text-sm ml-1">({service.reviewCount})</span>
                  </div>
                  <div className="bg-zion-cyan text-black text-xs px-2 py-1 rounded-full font-bold">
                    AI Score: {service.aiScore}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="bg-zion-slate-dark text-zion-slate-light text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBySection />
    </>
  );
}