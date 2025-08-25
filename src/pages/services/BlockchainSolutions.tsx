import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Link as LinkIcon, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Lock,
  Users,
  TrendingUp,
  Database,
  Network,
  Calendar,
  DollarSign,
  Target,
  Building,
  Cpu,
  Globe,
  FileText,
  Key,
  Eye,
  Code
} from 'lucide-react';

const BlockchainSolutions: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart Contract Development",
      description: "Advanced smart contract development with security-first approach and comprehensive testing.",
      benefits: ["Secure contracts", "Automated testing", "Gas optimization"]
    },
    {
      icon: Shield,
      title: "DeFi Platform Development",
      description: "Decentralized finance platforms that enable secure, transparent financial services.",
      benefits: ["Liquidity pools", "Yield farming", "Staking mechanisms"]
    },
    {
      icon: BarChart3,
      title: "Blockchain Analytics",
      description: "Comprehensive analytics and monitoring tools for blockchain networks and applications.",
      benefits: ["Transaction tracking", "Performance metrics", "Risk assessment"]
    },
    {
      icon: Zap,
      title: "Cross-Chain Solutions",
      description: "Interoperability solutions that connect different blockchain networks seamlessly.",
      benefits: ["Multi-chain support", "Bridge development", "Asset transfer"]
    }
  ];

  const services = [
    {
      title: "Smart Contracts",
      description: "Secure, audited smart contracts for various blockchain applications and use cases.",
      icon: Code,
      features: ["Contract development", "Security auditing", "Testing & deployment", "Maintenance"]
    },
    {
      title: "DeFi Platforms",
      description: "Decentralized finance applications including DEXs, lending platforms, and yield aggregators.",
      icon: DollarSign,
      features: ["DEX development", "Lending protocols", "Yield farming", "Staking platforms"]
    },
    {
      title: "NFT Marketplaces",
      description: "Non-fungible token marketplaces with advanced features and user experience.",
      icon: Star,
      features: ["Marketplace development", "NFT minting", "Trading features", "Royalty systems"]
    },
    {
      title: "Enterprise Blockchain",
      description: "Private blockchain solutions for enterprise applications and supply chain management.",
      icon: Building,
      features: ["Private networks", "Consensus mechanisms", "Permission management", "Integration"]
    }
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      value: "99.9%",
      description: "Immutable and tamper-proof blockchain security"
    },
    {
      title: "Cost Reduction",
      value: "40%",
      description: "Lower transaction costs and operational expenses"
    },
    {
      title: "Transparency",
      value: "100%",
      description: "Complete transparency in all transactions and operations"
    },
    {
      title: "Automation",
      value: "80%",
      description: "Automated processes through smart contracts"
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Revolutionary financial applications including DeFi, payments, and asset management.",
      icon: DollarSign,
      features: ["DeFi protocols", "Payment systems", "Asset management", "Insurance"]
    },
    {
      title: "Supply Chain",
      description: "Transparent and efficient supply chain management with blockchain tracking.",
      icon: Network,
      features: ["Product tracking", "Quality assurance", "Compliance", "Audit trails"]
    },
    {
      title: "Healthcare",
      description: "Secure patient data management and pharmaceutical supply chain tracking.",
      icon: Shield,
      features: ["Patient records", "Drug tracking", "Clinical trials", "Data sharing"]
    },
    {
      title: "Real Estate",
      description: "Tokenized real estate assets and automated property management.",
      icon: Building,
      features: ["Asset tokenization", "Property management", "Rental agreements", "Investment"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$799",
      period: "/month",
      description: "Perfect for small blockchain projects and startups",
      features: [
        "Basic smart contract development",
        "Security auditing",
        "Testing & deployment",
        "Email support",
        "Up to 3 contracts"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,599",
      period: "/month",
      description: "Ideal for growing blockchain companies and DeFi projects",
      features: [
        "Advanced smart contracts",
        "DeFi platform development",
        "Cross-chain solutions",
        "Priority support",
        "Unlimited contracts",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,199",
      period: "/month",
      description: "Comprehensive solution for large blockchain enterprises",
      features: [
        "Custom blockchain networks",
        "Full platform development",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "Custom training & onboarding",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <LinkIcon className="w-4 h-4 mr-2" />
              Blockchain & DeFi Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build the Future with
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Blockchain Technology</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge blockchain solutions. From DeFi platforms to enterprise blockchain, 
              we build secure, scalable, and innovative applications that drive the future of decentralized technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-400">Security Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-400">Transparency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-400">Automation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Blockchain Features That Drive Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our blockchain development platform combines cutting-edge technology with proven security practices 
              to deliver exceptional results for decentralized applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-blue-500/20 mr-4">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Blockchain Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From smart contracts to DeFi platforms, our blockchain development services cover every aspect of decentralized technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-blue-500/20 inline-block mb-4">
                  <service.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-1 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Blockchain for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our blockchain solutions are designed to transform industries and create new business opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-blue-500/20 inline-block mb-4">
                  <useCase.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1 text-sm">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the real impact of blockchain technology on your business operations and bottom line.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your blockchain project's needs and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-500/50 scale-105' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                      : 'border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking companies that have already transformed their business with blockchain technology. 
            Start building tomorrow's decentralized applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainSolutions;