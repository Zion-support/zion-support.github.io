import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Brain, 
  Server, 
  Shield, 
  Users, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Target
} from 'lucide-react';

export default function GetStarted() {
  const steps = [
    {
      icon: Target,
      title: "Assessment & Discovery",
      description: "We analyze your current technology landscape and identify opportunities for improvement.",
      features: ["Technology Audit", "Gap Analysis", "ROI Assessment", "Implementation Roadmap"]
    },
    {
      icon: Brain,
      title: "AI Strategy Development",
      description: "Custom AI solutions designed to address your specific business challenges.",
      features: ["AI Readiness Assessment", "Custom AI Strategy", "Pilot Program Design", "Success Metrics"]
    },
    {
      icon: Server,
      title: "Implementation & Deployment",
      description: "Expert execution of your technology transformation with minimal disruption.",
      features: ["Phased Rollout", "Change Management", "Training & Support", "Performance Monitoring"]
    },
    {
      icon: TrendingUp,
      title: "Optimization & Growth",
      description: "Continuous improvement and scaling of your technology solutions.",
      features: ["Performance Analytics", "Continuous Optimization", "Scalability Planning", "Innovation Pipeline"]
    }
  ];

  const serviceCategories = [
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Transform your business with intelligent automation",
      services: ["AI Business Intelligence", "Process Automation", "Predictive Analytics", "Natural Language Processing"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Server,
      title: "IT Infrastructure",
      description: "Modernize your technology foundation",
      services: ["Cloud Migration", "DevOps Implementation", "Cybersecurity", "Digital Transformation"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets and data",
      services: ["Threat Detection", "Compliance Management", "Security Audits", "Incident Response"],
      color: "from-red-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Digital Solutions",
      description: "Enhance customer and employee experiences",
      services: ["Customer Experience", "Employee Productivity", "Digital Workflows", "Mobile Solutions"],
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
                <Rocket className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have accelerated their digital transformation 
              with Zion Tech Group's cutting-edge AI, cloud, and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-purple text-zion-purple font-semibold rounded-xl hover:bg-zion-purple hover:text-white transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="py-24 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
              <p className="text-zion-slate-light">500+ successful projects across industries</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">Certified professionals with deep expertise</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-zion-slate-light">Latest AI and emerging technologies</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-zion-slate-light">Serving clients worldwide with local expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started Process */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Journey to Digital Excellence
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our proven 4-step process ensures your success from initial assessment 
              to ongoing optimization and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-zion-slate-light mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-zion-purple" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-24 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how our comprehensive technology solutions can address your 
              specific business challenges and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</h3>
                <p className="text-zion-slate-light mb-6">{category.description}</p>
                <ul className="space-y-3 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help you achieve your technology goals 
              and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-purple text-zion-purple font-semibold rounded-xl hover:bg-zion-purple hover:text-white transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}