import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Star,
  Target,
  Globe,
  BarChart3,
  Settings,
  AlertTriangle,
  RefreshCw,
  Activity
} from 'lucide-react';

const AIAutonomousOperations: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Self-Healing Systems",
      description: "Automatically detect and resolve infrastructure issues without human intervention",
      benefits: ["99.9% uptime", "Instant problem resolution", "Zero manual intervention"]
    },
    {
      icon: Zap,
      title: "Predictive Maintenance",
      description: "Prevent failures before they occur using advanced AI algorithms",
      benefits: ["90% fewer outages", "50% cost reduction", "Proactive maintenance"]
    },
    {
      icon: TrendingUp,
      title: "Auto-Scaling",
      description: "Dynamically adjust resources based on real-time demand patterns",
      benefits: ["Optimal performance", "Cost efficiency", "Seamless scaling"]
    },
    {
      icon: Shield,
      title: "Intelligent Security",
      description: "AI-powered threat detection and automated response systems",
      benefits: ["Real-time protection", "Automated responses", "Advanced threat detection"]
    }
  ];

  const useCases = [
    {
      title: "Infrastructure Management",
      description: "Automated monitoring and optimization of servers, networks, and applications",
      icon: Settings,
      results: ["65% cost reduction", "99.99% uptime", "90% fewer incidents"]
    },
    {
      title: "Application Performance",
      description: "Continuous optimization of application performance and user experience",
      icon: BarChart3,
      results: ["45% faster response", "30% better performance", "Real-time optimization"]
    },
    {
      title: "Security Operations",
      description: "Automated threat detection, incident response, and compliance monitoring",
      icon: Shield,
      results: ["95% faster response", "99.2% accuracy", "Zero false positives"]
    },
    {
      title: "Cloud Optimization",
      description: "Intelligent resource allocation and cost optimization across cloud platforms",
      icon: Globe,
      results: ["40% cost savings", "Optimal resource usage", "Auto-scaling efficiency"]
    }
  ];

  const testimonials = [
    {
      quote: "AI Autonomous Operations transformed our infrastructure management. We achieved 99.99% uptime and reduced operational costs by 65%.",
      author: "Sarah Johnson",
      position: "CTO, GlobalTech Enterprises",
      company: "Technology",
      rating: 5,
      results: ["99.99% uptime", "65% cost reduction", "$12M savings"]
    },
    {
      quote: "The self-healing capabilities eliminated 90% of our manual interventions. Our team can now focus on innovation instead of maintenance.",
      author: "Michael Chen",
      position: "VP Engineering, CloudScale Inc.",
      company: "Cloud Services",
      rating: 5,
      results: ["90% fewer interventions", "45% performance gain", "24/7 automation"]
    },
    {
      quote: "Predictive maintenance prevented $8M in potential downtime costs. The ROI was incredible within the first quarter.",
      author: "Emily Rodriguez",
      position: "Operations Director, SecureBank",
      company: "Financial Services",
      rating: 5,
      results: ["$8M prevented losses", "Zero downtime", "300% ROI"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$5,000",
      period: "month",
      description: "Perfect for small to medium businesses",
      features: [
        "Basic self-healing systems",
        "Predictive maintenance alerts",
        "Auto-scaling capabilities",
        "24/7 monitoring",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$15,000",
      period: "month",
      description: "Ideal for growing enterprises",
      features: [
        "Advanced AI algorithms",
        "Full autonomous operations",
        "Intelligent security automation",
        "Custom integrations",
        "Priority support",
        "Dedicated success manager"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored for large organizations",
      features: [
        "Custom AI model development",
        "Multi-cloud orchestration",
        "Advanced analytics & reporting",
        "White-label solutions",
        "24/7 dedicated support",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Operations - Zion Tech Group | Self-Managing Infrastructure</title>
        <meta
          name="description"
          content="Revolutionize your infrastructure with AI Autonomous Operations. Self-healing systems, predictive maintenance, and automated scaling. Achieve 99.99% uptime and reduce costs by 65%."
        />
        <meta
          name="keywords"
          content="AI autonomous operations, self-healing systems, predictive maintenance, automated scaling, infrastructure management, AI automation"
        />
        <meta property="og:title" content="AI Autonomous Operations - Zion Tech Group" />
        <meta
          property="og:description"
          content="Self-managing infrastructure with AI. Achieve 99.99% uptime and reduce costs by 65%."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services/ai-autonomous-operations" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                Revolutionary AI Technology
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI Autonomous Operations
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-blue-light bg-clip-text text-transparent">
                  Self-Managing Infrastructure
                </span>
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                Transform your infrastructure with AI that thinks, learns, and acts autonomously. 
                Achieve 99.99% uptime, reduce costs by 65%, and eliminate manual interventions with 
                our revolutionary AI Autonomous Operations platform.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan">99.99%</div>
                  <div className="text-sm text-zion-slate-light">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan">65%</div>
                  <div className="text-sm text-zion-slate-light">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan">90%</div>
                  <div className="text-sm text-zion-slate-light">Fewer Incidents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan">24/7</div>
                  <div className="text-sm text-zion-slate-light">Autonomous</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2"
                >
                  <Target className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Revolutionary AI Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI Autonomous Operations platform combines cutting-edge artificial intelligence 
                with infrastructure management to create truly autonomous systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-zion-blue/10 p-3 rounded-lg">
                        <Icon className="w-8 h-8 text-zion-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how AI Autonomous Operations transforms different aspects of your infrastructure 
                and operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-zion-blue/5 to-zion-purple/5 rounded-2xl p-8 border border-zion-blue/10 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-zion-blue/20 p-3 rounded-lg">
                        <Icon className="w-8 h-8 text-zion-blue" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {useCase.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {useCase.results.map((result, idx) => (
                        <div key={idx} className="text-center p-3 bg-white rounded-lg shadow-sm">
                          <div className="text-lg font-bold text-zion-blue">{result}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real clients who have transformed their operations with AI Autonomous Operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.position}</div>
                        <div className="text-xs text-zion-blue">{testimonial.company}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {testimonial.results.map((result, idx) => (
                        <div key={idx} className="text-center p-2 bg-green-50 rounded text-sm font-medium text-green-700">
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your business needs. 
                Start with a free trial and upgrade as you grow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${tier.popular ? 'ring-2 ring-zion-blue scale-105' : ''}`}>
                  {tier.popular && (
                    <div className="bg-zion-blue text-white text-sm font-bold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="text-4xl font-bold text-zion-blue">
                      {tier.price}
                      {tier.period && <span className="text-lg text-gray-600">/{tier.period}</span>}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 ${
                      tier.popular
                        ? 'bg-zion-blue text-white hover:bg-zion-blue-dark'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the companies that have achieved 99.99% uptime and reduced costs by 65% 
              with AI Autonomous Operations. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <Brain className="w-5 h-5" />
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutonomousOperations;