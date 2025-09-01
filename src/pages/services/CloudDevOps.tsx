import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Brain, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Clock, 
  DollarSign,
  Database,
  BarChart3,
  Zap,
  Globe,
  Lock,
  Eye,
  Activity,
  TrendingUp,
  AlertTriangle,
  FileText,
  Network,
  Server,
  Smartphone,
  GitBranch,
  Code,
  Settings,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function CloudDevOps() {
  const features = [
    { icon: Cloud, title: 'Cloud Infrastructure', description: 'Multi-cloud infrastructure design and management' },
    { icon: GitBranch, title: 'CI/CD Pipelines', description: 'Automated continuous integration and deployment' },
    { icon: Code, title: 'Infrastructure as Code', description: 'Terraform, CloudFormation, and Ansible automation' },
    { icon: Database, title: 'Container Orchestration', description: 'Kubernetes and Docker container management' },
    { icon: Shield, title: 'DevSecOps', description: 'Security integrated into the development pipeline' },
    { icon: Zap, title: 'Monitoring & Alerting', description: 'Comprehensive monitoring and observability solutions' }
  ];

  const benefits = [
    { icon: CheckCircle, title: 'Faster Deployment', description: 'Deploy applications 10x faster with automation' },
    { icon: DollarSign, title: 'Cost Optimization', description: 'Reduce cloud costs by 30-50%' },
    { icon: Users, title: 'Improved Collaboration', description: 'Better team collaboration and productivity' },
    { icon: Shield, title: 'Enhanced Security', description: 'Security built into every stage of development' },
    { icon: Zap, title: 'Scalable Infrastructure', description: 'Infrastructure that scales with your business' },
    { icon: TrendingUp, title: 'Better Reliability', description: '99.9% uptime with automated failover' }
  ];

  const devopsServices = [
    { title: 'CI/CD Automation', description: 'Automated build, test, and deployment pipelines', icon: GitBranch },
    { title: 'Infrastructure Management', description: 'Cloud infrastructure provisioning and management', icon: Cloud },
    { title: 'Container Management', description: 'Docker and Kubernetes orchestration', icon: Code },
    { title: 'Monitoring & Logging', description: 'Application and infrastructure monitoring', icon: Activity },
    { title: 'Security & Compliance', description: 'DevSecOps and compliance automation', icon: Shield },
    { title: 'Performance Optimization', description: 'Application and infrastructure optimization', icon: TrendingUp }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$1,800',
      period: 'monthly',
      description: 'Perfect for small teams and startups',
      features: ['Basic CI/CD pipelines', 'Cloud infrastructure setup', 'Monthly support', 'Basic monitoring', 'Security review'],
      cta: 'Get Started',
      popular: false
    },
    {
      plan: 'Professional',
      price: '$4,200',
      period: 'monthly',
      description: 'Ideal for growing teams and businesses',
      features: ['Advanced CI/CD automation', 'Multi-cloud management', 'Priority support', 'Advanced monitoring', 'Security automation', 'Custom integrations'],
      cta: 'Get Started',
      popular: true
    },
    {
      plan: 'Enterprise',
      price: 'Custom',
      period: 'monthly',
      description: 'For large organizations with complex infrastructure',
      features: ['Full DevOps transformation', 'Custom automation', '24/7 dedicated support', 'White-label options', 'API access', 'Custom development'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              Cloud DevOps
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 bg-clip-text text-transparent mb-6">
              Cloud DevOps
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Accelerate your development with modern DevOps practices and cloud infrastructure automation. 
              Deploy faster, scale efficiently, and maintain high reliability with our expert DevOps solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Your Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border border-blue-400/50 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced DevOps Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our DevOps platform combines cutting-edge automation tools with cloud expertise 
              to deliver seamless development and deployment workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-4 inline-block">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud DevOps?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver measurable improvements in development velocity, infrastructure efficiency, and operational reliability 
              through our proven DevOps practices and cloud expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-4 inline-block">
                  <benefit.icon className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive DevOps Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our DevOps platform provides end-to-end solutions to streamline your development 
              and operations processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devopsServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-blue-400/30 transition-all duration-300 text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-4 inline-block">
                  <service.icon className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the DevOps plan that best fits your team's needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border p-8 ${
                  plan.popular 
                    ? 'border-blue-400/50 ring-2 ring-blue-400/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-semibold rounded-full">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-1">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.plan === 'Enterprise' ? '/contact' : '/request-quote'}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white transform hover:scale-105 shadow-lg hover:shadow-blue-500/25'
                      : 'border border-blue-400/50 text-blue-400 hover:bg-blue-400/10'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 rounded-3xl p-12 border border-blue-400/20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cloud DevOps platform can accelerate your development, 
              improve infrastructure efficiency, and enhance operational reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-blue-400/50 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
;
export { CloudDevOps };
export default CloudDevOps;
