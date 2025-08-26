import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Users, 
  BarChart3,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Lock,
  Cpu,
  Database,
  Smartphone,
  Globe,
  Code,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  Server,
  FileText as FileTextIcon,
  Filter,
  Search
} from 'lucide-react';

const SERVICE_COMPARISON_DATA = [
  {
    category: "AI & Machine Learning",
    services: [
      {
        name: "AI Content Generator Pro",
        price: 29,
        rating: 4.9,
        reviewCount: 156,
        features: {
          "Content Generation": { value: "Unlimited", included: true },
          "Templates": { value: "50+", included: true },
          "Multi-language": { value: "25+", included: true },
          "SEO Optimization": { value: "Advanced", included: true },
          "API Access": { value: "Full", included: true },
          "Brand Voice": { value: "Custom", included: true },
          "Analytics": { value: "Comprehensive", included: true },
          "Team Collaboration": { value: "Up to 10", included: true },
          "Priority Support": { value: "24/7", included: false },
          "Custom Training": { value: "Available", included: false }
        },
        description: "Generate high-quality content, code, and creative assets with advanced AI models",
        link: "https://ziontechgroup.com/ai-content-generator",
        popular: false
      },
      {
        name: "AI Code Assistant",
        price: 39,
        rating: 4.9,
        reviewCount: 203,
        features: {
          "Content Generation": { value: "Unlimited", included: true },
          "Templates": { value: "100+", included: true },
          "Multi-language": { value: "50+", included: true },
          "SEO Optimization": { value: "Advanced", included: true },
          "API Access": { value: "Full", included: true },
          "Brand Voice": { value: "Custom", included: true },
          "Analytics": { value: "Comprehensive", included: true },
          "Team Collaboration": { value: "Unlimited", included: true },
          "Priority Support": { value: "24/7", included: true },
          "Custom Training": { value: "Available", included: true }
        },
        description: "Intelligent code completion and debugging for developers",
        link: "https://ziontechgroup.com/ai-code-assistant",
        popular: true
      },
      {
        name: "AI Data Analytics Platform",
        price: 199,
        rating: 4.8,
        reviewCount: 67,
        features: {
          "Content Generation": { value: "Unlimited", included: true },
          "Templates": { value: "200+", included: true },
          "Multi-language": { value: "100+", included: true },
          "SEO Optimization": { value: "Enterprise", included: true },
          "API Access": { value: "Full", included: true },
          "Brand Voice": { value: "Custom", included: true },
          "Analytics": { value: "Enterprise", included: true },
          "Team Collaboration": { value: "Unlimited", included: true },
          "Priority Support": { value: "24/7", included: true },
          "Custom Training": { value: "Included", included: true }
        },
        description: "Transform raw data into actionable insights with AI-powered analytics",
        link: "https://ziontechgroup.com/ai-analytics",
        popular: false
      }
    ]
  },
  {
    category: "Cybersecurity",
    services: [
      {
        name: "AI Threat Detection",
        price: 99,
        rating: 4.9,
        reviewCount: 134,
        features: {
          "24/7 Monitoring": { value: "Yes", included: true },
          "Threat Detection": { value: "AI-Powered", included: true },
          "Automated Response": { value: "Basic", included: true },
          "Incident Reports": { value: "Daily", included: true },
          "Compliance": { value: "SOC 2", included: true },
          "API Integration": { value: "Limited", included: true },
          "Custom Rules": { value: "Basic", included: true },
          "Team Access": { value: "Up to 5", included: true },
          "Priority Support": { value: "Business Hours", included: false },
          "Custom Training": { value: "Available", included: false }
        },
        description: "Real-time cybersecurity threat detection using advanced AI algorithms",
        link: "https://ziontechgroup.com/ai-threat-detection",
        popular: false
      },
      {
        name: "Zero Trust Security Suite",
        price: 499,
        rating: 4.7,
        reviewCount: 78,
        features: {
          "24/7 Monitoring": { value: "Yes", included: true },
          "Threat Detection": { value: "AI-Powered", included: true },
          "Automated Response": { value: "Advanced", included: true },
          "Incident Reports": { value: "Real-time", included: true },
          "Compliance": { value: "SOC 2, ISO 27001", included: true },
          "API Integration": { value: "Full", included: true },
          "Custom Rules": { value: "Advanced", included: true },
          "Team Access": { value: "Unlimited", included: true },
          "Priority Support": { value: "24/7", included: true },
          "Custom Training": { value: "Included", included: true }
        },
        description: "Comprehensive zero-trust security implementation for enterprises",
        link: "https://ziontechgroup.com/zero-trust-security",
        popular: false
      }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    services: [
      {
        name: "Multi-Cloud Management",
        price: 79,
        rating: 4.6,
        reviewCount: 145,
        features: {
          "Cloud Providers": { value: "AWS, Azure, GCP", included: true },
          "Cost Optimization": { value: "Basic", included: true },
          "Security Compliance": { value: "Standard", included: true },
          "Monitoring": { value: "Unified", included: true },
          "Automation": { value: "Basic", included: true },
          "API Access": { value: "Full", included: true },
          "Custom Dashboards": { value: "Limited", included: true },
          "Team Management": { value: "Up to 20", included: true },
          "Priority Support": { value: "Business Hours", included: false },
          "Custom Training": { value: "Available", included: false }
        },
        description: "Unified management platform for AWS, Azure, Google Cloud, and hybrid environments",
        link: "https://ziontechgroup.com/multi-cloud-management",
        popular: false
      },
      {
        name: "DevOps Automation Platform",
        price: 49,
        rating: 4.7,
        reviewCount: 167,
        features: {
          "Cloud Providers": { value: "All Major", included: true },
          "Cost Optimization": { value: "Advanced", included: true },
          "Security Compliance": { value: "Enterprise", included: true },
          "Monitoring": { value: "Advanced", included: true },
          "Automation": { value: "Full", included: true },
          "API Access": { value: "Full", included: true },
          "Custom Dashboards": { value: "Unlimited", included: true },
          "Team Management": { value: "Unlimited", included: true },
          "Priority Support": { value: "24/7", included: true },
          "Custom Training": { value: "Included", included: true }
        },
        description: "Streamline CI/CD pipelines and infrastructure automation",
        link: "https://ziontechgroup.com/devops-automation",
        popular: false
      }
    ]
  }
];

const FeatureRow = ({ feature, services }: { feature: string; services: any[] }) => (
  <tr className="border-b border-zion-slate-light dark:border-zion-purple/20">
    <td className="py-4 px-4 font-medium text-zion-slate-dark dark:text-white bg-zion-slate-light/10 dark:bg-zion-purple/5">
      {feature}
    </td>
    {services.map((service, index) => (
      <td key={index} className="py-4 px-4 text-center">
        {service.features[feature]?.included ? (
          <div className="flex flex-col items-center">
            <Check className="h-5 w-5 text-zion-cyan mb-1" />
            <span className="text-sm text-zion-slate dark:text-zion-cyan">
              {service.features[feature]?.value}
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <X className="h-5 w-5 text-zion-slate/50 mb-1" />
            <span className="text-sm text-zion-slate/50">
              {service.features[feature]?.value || "Not included"}
            </span>
          </div>
        )}
      </td>
    ))}
  </tr>
);

const ServiceCard = ({ service, category }: { service: any; category: string }) => (
  <div className={`bg-white dark:bg-zion-slate-dark rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
    service.popular ? 'border-zion-purple shadow-zion-purple/20' : 'border-zion-slate-light'
  }`}>
    {service.popular && (
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white text-center py-2 rounded-t-xl font-semibold">
        ⭐ Most Popular
      </div>
    )}
    
    <div className="p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-zion-slate-dark dark:text-white mb-2">
          {service.name}
        </h3>
        <p className="text-zion-slate/70 dark:text-zion-cyan/70 text-sm mb-4">
          {service.description}
        </p>
        
        <div className="flex items-center justify-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${
                  i < Math.floor(service.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-zion-slate/30'
                }`} 
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-zion-slate/70 dark:text-zion-cyan/70">
            ({service.reviewCount} reviews)
          </span>
        </div>
        
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-zion-purple">${service.price}</span>
          <span className="text-zion-slate/70 dark:text-zion-cyan/70 ml-1">/month</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <a 
          href={service.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-200 hover:shadow-lg"
        >
          Learn More
          <ArrowRight className="h-4 w-4 ml-2" />
        </a>
        <Link 
          to="/request-quote"
          className="w-full border-2 border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-200"
        >
          Get Quote
        </Link>
      </div>
    </div>
  </div>
);

export default function ServicesComparison() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const currentCategory = SERVICE_COMPARISON_DATA[selectedCategory];
  const filteredServices = currentCategory.services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const allFeatures = Object.keys(currentCategory.services[0]?.features || {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-purple-dark">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
            Service Comparison
          </h1>
          <p className="text-xl text-zion-cyan/80 max-w-4xl mx-auto mb-8">
            Compare our micro SAAS services side by side to find the perfect solution for your business needs. 
            Make informed decisions with detailed feature comparisons and transparent pricing.
          </p>
          
          <div className="bg-zion-purple/10 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/20 max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-zion-cyan font-semibold mb-2">✓ Feature Comparison</h3>
                <p className="text-zion-cyan/70 text-sm">Side-by-side feature analysis</p>
              </div>
              <div>
                <h3 className="text-zion-cyan font-semibold mb-2">✓ Transparent Pricing</h3>
                <p className="text-zion-cyan/70 text-sm">Clear pricing with no hidden fees</p>
              </div>
              <div>
                <h3 className="text-zion-cyan font-semibold mb-2">✓ Expert Guidance</h3>
                <p className="text-zion-cyan/70 text-sm">Get help choosing the right service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {SERVICE_COMPARISON_DATA.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === index
                    ? 'bg-zion-purple text-white shadow-lg shadow-zion-purple/25'
                    : 'bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30 border border-zion-purple/30'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate/50" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-zion-slate-dark border border-zion-slate-light dark:border-zion-purple/30 rounded-lg text-zion-slate-dark dark:text-white placeholder-zion-slate/50 focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                category={currentCategory.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Feature Comparison: {currentCategory.category}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-zion-slate-dark rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-zion-purple/20 dark:bg-zion-purple/10">
                  <th className="py-4 px-4 text-left font-semibold text-zion-slate-dark dark:text-white">
                    Features
                  </th>
                  {filteredServices.map((service, index) => (
                    <th key={index} className="py-4 px-4 text-center font-semibold text-zion-slate-dark dark:text-white">
                      {service.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, index) => (
                  <FeatureRow 
                    key={index} 
                    feature={feature} 
                    services={filteredServices}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-zion-purple/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto mb-8">
            Our AI experts are here to help you select the perfect services for your business. 
            Get personalized recommendations and expert guidance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <Phone className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light font-semibold">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <Mail className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light font-semibold">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <MapPin className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-zion-cyan font-semibold text-sm">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white shadow-lg shadow-zion-purple/25 px-8 py-3 text-lg">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/services-pricing">
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 backdrop-blur-sm px-8 py-3 text-lg">
                View Full Pricing
              </Button>
            </Link>
            <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10 backdrop-blur-sm px-8 py-3 text-lg">
                <ExternalLink className="h-5 w-5 mr-2" />
                Visit Website
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}