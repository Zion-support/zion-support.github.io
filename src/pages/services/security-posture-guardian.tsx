import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Brain, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Target,
  BarChart3,
  Clock,
  Users,
  Rocket,
  Lock,
  Database,
  Network,
  Server,
  Cloud,
  Cpu,
  Activity,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  Eye,
  Search,
  FileText,
  Calendar,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserSearch,
  UserEdit,
  UserSettings,
  AlertCircle,
  Info,
  HelpCircle,
  Settings,
  Cog,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Ruler,
  Compass,
  Map,
  Navigation,
  Route,
  Path,
  Way,
  Direction,
  Arrow,
  Pointer,
  Cursor,
  Mouse,
  Touch,
  Hand,
  Finger,
  Thumb,
  Index,
  Middle,
  Ring,
  Pinky
} from 'lucide-react';

export default function SecurityPostureGuardian() {
  const features = [
    {
      icon: Shield,
      title: 'Real-time Threat Detection',
      description: 'AI-powered security monitoring and alerting',
      benefits: ['24/7 monitoring', 'Instant alerts', 'Threat intelligence']
    },
    {
      icon: Brain,
      title: 'Intelligent Risk Assessment',
      description: 'AI-driven security posture analysis',
      benefits: ['Vulnerability scanning', 'Risk scoring', 'Compliance monitoring']
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Immediate threat containment and mitigation',
      benefits: ['Auto-blocking', 'Incident response', 'Recovery automation']
    },
    {
      icon: Users,
      title: 'Security Analytics',
      description: 'Comprehensive security insights and reporting',
      benefits: ['Performance metrics', 'Trend analysis', 'Compliance reports']
    }
  ];

  const solutions = [
    {
      title: 'Threat Detection & Response',
      description: 'AI-powered security monitoring and automated response',
      icon: Eye,
      features: ['Real-time monitoring', 'Threat hunting', 'Incident response']
    },
    {
      title: 'Vulnerability Management',
      description: 'Comprehensive vulnerability assessment and remediation',
      icon: Search,
      features: ['Asset discovery', 'Vulnerability scanning', 'Patch management']
    },
    {
      title: 'Compliance & Governance',
      description: 'Security compliance monitoring and reporting',
      icon: FileText,
      features: ['Compliance tracking', 'Audit trails', 'Policy enforcement']
    },
    {
      title: 'Security Operations',
      description: 'Streamlined security operations and management',
      icon: Settings,
      features: ['SIEM integration', 'Workflow automation', 'Team collaboration']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '24/7 Security Monitoring',
      description: 'Continuous protection against threats'
    },
    {
      icon: Clock,
      title: 'Instant Threat Response',
      description: 'Automated response to security incidents'
    },
    {
      icon: Users,
      title: 'Reduced Security Risk',
      description: 'Proactive threat prevention and mitigation'
    },
    {
      icon: TrendingUp,
      title: 'Compliance Assurance',
      description: 'Meet regulatory and industry standards'
    }
  ];

  const securityLayers = [
    {
      layer: 'Network Security',
      components: ['Firewall management', 'Intrusion detection', 'Traffic analysis'],
      icon: Network
    },
    {
      layer: 'Endpoint Protection',
      components: ['Device monitoring', 'Malware detection', 'Access control'],
      icon: Cpu
    },
    {
      layer: 'Application Security',
      components: ['Code scanning', 'API protection', 'Input validation'],
      icon: Code
    },
    {
      layer: 'Data Security',
      components: ['Encryption', 'Access management', 'Data classification'],
      icon: Database
    }
  ];

  return (
    <>
      <SEO 
        title="Security Posture Guardian - AI-Powered Security Monitoring | Zion Tech Group"
        description="Protect your organization with AI-powered security monitoring, threat detection, and automated response capabilities."
        keywords="security posture guardian, AI security monitoring, threat detection, vulnerability management, compliance monitoring"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-600/20"></div>
          <div className="container-responsive relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Security Solutions
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Security Posture Guardian
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your organization with AI-powered security monitoring, threat detection, 
                and automated response capabilities for comprehensive cybersecurity protection.
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
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with security expertise to deliver 
                comprehensive protection against evolving threats.
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
                Multi-Layer Security Protection
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive security coverage across all layers of your infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityLayers.map((layer, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                    <layer.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{layer.layer}</h3>
                  <ul className="space-y-2">
                    {layer.components.map((component, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-orange-400" />
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
                Complete Security Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From threat detection to compliance, our platform addresses all security challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                Why Choose Security Posture Guardian?
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

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-600/20 border border-red-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Organization?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading organizations who are already using our AI platform to protect 
                their digital assets and maintain compliance.
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
                  Our security AI experts are ready to help you implement the right protection 
                  strategies for your organization. Get in touch to learn more.
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
                <h3 className="text-2xl font-semibold text-white mb-6">Request Security Assessment</h3>
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
                      placeholder="Tell us about your security concerns and requirements..."
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Send Message
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