import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Cloud, 
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
  Lock,
  Smartphone,
  Target,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Server,
  GitBranch,
  Monitor,
  Activity,
  Settings,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Play,
  Pause,
  Stop,
  Network
} from 'lucide-react';

export default function CloudDevOps() {
  const cloudServices = [
    {
      title: "Cloud Migration & Optimization",
      description: "Seamless cloud migration with automated optimization that reduces costs by 30-50% while improving performance.",
      icon: Cloud,
      features: ["Automated Migration", "Cost Optimization", "Performance Tuning", "Security Compliance", "24/7 Monitoring"],
      price: "$799/month",
      marketPrice: "$2,000/month",
      savings: "60% savings",
      category: "Cloud Migration",
      rating: 4.9,
      reviewCount: 234,
      useCases: ["AWS Migration", "Azure Migration", "GCP Migration", "Multi-cloud Strategy"]
    },
    {
      title: "DevOps Automation Platform",
      description: "End-to-end DevOps automation with CI/CD pipelines, infrastructure as code, and automated testing.",
      icon: GitBranch,
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Deployment Automation", "Rollback Management"],
      price: "$499/month",
      marketPrice: "$1,500/month",
      savings: "67% savings",
      category: "DevOps",
      rating: 4.8,
      reviewCount: 189,
      useCases: ["Software Development", "Testing Automation", "Deployment Management", "Release Management"]
    },
    {
      title: "Container Orchestration",
      description: "Kubernetes and Docker management with automated scaling, load balancing, and monitoring.",
      icon: Server,
      features: ["Kubernetes Management", "Auto-scaling", "Load Balancing", "Health Monitoring", "Backup & Recovery"],
      price: "$399/month",
      marketPrice: "$1,200/month",
      savings: "67% savings",
      category: "Containers",
      rating: 4.7,
      reviewCount: 156,
      useCases: ["Microservices", "Application Deployment", "Scalable Infrastructure", "Cloud-native Apps"]
    },
    {
      title: "Infrastructure Monitoring",
      description: "Comprehensive infrastructure monitoring with AI-powered alerting, performance analytics, and predictive maintenance.",
      icon: Monitor,
      features: ["Real-time Monitoring", "AI Alerting", "Performance Analytics", "Predictive Maintenance", "Custom Dashboards"],
      price: "$299/month",
      marketPrice: "$800/month",
      savings: "63% savings",
      category: "Monitoring",
      rating: 4.8,
      reviewCount: 267,
      useCases: ["Server Monitoring", "Application Performance", "Network Monitoring", "Database Monitoring"]
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with automated compliance monitoring, threat detection, and vulnerability management.",
      icon: Shield,
      features: ["Threat Detection", "Compliance Monitoring", "Vulnerability Scanning", "Access Control", "Audit Logging"],
      price: "$599/month",
      marketPrice: "$1,500/month",
      savings: "60% savings",
      category: "Security",
      rating: 4.9,
      reviewCount: 198,
      useCases: ["Security Monitoring", "Compliance Reporting", "Threat Prevention", "Risk Management"]
    },
    {
      title: "Database Management",
      description: "Automated database administration with performance optimization, backup management, and scaling.",
      icon: Database,
      features: ["Performance Optimization", "Automated Backups", "Scaling Management", "Health Monitoring", "Query Optimization"],
      price: "$349/month",
      marketPrice: "$900/month",
      savings: "61% savings",
      category: "Database",
      rating: 4.7,
      reviewCount: 145,
      useCases: ["MySQL Management", "PostgreSQL Management", "MongoDB Management", "Database Optimization"]
    },
    {
      title: "Backup & Disaster Recovery",
      description: "Automated backup solutions with disaster recovery planning and business continuity assurance.",
      icon: RefreshCw,
      features: ["Automated Backups", "Disaster Recovery", "Business Continuity", "Data Retention", "Recovery Testing"],
      price: "$199/month",
      marketPrice: "$600/month",
      savings: "67% savings",
      category: "Backup & Recovery",
      rating: 4.6,
      reviewCount: 178,
      useCases: ["Data Protection", "Business Continuity", "Compliance Requirements", "Risk Mitigation"]
    },
    {
      title: "API Management & Gateway",
      description: "Comprehensive API management with rate limiting, authentication, monitoring, and developer portal.",
      icon: Globe,
      features: ["API Gateway", "Rate Limiting", "Authentication", "API Monitoring", "Developer Portal"],
      price: "$249/month",
      marketPrice: "$700/month",
      savings: "64% savings",
      category: "API Management",
      rating: 4.7,
      reviewCount: 134,
      useCases: ["API Development", "Third-party Integration", "Developer Experience", "API Analytics"]
    },
    {
      title: "Serverless Computing",
      description: "Serverless architecture management with auto-scaling, cost optimization, and performance monitoring.",
      icon: Zap,
      features: ["Auto-scaling", "Cost Optimization", "Performance Monitoring", "Function Management", "Integration Services"],
      price: "$179/month",
      marketPrice: "$500/month",
      savings: "64% savings",
      category: "Serverless",
      rating: 4.6,
      reviewCount: 123,
      useCases: ["Web Applications", "API Services", "Event Processing", "Microservices"]
    },
    {
      title: "Multi-cloud Management",
      description: "Unified management across multiple cloud providers with cost optimization and performance monitoring.",
      icon: Globe,
      features: ["Multi-cloud Dashboard", "Cost Optimization", "Performance Monitoring", "Unified Billing", "Resource Management"],
      price: "$449/month",
      marketPrice: "$1,200/month",
      savings: "63% savings",
      category: "Multi-cloud",
      rating: 4.8,
      reviewCount: 167,
      useCases: ["Hybrid Cloud", "Multi-cloud Strategy", "Vendor Management", "Cost Optimization"]
    },
    {
      title: "Network Infrastructure",
      description: "Cloud networking solutions with load balancing, CDN management, and network security.",
      icon: Network,
      features: ["Load Balancing", "CDN Management", "Network Security", "Traffic Management", "Performance Optimization"],
      price: "$299/month",
      marketPrice: "$800/month",
      savings: "63% savings",
      category: "Networking",
      rating: 4.7,
      reviewCount: 145,
      useCases: ["Web Applications", "Content Delivery", "Network Security", "Performance Optimization"]
    },
    {
      title: "Cost Management & Optimization",
      description: "AI-powered cloud cost management with automated optimization and spending analytics.",
      icon: DollarSign,
      features: ["Cost Analytics", "Automated Optimization", "Spending Alerts", "Resource Scheduling", "ROI Tracking"],
      price: "$149/month",
      marketPrice: "$400/month",
      savings: "63% savings",
      category: "Cost Management",
      rating: 4.8,
      reviewCount: 234,
      useCases: ["Cost Control", "Budget Management", "Resource Optimization", "ROI Analysis"]
    }
  ];

  const benefits = [
    {
      title: "Rapid Deployment",
      description: "Deploy cloud infrastructure and DevOps pipelines in hours, not days, with pre-built templates",
      icon: Zap,
      details: "90% faster deployment vs. manual setup"
    },
    {
      title: "Cost Optimization",
      description: "Automated cost optimization that reduces cloud spending by 30-50% through intelligent resource management",
      icon: DollarSign,
      details: "Average 40% cost reduction for clients"
    },
    {
      title: "Scalability",
      description: "Auto-scaling infrastructure that handles traffic spikes and business growth automatically",
      icon: TrendingUp,
      details: "Handles 10x traffic spikes without manual intervention"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2, ISO 27001, and GDPR compliance built-in",
      icon: Shield,
      details: "99.9% uptime with enterprise-grade security"
    }
  ];

  const industries = [
    {
      name: "E-commerce",
      description: "High-performance cloud infrastructure for online stores with auto-scaling and CDN optimization",
      icon: Building,
      solutions: ["Auto-scaling", "CDN Management", "Database Optimization", "Security Monitoring"]
    },
    {
      name: "Healthcare",
      description: "HIPAA-compliant cloud solutions with secure data handling and disaster recovery",
      icon: Building,
      solutions: ["HIPAA Compliance", "Data Encryption", "Backup Management", "Access Control"]
    },
    {
      name: "Finance",
      description: "Regulatory-compliant cloud infrastructure with advanced security and monitoring",
      icon: Building,
      solutions: ["Security Compliance", "Audit Logging", "Threat Detection", "Performance Monitoring"]
    },
    {
      name: "Media & Entertainment",
      description: "High-bandwidth cloud solutions for content delivery and streaming services",
      icon: Building,
      solutions: ["Content Delivery", "Streaming Optimization", "Storage Management", "Bandwidth Optimization"]
    },
    {
      name: "Manufacturing",
      description: "IoT-ready cloud infrastructure with real-time monitoring and predictive analytics",
      icon: Building,
      solutions: ["IoT Integration", "Real-time Monitoring", "Predictive Analytics", "Data Processing"]
    },
    {
      name: "Education",
      description: "Scalable cloud solutions for learning management systems and student portals",
      icon: Building,
      solutions: ["LMS Hosting", "Student Portals", "Content Management", "Scalable Infrastructure"]
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      role: "CTO, E-commerce Plus",
      company: "E-commerce Plus",
      content: "The cloud migration service was seamless. We reduced our infrastructure costs by 45% while improving performance by 60%. The auto-scaling handles our Black Friday traffic perfectly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sarah Williams",
      role: "DevOps Manager",
      company: "TechFlow Solutions",
      content: "The DevOps automation platform has reduced our deployment time from 4 hours to 15 minutes. The automated testing catches 95% of bugs before they reach production.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "Infrastructure Director",
      company: "CloudFirst Inc.",
      content: "The monitoring solution provides real-time visibility into our entire infrastructure. We've reduced downtime by 80% and can now predict issues before they impact users.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Cloud & DevOps Services - Zion Tech Group" 
        description="Comprehensive cloud and DevOps services for modern businesses. Cloud migration, automation, monitoring, and optimization. Starting at $149/month."
        keywords="cloud services, DevOps, cloud migration, infrastructure monitoring, container orchestration, cloud optimization, automation"
        canonical="https://ziontechgroup.com/services/cloud-devops"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud & DevOps Services
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Accelerate Your Digital Transformation
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Streamline your cloud operations and DevOps processes with our comprehensive services. 
            From cloud migration to automated deployment, we help you build, deploy, and scale faster.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Services
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Cloud & DevOps Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Comprehensive cloud and DevOps services designed to accelerate your development cycles, 
              optimize costs, and ensure reliable infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
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
                <p className="text-zion-slate mb-4">
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
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-zion-blue-dark mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.useCases.map((useCase, idx) => (
                      <span key={idx} className="text-xs bg-zion-blue-light text-zion-blue-dark px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
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
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Our Cloud & DevOps Services?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience the advantages of enterprise-grade cloud infrastructure and DevOps automation 
              delivered as accessible, scalable services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Tailored cloud and DevOps solutions designed for the unique requirements and compliance needs of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-zion-slate mb-4">
                  {industry.description}
                </p>
                <div className="space-y-1">
                  {industry.solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-center text-xs text-zion-slate">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                      {solution}
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
              Success Stories
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Real results from real businesses using our cloud and DevOps services.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Cloud Operations?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Start your cloud and DevOps transformation today. Get a free consultation and discover 
            how our services can accelerate your development and reduce costs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Transformation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
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