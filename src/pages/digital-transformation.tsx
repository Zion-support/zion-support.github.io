import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Zap, 
  Cpu, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  BarChart3,
  Users,
  Building,
  FileText,
  Monitor,
  Shield,
  Lock,
  Database,
  Network,
  Server,
  Code,
  Smartphone,
  Globe,
  Target,
  Rocket,
  Star,
  Workflow,
  Activity,
  Eye,
  Settings,
  Cloud,
  ShoppingCart
} from 'lucide-react';

export default function DigitalTransformation() {
  const services = [
    {
      title: "Digital Strategy Consulting",
      description: "Develop comprehensive digital transformation roadmaps aligned with business objectives.",
      icon: Target,
      features: ["Technology assessment", "Change management", "ROI analysis", "Implementation planning"]
    },
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent automation and workflow optimization.",
      icon: Workflow,
      features: ["RPA implementation", "Workflow automation", "Process optimization", "Efficiency metrics"]
    },
    {
      title: "Cloud Migration",
      description: "Transform your infrastructure with modern cloud technologies and services.",
      icon: Cloud,
      features: ["Migration strategy", "Cloud architecture", "Data migration", "Performance optimization"]
    },
    {
      title: "Data Analytics & BI",
      description: "Harness the power of data to drive informed business decisions.",
      icon: BarChart3,
      features: ["Data strategy", "Analytics platforms", "Business intelligence", "Predictive analytics"]
    },
    {
      title: "Customer Experience",
      description: "Enhance customer engagement through digital channels and technologies.",
      icon: Users,
      features: ["Omnichannel strategy", "Customer journey mapping", "Digital touchpoints", "Experience optimization"]
    },
    {
      title: "Change Management",
      description: "Guide your organization through successful digital transformation initiatives.",
      icon: Settings,
      features: ["Stakeholder engagement", "Training programs", "Communication strategy", "Success metrics"]
    }
  ];

  const industries = [
    {
      title: "Manufacturing",
      description: "Industry 4.0 transformation with IoT, AI, and automation.",
      icon: Cpu,
      features: ["Smart factories", "Predictive maintenance", "Supply chain optimization", "Quality control"]
    },
    {
      title: "Healthcare",
      description: "Digital health solutions for improved patient care and operational efficiency.",
      icon: Shield,
      features: ["Electronic health records", "Telemedicine platforms", "Patient engagement", "Operational efficiency"]
    },
    {
      title: "Financial Services",
      description: "Fintech innovation and digital banking transformation.",
      icon: BarChart3,
      features: ["Digital banking", "Payment solutions", "Risk management", "Customer experience"]
    },
    {
      title: "Retail & E-commerce",
      description: "Omnichannel retail and digital commerce transformation.",
      icon: ShoppingCart,
      features: ["E-commerce platforms", "Inventory management", "Customer analytics", "Omnichannel integration"]
    }
  ];

  const benefits = [
    {
      title: "Operational Efficiency",
      description: "Streamline processes and reduce operational costs through automation.",
      icon: Zap
    },
    {
      title: "Customer Experience",
      description: "Enhance customer satisfaction with digital-first experiences.",
      icon: Star
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions based on real-time data and analytics.",
      icon: Eye
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of competitors with innovative digital solutions.",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Digital
            <span className="text-zion-cyan"> Transformation</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business for the digital age with comprehensive technology solutions. 
            Drive innovation, efficiency, and growth through strategic digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:scale-105"
            >
              Start Transformation
            </Link>
            <Link
              to="/request-quote"
              className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Digital Assessment
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Digital Transformation Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive services to guide your organization through successful digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored digital transformation solutions for your industry's unique challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="bg-zion-blue border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{industry.title}</h3>
                  <p className="text-zion-slate-light mb-6">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Digital Transformation?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience the benefits of modernizing your business with digital technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let's discuss how digital transformation can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/digital-assessment"
              className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}