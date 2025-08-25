import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Activity, 
  BarChart3, 
  Cpu, 
  Database, 
  Globe, 
  Shield, 
  TrendingUp, 
  Zap,
  Target,
  Cloud,
  Smartphone,
  Wifi,
  Gauge,
  BarChart,
  Monitor,
  AlertTriangle
} from 'lucide-react';

export default function IoTDataAnalytics() {
  const solutions = [
    {
      title: "Real-Time Data Processing",
      description: "Process and analyze IoT data streams in real-time for instant insights and decision making",
      icon: Activity,
      features: ["Stream processing", "Real-time analytics", "Instant alerts", "Live dashboards"]
    },
    {
      title: "Predictive Maintenance",
      description: "Use machine learning to predict equipment failures and optimize maintenance schedules",
      icon: TrendingUp,
      features: ["Failure prediction", "Maintenance optimization", "Cost reduction", "Uptime improvement"]
    },
    {
      title: "Smart City Analytics",
      description: "Comprehensive analytics for urban infrastructure, traffic, and public services",
      icon: Globe,
      features: ["Traffic optimization", "Utility management", "Public safety", "Environmental monitoring"]
    },
    {
      title: "Industrial IoT (IIoT)",
      description: "Advanced analytics for manufacturing, energy, and industrial operations",
      icon: Cpu,
      features: ["Production optimization", "Energy efficiency", "Quality control", "Supply chain analytics"]
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Production optimization, quality control, and predictive maintenance",
      icon: Cpu,
      benefits: ["30% efficiency increase", "25% cost reduction", "90% uptime improvement"]
    },
    {
      name: "Healthcare",
      description: "Patient monitoring, medical device analytics, and facility management",
      icon: Shield,
      benefits: ["Improved patient outcomes", "Reduced medical errors", "Better resource utilization"]
    },
    {
      name: "Retail",
      description: "Customer behavior analysis, inventory optimization, and store performance",
      icon: BarChart3,
      benefits: ["Enhanced customer experience", "Optimized inventory", "Increased sales"]
    },
    {
      name: "Energy",
      description: "Grid optimization, renewable energy management, and consumption analytics",
      icon: Zap,
      benefits: ["Energy efficiency", "Cost savings", "Sustainability goals"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: 499,
      period: "month",
      description: "Basic IoT analytics for small deployments",
      features: [
        "Up to 100 devices",
        "Basic analytics dashboard",
        "Standard integrations",
        "Email support",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: 1299,
      period: "month",
      description: "Advanced analytics for growing IoT deployments",
      features: [
        "Up to 1000 devices",
        "Advanced analytics",
        "Machine learning models",
        "Priority support",
        "Custom dashboards",
        "API access",
        "Data export"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: 2999,
      period: "month",
      description: "Full-scale IoT analytics for large organizations",
      features: [
        "Unlimited devices",
        "Custom ML models",
        "Advanced security",
        "24/7 dedicated support",
        "Custom development",
        "SLA guarantees",
        "On-premise options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const features = [
    {
      title: "Edge Computing",
      description: "Process data at the edge for faster response times and reduced bandwidth usage",
      icon: Cpu,
      benefits: ["Low latency", "Bandwidth optimization", "Offline operation", "Real-time processing"]
    },
    {
      title: "Cloud Integration",
      description: "Seamless integration with cloud platforms for scalable data storage and processing",
      icon: Cloud,
      benefits: ["Scalable storage", "Global access", "Advanced analytics", "Cost optimization"]
    },
    {
      title: "Security & Privacy",
      description: "Enterprise-grade security with end-to-end encryption and privacy protection",
      icon: Shield,
      benefits: ["Data encryption", "Access control", "Compliance", "Audit trails"]
    },
    {
      title: "Mobile Access",
      description: "Access your IoT analytics anywhere with responsive mobile applications",
      icon: Smartphone,
      benefits: ["Mobile dashboards", "Push notifications", "Offline access", "Cross-platform"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="IoT Data Analytics - Zion Tech Group" 
        description="Transform your IoT data into actionable insights with advanced analytics, machine learning, and real-time processing capabilities."
        keywords="IoT analytics, IoT data processing, predictive maintenance, smart city analytics, industrial IoT, real-time analytics"
        canonical="https://ziontechgroup.com/services/iot-data-analytics"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IoT Data Analytics
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              From Data to Intelligence
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Harness the power of IoT data with advanced analytics, machine learning, and real-time processing 
            to drive intelligent decision-making and operational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose IoT Data Analytics?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Transform raw IoT data into actionable intelligence that drives business value and competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Real-Time Insights
              </h3>
              <p className="text-zion-slate">
                Get instant insights from your IoT devices with real-time data processing and analytics
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Predictive Analytics
              </h3>
              <p className="text-zion-slate">
                Use machine learning to predict trends, failures, and opportunities before they happen
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-green to-zion-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Actionable Intelligence
              </h3>
              <p className="text-zion-slate">
                Convert complex data into clear, actionable insights that drive business decisions
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-orange to-zion-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Enterprise Security
              </h3>
              <p className="text-zion-slate">
                Built-in security and compliance features to protect your data and operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Comprehensive IoT Analytics Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              End-to-end IoT analytics solutions designed to meet the unique needs of different industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {solution.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Tailored IoT analytics solutions designed for the unique requirements of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-zion-slate mb-4">
                  {industry.description}
                </p>
                <ul className="text-left space-y-1">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-zion-slate flex items-center">
                      <Target className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Powerful features designed to handle the complexity and scale of modern IoT deployments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Choose the plan that best fits your IoT analytics needs and scale as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 ${
                tier.popular ? 'border-zion-cyan scale-105' : 'border-zion-blue-light'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">{tier.name}</h3>
                  <p className="text-zion-slate mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-zion-cyan">
                    ${tier.price}
                    <span className="text-lg text-zion-slate font-normal">/{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate">
                      <div className="w-5 h-5 bg-zion-cyan rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white' 
                    : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                }`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Built on cutting-edge technologies for scalable, secure, and intelligent IoT analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Gauge className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Multi-Protocol Support
              </h3>
              <p className="text-zion-slate">
                Support for MQTT, CoAP, HTTP, and custom IoT protocols
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Machine Learning
              </h3>
              <p className="text-zion-slate">
                Advanced ML models for predictive analytics and anomaly detection
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-green to-zion-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Real-Time Processing
              </h3>
              <p className="text-zion-slate">
                Stream processing engines for real-time data analysis
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-orange to-zion-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Edge Computing
              </h3>
              <p className="text-zion-slate">
                Edge processing capabilities for low-latency analytics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Proven Business Impact
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-12">
            Our IoT analytics solutions deliver measurable business value and competitive advantages.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-zion-cyan mb-2">25-40%</div>
              <div className="text-white font-semibold mb-2">Operational Efficiency</div>
              <p className="text-zion-slate-light text-sm">
                Significant improvement in operational efficiency and productivity
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-zion-cyan mb-2">30-50%</div>
              <div className="text-white font-semibold mb-2">Cost Reduction</div>
              <p className="text-zion-slate-light text-sm">
                Substantial reduction in operational costs and maintenance expenses
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-zion-cyan mb-2">90%</div>
              <div className="text-white font-semibold mb-2">Predictive Accuracy</div>
              <p className="text-zion-slate-light text-sm">
                High accuracy in predicting failures and optimizing operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-zion-blue-dark mb-6">
            Ready to Unlock Your IoT Data?
          </h2>
          <p className="text-xl text-zion-slate max-w-3xl mx-auto mb-8">
            Start your IoT analytics journey today and transform your data into actionable intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
            <button className="border-2 border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Sales
            </button>
          </div>
          
          <div className="mt-12 bg-zion-blue-light rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-zion-blue-dark">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-zion-blue-dark">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-zion-blue-dark">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-zion-blue-dark">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}