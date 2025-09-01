import React from 'react';'
import { motion } from 'framer-motion';
import {

  Users,
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  Shield,
  Brain,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,'
  Palette} from 'lucide-react';

export default function AISalesCopilot() {
  const features = [
    {

      icon: Brain,'
      title: 'Intelligent Lead Scoring',
      description:'
        'AI-powered lead qualification and prioritization for maximum conversion rates'},
    {

      icon: Target,'
      title: 'Predictive Analytics',
      description:'
        'Forecast sales outcomes and identify high-value opportunities with machine learning'},
    {

      icon: Users,'
      title: 'Customer Behavior Analysis',
      description:'
        'Deep insights into customer preferences and buying patterns'},
    {

      icon: TrendingUp,'
      title: 'Sales Performance Optimization',
      description:'
        'Real-time recommendations to improve sales team effectiveness'},
    {

      icon: Zap,'
      title: 'Automated Follow-ups','
      description: 'Smart scheduling and personalized follow-up sequences'},
    {

      icon: BarChart3,'
      title: 'Advanced Reporting','
      description: 'Comprehensive dashboards and actionable insights'},
  ];

  const benefits = ['
    'Increase sales conversion rates by up to 300%','
    'Reduce sales cycle time by 40%','
    'Improve lead qualification accuracy by 85%','
    'Boost sales team productivity by 60%','
    'Enhance customer engagement and retention','
    'Real-time performance monitoring and optimization',
  ];

  const useCases = [
    {
'
      title: 'Enterprise Sales Teams',
      description:'
        'Large organizations with complex sales processes and multiple stakeholders'},
    {
'
      title: 'B2B SaaS Companies',
      description:'
        'Software companies selling to businesses with long sales cycles'},
    {
'
      title: 'Consulting Firms',
      description:'
        'Professional services companies managing multiple client relationships'},
    {
'
      title: 'Manufacturing & Distribution',
      description:'
        'Companies with complex product catalogs and pricing structures'},
  ];

  return()
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}"
      <section className="relative overflow-hidden pt-32 pb-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-center"
          >"
            <div className="inline-flex items-center space-x-2 bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">"
              <Brain className="w-4 h-4" />
              <span>AI-Powered Sales Intelligence</span>
            </div>
"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Sales Copilot
            </h1>
"
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your sales process with intelligent automation,
              predictive analytics, and AI-driven insights that boost conversion
              rates and accelerate revenue growth.
            </p>
"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                Start Free Trial"
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}"
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}"
        <div className="absolute inset-0 overflow-hidden">"
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/10 rounded-full blur-3xl"></div>"
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}"
      <section className="py-20 relative">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Intelligent Sales Features
            </h2>"
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Leverage cutting-edge AI to automate, optimize, and scale your
              sales operations
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}"
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
              >"
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">"
                  <feature.icon className="w-6 h-6 text-white" />
                </div>"
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>"
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}"
      <section className="py-20 bg-zion-blue-dark/30 relative">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Sales Performance
            </h2>"
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience measurable improvements in every aspect of your sales
              process
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
            <div className="space-y-6">
              {benefits.slice(0, 3).map(benefit: unknown, index: unknown (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="flex items-start space-x-4"
                >"
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />"
                  <span className="text-zion-slate-light text-lg">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
"
            <div className="space-y-6">
              {benefits.slice(3).map(benefit: unknown, index: unknown (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="flex items-start space-x-4"
                >"
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />"
                  <span className="text-zion-slate-light text-lg">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}"
      <section className="py-20 relative">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perfect For Your Business
            </h2>"
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">'
              Whether you're a startup or enterprise, our AI Sales Copilot
              adapts to your needs
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map(useCase: unknown, index: unknown (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}"
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >"
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">"
                  <Users className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2">
                  {useCase.title}
                </h3>"
                <p className="text-zion-slate-light text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark relative">"
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Sales?
            </h2>"
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of companies already using AI to transform their
              sales performance
            </p>
"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}"
                className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                Get Started Today"
                <Rocket className="inline ml-2 w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-purple transition-all duration-300"
              >
                Contact Sales"
                <MessageCircle className="inline ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
'"