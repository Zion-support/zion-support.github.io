import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Code, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Database,
  Cloud,
  Lock,
  Smartphone,
  Target,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Brain
} from 'lucide-react';

export default function MicroSAASSolutions() {
  const services = [
    {
      title: "AI-Powered CRM Platform",
      description: "Intelligent customer relationship management with predictive analytics, automated follow-ups, and smart lead scoring.",
      icon: Users,
      features: ["Predictive Analytics", "Automated Follow-ups", "Smart Lead Scoring", "Real-time Insights", "AI Chat Support"],
      price: "$299/month",
      marketPrice: "$599/month",
      savings: "50% savings",
      category: "Customer Management",
      rating: 4.9,
      reviewCount: 342
    },
    {
      title: "Cybersecurity Threat Detection",
      description: "AI-powered security platform with real-time threat detection, automated incident response, and compliance monitoring.",
      icon: Shield,
      features: ["Real-time Monitoring", "AI Threat Detection", "Automated Response", "Compliance Reports", "24/7 Protection"],
      price: "$499/month",
      marketPrice: "$1,200/month",
      savings: "58% savings",
      category: "Security",
      rating: 4.8,
      reviewCount: 189
    },
    {
      title: "Cloud Cost Optimization",
      description: "AI-driven cloud cost management that automatically reduces spending by 30-50% through intelligent resource optimization.",
      icon: Cloud,
      features: ["Cost Analysis", "Automated Optimization", "Resource Scheduling", "Budget Management", "ROI Tracking"],
      price: "$199/month",
      marketPrice: "$450/month",
      savings: "56% savings",
      category: "Cloud Management",
      rating: 4.7,
      reviewCount: 234
    },
    {
      title: "HR & Recruitment AI",
      description: "Intelligent talent management platform with AI-powered candidate screening, automated interviews, and performance analytics.",
      icon: Users,
      features: ["AI Screening", "Automated Interviews", "Performance Analytics", "Skill Assessment", "Talent Pipeline"],
      price: "$399/month",
      marketPrice: "$800/month",
      savings: "50% savings",
      category: "Human Resources",
      rating: 4.6,
      reviewCount: 156
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial insights with AI-powered forecasting, expense tracking, and automated reporting for better decision making.",
      icon: BarChart3,
      features: ["Real-time Analytics", "AI Forecasting", "Expense Tracking", "Automated Reports", "KPI Monitoring"],
      price: "$249/month",
      marketPrice: "$600/month",
      savings: "59% savings",
      category: "Finance",
      rating: 4.8,
      reviewCount: 203
    },
    {
      title: "Inventory Management System",
      description: "Smart inventory tracking with AI demand forecasting, automated reordering, and real-time stock monitoring.",
      icon: Database,
      features: ["AI Demand Forecasting", "Automated Reordering", "Real-time Monitoring", "Barcode Scanning", "Supplier Management"],
      price: "$179/month",
      marketPrice: "$400/month",
      savings: "55% savings",
      category: "Operations",
      rating: 4.5,
      reviewCount: 127
    },
    {
      title: "Project Management Suite",
      description: "Collaborative project management with AI task prioritization, time tracking, and automated workflow optimization.",
      icon: Target,
      features: ["AI Task Prioritization", "Time Tracking", "Workflow Automation", "Team Collaboration", "Progress Analytics"],
      price: "$159/month",
      marketPrice: "$350/month",
      savings: "55% savings",
      category: "Project Management",
      rating: 4.7,
      reviewCount: 298
    },
    {
      title: "Customer Support Automation",
      description: "AI-powered customer support with intelligent ticket routing, automated responses, and sentiment analysis.",
      icon: Smartphone,
      features: ["AI Ticket Routing", "Automated Responses", "Sentiment Analysis", "Multi-channel Support", "Performance Metrics"],
      price: "$129/month",
      marketPrice: "$300/month",
      savings: "57% savings",
      category: "Customer Support",
      rating: 4.6,
      reviewCount: 178
    }
  ];

  const benefits = [
    {
      title: "Rapid Deployment",
      description: "Quick time-to-market with agile development methodologies and pre-built templates",
      icon: Zap,
      details: "Deploy in 2-4 weeks vs. 6-12 months traditional development"
    },
    {
      title: "Scalability",
      description: "Built to grow with your business from day one with cloud-native architecture",
      icon: TrendingUp,
      details: "Handles 10x growth without infrastructure changes"
    },
    {
      title: "Cost Efficiency",
      description: "Reduced infrastructure costs with cloud-native solutions and pay-as-you-grow pricing",
      icon: DollarSign,
      details: "60% lower total cost of ownership vs. traditional software"
    },
    {
      title: "Enterprise Security",
      description: "Enterprise-grade security and compliance standards with SOC 2, GDPR, and HIPAA support",
      icon: Shield,
      details: "Bank-level security with 99.9% uptime guarantee"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant patient management systems with AI diagnostics support",
      icon: Building,
      useCases: ["Patient Portals", "AI Diagnostics", "Compliance Management", "Telemedicine"]
    },
    {
      name: "Finance",
      description: "Regulatory-compliant financial tools with real-time fraud detection",
      icon: Building,
      useCases: ["Fraud Detection", "Compliance Reporting", "Risk Management", "Customer Analytics"]
    },
    {
      name: "Education",
      description: "Learning management and student tracking with AI-powered personalization",
      icon: Building,
      useCases: ["Student Analytics", "Personalized Learning", "Administrative Tools", "Assessment Platforms"]
    },
    {
      name: "Real Estate",
      description: "Property management and client portals with market analysis tools",
      icon: Building,
      useCases: ["Property Management", "Client Portals", "Market Analysis", "Lead Management"]
    },
    {
      name: "Manufacturing",
      description: "Smart manufacturing solutions with IoT integration and predictive maintenance",
      icon: Building,
      useCases: ["Predictive Maintenance", "Quality Control", "Supply Chain", "Performance Analytics"]
    },
    {
      name: "Retail",
      description: "Digital retail transformation with AI-powered inventory and customer insights",
      icon: Building,
      useCases: ["Inventory Management", "Customer Analytics", "E-commerce Integration", "Loyalty Programs"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "Zion Tech Group's micro SAAS solutions transformed our operations. We deployed their AI-powered CRM in just 3 weeks and saw a 40% increase in customer retention.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "Green Manufacturing Co.",
      content: "The inventory management system saved us $50,000 in the first quarter alone. The AI demand forecasting is incredibly accurate.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "HR Manager",
      company: "InnovateCorp",
      content: "Our recruitment process is now 3x faster with the AI-powered HR platform. The automated screening saves us hours every week.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$129",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: ["Basic Features", "Email Support", "5 Users", "Basic Analytics"],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: ["Advanced Features", "Priority Support", "25 Users", "Advanced Analytics", "API Access"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations",
      features: ["All Features", "24/7 Support", "Unlimited Users", "Custom Integrations", "Dedicated Account Manager"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEO 
        title="Micro SAAS Solutions - Zion Tech Group" 
        description="Custom software-as-a-service solutions designed for rapid deployment, scalability, and business growth across industries. Starting at $129/month."
        keywords="micro SAAS, custom software, subscription management, multi-tenant, API development, business software, AI solutions, cloud software"
        canonical="https://ziontechgroup.com/services/micro-saas-solutions"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Rapid Deployment, Maximum Impact
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business ideas into powerful, scalable software solutions with our micro SAAS development 
            services designed for rapid deployment and growth. Starting at just $129/month.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Ready-to-Deploy Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge micro SAAS platforms designed to revolutionize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-zion-cyan/10 text-zion-cyan px-3 py-1 rounded-full font-medium">
                    {service.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-zion-slate ml-1">{service.rating}</span>
                    <span className="text-xs text-zion-slate ml-1">({service.reviewCount})</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                    <span className="text-sm text-zion-slate line-through">{service.marketPrice}</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">{service.savings}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className="w-16 h-16 mx-auto mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate mb-3">
                  {benefit.description}
                </p>
                <p className="text-sm text-zion-cyan font-medium">
                  {benefit.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored SAAS platforms designed for your industry's unique challenges and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-sm text-zion-slate mb-4">
                  {industry.description}
                </p>
                <div className="space-y-1">
                  {industry.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-center text-xs text-zion-slate">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Real results from real businesses using our micro SAAS solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-zion-blue-dark">{testimonial.name}</h4>
                    <p className="text-sm text-zion-slate">{testimonial.role}</p>
                    <p className="text-xs text-zion-cyan">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate text-sm italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs with our flexible pricing options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`glass-card p-8 text-center relative ${
                  tier.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-8">{tier.description}</p>
                
                <ul className="space-y-3 mb-8 text-left">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full futuristic-btn text-center ${
                    tier.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : ''
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Micro SAAS Solution?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Let us help you transform your business idea into a powerful, scalable software solution 
            that drives growth and innovation. Get started today with a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
          <p className="text-zion-slate-light mt-4">
            Contact us: <a href="tel:+13024640950" className="text-zion-cyan hover:underline">+1 302 464 0950</a> | 
            <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline ml-2">kleber@ziontechgroup.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}