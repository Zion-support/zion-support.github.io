import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Database, 
  Brain, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Target,
  BarChart3,
  Clock,
  Users,
  Rocket,
  Network,
  Server,
  Cloud,
  Cpu,
  Activity,
  Phone,
  Mail,
  MapPin,
  Pipeline,
  Flow,
  Stream,
  Filter,
  Sort,
  Transform,
  Load,
  Extract,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Settings,
  Cog,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Ruler,
  Compass,
  Map,
  Navigation,
  Route,
  Path,
  Way,
  Direction,
  Arrow,
  Pointer,
  Cursor,
  Mouse,
  Touch,
  Hand,
  Finger,
  Thumb,
  Index,
  Middle,
  Ring,
  Pinky
} from 'lucide-react';

export default function AIDataPipelineOptimizer() {
  const features = [
    {
      icon: Database,
      title: 'Intelligent Data Processing',
      description: 'AI-powered data transformation and optimization',
      benefits: ['Smart filtering', 'Data quality checks', 'Automated cleansing']
    },
    {
      icon: Brain,
      title: 'Predictive Optimization',
      description: 'ML-driven pipeline performance prediction',
      benefits: ['Performance forecasting', 'Bottleneck detection', 'Resource optimization']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Streaming data pipeline optimization',
      benefits: ['Low latency', 'High throughput', 'Scalable processing']
    },
    {
      icon: Users,
      title: 'Automated Monitoring',
      description: 'Intelligent pipeline health monitoring',
      benefits: ['Proactive alerts', 'Performance metrics', 'Error detection']
    }
  ];

  const solutions = [
    {
      title: 'Data Ingestion & ETL',
      description: 'Optimized data extraction, transformation, and loading',
      icon: Extract,
      features: ['Data validation', 'Schema evolution', 'Incremental loading']
    },
    {
      title: 'Stream Processing',
      description: 'Real-time data stream optimization',
      icon: Stream,
      features: ['Event processing', 'Window operations', 'State management']
    },
    {
      title: 'Data Quality Management',
      description: 'AI-powered data quality assurance',
      icon: Filter,
      features: ['Quality scoring', 'Anomaly detection', 'Data profiling']
    },
    {
      title: 'Performance Optimization',
      description: 'Intelligent resource allocation and optimization',
      icon: Settings,
      features: ['Resource scaling', 'Query optimization', 'Caching strategies']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '10x Processing Speed',
      description: 'Dramatically faster data processing'
    },
    {
      icon: Clock,
      title: 'Real-time Insights',
      description: 'Immediate data availability and analysis'
    },
    {
      icon: Users,
      title: 'Reduced Costs',
      description: 'Optimized resource utilization'
    },
    {
      icon: TrendingUp,
      title: 'Improved Reliability',
      description: 'Automated error handling and recovery'
    }
  ];

  const pipelineStages = [
    {
      stage: 'Data Ingestion',
      components: ['Source connectors', 'Data validation', 'Schema detection'],
      icon: Extract
    },
    {
      stage: 'Processing & Transformation',
      components: ['Data cleansing', 'Format conversion', 'Business logic'],
      icon: Transform
    },
    {
      stage: 'Quality Assurance',
      components: ['Data profiling', 'Anomaly detection', 'Quality scoring'],
      icon: Filter
    },
    {
      stage: 'Storage & Delivery',
      components: ['Optimized storage', 'Data distribution', 'Access control'],
      icon: Database
    }
  ];

  return (
    <>
      <SEO 
        title="AI Data Pipeline Optimizer - Intelligent Data Processing | Zion Tech Group"
        description="Optimize your data pipelines with AI-powered processing, real-time optimization, and intelligent resource management."
        keywords="AI data pipeline optimizer, data processing, ETL optimization, stream processing, data quality management"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-blue-600/20"></div>
          <div className="container-responsive relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Database className="w-4 h-4" />
                Data Solutions
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Data Pipeline Optimizer
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data processing with AI-powered pipeline optimization, real-time 
                processing, and intelligent resource management for maximum efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Pipeline Assessment
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                AI-Powered Pipeline Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with data engineering best practices to deliver 
                comprehensive pipeline optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pipeline Stages Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                End-to-End Pipeline Optimization
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive optimization across all stages of your data pipeline.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pipelineStages.map((stage, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <stage.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{stage.stage}</h3>
                  <ul className="space-y-2">
                    {stage.components.map((component, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-indigo-400" />
                        {component}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Complete Data Pipeline Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From ingestion to delivery, our platform optimizes every aspect of data processing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                      <p className="text-gray-400 mb-4">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose AI Data Pipeline Optimizer?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the transformative power of AI in data processing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-blue-600/20 border border-purple-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Data Pipelines?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading organizations who are already using our AI platform to accelerate 
                data processing and gain real-time insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Pipeline Assessment
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                  Contact Data Team
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Let's Discuss Your Data Pipeline Needs
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Our data AI experts are ready to help you optimize your data processing 
                  workflows and achieve maximum efficiency. Get in touch to learn more.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Request Pipeline Assessment</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Organization"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your data pipeline challenges and requirements..."
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}