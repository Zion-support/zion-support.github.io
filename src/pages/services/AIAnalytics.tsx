import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Database, 
  Zap, 
  Shield, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Clock,
  Target,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Brain,
    title: 'Machine Learning Models',
    description: 'Custom ML models tailored to your business needs and data patterns'
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions with confidence'
  },
  {
    icon: Database,
    title: 'Data Processing',
    description: 'Clean, transform, and prepare data for analysis and insights'
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence',
    description: 'Real-time dashboards and reports for strategic decision making'
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Enterprise-grade security for sensitive business data'
  },
  {
    icon: Users,
    title: 'User Behavior Analysis',
    description: 'Understand customer patterns and optimize user experience'
  }
];

const benefits = [
  'Increase operational efficiency by 40%',
  'Reduce decision-making time by 60%',
  'Improve customer satisfaction by 35%',
  'Generate 25% more revenue through insights',
  'Reduce costs by 30% through automation',
  'Achieve 95% prediction accuracy'
];

const useCases = [
  {
    title: 'Customer Segmentation',
    description: 'Identify high-value customer segments for targeted marketing',
    icon: Users
  },
  {
    title: 'Fraud Detection',
    description: 'Real-time fraud detection and prevention systems',
    icon: Shield
  },
  {
    title: 'Demand Forecasting',
    description: 'Predict product demand and optimize inventory management',
    icon: TrendingUp
  },
  {
    title: 'Process Optimization',
    description: 'Streamline operations through intelligent automation',
    icon: Zap
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    company: 'TechCorp Industries',
    content: 'Zion Tech Group\'s AI analytics transformed our data strategy. We now make decisions in minutes, not days.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Data Director',
    company: 'Global Retail',
    content: 'The predictive analytics capabilities have given us a competitive edge in market forecasting.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Manager',
    company: 'Manufacturing Plus',
    content: 'Process optimization through AI has reduced our operational costs by 35%.',
    rating: 5
  }
];

export default function AIAnalytics() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue via-zion-purple to-zion-cyan opacity-20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-6 py-3 mb-8">
              <Brain className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">AI & Analytics Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="text-gradient block">AI-Powered Analytics</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Unlock the power of your data with cutting-edge artificial intelligence and advanced analytics. 
              Make smarter decisions, predict trends, and drive growth with our comprehensive AI solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="btn-outline px-8 py-4 text-lg font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive AI & Analytics Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From data processing to predictive insights, we provide end-to-end AI solutions 
              that transform raw data into actionable business intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Proven Results & Benefits
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI analytics solutions deliver measurable improvements across all business metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6"
              >
                <CheckCircle className="w-6 h-6 text-zion-cyan flex-shrink-0" />
                <span className="text-zion-slate-light">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how leading companies are leveraging AI analytics to solve complex business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-2xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">{useCase.description}</p>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our AI analytics solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-zion-cyan text-sm">{testimonial.role}</div>
                  <div className="text-zion-slate-light text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join hundreds of companies already leveraging AI analytics to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline px-8 py-4 text-lg font-semibold"
              >
                Talk to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}