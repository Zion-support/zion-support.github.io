import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Users, 
  Brain, 
  Zap, 
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
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserSearch,
  UserEdit,
  UserSettings,
  Shield,
  Lock,
  Database,
  Network,
  Server,
  Cloud,
  Cpu,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Target,
  Goal,
  CheckSquare,
  AlertCircle,
  Info,
  HelpCircle
} from 'lucide-react';

export default function AIHRPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Recruitment',
      description: 'AI-powered candidate screening and matching',
      benefits: ['Automated resume parsing', 'Skill matching', 'Bias reduction']
    },
    {
      icon: Users,
      title: 'Employee Management',
      description: 'Comprehensive HR management with AI insights',
      benefits: ['Performance tracking', 'Career development', 'Employee engagement']
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Streamlined HR processes and automation',
      benefits: ['Onboarding automation', 'Leave management', 'Performance reviews']
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Data-driven HR decision making',
      benefits: ['Turnover prediction', 'Performance analytics', 'Workforce planning']
    }
  ];

  const solutions = [
    {
      title: 'Recruitment & Onboarding',
      description: 'AI-powered talent acquisition and employee onboarding',
      icon: UserPlus,
      features: ['Job posting optimization', 'Candidate screening', 'Automated onboarding']
    },
    {
      title: 'Performance Management',
      description: 'Intelligent performance tracking and development',
      icon: Target,
      features: ['Goal setting', 'Performance reviews', 'Development planning']
    },
    {
      title: 'Employee Engagement',
      description: 'AI-driven employee satisfaction and retention',
      icon: Users,
      features: ['Sentiment analysis', 'Feedback collection', 'Engagement metrics']
    },
    {
      title: 'HR Analytics',
      description: 'Comprehensive workforce analytics and insights',
      icon: BarChart3,
      features: ['Turnover analysis', 'Diversity metrics', 'Workforce planning']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '50% Faster Hiring',
      description: 'Reduce time-to-hire with AI-powered screening'
    },
    {
      icon: Clock,
      title: '24/7 HR Support',
      description: 'Automated responses and self-service options'
    },
    {
      icon: Users,
      title: 'Better Retention',
      description: 'AI insights help improve employee satisfaction'
    },
    {
      icon: TrendingUp,
      title: 'Cost Reduction',
      description: 'Lower HR costs through automation and efficiency'
    }
  ];

  const useCases = [
    {
      industry: 'Technology Companies',
      applications: ['Technical hiring', 'Skill assessment', 'Culture fit analysis']
    },
    {
      industry: 'Healthcare',
      applications: ['Clinical staff management', 'Compliance tracking', 'Credential verification']
    },
    {
      industry: 'Financial Services',
      applications: ['Compliance monitoring', 'Risk assessment', 'Performance tracking']
    },
    {
      industry: 'Manufacturing',
      applications: ['Safety training', 'Skill development', 'Workforce planning']
    }
  ];

  const hrModules = [
    {
      module: 'Recruitment',
      components: ['Job posting', 'Candidate screening', 'Interview scheduling'],
      icon: UserPlus
    },
    {
      module: 'Onboarding',
      components: ['Document management', 'Training tracking', 'Progress monitoring'],
      icon: UserCheck
    },
    {
      module: 'Performance',
      components: ['Goal setting', 'Review cycles', 'Development planning'],
      icon: Target
    },
    {
      module: 'Analytics',
      components: ['Workforce insights', 'Predictive analytics', 'Reporting'],
      icon: BarChart3
    }
  ];

  return (
    <>
      <SEO 
        title="AI HR Platform - Intelligent Human Resources Management | Zion Tech Group"
        description="Transform your HR operations with AI-powered solutions. Intelligent recruitment, performance management, and employee engagement for modern organizations."
        keywords="AI HR platform, human resources, recruitment automation, performance management, employee engagement, HR analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-teal-600/20 to-cyan-600/20"></div>
          <div className="container-responsive relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                AI HR Solutions
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI HR Platform
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your human resources operations with AI-powered solutions. Intelligent recruitment, 
                performance management, and employee engagement for modern organizations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Schedule Demo
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                  View Features
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
                Advanced AI HR Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI technology with HR expertise to deliver 
                comprehensive solutions that transform your workforce management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
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

        {/* HR Modules Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Comprehensive HR Modules
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From recruitment to analytics, our platform covers all aspects of HR management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {hrModules.map((module, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{module.module}</h3>
                  <ul className="space-y-2">
                    {module.components.map((component, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-teal-400" />
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
                Complete HR Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From talent acquisition to workforce analytics, our platform addresses the full spectrum of HR challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
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
                Why Choose AI HR Platform?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the transformative power of AI in human resources management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                Our AI HR platform serves diverse industries with tailored solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-green-400" />
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
            <div className="bg-gradient-to-r from-green-600/20 via-teal-600/20 to-cyan-600/20 border border-green-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your HR?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading organizations who are already using our AI platform to streamline 
                HR operations and improve employee experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
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
                  Let's Discuss Your HR Needs
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Our HR AI experts are ready to help you implement the right solutions 
                  for your organization. Get in touch to learn more.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-green-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-green-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-green-400" />
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Organization"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your HR automation needs..."
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300"
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