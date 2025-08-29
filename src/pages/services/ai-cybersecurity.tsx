import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Target,
  BarChart3,
  Globe,
  Clock,
  Award,
  Star,
  Rocket,
  Eye,
  Search,
  FileText,
  MessageCircle,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Lock,
  AlertTriangle,
  Cpu,
  Database,
  Network,
  Server,
  Smartphone,
  Cloud,
  Key,
  Fingerprint,
  Monitor,
  Activity,
  Bug,
  Virus,
  Fire,
  Snowflake,
  Hexagon
} from 'lucide-react';

export default function AICybersecurity() {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms for real-time threat identification',
      benefits: ['Zero-day attack detection', 'Behavioral analysis', 'Anomaly detection']
    },
    {
      icon: Shield,
      title: 'Intelligent Defense',
      description: 'AI-powered security systems that adapt and respond to threats automatically',
      benefits: ['Automated response', 'Threat intelligence', 'Predictive defense']
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: '24/7 security monitoring with instant threat response capabilities',
      benefits: ['Continuous monitoring', 'Instant alerts', 'Rapid response']
    },
    {
      icon: Users,
      title: 'User Behavior Analytics',
      description: 'AI-driven user behavior analysis for insider threat detection',
      benefits: ['Behavioral profiling', 'Risk scoring', 'Access control']
    }
  ];

  const solutions = [
    {
      title: 'Threat Intelligence Platform',
      description: 'AI-powered threat intelligence and analysis platform',
      icon: Eye,
      features: ['Real-time threat feeds', 'Risk assessment', 'Incident correlation']
    },
    {
      title: 'Network Security',
      description: 'Intelligent network monitoring and threat prevention',
      icon: Network,
      features: ['Traffic analysis', 'DDoS protection', 'Intrusion detection']
    },
    {
      title: 'Endpoint Security',
      description: 'AI-driven endpoint protection and threat response',
      icon: Smartphone,
      features: ['Malware detection', 'Device control', 'Threat isolation']
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive cloud security with AI-powered monitoring',
      icon: Cloud,
      features: ['Cloud access control', 'Data protection', 'Compliance monitoring']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '99.9% Threat Detection',
      description: 'Advanced AI algorithms detect threats with unprecedented accuracy'
    },
    {
      icon: Clock,
      title: 'Real-time Response',
      description: 'Instant threat response and automated incident handling'
    },
    {
      icon: Users,
      title: 'Reduced False Positives',
      description: 'AI filtering reduces alert fatigue and improves efficiency'
    },
    {
      icon: TrendingUp,
      title: 'Cost Reduction',
      description: 'Lower security costs through automation and prevention'
    }
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      applications: ['Fraud detection', 'Transaction monitoring', 'Compliance']
    },
    {
      industry: 'Healthcare',
      applications: ['Patient data protection', 'HIPAA compliance', 'Medical device security']
    },
    {
      industry: 'Government',
      applications: ['National security', 'Critical infrastructure', 'Data classification']
    },
    {
      industry: 'Manufacturing',
      applications: ['Industrial control systems', 'Supply chain security', 'IoT protection']
    }
  ];

  const securityLayers = [
    {
      layer: 'Network Security',
      components: ['Firewalls', 'Intrusion Detection', 'Traffic Analysis'],
      icon: Network
    },
    {
      layer: 'Application Security',
      components: ['Code scanning', 'Vulnerability testing', 'API protection'],
      icon: Cpu
    },
    {
      layer: 'Data Security',
      components: ['Encryption', 'Access control', 'Data loss prevention'],
      icon: Database
    },
    {
      layer: 'Identity Security',
      components: ['Multi-factor authentication', 'Single sign-on', 'Privileged access'],
      icon: Key
    }
  ];

  return (
    <>
      <SEO 
        title="AI Cybersecurity - Advanced Threat Detection & Response | Zion Tech Group"
        description="Protect your organization with AI-powered cybersecurity. Advanced threat detection, real-time monitoring, and intelligent defense systems for modern security challenges."
        keywords="AI cybersecurity, threat detection, security monitoring, network security, endpoint protection, cloud security"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-600/20"></div>
          <div className="container-responsive relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                AI Security Solutions
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Cybersecurity
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your organization with next-generation AI-powered cybersecurity. Advanced threat detection, 
                real-time monitoring, and intelligent defense systems that adapt to evolving security challenges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Security Assessment
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Advanced AI Security Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI technology with cybersecurity expertise to deliver 
                comprehensive protection against modern threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Layers Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Multi-Layer Security Architecture
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive security coverage across all layers of your infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityLayers.map((layer, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <layer.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{layer.layer}</h3>
                  <ul className="space-y-2">
                    {layer.components.map((component, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-yellow-400" />
                        {component}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Comprehensive Security Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From threat detection to incident response, our platform addresses the full spectrum of security challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                      <p className="text-gray-400 mb-4">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400" />
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
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose AI Cybersecurity?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the transformative power of AI in cybersecurity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI cybersecurity platform serves diverse industries with tailored security solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-red-400" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-600/20 border border-red-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Organization?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading organizations who are already using our AI platform to protect against 
                evolving cyber threats and maintain robust security postures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Security Assessment
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                  Contact Security Team
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Let's Discuss Your Security Needs
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Our cybersecurity experts are ready to help you implement the right security solutions 
                  for your organization. Get in touch to learn more.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-red-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-red-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-red-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Security Consultation</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Organization"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your cybersecurity needs..."
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Request Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}