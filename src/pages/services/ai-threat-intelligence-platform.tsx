<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { Link  } from 'react-router-dom'; import { ; Shield,; Brain,; Zap,; Users,; BarChart3,; Rocket,; CheckCircle,; Star,; ArrowRight,; Globe,; Cpu,; Database,; Cloud,; Lock,; TrendingUp,; Target,; Heart,; Eye,; Activity,; Code,; Server,; Network,; Phone,; Mail,; MapPin,; DollarSign,; Clock,; Award,; Lightbulb,; Sparkles,; AlertTriangle,; ShieldCheck,; Activity as ActivityIcon,; BarChart,; Settings,; Monitor,; Database as DatabaseIcon,; Globe as GlobeIcon,; Zap as ZapIcon,; Users as UsersIcon,; Lock as LockIcon,;  } from 'lucide-react'; ; export function AIThreatIntelligencePlatform() {; const features = [; {; icon: Brain,; title: 'AI-Powered Threat Detection',; description:; 'Advanced machine learning algorithms that detect and analyze threats in real-time',; benefits: [; 'Zero-day threat detection',; 'Behavioral analysis',; 'Predictive threat modeling',; ],; },; {; icon: Shield,; title: 'Enterprise Security',; description:; 'Bank-grade security with SOC2 compliance and zero-trust architecture',; benefits: [; 'End-to-end encryption',; 'Multi-factor authentication',; 'Regular security audits',; ],; },; {; icon: Activity,; title: 'Real-Time Monitoring',; description:; '24/7 continuous monitoring of your entire digital infrastructure',; benefits: [; 'Instant threat alerts',; 'Live security dashboards',; 'Automated response',; ],; },; {; icon: BarChart3,; title: 'Advanced Analytics',; description: 'Comprehensive threat intelligence and security analytics',; benefits: [; 'Threat trend analysis',; 'Risk assessment',; 'Compliance reporting',; ],; },; {; icon: Zap,; title: 'Automated Response',; description:; 'Intelligent automated incident response and threat mitigation',; benefits: [; 'Instant threat blocking',; 'Automated remediation',; 'Incident orchestration',; ],; },; {; icon: Cloud,; title: 'Cloud-Native',; description:; 'Built for the cloud with automatic scaling and high availability',; benefits: [; '99.99% uptime guarantee',; 'Global deployment',; 'Auto-scaling infrastructure',; ],; },; ]; ; const pricingPlans = [; {; name: 'Professional',; price: '$2,499',; period: '/month',; description: 'Perfect for mid-sized organizations',; features: [; 'Up to 1,000 endpoints',; 'AI threat detection',; 'Real-time monitoring',; 'Automated response',; 'Email support',; 'Basic analytics',; 'SOC 2 compliance',; 'API access',; ],; cta: 'Start Free Trial',; popular: false,; },; {; name: 'Enterprise',; price: '$4,999',; period: '/month',; description: 'For large organizations with advanced security needs',; features: [; 'Unlimited endpoints',; 'Advanced AI capabilities',; '24/7 security monitoring',; 'Custom threat models',; 'Priority support',; 'Advanced analytics',; 'Custom integrations',; 'Dedicated security team',; 'White-label options',; 'SLA guarantees',; ],; cta: 'Contact Sales',; popular: true,; },; {; name: 'Government',; price: 'Custom',; period: '',; description: 'For government agencies and defense contractors',; features: [; 'All Enterprise features',; 'FedRAMP compliance',; 'Classified data handling',; 'On-premise deployment',; 'Custom security protocols',; '24/7 dedicated support',; 'Security clearance support',; 'Compliance consulting',; ],; cta: 'Contact Government Sales',; popular: false,; },; ]; ; const useCases = [; {; title: 'Financial Institutions',; description: 'Protect critical financial systems from cyber threats',; icon: DollarSign,; benefits: [; 'Fraud detection',; 'Compliance monitoring',; 'Real-time threat response',; ],; },; {; title: 'Healthcare Organizations',; description: 'Secure patient data and healthcare systems',; icon: Heart,; benefits: [; 'HIPAA compliance',; 'Patient data protection',; 'Medical device security',; ],; },; {; title: 'Government Agencies',; description: 'Defend against nation-state cyber threats',; icon: Shield,; benefits: [; 'Classified data protection',; 'Threat intelligence sharing',; 'Compliance management',; ],; },; {; title: 'Manufacturing',; description: 'Protect industrial control systems and IoT devices',; icon: Settings,; benefits: [; 'OT security',; 'Supply chain protection',; 'Operational continuity',; ],; },; ]; ; const stats = [; { number: '95%', label: 'Reduction in Security Incidents' },; { number: '<1s', label: 'Average Response Time' },; { number: '99.99%', label: 'Uptime Guarantee' },; { number: '24/7', label: 'Security Monitoring' },; ]; ; return(; <div className="min-h-screen bg-gray-900 text-white">;" {}";" <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">";" <div className="max-w-7xl mx-auto">; <motion.div; initial={{ opacity: 0, y: 20 }}; animate={{ opacity: 1, y: 0 }};" transition={{ duration: 0.8   }}";" className="text-center";" >";" <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">";" <AlertTriangle className="w-4 h-4 mr-2" />; Advanced Cybersecurity Platform;" </div>";" <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">; AI Threat Intelligence Platform;" </h1>";" <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">; Revolutionary cybersecurity platform that uses AI to detect,; analyze, and respond to cyber threats in real-time.Protect your; organization with predictive threat intelligence and automated; incident response.;" </p>";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;" <Link";" to="/contact";" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"; >;" Start Free Trial";" <ArrowRight className="ml-2 w-5 h-5" />; </Link>;" <Link";" to="/pricing";" className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"; >; View Pricing; </Link>; </div>; </motion.div>; </div>; </section>;" {}";" <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">";" <div className="max-w-7xl mx-auto">";" <div className="grid grid-cols-2 md:grid-cols-4 gap-8">; {stats.map((stat, index) => (; <motion.div; key={index}; initial={{ opacity: 0, y: 20 }}; animate={{ opacity: 1, y: 0 }};" transition={{ duration: 0.8, delay: index * 0.1 }}";" className="text-center";" >";" <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">; {stat.number};" </div>";" <div className="text-gray-400">{stat.label}</div>; </motion.div>; ))}; </div>; </div>; </section>;" {}";" <section className="py-20 px-4 sm:px-6 lg:px-8">";" <div className="max-w-7xl mx-auto">; <motion.div; initial={{ opacity: 0, y: 20 }}; animate={{ opacity: 1, y: 0 }};" transition={{ duration: 0.8   }}";" className="text-center mb-16";" >";" <h2 className="text-3xl md:text-4xl font-bold mb-4">; Advanced Security Features;" </h2>";" <p className="text-xl text-gray-400 max-w-3xl mx-auto">; Our AI-powered platform provides comprehensive threat intelligence; and automated response capabilities; </p>; </motion.div>;" ";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {features.map((feature, index) => (; <motion.div; key={index}; initial={{ opacity: 0, y: 20 }}; animate={{ opacity: 1, y: 0 }};" transition={{ duration: 0.8, delay: index * 0.1 }}";" className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-red-500 transition-all duration-300";" >";" <div className="flex items-center mb-4">";" <feature.icon className="w-8 h-8 text-red-400 mr-3" />";" <h3 className="text-xl font-semibold">{feature.title}</h3>;" </div>";" <p className="text-gray-400 mb-4">{feature.description}</p>";" <ul className="space-y-2">; {feature.benefits.map((benefit, benefitIndex) => (; <li;" key={benefitIndex}";" className="flex items-center text-sm text-gray-300";" >";" <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />; {benefit}; </li>; ))}; </ul>; </motion.div>; ))}; </div>; </div>; </section>;" {}";" <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">";" <div className="max-w-7xl mx-auto">; <motion.div; initial={{ opacity: 0, y: 20 }}; animate={{ opacity: 1, y: 0 }};" transition={{ duration: 0.8   }}";" className="text-center mb-16";" >";" <h2 className="text-3xl md:text-4xl font-bold mb-4">; Industry Solutions;" </h2>";" <p className="text-xl text-gray-400 max-w-3xl mx-auto">; Tailored security solutions for different industries and use cases; </p>; </motion.div>;" ";" <div className="grid grid-cols-1 md:grid-cols-2 gap-8">; {useCases.map((useCase, index) => (; <motion.div; key={index}; initial={{ opacity: 0, y: 20 }}; animate={{ opacity: 1, y: 0 }};" transition={{ duration: 0.8, delay: index * 0.1 }}";" className="bg-gray-900 p-6 rounded-lg border border-gray-700";" >";" <div className="flex items-center mb-4">";" <useCase.icon className="w-8 h-8 text-red-400 mr-3" />";" <h3 className="text-xl font-semibold">{useCase.title}</h3>;" </div>";" <p className="text-gray-400 mb-4">{useCase.description}</p>";" <ul className="space-y-2">; {useCase.benefits.map((benefit, benefitIndex) => (; <li;" key={benefitIndex}";" className="flex items-center text-sm text-gray-300";" >";" <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />; {benefit}; </li>; ))}; </ul>; </motion.div>; ))}; </div>; </div>; </section>;" {}";" <section className="py-20 px-4 sm:px-6 lg:px-8">";" <div className="max-w-7xl mx-auto">; <motion.div; initial={{ opacity: 0, y: 20 }}; animate={{ opacity: 1, y: 0 }};" transition={{ duration: 0.8   }}";" className="text-center mb-16";" >";" <h2 className="text-3xl md:text-4xl font-bold mb-4">; Pricing Plans;" </h2>";" <p className="text-xl text-gray-400 max-w-3xl mx-auto">; Choose the perfect plan for your organization's security needs; </p>; </motion.div>;" ";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8">; {pricingPlans.map((plan, index) => (; <motion.div; key={index}; initial={{ opacity: 0, y: 20 }}; animate={{ opacity: 1, y: 0 }}; transition={{ duration: 0.8, delay: index * 0.1 }}; className={`bg-gray-800 p-8 rounded-lg border ${; plan.popular ? 'border-red-500' : 'border-gray-700'; } relative`}; >;" {plan.popular && (";" <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">";" <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">; Most Popular; </span>; </div>;" )}";" <div className="text-center mb-8">";" <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>";" <div className="text-4xl font-bold text-red-400 mb-2">;" {plan.price}";" <span className="text-lg text-gray-400">{plan.period}</span>;" </div>";" <p className="text-gray-400">{plan.description}</p>;" </div>";" <ul className="space-y-4 mb-8">; {plan.features.map((feature, featureIndex) => (; <li;" key={featureIndex}";" className="flex items-center text-gray-300";" >";" <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />; {feature}; </li>; ))}; </ul>;" <Link";" to="/contact"; className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${; plan.popular; ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'; : 'bg-gray-700 text-white hover:bg-gray-600'; }`}; >; {plan.cta}; </Link>; </motion.div>; ))}; </div>; </div>; </section>;" {}";" <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900 to-orange-900">";" <div className="max-w-4xl mx-auto text-center">; <motion.div; initial={{ opacity: 0, y: 20 }}; animate={{ opacity: 1, y: 0 }}; transition={{ duration: 0.8   }};" >";" <h2 className="text-3xl md:text-4xl font-bold mb-4">; Ready to Secure Your Organization?;" </h2>";" <p className="text-xl text-gray-300 mb-8">; Join thousands of organizations that trust our AI-powered threat; intelligence platform;" </p>";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;" <Link";" to="/contact";" className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"; >;" Start Free Trial";" <ArrowRight className="ml-2 w-5 h-5" />; </Link>;" <Link";" to="/contact";" className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300"; >; Schedule Demo; </Link>; </div>; </motion.div>; </div>; </section>;" {}";" <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">";" <div className="max-w-7xl mx-auto">";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">";" <div className="flex flex-col items-center">";" <Phone className="w-8 h-8 text-red-400 mb-4" />";" <h3 className="text-lg font-semibold mb-2">Phone</h3>";" <p className="text-gray-400">+1 302 464 0950</p>;" </div>";" <div className="flex flex-col items-center">";" <Mail className="w-8 h-8 text-red-400 mb-4" />";" <h3 className="text-lg font-semibold mb-2">Email</h3>";" <p className="text-gray-400">kleber@ziontechgroup.com</p>;" </div>";" <div className="flex flex-col items-center">";" <MapPin className="w-8 h-8 text-red-400 mb-4" />";" <h3 className="text-lg font-semibold mb-2">Address</h3>";" <p className="text-gray-400">; 364 E Main St STE 1008; <br / / />; Middletown DE 19709; </p>; </div>; </div>; </div>; </section>; </div>; ); };" ";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiThreatIntelligencePlatform() {
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ]
  const useCases = [
    "Use Case 1",
    "Use Case 2",
    "Use Case 3"
  ]
  const pricing = [
      }
];
    {
      name: "Professional",
      price: "$799/mo",
      details: ["Up to 50 users", "Advanced features", "Priority support", "99.9% SLA"]
    }
  ];
    {
      name: "Enterprise",
      price: "$1,999/mo",
    }
  ];

  ]
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"  />
            AI-Powered Ai Threat Intelligence Platform Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Threat Intelligence Platform Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai threat intelligence platform operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Threat Intelligence Platform Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}

            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                Contact Sales <Phone className="w-4 h-4 ml-2"  />
              </Link>
            </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Comprehensive ai threat intelligence platform solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Threat Intelligence Platform?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai threat intelligence platform platform today.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </Link>
          </div>
      </section>
    </div>
  ),
>>>>>>> main
