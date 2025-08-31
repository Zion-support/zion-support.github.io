import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  RefreshCw, 
  TrendingUp, 
  BarChart3, 
  Settings, 
  Users, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Play, 
  Download, 
  Mail, 
  Target, 
  Activity, 
  Database, 
  Calculator, 
  PieChart, 
  Globe, 
  Clock, 
  Zap, 
  Eye, 
  Brain, 
  Cpu, 
  Cloud, 
  Smartphone 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DigitalTransformation() {
  const features = [
    {
      icon: Brain,
      title: "Digital Strategy",
      description: "Develop comprehensive digital transformation roadmap and strategy."
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Migrate legacy systems to modern cloud infrastructure and platforms."
    },
    {
      icon: Settings,
      title: "Process Automation",
      description: "Automate manual processes and workflows for improved efficiency."
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Enhance customer journey and digital touchpoints across all channels."
    },
    {
      icon: Shield,
      title: "Digital Security",
      description: "Implement robust cybersecurity and data protection measures."
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description: "Leverage data insights to drive business decisions and growth."
    }
  ];

  const benefits = [
    "Increase operational efficiency by 40%",
    "Improve customer satisfaction by 60%",
    "Reduce operational costs by 30%",
    "Accelerate time-to-market by 50%",
    "Enhance employee productivity by 35%",
    "Boost revenue growth by 25%"
  ];

  const services = [
    {
      title: "Digital Strategy & Consulting",
      description: "Comprehensive assessment and roadmap development for your digital transformation journey.",
      icon: Target
    },
    {
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern, scalable, and efficient solutions.",
      icon: RefreshCw
    },
    {
      title: "Cloud Migration & Infrastructure",
      description: "Seamless migration to cloud platforms with optimized infrastructure design.",
      icon: Cloud
    },
    {
      title: "Process Automation & Optimization",
      description: "Streamline operations with intelligent automation and workflow optimization.",
      icon: Settings
    },
    {
      title: "Customer Experience Enhancement",
      description: "Create seamless, personalized customer experiences across all touchpoints.",
      icon: Users
    },
    {
      title: "Data Strategy & Analytics",
      description: "Build data-driven decision-making capabilities with advanced analytics.",
      icon: BarChart3
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with comprehensive digital transformation services. Modernize operations, enhance customer experience, and drive innovation." />
        <meta name="keywords" content="digital transformation, business modernization, digital strategy, technology consulting, process automation, digital innovation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/digital-transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8">
                <RefreshCw className="w-4 h-4 mr-2" />
                Business Transformation
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Digital
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Transformation</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your business with comprehensive digital transformation services. Modernize operations,
                enhance customer experience, and drive innovation across your organization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Digital Transformation
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our digital transformation services cover every aspect of modernizing your business
                for the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Digital Transformation?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Transform your business and stay ahead of the competition with our proven digital transformation approach.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Digital Transformation Services
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                End-to-end digital transformation solutions tailored to your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 mb-4">{service.description}</p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how digital transformation can accelerate your business growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Get Started
              </Link>
              <button className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}