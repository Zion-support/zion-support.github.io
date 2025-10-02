import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Users } from 'lucide-react';

interface ServicesPageProps {
  service?: string;
  category?: string;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ service, category }) => {
  const { service: urlService } = useParams();
  const activeService = service || urlService || category || 'overview';

  const services = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Revolutionary AI-powered content generation for marketing, documentation, and creative writing',
      icon: Brain,
      features: [
        'Multi-format content generation',
        'Brand voice consistency',
        'SEO optimization',
        'Multi-language support',
        'Real-time collaboration'
      ],
      stats: { value: '85%', label: 'Faster Content Creation' },
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'smart-appointment-scheduler',
      title: 'Smart Appointment Scheduler',
      description: 'Intelligent scheduling system with AI-powered optimization and conflict resolution',
      icon: Zap,
      features: [
        'AI-powered scheduling optimization',
        'Automatic conflict resolution',
        'Multi-timezone support',
        'Integration with calendar systems',
        'Smart reminder system'
      ],
      stats: { value: '73%', label: 'Scheduling Efficiency' },
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Comprehensive workflow automation with intelligent decision-making capabilities',
      icon: Brain,
      features: [
        'Intelligent process automation',
        'Dynamic workflow adaptation',
        'Exception handling',
        'Performance monitoring',
        'Scalable architecture'
      ],
      stats: { value: '520%', label: 'Productivity Increase' },
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'ai-virtual-assistant',
      title: 'AI Virtual Assistant',
      description: 'Advanced virtual assistant with natural language processing and contextual understanding',
      icon: Users,
      features: [
        'Natural language processing',
        'Contextual understanding',
        'Multi-channel support',
        'Learning capabilities',
        'Integration with business systems'
      ],
      stats: { value: '99.7%', label: 'Accuracy Rate' },
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics',
      description: 'Advanced analytics platform with AI-powered insights and predictive modeling',
      icon: Brain,
      features: [
        'Predictive analytics',
        'Real-time data processing',
        'Automated insights generation',
        'Interactive dashboards',
        'Custom reporting'
      ],
      stats: { value: '2,400%', label: 'ROI Improvement' },
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'ai-intelligent-document-processing',
      title: 'Intelligent Document Processing',
      description: 'AI-powered document processing with OCR, classification, and data extraction',
      icon: Shield,
      features: [
        'Advanced OCR technology',
        'Document classification',
        'Data extraction automation',
        'Quality assurance',
        'Compliance monitoring'
      ],
      stats: { value: '98.9%', label: 'Processing Accuracy' },
      color: 'from-emerald-500 to-green-600'
    },
    {
      id: 'real-time-cognitive-automation',
      title: 'Real-Time Cognitive Automation',
      description: 'Real-time cognitive automation with sub-2ms latency for instant decision making',
      icon: Zap,
      features: [
        'Sub-2ms latency processing',
        'Real-time decision making',
        'Cognitive load balancing',
        'Adaptive algorithms',
        'High availability'
      ],
      stats: { value: '<2ms', label: 'Response Time' },
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'advanced-cybersecurity-ai',
      title: 'Advanced Cybersecurity AI',
      description: 'Next-generation cybersecurity with AI-powered threat detection and prevention',
      icon: Shield,
      features: [
        'AI threat detection',
        'Behavioral analysis',
        'Automated response',
        'Zero-day protection',
        'Compliance monitoring'
      ],
      stats: { value: '99.97%', label: 'Threat Prevention' },
      color: 'from-gray-500 to-slate-600'
    },
    {
      id: 'edge-ai-inference',
      title: 'Edge AI Inference Platform',
      description: 'Deploy compact, low-latency AI models to edge devices with OTA updates and observability.',
      icon: Zap,
      features: [
        'Hardware-aware model optimization',
        'Online/offline fallback and caching',
        'Shadow deployments and A/B tests',
        'Fleet telemetry and drift detection',
        'Secure OTA updates with rollback'
      ],
      stats: { value: '<10ms', label: 'On-device inference' },
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'email-deliverability-optimizer',
      title: 'Email Deliverability Optimizer',
      description: 'Boost sender reputation, warm up inboxes, and maximize inbox placement automatically.',
      icon: Brain,
      features: [
        'Reputation monitoring and alerts',
        'Automated warm-up sequences',
        'SPF/DKIM/DMARC assistant',
        'Seed list testing and analytics',
        'ESP integrations (SES, SendGrid, Mailgun)'
      ],
      stats: { value: '25-40%', label: 'Open rate lift' },
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 'sales-playbook-copilot',
      title: 'Sales Playbook Copilot',
      description: 'Adaptive AI that personalizes outreach, follow-ups, and mutual action plans by ICP.',
      icon: Users,
      features: [
        'ICP and persona modeling',
        'Sequence experimentation and guardrails',
        'Meeting summarization to CRM',
        'Deal risk signals and nudges',
        'Auto-CSAT and NPS follow-ups'
      ],
      stats: { value: '30-60%', label: 'Reply rate improvement' },
      color: 'from-fuchsia-500 to-pink-600'
    },
    {
      id: 'code-quality-gatekeeper',
      title: 'Code Quality Gatekeeper',
      description: 'Policy-as-code quality gates with AI-powered static analysis and auto-fixes in PRs.',
      icon: Shield,
      features: [
        'Repo-wide rules and waivers',
        'AI suggestions with diffs',
        'Security patterns and supply-chain checks',
        'Test coverage enforcement',
        'Language support for TS/JS, Python, Go'
      ],
      stats: { value: '70%', label: 'Defects caught pre-merge' },
      color: 'from-slate-500 to-gray-700'
    }
  ];

  const selectedService = services.find(s => s.id === activeService) || services[0];
=======
import SEO from '../components/SEO';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-3e47

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive AI services, micro SaaS solutions, and IT services. Transform your business with our cutting-edge technology solutions."
        keywords="AI services, micro SaaS, IT services, cloud migration, DevOps, cybersecurity"
      />
      
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-4xl mb-4">🧠</div>
                <h2 className="text-2xl font-bold mb-4">AI Services</h2>
                <p className="text-gray-600 mb-4">
                  Leverage artificial intelligence to automate processes, gain insights, and drive innovation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Machine Learning Solutions</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>

              {/* Micro SaaS */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-4xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold mb-4">Micro SaaS Solutions</h2>
                <p className="text-gray-600 mb-4">
                  Scalable software solutions that address specific business needs and workflows.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Custom Web Applications</li>
                  <li>• API Development</li>
                  <li>• Database Solutions</li>
                  <li>• Integration Services</li>
                </ul>
              </div>

<<<<<<< HEAD
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                {selectedService.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Pricing Tiers */}
              <div className="mt-10">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <div className="text-gray-900 font-semibold">Growth</div>
                    <div className="text-2xl font-bold text-purple-600 mt-1">$149/mo</div>
                    <div className="text-sm text-gray-500">Best for startups and SMBs</div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="text-gray-900 font-semibold">Scale</div>
                    <div className="text-2xl font-bold text-purple-600 mt-1">$499/mo</div>
                    <div className="text-sm text-gray-500">Advanced features and SLAs</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Enterprise pricing available on request.</p>
              </div>

              {/* Reference Links */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Learn more</h4>
                <ul className="list-disc list-inside text-sm text-blue-600">
                  <li>
                    <a href="https://developers.google.com/machine-learning" target="_blank" rel="noopener noreferrer">ML engineering best practices</a>
                  </li>
                  <li>
                    <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer">OWASP Top 10 (security)</a>
                  </li>
                  <li>
                    <a href="https://12factor.net/" target="_blank" rel="noopener noreferrer">12-Factor App methodology</a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Services Overview */}
      {activeService === 'overview' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                All Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI services for every business need
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="text-sm font-semibold text-purple-600 mb-4">
                    {service.stats.value} {service.stats.label}
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-purple-600 hover:text-purple-700 font-semibold flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </motion.div>
              ))}
=======
              {/* IT Services */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-4xl mb-4">💻</div>
                <h2 className="text-2xl font-bold mb-4">IT Services</h2>
                <p className="text-gray-600 mb-4">
                  Comprehensive IT solutions to modernize your infrastructure and operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cloud Migration</li>
                  <li>• DevOps & SRE</li>
                  <li>• Cybersecurity</li>
                  <li>• System Administration</li>
                </ul>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-3e47
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServicesPage;