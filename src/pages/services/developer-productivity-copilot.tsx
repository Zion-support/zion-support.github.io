import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Code, 
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
  Shield,
  Database,
  Network,
  Server,
  Cloud,
  Cpu,
  Activity,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function DeveloperProductivityCopilot() {
  const features = [
    {
      icon: Code,
      title: 'AI Code Generation',
      description: 'Intelligent code suggestions and auto-completion',
      benefits: ['Context-aware suggestions', 'Multi-language support', 'Best practices']
    },
    {
      icon: Brain,
      title: 'Smart Debugging',
      description: 'AI-powered error detection and resolution',
      benefits: ['Error prediction', 'Fix suggestions', 'Performance optimization']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive development tasks',
      benefits: ['Build automation', 'Testing workflows', 'Deployment pipelines']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced team productivity and coordination',
      benefits: ['Code review assistance', 'Knowledge sharing', 'Project tracking']
    }
  ];

  const solutions = [
    {
      title: 'Code Quality & Review',
      description: 'AI-powered code analysis and improvement',
      icon: Shield,
      features: ['Static analysis', 'Code review automation', 'Quality metrics']
    },
    {
      title: 'Development Workflow',
      description: 'Streamlined development processes',
      icon: Rocket,
      features: ['Git integration', 'CI/CD automation', 'Project management']
    },
    {
      title: 'Testing & Debugging',
      description: 'Intelligent testing and error resolution',
      icon: Activity,
      features: ['Automated testing', 'Debug assistance', 'Performance monitoring']
    },
    {
      title: 'Documentation & Knowledge',
      description: 'Automated documentation and knowledge management',
      icon: Database,
      features: ['Code documentation', 'API docs', 'Knowledge base']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '3x Development Speed',
      description: 'Accelerate development with AI assistance'
    },
    {
      icon: Clock,
      title: 'Reduced Debug Time',
      description: 'Find and fix issues faster with AI insights'
    },
    {
      icon: Users,
      title: 'Better Code Quality',
      description: 'AI ensures best practices and standards'
    },
    {
      icon: TrendingUp,
      title: 'Increased Productivity',
      description: 'Focus on creative problem-solving, not routine tasks'
    }
  ];

  return (
    <>
      <SEO 
        title="Developer Productivity Copilot - AI-Powered Development Tools | Zion Tech Group"
        description="Boost developer productivity with AI-powered code generation, debugging, and workflow automation tools."
        keywords="developer productivity copilot, AI code generation, smart debugging, workflow automation, development tools"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20"></div>
          <div className="container-responsive relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <Code className="w-4 h-4" />
                Developer Tools
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Developer Productivity Copilot
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Supercharge your development team with AI-powered tools that accelerate coding, 
                improve quality, and automate workflows for maximum productivity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Free Trial
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
                AI-Powered Development Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with development best practices to deliver 
                comprehensive productivity tools.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
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
                Complete Development Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From code generation to deployment, our platform covers the entire development lifecycle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                Why Choose Developer Productivity Copilot?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the transformative power of AI in software development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
            <div className="bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20 border border-green-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Boost Your Development Team?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading development teams who are already using our AI platform to increase 
                productivity and deliver better software faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started Free
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
                  Let's Discuss Your Development Needs
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Our development AI experts are ready to help you implement the right productivity 
                  tools for your team. Get in touch to learn more.
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
                      placeholder="Tell us about your development productivity needs..."
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300"
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