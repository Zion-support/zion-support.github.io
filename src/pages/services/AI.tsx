import React from "react"
import { Link } from "react-router-dom"
import {
  Brain
  Cpu
  Zap
  Target
  Users
  Shield
  TrendingUp
  CheckCircle
  ArrowRight
  Play
  Code
  Database
  Cloud
  Lock
  BarChart3
  Eye
  MessageSquare
  Heart
  DollarSign
  Factory
  ShoppingCart
} from "lucide-react"
export default function AIServices() {
  const aiServices = [
    {
      na,
  m: e: "AI Strategy & Consulting",descripti,
  o: n: "Strategic guidance on implementing AI solutions across your organization",ic,
  o: n: Target,featur,
  e: s: [
        "AI readiness assessment"
        "Technology roadmap planning"
        "ROI analysis and business case development"
        "Change management strategies"
      ]
      pric,
  e: "From $2,500"
      durati,
  o: n: "2-4 weeks"
    }, {
      na,
  m: e: "Machine Learning Development",descripti,
  o: n: "Custom ML models and algorithms tailored to your specific business needs",ic,
  o: n: Brain,featur,
  e: s: [
        "Custom model development"
        "Data preprocessing and feature engineering"
        "Model training and optimization"
        "Performance monitoring and maintenance"
      ]
      pric,
  e: "From $5,000"
      durati,
  o: n: "4-8 weeks"
    }, {
      na,
  m: e: "AI-Powered Applications",descripti,
  o: n: "Intelligent automation and insights through custom AI applications",ic,
  o: n: Zap,featur,
  e: s: [
        "Chatbot and virtual assistant development"
        "Predictive analytics applications"
        "Computer vision solutions"
        "Natural language processing systems"
      ]
      pric,
  e: "From $8,500"
      durati,
  o: n: "6-12 weeks"
    }, {
      na,
  m: e: "AI Infrastructure & MLOps",descripti,
  o: n: "Scalable AI infrastructure and machine learning operations",ic,
  o: n: Cloud,featur,
  e: s: [
        "ML pipeline automation"
        "Model versioning and deployment"
        "Scalable training infrastructure"
        "Monitoring and alerting systems"
      ]
      pric,
  e: "From $6,000"
      durati,
  o: n: "4-10 weeks"
    }
  ]
  const aiTechnologies = [
    { na,
  m: e: "TensorFlow", descripti,
  o: n: "Open-source ML framework", ic,
  o: n: Code }, { na,
  m: e: "PyTorch", descripti,
  o: n: "Deep learning research platform", ic,
  o: n: Brain }, { na,
  m: e: "OpenAI GPT", descripti,
  o: n: "Advanced language models", ic,
  o: n: Cpu }, { na,
  m: e: "Computer Vision", descripti,
  o: n: "Image and video analysis", ic,
  o: n: Eye }, { na,
  m: e: "NLP", descripti,
  o: n: "Natural language processing", ic,
  o: n: MessageSquare }, { na,
  m: e: "AutoML", descripti,
  o: n: "Automated machine learning", ic,
  o: n: Zap }
  ]
  const useCases = [
    {
      indust,
  r: y: "Healthcare",applicatio,
  n: s: ["Medical image analysis", "Drug discovery", "Patient risk prediction"]
      ic,
  o: n: Heart
    }, {
      indust,
  r: y: "Finance",applicatio,
  n: s: ["Fraud detection", "Credit scoring", "Algorithmic trading"]
      ic,
  o: n: DollarSign
    }, {
      indust,
  r: y: "Manufacturing",applicatio,
  n: s: ["Predictive maintenance", "Quality control", "Supply chain optimization"]
      ic,
  o: n: Factory
    }, {
      indust,
  r: y: "Retail",applicatio,
  n: s: ["Customer segmentation", "Demand forecasting", "Personalized recommendations"]
      ic,
  o: n: ShoppingCart
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              AI & Machine Learning
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence. From strategy to implementation
              we deliver AI solutions that drive real results.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 transition-all duration-200";"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg,
  hove: r:bg-cyan-500 hove,
  r:text-white transition-all duration-200">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to accelerate your digital transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8,
  hove: r: border-cyan-500/50 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105";"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <p className="text-slate-400">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-slate-400 text-sm">{service.duration}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="className="px-6 py-2 bg-cyan-600,
  hove: r:bg-cyan-700 text-white font-medium rounded-lg transition-colors duration-200";"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Cutting-Edge AI Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We leverage the latest AI frameworks and tools to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2,
  m: d:grid-cols-3 l,
  g:grid-cols-6 gap-8">
            {aiTechnologies.map((tech, index) => (
              <div
                key={index}
                className="className="text-center p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl,
  hove: r:border-cyan-500/50 transition-all duration-300";"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-slate-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              AI Across Industries
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover how AI is transforming various sectors and creating new opportunities
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r:border-cyan-500/50 transition-all duration-300";"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg w-12 h-12 mb-4 flex items-center justify-center">
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="text-slate-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how AI can transform your business operations and drive growth
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 transition-all duration-200";"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg,
  hove: r:bg-cyan-500 hove,
  r:text-white transition-all duration-200";"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}