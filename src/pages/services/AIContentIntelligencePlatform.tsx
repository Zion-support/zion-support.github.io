import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Check, 
  Star, 
  ArrowRight, 
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Video,
  BookOpen,
  Zap,
  Target,
  TrendingUp,
  Users,
  Globe,
  Lock,
  Shield,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Code,
  Palette,
  BarChart3,
  Settings,
  HelpCircle,
  Calendar,
  DollarSign,
  Award,
  Rocket,
  Leaf,
  Sparkles
} from 'lucide-react';

const AIContentIntelligencePlatform: React.FC = () => {
  const features = [
    'Real-time content analysis and scoring',
    'AI-powered SEO optimization recommendations',
    'Content performance prediction',
    'Brand voice consistency monitoring',
    'Multi-language content support',
    'Advanced sentiment analysis',
    'Content plagiarism detection',
    'Automated content tagging and categorization',
    'Performance analytics dashboard',
    'API integration capabilities'
  ];

  const benefits = [
    'Increase content engagement by 40-60%',
    'Improve SEO rankings through AI optimization',
    'Reduce content creation time by 30%',
    'Ensure brand consistency across all content',
    'Data-driven content strategy decisions',
    'Automated quality assurance',
    'Scalable content management',
    'Real-time performance insights'
  ];

  const useCases = [
    'Content marketing agencies',
    'E-commerce businesses',
    'Digital publishers',
    'Marketing teams',
    'SEO professionals',
    'Content creators',
    'Brand managers',
    'Educational institutions'
  ];

  const technologies = [
    'Natural Language Processing (NLP)',
    'Machine Learning (ML)',
    'Deep Learning',
    'Python',
    'TensorFlow',
    'PyTorch',
    'React',
    'Node.js',
    'PostgreSQL',
    'Redis',
    'AWS/Azure/GCP'
  ];

  const integrations = [
    'WordPress',
    'Shopify',
    'HubSpot',
    'Mailchimp',
    'Google Analytics',
    'Google Search Console',
    'Social media platforms',
    'CRM systems',
    'Marketing automation tools',
    'Content management systems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-purple-400 font-semibold">AI Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Content Intelligence Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Advanced AI-powered content analysis, optimization, and intelligence platform that transforms how businesses create, manage, and optimize their content for maximum engagement and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#demo"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Video className="w-5 h-5" />
                  <span>Watch Demo</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Real-time content analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">AI-powered optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Performance insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-300">Brand consistency</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Features for Content Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform provides comprehensive content analysis, optimization, and intelligence capabilities that help you create better content and achieve your business goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/10 to-pink-600/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Content Strategy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI Content Intelligence Platform can revolutionize your content creation and optimization efforts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI capabilities and expert support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-gray-400 mb-6">Perfect for small teams</p>
              <div className="mb-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">$99</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Up to 10,000 content pieces</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Basic AI analysis</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Standard integrations</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Email support</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors inline-block"
              >
                Get Started
              </a>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <p className="text-gray-400 mb-6">Ideal for growing businesses</p>
              <div className="mb-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">$299</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Everything in Starter</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Up to 100,000 content pieces</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Advanced AI analysis</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-colors inline-block"
              >
                Get Started
              </a>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">For large organizations</p>
              <div className="mb-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">$799</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Unlimited content pieces</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Custom AI models</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>24/7 support</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors inline-block"
              >
                Contact Sales
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/10 to-pink-600/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perfect for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Content Intelligence Platform is designed to help businesses of all sizes and industries create better content and achieve their goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built with Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages the latest AI and machine learning technologies to deliver exceptional performance and accuracy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/10 to-pink-600/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and workflows. Our platform integrates with the most popular content management and marketing platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-gray-300 font-medium">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss how our AI Content Intelligence Platform can help you achieve your content goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/innovative-services-showcase-2025"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View All Services</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIContentIntelligencePlatform;