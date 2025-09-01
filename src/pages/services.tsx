import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Brain, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  Clock
             } from 'lucide-react.ts';

type Service = {
  title: string;
  description: string;
  priceRange: string;
  learnMoreUrl?: string;
  ctaUrl?: string;
};

const featuredServices: Service[] = [
  {
    title: 'AI Development & MLOps',
    description: 'Custom LLMs, RAG, fine-tuning, and MLOps pipelines on AWS/Azure/GCP.',
    priceRange: '$8,000 - $120,000',
    learnMoreUrl: 'https://learn.microsoft.com/azure/machine-learning/',
  },
  {
    title: 'Cloud Migration & Modernization',
    description: 'Lift-and-shift, containerization, and serverless refactors with IaC.',
    priceRange: '$15,000 - $250,000',
    learnMoreUrl: 'https://aws.amazon.com/migration-hub/',
  },
  {
    title: 'Zero-Trust Cybersecurity',
    description: 'ZTA architecture, SOC hardening, SIEM, EDR/XDR integrations.',
    priceRange: '$5,000 - $90,000',
    learnMoreUrl: 'https://cloud.google.com/security-command-center',
  },
  {
    title: 'Data Engineering & Analytics',
    description: 'ELT/ETL, data lakes/warehouses, BI dashboards, KPI design.',
    priceRange: '$7,500 - $140,000',
    learnMoreUrl: 'https://cloud.google.com/bigquery/docs',
  },
  {
    title: 'IoT & Edge Platforms',
    description: 'Secure device onboarding, telemetry pipelines, OTA, and twin modeling.',
    priceRange: '$12,000 - $180,000',
    learnMoreUrl: 'https://learn.microsoft.com/azure/iot-hub/',
  },
  {
    title: 'Quantum Readiness Advisory',
    description: 'PQ crypto readiness, QC PoCs, and quantum-inspired optimizations.',
    priceRange: '$6,000 - $60,000',
    learnMoreUrl: 'https://quantum.microsoft.com/azure-quantum',
  },
];

const microSaaS: Service[] = [
  {
    title: 'LeadGen AI Microsite',
    description: 'SEO + AI chat, CRM integration, and analytics for B2B lead capture.',
    priceRange: '$99 - $499/mo',
    learnMoreUrl: 'https://vercel.com/ai',
  },
  {
    title: 'Agentic Support Bot',
    description: 'Retrieval-augmented agent with help center and Slack/Teams connectors.',
    priceRange: '$149 - $999/mo',
    learnMoreUrl: 'https://platform.openai.com/',
  },
  {
    title: 'Automated Reporting Studio',
    description: 'Auto-ingest spreadsheets/CSV, generate dashboards and scheduled PDFs.',
    priceRange: '$79 - $399/mo',
    learnMoreUrl: 'https://www.metabase.com/',
  },
  {
    title: 'Security Posture Scanner',
    description: 'Continuous cloud config checks and CIS benchmarks with alerts.',
    priceRange: '$199 - $1,499/mo',
    learnMoreUrl: 'https://www.aquasec.com/cloud-security/',
  },
  {
    title: 'Image/Doc OCR Pipeline',
    description: 'OCR + LLM extraction for invoices, IDs, and contracts at scale.',
    priceRange: '$0.50 - $2.00 / 1k tokens + hosting',
    learnMoreUrl: 'https://platform.openai.com/docs/guides/vision',
  },
  {
    title: 'Synthetic Data Generator',
    description: 'Privacy-safe tabular and text data generation to augment small datasets.',
    priceRange: '$299 - $1,999/mo',
    learnMoreUrl: 'https://huggingface.co/',
  },
];

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
const Services: React.FC = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState('all');

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Sales Copilot',
          description: 'Intelligent sales automation and lead management',
          href: '/services/ai-sales-copilot',
          features: ['Lead scoring', 'Automated follow-ups', 'Sales analytics']
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Automated compliance monitoring and reporting',
          href: '/services/ai-compliance-assistant',
          features: ['Regulatory tracking', 'Automated audits', 'Risk assessment']
        },
        {
          name: 'LLM Content Studio',
          description: 'AI-powered content creation and management',
          href: '/services/llm-content-studio',
          features: ['Content generation', 'Brand consistency', 'SEO optimization']
        },
        {
          name: 'Interview Assessment AI',
          description: 'Intelligent candidate evaluation and scoring',
          href: '/services/interview-assessment',
          features: ['Structured interviews', 'Bias detection', 'Performance metrics']
        }
      ]
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'End-to-end cloud infrastructure and automation',
          href: '/services/cloud-devops',
          features: ['Infrastructure as Code', 'CI/CD pipelines', 'Monitoring & alerting']
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization and financial management',
          href: '/services/cloud-finops-optimizer',
          features: ['Cost tracking', 'Resource optimization', 'Budget management']
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise-grade IT infrastructure solutions',
          href: '/services/it-infrastructure',
          features: ['Network design', 'Security implementation', 'Performance optimization']
        }
      ]
    },
    {
      title: 'Business Automation',
      description: 'Streamline operations with intelligent automation tools',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      services: [
        {
          name: 'AI Auto Email Responder',
          description: 'Intelligent email automation and response management',
          href: '/services/ai-auto-email-responder',
          features: ['Smart responses', 'CRM integration', 'Sentiment analysis']
        },
        {
          name: 'Email Sequencer',
          description: 'Automated email marketing and follow-up sequences',
          href: '/services/email-sequencer',
          features: ['Sequence automation', 'A/B testing', 'Performance tracking']
        },
        {
          name: 'Micro CRM',
          description: 'Lightweight CRM solution for small businesses',
          href: '/services/micro-crm',
          features: ['Contact management', 'Sales tracking', 'Task automation']
        }
      ]
    },
    {
      title: 'Data & Analytics',
      description: 'Transform data into actionable business insights',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Website Analytics',
          description: 'Privacy-first website analytics and insights',
          href: '/services/website-analytics',
          features: ['Visitor tracking', 'Conversion analysis', 'Privacy compliance']
        },
        {
          name: 'Customer Feedback Surveys',
          description: 'AI-powered survey and feedback collection',
          href: '/services/mobile-feedback-surveys',
          features: ['Survey automation', 'Sentiment analysis', 'Actionable insights']
        },
        {
          name: 'Affiliate Tracking',
          description: 'Comprehensive affiliate marketing platform',
          href: '/services/affiliate-tracking',
          features: ['Commission tracking', 'Performance analytics', 'Payout management']
        }
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and regulatory compliance solutions',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      services: [
        {
          name: 'AI Compliance Copilot',
          description: 'Automated compliance management and reporting',
          href: '/services/ai-compliance-copilot',
          features: ['SOC2 automation', 'ISO compliance', 'Evidence collection']
        },
        {
          name: 'Security Headers & CSP',
          description: 'Advanced web security and content security policies',
          href: '/services/security-headers-csp',
          features: ['HSTS implementation', 'CSP configuration', 'Security monitoring']
        },
        {
          name: 'DSR Privacy Portal',
          description: 'GDPR and CCPA data subject rights management',
          href: '/services/dsr-portal',
          features: ['Data requests', 'Automated workflows', 'Compliance reporting']
        }
      ]
    },
    {
      title: 'Specialized Solutions',
      description: 'Industry-specific and specialized technology solutions',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      services: [
        {
          name: 'Podcast Transcription',
          description: 'AI-powered audio transcription and show notes',
          href: '/services/podcast-transcription',
          features: ['Accurate transcription', 'Show notes generation', 'Multi-language support']
        },
        {
          name: 'Returns Management',
          description: 'E-commerce returns and RMA automation',
          href: '/services/returns-management',
          features: ['Automated processing', 'Customer self-service', 'Analytics dashboard']
        },
        {
          name: 'IT Helpdesk',
          description: 'Comprehensive IT support and ticket management',
          href: '/services/it-helpdesk',
          features: ['Ticket tracking', 'SLA management', 'Knowledge base']
        }
      ]
    }
  ];
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline operations'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security and compliance features'
    },
    {
      icon: Users,
      title: 'Better User Experience',
      description: 'Intuitive interfaces and seamless integrations'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: 'Track record of successful implementations'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? coreServices: anyanyanyanyanyanyanyanyanyanyanyanyanycoreServices.filter(service              => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-20 text-white">
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Services & Micro SaaS
          </h1>
          <p className="text-base md:text-xl text-slate-300">
            Practical, production-grade solutions with transparent pricing and modern stacks.
          </p>
        </header>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">Enterprise Services</h2>
          <div className="grid sm: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((s)              => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-colors">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-slate-300 mb-4">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300 font-semibold">{s.priceRange}</span>
                  {s.learnMoreUrl && (
                    <a className="text-sm text-cyan-400 hover:text-cyan-300 underline" href={s.learnMoreUrl} target="_blank" rel="noreferrer">
                      Reference
                    </a>
                  )}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (serviceIndex * 0.1) }}
                      className="group"
                    >
                      <Link to={service.href}>
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 h-full">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                            <span className="text-sm font-medium">Learn More</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        </div>
                        <Link 
                          to={service.href}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:scale-105 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">Micro SaaS Products</h2>
          <div className="grid sm: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
            {microSaaS.map((s)              => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-400/40 transition-colors">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-slate-300 mb-4">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 font-semibold">{s.priceRange}</span>
                  {s.learnMoreUrl && (
                    <a className="text-sm text-purple-300 hover:text-purple-200 underline" href={s.learnMoreUrl} target="_blank" rel="noreferrer">
                      Learn more
                    </a>
                  )}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Emerging Technologies
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative services can help you achieve your goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver exceptional value through innovation, expertise, and unwavering commitment to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Innovation First',
                description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Our specialists bring years of experience and deep technical knowledge.'
              },
              {
                icon: Target,
                title: 'Results-Driven',
                description: 'We focus on delivering measurable business value and ROI for our clients.'
              },
              {
                icon: Shield,
                title: 'Quality Assured',
                description: 'Rigorous testing and quality assurance processes ensure reliable solutions.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help transform your business and drive innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
            >
              Contact Us
            </Link>
            <Link
              to="/request-quote"
              className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
