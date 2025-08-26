import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Shield, Zap, Database, Server, Lock, BarChart3, Users, Globe, Code } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// Sample data for services
const microSaaS = [
  {
    id: 'ai-workflow-automation',
    icon: '🤖',
    name: 'AI Workflow Automation',
    tagline: 'Automate complex business processes with AI',
    price: '$299',
    period: '/month',
    features: ['Process mapping', 'AI decision trees', 'Integration APIs', 'Analytics dashboard']
  },
  {
    id: 'blockchain-enterprise',
    icon: '⛓️',
    name: 'Blockchain Enterprise Solutions',
    tagline: 'Secure, transparent business operations',
    price: '$499',
    period: '/month',
    features: ['Smart contracts', 'Supply chain tracking', 'Identity management', 'Compliance tools']
  },
  {
    id: 'iot-data-analytics',
    icon: '📊',
    name: 'IoT Data Analytics Platform',
    tagline: 'Real-time insights from connected devices',
    price: '$199',
    period: '/month',
    features: ['Device management', 'Data visualization', 'Alert system', 'Predictive analytics']
  }
];

const itServices = [
  {
    id: 'cloud-devops',
    icon: '☁️',
    name: 'Cloud & DevOps',
    tagline: 'Scalable infrastructure and automation',
    price: '$2,500',
    period: '/month',
    features: ['Kubernetes management', 'CI/CD pipelines', 'Monitoring & alerting', 'Cost optimization']
  },
  {
    id: 'cybersecurity',
    icon: '🛡️',
    name: 'Cybersecurity Services',
    tagline: 'Comprehensive security solutions',
    price: '$3,500',
    period: '/month',
    features: ['Threat detection', 'Vulnerability assessment', 'Compliance management', 'Incident response']
  },
  {
    id: 'enterprise-it',
    icon: '🏢',
    name: 'Enterprise IT Solutions',
    tagline: 'Large-scale IT transformation',
    price: '$8,000',
    period: '/month',
    features: ['Digital transformation', 'Legacy modernization', 'Change management', 'ROI tracking']
  }
];

const aiServices = [
  {
    id: 'ai-autonomous-systems',
    icon: '🧠',
    name: 'AI Autonomous Systems',
    tagline: 'Self-managing business operations',
    price: '$4,500',
    period: '/month',
    features: ['Multi-agent systems', 'Decision automation', 'Learning algorithms', 'Performance monitoring']
  },
  {
    id: 'ai-business-intelligence',
    icon: '📈',
    name: 'AI Business Intelligence',
    tagline: 'Data-driven insights and predictions',
    price: '$3,200',
    period: '/month',
    features: ['Predictive analytics', 'Natural language queries', 'Custom dashboards', 'Automated reporting']
  },
  {
    id: 'ai-marketing-automation',
    icon: '🎯',
    name: 'AI Marketing Automation',
    tagline: 'Intelligent customer engagement',
    price: '$2,800',
    period: '/month',
    features: ['Customer segmentation', 'Personalized content', 'Campaign optimization', 'ROI tracking']
  }
];

export default function ServicesPage() {
  const title = 'Services — Zion Tech Group';
  const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.';

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From strategy to production, we deliver outcomes fast. Our comprehensive suite of services covers everything you need to transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* AI Autonomous Systems */}
            <div id="ai" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-x-3">
                <div className="h-10 w-10 items-center justify-center rounded-lg bg-blue-600 flex">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">AI Autonomous Systems</h2>
              </div>
              <p className="mt-4 text-gray-600">
                Transform your operations with intelligent automation and AI-powered decision making.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-x-3">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Sales/CS multi-agent copilots</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <Database className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">RAG and workflow orchestration</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Observability and guardrails</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Intelligent process automation</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Get started with AI
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Cloud Platforms */}
            <div id="cloud" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-x-3">
                <div className="h-10 w-10 items-center justify-center rounded-lg bg-green-600 flex">
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Cloud Platforms</h2>
              </div>
              <p className="mt-4 text-gray-600">
                Build scalable, resilient cloud infrastructure that grows with your business.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-x-3">
                  <Server className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Serverless and Kubernetes</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <Database className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Data pipelines and ML ops</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <BarChart3 className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">FinOps and SRE practices</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <Globe className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Multi-cloud architecture</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors"
                >
                  Explore cloud solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Work
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our proven process ensures successful delivery of your technology solutions.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <Code className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Strategy & Planning
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">We analyze your requirements and design a comprehensive solution strategy.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Development & Testing
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Agile development with continuous testing and quality assurance.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <Shield className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Deployment & Support
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Smooth deployment followed by ongoing support and maintenance.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let's discuss how our services can transform your business and drive growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get started
              </Link>
              <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
