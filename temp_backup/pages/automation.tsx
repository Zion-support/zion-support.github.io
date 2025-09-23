import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Hub | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's autonomous automation systems, workflows, and intelligent processes." />
        <meta property="og:title" content="Automation Hub | Zion Tech Group" />
        <meta property="og:description" content="Explore Zion Tech Group's autonomous automation systems, workflows, and intelligent processes." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Automation Hub
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Discover our autonomous systems that work 24/7 to maintain, optimize, and evolve our technology infrastructure.
                </p>
              </header>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Active Automation Systems</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-lg p-6 border border-cyan-400/30">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3">Content Generation</h3>
                    <p className="text-white/80 mb-4">
                      AI-powered systems that continuously create and optimize content across multiple domains.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-cyan-300">Status: Active</span>
                      <span className="text-green-400">✓ Running</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-fuchsia-400/10 to-purple-400/10 rounded-lg p-6 border border-fuchsia-400/30">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">System Monitoring</h3>
                    <p className="text-white/80 mb-4">
                      Continuous health monitoring with automated alerting and self-healing capabilities.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-fuchsia-300">Status: Active</span>
                      <span className="text-green-400">✓ Running</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-lg p-6 border border-green-400/30">
                    <h3 className="text-xl font-semibold text-green-300 mb-3">Security Automation</h3>
                    <p className="text-white/80 mb-4">
                      Automated threat detection, vulnerability scanning, and security response systems.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-300">Status: Active</span>
                      <span className="text-green-400">✓ Running</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-lg p-6 border border-blue-400/30">
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">CI/CD Pipeline</h3>
                    <p className="text-white/80 mb-4">
                      Automated testing, building, and deployment with intelligent rollback capabilities.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-300">Status: Active</span>
                      <span className="text-green-400">✓ Running</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-lg p-6 border border-purple-400/30">
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">Performance Optimization</h3>
                    <p className="text-white/80 mb-4">
                      Continuous performance monitoring and automated optimization recommendations.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-purple-300">Status: Active</span>
                      <span className="text-green-400">✓ Running</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-lg p-6 border border-yellow-400/30">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-3">Backup & Recovery</h3>
                    <p className="text-white/80 mb-4">
                      Automated backup systems with intelligent recovery and redundancy management.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-yellow-300">Status: Active</span>
                      <span className="text-green-400">✓ Running</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Automation Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">227</div>
                    <div className="text-white/80">Active Workflows</div>
                    <div className="text-sm text-cyan-300 mt-2">24/7 Operation</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-4xl font-bold text-fuchsia-400 mb-2">99.7%</div>
                    <div className="text-white/80">Success Rate</div>
                    <div className="text-sm text-fuchsia-300 mt-2">Last 24 Hours</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-4xl font-bold text-green-400 mb-2">2.3s</div>
                    <div className="text-white/80">Avg Execution</div>
                    <div className="text-sm text-green-300 mt-2">Per Workflow</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-4xl font-bold text-blue-400 mb-2">99.99%</div>
                    <div className="text-white/80">Uptime</div>
                    <div className="text-sm text-blue-300 mt-2">System Availability</div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-cyan-400">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3">Intelligent Detection</h3>
                    <p className="text-white/80">
                      Our systems continuously monitor and detect opportunities for improvement,
                      optimization, and maintenance.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-fuchsia-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-fuchsia-400">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">Autonomous Action</h3>
                    <p className="text-white/80">
                      Systems automatically execute appropriate actions based on learned patterns
                      and predefined optimization strategies.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-green-400">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-green-300 mb-3">Continuous Learning</h3>
                    <p className="text-white/80">
                      Each action provides feedback that improves future decision-making,
                      creating a self-improving system.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Explore Further</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/automation-health" className="group bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3 group-hover:text-cyan-200">Automation Health Dashboard</h3>
                    <p className="text-white/80 mb-4">
                      Monitor the real-time status and performance of all our automation systems.
                    </p>
                    <div className="text-cyan-400 group-hover:text-cyan-300">View Dashboard →</div>
                  </Link>
                  
                  <Link href="/reports" className="group bg-gradient-to-r from-fuchsia-400/10 to-purple-400/10 rounded-lg p-6 border border-fuchsia-400/30 hover:border-fuchsia-400/50 transition-all">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3 group-hover:text-fuchsia-200">Automation Reports</h3>
                    <p className="text-white/80 mb-4">
                      Detailed reports and analytics from our autonomous systems and workflows.
                    </p>
                    <div className="text-fuchsia-400 group-hover:text-fuchsia-300">View Reports →</div>
                  </Link>
                </div>
              </section>

              <footer className="border-t border-white/20 pt-8 text-center">
                <p className="text-white/60">
                  Our automation systems never sleep, ensuring continuous innovation and optimization.
                </p>
              </footer>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}
=======
import { RefreshCw, Zap, Bot, Workflow, ArrowRight, Check, BarChart3 } from 'lucide-react';


export default function AutomationPage() {
  const features = [
    {
      icon: <Workflow className="w-8 h-8 text-white" />,
      title: 'Workflow Automation',
      description: 'Create complex workflows with drag-and-drop interface'
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Bots',
      description: 'Intelligent automation agents that learn and adapt'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Process Analytics',
      description: 'Real-time insights into your automation performance'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Smart Triggers',
      description: 'Automated responses based on events and conditions'
    }
  ];

  const benefits = [
    'Reduce manual tasks by 80%',
    'Improve process accuracy',
    'Scale operations efficiently',
    '24/7 automated operations',
    'Real-time monitoring',
    'Custom integration support'
  ];

  return (
    <>
      <Head>
        <title>Automation Hub - Zion Tech Group</title>
        <meta name="description" content="AI-powered workflow automation platform that streamlines your business processes and increases efficiency." />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <RefreshCw className="w-4 h-4 mr-2" />
                Intelligent Automation
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Automation Hub
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              AI-powered workflow automation platform that streamlines your business processes and increases efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact" className="shadow-2xl shadow-blue-500/25">
                Start Automating
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact" className="border-white/20 hover:border-white/40">
                View Demo
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Automation Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Powerful tools to automate any business process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index} className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                  Transform Your Business with Automation
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                        <Check className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">
                  <div className="text-center">
                    <RefreshCw className="w-24 h-24 mx-auto mb-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Smart Workflows
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Create intelligent automation workflows that adapt to your business needs
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                      <Zap className="w-4 h-4 mr-2" />
                      AI-powered optimization
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start automating your business processes today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </a>
              <a
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> origin/auto/autonomy-17186719616
