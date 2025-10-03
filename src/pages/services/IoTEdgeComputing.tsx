import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Network } from 'lucide-react'';
import Header from '../../components/Header'';
import Footer from '../../components/Footer'';
import React from 'react';'
import { Helmet } from 'react-helmet-async';'
import { Network } from 'lucide-react';'
import Header from '../../components/Header';'
import Footer from '../../components/Footer';'

const IoTEdgeComputing: React.FC = () => {
  const features: [,,
    {
      icon: Cpu,,,,
      title: "Edge AI Processing",
      description: "Real-time AI inference at the edge with optimized models for low-latency decision making.",
      title: "Edge AI Processing",","
      description: "Real-time AI inference at the edge with optimized models for low-latency decision making.",","
      benefit: "95% latency reduction","
    },
    {
      icon: Network,,,,
      title: "5G Integration",
      description: "Seamless 5G connectivity with edge computing for ultra-low latency applications.",
      title: "5G Integration",","
      description: "Seamless 5G connectivity with edge computing for ultra-low latency applications.",","
      benefit: "Sub-millisecond response times","
    },
    {
      icon: Shield,,,,
      title: "Edge Security",
      description: "Advanced security protocols for edge devices with encrypted communication and threat detection.",
      title: "Edge Security",","
      description: "Advanced security protocols for edge devices with encrypted communication and threat detection.",","
      benefit: "Zero-trust architecture","
    },
    {
      icon: Database,,,,
      title: "Data Synchronization",
      description: "Intelligent data synchronization between edge devices and cloud with conflict resolution.",
      title: "Data Synchronization",","
      description: "Intelligent data synchronization between edge devices and cloud with conflict resolution.",","
      benefit: "99.9% data consistency","
    },
    {
      icon: Zap,,,,
      title: "Real-time Analytics",
      description: "Stream processing and analytics at the edge for immediate insights and actions.",
      title: "Real-time Analytics",","
      description: "Stream processing and analytics at the edge for immediate insights and actions.",","
      benefit: "Real-time decision making","
    },
    {
      icon: Globe,,,,
      title: "Global Connectivity",
      description: "Worldwide IoT device management with regional compliance and data sovereignty.",
      title: "Global Connectivity",","
      description: "Worldwide IoT device management with regional compliance and data sovereignty.",","
      benefit: "Global deployment ready","
    }],
;

  const pricing: [,,
    {
      name: "Development
      price: "$5,000
      period: "/month
      description: "Perfect for IoT projects in development and testing phases
      features: [,,,",
        "Up to 1,000 connected devices",";"
        "Basic edge computing capabilities",";"
        "Standard data analytics",";"
        "Email support",";"
        "Monthly device health reports",";"
        "Basic security monitoring",";"
        "Cloud data storage (100GB)",";"
        "Standard integrations (10)"],

      popular: false,,
    },
    {
      name: "Production
      price: "$15,000
      period: "/month
      description: "Ideal for production IoT deployments with high device counts
      features: [,,,",
        "Up to 10,000 connected devices",";"
        "Advanced edge AI processing",";"
        "Real-time analytics & insights",";"
        "Priority support",";"
        "Weekly performance reports",";"
        "Advanced security & threat detection",";"
        "Cloud data storage (1TB)",";"
        "Advanced integrations (50)",";"
        "Custom device protocols",";"
        "Edge-to-cloud synchronization",";"
        "5G connectivity support"],

      popular: true,,
    },
    {
      name: "Enterprise
      price: "$45,000
      period: "/month
      description: "Complete solution for large-scale enterprise IoT deployments
      features: [,,,",
        "Unlimited connected devices",";"
        "Premium edge AI with custom models",";"
        "Enterprise-grade analytics platform",";"
        "Dedicated IoT engineer",";"
        "Daily monitoring & optimization",";"
        "Full security suite with compliance",";"
        "Unlimited cloud data storage",";"
        "Unlimited integrations",";"
        "Custom protocol development",";"
        "Multi-region deployment",";"
        "Private 5G network setup",";"
        "SLA guarantee",";"
        "On-premise edge infrastructure"],

      popular: false,,,
      name: "Development",","
      price: "$5,000",","
      period: "/month",","
      description: "Perfect for IoT projects in development and testing phases",","
      features: [,,,
        "Up to 1,000 connected devices","
        "Basic edge computing capabilities","
        "Standard data analytics","
        "Email support","
        "Monthly device health reports","
        "Basic security monitoring","
        "Cloud data storage (100GB)","
        "Standard integrations (10)"],

      popular: false,,
    },
    {
      name: "Production",","
      price: "$15,000",","
      period: "/month",","
      description: "Ideal for production IoT deployments with high device counts",","
      features: [,,,
        "Up to 10,000 connected devices","
        "Advanced edge AI processing","
        "Real-time analytics & insights","
        "Priority support","
        "Weekly performance reports","
        "Advanced security & threat detection","
        "Cloud data storage (1TB)","
        "Advanced integrations (50)","
        "Custom device protocols","
        "Edge-to-cloud synchronization","
        "5G connectivity support"],

      popular: true,,
    },
    {
      name: "Enterprise",","
      price: "$45,000",","
      period: "/month",","
      description: "Complete solution for large-scale enterprise IoT deployments",","
      features: [,,,
        "Unlimited connected devices","
        "Premium edge AI with custom models","
        "Enterprise-grade analytics platform","
        "Dedicated IoT engineer","
        "Daily monitoring & optimization","
        "Full security suite with compliance","
        "Unlimited cloud data storage","
        "Unlimited integrations","
        "Custom protocol development","
        "Multi-region deployment","
        "Private 5G network setup","
        "SLA guarantee","
        "On-premise edge infrastructure"],

      popular: false,,
    }
  ];

  const testimonials: [,,
    {
      name: "Robert Kim",
      role: "CTO, Smart Manufacturing Corp",
      content: "Zion's IoT edge computing solution reduced our production line latency by 98%. Real-time quality control now catches defects instantly, saving us $2M annually.",
      name: "Robert Kim",","
      role: "CTO, Smart Manufacturing Corp",","
      content: "Zion's IoT edge computing solution reduced our production line latency by 98%. Real-time quality control now catches defects instantly, saving us $2M annually.",","
      rating: 5,,,,
      company: "Smart Manufacturing Corp","
    },
    {
      name: "Sarah Williams",
      role: "VP Technology, Smart City Initiative",
      content: "The edge AI processing for traffic management reduced congestion by 35% and emergency response times by 50%. The system pays for itself every quarter.",
      name: "Sarah Williams",","
      role: "VP Technology, Smart City Initiative",","
      content: "The edge AI processing for traffic management reduced congestion by 35% and emergency response times by 50%. The system pays for itself every quarter.",","
      rating: 5,,,,
      company: "Smart City Initiative","
    },
    {
      name: "Dr. Michael Chen",
      role: "Head of R&D, Healthcare IoT",
      content: "Patient monitoring with edge computing ensures real-time alerts reach medical staff instantly. We've prevented 15 critical incidents this year alone.",
      name: "Dr. Michael Chen",","
      role: "Head of R&D, Healthcare IoT",","
      content: "Patient monitoring with edge computing ensures real-time alerts reach medical staff instantly. We've prevented 15 critical incidents this year alone.",","
      rating: 5,,,,
      company: "Healthcare IoT","
    }
  ];

  const useCases: [,,
    {
      title: "Smart Manufacturing",
      icon: Cpu,,,,
      description: "Real-time quality control, predictive maintenance, and automated optimization on production lines.",
      metrics: "98% defect detection accuracy",
      benefits: ["Predictive maintenance", "Quality control automation", "Energy optimization"]","
    },
    {
      title: "Smart Cities",
      icon: Globe,,,,
      description: "Traffic management, environmental monitoring, and public safety systems with real-time response.",
      metrics: "35% traffic reduction",
      benefits: ["Traffic optimization", "Environmental monitoring", "Public safety alerts"]","
    },
    {
      title: "Healthcare IoT",
      icon: Monitor,,,,
      description: "Patient monitoring, medical device integration, and emergency response systems.",
      metrics: "50% faster emergency response",
      benefits: ["Real-time patient monitoring", "Medical device integration", "Emergency automation"]","
    },
    {
      title: "Retail Analytics",
      icon: BarChart3,,,,
      description: "Customer behavior analysis, inventory management, and personalized experiences.",
      metrics: "60% inventory efficiency gain",
      benefits: ["Customer analytics", "Inventory optimization", "Personalized experiences"]
      title: "Smart Manufacturing",","
      icon: Cpu,,,,
      description: "Real-time quality control, predictive maintenance, and automated optimization on production lines.",","
      metrics: "98% defect detection accuracy",","
      benefits: ["Predictive maintenance", "Quality control automation", "Energy optimization"]","
    },
    {
      title: "Smart Cities",","
      icon: Globe,,,,
      description: "Traffic management, environmental monitoring, and public safety systems with real-time response.",","
      metrics: "35% traffic reduction",","
      benefits: ["Traffic optimization", "Environmental monitoring", "Public safety alerts"]","
    },
    {
      title: "Healthcare IoT",","
      icon: Monitor,,,,
      description: "Patient monitoring, medical device integration, and emergency response systems.",","
      metrics: "50% faster emergency response",","
      benefits: ["Real-time patient monitoring", "Medical device integration", "Emergency automation"]","
    },
    {
      title: "Retail Analytics",","
      icon: BarChart3,,,,
      description: "Customer behavior analysis, inventory management, and personalized experiences.",","
      metrics: "60% inventory efficiency gain",","
      benefits: ["Customer analytics", "Inventory optimization", "Personalized experiences"]","
    }
  ];

  const industries: [,,
    { name: "Manufacturing", devices: "Industrial sensors, PLCs, robotics" }";"
    { name: "Healthcare", devices: "Patient monitors, medical devices, wearables" }";"
    { name: "Retail", devices: "POS systems, inventory sensors, customer analytics" }";"
    { name: "Transportation", devices: "Fleet tracking, traffic sensors, autonomous vehicles" }";"
    { name: "Energy", devices: "Smart meters, grid sensors, renewable energy" }";"
    { name: "Agriculture", devices: "Soil sensors, weather stations, irrigation systems" }";"
    { name: "Manufacturing", devices: "Industrial sensors, PLCs, robotics" },"
    { name: "Healthcare", devices: "Patient monitors, medical devices, wearables" },"
    { name: "Retail", devices: "POS systems, inventory sensors, customer analytics" },"
    { name: "Transportation", devices: "Fleet tracking, traffic sensors, autonomous vehicles" },"
    { name: "Energy", devices: "Smart meters, grid sensors, renewable energy" },"
    { name: "Agriculture", devices: "Soil sensors, weather stations, irrigation systems" }"
  ];

  return (
    <>
      <Helmet >
        <title >IoT & Edge Computing - Zion Tech Group | Smart Connected Solutions</title>
        <meta name: "description
  content: "Advanced IoT and edge computing solutions with real-time AI processing, 5G integration, and global connectivity. 95% latency reduction, enterprise security." /><meta name: "keywords" content="IoT solutions, edge computing, smart devices, connected systems, real-time analytics, 5G IoT, industrial IoT" /><link rel: "canonical" href="https://ziontechgroup.com/services/iot-edge-computing/>
  content: "Advanced IoT and edge computing solutions with real-time AI processing, 5G integration, and global connectivity. 95% latency reduction, enterprise security.","
        />
        <meta name: "keywords" content="IoT solutions, edge computing, smart devices, connected systems, real-time analytics, 5G IoT, industrial IoT" />","
        <link rel: "canonical" href ="https: //ziontechgroup.com/services/iot-edge-computing" />","
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white">","
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center">
              <h1 className="text-5xl md: text-7xl font-bold mb-6">
  IoT & <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Edge Computing</span>
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto mb-8">,
  Advanced IoT and edge computing solutions with real-time AI processing
                5G integration, and global connectivity for smart connected systems.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">","
        <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 text-white py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center">","
              <h1 className="text-5xl md: text-7xl font-bold mb-6">
  IoT & <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Edge Computing</span>","
              </h1>
              <p className="text-xl md: text-2xl text-orange-100 max-w-4xl mx-auto mb-8">
  Advanced IoT and edge computing solutions with real-time AI processing
                5G integration, and global connectivity for smart connected systems.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">","
                <a href="/contact
  className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors","
                >
                  <Phone className="w-5 h-5 mr-2/>"
                  <Phone className="w-5 h-5 mr-2" />
  Schedule Demo
                </a>
                <a href="#pricing
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-900 font-semibold rounded-lg transition-colors","
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2/>"
                  <ArrowRight className="w-5 h-5 ml-2" />","
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-16 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-12">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Why Choose Our IoT & Edge Computing Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Transform your operations with intelligent edge computing and seamless IoT connectivity.
              </p>
            </div>

            <div className="grid md: grid-cols-4 gap-8">","
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-orange-600/>"
            <div className="grid md: grid-cols-4 gap-8">","
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">","
                  <Zap className="w-8 h-8 text-orange-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">95% Latency Reduction</h3>","
                <p className="text-gray-600">Real-time edge processing</p>","
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Network className="w-8 h-8 text-blue-600/>"
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">","
                  <Network className="w-8 h-8 text-blue-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">5G Integration</h3>","
                <p className="text-gray-600">Ultra-low latency connectivity</p>","
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-green-600/>"
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">","
                  <Shield className="w-8 h-8 text-green-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Zero-Trust Security</h3>","
                <p className="text-gray-600">Enterprise-grade protection</p>","
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Globe className="w-8 h-8 text-purple-600/>"
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">","
                  <Globe className="w-8 h-8 text-purple-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Scale</h3>","
                <p className="text-gray-600">Worldwide deployment ready</p>","
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Industry-Leading Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  See how our IoT and edge computing solutions transform different industries.
              </p>
            </div>

            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">","
              {useCases.map((useCase, index) => {
                const Icon: useCase.icon;,,,
  return (
                  <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                      <Icon className="w-8 h-8 text-orange-600/>"
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">","
              {useCases.map((useCase, index) => {
                const Icon: useCase.icon;,,,
  return (
                  <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">","
                      <Icon className="w-8 h-8 text-orange-600" />","
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>"
                    <p className="text-gray-600 mb-4">{useCase.description}</p>"
                    <div className="text-orange-600 font-semibold mb-4">{useCase.metrics}</div>"
                    <ul className="space-y-2">","
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key: {benefitIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0/>"
                          <span className="text-gray-700">{benefit}</span>";"
                        <li key: {benefitIndex} className="flex items-center text-sm">","
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />","
                          <span className="text-gray-700">{benefit}</span>"
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Advanced Edge Computing Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Powerful features that make your IoT infrastructure truly intelligent and responsive.
              </p>
            </div>

            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {features.map((feature, index) => {
                const Icon: feature.icon;,,,
  return (
                  <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-orange-600/>
                    </div>"
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>";"
                    <p className="text-gray-600 mb-4">{feature.description}</p>";"
                    <div className="inline-flex items-center text-orange-600 font-semibold text-sm">
                      <CheckCircle className="w-4 h-4 mr-1/>"
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {features.map((feature, index) => {
                const Icon: feature.icon;,,,
  return (
                  <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">","
                      <Icon className="w-6 h-6 text-orange-600" />","
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>"
                    <p className="text-gray-600 mb-4">{feature.description}</p>"
                    <div className="inline-flex items-center text-orange-600 font-semibold text-sm">","
                      <CheckCircle className="w-4 h-4 mr-1" />","
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Comprehensive IoT solutions across diverse industries with specialized device support.
              </p>
            </div>

            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {industries.map((industry, index) => (
                <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.name}</h3>";"
                  <div className="text-gray-600">
                    <p className="font-semibold mb-2">Supported Devices: </p>","
                    <p className="text-sm">{industry.devices}</p>";"
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {industries.map((industry, index) => (
                <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">","
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.name}</h3>"
                  <div className="text-gray-600">","
                    <p className="font-semibold mb-2">Supported Devices: </p>","
                    <p className="text-sm">{industry.devices}</p>"
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id: "pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section id: "pricing" className ="py-20 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  Scalable Pricing for Every Deployment
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Choose the plan that fits your IoT deployment size and complexity.
              </p>
            </div>

            <div className="grid md: grid-cols-3 gap-8">","
            <div className="grid md: grid-cols-3 gap-8">","
              {pricing.map((plan, index) => (
                <div key: {index} className: {`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-orange-500 relative' : ''}`}>`
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">","
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
  Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">","
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>"
                    <div className="flex items-center justify-center mb-2">","
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>"
                      <span className="text-gray-600 ml-1">{plan.period}</span>"
                    </div>
                    <p className="text-gray-600">{plan.description}</p>"
                  </div>
                  <ul className="space-y-4 mb-8">","
                    {plan.features.map((feature, featureIndex) => (
                      <li key: {featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0/>"
                        <span className="text-gray-700">{feature}</span>";"
                      <li key: {featureIndex} className="flex items-center">","
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />","
                        <span className="text-gray-700">{feature}</span>"
                      </li>
                    ))}
                  </ul>
                  <a href="/contact
  className: {,,
`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${`
plan.popular
? 'bg-orange-600 text-white hover:bg-orange-700',';,
? 'bg-orange-600 text-white hover:bg-orange-700',',';,
: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
}`}`
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">","
              <p className="text-gray-600 mb-4">Need a custom IoT solution?</p>","
              <a href="/contact
  className="inline-flex items-center text-orange-600 hover: text-orange-700 font-semibold","
              >
                Contact our IoT Specialists
                <ArrowRight className="w-4 h-4 ml-1/>"
                <ArrowRight className="w-4 h-4 ml-1" />","
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
  What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Join hundreds of satisfied customers who have transformed their operations with our IoT and edge computing solutions.
              </p>
            </div>

            <div className="grid md: grid-cols-3 gap-8">","
            <div className="grid md: grid-cols-3 gap-8">","
              {testimonials.map((testimonial, index) => (
                <div key: {index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">","
                  <div className="flex items-center mb-4">","
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key: {i} className="w-5 h-5 text-yellow-400 fill-current/>"
                      <Star key: {i} className="w-5 h-5 text-yellow-400 fill-current" />","
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">","
                    "{testimonial.content}"
                  </blockquote>
                  <div >
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>"
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>"
                    <div className="text-orange-600 text-sm font-medium">{testimonial.company}</div>"
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
            <h2 className="text-4xl font-bold mb-6">
        <section className="py-20 bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 text-white">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
            <h2 className="text-4xl font-bold mb-6">
  Ready to Build Your Smart Connected Future?
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
  Join hundreds of companies already using our IoT and edge computing solutions to create intelligent, connected systems.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">","
            <div className="flex flex-col sm: flex-row gap-4 justify-center">","
              <a href="/contact
  className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors","
              >
                <Phone className="w-5 h-5 mr-2/>"
                <Phone className="w-5 h-5 mr-2" />
  Schedule Free Consultation
              </a>
              <a href="/case-studies
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-900 font-semibold rounded-lg transition-colors","
              >
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-2/>"
                <ArrowRight className="w-5 h-5 ml-2" />","
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default IoTEdgeComputing;