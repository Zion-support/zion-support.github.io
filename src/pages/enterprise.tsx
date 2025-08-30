import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  BarChart3,
  TrendingUp,
  Activity,
  Globe,
  FileText,
  Monitor,
  Lock,
  Database,
  Network,
  Server,
  Code,
  Smartphone,
  Zap,
  Target,
  Rocket,
  Star,
  Workflow,
  Eye,
  Settings,
  Cloud,
  Cpu,
  Brain,
  ShieldCheck,
  LockKeyhole,
  ShoppingCart
} from 'lucide-react';

export default function Enterprise() {
  const solutions = [
    {
      title: "Enterprise AI Platform",
      description: "Comprehensive AI solutions for large-scale enterprise operations.",
      icon: Brain,
      features: ["Machine learning", "Predictive analytics", "Process automation", "Decision support"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for enterprise workloads.",
      icon: Cloud,
      features: ["Multi-cloud strategy", "Hybrid cloud", "Cloud security", "Performance optimization"]
    },
    {
      title: "Data Management",
      description: "Enterprise-grade data solutions for analytics and insights.",
      icon: Database,
      features: ["Data warehousing", "Big data processing", "Data governance", "Business intelligence"]
    },
    {
      title: "Cybersecurity Suite",
      description: "Comprehensive security solutions for enterprise protection.",
      icon: Shield,
      features: ["Threat detection", "Identity management", "Compliance", "Incident response"]
    },
    {
      title: "Digital Workspace",
      description: "Modern workplace solutions for productivity and collaboration.",
      icon: Users,
      features: ["Collaboration tools", "Remote work support", "Productivity apps", "Communication platforms"]
    },
    {
      title: "Enterprise Integration",
      description: "Seamless integration of enterprise systems and applications.",
      icon: Network,
      features: ["API management", "System integration", "Data synchronization", "Workflow automation"]
    }
  ];

  const industries = [
    {
      title: "Financial Services",
      description: "Banking, insurance, and fintech enterprise solutions.",
      icon: BarChart3,
      features: ["Risk management", "Compliance", "Customer analytics", "Digital banking"]
    },
    {
      title: "Healthcare",
      description: "Healthcare technology solutions for hospitals and clinics.",
      icon: ShieldCheck,
      features: ["Electronic health records", "Patient management", "Telemedicine", "Data security"]
    },
    {
      title: "Manufacturing",
      description: "Industry 4.0 solutions for manufacturing enterprises.",
      icon: Cpu,
      features: ["Smart factories", "Supply chain", "Quality control", "Predictive maintenance"]
    },
    {
      title: "Retail & E-commerce",
      description: "Omnichannel retail solutions for enterprise businesses.",
      icon: ShoppingCart,
      features: ["E-commerce platforms", "Inventory management", "Customer experience", "Analytics"]
    }
  ];

  const benefits = [
    {
      title: "Scalability",
      description: "Solutions that grow with your business needs.",
      icon: TrendingUp
    },
    {
      title: "Security",
      description: "Enterprise-grade security and compliance.",
      icon: Shield
    },
    {
      title: "Integration",
      description: "Seamless integration with existing systems.",
      icon: Network
    },
    {
      title: "Support",
      description: "24/7 enterprise support and maintenance.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Building className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise
            <span className="text-zion-cyan"> Solutions</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Comprehensive enterprise solutions designed for large organizations. Scale efficiently, 
            maintain security, and drive innovation with our enterprise-grade technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:scale-105"
            >
              Enterprise Solutions
            </Link>
            <Link
              to="/request-quote"
              className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Enterprise Assessment
            </Link>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Solutions Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive solutions designed to meet the complex needs of enterprise organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-zion-slate-light mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
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
              Tailored enterprise solutions for your industry's unique challenges and requirements.
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
              Why Choose Enterprise Solutions?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience the benefits of enterprise-grade technology solutions.
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
            Ready for Enterprise Solutions?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let's discuss how our enterprise solutions can transform your organization.
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
              to="/enterprise-assessment"
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