import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  ShoppingCart, 
  Zap, 
  Users, 
  Globe, 
  Database,
  Network,
  Lock,
  Eye,
  Target,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Code,
  BarChart3,
  CreditCard,
  Settings
} from 'lucide-react';

const MicroSaaSPlatformElite: React.FC = () => {
  const features = [
    {
      icon: Rocket,
      title: "Rapid SaaS Launch",
      description: "Launch your micro-SaaS in 30 days with our proven templates and automation tools"
    },
    {
      icon: ShoppingCart,
      title: "Built-in Payment Processing",
      description: "Integrated Stripe, PayPal, and crypto payments with automated billing and subscriptions"
    },
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "Smart workflows, customer support automation, and intelligent business process optimization"
    },
    {
      icon: Users,
      title: "Multi-Tenant Architecture",
      description: "Scalable platform supporting unlimited customers with role-based access control"
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Deploy to multiple regions with CDN, load balancing, and localized compliance"
    },
    {
      icon: Database,
      title: "Enterprise Database",
      description: "PostgreSQL, MongoDB, and Redis with automated backups and disaster recovery"
    }
  ];

  const pricing = [
    {
      name: "Micro SaaS Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for solo entrepreneurs and small teams",
      features: [
        "Up to 1,000 customers",
        "Basic SaaS templates",
        "Standard payment processing",
        "Email support",
        "Basic analytics",
        "SSL certificates"
      ]
    },
    {
      name: "Micro SaaS Pro",
      price: "$5,500",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 10,000 customers",
        "Advanced SaaS templates",
        "Multi-payment gateways",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Micro SaaS Enterprise",
      price: "$12,000",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited customers",
        "Custom SaaS development",
        "White-label platform",
        "24/7 dedicated support",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees"
      ]
    }
  ];

  const platformFeatures = [
    {
      title: "SaaS Templates & Components",
      description: "Pre-built templates for common SaaS applications including CRM, project management, e-commerce, and more"
    },
    {
      title: "Customer Management System",
      description: "Complete customer lifecycle management with onboarding, support, and retention tools"
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive business intelligence with real-time dashboards and automated reporting"
    },
    {
      title: "Integration Hub",
      description: "Connect with 500+ third-party services including CRMs, marketing tools, and business applications"
    }
  ];

  const saasTemplates = [
    "CRM & Sales Management",
    "Project Management",
    "E-commerce Platform",
    "Learning Management System",
    "HR & Recruitment",
    "Accounting & Finance",
    "Marketing Automation",
    "Customer Support",
    "Inventory Management",
    "Real Estate Management"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                <Rocket className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro-SaaS Platform Elite
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Launch and scale your micro-SaaS business with our comprehensive platform. 
              Everything you need to build, launch, and grow your SaaS business in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                Launch Your SaaS
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-zion-slate text-white font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call SaaS Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete SaaS Platform Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our platform provides everything you need to build, launch, and scale your micro-SaaS business 
              without the complexity of building from scratch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate p-8 rounded-xl border border-zion-slate-light hover:border-green-500 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Platform Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Go beyond basic SaaS functionality with our advanced platform features designed 
              to accelerate your business growth and success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark p-8 rounded-xl border border-zion-slate-light"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Templates Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready-to-Use SaaS Templates
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose from our library of proven SaaS templates and customize them to fit your specific 
              business needs and market requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {saasTemplates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate p-6 rounded-xl border border-zion-slate-light text-center"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg w-fit mx-auto mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{template}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent SaaS Platform Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the platform plan that fits your business needs. All plans include our core SaaS platform 
              and 24/7 customer support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-slate-dark p-8 rounded-xl border-2 ${
                  plan.popular 
                    ? 'border-green-500 shadow-2xl shadow-green-500/25' 
                    : 'border-zion-slate-light'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Launch Your SaaS?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get in touch with our SaaS platform experts to discuss how we can help you build, 
              launch, and scale your micro-SaaS business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call SaaS Team</h3>
              <a 
                href="tel:+13024640950" 
                className="text-zion-slate-light hover:text-white transition-colors duration-300"
              >
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-fit mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email SaaS Team</h3>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-zion-slate-light hover:text-white transition-colors duration-300"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit SaaS Center</h3>
              <p className="text-zion-slate-light">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://ziontechgroup.com/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Platform Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zion-slate-light">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zion-slate-light mb-4">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://ziontechgroup.com" 
              className="text-zion-slate-light hover:text-white transition-colors duration-300"
            >
              Visit Website
              <ExternalLink className="inline ml-1 h-4 w-4" />
            </a>
            <a 
              href="https://ziontechgroup.com/privacy" 
              className="text-zion-slate-light hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="https://ziontechgroup.com/terms" 
              className="text-zion-slate-light hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MicroSaaSPlatformElite;