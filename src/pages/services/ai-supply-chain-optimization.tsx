<<<<<<< HEAD
import React from 'react.ts';
import { Helmet  } from 'react-helmet-async.ts';
import { Truck, TrendingUp, BarChart3, Settings, Users, Shield, ArrowRight, CheckCircle, Play, Download, Mail, Target, Activity, Database, Calculator, PieChart, Globe, Clock, Zap, Eye, Brain import { Link  } from 'react-router-dom.ts';
=======
import React from 'react.ts';
import { Helmet   } from 'react-helmet-async.ts';
import { Truck, TrendingUp, BarChart3, Settings, Users, Shield, ArrowRight, CheckCircle, Play, Download, Mail, Target, Activity, Database, Calculator, PieChart, Globe, Clock, Zap, Eye, Brain   } from 'lucide-react.ts';
import { Link   } from 'react-router-dom.ts';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export default function AISupplyChainOptimization(...args: []):  {
  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimization - Zion Tech Group</title>
        <meta name = "description" content="Transform your supply chain with AI-powered optimization. Reduce costs, improve efficiency, and enhance visibility across your entire supply network." />
        <meta name="keywords" content="AI supply chain, supply chain optimization, logistics AI, inventory management, demand forecasting, supply chain analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Truck className="w-4 h-4 mr-2" />
                Intelligent Supply Chain
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Supply Chain
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"> Optimization</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your supply chain with AI-powered optimization. Reduce costs, improve efficiency,
                and enhance visibility across your entire supply network with intelligent automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"

                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Supply Chain Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our AI platform provides comprehensive supply chain optimization tools for
                modern businesses seeking operational excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI-Powered Forecasting",
                  description: "Predict demand patterns and optimize inventory levels with machine learning."
                },
                {
                  icon: TrendingUp,
                  title: "Route Optimization",
                  description: "Optimize delivery routes and reduce transportation costs with AI algorithms."
                },
                {
                  icon: BarChart3,
                  title: "Real-time Analytics",
                  description: "Monitor supply chain performance with live dashboards and insights."
                },
                {
                  icon: Users,
                  title: "Supplier Management",
                  description: "Manage supplier relationships and performance with intelligent scoring."
                },
                {
                  icon: Shield,
                  title: "Risk Management",
                  description: "Identify and mitigate supply chain risks with predictive analytics."
                },
                {
                  icon: Database,
                  title: "Inventory Optimization",
                  description: "Optimize stock levels and reduce carrying costs with AI insights."
<<<<<<< HEAD

              ].map((feature, index)  => (
=======
                }
              ].map((feature, index)  => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimization Areas Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Supply Chain Optimization Areas
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Comprehensive optimization across all critical supply chain functions for maximum efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Demand Forecasting",
                  description: "AI-powered demand prediction and planning optimization.",
                  icon: Brain,
                  benefits: ["Machine learning models", "Seasonal analysis", "Trend prediction"]
                },
                {
                  title: "Inventory Management",
                  description: "Smart inventory optimization and stock level management.",
                  icon: Database,
                  benefits: ["Safety stock optimization", "Reorder point calculation", "ABC analysis"]
                },
                {
                  title: "Transportation",
                  description: "Route optimization and transportation cost reduction.",
                  icon: Truck,
                  benefits: ["Route planning", "Load optimization", "Cost reduction"]
                },
                {
                  title: "Supplier Optimization",
                  description: "Supplier performance management and selection optimization.",
                  icon: Users,
                  benefits: ["Performance scoring", "Risk assessment", "Cost optimization"]
                },
                {
                  title: "Warehouse Operations",
                  description: "Warehouse layout and process optimization.",
                  icon: Settings,
                  benefits: ["Layout optimization", "Process automation", "Space utilization"]
                },
                {
                  title: "Risk Management",
                  description: "Supply chain risk identification and mitigation strategies.",
                  icon: Shield,
                  benefits: ["Risk assessment", "Mitigation planning", "Contingency strategies"]
<<<<<<< HEAD

              ].map((area, index)  => (
=======
                }
              ].map((area, index)  => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
                  <p className="text-slate-300 mb-4">{area.description}</p>
                  <ul className="space-y-1">
                    {area.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-blue-400 flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Leverage cutting-edge AI technologies for intelligent supply chain optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Machine Learning",
                  description: "Advanced ML algorithms for pattern recognition and prediction.",
                  icon: Brain,
                  features: ["Pattern recognition", "Predictive modeling", "Continuous learning"]
                },
                {
                  title: "Predictive Analytics",
                  description: "Forecast future trends and optimize decision-making.",
                  icon: TrendingUp,
                  features: ["Trend analysis", "Scenario planning", "Risk prediction"]
                },
                {
                  title: "Real-time Processing",
                  description: "Instant data processing and decision-making capabilities.",
                  icon: Zap,
                  features: ["Live data streams", "Instant insights", "Real-time optimization"]
                },
                {
                  title: "Natural Language Processing",
                  description: "Process and analyze unstructured supply chain data.",
                  icon: Eye,
                  features: ["Document analysis", "Sentiment analysis", "Data extraction"]
                },
                {
                  title: "Computer Vision",
                  description: "Visual inspection and quality control automation.",
                  icon: Eye,
                  features: ["Quality inspection", "Damage detection", "Process monitoring"]
                },
                {
                  title: "Optimization Algorithms",
                  description: "Advanced algorithms for complex optimization problems.",
                  icon: Calculator,
                  features: ["Linear programming", "Genetic algorithms", "Heuristic optimization"]
<<<<<<< HEAD

              ].map((capability, index)  => (
=======
                }
              ].map((capability, index)  => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                  <p className="text-slate-300 mb-4">{capability.description}</p>
                  <ul className="space-y-1">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-blue-400 flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Supply Chain Optimization Benefits
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Transform your supply chain operations with measurable improvements and cost savings.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    "15-25% reduction in supply chain costs",
                    "30-40% improvement in delivery performance",
                    "20-30% reduction in inventory carrying costs",
                    "Improved supplier performance and relationships",
                    "Enhanced risk management and resilience",
                    "Better customer satisfaction and service levels"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  {[
                    { metric: any"15-25%", label: "Cost Reduction", description: "Supply chain costs" },
                    { metric: "30-40%", label: "Delivery Performance", description: "Improvement" },
                    { metric: "20-30%", label: "Inventory Costs", description: "Reduction" },
                    { metric: "90%+", label: "Visibility", description: "Supply chain transparency" }
                  ].map((item, index)   => (
                    <div key={index} className="text-center p-4 bg-slate-700/50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400 mb-1">{item.metric}</div>
                      <div className="text-sm text-slate-300">{item.label}</div>
                      <div className="text-xs text-slate-400">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Implementation Process
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our systematic approach ensures successful AI supply chain optimization implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Evaluate current supply chain performance and identify optimization opportunities."
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Develop comprehensive AI optimization strategy and implementation roadmap."
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Deploy AI tools and establish optimization processes and workflows."
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Continuously monitor, optimize, and improve supply chain performance."
<<<<<<< HEAD

              ].map((step, index)  => (
=======
                }
              ].map((step, index)  => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500/10 to-indigo-600/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Transform your supply chain operations with AI-powered optimization and intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"

                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
<<<<<<< HEAD

                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
=======
              >
                Explore All Services;
              </Link>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  );
}}}}}}