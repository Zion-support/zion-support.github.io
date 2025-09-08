import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function GetStarted() {
  const steps = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Discovery & Assessment",
      description: "We analyze your current technology stack and identify opportunities for improvement.",
      duration: "1-2 weeks"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Solution Design",
      description: "Our experts design a customized solution tailored to your specific needs and goals.",
      duration: "2-3 weeks"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Implementation",
      description: "We implement the solution with minimal disruption to your business operations.",
      duration: "4-8 weeks"
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Training & Support",
      description: "Comprehensive training for your team and ongoing support to ensure success.",
      duration: "Ongoing"
    }
  ];

  const services = [
    {
      category: "AI & Automation",
      services: [
        "AI Enterprise Automation Platform",
        "AI Data Analytics Platform",
        "AI Business Intelligence",
        "AI Cybersecurity Platform"
      ]
    },
    {
      category: "IT & Infrastructure",
      services: [
        "IT Infrastructure Management",
        "Cloud & DevOps Solutions",
        "Cybersecurity Services",
        "Digital Transformation"
      ]
    },
    {
      category: "Micro SaaS Solutions",
      services: [
        "AI Sales Copilot",
        "Cloud FinOps Optimizer",
        "AI Compliance Assistant",
        "Micro SaaS Platform"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Started with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI, IT, and Micro SaaS solutions. 
              Our expert team will guide you through every step of your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                <Rocket className="w-5 h-5 inline mr-2" />
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver results that transform your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Proven Expertise</h3>
              <p className="text-gray-300">15+ years of experience in enterprise technology solutions</p>
            </div>
            
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support to ensure your success</p>
            </div>
            
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance standards</p>
            </div>
            
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-gray-300">Always at the forefront of emerging technologies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started Process */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Journey to Digital Transformation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've streamlined our process to get you up and running quickly while ensuring 
              every solution is perfectly tailored to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 relative z-10">
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-3">{step.description}</p>
                  <div className="inline-flex items-center text-cyan-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
                  </div>
                </div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Services Overview */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered automation to enterprise infrastructure, we have the expertise 
              and solutions to drive your business forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((category, index) => (
              <div key={index} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  {category.category === "AI & Automation" && <Brain className="w-6 h-6 mr-2 text-cyan-400" />}
                  {category.category === "IT & Infrastructure" && <Shield className="w-6 h-6 mr-2 text-purple-400" />}
                  {category.category === "Micro SaaS Solutions" && <Zap className="w-6 h-6 mr-2 text-yellow-400" />}
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mt-4 font-medium"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Take the first step towards transforming your business. Our team is ready to help 
            you navigate the path to digital excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-3">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-3">Send us a detailed message</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-3">Schedule an in-person meeting</p>
              <span className="text-yellow-400 font-medium">
                Delaware, USA
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Start Your Journey
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}