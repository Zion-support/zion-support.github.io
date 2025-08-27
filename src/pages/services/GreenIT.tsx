import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Settings,
  Database,
  Cloud,
  Lock,
  Users,
  Rocket,
  CheckCircle,
  ArrowRight,
  Sun,
  Wind,
  Battery,
  Recycle,
  Tree,
  Lightbulb,
  Gauge,
  Target,
  Award,
  BarChart3
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function GreenIT() {
  const features = [
    {
      icon: Leaf,
      title: 'Sustainable Infrastructure',
      description: 'Design and implement eco-friendly IT infrastructure with reduced carbon footprint.'
    },
    {
      icon: Zap,
      title: 'Energy Optimization',
      description: 'Optimize energy consumption through smart power management and efficient systems.'
    },
    {
      icon: Cloud,
      title: 'Green Cloud Solutions',
      description: 'Leverage renewable energy-powered cloud infrastructure for sustainable computing.'
    },
    {
      icon: Recycle,
      title: 'Circular IT Economy',
      description: 'Implement IT asset lifecycle management with recycling and refurbishment programs.'
    }
  ];

  const solutions = [
    {
      title: 'Energy-Efficient Data Centers',
      description: 'Design and optimize data centers for maximum energy efficiency and minimal environmental impact',
      icon: Database,
      benefits: ['Reduced power consumption', 'Lower cooling costs', 'Improved PUE ratings']
    },
    {
      title: 'Renewable Energy Integration',
      description: 'Integrate solar, wind, and other renewable energy sources into IT infrastructure',
      icon: Sun,
      benefits: ['Carbon-neutral operations', 'Energy cost savings', 'Sustainable power supply']
    },
    {
      title: 'Smart Power Management',
      description: 'Implement intelligent power management systems for optimal energy usage',
      icon: Gauge,
      benefits: ['Automated power optimization', 'Real-time monitoring', 'Predictive maintenance']
    },
    {
      title: 'Green Software Development',
      description: 'Develop energy-efficient software applications and optimize existing systems',
      icon: Code,
      benefits: ['Reduced computational overhead', 'Lower energy consumption', 'Improved performance']
    }
  ];

  const useCases = [
    {
      industry: 'Enterprise',
      description: 'Large-scale IT infrastructure optimization and sustainability initiatives',
      icon: Building,
      metrics: ['Energy Savings', 'Carbon Reduction', 'Cost Optimization']
    },
    {
      industry: 'Healthcare',
      description: 'Sustainable medical technology and energy-efficient healthcare IT systems',
      icon: Heart,
      metrics: ['Equipment Efficiency', 'Energy Costs', 'Environmental Impact']
    },
    {
      industry: 'Education',
      description: 'Green campus technology and sustainable educational IT infrastructure',
      icon: GraduationCap,
      metrics: ['Student Experience', 'Operational Costs', 'Sustainability Goals']
    },
    {
      industry: 'Manufacturing',
      description: 'Smart manufacturing with energy-efficient automation and monitoring',
      icon: Factory,
      metrics: ['Production Efficiency', 'Energy Consumption', 'Environmental Compliance']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Savings',
      description: 'Reduce energy costs and operational expenses through efficient technology'
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'Meet environmental regulations and sustainability standards'
    },
    {
      icon: Globe,
      title: 'Environmental Impact',
      description: 'Reduce carbon footprint and contribute to environmental conservation'
    },
    {
      icon: Award,
      title: 'Brand Reputation',
      description: 'Enhance brand image through commitment to sustainability'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Green IT Services - Zion Tech Group"
        description="Transform your IT infrastructure with sustainable, energy-efficient solutions. Reduce carbon footprint, lower costs, and meet environmental compliance standards."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-400/20 text-green-400 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              Sustainable Technology
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Green IT
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your IT infrastructure with sustainable, energy-efficient solutions. 
              Reduce carbon footprint, lower costs, and meet environmental compliance standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-500 hover:to-emerald-600 transition-all duration-300 hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-3 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Green IT */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                What is Green IT?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Green IT, or Green Information Technology, focuses on designing, manufacturing, 
                using, and disposing of computers, servers, and associated subsystems efficiently 
                and effectively with minimal or no impact on the environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Energy Efficiency</h3>
                    <p className="text-gray-300 text-sm">Optimize power consumption and reduce energy waste</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Sustainable Materials</h3>
                    <p className="text-gray-300 text-sm">Use eco-friendly materials and reduce toxic substances</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Waste Reduction</h3>
                    <p className="text-gray-300 text-sm">Minimize electronic waste through proper lifecycle management</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Sustainability Dashboard</h3>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-green-500/20 text-green-400 rounded-lg">
                      <Leaf className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                      <Gauge className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg">
                      <Sun className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Energy Efficiency</span>
                    <span className="text-green-400">94.2%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Carbon Reduction</span>
                    <span className="text-emerald-400">-23.7%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Cost Savings</span>
                    <span className="text-blue-400">$45.2K</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our Green IT platform provides comprehensive capabilities for sustainable 
              technology implementation and environmental impact reduction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Core Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive Green IT solutions designed to transform your technology 
              infrastructure into a sustainable, energy-efficient ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                    <solution.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Green IT solutions are transforming industries across the globe, 
              enabling sustainable operations and environmental responsibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm text-gray-400">
                      <Target className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Green IT solutions can transform your organization 
              and drive measurable business and environmental outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful Green IT deployment and rapid sustainability impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluate current IT infrastructure and identify sustainability opportunities'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop comprehensive Green IT strategy and implementation roadmap'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Deploy sustainable solutions and optimize existing systems'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Monitor performance and continuously improve sustainability metrics'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Green with Your IT?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how Green IT solutions can transform your technology infrastructure, 
              reduce environmental impact, and drive cost savings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-500 hover:to-emerald-600 transition-all duration-300 hover:scale-105">
                Start Your Green IT Journey
              </button>
              <button className="px-8 py-4 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
