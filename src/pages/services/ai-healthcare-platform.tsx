import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Heart, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Microscope,
  Stethoscope,
  Activity,
  Database,
  Lock,
  Globe,
  Clock,
  Award,
  Star,
  Rocket,
  Target,
  BarChart3,
  Cpu,
  Network,
  Smartphone,
  Server,
  Cloud,
  Eye,
  Search,
  FileText,
  MessageCircle,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export default function AIHealthcarePlatform() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms for accurate disease detection and diagnosis',
      benefits: ['Early disease detection', 'Reduced misdiagnosis', 'Faster results']
    },
    {
      icon: Heart,
      title: 'Patient Care Optimization',
      description: 'Intelligent patient monitoring and personalized care recommendations',
      benefits: ['24/7 monitoring', 'Personalized treatment', 'Better outcomes']
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant Security',
      description: 'Enterprise-grade security with full compliance and data protection',
      benefits: ['HIPAA certified', 'End-to-end encryption', 'Audit trails']
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Live insights and predictive analytics for proactive healthcare',
      benefits: ['Instant insights', 'Predictive modeling', 'Trend analysis']
    }
  ];

  const solutions = [
    {
      title: 'Clinical Decision Support',
      description: 'AI-powered clinical decision support systems that assist healthcare providers',
      icon: Brain,
      features: ['Evidence-based recommendations', 'Drug interaction alerts', 'Treatment guidelines']
    },
    {
      title: 'Medical Imaging Analysis',
      description: 'Advanced AI for radiology, pathology, and medical imaging interpretation',
      icon: Eye,
      features: ['X-ray analysis', 'MRI interpretation', 'Pathology screening']
    },
    {
      title: 'Patient Risk Assessment',
      description: 'Predictive risk models for early intervention and preventive care',
      icon: TrendingUp,
      features: ['Risk scoring', 'Early warning systems', 'Preventive recommendations']
    },
    {
      title: 'Healthcare Analytics',
      description: 'Comprehensive analytics platform for healthcare performance optimization',
      icon: BarChart3,
      features: ['Performance metrics', 'Quality indicators', 'Operational insights']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Improved Patient Outcomes',
      description: 'AI-driven insights lead to better diagnosis and treatment decisions'
    },
    {
      icon: Clock,
      title: 'Faster Diagnosis',
      description: 'Reduce diagnosis time from days to hours with AI assistance'
    },
    {
      icon: Users,
      title: 'Enhanced Patient Experience',
      description: 'Personalized care and improved communication with patients'
    },
    {
      icon: TrendingUp,
      title: 'Cost Reduction',
      description: 'Lower healthcare costs through prevention and early intervention'
    }
  ];

  const useCases = [
    {
      industry: 'Hospitals & Clinics',
      applications: ['Patient monitoring', 'Clinical decision support', 'Resource optimization']
    },
    {
      industry: 'Research Institutions',
      applications: ['Drug discovery', 'Clinical trials', 'Medical research']
    },
    {
      industry: 'Insurance Companies',
      applications: ['Risk assessment', 'Claims processing', 'Fraud detection']
    },
    {
      industry: 'Pharmaceutical Companies',
      applications: ['Drug development', 'Market analysis', 'Patient recruitment']
    }
  ];

  return (
    <>
      <SEO 
        title="AI Healthcare Platform - Advanced Healthcare AI Solutions | Zion Tech Group"
        description="Transform healthcare with our AI-powered platform. Advanced diagnostics, patient care optimization, and HIPAA-compliant solutions for modern healthcare providers."
        keywords="AI healthcare, medical AI, healthcare platform, clinical decision support, medical imaging AI, patient care, HIPAA compliant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
          <div className="container-responsive relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Healthcare AI Solutions
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Healthcare Platform
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform healthcare delivery with our advanced AI platform. From diagnostics to patient care, 
                our solutions enhance medical outcomes while maintaining the highest standards of security and compliance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Schedule Demo
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                  View Case Studies
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
                Advanced Healthcare AI Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI technology with healthcare expertise to deliver 
                comprehensive solutions that improve patient care and operational efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
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

        {/* Solutions Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Comprehensive Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From clinical decision support to patient analytics, our platform addresses 
                the full spectrum of healthcare challenges with intelligent AI solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
        <section className="py-20">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Healthcare Platform?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the transformative power of AI in healthcare with our proven platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI healthcare platform serves diverse healthcare sectors with tailored solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-blue-400" />
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
            <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading healthcare providers who are already using our AI platform to improve 
                patient outcomes and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                  Contact Sales
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
                  Let's Discuss Your Healthcare AI Needs
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Our healthcare AI experts are ready to help you implement the right solutions 
                  for your organization. Get in touch to learn more.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Request Information</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Organization"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your healthcare AI needs..."
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
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