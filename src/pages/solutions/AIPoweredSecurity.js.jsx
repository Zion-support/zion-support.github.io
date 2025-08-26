import React from 'react';
import { Brain, Shield, Users, Cpu, Database, Lightbulb, Lock, Eye, AlertTriangle, Cloud } from 'lucide-react';
const AIPoweredSecurity = () => {
    const securityFeatures = [
        {
            icon: Brain,
            title: "AI Threat Detection",
            description: "Intelligent threat identification and response using machine learning",
            features: ["Behavioral analysis", "Pattern recognition", "Anomaly detection", "Predictive security"]
        },
        {
            icon: Shield,
            title: "Advanced Protection",
            description: "Multi-layered security with AI-enhanced defense mechanisms",
            features: ["Real-time monitoring", "Automated response", "Threat intelligence", "Zero-day protection"]
        },
        {
            icon: Eye,
            title: "Continuous Monitoring",
            description: "24/7 surveillance and analysis of security events",
            features: ["Real-time alerts", "Comprehensive logging", "Performance metrics", "Incident tracking"]
        },
        {
            icon: Lock,
            title: "Access Control",
            description: "Intelligent authentication and authorization systems",
            features: ["Biometric verification", "Behavioral analysis", "Risk-based access", "Multi-factor auth"]
        }
    ];
    const securitySolutions = [
        {
            title: "Network Security",
            description: "AI-powered network monitoring and threat prevention",
            icon: Shield,
            capabilities: ["Intrusion detection", "Traffic analysis", "DDoS protection", "Firewall management"]
        },
        {
            title: "Endpoint Security",
            description: "Comprehensive protection for all devices and endpoints",
            icon: Cpu,
            capabilities: ["Malware detection", "Device control", "Data protection", "Threat response"]
        },
        {
            title: "Cloud Security",
            description: "Secure cloud infrastructure and application protection",
            icon: Cloud,
            capabilities: ["Cloud monitoring", "API security", "Data encryption", "Compliance management"]
        },
        {
            title: "Data Security",
            description: "Protection of sensitive data and information assets",
            icon: Database,
            capabilities: ["Data classification", "Encryption", "Access control", "Audit trails"]
        },
        {
            title: "Identity Management",
            description: "Secure user identity and access management",
            icon: Users,
            capabilities: ["User provisioning", "Role management", "Single sign-on", "Identity verification"]
        },
        {
            title: "Incident Response",
            description: "Automated incident detection and response",
            icon: AlertTriangle,
            capabilities: ["Threat hunting", "Automated response", "Forensic analysis", "Recovery planning"]
        }
    ];
    const benefits = [
        "Proactive threat detection and prevention",
        "Reduced false positives and alert fatigue",
        "Faster incident response and resolution",
        "Continuous learning and adaptation",
        "Comprehensive security coverage",
        "Cost-effective security operations"
    ];
    const implementation = [
        {
            phase: "Security Assessment",
            description: "Evaluate current security posture and identify gaps",
            duration: "2-4 weeks"
        },
        {
            phase: "AI Integration",
            description: "Integrate AI capabilities into existing security infrastructure",
            duration: "6-10 weeks"
        },
        {
            phase: "Training & Tuning",
            description: "Train AI models and optimize security parameters",
            duration: "4-8 weeks"
        },
        {
            phase: "Deployment",
            description: "Deploy AI-powered security across the organization",
            duration: "4-6 weeks"
        },
        {
            phase: "Testing & Validation",
            description: "Validate security effectiveness and performance",
            duration: "2-4 weeks"
        },
        {
            phase: "Monitoring & Optimization",
            description: "Continuous monitoring and system optimization",
            duration: "Ongoing"
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 text-red-400 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2"/>
              AI Security Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Powered
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> Security</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your organization with intelligent, AI-driven security 
              that adapts and evolves to counter emerging threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#features" className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Features
              </a>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Security Features */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered security solution provides intelligent, adaptive 
              protection against evolving cyber threats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (<li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </section>
      {/* Security Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI-powered security solutions covering all aspects 
              of your organization's security needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securitySolutions.map((solution, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.capabilities.map((capability, idx) => (<li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {capability}
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI-Powered Security?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our AI security solution provides intelligent, adaptive protection 
                that continuously learns and improves.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (<li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30">
              <div className="text-center">
                <Lightbulb className="w-24 h-24 text-red-400 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold text-white mb-2">Intelligent Defense</h3>
                <p className="text-gray-300 mb-6">
                  AI-powered security that learns from every threat and adapts 
                  to protect against new attack vectors.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Continuous learning</p>
                  <p>• Adaptive protection</p>
                  <p>• Proactive defense</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Implementation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Implementation Process
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            A structured approach to deploying AI-powered security across 
            your organization with minimal disruption.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementation.map((phase, index) => (<div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.phase}</h3>
                <p className="text-gray-300 mb-2">{phase.description}</p>
                <p className="text-sm text-red-400">{phase.duration}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Protect your business with intelligent, AI-driven security 
            that adapts to evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Secure Your Business
            </a>
            <a href="/solutions" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              View All Solutions
            </a>
          </div>
        </div>
      </section>
    </div>);
};
export default AIPoweredSecurity;
