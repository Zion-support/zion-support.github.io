import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Bot, 
  Globe, 
  Database, 
  Shield, 
  ExternalLink, 
  DollarSign,
  Users,
  FileSearch,
  MessageCircle,
  ShoppingCart,
  Workflow,
  Brain,
  Cpu,
  Lock,
  Camera,
  Mic,
  Palette,
  Target,
  Truck,
  CreditCard,
  FileText,
  ImageIcon,
  Video,
  LineChart,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

const MicroSaaS: React.FC = () => {
  const products = [
    {
      icon: Bot,
      title: 'AI Lead Scoring Micro‑SaaS',
      desc: 'Automated, explainable B2B lead scoring with CRM integration and model feedback loops.',
      price: '$199–$799/month',
      href: '/services/ai-lead-scoring',
      features: ['CRM Integration', 'Explainable AI', 'Feedback Loops', 'Analytics Dashboard'],
      benefits: ['25% increase in conversion', 'Automated lead qualification', 'Real-time scoring']
    },
    {
      icon: Zap,
      title: 'Website AI Chatbot',
      desc: 'RAG‑powered website assistant trained on your docs with handoff to human and analytics.',
      price: '$99–$499/month',
      href: '/services/website-ai-chatbot',
      features: ['RAG Integration', 'Human Handoff', 'Analytics', 'Multi-language'],
      benefits: ['24/7 customer support', 'Reduced support costs', 'Improved engagement']
    },
    {
      icon: Database,
      title: 'RAG Site Search',
      desc: 'Cited semantic search across your knowledge base with filters, relevancy, and dashboards.',
      price: '$149–$699/month',
      href: '/services/rag-search',
      features: ['Semantic Search', 'Citation Tracking', 'Analytics', 'Custom Filters'],
      benefits: ['Better search results', 'Reduced support tickets', 'Improved user experience']
    },
    {
      icon: BarChart3,
      title: 'E‑commerce Personalization',
      desc: 'On‑site recommendations, bundles, and pricing nudges tuned to conversion KPIs.',
      price: '$249–$1,499/month',
      href: '/services/ecommerce-personalization',
      features: ['AI Recommendations', 'Dynamic Pricing', 'A/B Testing', 'Conversion Tracking'],
      benefits: ['15% increase in AOV', 'Improved conversion rates', 'Better customer experience']
    },
    {
      icon: Globe,
      title: 'Multilingual CX Orchestrator',
      desc: '50+ languages, brand‑safe translations, and locale QA across chat, email, and voice.',
      price: '$199–$899/month',
      href: '/ai-services',
      features: ['50+ Languages', 'Brand Safety', 'Locale QA', 'Multi-channel'],
      benefits: ['Global reach', 'Consistent brand voice', 'Localized experience']
    },
    {
      icon: Shield,
      title: 'AI Governance & Observability',
      desc: 'Prompt, output, and PII policies with alerts, dashboards, and red‑teaming workflows.',
      price: '$299–$1,499/month',
      href: '/services/ai-data-governance',
      features: ['Prompt Management', 'PII Detection', 'Red-teaming', 'Compliance'],
      benefits: ['Risk mitigation', 'Compliance ready', 'Better AI safety']
    },
    // New innovative micro SaaS products
    {
      icon: FileSearch,
      title: 'AI Document Intelligence Hub',
      desc: 'Extract, classify, and analyze documents with AI-powered OCR and intelligent data extraction.',
      price: '$89/mo + $0.10/page',
      href: '/services/ai-document-intelligence',
      features: ['AI OCR', 'Data Extraction', 'Classification', 'Search & Retrieval'],
      benefits: ['80% faster processing', '99% accuracy', 'Automated workflows']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics Engine',
      desc: 'Build and deploy ML models for forecasting, anomaly detection, and business intelligence.',
      price: '$399–$1,999/month',
      href: '/services/predictive-analytics',
      features: ['ML Model Builder', 'Forecasting', 'Anomaly Detection', 'AutoML'],
      benefits: ['Data-driven decisions', 'Predictive insights', 'Automated analysis']
    },
    {
      icon: Workflow,
      title: 'Process Automation Platform',
      desc: 'No-code workflow automation with AI-powered decision making and integration.',
      price: '$179–$899/month',
      href: '/services/process-automation',
      features: ['No-code Builder', 'AI Decisions', 'Integrations', 'Analytics'],
      benefits: ['50% efficiency gain', 'Reduced manual work', 'Better accuracy']
    },
    {
      icon: Brain,
      title: 'AI Content Studio',
      desc: 'Generate, edit, and optimize content with AI while maintaining brand voice consistency.',
      price: '$129–$599/month',
      href: '/services/ai-content-studio',
      features: ['Content Generation', 'Brand Voice', 'SEO Optimization', 'Multi-language'],
      benefits: ['10x faster content', 'Consistent branding', 'SEO improvement']
    },
    {
      icon: Cpu,
      title: 'Edge Computing Orchestrator',
      desc: 'Manage distributed edge computing resources with real-time optimization and monitoring.',
      price: '$299–$1,299/month',
      href: '/services/edge-computing',
      features: ['Edge Management', 'Real-time Optimization', 'Monitoring', 'Global Distribution'],
      benefits: ['90% latency reduction', 'Global reach', 'Cost optimization']
    },
    {
      icon: Lock,
      title: 'Zero Trust Access Control',
      desc: 'Identity-based access control with continuous verification and behavioral analytics.',
      price: '$199–$799/month',
      href: '/services/zero-trust-access',
      features: ['Identity Management', 'Continuous Verification', 'Behavioral Analytics', 'Compliance'],
      benefits: ['Enhanced security', 'Compliance ready', 'Better user experience']
    },
    {
      icon: Camera,
      title: 'Computer Vision API',
      desc: 'Image and video analysis with pre-trained models for object detection and recognition.',
      price: '$0.01–$0.10 per image',
      href: '/services/computer-vision',
      features: ['Object Detection', 'Image Recognition', 'Video Analysis', 'Custom Models'],
      benefits: ['Automated analysis', 'Cost reduction', 'Scalable processing']
    },
    {
      icon: Mic,
      title: 'Speech Recognition Platform',
      desc: 'Real-time speech-to-text with speaker identification and sentiment analysis.',
      price: '$0.005–$0.02 per minute',
      href: '/services/speech-recognition',
      features: ['Real-time STT', 'Speaker ID', 'Sentiment Analysis', 'Multi-language'],
      benefits: ['Accessibility', 'Automated transcription', 'Better insights']
    },
    {
      icon: Palette,
      title: 'AI Design Assistant',
      desc: 'Generate and optimize visual designs with AI-powered creativity tools.',
      price: '$149–$699/month',
      href: '/services/ai-design-assistant',
      features: ['Design Generation', 'Style Transfer', 'Optimization', 'Brand Consistency'],
      benefits: ['Faster design', 'Cost reduction', 'Consistent branding']
    },
    {
      icon: Target,
      title: 'Customer Segmentation Engine',
      desc: 'AI-powered customer segmentation with behavioral analysis and predictive modeling.',
      price: '$199–$899/month',
      href: '/services/customer-segmentation',
      features: ['Behavioral Analysis', 'Predictive Modeling', 'Dynamic Segments', 'Integration'],
      benefits: ['Better targeting', 'Improved conversion', 'Personalized experience']
    },
    {
      icon: Truck,
      title: 'Supply Chain Optimization',
      desc: 'AI-powered supply chain management with demand forecasting and route optimization.',
      price: '$399–$1,999/month',
      href: '/services/supply-chain-optimization',
      features: ['Demand Forecasting', 'Route Optimization', 'Inventory Management', 'Analytics'],
      benefits: ['Cost reduction', 'Better efficiency', 'Improved delivery']
    },
    {
      icon: CreditCard,
      title: 'Fraud Detection System',
      desc: 'Real-time fraud detection using machine learning and behavioral analysis.',
      price: '$0.01–$0.05 per transaction',
      href: '/services/fraud-detection',
      features: ['Real-time Detection', 'ML Models', 'Behavioral Analysis', 'False Positive Reduction'],
      benefits: ['Fraud prevention', 'Cost savings', 'Better security']
    },
    {
      icon: FileText,
      title: 'Contract Analysis Platform',
      desc: 'AI-powered contract review with risk assessment and compliance checking.',
      price: '$5–$25 per contract',
      href: '/services/contract-analysis',
      features: ['Risk Assessment', 'Compliance Checking', 'Clause Extraction', 'Analytics'],
      benefits: ['Faster review', 'Risk reduction', 'Compliance assurance']
    },
    {
      icon: ImageIcon,
      title: 'Visual Search Engine',
      desc: 'Find similar images and products using AI-powered visual search technology.',
      price: '$0.02–$0.10 per search',
      href: '/services/visual-search',
      features: ['Similarity Search', 'Product Matching', 'Image Recognition', 'API Access'],
      benefits: ['Better discovery', 'Improved UX', 'Increased sales']
    },
    {
      icon: Video,
      title: 'Video Analytics Platform',
      desc: 'Extract insights from video content with AI-powered analysis and automation.',
      price: '$0.10–$0.50 per minute',
      href: '/services/video-analytics',
      features: ['Content Analysis', 'Object Tracking', 'Automation', 'Insights'],
      benefits: ['Content optimization', 'Automated processing', 'Better engagement']
    },
    {
      icon: LineChart,
      title: 'Financial Analytics Suite',
      desc: 'AI-powered financial analysis with forecasting, risk assessment, and portfolio optimization.',
      price: '$299–$1,499/month',
      href: '/services/financial-analytics',
      features: ['Financial Forecasting', 'Risk Assessment', 'Portfolio Optimization', 'Compliance'],
      benefits: ['Better decisions', 'Risk management', 'Compliance ready']
    }
  ];

  const ctas = [
    { label: 'View Live Site', href: 'https://ziontechgroup.com', external: true },
    { label: 'Request a Quote', href: '/request-quote' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO title="Micro SaaS Solutions - Zion Tech Group" description="Innovative micro SaaS products designed for rapid deployment and measurable ROI. From AI-powered tools to business automation solutions." />
      
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-purple-600/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/50 px-4 py-1 text-cyan-300 mb-4">
            <Zap className="h-4 w-4" />
            <span className="text-xs font-semibold tracking-wider">MICRO SAAS</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Small products, <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">outsized impact</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300">
            Launch quickly, scale predictably, and pay only for what you need. Enterprise‑grade micro SaaS services with transparent pricing and proven ROI.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {ctas.map((c) => (
              c.external ? (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 inline-flex items-center">
                  {c.label}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <Link key={c.label} to={c.href} className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105">
                  {c.label}
                </Link>
              )
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Free consultation & assessment
            </span>
            <span className="mx-3">•</span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Rapid deployment (2-8 weeks)
            </span>
            <span className="mx-3">•</span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              ROI guarantee
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p, index) => (
            <Link key={p.title} to={p.href} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-200 hover:translate-y-[-2px] hover:border-cyan-400/30 hover:bg-white/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300 group-hover:bg-cyan-500/25 transition-colors">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-300 transition-colors">{p.title}</h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">{p.desc}</p>
              
              {p.features && (
                <div className="mb-4">
                  <h5 className="text-xs font-semibold text-cyan-300 mb-2">Key Features:</h5>
                  <ul className="space-y-1">
                    {p.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {p.benefits && (
                <div className="mb-4">
                  <h5 className="text-xs font-semibold text-green-300 mb-2">Benefits:</h5>
                  <ul className="space-y-1">
                    {p.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                        <TrendingUp className="h-3 w-3 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-cyan-300">{p.price}</div>
                <div className="inline-flex items-center gap-2 text-sm text-cyan-300 group-hover:text-cyan-200 transition-colors">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-white/10 bg-white/5 p-8 text-sm text-slate-300">
          <div className="mb-4 font-semibold text-white text-lg">What's included with every micro SaaS solution</div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h6 className="font-semibold text-cyan-300 mb-2">Deployment</h6>
              <ul className="space-y-1 text-xs">
                <li>Provisioning in 24–72 hours</li>
                <li>Automated setup & configuration</li>
                <li>Integration assistance</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-cyan-300 mb-2">Security & Access</h6>
              <ul className="space-y-1 text-xs">
                <li>SSO, roles, and audit logs</li>
                <li>SOC 2 compliance ready</li>
                <li>Data encryption at rest & transit</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-cyan-300 mb-2">Performance</h6>
              <ul className="space-y-1 text-xs">
                <li>SLA options: 99.5% / 99.9%</li>
                <li>Auto-scaling infrastructure</li>
                <li>Real-time monitoring</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-cyan-300 mb-2">Support</h6>
              <ul className="space-y-1 text-xs">
                <li>Email, Slack, or On‑call</li>
                <li>Documentation & training</li>
                <li>Dedicated success manager</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 flex items-center gap-2 text-xs">
            <DollarSign className="h-4 w-4" />
            Market pricing aligns with SMB to mid‑market budgets. Custom enterprise plans available.
          </div>
          
          <div className="mt-6 flex items-center gap-4">
            <a className="inline-flex items-center text-cyan-300 hover:text-cyan-200 transition-colors" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">
              Visit ziontechgroup.com <ExternalLink className="ml-1 h-3 w-3" />
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">
              Contact: +1 302 464 0950 · kleber@ziontechgroup.com
            </span>
          </div>
          
          <div className="mt-4 text-xs text-slate-400">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </div>
        </div>
      </section>
    </div>
  );
}

export default MicroSaaS;
