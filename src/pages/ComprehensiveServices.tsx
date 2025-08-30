import React from 'react.ts';
import { SEO  } from '@/components/SEO';
import { Link  } from 'react-router-dom.ts';
import { ArrowRight, CheckCircle2, Globe, Sparkles, Shield, Cpu, Cloud, Database, Workflow, Rocket, DollarSign, Phone, Mail, MapPin, ExternalLink  } from 'lucide-react';

const ComprehensiveServices: React.FC = (): JSX.Element => {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const microSaaS = [
    {
      title: 'SOC 2 Evidence Collector',
      desc: 'Automate evidence collection across AWS, GCP, Azure, Okta, and SaaS tools with time-stamped control mappings.',
      price: '$499–$1,499/mo',
      cta: 'https://ziontechgroup.com/services/soc2-compliance-automation',
      features['Prebuilt integrations (AWS, GCP, Azure, Okta, GitHub)', 'Automated screenshots and policy snapshots', 'Continuous control monitoring', 'Auditor export packages']
    },
    {
      title: 'Contract Risk Analyzer',
      desc: 'AI parses vendor/customer contracts, flags risky clauses, and suggests redlines aligned to your playbook.',
      price: '$299–$999/mo',
      cta: 'https://ziontechgroup.com',
      features['LLM clause classification', 'Deviation scoring vs. standards', 'One-click redline suggestions', 'Secure data handling']
    },
    {
      title: 'Churn Predictor for SaaS',
      desc: 'Connect Stripe, Mixpanel, and Intercom to predict churn and trigger save plays automatically.',
      price: '$199–$799/mo',
      cta: 'https://ziontechgroup.com',
      features['Cohort churn models', 'Alerts to Slack/Email', 'Playbooks and A/B experiments', 'No-code connectors']
    },
    {
      title: 'AI RFP Copilot',
      desc: 'Auto-assemble tailored RFP responses from your knowledge base with confidence citations.',
      price: '$249–$1,249/mo',
      cta: 'https://ziontechgroup.com',
      features['Semantic retrieval over KB', 'Tone/style controls', 'Compliance guardrails', 'Export to Word/PDF']
    },
    {
      title: 'FinOps Cost Anomaly Detector',
      desc: 'Continuously scans AWS, Azure, and GCP for cost spikes, identifies root causes, and opens auto-remediation tickets.',
      price: '$299–$1,299/mo',
      cta: 'https://ziontechgroup.com/comprehensive-pricing',
      features['Real-time anomaly alerts', 'Service- and tag-level drilldowns', 'Forecast vs. actuals variance', 'Slack/Jira integrations']
    },
    {
      title: 'Vendor Security Monitoring',
      desc: 'Continuously monitors vendor attack surface, breach news, and policy compliance for third-party risk management.',
      price: '$249–$999/mo',
      cta: 'https://ziontechgroup.com/comprehensive-services',
      features['Dark web/domain monitoring', 'Security questionnaire scoring', 'Policy mapping to SOC 2/ISO 27001', 'Executive risk reports']
    },
    {
      title: 'Data Quality & Lineage Monitor',
      desc: 'Automated data tests, schema drift detection, and lineage maps across Snowflake, BigQuery, and Redshift.',
      price: '$399–$1,499/mo',
      cta: 'https://ziontechgroup.com/comprehensive-pricing',
      features['Column-level lineage', 'Freshness and completeness SLIs', 'dbt integration', 'Incident paging with ownership']
    },
    {
      title: 'API Monetization Hub',
      desc: 'Usage metering, subscription plans, rate limiting, and Stripe billing for your public/private APIs.',
      price: '$199–$899/mo + 1% usage',
      cta: 'https://ziontechgroup.com/comprehensive-services',
      features['Per-endpoint metering', 'Self-serve developer portal', 'JWT/OAuth2 auth', 'Stripe/Chargebee integrations']
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration Factory',
      desc: 'Blueprint, migrate, and optimize workloads to AWS/Azure/GCP with cost governance.',
      price: 'Projects from $15,000',
      cta: 'https://ziontechgroup.com',
      features['Landing zone setup', 'App discovery and TCO', 'Infra-as-Code (Terraform)', 'FinOps and tagging policies']
    },
    {
      title: 'Managed Kubernetes (EKS/AKS/GKE)',
      desc: 'Secure, observable clusters with GitOps, autoscaling, and SLO dashboards.',
      price: '$3,500–$12,000/mo',
      cta: 'https://ziontechgroup.com',
      features['GitOps with ArgoCD', 'Service mesh (Istio/Linkerd)', 'Zero-trust policies', 'Golden paths for services']
    },
    {
      title: 'Zero Trust & IAM Hardening',
      desc: 'Design and implement zero trust network access and identity least-privilege.',
      price: 'Engagements from $12,000',
      cta: 'https://ziontechgroup.com/services/zero-trust-network-architecture',
      features['Okta/Azure AD architecture', 'Device posture and SSO', 'Policy-as-Code (OPA)', 'Continuous verification']
    },
    {
      title: 'Observability & Resilience',
      desc: 'Unified logs, metrics, traces with SLOs and chaos engineering runs.',
      price: 'Projects from $9,000',
      cta: 'https://ziontechgroup.com',
      features['OpenTelemetry pipelines', 'SLO error budgets', 'Synthetic tests', 'Chaos experiments']
    },
    {
      title: 'Microsoft 365 Security Hardening',
      desc: 'Secure Microsoft 365 with baseline policies, Conditional Access, DLP, and identity governance.',
      price: 'Packages from $7,500',
      cta: 'https://ziontechgroup.com/contact',
      features['Defender baseline policies', 'Conditional Access hardening', 'DLP and sensitivity labels', 'Admin RBAC and audit']
    },
    {
      title: 'Modern Data Platform (Lakehouse)',
      desc: 'Design and implement a scalable lakehouse on Databricks or Snowflake with medallion architecture.',
      price: 'Projects from $25,000',
      cta: 'https://ziontechgroup.com/comprehensive-services',
      features['Ingestion with CDC', 'Bronze/Silver/Gold layers', 'Quality tests and lineage', 'Cost governance and caching']
    },
    {
      title: 'SRE as a Service',
      desc: 'Reliability engineering, SLOs, error budgets, incident response, and chaos drills for critical systems.',
      price: '$6,000–$20,000/mo',
      cta: 'https://ziontechgroup.com/comprehensive-pricing',
      features['SLO design and dashboards', 'On-call runbooks', 'Game days and chaos testing', 'Postmortem program']
    },
    {
      title: 'Network Observability & Zero Trust',
      desc: 'eBPF-powered observability, microsegmentation, and ZTNA rollout across hybrid networks.',
      price: 'Engagements from $18,000',
      cta: 'https://ziontechgroup.com/services/zero-trust-network-architecture',
      features['eBPF flow visibility', 'Microsegmentation policy design', 'ZTNA rollout', 'Continuous verification']
    }
  ];

  const aiSolutions = [
    {
      title: 'Private RAG Platform',
      desc: 'Deploy secure Retrieval Augmented Generation with vector DBs and governance.',
      price: '$1,999–$7,999/mo',
      cta: 'https://ziontechgroup.com',
      features['Multi-tenant isolation', 'PII redaction and masking', 'Eval harness and guardrails', 'Vendor-agnostic LLMs']
    },
    {
      title: 'Vision AI Defect Detection',
      desc: 'Edge and cloud pipelines to detect manufacturing defects and reduce scrap.',
      price: 'POC from $8,000',
      cta: 'https://ziontechgroup.com',
      features['Edge inferencing', 'Active learning loops', 'MLOps with CI/CD', 'Audit trails and labeling']
    },
    {
      title: 'AI Sales Copilot',
      desc: 'Automate research, first-touch emails, call notes, and CRM hygiene with approvals.',
      price: '$149–$699/user/mo',
      cta: 'https://ziontechgroup.com',
      features['Account research digests', 'Sequencing with human-in-the-loop', 'Meeting summaries to CRM', 'Compliance logging']
    },
    {
      title: 'GenAI App Accelerator',
      desc: 'From ideation to production with secure foundations, evals, and cost controls.',
      price: 'Engagements from $20,000',
      cta: 'https://ziontechgroup.com',
      features['Prompt and function design', 'Eval suites and canaries', 'Safety filters and monitoring', 'Cost + latency SLO design']
    },
    {
      title: 'Contact Center QA & Insights',
      desc: 'Multilingual LLM scoring of calls/chats with auto-coaching, compliance checks, and CSAT prediction.',
      price: '$1,499–$4,999/mo',
      cta: 'https://ziontechgroup.com/comprehensive-pricing',
      features['Auto QA rubrics', 'Redaction and PII controls', 'Supervisor dashboards', 'CRM sync (Salesforce/HubSpot)']
    },
    {
      title: 'Intelligent Document Processing',
      desc: 'High-accuracy extraction and validation for invoices, claims, KYC, and logistics documents.',
      price: '$0.02–$0.08/page + platform fee',
      cta: 'https://ziontechgroup.com/comprehensive-services',
      features['Few-shot templates', 'Human-in-the-loop validation', 'Field-level confidence', 'Export to ERP/DB']
    },
    {
      title: 'AI Code & Security Reviewer',
      desc: 'Static + LLM hybrid reviews for security, performance, and style with auto-fix suggestions.',
      price: '$299–$999/repo/mo',
      cta: 'https://ziontechgroup.com/comprehensive-pricing',
      features['OWASP/CWE checks', 'Performance anti-patterns', 'Org-wide policy gates', 'PR comments and autofix']
    },
    {
      title: 'Managed MLOps Platform',
      desc: 'End-to-end ML lifecycle with experiment tracking, model registry, deployment, and evaluations.',
      price: '$2,499–$9,999/mo',
      cta: 'https://ziontechgroup.com/comprehensive-services',
      features['Feature store and lineage', 'Canary and shadow deploys', 'Live evals and guardrails', 'Cost and latency SLOs']
    }
  ];

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Technology Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              From artificial intelligence to quantum computing, discover our complete portfolio 
              of innovative solutions designed to transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

  const Section: React.FC<{ icon: React.ReactNode; title: string; description: string; items: { title: string; desc: string; price: string; cta: string; features: string[]}[]; gradient: string}>
    = ({ icon, title, description, items, gradient }) => (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`rounded-2xl p-8 border border-white/10 bg-gradient-to-br ${gradient} text-white`}> 
          <div className="flex items-center mb-6">
            <div className="mr-3">{icon}</div>
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          </div>
          <p className="text-white/80 mb-6">{description}</p>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((svc)  => (
              <div key={svc.title} className="bg-black/30 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
                <p className="text-white/80 mb-4">{svc.desc}</p>
                <div className="text-zion-cyan font-semibold mb-4 flex items-center"><DollarSign className="h-4 w-4 mr-1" />{svc.price}</div>
                <ul className="space-y-2 mb-4">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start"><CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 mt-1" /><span className="text-white/90">{f}</span></li>
                  ))}
                </ul>
                {linkItem(svc.cta)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Service Categories</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet 
              every aspect of your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 ${
                  category.featured ? 'border-cyan-400/30 bg-gradient-to-br from-cyan-400/5 to-blue-500/5' : 'border-slate-700/50'
                }`}
              >
                {category.featured && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 text-sm font-semibold">Featured Category</span>
                  </div>
                )}
                
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-slate-300 mb-6">{category.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link
                        to={service.path}
                        className="flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={`/services#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  View All {category.title}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )};

export default ComprehensiveServices;