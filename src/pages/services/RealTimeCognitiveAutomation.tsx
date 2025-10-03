import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Brain, Zap, CheckCircle, TrendingUp, DollarSign, Rocket } from "lucide-react";

const RealTimeCognitiveAutomation = () => {
  return (
    <>
      <Helmet>
        <title>Real-Time Cognitive Automation Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business operations with AI-powered workflows that deliver instant decision-making, self-learning automation, and 99.97% accuracy." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-950">
        <Header />
        
        <article className="max-w-7xl mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/services"
              className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold">
                  🤖 AI Automation
                </span>
                <span className="text-zion-slate-light">Starting at $7,999/month</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Real-Time Cognitive Automation Platform
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mt-2">
                  Transform Business Operations with Intelligent Automation
                </span>
              </h1>

              <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
                Revolutionize your business operations with AI-powered workflows that deliver instant decision-making, self-learning automation, and 99.97% accuracy. Achieve 87% cost reduction and 10x productivity gains.
              </p>

              {/* Key Metrics Banner */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.97%</div>
                  <div className="text-zion-slate-light">Accuracy Rate</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">87%</div>
                  <div className="text-zion-slate-light">Cost Reduction</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10x</div>
                  <div className="text-zion-slate-light">Productivity Gains</div>
                </div>
              </div>
            </div>

            {/* Platform Capabilities */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-purple-400" />
                Platform Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Intelligent Document Processing",
                    description: "99.8% accuracy across PDF, images, scanned documents, and handwriting. Support for 127 languages.",
                    icon: "📄",
                  },
                  {
                    title: "Cognitive Decision Engine",
                    description: "AI-powered decision-making with 94% prediction accuracy. Multi-criteria analysis in real-time.",
                    icon: "🎯",
                  },
                  {
                    title: "Workflow Orchestration",
                    description: "Visual no-code designer with smart routing and autonomous exception handling. 10x faster deployment.",
                    icon: "🔄",
                  },
                  {
                    title: "Natural Language Understanding",
                    description: "98% accuracy in intent recognition. Process and respond to human language with contextual understanding.",
                    icon: "💬",
                  },
                  {
                    title: "Predictive Analytics",
                    description: "Process mining and bottleneck detection. Anticipate issues before they occur with predictive maintenance.",
                    icon: "📊",
                  },
                  {
                    title: "Enterprise Integration",
                    description: "Pre-built connectors for 500+ systems including SAP, Salesforce, ServiceNow, and custom APIs.",
                    icon: "🔌",
                  }
                ].map((capability, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all">
                    <div className="text-4xl mb-4">{capability.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                    <p className="text-zion-slate-light">{capability.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Industry Solutions */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-6">🏭 Industry Solutions</h2>
              <div className="space-y-6">
                {[
                  {
                    industry: "Financial Services",
                    description: "Automated loan processing, fraud detection, and compliance monitoring with 96% accuracy.",
                    highlights: ["Loan processing: 96% faster", "Fraud detection: 97% accuracy", "KYC/AML: 100% coverage"]
                  },
                  {
                    industry: "Healthcare",
                    description: "Patient data processing, medical coding, and appointment scheduling automation.",
                    highlights: ["Claims processing: 92% auto-adjudication", "Medical coding: 99.1% accuracy", "Patient scheduling: 100% automated"]
                  },
                  {
                    industry: "Manufacturing",
                    description: "Quality control, predictive maintenance, and supply chain optimization.",
                    highlights: ["Quality control: 99.7% defect detection", "Inventory: 98% forecast accuracy", "Maintenance: 84% failures prevented"]
                  },
                  {
                    industry: "Retail & E-commerce",
                    description: "Order processing, customer service, and inventory management automation.",
                    highlights: ["Order fulfillment: 95% faster", "Customer service: 99% resolution rate", "Inventory: 98% accuracy"]
                  }
                ].map((solution, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/30">
                    <h3 className="text-2xl font-bold text-white mb-3">{solution.industry}</h3>
                    <p className="text-zion-slate-light mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-zion-slate-light">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                💰 Pricing Plans
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Professional",
                    price: "$7,999",
                    period: "/month",
                    features: ["50,000 transactions/month", "10 automated workflows", "Standard integrations", "Email support", "99.5% SLA"]
                  },
                  {
                    name: "Enterprise",
                    price: "$19,999",
                    period: "/month",
                    popular: true,
                    features: ["250,000 transactions/month", "50 automated workflows", "Advanced integrations", "24/7 support", "99.9% SLA"]
                  },
                  {
                    name: "Custom",
                    price: "Contact Us",
                    period: "",
                    features: ["Unlimited transactions", "Custom workflows", "White-label solution", "Dedicated support", "99.99% SLA"]
                  }
                ].map((pkg, index) => (
                  <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border ${pkg.popular ? 'border-purple-500/50 ring-2 ring-purple-500/30' : 'border-zion-cyan/30'}`}>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                      <div className="text-4xl font-bold text-zion-cyan">{pkg.price}<span className="text-lg text-zion-slate-light">{pkg.period}</span></div>
                    </div>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-zion-slate-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Launch Special */}
            <section className="mb-20">
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">🚀 October 2025 Launch Special</h3>
                <p className="text-zion-slate-light mb-6">
                  Get 30% off your first year and free setup worth $15,000. Limited time offer for early adopters.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zion-slate-light">Free implementation and training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zion-slate-light">30-day money-back guarantee</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Zap className="w-5 h-5" />
                  Start Your Free Trial
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Operations?</h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Join 500+ enterprises already using our Real-Time Cognitive Automation Platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  <Zap className="w-5 h-5" />
                  Schedule Demo
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Get Custom Quote
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
};

export default RealTimeCognitiveAutomation;