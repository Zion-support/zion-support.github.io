import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, DollarSign, Gauge, CheckCircle, BarChart3, ArrowRight } from 'lucide-react';

export default function CloudFinOpsOptimizer() {
  const capabilities = [
    'Multi-cloud cost visibility (AWS, Azure, GCP)',
    'Idle/underutilized resource detection and rightsizing',
    'Reserved Instances/Savings Plans recommendations',
    'Anomaly detection and budget alerts',
  ];

  const outcomes = [
    'Cut cloud spend by 15–35% in 90 days',
    'Continuous optimization via policies and guardrails',
    'Showback/chargeback for business units',
    'FinOps maturity reporting for executives',
  ];

  const references = [
    { label: 'FinOps Foundation', url: 'https://www.finops.org/' },
    { label: 'AWS Cost Explorer', url: 'https://aws.amazon.com/aws-cost-management/aws-cost-explorer/' },
    { label: 'Azure Cost Management', url: 'https://azure.microsoft.com/en-us/products/cost-management' },
    { label: 'GCP Billing', url: 'https://cloud.google.com/billing' },
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">FinOps Optimizer</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Reduce waste, forecast accurately, and align cloud spend with business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200">
              Start Optimization
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-3 border border-emerald-500 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-200">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Capabilities</h3>
            </div>
            <ul className="space-y-3">
              {capabilities.map((c) => (
                <li key={c} className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg">
                <Gauge className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Outcomes</h3>
            </div>
            <ul className="space-y-3">
              {outcomes.map((o) => (
                <li key={o} className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Pricing</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li>Essentials: From $1,200/month + 10% of verified savings</li>
              <li>Growth: From $3,500/month + 8% of verified savings</li>
              <li>Enterprise: Custom + SSO, multi-org, audit controls</li>
            </ul>
            <div className="mt-6 text-sm text-slate-400">
              See market refs: <a className="text-emerald-400 hover:underline" href="https://www.finops.org/framework/" target="_blank" rel="noreferrer">FinOps Framework</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Integrations</h3>
          <div className="flex flex-wrap gap-3 text-slate-300">
            <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-900/60 border border-slate-700/60 rounded-lg hover:text-white hover:border-emerald-500">AWS</a>
            <a href="https://azure.microsoft.com/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-900/60 border border-slate-700/60 rounded-lg hover:text-white hover:border-emerald-500">Azure</a>
            <a href="https://cloud.google.com/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-900/60 border border-slate-700/60 rounded-lg hover:text-white hover:border-emerald-500">GCP</a>
            <a href="https://www.datadoghq.com/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-900/60 border border-slate-700/60 rounded-lg hover:text-white hover:border-emerald-500">Datadog</a>
            <a href="https://www.grafana.com/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-900/60 border border-slate-700/60 rounded-lg hover:text-white hover:border-emerald-500">Grafana</a>
          </div>
        </div>
      </section>
    </div>
  );
}

