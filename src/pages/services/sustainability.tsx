import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Leaf, Globe, Zap, Settings, Users, Shield, ArrowRight, CheckCircle, Play, Download, Mail, Target, Activity, BarChart3, Database, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sustainability() {
  return (
    <>
      <Helmet>
        <title>Sustainability Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with sustainable technology solutions. Green IT, renewable energy, and environmental monitoring for a sustainable future." />
        <meta name="keywords" content="sustainability, green IT, renewable energy, environmental monitoring, carbon reduction, sustainable technology, green solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8">
                <Leaf className="w-4 h-4 mr-2" />
                Sustainable Technology Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Sustainability
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Solutions</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Drive environmental impact and business growth with sustainable technology solutions. 
                Green IT, renewable energy, and environmental monitoring for a sustainable future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200">
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
                Sustainable Technology Platform
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our sustainability platform provides comprehensive solutions for environmental monitoring, 
                green IT, and renewable energy management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Leaf,
                  title: "Green IT Solutions",
                  description: "Energy-efficient computing, virtualization, and sustainable data center solutions."
                },
                {
                  icon: Globe,
                  title: "Environmental Monitoring",
                  description: "Real-time monitoring of air quality, water quality, and environmental parameters."
                },
                {
                  icon: Zap,
                  title: "Renewable Energy",
                  description: "Solar, wind, and hydroelectric energy management and optimization systems."
                },
                {
                  icon: Settings,
                  title: "Carbon Tracking",
                  description: "Comprehensive carbon footprint monitoring and reduction strategies."
                },
                {
                  icon: Users,
                  title: "Sustainability Reporting",
                  description: "Automated ESG reporting and sustainability performance analytics."
                },
                {
                  icon: Shield,
                  title: "Compliance Management",
                  description: "Environmental regulations compliance and sustainability standards adherence."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Applications Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sustainability Applications
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Discover how our sustainability solutions can transform different industries and operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Manufacturing",
                  description: "Sustainable manufacturing processes, waste reduction, and energy efficiency.",
                  icon: Settings,
                  benefits: ["Waste reduction", "Energy efficiency", "Circular economy"]
                },
                {
                  title: "Agriculture",
                  description: "Precision farming, soil monitoring, and sustainable agricultural practices.",
                  icon: TreePine,
                  benefits: ["Precision farming", "Soil monitoring", "Water conservation"]
                },
                {
                  title: "Energy & Utilities",
                  description: "Smart grid management, renewable energy integration, and energy optimization.",
                  icon: Zap,
                  benefits: ["Smart grid", "Renewable energy", "Energy optimization"]
                },
                {
                  title: "Transportation",
                  description: "Electric vehicle infrastructure, route optimization, and emissions monitoring.",
                  icon: Activity,
                  benefits: ["EV infrastructure", "Route optimization", "Emissions monitoring"]
                },
                {
                  title: "Buildings & Cities",
                  description: "Smart building management, urban sustainability, and green infrastructure.",
                  icon: Target,
                  benefits: ["Smart buildings", "Urban sustainability", "Green infrastructure"]
                },
                {
                  title: "Waste Management",
                  description: "Waste reduction, recycling optimization, and circular economy solutions.",
                  icon: Leaf,
                  benefits: ["Waste reduction", "Recycling optimization", "Circular economy"]
                }
              ].map((application, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <application.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{application.title}</h3>
                  <p className="text-slate-300 mb-4">{application.description}</p>
                  <ul className="space-y-1">
                    {application.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-green-400 flex items-center">
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

        {/* Green IT Solutions Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Green IT Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Reduce your IT carbon footprint with energy-efficient computing and sustainable technology practices.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    "Energy-efficient data center design and optimization",
                    "Server virtualization and consolidation strategies",
                    "Cloud computing and edge computing solutions",
                    "Sustainable software development practices",
                    "Green procurement and lifecycle management",
                    "Carbon-neutral hosting and cloud services"
                  ].map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Green IT Benefits</h3>
                <div className="space-y-4">
                  {[
                    { benefit: "Energy Savings", metric: "40%", description: "Reduced power consumption" },
                    { benefit: "Cost Reduction", metric: "30%", description: "Lower operational costs" },
                    { benefit: "Carbon Reduction", metric: "50%", description: "Reduced carbon footprint" },
                    { benefit: "Efficiency", metric: "60%", description: "Improved resource utilization" }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 bg-slate-700/50 rounded-lg">
                      <div className="text-2xl font-bold text-green-400 mb-1">{item.metric}</div>
                      <div className="text-sm text-slate-300">{item.benefit}</div>
                      <div className="text-xs text-slate-400">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Monitoring Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Environmental Monitoring & Analytics
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Real-time environmental data collection, analysis, and reporting for informed decision-making.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Monitoring Capabilities</h3>
                <div className="space-y-4">
                  {[
                    "Air quality monitoring and pollution detection",
                    "Water quality assessment and contamination detection",
                    "Soil health monitoring and agricultural optimization",
                    "Noise pollution monitoring and urban planning",
                    "Weather monitoring and climate data collection",
                    "Biodiversity tracking and ecosystem health assessment"
                  ].map((capability, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Analytics & Insights</h3>
                <div className="space-y-4">
                  {[
                    "Real-time data visualization and dashboards",
                    "Predictive analytics for environmental trends",
                    "Machine learning for pattern recognition",
                    "Automated alerting and notification systems",
                    "Historical data analysis and trend reporting",
                    "Integration with sustainability management systems"
                  ].map((analytics, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{analytics}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carbon Management Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Carbon Management & Reporting
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Comprehensive carbon footprint tracking, reduction strategies, and sustainability reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Carbon Footprint Tracking",
                  description: "Monitor and measure your organization's carbon emissions across all operations.",
                  icon: BarChart3,
                  features: ["Scope 1, 2, and 3 emissions", "Real-time monitoring", "Automated data collection"]
                },
                {
                  title: "Reduction Strategies",
                  description: "AI-powered recommendations for carbon reduction and sustainability improvements.",
                  icon: Target,
                  features: ["Optimization suggestions", "ROI analysis", "Implementation guidance"]
                },
                {
                  title: "ESG Reporting",
                  description: "Automated sustainability reporting for investors, regulators, and stakeholders.",
                  icon: Database,
                  features: ["Automated reporting", "Compliance tracking", "Stakeholder communication"]
                },
                {
                  title: "Carbon Offsetting",
                  description: "Carbon credit management and offsetting strategies for net-zero goals.",
                  icon: Leaf,
                  features: ["Credit management", "Offset strategies", "Net-zero planning"]
                },
                {
                  title: "Supply Chain Tracking",
                  description: "Monitor sustainability across your entire supply chain and value network.",
                  icon: Globe,
                  features: ["Supplier monitoring", "Risk assessment", "Sustainability scoring"]
                },
                {
                  title: "Performance Analytics",
                  description: "Comprehensive sustainability performance metrics and benchmarking.",
                  icon: Activity,
                  features: ["Performance metrics", "Industry benchmarking", "Trend analysis"]
                }
              ].map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-300 mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-green-400 flex items-center">
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

        {/* Implementation Process Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Implementation Process
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our systematic approach ensures successful sustainability implementation for your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Evaluate current sustainability practices and identify improvement opportunities."
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Develop comprehensive sustainability strategy and implementation roadmap."
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Deploy sustainability solutions and integrate with existing systems."
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Monitor performance and continuously optimize sustainability initiatives."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
        <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-600/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build a Sustainable Future?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Transform your business with sustainable technology solutions that drive environmental impact and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}