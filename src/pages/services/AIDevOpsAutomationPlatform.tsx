import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, GitBranch, Cloud, Shield, CheckCircle, BarChart3, Sparkles, ArrowRight, Cpu, Database, Server, Workflow } from 'lucide-react';

export default function AIDevOpsAutomationPlatform() {
  const features = [
    'AI-powered CI/CD pipeline optimization and failure prediction',
    'Automated infrastructure provisioning with Terraform and CloudFormation',
    'Intelligent monitoring and alerting with anomaly detection',
    'Multi-cloud deployment automation (AWS, Azure, GCP, Kubernetes)',
    'Automated testing orchestration with AI-driven test case generation',
    'Performance optimization and resource scaling recommendations',
    'Security scanning and compliance automation in deployment pipelines',
    'Real-time collaboration and approval workflows for deployments',
  ];

  const benefits = [
    'Reduce deployment time by 80% with intelligent automation',
    'Cut infrastructure costs by 40% through AI optimization',
    'Achieve 99.9% deployment success rate with predictive analytics',
    'Eliminate manual configuration errors and security gaps',
    'Scale infrastructure automatically based on demand patterns',
    'Reduce mean time to recovery (MTTR) by 70%',
  ];

  const automationCapabilities = [
    'Infrastructure as Code (IaC) Management',
    'Continuous Integration/Continuous Deployment',
    'Container Orchestration & Management',
    'Cloud Resource Optimization',
    'Security & Compliance Automation',
    'Performance Monitoring & Alerting',
    'Database Migration & Management',
    'Multi-Environment Deployment',
    'Disaster Recovery Automation',
    'Cost Optimization & Governance',
  ];

  const stack = [
    { name: 'Terraform', url: 'https://www.terraform.io/' },
    { name: 'Kubernetes', url: 'https://kubernetes.io/' },
    { name: 'Jenkins', url: 'https://www.jenkins.io/' },
    { name: 'GitLab CI/CD', url: 'https://docs.gitlab.com/ee/ci/' },
    { name: 'AWS CloudFormation', url: 'https://aws.amazon.com/cloudformation/' },
    { name: 'Azure DevOps', url: 'https://azure.microsoft.com/services/devops/' },
    { name: 'Prometheus', url: 'https://prometheus.io/' },
    { name: 'Grafana', url: 'https://grafana.com/' },
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">DevOps Automation Platform</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your DevOps with AI-driven automation, intelligent monitoring, and predictive analytics. 
              Deploy faster, scale smarter, and maintain higher reliability with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Visit Site
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Core Features</h3>
            </div>
            <ul className="space-y-3">
              {features.slice(0, 4).map((item) => (
                <li key={item} className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg">
                <Workflow className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Automation Capabilities</h3>
            </div>
            <ul className="space-y-3">
              {automationCapabilities.slice(0, 5).map((item) => (
                <li key={item} className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Pricing</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li>Starter: $499/month (up to 10 services)</li>
              <li>Professional: $1,299/month (up to 50 services)</li>
              <li>Enterprise: $2,999/month (unlimited services)</li>
              <li>Custom: Tailored enterprise solutions</li>
            </ul>
            <div className="mt-6 text-sm text-slate-400">
              Avg. market reference: see <a className="text-cyan-400 hover:underline" href="https://www.gartner.com/en/documents/3991477" target="_blank" rel="noreferrer">Gartner DevOps Platforms</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Platform Architecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <GitBranch className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">CI/CD Pipeline</h4>
              <p className="text-slate-300 text-sm">
                Intelligent build, test, and deployment automation with failure prediction
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Infrastructure</h4>
              <p className="text-slate-300 text-sm">
                Multi-cloud provisioning and management with cost optimization
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Security</h4>
              <p className="text-slate-300 text-sm">
                Automated security scanning and compliance checks
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Monitoring</h4>
              <p className="text-slate-300 text-sm">
                AI-powered performance monitoring and alerting
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Tech Stack & Integrations</h3>
          <div className="flex flex-wrap gap-3">
            {stack.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-900/60 border border-slate-700/60 rounded-lg text-slate-300 hover:text-white hover:border-cyan-500">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Transform Your DevOps Today</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              Get Platform Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:+13024640950" className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Call +1 302 464 0950
            </a>
          </div>
          <p className="text-slate-400 mt-6">
            Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a> for enterprise solutions
          </p>
        </div>
      </section>
    </div>
  );
}