import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Target,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Workflow,
  Database,
  Globe,
  Lock,
  Rocket,
  Star,
  Award,
  Headphones,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Enterprise() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Business Intelligence",
      description: "Advanced analytics and insights to drive strategic decision-making across your enterprise.",
      benefits: ["Real-time data analysis", "Predictive analytics", "Custom dashboards", "Executive reporting"]
    },
    {
      icon: Workflow,
      title: "Enterprise Workflow Automation",
      description: "Streamline complex business processes with intelligent automation solutions.",
      benefits: ["Process optimization", "Reduced manual work", "Improved efficiency", "Cost savings"]
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Comprehensive security solutions to protect your enterprise data and ensure compliance.",
      benefits: ["Zero-trust security", "GDPR compliance", "SOC 2 certification", "24/7 monitoring"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure Management",
      description: "Scalable cloud solutions designed for enterprise needs and performance requirements.",
      benefits: ["Multi-cloud strategy", "Cost optimization", "Performance monitoring", "Disaster recovery"]
    }
  ];

  const solutions = [
    {
      category: "AI & Machine Learning",
      services: [
        "AI Business Intelligence Platform",
        "AI Enterprise Resource Planning",
        "AI Customer Intelligence Platform",
        "AI Predictive Analytics",
        "AI Workflow Orchestrator"
      ]
    },
    {
      category: "Cybersecurity",
      services: [
        "AI Cybersecurity Platform",
        "Threat Intelligence",
        "Zero Trust Security",
        "Compliance Automation",
        "Security Assessment Tools"
      ]
    },
    {
      category: "Cloud & DevOps",
      services: [
        "Cloud DevOps Automation",
        "Infrastructure as Code",
        "Container Orchestration",
        "CI/CD Pipeline Optimization",
        "Cloud Cost Management"
      ]
    },
    {
      category: "Data & Analytics",
      services: [
        "Data Analytics Platform",
        "Business Intelligence Dashboards",
        "Data Warehouse Solutions",
        "Real-time Analytics",
        "Data Governance"
      ]
    }
  ];

  const caseStudies = [
    {
      industry: "Financial Services",
      company: "Global Bank",
      challenge: "Complex regulatory compliance and risk management",
      solution: "AI-powered compliance automation and risk assessment platform",
      results: "40% reduction in compliance costs, 60% faster risk assessment"
    },
    {
      industry: "Manufacturing",
      company: "Industrial Manufacturer",
      challenge: "Supply chain inefficiencies and quality control",
      solution: "AI supply chain optimization and predictive maintenance",
      results: "25% improvement in supply chain efficiency, 30% reduction in downtime"
    },
    {
      industry: "Healthcare",
      company: "Hospital Network",
      challenge: "Patient data management and care coordination",
      solution: "AI healthcare analytics and patient intelligence platform",
      results: "35% improvement in patient outcomes, 45% reduction in administrative costs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your enterprise with Zion Tech Group's comprehensive AI-powered solutions. From business intelligence to cybersecurity, we deliver scalable enterprise solutions that drive growth and efficiency." />
        <meta name="keywords" content="enterprise solutions, AI business intelligence, enterprise security, cloud infrastructure, workflow automation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/enterprise" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 text-zion-purple text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Enterprise Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Enterprise with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> AI-Powered Solutions</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Zion Tech Group delivers comprehensive enterprise solutions that combine cutting-edge AI technology with proven business strategies to drive growth, efficiency, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our comprehensive suite of enterprise solutions is designed to address the most complex business challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-zion-purple/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-zion-purple/20 rounded-lg mr-4">
                    <feature.icon className="w-8 h-8 text-zion-purple" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Solution Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From AI and machine learning to cybersecurity and cloud infrastructure, we provide end-to-end enterprise solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg mr-3">
                    <Target className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{solution.category}</h3>
                </div>
                <ul className="space-y-2">
                  {solution.services.map((service, idx) => (
                    <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                      <ArrowRight className="w-4 h-4 text-zion-purple mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              See how leading enterprises are transforming their operations with Zion Tech Group solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-zion-green/20 rounded-lg mr-3">
                    <Star className="w-6 h-6 text-zion-green" />
                  </div>
                  <div>
                    <div className="text-sm text-zion-cyan font-medium">{study.industry}</div>
                    <div className="text-white font-semibold">{study.company}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                  <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Solution:</h4>
                  <p className="text-zion-slate-light text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Results:</h4>
                  <p className="text-zion-cyan text-sm font-medium">{study.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how Zion Tech Group can help you achieve your enterprise transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-zion-cyan/20 rounded-lg mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 (302) 464-0950</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-zion-purple/20 rounded-lg mb-4">
                <Mail className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-zion-green/20 rounded-lg mb-4">
                <MapPin className="w-8 h-8 text-zion-green" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
