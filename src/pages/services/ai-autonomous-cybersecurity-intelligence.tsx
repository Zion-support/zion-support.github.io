import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Shield, 
  Zap, 
  Eye, 
  AlertTriangle, 
  Lock,
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Activity,
  BarChart3,
  Users,
  Server,
  Network
} from 'lucide-react';

export default function AIAutonomousCybersecurityIntelligence() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and analyze threats in real-time with 99.9% accuracy."
    },
    {
      icon: Shield,
      title: "Zero-Day Attack Prevention",
      description: "Predict and prevent unknown threats before they can exploit vulnerabilities in your systems."
    },
    {
      icon: Eye,
      title: "Continuous Monitoring",
      description: "24/7 surveillance of your entire digital infrastructure with instant threat response."
    },
    {
      icon: Lock,
      title: "Automated Incident Response",
      description: "Intelligent automation handles security incidents instantly, reducing response time by 90%."
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$299",
      period: "/month",
      features: ["Basic threat detection", "Email alerts", "Standard support", "Up to 100 endpoints"]
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      features: ["Advanced AI detection", "Automated response", "Priority support", "Unlimited endpoints", "API access"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1999",
      period: "/month",
      features: ["Full platform access", "Custom integrations", "Dedicated security team", "Compliance reporting", "White-label options"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Autonomous Cybersecurity Intelligence | Zion Tech Group</title>
        <meta name="description" content="Next-generation AI-powered cybersecurity platform with autonomous threat detection, prevention, and response capabilities." />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-autonomous-cybersecurity-intelligence" />
      </Helmet>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            AI-Powered Cybersecurity
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Autonomous Cybersecurity
            <span className="text-zion-cyan"> Intelligence Platform</span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Protect your digital assets with the world's most advanced AI-powered cybersecurity platform. 
            Autonomous threat detection, prevention, and response that never sleeps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-all duration-300">
              View Pricing <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300">
              Request Demo
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advanced Security Features</h2>
            <p className="text-xl text-zion-slate-light">Cutting-edge AI capabilities for comprehensive cybersecurity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Pricing Plans</h2>
            <p className="text-xl text-zion-slate-light">Choose the security level that protects your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular ? 'border-zion-cyan bg-zion-slate-dark/80 scale-105' : 'border-zion-purple/20 bg-zion-slate-dark/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-zion-cyan text-white hover:bg-zion-cyan/90">
                  Get Protected
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Our Security Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">+1 (302) 464-0950</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}