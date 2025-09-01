import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Brain, 
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
    learnMoreUrl: 'https://learn.microsoft.com/azure/machine-learning/'},
  {

    title: 'Cloud Migration & Modernization',
    description: 'Lift-and-shift, containerization, and serverless refactors with IaC.',
    priceRange: '$15,000 - $250,000',
    learnMoreUrl: 'https://aws.amazon.com/migration-hub/'},
  {

    title: 'Zero-Trust Cybersecurity',
    description: 'ZTA architecture, SOC hardening, SIEM, EDR/XDR integrations.',
    priceRange: '$5,000 - $90,000',
    learnMoreUrl: 'https://cloud.google.com/security-command-center'},
  {

    title: 'Data Engineering & Analytics',
    description: 'ELT/ETL, data lakes/warehouses, BI dashboards, KPI design.',
    priceRange: '$7,500 - $140,000',
    learnMoreUrl: 'https://cloud.google.com/bigquery/docs'},
  {

    title: 'IoT & Edge Platforms',
    description: 'Secure device onboarding, telemetry pipelines, OTA, and twin modeling.',
    priceRange: '$12,000 - $180,000',
    learnMoreUrl: 'https://learn.microsoft.com/azure/iot-hub/'},
  {

    title: 'Quantum Readiness Advisory',
    description: 'PQ crypto readiness, QC PoCs, and quantum-inspired optimizations.',
    priceRange: '$6,000 - $60,000',
    learnMoreUrl: 'https://quantum.microsoft.com/azure-quantum'},
];

const microSaaS: Service[] = [
  {

    title: 'LeadGen AI Microsite',
    description: 'SEO + AI chat, CRM integration, and analytics for B2B lead capture.',
    priceRange: '$99 - $499/mo',
    learnMoreUrl: 'https://vercel.com/ai'},
  {

    title: 'Agentic Support Bot',
    description: 'Retrieval-augmented agent with help center and Slack/Teams connectors.',
    priceRange: '$149 - $999/mo',
    learnMoreUrl: 'https://platform.openai.com/'},
  {

    title: 'Automated Reporting Studio',
    description: 'Auto-ingest spreadsheets/CSV, generate dashboards and scheduled PDFs.',
    priceRange: '$79 - $399/mo',
    learnMoreUrl: 'https://www.metabase.com/'},
  {

    title: 'Security Posture Scanner',
    description: 'Continuous cloud config checks and CIS benchmarks with alerts.',
    priceRange: '$199 - $1,499/mo',
    learnMoreUrl: 'https://www.aquasec.com/cloud-security/'},
  {

    title: 'Image/Doc OCR Pipeline',
    description: 'OCR + LLM extraction for invoices, IDs, and contracts at scale.',
    priceRange: '$0.50 - $2.00 / 1k tokens + hosting',
    learnMoreUrl: 'https://platform.openai.com/docs/guides/vision'},
  {

    title: 'Synthetic Data Generator',
    description: 'Privacy-safe tabular and text data generation to augment small datasets.',
    priceRange: '$299 - $1,999/mo',
    learnMoreUrl: 'https://huggingface.co/'},
];

const Services: React.FC = (): JSX.Element => {

  const [activeCategory, setActiveCategory] = useState('all');

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

              {/* Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-white hover:bg-slate-700/50 transition-all duration-200 flex items-center gap-2"
              >
                <FilterIcon className="w-5 h-5" />
                Filters
              </button>
            </div>
          </div>

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
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                      <span className="ml-2 text-xs bg-slate-700/50 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
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
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-slate-800/50 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-300 mb-2">No services found</h3>
              <p className="text-slate-400 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {

                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Let our team of experts help you implement cutting-edge solutions that drive innovation, 
              efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/schedule-demo"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
