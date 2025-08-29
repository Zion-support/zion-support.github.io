import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Cloud, 
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
  Server,
  Database,
  Network,
  Cpu,
  Activity,
  Phone,
  Mail,
  MapPin,
  Code,
  GitBranch,
  RefreshCw,
  Play,
  Pause,
  Stop,
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

export default function CloudDevOps() {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and management',
      benefits: ['Multi-cloud support', 'Auto-scaling', 'Cost optimization']
    },
    {
      icon: Code,
      title: 'DevOps Automation',
      description: 'Streamlined development and deployment',
      benefits: ['CI/CD pipelines', 'Infrastructure as code', 'Automated testing']
    },
    {
      icon: Zap,
      title: 'Monitoring & Analytics',
      description: 'Real-time performance insights',
      benefits: ['Performance tracking', 'Alert systems', 'Resource optimization']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced development workflows',
      benefits: ['Version control', 'Code review', 'Team coordination']
    }
  ];

  const solutions = [
    {
      title: 'Infrastructure Management',
      description: 'Cloud infrastructure provisioning and management',
      icon: Server,
      features: ['Resource provisioning', 'Configuration management', 'Monitoring']
    },
    {
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment',
      icon: GitBranch,
      features: ['Build automation', 'Testing integration', 'Deployment automation']
    },
    {
      title: 'Container Orchestration',
      description: 'Kubernetes and container management',
      icon: Cpu,
      features: ['Container deployment', 'Service mesh', 'Scaling automation']
    },
    {
      title: 'Security & Compliance',
      description: 'DevSecOps and security automation',
      icon: Shield,
      features: ['Security scanning', 'Compliance checks', 'Access management']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '10x Deployment Speed',
      description: 'Automated pipelines accelerate delivery'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Continuous monitoring and auto-recovery'
    },
    {
      icon: Users,
      title: 'Better Collaboration',
      description: 'Streamlined team workflows and communication'
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Intelligent resource management and scaling'
    }
  ];

  const devopsStages = [
    {
      stage: 'Plan & Design',
      components: ['Requirements analysis', 'Architecture design', 'Resource planning'],
      icon: Target
    },
    {
      stage: 'Develop & Test',
      components: ['Code development', 'Automated testing', 'Quality assurance'],
      icon: Code
    },
    {
      stage: 'Deploy & Release',
      components: ['Automated deployment', 'Environment management', 'Release control'],
      icon: Rocket
    },
    {
      stage: 'Monitor & Operate',
      components: ['Performance monitoring', 'Incident response', 'Continuous improvement'],
      icon: Activity
    }
  ];

  return (
    <>
      <SEO 
        title="Cloud DevOps - Infrastructure & Automation | Zion Tech Group"
        description="Transform your development with cloud infrastructure, DevOps automation, and continuous delivery solutions."
        keywords="cloud devops, infrastructure automation, CI/CD pipelines, container orchestration, cloud management"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-indigo-600/20"></div>
          <div className="container-responsive relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4" />
                Cloud Solutions
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Cloud DevOps
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your development with cloud infrastructure, DevOps automation, 
                and continuous delivery solutions for maximum efficiency and scalability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Infrastructure Assessment
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
                Cloud DevOps Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge cloud technology with DevOps best practices to deliver 
                comprehensive infrastructure and automation solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
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

        {/* DevOps Stages Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                End-to-End DevOps Pipeline
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive coverage across all stages of the DevOps lifecycle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {devopsStages.map((stage, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <stage.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{stage.stage}</h3>
                  <ul className="space-y-2">
                    {stage.components.map((component, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-blue-400" />
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
                Complete Cloud DevOps Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From infrastructure to deployment, our platform covers all DevOps needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                Why Choose Cloud DevOps?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the transformative power of cloud and DevOps automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
            <div className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-indigo-600/20 border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your DevOps?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading organizations who are already using our cloud platform to accelerate 
                development and achieve continuous delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Infrastructure Assessment
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                  Contact DevOps Team
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
                  Let's Discuss Your DevOps Needs
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Our cloud DevOps experts are ready to help you implement the right infrastructure 
                  and automation solutions for your organization. Get in touch to learn more.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Request DevOps Assessment</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Organization"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your DevOps challenges and requirements..."
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
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