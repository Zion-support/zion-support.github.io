import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Calendar, 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  BarChart3,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Brain,
  Zap,
  Eye,
  MousePointer,
  Hash,
  Share2,
  Video,
  Image,
  FileText,
  PieChart,
  Activity,
  Smartphone,
  Monitor,
  Kanban,
  Gantt,
  Timeline,
  Milestone,
  Task,
  FolderOpen,
  Team,
  Users2,
  Settings,
  BarChart,
  Smartphone as Mobile,
  Cloud,
  Shield,
  HardDrive
} from 'lucide-react';

export default function AIProjectManagementPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Task Prioritization",
      description: "Intelligent task ranking based on deadlines, dependencies, and team capacity"
    },
    {
      icon: Users,
      title: "Smart Team Allocation",
      description: "AI-driven resource assignment considering skills, availability, and workload"
    },
    {
      icon: BarChart3,
      title: "Predictive Project Analytics",
      description: "Forecast project completion dates and identify potential bottlenecks"
    },
    {
      icon: Settings,
      title: "Automated Workflow Management",
      description: "Streamline processes with intelligent automation and rule-based triggers"
    },
    {
      icon: BarChart3,
      title: "Real-time Performance Insights",
      description: "Monitor team productivity and project health with live dashboards"
    },
    {
      icon: Zap,
      title: "Seamless Integrations",
      description: "Connect with your favorite tools and platforms for unified workflow"
    }
  ];

  const benefits = [
    "40% faster project completion",
    "30% improvement in team productivity",
    "Real-time project visibility",
    "Automated risk detection",
    "Optimized resource allocation",
    "Enhanced collaboration"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 10 team members",
        "AI Task Prioritization",
        "Basic Project Templates",
        "Kanban & Gantt Views",
        "Mobile App Access",
        "Email Support",
        "5GB Storage",
        "Basic Integrations"
      ]
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50 team members",
        "Advanced AI Analytics",
        "Custom Workflows",
        "Advanced Reporting",
        "Time Tracking",
        "Priority Support",
        "25GB Storage",
        "Advanced Integrations",
        "API Access",
        "Custom Branding"
      ]
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Custom AI Models",
        "Advanced Automation",
        "Enterprise Security",
        "Custom Integrations",
        "Dedicated Support",
        "Unlimited Storage",
        "White-label Options",
        "On-premise Deployment",
        "SLA Guarantee"
      ]
    }
  ];

  const projectViews = [
    {
      name: "Kanban Board",
      description: "Visual task management with drag-and-drop functionality",
      features: ["Custom columns", "Work in progress limits", "Visual progress tracking", "Quick task creation"]
    },
    {
      name: "Gantt Chart",
      description: "Timeline view for complex project planning",
      features: ["Dependency management", "Critical path analysis", "Resource allocation", "Milestone tracking"]
    },
    {
      name: "Timeline View",
      description: "Calendar-based project scheduling and planning",
      features: ["Calendar integration", "Deadline management", "Team availability", "Conflict detection"]
    },
    {
      name: "List View",
      description: "Detailed task list with advanced filtering and sorting",
      features: ["Advanced filters", "Bulk operations", "Custom fields", "Export capabilities"]
    }
  ];

  const useCases = [
    {
      industry: "Software Development",
      description: "Agile project management with sprint planning, bug tracking, and release management",
      results: ["50% faster sprint completion", "Improved code quality", "Better team collaboration", "Reduced technical debt"]
    },
    {
      industry: "Marketing Agencies",
      description: "Campaign management, client collaboration, and creative workflow optimization",
      results: ["30% faster campaign delivery", "Improved client satisfaction", "Better resource utilization", "Enhanced creativity"]
    },
    {
      industry: "Construction",
      description: "Project planning, resource management, and timeline optimization",
      results: ["25% reduction in delays", "Better cost control", "Improved safety compliance", "Enhanced stakeholder communication"]
    },
    {
      industry: "Healthcare",
      description: "Patient care coordination, staff scheduling, and quality improvement projects",
      results: ["Improved patient outcomes", "Better staff efficiency", "Enhanced care coordination", "Reduced administrative burden"]
    }
  ];

  const integrations = [
    "Slack", "Microsoft Teams", "Zoom", "Google Workspace", "Microsoft 365",
    "GitHub", "GitLab", "Jira", "Trello", "Asana", "Monday.com",
    "Salesforce", "HubSpot", "QuickBooks", "Xero", "Stripe",
    "Zapier", "Make", "n8n", "Webhooks", "REST API"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Project Management Platform - Zion Tech Group"
        description="Revolutionize project management with AI-powered task prioritization, team allocation, and predictive analytics. Boost productivity and project success rates."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
              <Project className="w-4 h-4 mr-2" />
              Micro SaaS Solution
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Project Management Platform
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your project management with AI-powered intelligence. Automate workflows, 
              optimize team allocation, and deliver projects faster than ever before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              AI-Powered Project Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with intuitive project management tools 
              to help your team work smarter, not harder.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Views Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Multiple Project Views
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the view that works best for your team and project type.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectViews.map((view, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{view.name}</h3>
                <p className="text-gray-300 mb-4">{view.description}</p>
                <div className="space-y-2">
                  {view.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transform Your Project Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements in project delivery, team productivity, and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to meet the unique needs of various industries and project types.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms for a unified workflow experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <span className="text-gray-300 text-sm font-medium">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your team size and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.name === 'Professional' 
                    ? 'border-blue-500/50 bg-gradient-to-b from-blue-900/20 to-slate-800/50' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.name === 'Professional' && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.name === 'Professional'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'border border-slate-600 text-white hover:bg-slate-700/50'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of teams that have revolutionized their project delivery with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services-overview"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}