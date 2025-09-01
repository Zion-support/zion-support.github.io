import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRICING_GUIDE_2025 } from '@/data/pricingGuide2025';
import {
  Check,
  Star,
  DollarSign,
  TrendingDown,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Zap,
  Shield,
  Clock,
  Users,
  Rocket,
  Award,
  Target,
  ChevronRight
} from 'lucide-react';

export default function EnhancedPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('microSaas');

  const categories = [
    { id: 'microSaas', name: 'Micro SaaS', icon: Zap },
    { id: 'aiServices', name: 'AI Services', icon: Rocket },
    { id: 'itServices', name: 'IT Services', icon: Shield }
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: "40-60% Cost Savings",
      description: "Save significantly compared to industry averages while getting premium features"
    },
    {
      icon: Clock,
      title: "Quick Implementation",
      description: "Get up and running in 24 hours to 8 weeks depending on complexity"
    },
    {
      icon: Award,
      title: "Proven ROI",
      description: "Average ROI of 300-800% within 6-18 months across all services"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 support with dedicated specialists for each service category"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      quote: "Zion Tech Group's AI Content Creator saved us $40,000 annually while improving our content quality by 300%.",
      service: "AI Content Creator Pro"
    },
    {
      name: "Michael Chen",
      company: "Enterprise Corp",
      quote: "Their cybersecurity operations center reduced our security incidents by 95% in the first 6 months.",
      service: "Cybersecurity Operations Center"
    },
    {
      name: "Lisa Rodriguez",
      company: "Growth Agency",
      quote: "The social media scheduler increased our client engagement rates by 60% while saving 20 hours per week.",
      service: "AI Social Media Scheduler"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="text-cyan-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get enterprise-grade solutions at startup-friendly prices. No hidden fees, 
              no long-term contracts, just exceptional value.
            </p>
            <div className="flex items-center justify-center space-x-8 text-cyan-400">
              <div className="flex items-center">
                <TrendingDown className="w-6 h-6 mr-2" />
                <span className="font-semibold">50% Below Market</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                <span className="font-semibold">Quick Setup</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 mr-2" />
                <span className="font-semibold">Proven ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Selector */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {PRICING_GUIDE_2025[selectedCategory]?.title}
              </h2>
              <p className="text-xl text-gray-300 mb-2">
                {PRICING_GUIDE_2025[selectedCategory]?.priceRange}
              </p>
              <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                <TrendingDown className="w-4 h-4 mr-2" />
                {PRICING_GUIDE_2025[selectedCategory]?.savings}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRICING_GUIDE_2025[selectedCategory]?.services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400">{service.price}</div>
                        <div className="text-sm text-green-400">Our Price</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-semibold text-gray-400 line-through">{service.market}</div>
                        <div className="text-sm text-gray-500">Market Average</div>
                      </div>
                    </div>
                    <div className="inline-flex items-center bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      <Star className="w-4 h-4 mr-1" />
                      Save {Math.round(((parseFloat(service.market.replace(/[^0-9]/g, '')) - parseFloat(service.price.replace(/[^0-9]/g, ''))) / parseFloat(service.market.replace(/[^0-9]/g, ''))) * 100)}%
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Free trial available</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>24/7 expert support</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>No setup fees</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>

                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    Start Free Trial
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300">Exceptional value with enterprise-grade quality</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Real results from real customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                  <div className="text-sm text-cyan-400">{testimonial.service}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-8 border border-cyan-500/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Need Custom Pricing?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us for enterprise solutions, volume discounts, or custom requirements
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{PRICING_GUIDE_2025.contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{PRICING_GUIDE_2025.contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Middletown, DE</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Contact Sales
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href={`tel:${PRICING_GUIDE_2025.contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}