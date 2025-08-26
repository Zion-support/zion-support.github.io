import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { ENHANCED_MICRO_SAAS_SERVICES } from '../data/enhancedMicroSaasServices';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Brain, 
  Lock, 
  Database, 
  Smartphone, 
  DollarSign, 
  Building, 
  Globe,
  ArrowRight,
  Phone,
  Mail,
  Globe as GlobeIcon,
  MapPin,
  Clock,
  TrendingUp,
  Target,
  Rocket
} from 'lucide-react';

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const categories = ['All', ...Array.from(new Set(ENHANCED_MICRO_SAAS_SERVICES.map(s => s.category)))];
  
  const filteredServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics': return Brain;
      case 'AI & Marketing': return Target;
      case 'AI & HR': return Users;
      case 'AI & Legal': return Shield;
      case 'Cybersecurity': return Lock;
      case 'Blockchain': return Database;
      case 'IoT & Edge': return Smartphone;
      case 'AI & Finance': return DollarSign;
      case 'AI & Healthcare': return Building;
      case 'AI & Education': return Globe;
      default: return Zap;
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'enterprise': return 'from-purple-500 to-pink-500';
      case 'premium': return 'from-blue-500 to-cyan-500';
      case 'standard': return 'from-green-500 to-teal-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getSupportLevelIcon = (level: string) => {
    switch (level) {
      case 'enterprise': return Star;
      case 'premium': return Shield;
      case 'standard': return Check;
      default: return Check;
    }
  };

  const calculateAnnualPrice = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.8); // 20% discount for annual
  };

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-2000"></div>
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 text-xs animate-matrix-rain opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <SEO 
        title="Pricing - Zion Tech Group Micro SAAS Solutions" 
        description="Transparent pricing for our comprehensive suite of AI-powered micro SAAS solutions. Get enterprise-grade technology at competitive prices."
        keywords="pricing, micro SAAS, AI services, business solutions, transparent pricing, enterprise software"
        url="https://ziontechgroup.com/pricing"
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neon-text text-cyan-400">Transparent Pricing</span>
            <span className="block text-white mt-2">For Every Business</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect micro SAAS solution for your business with our transparent, 
            competitive pricing. All plans include enterprise-grade features and support.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="text-center mb-12">
          <div className="inline-flex bg-black/30 backdrop-blur-xl rounded-2xl p-2 border border-cyan-500/30">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual Billing
              <span className="ml-2 px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-wrap gap-2 bg-black/30 backdrop-blur-xl rounded-2xl p-2 border border-cyan-500/30">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              className="group bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })}
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getSupportLevelColor(service.supportLevel)} text-white`}>
                    {service.supportLevel}
                  </span>
                </div>
              </div>

              {/* Service Title and Description */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="text-center mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-1">
                  ${billingCycle === 'monthly' ? service.price.toLocaleString() : calculateAnnualPrice(service.price).toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm mb-2">
                  per {billingCycle === 'monthly' ? 'month' : 'year'}
                </div>
                {billingCycle === 'annual' && (
                  <div className="text-green-400 text-sm font-medium">
                    Save ${(service.price * 12 - calculateAnnualPrice(service.price)).toLocaleString()} annually
                  </div>
                )}
                <div className="text-xs text-gray-500 mt-2">
                  Market: {service.marketPrice}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                <div className="space-y-2">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-xs text-cyan-400 mt-2 text-center">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">Key Benefits:</h4>
                <div className="space-y-2">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-3">Technology:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.technology.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                  {service.technology.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                      +{service.technology.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* ROI and Delivery */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="text-green-400">
                  <span className="font-semibold">ROI:</span> {service.roi}
                </div>
                <div className="text-blue-400">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {service.estimatedDelivery}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center justify-center group">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Contact Information Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our team of experts is ready to help you choose the perfect solution and get you up and running quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      </div>

      {/* FAQ Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Do you offer custom pricing for enterprise clients?",
                answer: "Absolutely! We work with enterprise clients to create custom solutions and pricing that fits their specific requirements and budget."
              },
              {
                question: "What's included in the support?",
                answer: "All plans include 24/7 support. Professional and Enterprise plans include priority support with dedicated account managers."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for monthly plans. Annual plans include free setup and onboarding services."
              },
              {
                question: "Can I cancel my subscription?",
                answer: "Yes, you can cancel at any time with no penalties. We'll help you export your data and ensure a smooth transition."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          </div>
        </div>
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of AI-driven automation. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
=======
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of AI-driven automation. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200">
              Contact Sales
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Questions? Our team is here to help you choose the right plan.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already transforming their operations with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300"
              >
                Contact Sales
              </Link>
=======
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 font-medium">{contactInfo.phone}</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-cyan-400 font-medium">{contactInfo.email}</p>
              <p className="text-gray-400 text-sm">Response within 2 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Website</h3>
              <p className="text-cyan-400 font-medium">{contactInfo.website}</p>
              <p className="text-gray-400 text-sm">Learn more about us</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Our Location</h3>
              <p className="text-cyan-400 font-medium text-sm">{contactInfo.address}</p>
              <p className="text-gray-400 text-sm">Delaware, USA</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30 mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  What's included in the pricing?
                </h3>
                <p className="text-gray-300">
                  All plans include the core software, technical support, regular updates, security patches, and access to our knowledge base. Enterprise plans include dedicated support and custom integrations.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  Can I customize the solutions?
                </h3>
                <p className="text-gray-300">
                  Yes! All our solutions are highly customizable. We work with you to tailor the software to your specific business needs and integrate with your existing systems.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  What kind of support do you provide?
                </h3>
                <p className="text-gray-300">
                  We provide comprehensive support including 24/7 technical assistance, onboarding, training, and ongoing consultation. Enterprise clients get dedicated account managers.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  How long does implementation take?
                </h3>
                <p className="text-gray-300">
                  Implementation typically takes 2-8 weeks depending on complexity. We provide detailed project timelines and regular updates throughout the process.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  Do you offer training?
                </h3>
                <p className="text-gray-300">
                  Yes! We provide comprehensive training for your team, including user guides, video tutorials, and live training sessions. We also offer ongoing training as needed.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  What about data security?
                </h3>
                <p className="text-gray-300">
                  Security is our top priority. All solutions include enterprise-grade encryption, regular security audits, compliance certifications, and secure cloud hosting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your Digital Transformation Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have already transformed their operations with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
=======
                      <Badge className="bg-zion-blue text-white px-4 py-2">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <div className="mb-8">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">
                          ${billingCycle === 'yearly' ? plan.price.yearly / 12 : plan.price.monthly}
                        </span>
                        <span className="text-gray-600 ml-2">/month</span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <p className="text-sm text-gray-500 mt-1">
                          Billed annually (${plan.price.yearly})
                        </p>
                      )}
                    </div>
                    
                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-zion-blue hover:bg-zion-blue/90' 
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                      onClick={() => setSelectedPlan(plan.name)}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add-ons Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enhance your plan with specialized services tailored to your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{addon.name}</CardTitle>
                    <p className="text-gray-600">{addon.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-gray-900">
                          ${billingCycle === 'yearly' ? addon.price.yearly / 12 : addon.price.monthly}
                        </span>
                        <span className="text-gray-600 ml-2">/month</span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <p className="text-sm text-gray-500 mt-1">
                          Billed annually (${addon.price.yearly})
                        </p>
                      )}
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {addon.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="outline" className="w-full">
                      Add to Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our pricing and services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I change my plan at any time?
                  </h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is there a setup fee?
                  </h3>
                  <p className="text-gray-600">
                    No setup fees for any of our plans. You only pay the monthly or yearly subscription cost.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-600">
                    We accept all major credit cards, PayPal, and bank transfers for annual plans.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you offer custom pricing?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team for details.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is there a money-back guarantee?
                  </h3>
                  <p className="text-gray-600">
                    We offer a 30-day money-back guarantee for all new subscriptions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I cancel anytime?
                  </h3>
                  <p className="text-gray-600">
                    Yes, you can cancel your subscription at any time with no cancellation fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zion-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and start transforming your technology infrastructure today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-white px-8 py-4 text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}