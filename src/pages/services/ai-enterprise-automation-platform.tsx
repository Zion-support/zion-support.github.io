import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Database,
  Network,
  Lock,
  Cloud,
  Workflow,
  Bot,
  Sparkles,
  Target,
  BarChart3,
  Settings,
  Globe,
  Rocket
} from 'lucide-react';

export default function AIEnterpriseAutomationPlatform() {
  const features = [
    {
      title: "Intelligent Process Automation",
      description: "AI-powered workflow automation that learns and optimizes business processes",
      icon: Workflow,
      benefits: ["Reduce manual tasks by 80%", "Improve process efficiency", "Real-time optimization"]
    },
    {
      title: "Multi-Agent Coordination",
      description: "Advanced AI agents working together to solve complex business challenges",
      icon: Bot,
      benefits: ["Collaborative problem solving", "Scalable operations", "Intelligent decision making"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast business trends and identify opportunities before they arise",
      icon: BarChart3,
      benefits: ["Data-driven insights", "Risk mitigation", "Strategic planning"]
    },
    {
      title: "Enterprise Integration",
      description: "Seamless integration with existing enterprise systems and workflows",
      icon: Database,
      benefits: ["Legacy system compatibility", "API-first architecture", "Real-time synchronization"]
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Up to 10 automated workflows",
        "Basic AI analytics",
        "Email support",
        "Standard integrations"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      plan: "Professional",
      price: "$5,000",
      period: "/month",
      description: "Ideal for growing enterprises",
      features: [
        "Up to 50 automated workflows",
        "Advanced AI analytics",
        "Priority support",
        "Custom integrations",
        "Multi-user access"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$12,000",
      period: "/month",
      description: "For large-scale operations",
      features: [
        "Unlimited workflows",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security",
        "Custom training"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Automate production planning, quality control, and supply chain management",
      benefits: ["30% cost reduction", "Improved quality", "Faster time-to-market"]
    },
    {
      industry: "Healthcare",
      description: "Streamline patient care workflows and administrative processes",
      benefits: ["Better patient outcomes", "Reduced administrative burden", "Compliance automation"]
    },
    {
      industry: "Financial Services",
      description: "Automate compliance reporting, risk assessment, and customer onboarding",
      benefits: ["Regulatory compliance", "Risk mitigation", "Improved customer experience"]
    },
    {
      industry: "Retail",
      description: "Optimize inventory management and customer service operations",
      benefits: ["Inventory optimization", "Enhanced customer service", "Operational efficiency"]
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="AI Enterprise Automation Platform | Zion Tech Group"
        description="Transform your business with our AI-powered enterprise automation platform. Streamline workflows, boost productivity, and drive innovation with intelligent automation solutions."
        keywords="AI automation, enterprise automation, workflow automation, business process automation, AI platform"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-blue to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Enterprise Solution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Enterprise Automation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                Platform
              </span>
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your business operations with intelligent automation. Our AI platform learns, adapts, 
              and optimizes your workflows for maximum efficiency and productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Enterprise Success
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with enterprise-grade reliability to deliver 
              unprecedented automation capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-zion-slate-light mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI automation features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <p className="text-zion-slate-light mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                    : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI automation platform delivers measurable results across diverse industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-zion-slate-light mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <TrendingUp className="w-4 h-4 text-zion-cyan" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join hundreds of enterprises already using our AI automation platform to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}