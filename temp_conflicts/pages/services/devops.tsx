import React from 'react';
import Head from 'next/head';
import {_Cpu, _ArrowRight, _CheckCircle, _Zap, _Target, _Users, _TrendingUp, _Globe, _Server, _Database, _Star, _GitBranch, _Cloud} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function DevOpsPage() {_const _services = [
    {
      title: "CI/CD Pipeline", _description: "Automated continuous integration and deployment pipelines", _features: [
        "Automated testing", _"Deployment automation", _"Rollback capabilities", _"Performance monitoring"
      ], _price: "$699/month", _icon: GitBranch},
    {_title: "Infrastructure as Code", _description: "Manage infrastructure through code and automation", _features: [
        "Terraform automation", _"Cloud provisioning", _"Configuration management", _"Version control"
      ], _price: "$899/month", _icon: Cloud},
    {_title: "Monitoring & Observability", _description: "Comprehensive monitoring and observability solutions", _features: [
        "Real-time monitoring", _"Alert management", _"Performance metrics", _"Log analysis"
      ], _price: "$599/month", _icon: Server}
  ];

  const _benefits = [
    {_icon: Zap, _title: "Faster Deployment", _description: "Reduce deployment time from days to minutes with automation"},
    {_icon: Target, _title: "Improved Reliability", _description: "Increase system stability and reduce downtime"},
    {_icon: Users, _title: "Team Collaboration", _description: "Better collaboration between development and operations teams"},
    {_icon: Star, _title: "Cost Optimization", _description: "Optimize resource usage and reduce operational costs"}
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>DevOps & Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Advanced DevOps and infrastructure solutions including CI/CD pipelines, _infrastructure as code, _and monitoring services." />
        <meta name="keywords" content="DevOps, _CI/CD, _infrastructure as code, _monitoring, _automation, _Zion Tech Group" />
        <meta property="og:title" content="DevOps & Infrastructure Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced DevOps solutions for modern software development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services/devops" />
        <link rel="canonical" href="https://ziontechgroup.com/services/devops" />
      </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 p-5 mx-auto mb-8">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              DevOps & Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8">
              Streamline your development and operations with cutting-edge DevOps solutions. 
              From automated pipelines to infrastructure management, _we optimize your entire workflow.
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Optimize Workflow</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {_/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
              DevOps Services
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive DevOps solutions designed to accelerate your development cycle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_services.map((service, _index) => (_<motion.div
                key={service.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-yellow-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-yellow-500/0 via-orange-400/10 to-yellow-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100" />
                
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-4 mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{_service.title}</h3>
                <p className="text-white/70 mb-6">{_service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {_service.features.map((feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-white/80">{_feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-2xl font-bold text-yellow-400 mb-4">{_service.price}</div>
                
                <motion.a
                  href="mailto:kleber@ziontechgroup.com"
                  whileHover={_{ scale: 1.02}}
                  whileTap={_{ scale: 0.98}}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-300"
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
              Why DevOps?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the transformative benefits of modern DevOps practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_benefits.map(_(benefit, _index) => (
              <motion.div
                key={benefit.title}
                initial={_{ opacity: 0, _x: index % 2 === 0 ? -30 : 30}}
                whileInView={_{ opacity: 1, _x: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-4 flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{_benefit.title}</h3>
                  <p className="text-white/70">{_benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our DevOps solutions can accelerate your development and operations
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Start Optimizing</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}