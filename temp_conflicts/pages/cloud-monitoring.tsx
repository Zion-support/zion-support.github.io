import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function CloudMonitoringPage() {_const _features = [
    {
      icon: <Activity className="w-8 h-8 text-white" />, _title: 'Real-time Monitoring', _description: 'Monitor your entire infrastructure in real-time with sub-second latency and instant alerting.', _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _gradient: 'from-green-400 to-emerald-500'},
    {_icon: <BarChart3 className="w-8 h-8 text-white" />, _title: 'Advanced Analytics', _description: 'Deep insights into performance metrics, _resource utilization, _and business intelligence.', _color: 'bg-gradient-to-br from-blue-500 to-cyan-600', _gradient: 'from-blue-400 to-cyan-500'},
    {_icon: <AlertTriangle className="w-8 h-8 text-white" />, _title: 'Smart Alerting', _description: 'AI-powered anomaly detection and intelligent alerting to prevent issues before they impact users.', _color: 'bg-gradient-to-br from-red-500 to-pink-600', _gradient: 'from-red-400 to-pink-500'},
    {_icon: <Database className="w-8 h-8 text-white" />, _title: 'Multi-Cloud Support', _description: 'Monitor AWS, _Azure, _Google Cloud, _and on-premises infrastructure from a single dashboard.', _color: 'bg-gradient-to-br from-purple-500 to-indigo-600', _gradient: 'from-purple-400 to-indigo-500'},
    {_icon: <Shield className="w-8 h-8 text-white" />, _title: 'Security Monitoring', _description: 'Comprehensive security monitoring with threat detection, _compliance reporting, _and audit trails.', _color: 'bg-gradient-to-br from-yellow-500 to-orange-600', _gradient: 'from-yellow-400 to-orange-500'},
    {_icon: <Zap className="w-8 h-8 text-white" />, _title: 'Auto-scaling', _description: 'Intelligent auto-scaling based on real-time metrics and predictive analytics.', _color: 'bg-gradient-to-br from-teal-500 to-blue-600', _gradient: 'from-teal-400 to-blue-500'}];

  const _monitoringCapabilities = [
    {_category: 'Infrastructure', _icon: <Server className="w-6 h-6 text-blue-400" />, _metrics: ['CPU Usage', _'Memory Utilization', _'Disk I/O', _'Network Performance', _'Container Metrics']},
    {_category: 'Applications', _icon: <Code className="w-6 h-6 text-green-400" />, _metrics: ['Response Time', _'Error Rates', _'Throughput', _'User Experience', _'API Performance']},
    {_category: 'Databases', _icon: <Database className="w-6 h-6 text-purple-400" />, _metrics: ['Query Performance', _'Connection Pool', _'Index Usage', _'Replication Lag', _'Storage Growth']},
    {_category: 'Security', _icon: <Shield className="w-6 h-6 text-red-400" />, _metrics: ['Threat Detection', _'Access Logs', _'Vulnerability Scans', _'Compliance Status', _'Audit Trails']}
  ];

  const _pricingPlans = [
    {_name: 'Starter', _price: '$49', _period: '/month', _description: 'Perfect for small teams and startups', _features: [
        'Up to 10 servers', _'Basic monitoring', _'Email alerts', _'7-day data retention', _'Community support', _'Mobile app access'
      ], _popular: false, _color: 'border-gray-600', _buttonColor: 'bg-gray-600 hover:bg-gray-700'},
    {_name: 'Professional', _price: '$199', _period: '/month', _description: 'Ideal for growing businesses', _features: [
        'Up to 100 servers', _'Advanced monitoring', _'SMS & Slack alerts', _'30-day data retention', _'Priority support', _'Custom dashboards', _'API access', _'Team collaboration'
      ], _popular: true, _color: 'border-blue-500', _buttonColor: 'bg-blue-600 hover:bg-blue-700'},
    {_name: 'Enterprise', _price: '$599', _period: '/month', _description: 'For large organizations', _features: [
        'Unlimited servers', _'Full monitoring suite', _'Custom integrations', _'1-year data retention', _'Dedicated support', _'White-label solution', _'SLA guarantee', _'On-premise option'
      ], _popular: false, _color: 'border-purple-600', _buttonColor: 'bg-purple-600 hover:bg-purple-700'}
  ];

  const _integrations = [
    {_name: 'AWS', _icon: '☁️', _description: 'CloudWatch integration'},
    {_name: 'Azure', _icon: '🔷', _description: 'Monitor integration'},
    {_name: 'GCP', _icon: '☁️', _description: 'Stackdriver integration'},
    {_name: 'Docker', _icon: '🐳', _description: 'Container monitoring'},
    {_name: 'Kubernetes', _icon: '☸️', _description: 'K8s native support'},
    {_name: 'Slack', _icon: '💬', _description: 'Team notifications'},
    {_name: 'PagerDuty', _icon: '🚨', _description: 'Incident management'},
    {_name: 'Jira', _icon: '📋', _description: 'Issue tracking'}
  ];

  const _useCases = [
    {_title: 'DevOps Teams', _description: 'Monitor CI/CD pipelines, _deployment success rates, _and infrastructure health.', _icon: '🔄', _benefits: ['Faster deployments', _'Reduced downtime', _'Better collaboration', _'Automated scaling']},
    {_title: 'SaaS Companies', _description: 'Track user experience, _application performance, _and business metrics.', _icon: '💼', _benefits: ['User satisfaction', _'Revenue optimization', _'Competitive advantage', _'Customer retention']},
    {_title: 'E-commerce', _description: 'Monitor website performance, _payment processing, _and inventory systems.', _icon: '🛒', _benefits: ['Higher conversion', _'Faster checkout', _'Inventory optimization', _'Revenue growth']},
    {_title: 'Financial Services', _description: 'Ensure compliance, _security, _and 24/7 availability of critical systems.', _icon: '💰', _benefits: ['Regulatory compliance', _'Fraud detection', _'Risk management', _'Customer trust']}
  ];

  return (
    <>
      <Head>
        <title>Cloud Monitoring & Analytics | Zion Tech Group - Real-time Infrastructure Monitoring</title>
        <meta name="description" content="Comprehensive cloud monitoring and analytics platform with real-time insights, AI-powered alerting, and multi-cloud support. Monitor your entire infrastructure from a single dashboard." />
        <meta property="og:title" content="Cloud Monitoring & Analytics | Zion Tech Group" />
        <meta property="og:description" content="Real-time infrastructure monitoring with advanced analytics, smart alerting, and multi-cloud support." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {_/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Eye className="w-4 h-4 mr-2" />
              Real-time Infrastructure Monitoring
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
            Cloud Monitoring & Analytics
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">
            Monitor your entire infrastructure in real-time with AI-powered insights and intelligent alerting
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button
              href="#pricing"
              size="lg"
              className="bg-green-600 hover:bg-green-700 shadow-2xl shadow-green-500/25"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="#demo"
              variant="outline"
              size="lg"
              className="border-white/20 hover:border-white/40 hover:bg-white/5"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {_/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400">99.99%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400">1M+</div>
              <div className="text-gray-400">Metrics Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400">50+</div>
              <div className="text-gray-400">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400">&lt;100ms</div>
              <div className="text-gray-400">Latency</div>
            </div>
          </div>
        </div>
      </section>

      {_/* Features Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Powerful Monitoring Features
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Everything you need to monitor and optimize your infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_features.map(_(feature, _index) => (
              <Card
                key={index}
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"
                style={_{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="relative">
                  <div className={_`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
                    {_feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                  {_feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {_feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Monitoring Capabilities */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Comprehensive Monitoring
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Monitor every aspect of your infrastructure with detailed metrics and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_monitoringCapabilities.map(_(capability, _index) => (_<Card
                key={index}
                className="group border border-gray-700 hover:border-green-500/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{_capability.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
                      {_capability.category}
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {_capability.metrics.map((metric, _metricIndex) => (
                        <div key={metricIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {_metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Use Cases Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Trusted by teams across industries for reliable infrastructure monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_useCases.map(_(useCase, _index) => (_<Card
                key={index}
                className="group border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{_useCase.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
                      {_useCase.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {_useCase.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {_useCase.benefits.map((benefit, _benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {_benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Pricing Section */}
      <section id="pricing" className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the plan that fits your monitoring needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_pricingPlans.map(_(plan, _index) => (
              <Card
                key={index}
                className={_`relative group ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''} border ${_plan.color} hover:border-green-500/50 transition-all duration-300`}
              >
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{_plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {_plan.price}<span className="text-lg text-gray-400">{_plan.period}</span>
                  </div>
                  <p className="text-gray-400">{_plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {_plan.features.map(_(feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {_feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  className={_`w-full ${plan.buttonColor} text-white`}
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Integrations Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Connect with your favorite tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {_integrations.map(_(integration, _index) => (
              <Card
                key={index}
                className="text-center group border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {_integration.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{_integration.name}</h3>
                <p className="text-sm text-gray-400">{_integration.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Monitor Your Infrastructure?
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of DevOps teams who trust us to monitor their critical infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="#demo"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 shadow-2xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}