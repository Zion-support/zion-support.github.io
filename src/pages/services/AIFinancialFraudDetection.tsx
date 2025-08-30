import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';

const AIFinancialFraudDetection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Advanced machine learning models that detect fraud patterns with 99.2% accuracy using behavioral analysis and real-time transaction monitoring."
    },
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description: "24/7 transaction monitoring with sub-second response times, detecting and blocking fraudulent activities before they impact your business."
    },
    {
      icon: Shield,
      title: "Multi-Layer Security",
      description: "Comprehensive fraud prevention combining AI detection, rule-based systems, and human expertise for maximum protection."
    },
    {
      icon: Target,
      title: "Adaptive Learning",
      description: "Self-improving AI models that continuously learn from new fraud patterns and adapt to evolving threats in real-time."
    }
  ];

  const benefits = [
    "Reduce fraud losses by 85-95%",
    "Improve detection accuracy by 40%",
    "Reduce false positives by 60%",
    "Save $100K+ annually on fraud prevention",
    "Comply with PCI DSS, SOC 2, and GDPR requirements"
  ];

  const useCases = [
    "Credit Card Fraud",
    "Banking & Financial Services",
    "E-commerce & Retail",
    "Insurance Claims",
    "Healthcare Billing",
    "Cryptocurrency Transactions"
  ];

  const integrations = [
    "Stripe, PayPal, Square",
    "Visa, Mastercard, American Express",
    "Banking APIs (Plaid, Yodlee)",
    "QuickBooks, Xero, NetSuite",
    "Salesforce, HubSpot, Pipedrive"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$799",
      period: "/month",
      features: ["Up to 10K transactions/month", "Basic fraud detection", "Email alerts", "Standard support"],
      popular: false
    },
    {
      plan: "Professional",
      price: "$1,999",
      period: "/month",
      features: ["Up to 100K transactions/month", "Advanced AI models", "Real-time blocking", "Priority support", "API access"],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited transactions", "Custom AI models", "White-label solution", "Dedicated support", "SLA guarantees"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="AI Financial Fraud Detection Platform - Zion Tech Group"
        description="Protect your business with AI-powered fraud detection. Detect and prevent financial fraud with 99.2% accuracy, reduce losses by 85-95%, and ensure compliance."
        keywords="fraud detection, AI security, financial fraud prevention, machine learning security, transaction monitoring, fraud analytics"
        canonical="https://ziontechgroup.com/services/ai-financial-fraud-detection"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-slate-800 to-orange-900/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Fraud Prevention Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              AI Financial Fraud Detection
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Stop financial fraud before it happens. Our AI platform detects fraud with 99.2% accuracy, reducing losses by 85-95% and ensuring regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-cyan-400 font-semibold">
                <Star className="w-5 h-5 mr-2 fill-current" />
                4.9/5 Rating
              </div>
              <div className="flex items-center text-green-400 font-semibold">
                <TrendingUp className="w-5 h-5 mr-2" />
                99.2% Accuracy
              </div>
              <div className="flex items-center text-blue-400 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                Real-time Detection
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Advanced Security Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Cutting-edge AI technology designed to protect your business from sophisticated financial fraud
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-red-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Proven Results
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform delivers measurable security improvements that directly protect your bottom line
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-slate-300 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive fraud protection solutions for various financial and business sectors
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:border-purple-500 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <p className="text-slate-300 font-medium">{useCase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with your existing payment processors, banking systems, and business tools
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center hover:border-indigo-500 transition-colors"
              >
                <p className="text-slate-300 text-sm font-medium">{integration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your transaction volume and security requirements
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-red-500 shadow-lg shadow-red-500/20' 
                    : 'border-slate-700'
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
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Stop Financial Fraud?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Join 200+ companies that have protected their business with our AI-powered fraud detection platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-6 text-slate-300">
              <div>
                <DollarSign className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="font-semibold">Starting at $799/month</p>
                <p className="text-sm">No setup fees, cancel anytime</p>
              </div>
              <div>
                <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="font-semibold">Setup in 24 hours</p>
                <p className="text-sm">Quick integration with your systems</p>
              </div>
              <div>
                <Shield className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="font-semibold">Enterprise Security</p>
                <p className="text-sm">PCI DSS, SOC 2, GDPR compliant</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-slate-800 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-4">
                <strong>Contact:</strong> +1 302 464 0950 | kleber@ziontechgroup.com
              </p>
              <p className="text-slate-300">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialFraudDetection;