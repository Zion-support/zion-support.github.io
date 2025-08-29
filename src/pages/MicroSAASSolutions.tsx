import React from 'react';
import SEO from '../components/SEO';
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
      title: "Custom SAAS Development",
      description: "Tailored software-as-a-service solutions designed specifically for your business needs and industry requirements.",
      icon: Code,
      features: ["Custom workflows", "API integration", "User management", "Scalable architecture"]
    },
    {
      title: "Multi-tenant Architecture",
      description: "Efficient multi-tenant systems that maximize resource utilization while maintaining data isolation and security.",
      icon: Users,
      features: ["Data isolation", "Resource sharing", "Customization options", "Performance optimization"]
    },
    {
      title: "Subscription Management",
      description: "Comprehensive billing and subscription systems with flexible pricing models and automated renewals.",
      icon: BarChart3,
      features: ["Flexible pricing", "Automated billing", "Usage tracking", "Payment processing"]
    },
    {
      title: "API Development & Integration",
      description: "Robust APIs that enable seamless integration with existing systems and third-party applications.",
      icon: Cpu,
      features: ["RESTful APIs", "GraphQL support", "Webhook integration", "API documentation"]
    },
    {
      title: "Analytics & Reporting",
      description: "Advanced analytics dashboards providing insights into user behavior, system performance, and business metrics.",
      icon: TrendingUp,
      features: ["Real-time metrics", "Custom reports", "Data visualization", "Export capabilities"]
    }
  ];

  const benefits = [
    {
      title: "Rapid Deployment",
      description: "Quick time-to-market with agile development methodologies",
      icon: Zap
    },
    {
      title: "Scalability",
      description: "Built to grow with your business from day one",
      icon: TrendingUp
    },
    {
      title: "Cost Efficiency",
      description: "Reduced infrastructure costs with cloud-native solutions",
      icon: BarChart3
    },
    {
      title: "Security",
      description: "Enterprise-grade security and compliance standards",
      icon: Shield
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant patient management systems",
      icon: Building
    },
    {
      name: "Finance",
      description: "Regulatory-compliant financial tools",
      icon: Building
    },
    {
      name: "Education",
      description: "Learning management and student tracking",
      icon: Building
    },
    {
      name: "Manufacturing",
      description: "Production planning and inventory management",
      icon: Building
    },
    {
      name: "Retail",
      description: "E-commerce and point-of-sale solutions",
      icon: Building
    },
    {
      name: "Real Estate",
      description: "Property management and client portals",
      icon: Building
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "Understanding your business requirements and creating a comprehensive project plan",
      icon: Target,
      duration: "1-2 weeks"
    },
    {
      step: 2,
      title: "Design & Architecture",
      description: "Creating the system architecture and user interface designs",
      icon: Code,
      duration: "2-4 weeks"
    },
    {
      step: 3,
      title: "Development",
      description: "Building the core application with iterative development cycles",
      icon: Cpu,
      duration: "8-16 weeks"
    },
    {
      step: 4,
      title: "Testing & Deployment",
      description: "Comprehensive testing and production deployment",
      icon: Rocket,
      duration: "2-4 weeks"
    }
  ];

  return (
    <>
      <SEO 
        title="Micro SAAS Solutions - Custom Software Development"
        description="Transform your business with custom Micro SAAS solutions. From development to deployment, we deliver scalable, secure, and efficient software-as-a-service applications."
        keywords="micro saas, custom software, saas development, software solutions, business applications"
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-responsive relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8">
                <Code className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Micro SAAS
                <span className="text-gradient block">Solutions</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
                Transform your business with custom Micro SAAS solutions. From development to deployment, 
                we deliver scalable, secure, and efficient software-as-a-service applications.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-zion-cyan">
                  <Code className="w-4 h-4" />
                  <span>Custom Development</span>
                </div>
                <div className="flex items-center gap-2 text-zion-purple">
                  <Cloud className="w-4 h-4" />
                  <span>Cloud Native</span>
                </div>
                <div className="flex items-center gap-2 text-zion-blue">
                  <Shield className="w-4 h-4" />
                  <span>Enterprise Security</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Micro SAAS Services</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Comprehensive solutions designed to accelerate your business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS Solutions?</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Understanding the fundamental advantages that make our solutions essential
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{benefit.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed text-center">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Proven solutions across diverse industry verticals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={industry.name}
                  className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Development Process</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                  <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                    {step.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
          <div className="container-responsive">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Micro SAAS?</h2>
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                Let's discuss how custom Micro SAAS solutions can transform your business 
                and accelerate your growth in the digital marketplace.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Get Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}