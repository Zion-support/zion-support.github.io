import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Zap, 
  Shield, 
  Rocket,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Clock,
  Award
} from 'lucide-react';

export default function GetStarted() {
  const steps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Schedule a free 30-minute consultation to discuss your business needs and technology goals.",
      icon: Phone,
      duration: "30 minutes",
      features: ["Business needs assessment", "Technology roadmap planning", "ROI analysis"]
    },
    {
      step: 2,
      title: "Solution Design",
      description: "Our experts design a customized solution tailored to your specific requirements.",
      icon: Zap,
      duration: "1-2 weeks",
      features: ["Custom solution architecture", "Technology stack selection", "Implementation timeline"]
    },
    {
      step: 3,
      title: "Implementation",
      description: "Professional deployment and configuration of your chosen solutions.",
      icon: Rocket,
      duration: "2-8 weeks",
      features: ["Professional deployment", "Configuration & testing", "User training"]
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "Continuous monitoring, maintenance, and support to ensure optimal performance.",
      icon: Shield,
      duration: "Ongoing",
      features: ["24/7 monitoring", "Regular updates", "Technical support"]
    }
  ];

  const serviceCategories = [
    {
      title: "AI & Automation",
      description: "Transform your business with intelligent automation",
      icon: Zap,
      color: "from-cyan-500 to-blue-500",
      services: [
        "AI Business Intelligence Dashboard",
        "AI Customer Support Automation",
        "AI Project Management Platform",
        "AI Marketing Automation Platform"
      ]
    },
    {
      title: "IT & Infrastructure",
      description: "Build a robust technology foundation",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      services: [
        "Infrastructure Management",
        "Cloud & DevOps",
        "Cybersecurity",
        "Blockchain Solutions"
      ]
    },
    {
      title: "Micro SaaS Solutions",
      description: "Scalable software solutions for modern businesses",
      icon: Rocket,
      color: "from-green-500 to-teal-500",
      services: [
        "Customer Success Automation",
        "Financial Risk Management",
        "HR Management Platform",
        "Workflow Orchestrator"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Started with
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI, IT infrastructure, and Micro SaaS solutions. 
              Our expert team is ready to guide you through every step of your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              From initial consultation to ongoing support, we make your digital transformation journey seamless and successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
                )}
                <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6 mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-cyan-500 text-white text-sm font-bold rounded-full mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-zinc-300 mb-4">{step.description}</p>
                    <div className="flex items-center justify-center text-cyan-400 text-sm mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      {step.duration}
                    </div>
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zinc-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Select from our comprehensive range of services designed to meet your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-zinc-300 mb-6">{category.description}</p>
                  <ul className="space-y-3 mb-8">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-zinc-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            Join hundreds of businesses that have already accelerated their growth with Zion Tech Group solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Award className="w-5 h-5 mr-2" />
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}