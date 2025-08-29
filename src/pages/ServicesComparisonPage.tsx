import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Clock,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  TrendingUp,
  BarChart3,
  Cloud,
  Lock,
  Database,
  Globe
} from 'lucide-react';
import SEO from '../components/SEO';

// Service comparison data
const SERVICE_COMPARISONS = [
  {
    category: "AI & Automation",
    services: [
      {
        name: "AI Business Process Automation",
        starter: { price: "$2,999", features: ["Basic workflow automation", "Email automation", "Document processing", "Standard support"] },
        professional: { price: "$4,999", features: ["Advanced AI capabilities", "Custom integrations", "Priority support", "Training sessions", "Analytics dashboard"] },
        enterprise: { price: "$7,999+", features: ["Full AI suite", "Custom development", "24/7 support", "On-site training", "SLA guarantees", "White-label options"] }
      },
      {
        name: "AI Customer Intelligence",
        starter: { price: "$3,999", features: ["Basic customer analytics", "Churn prediction", "Email support"] },
        professional: { price: "$5,999", features: ["Advanced analytics", "Personalization engine", "Priority support", "Custom dashboards", "API access"] },
        enterprise: { price: "$8,999+", features: ["Full customer intelligence suite", "Custom algorithms", "Dedicated support", "Advanced integrations", "Compliance features"] }
      }
    ]
  },
  {
    category: "Cybersecurity & Compliance",
    services: [
      {
        name: "AI Threat Detection System",
        starter: { price: "$5,999", features: ["Basic threat detection", "Email alerts", "Standard support"] },
        professional: { price: "$7,999", features: ["Advanced threat detection", "Behavioral analysis", "Priority support", "Custom rules", "Training"] },
        enterprise: { price: "$12,999+", features: ["Full security suite", "Custom development", "24/7 monitoring", "Dedicated team", "Compliance reporting"] }
      },
      {
        name: "Compliance Management Platform",
        starter: { price: "$2,999", features: ["Basic compliance monitoring", "GDPR support", "Email support"] },
        professional: { price: "$4,999", features: ["Multi-framework support", "Automated reporting", "Priority support", "Custom workflows", "Training"] },
        enterprise: { price: "$6,999+", features: ["Full compliance suite", "Custom frameworks", "Dedicated support", "Advanced integrations", "Audit preparation"] }
      }
    ]
  },
  {
    category: "Cloud & DevOps",
    services: [
      {
        name: "Cloud Cost Optimization",
        starter: { price: "$1,999", features: ["Basic cost analysis", "Resource optimization", "Email support"] },
        professional: { price: "$3,999", features: ["Advanced optimization", "Automated scaling", "Priority support", "Custom policies", "Training"] },
        enterprise: { price: "$5,999+", features: ["Full optimization suite", "Custom algorithms", "Dedicated support", "Advanced analytics", "Multi-cloud support"] }
      },
      {
        name: "DevOps Automation Platform",
        starter: { price: "$2,999", features: ["Basic CI/CD", "Automated testing", "Email support"] },
        professional: { price: "$4,999", features: ["Advanced automation", "Custom pipelines", "Priority support", "Advanced testing", "Training"] },
        enterprise: { price: "$7,999+", features: ["Full DevOps suite", "Custom development", "Dedicated support", "Advanced monitoring", "Multi-environment support"] }
      }
    ]
  },
  {
    category: "Data & Analytics",
    services: [
      {
        name: "Data Quality Platform",
        starter: { price: "$3,999", features: ["Basic data validation", "Data cleaning", "Email support"] },
        professional: { price: "$5,999", features: ["Advanced validation", "Custom rules", "Priority support", "Advanced analytics", "Training"] },
        enterprise: { price: "$8,999+", features: ["Full data suite", "Custom algorithms", "Dedicated support", "Advanced governance", "Compliance features"] }
      },
      {
        name: "Real-Time Analytics Dashboard",
        starter: { price: "$1,999", features: ["Basic dashboard", "Real-time data", "Email support"] },
        professional: { price: "$3,999", features: ["Advanced dashboards", "Custom visualizations", "Priority support", "Advanced analytics", "Training"] },
        enterprise: { price: "$5,999+", features: ["Full analytics suite", "Custom development", "Dedicated support", "Advanced integrations", "White-label options"] }
      }
    ]
  }
];

const PRICING_TIERS = [
  {
    name: "Starter",
    price: "From $1,999",
    description: "Perfect for small businesses getting started with AI and automation",
    features: [
      "Basic AI automation",
      "Email support",
      "Standard integrations",
      "Monthly reporting",
      "Basic security"
    ]
  },
  {
    name: "Professional",
    price: "From $4,999",
    description: "Advanced features for growing businesses",
    features: [
      "Advanced AI capabilities",
      "Priority support",
      "Custom integrations",
      "Real-time analytics",
      "Enhanced security",
      "Training sessions"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale solutions for large organizations",
    features: [
      "Full AI suite",
      "24/7 dedicated support",
      "Custom development",
      "Advanced analytics",
      "Enterprise security",
      "On-site training",
      "SLA guarantees"
    ]
  }
];

export default function ServicesComparisonPage() {
  const [selectedCategory, setSelectedCategory] = useState("AI & Automation");

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Services Comparison & Pricing - Zion Tech Group" 
        description="Compare our AI and IT services, features, and pricing plans. Choose the perfect solution for your business needs and budget."
        keywords="service comparison, pricing plans, AI services, IT consulting, cybersecurity, cloud services"
        canonical="https://ziontechgroup.com/services-comparison"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-blue-700 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Services Comparison & Pricing
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Compare our comprehensive AI and IT services to find the perfect solution for your business. 
            Transparent pricing with flexible plans designed for every organization size.
          </p>
          
          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-cyan-300">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-300">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-300">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Overview */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-slate-300 text-lg">
              Flexible pricing designed to grow with your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier, index) => (
              <div key={tier.name} className={`bg-slate-700 border rounded-lg p-6 text-white ${index === 1 ? 'border-cyan-400 scale-105' : 'border-slate-600'}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400">{tier.price}</div>
                  <p className="text-slate-300 mt-2">
                    {tier.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparisons */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Detailed Service Comparisons</h2>
            <p className="text-slate-300 text-lg">
              Compare features, capabilities, and pricing across all our services
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {SERVICE_COMPARISONS.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setSelectedCategory(category.category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.category
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {SERVICE_COMPARISONS.find(cat => cat.category === selectedCategory)?.services.map((service, serviceIndex) => (
              <div key={serviceIndex} className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                  <p className="text-slate-300">
                    Compare features and pricing across different service tiers
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Starter Plan */}
                  <div className="text-center p-6 border border-slate-600 rounded-lg">
                    <h4 className="text-xl font-semibold text-white mb-2">Starter</h4>
                    <div className="text-3xl font-bold text-cyan-400 mb-4">{service.starter.price}</div>
                    <ul className="space-y-3 text-left">
                      {service.starter.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg">
                      Choose Starter
                    </button>
                  </div>

                  {/* Professional Plan */}
                  <div className="text-center p-6 border-2 border-cyan-400 rounded-lg bg-cyan-900/20">
                    <div className="inline-block mb-2 bg-cyan-400 text-slate-900 text-sm font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Professional</h4>
                    <div className="text-3xl font-bold text-cyan-400 mb-4">{service.professional.price}</div>
                    <ul className="space-y-3 text-left">
                      {service.professional.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg">
                      Choose Professional
                    </button>
                  </div>

                  {/* Enterprise Plan */}
                  <div className="text-center p-6 border border-slate-600 rounded-lg">
                    <h4 className="text-xl font-semibold text-white mb-2">Enterprise</h4>
                    <div className="text-3xl font-bold text-cyan-400 mb-4">{service.enterprise.price}</div>
                    <ul className="space-y-3 text-left">
                      {service.enterprise.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-slate-300 text-lg">
              Proven expertise and results that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Expertise</h3>
              <p className="text-slate-300">Cutting-edge AI solutions with proven results</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-slate-300">Bank-level security and compliance standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-slate-300">Certified professionals with industry experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-slate-300">Track record of successful implementations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help Choosing?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect solution for your business needs and budget.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </button>
            <button className="border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email kleber@ziontechgroup.com
            </button>
          </div>
          
          <div className="text-slate-400">
            <p>Visit us: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
              >
                ziontechgroup.com <ExternalLink className="w-4 h-4" />
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}