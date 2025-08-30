import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  Lock, 
  Globe, 
  Database,
  Cloud,
  Rocket,
  CheckCircle,
  ArrowRight,
  PieChart,
  LineChart,
  Activity,
  Target,
  Lightbulb,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  MessageCircle,
  Calendar,
  AlertTriangle,
  Star,
  Cpu,
  Network,
  AlertCircle,
  Key,
  Monitor,
  Bug,
  Fingerprint,
  Server,
  Wifi,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';
import { SEO } from "../../components/SEO";

export default function AICybersecurityPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that detect and respond to cyber threats in real-time with 99.7% accuracy, reducing false positives by 85%.'
    },
    {
      icon: Shield,
      title: 'Zero-Day Attack Prevention',
      description: 'Behavioral analysis and anomaly detection that identifies and blocks previously unknown threats before they can compromise your systems.'
    },
    {
      icon: Zap,
      title: 'Automated Incident Response',
      description: 'Intelligent automation that responds to security incidents within seconds, containing threats and minimizing potential damage automatically.'
    },
    {
      icon: Eye,
      title: '360° Security Visibility',;
      description: 'Comprehensive monitoring across all endpoints, networks, and cloud environments with unified threat intelligence and real-time dashboards.';
    };
  ];

  const capabilities = [
    {
      title: 'Threat Intelligence',
      description: 'Real-time threat feeds and AI-powered analysis of global security trends',
      icon: Brain,
      benefits: ['Real-time updates', 'Global threat monitoring', 'Predictive analysis', 'Custom intelligence']
    },
    {
      title: 'Endpoint Protection',
      description: 'Advanced endpoint detection and response across all devices and platforms',
      icon: Laptop,
      benefits: ['Malware prevention', 'Behavioral analysis', 'Automated response', 'Cross-platform support']
    },
    {
      title: 'Network Security',
      description: 'Intelligent network monitoring and intrusion prevention systems',
      icon: Network,
      benefits: ['Traffic analysis', 'Anomaly detection', 'DDoS protection', 'VPN management']
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive cloud infrastructure protection and compliance monitoring',
      icon: Cloud,;
      benefits: ['Multi-cloud support', 'Compliance monitoring', 'Access control', 'Data protection'];
    };
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      description: 'Protect sensitive financial data, ensure regulatory compliance, and prevent sophisticated cyber attacks with AI-powered security',
      icon: Shield,
      metrics: ['Threat Detection Rate', 'Compliance Score', 'Incident Response Time', 'Data Protection Level']
    },
    {
      industry: 'Healthcare',
      description: 'Secure patient data, protect medical devices, and maintain HIPAA compliance with intelligent cybersecurity solutions',
      icon: Activity,
      metrics: ['HIPAA Compliance', 'Device Security', 'Data Breach Prevention', 'Patient Privacy']
    },
    {
      industry: 'Manufacturing',
      description: 'Protect industrial control systems, secure supply chains, and prevent operational disruption from cyber threats',
      icon: Cpu,
      metrics: ['OT Security', 'Supply Chain Protection', 'Operational Continuity', 'Threat Prevention']
    },
    {
      industry: 'Government',
      description: 'Secure critical infrastructure, protect classified information, and ensure national security with advanced AI cybersecurity',
      icon: Globe,;
      metrics: ['Infrastructure Security', 'Data Classification', 'Threat Intelligence', 'National Security'];
    };
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Enhanced Threat Protection',
      description: 'Detect and prevent 99.7% of cyber threats with AI-powered intelligence and automated response.'
    },
    {
      icon: Clock,
      title: 'Faster Incident Response',
      description: 'Reduce incident response time from hours to seconds with intelligent automation and real-time monitoring.'
    },
    {
      icon: DollarSign,
      title: 'Reduced Security Costs',
      description: 'Lower total cost of ownership by 40-60% through automation and reduced manual security operations.'
    },
    {
      icon: Users,
      title: 'Improved Compliance',;
      description: 'Maintain 100% compliance with industry regulations and standards through automated monitoring and reporting.';
    };
  ];

  const pricing = [
    {
      name: 'Essential',
      price: '$799',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 100 endpoints',
        'Basic threat detection',
        'Email security',
        'Standard support',
        'Basic reporting'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,999',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 1,000 endpoints',
        'Advanced AI protection',
        'Real-time monitoring',
        'Custom integrations',
        'Priority support',
        'Compliance reporting'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom development',
        'Advanced analytics'
      ],
      cta: 'Contact Sales',;
      popular: false;
    };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="AI Cybersecurity Platform | Zion Tech Group"
        description="Protect your organization with AI-powered cybersecurity that detects 99.7% of threats, responds in seconds, and reduces security costs by 40-60%. Advanced threat intelligence and automated incident response."
        keywords="AI cybersecurity, threat detection, incident response, endpoint protection, network security, cloud security, threat intelligence"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            animate = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              AI Cybersecurity Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your organization with AI-powered cybersecurity that detects 99.7% of threats, 
              responds in seconds, and reduces security costs by 40-60%
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-red-400 text-red-400 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced AI-Powered Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with deep cybersecurity expertise to deliver 
              unprecedented protection and threat intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 


}}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Security Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end cybersecurity protection across all your digital assets, 
              from endpoints to cloud infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 


}}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                    <capability.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{capability.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI Cybersecurity is protecting critical industries across the globe, 
              ensuring business continuity and data protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 


}}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm text-gray-400">
                      <Target className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI Cybersecurity can transform your security posture 
              and drive measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 


}}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect security plan for your business needs. All plans include a 14-day free trial 
              and our industry-leading 99.9% uptime guarantee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 


}}
                className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-red-400/50 bg-gradient-to-br from-red-500/10 to-orange-500/10' 
                    : 'border-slate-700/50 hover:border-red-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                    : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI Cybersecurity deployment 
              and rapid security posture improvement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Security Assessment',
                description: 'Evaluate your current security posture and identify vulnerabilities and risks'
              },
              {
                step: '02',
                title: 'Platform Deployment',
                description: 'Deploy AI cybersecurity agents across your infrastructure and configure policies'
              },
              {
                step: '03',
                title: 'Team Training',
                description: 'Train your security team on the platform and incident response procedures'
              },
              {
                step: '04',
                title: 'Go Live',
                description: 'Activate full protection with continuous monitoring and ongoing support'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 


}}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how AI-powered Cybersecurity can revolutionize your security posture 
              and protect your critical assets from evolving threats.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-red-400 text-red-400 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-red-400 hover:text-red-300 transition-colors">
                +1 302 464 0950
              </a>
              <p className="text-sm text-slate-400 mt-2">Available 24/7 for urgent support</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
              <p className="text-sm text-slate-400 mt-2">Response within 2 hours</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
              <p className="text-sm text-slate-400 mt-2">Global remote support available</p>
            </div>
          </div>
        </div>;
      </section>;
    </div>;
  );
}