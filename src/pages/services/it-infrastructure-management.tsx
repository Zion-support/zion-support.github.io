<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; Server,; Shield,; Cloud,; Network,; Zap,; Users,; CheckCircle,; ArrowRight,; Star,; Clock,; TrendingUp,; Lock,; Database,; Cpu,; Monitor,; Activity,; Globe,; Settings,; BarChart3,; AlertTriangle,; RefreshCw,; HardDrive;  } from 'lucide-react'; import { SEO } from '@/components/SEO'; ; const ITInfrastructureManagement: React.FC = () => {; const features = [; {; icon: Server,; title: 'Server Management',; description: 'Comprehensive server administration including monitoring, maintenance, and optimization',; benefits: ['24/7 monitoring', 'Performance optimization', 'Capacity planning', 'Automated maintenance']; },; {; icon: Network,; title: 'Network Infrastructure',; description: 'End-to-end network management with advanced security and performance monitoring',; benefits: ['Network design', 'Traffic optimization', 'Security hardening', 'Disaster recovery']; },; {; icon: Cloud,; title: 'Cloud Infrastructure',; description: 'Multi-cloud management and optimization across AWS, Azure, and Google Cloud',; benefits: ['Cloud migration', 'Cost optimization', 'Multi-cloud strategy', 'Auto-scaling']; },; {; icon: Shield,; title: 'Security & Compliance',; description: 'Enterprise-grade security with SOC 2 Type II compliance and threat detection',; benefits: ['Vulnerability management', 'Compliance reporting', 'Incident response', 'Security audits']; },; {; icon: Monitor,; title: '24/7 Monitoring',; description: 'Round-the-clock infrastructure monitoring with proactive alerting and response',; benefits: ['Real-time alerts', 'Performance metrics', 'Uptime tracking', 'Predictive maintenance']; },; {; icon: RefreshCw,; title: 'Disaster Recovery',; description: 'Comprehensive backup and recovery solutions with minimal downtime',; benefits: ['Automated backups', 'Rapid recovery', 'Business continuity', 'Testing & validation']; }; ]; ; const pricingTiers = [; {; name: 'Basic',; price: '$3,500',; period: '/month',; description: 'Perfect for small businesses with basic infrastructure needs',; features: [; 'Up to 10 servers',; 'Basic monitoring',; 'Email support',; 'Monthly reports',; 'Basic security',; 'Backup management'; ],; cta: 'Get Started',; popular: false; },; {; name: 'Professional',; price: '$9,500',; period: '/month',; description: 'Ideal for growing companies with complex infrastructure requirements',; features: [; 'Up to 50 servers',; 'Advanced monitoring',; 'Priority support',; 'Real-time alerts',; 'Advanced security',; 'Disaster recovery',; 'Performance optimization',; '24/7 monitoring'; ],; cta: 'Start Free Trial',; popular: true; },; {; name: 'Enterprise',; price: '$18,500',; period: '/month',; description: 'For large organizations requiring maximum infrastructure management capabilities',; features: [; 'Unlimited servers',; 'Full monitoring suite',; 'Dedicated support team',; 'Custom solutions',; 'Advanced compliance',; 'Multi-cloud management',; 'On-premise support',; 'Custom integrations',; 'Dedicated account manager'; ],; cta: 'Contact Sales',; popular: false; }; ]; ; const benefits = [; {; icon: TrendingUp,; title: '99.9% Uptime',; description: 'Guaranteed high availability with proactive monitoring and maintenance'; },; {; icon: Clock,; title: '40+ Hours Saved Per Week',; description: 'Time savings for IT teams through automated management and monitoring'; },; {; icon: Shield,; title: 'Enhanced Security',; description: 'Enterprise-grade security with continuous threat monitoring and response'; },; {; icon: Zap,; title: 'Improved Performance',; description: 'Optimized infrastructure performance through continuous monitoring and tuning'; }; ]; ; const services = [; {; category: 'Infrastructure Management',; items: ['Server administration', 'Network management', 'Storage optimization', 'Virtualization management']; },; {; category: 'Security & Compliance',; items: ['Security monitoring', 'Vulnerability management', 'Compliance reporting', 'Incident response']; },; {; category: 'Monitoring & Alerting',; items: ['Performance monitoring', 'Real-time alerts', 'Capacity planning', 'Predictive maintenance']; },; {; category: 'Backup & Recovery',; items: ['Automated backups', 'Disaster recovery', 'Business continuity', 'Testing & validation']; }; ]; ; const technologies = [; 'AWS', 'Azure', 'Google Cloud', 'VMware', 'Hyper-V', 'Docker', 'Kubernetes', 'Ansible',; 'Terraform', 'Puppet', 'Chef', 'Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'ELK Stack'; ]; ; return(; <>; <SEO; title="IT Infrastructure Management | Zion Tech Group";"";" description="Professional IT infrastructure management services with 99.9% uptime guarantee.40+ hours saved per week.24/7 monitoring and support.";"";" keywords="IT infrastructure management, server management, network management, cloud infrastructure, IT services, infrastructure monitoring";"";" ogImage="/images/it-infrastructure-management.jpg";"";" canonicalUrl="/services/it-infrastructure-management";";" />;";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;"";" {}";"";" <section className="relative pt-20 pb-16 overflow-hidden">";"";" <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />";"";" <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />;";"";" <div className="relative z-10 container mx-auto px-4">;"";" <motion.div ";"";" className="text-center max-w-4xl mx-auto";" initial={{ opacity: 0, y: 30 }};";" animate={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">";"";" <Server className="w-5 h-5 text-cyan-400" />";"";" <span className="text-cyan-400 text-sm font-medium">Professional IT Management</span>;";" </div>;";"";" <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">;"";" IT Infrastructure";"";" <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;" Management;";" </span>;";" </h1>;";"";" <p className="text-xl text-gray-300 mb-8 leading-relaxed">;" Professional IT infrastructure management services with 99.9% uptime guarantee.;";" Save 40+ hours per week with our comprehensive monitoring and management solutions.;";" </p>;";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <motion.button";"";" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"; whileHover={{ scale: 1.05   }}; whileTap={{ scale: 0.95   }};" >;";" Get Free Assessment;";" </motion.button>;"";" <motion.button";"";" className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"; whileHover={{ scale: 1.05   }}; whileTap={{ scale: 0.95   }}; >; Schedule Consultation; </motion.button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 relative">";"";" <div className="container mx-auto px-4">;"";" <motion.div ";"";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Comprehensive Infrastructure Management;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Our team of certified IT professionals provides end-to-end infrastructure management;" to ensure your systems run smoothly and securely.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;";" {features.map((feature, index) => (;";" <motion.div;"";" key={feature.title}";"";" className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"; initial={{ opacity: 0, y: 30 }}; whileInView={{ opacity: 1, y: 0 }};" transition={{ duration: 0.6, delay: index * 0.1 }};";" viewport={{ once: true   }};";" whileHover={{ y: -5, scale: 1.02 }};"";" >";"";" <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">";"";" <feature.icon className="w-6 h-6 text-white" />;";" </div>;";"";" <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>";"";" <p className="text-gray-300 mb-4">{feature.description}</p>;";"";" <ul className="space-y-2">;"";" {feature.benefits.map((benefit, benefitIndex) => (";"";" <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">";"";" <CheckCircle className="w-4 h-4 text-cyan-400" />; <span>{benefit}</span>; </li>; ))}; </ul>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 bg-gray-800/20 relative">";"";" <div className="container mx-auto px-4">;"";" <motion.div ";"";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Our Service Categories;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; We provide comprehensive IT infrastructure management across all critical areas;" to ensure your business continuity and success.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;";" {services.map((service, index) => (;";" <motion.div;"";" key={service.category}";"";" className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.6, delay: index * 0.1 }};";" viewport={{ once: true   }};"";" >";"";" <h3 className="text-xl font-semibold text-white mb-4 text-center">;";" {service.category};";" </h3>;";"";" <ul className="space-y-2">;"";" {service.items.map((item, itemIndex) => (";"";" <li key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-300">";"";" <ArrowRight className="w-4 h-4 text-cyan-400" />; <span>{item}</span>; </li>; ))}; </ul>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 relative">";"";" <div className="container mx-auto px-4">;"";" <motion.div ";"";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Supported Technologies;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Our team is certified and experienced with the latest technologies and platforms;" to provide you with the best possible service.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">;";" {technologies.map((tech, index) => (;";" <motion.div;"";" key={index}";"";" className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 text-center hover:border-cyan-500/30 transition-all duration-300"; initial={{ opacity: 0, scale: 0.8 }}; whileInView={{ opacity: 1, scale: 1 }};" transition={{ duration: 0.4, delay: index * 0.05 }};";" viewport={{ once: true   }};";" whileHover={{ scale: 1.05   }};"";" >";"";" <Server className="w-8 h-8 text-cyan-400 mx-auto mb-2" />";"";" <p className="text-sm text-gray-300">{tech}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 bg-gray-800/20 relative">";"";" <div className="container mx-auto px-4">;"";" <motion.div ";"";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Proven Results & Benefits;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">;" Join hundreds of companies that have transformed their IT operations with our services.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;";" {benefits.map((benefit, index) => (;";" <motion.div;"";" key={benefit.title}";"";" className="text-center"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.6, delay: index * 0.1 }};";" viewport={{ once: true   }};"";" >";"";" <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">";"";" <benefit.icon className="w-8 h-8 text-white" />;";" </div>;";"";" <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>";"";" <p className="text-gray-300">{benefit.description}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 relative">";"";" <div className="container mx-auto px-4">;"";" <motion.div ";"";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Flexible Service Plans;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">;" Choose the plan that best fits your infrastructure needs and scale as you grow.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">; {pricingTiers.map((tier, index) => (; <motion.div; key={tier.name}; className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${; tier.popular; ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent'; : 'border-gray-700/50'; }`}; initial={{ opacity: 0, y: 30 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.6, delay: index * 0.1 }};" viewport={{ once: true   }};";" whileHover={{ y: -5, scale: 1.02 }};";" >;"";" {tier.popular && (";"";" <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">";"";" <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">; Most Popular;" </span>;";" </div>;";" )};";"";" <div className="text-center mb-8">";"";" <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>";"";" <div className="flex items-baseline justify-center mb-2">";"";" <span className="text-4xl font-bold text-white">{tier.price}</span>";"";" <span className="text-gray-400 ml-1">{tier.period}</span>;"";" </div>";"";" <p className="text-gray-300">{tier.description}</p>;";" </div>;";"";" <ul className="space-y-3 mb-8">;"";" {tier.features.map((feature, featureIndex) => (";"";" <li key={featureIndex} className="flex items-center space-x-3">";"";" <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />";"";" <span className="text-gray-300">{feature}</span>; </li>; ))}; </ul>; <motion.button; className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${; tier.popular; ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'; : 'bg-gray-700 text-white hover:bg-gray-600'; }`}; whileHover={{ scale: 1.02   }}; whileTap={{ scale: 0.98   }}; >; {tier.cta}; </motion.button>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 bg-gray-800/20 relative">";"";" <div className="container mx-auto px-4">;"";" <motion.div ";"";" className="text-center max-w-4xl mx-auto"; initial={{ opacity: 0, y: 30 }};" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};";" viewport={{ once: true   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-6">;";" Ready to Optimize Your Infrastructure?;"";" </h2>";"";" <p className="text-xl text-gray-300 mb-8">;" Let our team of experts take care of your IT infrastructure so you can focus on your business.;";" Get started with a free assessment today.;";" </p>;";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <motion.button";"";" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"; whileHover={{ scale: 1.05   }}; whileTap={{ scale: 0.95   }};" >;";" Get Free Assessment;";" </motion.button>;"";" <motion.button";"";" className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"; whileHover={{ scale: 1.05   }}; whileTap={{ scale: 0.95   }};" >;";" Schedule Consultation;";" </motion.button>;"";" <motion.button";"";" className="px-8 py-4 border border-gray-500/30 text-gray-300 font-semibold rounded-lg hover:bg-gray-500/10 transition-all duration-300"; whileHover={{ scale: 1.05   }}; whileTap={{ scale: 0.95   }}; >;" Contact Sales;";" </motion.button>;";" </div>;";"";" <p className="text-sm text-gray-400 mt-6">; Free assessment • No commitment required • Expert consultation included; </p>; </motion.div>; </div>; </section>; </div>; </>;" );";" };";" ;"";" export default ITInfrastructureManagement;";"";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function ItInfrastructureManagement() {
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
            AI-Powered It Infrastructure Management Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">It Infrastructure Management Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your it infrastructure management operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced It Infrastructure Management Features</h2>
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
                <p className="text-gray-600">Comprehensive it infrastructure management solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your It Infrastructure Management?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered it infrastructure management platform today.
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
