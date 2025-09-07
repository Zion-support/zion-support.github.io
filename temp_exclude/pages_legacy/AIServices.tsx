import React from 'react';
<<<<<<< HEAD
import { 
  Star,
  Clock,
  Users,
  TrendingUp,
  Database,
  Network,
  Target,
  Rocket,
  Brain,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const aiServices = [
  {
    title: "Machine Learning Models",
    description: "Custom ML models for your specific business needs",
    icon: Brain,
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"]
  },
  {
    title: "AI Automation",
    description: "Automate repetitive tasks with intelligent systems",
    icon: Zap,
    features: ["Process Automation", "Data Processing", "Customer Service"]
  },
  {
    title: "AI Security",
    description: "Advanced security solutions powered by AI",
    icon: Shield,
    features: ["Threat Detection", "Fraud Prevention", "Access Control"]
  }
];

const stats = [
  { number: "500+", label: "AI Models Deployed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "AI Monitoring" },
  { number: "50+", label: "Enterprise Clients" }
];

export default function AIServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
=======
import Head from 'next/head';
import Link from 'next/link';

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Professional AI services for your business needs." />
      </Head>
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {aiServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}