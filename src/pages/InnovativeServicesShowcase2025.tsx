import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Scale, 
  Truck, 
  Heart, 
  TrendingUp, 
  PenTool, 
  Shield, 
  Zap, 
  Check, 
  ArrowRight, 
  ExternalLink, 
  Phone, 
  Mail,
  Star,
  Clock,
  Users,
  Globe
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function InnovativeServicesShowcase2025() {
  const services = [
    {
      id: 'ai-legal-document-automation',
      title: 'AI Legal Document Automation',
      description: 'Transform your legal operations with AI-powered document automation, compliance checking, and risk assessment.',
      icon: Scale,
      category: 'Legal & Compliance',
      price: 'From $299/month',
      features: [
        'AI-powered contract generation and review',
        'Legal compliance checking and validation',
        'Automated risk assessment and mitigation',
        'Multi-jurisdiction legal framework support'
      ],
      benefits: [
        'Reduce legal document creation time by 85%',
        'Minimize legal risks and compliance issues',
        'Cut legal costs by up to 60%'
      ],
      path: '/services/ai-legal-document-automation',
      rating: 4.9,
      reviewCount: 156,
      innovationLevel: 'Advanced'
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Revolutionize your supply chain with AI-powered optimization, real-time visibility, and predictive analytics.',
      icon: Truck,
      category: 'Logistics & Operations',
      price: 'From $499/month',
      features: [
        'AI-powered demand forecasting and planning',
        'Real-time inventory optimization and management',
        'Automated supplier selection and evaluation',
        'Route optimization and logistics planning'
      ],
      benefits: [
        'Reduce supply chain costs by up to 25%',
        'Improve inventory turnover by 40%',
        'Reduce lead times by 30%'
      ],
      path: '/services/ai-supply-chain-optimization',
      rating: 4.8,
      reviewCount: 234,
      innovationLevel: 'Advanced'
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics Platform',
      description: 'Transform healthcare delivery with AI-powered analytics, predictive insights, and clinical decision support.',
      icon: Heart,
      category: 'Healthcare & Life Sciences',
      price: 'From $599/month',
      features: [
        'AI-powered patient outcome prediction',
        'Real-time health monitoring and alerts',
        'Predictive analytics for disease prevention',
        'Automated medical image analysis'
      ],
      benefits: [
        'Improve patient outcomes by 35%',
        'Reduce healthcare costs by 25%',
        'Increase diagnostic accuracy by 40%'
      ],
      path: '/services/ai-healthcare-analytics',
      rating: 4.9,
      reviewCount: 189,
      innovationLevel: 'Advanced'
    },
    {
      id: 'ai-financial-trading',
      title: 'AI Financial Trading Platform',
      description: 'Revolutionize your trading with AI-powered market analysis, algorithmic execution, and intelligent risk management.',
      icon: TrendingUp,
      category: 'Finance & Trading',
      price: 'From $999/month',
      features: [
        'AI-powered market prediction and analysis',
        'Real-time algorithmic trading execution',
        'Portfolio optimization and risk management',
        'Sentiment analysis and news impact assessment'
      ],
      benefits: [
        'Increase trading returns by 25-40%',
        'Reduce trading costs by 30%',
        'Minimize emotional trading decisions'
      ],
      path: '/services/ai-financial-trading',
      rating: 4.8,
      reviewCount: 312,
      innovationLevel: 'Advanced'
    },
    {
      id: 'ai-content-creation-suite',
      title: 'AI Content Creation Suite',
      description: 'Transform your content strategy with AI-powered text, image, and video generation across all channels.',
      icon: PenTool,
      category: 'Content & Marketing',
      price: 'From $199/month',
      features: [
        'AI-powered text generation and editing',
        'Automated image creation and editing',
        'Video content generation and optimization',
        'Multi-language content localization'
      ],
      benefits: [
        'Increase content production by 10x',
        'Reduce content creation costs by 60%',
        'Improve content engagement by 45%'
      ],
      path: '/services/ai-content-creation-suite',
      rating: 4.7,
      reviewCount: 445,
      innovationLevel: 'Advanced'
    },
    {
      id: 'ai-cybersecurity-platform',
      title: 'AI Cybersecurity Platform',
      description: 'Next-generation cybersecurity with AI-powered threat detection, automated response, and predictive security.',
      icon: Shield,
      category: 'Security & Compliance',
      price: 'From $1,299/month',
      features: [
        'AI-powered threat detection and analysis',
        'Automated incident response and remediation',
        'Predictive security and risk assessment',
        'Advanced behavioral analytics'
      ],
      benefits: [
        'Detect threats 10x faster than traditional methods',
        'Reduce false positives by 80%',
        'Automate 90% of security responses'
      ],
      path: '/services/ai-cybersecurity-platform',
      rating: 4.9,
      reviewCount: 267,
      innovationLevel: 'Advanced'
    }
  ];

  const categories = ['All', 'Legal & Compliance', 'Logistics & Operations', 'Healthcare & Life Sciences', 'Finance & Trading', 'Content & Marketing', 'Security & Compliance'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Innovative AI Services 2025 - Zion Tech Group"
        description="Discover cutting-edge AI-powered services including legal automation, supply chain optimization, healthcare analytics, financial trading, content creation, and cybersecurity solutions."
      />
      
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Brain className="w-4 h-4 mr-2" /> Innovative AI Services 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Next-Generation AI Services
            </h1>
            <p className="text-zion-slate-light text-xl mb-8">
              Transform your business with cutting-edge AI-powered solutions designed for the future of work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-zion-cyan text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-zion-cyan/30"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-zion-slate-dark">{service.rating}</span>
                  <span className="text-sm text-zion-slate-light">({service.reviewCount})</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block px-2 py-1 bg-zion-slate-light/10 text-zion-slate-dark text-xs rounded-full mb-2">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold text-zion-slate-dark mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">{service.description}</p>
              </div>

              <div className="mb-4">
                <div className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</div>
                <div className="flex items-center text-sm text-zion-slate-light mb-3">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Innovation Level: {service.innovationLevel}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-zion-slate-dark mb-2 text-sm">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-zion-slate-dark">
                      <Check className="w-3 h-3 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-zion-slate-dark mb-2 text-sm">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-xs text-zion-slate-dark">
                      <Zap className="w-3 h-3 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col space-y-2">
                <a
                  href={service.path}
                  className="w-full px-4 py-2 bg-zion-cyan text-white text-center rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300 flex items-center justify-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="w-full px-4 py-2 border border-zion-cyan text-zion-cyan text-center rounded-lg hover:bg-zion-cyan/10 transition-colors duration-300"
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-zion-slate-light/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Join leading companies that are already using our AI services to gain competitive advantages and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-dark"
              >
                Visit Our Website <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}