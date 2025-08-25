import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Wifi, 
  Smartphone, 
  Cpu, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  BarChart3, 
  Database, 
  Cloud,
  Activity,
  Eye,
  Settings,
  Lock,
  CheckCircle,
  Building,
  Home,
  Car,
  Factory,
  Leaf
} from 'lucide-react';

export default function IoTManagementPlatform() {
  const features = [
    {
      title: "Device Management & Provisioning",
      description: "Centralized platform to register, configure, and manage thousands of IoT devices from a single dashboard",
      icon: Smartphone,
      benefits: ["Bulk device provisioning", "Remote configuration", "Firmware updates", "Device health monitoring"]
    },
    {
      title: "Real-time Data Collection",
      description: "Collect, process, and analyze data from IoT sensors and devices in real-time with sub-second latency",
      icon: Activity,
      benefits: ["High-frequency data collection", "Edge computing support", "Data compression", "Real-time analytics"]
    },
    {
      title: "Advanced Security & Authentication",
      description: "Enterprise-grade security with device authentication, encrypted communication, and threat detection",
      icon: Shield,
      benefits: ["Device authentication", "Encrypted communication", "Threat detection", "Compliance standards"]
    },
    {
      title: "Scalable Cloud Infrastructure",
      description: "Built on cloud-native architecture that scales automatically to handle millions of devices",
      icon: Cloud,
      benefits: ["Auto-scaling", "Global distribution", "High availability", "Cost optimization"]
    },
    {
      title: "Data Analytics & Insights",
      description: "Powerful analytics engine that transforms raw IoT data into actionable business intelligence",
      icon: BarChart3,
      benefits: ["Predictive analytics", "Custom dashboards", "Alert systems", "Data visualization"]
    },
    {
      title: "Integration & APIs",
      description: "RESTful APIs and webhooks for seamless integration with existing business systems",
      icon: Cpu,
      benefits: ["RESTful APIs", "Webhook support", "SDK libraries", "Third-party integrations"]
    }
  ];

  const useCases = [
    {
      industry: "Smart Cities",
      applications: ["Traffic monitoring", "Air quality sensors", "Smart lighting", "Waste management"],
      devices: "10,000+ sensors",
      roi: "200-400%"
    },
    {
      industry: "Industrial IoT",
      applications: ["Predictive maintenance", "Quality control", "Energy monitoring", "Safety systems"],
      devices: "5,000+ devices",
      roi: "300-600%"
    },
    {
      industry: "Smart Buildings",
      applications: ["HVAC control", "Security systems", "Energy management", "Occupancy tracking"],
      devices: "2,000+ devices",
      roi: "250-450%"
    },
    {
      industry: "Connected Vehicles",
      applications: ["Fleet management", "Driver monitoring", "Vehicle diagnostics", "Route optimization"],
      devices: "1,000+ vehicles",
      roi: "400-700%"
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$199",
      period: "per month",
      devices: "Up to 100 devices",
      features: [
        "Basic device management",
        "Real-time monitoring",
        "Standard security",
        "Email support",
        "Basic analytics",
        "Mobile app access"
      ],
      bestFor: "Small IoT deployments"
    },
    {
      plan: "Professional",
      price: "$599",
      period: "per month",
      devices: "Up to 1,000 devices",
      features: [
        "Advanced device management",
        "Custom dashboards",
        "Enhanced security",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Webhook support"
      ],
      bestFor: "Growing IoT operations",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$1,999",
      period: "per month",
      devices: "Unlimited devices",
      features: [
        "Enterprise device management",
        "Custom integrations",
        "Advanced security",
        "24/7 dedicated support",
        "Custom analytics",
        "White-label solutions",
        "On-premise options"
      ],
      bestFor: "Large-scale IoT deployments"
    }
  ];

  const benefits = [
    {
      title: "Operational Efficiency",
      description: "Automate processes and reduce manual intervention across your IoT ecosystem",
      icon: Zap,
      metric: "40-60% improvement"
    },
    {
      title: "Cost Reduction",
      description: "Lower operational costs through predictive maintenance and energy optimization",
      icon: BarChart3,
      metric: "25-40% savings"
    },
    {
      title: "Data-Driven Insights",
      description: "Transform raw sensor data into actionable business intelligence",
      icon: Eye,
      metric: "Real-time visibility"
    },
    {
      title: "Scalability",
      description: "Scale from 10 to 100,000+ devices without infrastructure changes",
      icon: Globe,
      metric: "Unlimited growth"
    }
  ];

  const industries = [
    { name: "Manufacturing", icon: Factory, color: "from-blue-500 to-cyan-500" },
    { name: "Healthcare", icon: Building, color: "from-green-500 to-teal-500" },
    { name: "Retail", icon: Home, color: "from-purple-500 to-pink-500" },
    { name: "Transportation", icon: Car, color: "from-orange-500 to-red-500" },
    { name: "Agriculture", icon: Leaf, color: "from-emerald-500 to-green-500" },
    { name: "Energy", icon: Zap, color: "from-yellow-500 to-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="IoT & Smart Device Management Platform - Zion Tech Group" 
        description="Comprehensive IoT management platform for smart cities, industrial IoT, smart buildings, and connected vehicles. Manage thousands of devices with real-time monitoring and analytics."
        keywords="IoT platform, smart device management, industrial IoT, smart cities, connected devices, IoT analytics"
        canonical="https://ziontechgroup.com/services/iot-management-platform"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IoT Management Platform
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Connect, Monitor & Control Smart Devices
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Our comprehensive IoT platform enables businesses to manage thousands of connected devices, 
            collect real-time data, and gain actionable insights. From smart cities to industrial IoT, 
            we provide the infrastructure for the connected future.
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

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Enterprise-Grade IoT Features
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Built for scale, security, and performance. Our platform handles everything from 
              device provisioning to advanced analytics and automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
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
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our IoT platform is designed to meet the unique requirements of different industries, 
              providing specialized solutions for maximum impact and ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zion-blue-dark">
                      {useCase.industry}
                    </h3>
                    <div className="text-zion-cyan font-semibold">
                      ROI: {useCase.roi}
                    </div>
                    <div className="text-sm text-zion-slate">
                      {useCase.devices}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Scalable Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Start small and scale as you grow. Our pricing is based on the number of devices 
              and features you need, ensuring cost-effectiveness at every stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 ${
                plan.popular ? 'border-zion-cyan scale-105' : 'border-zion-blue-light'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">
                    {plan.plan}
                  </h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-1">
                    {plan.price}
                  </div>
                  <div className="text-zion-slate mb-2">
                    {plan.period}
                  </div>
                  <div className="text-lg font-semibold text-zion-blue-dark mb-2">
                    {plan.devices}
                  </div>
                  <p className="text-sm text-zion-slate">
                    {plan.bestFor}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white' 
                    : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Transform Your Business with IoT
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our IoT platform delivers measurable business outcomes that drive growth, 
              efficiency, and competitive advantage across all industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate mb-3">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-zion-cyan">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our IoT platform is designed to meet the unique challenges and opportunities 
              of diverse industries, from manufacturing to healthcare.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-zion-blue-dark">
                  {industry.name}
                </h3>
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
              Built on Modern Technology
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our platform leverages cutting-edge technologies to ensure reliability, 
              security, and performance at any scale.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Edge Computing", icon: Cpu, color: "from-blue-500 to-cyan-500" },
              { name: "5G Networks", icon: Wifi, color: "from-green-500 to-blue-500" },
              { name: "Machine Learning", icon: Cpu, color: "from-purple-500 to-pink-500" },
              { name: "Blockchain", icon: Lock, color: "from-indigo-500 to-purple-500" },
              { name: "Cloud Native", icon: Cloud, color: "from-orange-500 to-red-500" },
              { name: "Real-time DB", icon: Database, color: "from-teal-500 to-green-500" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-zion-blue-dark">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your IoT Ecosystem?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join the IoT revolution and transform your business with connected devices, 
            real-time data, and intelligent automation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}