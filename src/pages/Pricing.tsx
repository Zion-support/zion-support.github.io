
import { 
  Check, 
  X, 
=======
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { ENHANCED_MICRO_SAAS_SERVICES } from '../data/enhancedMicroSaasServices';
import { 
  Check, 
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fbd3
  Star, 
  Zap, 
  Shield, 
  Users, 
<<<<<<< HEAD
  Building, 
  Rocket,
  Brain,
  Cpu,
  Lock,
  Cloud,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Clock,
  DollarSign,
  TrendingUp,
  Award,
  Globe,
  Headphones,
  MapPin
} from 'lucide-react';

export default function Pricing() {}
  const pricingPlans = [{
      name: &quot;Starter&quot;,
      price: &quot;$99&quot;,
      period: &quot;per month&quot;,
      description: &quot;Perfect for small businesses getting started with AI&quot;,
      features: [
        &quot;Basic AI tools and services&quot;,
        &quot;Email support&quot;,
        &quot;Up to 5 users&quot;,
        &quot;Standard security features&quot;,
        &quot;Basic analytics dashboard&quot],
      popular: false,
      color: &quot;from-blue-500 to-cyan-500&quot}, {
      name: &quot;Professional&quot;,
      price: &quot;$299&quot;,
      period: &quot;per month&quot;,
      description: &quot;Ideal for growing businesses with advanced needs&quot;,
      features: [
        &quot;Advanced AI and machine learning tools&quot;,
        &quot;Priority support&quot;,
        &quot;Up to 25 users&quot;,
        &quot;Enhanced security features&quot;,
        &quot;Advanced analytics and reporting&quot;,
        &quot;API access&quot;,
        &quot;Custom integrations&quot],
      popular: true,
      color: &quot;from-purple-500 to-pink-500&quot}, {
      name: &quot;Enterprise&quot;,
      price: &quot;$999&quot;,
      period: &quot;per month&quot;,
      description: &quot;Comprehensive solution for large organizations&quot;,
      features: [
        &quot;Full AI and quantum computing suite&quot;,
        &quot;24/7 dedicated support&quot;,
        &quot;Unlimited users&quot;,
        &quot;Enterprise-grade security&quot;,
        &quot;Custom analytics and dashboards&quot;,
        &quot;Full API access&quot;,
        &quot;Custom development services&quot;,
        &quot;Dedicated account manager&quot],
      popular: false,
      color: &quot;from-orange-500 to-red-500&quot}
  ];&quot], popular: false,
      color: "from-blue-500 to-cyan-500"
    }, { name: "Professional",
      price: "$299", period: "per month",
      description: "Ideal for growing businesses with advanced needs", features: [

      ], popular: true,
      color: "from-purple-500 to-pink-500"
    }, { name: "Enterprise",
      price: "$999", period: "per month",
      description: "Comprehensive solution for large organizations", features: [

      ], popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  const serviceCategories = [

      title: "AI Services", icon: Brain,

      startingPrice: "$99/month", description: "Machine learning, natural language processing, and AI automation"
    }, { title: "Quantum Computing", icon: Atom,
      startingPrice: "$499/month", description: "Quantum algorithms, quantum machine learning, and quantum optimization"
    }, { title: "Cybersecurity", icon: Shield,
      startingPrice: "$199/month", description: "Advanced threat detection, security monitoring, and compliance"
    }, { title: "Micro SaaS", icon: Rocket,
      startingPrice: "$149/month", description: "Custom software solutions and micro SaaS applications"
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getYearlyDiscount = (monthlyPrice: number) => {
    const yearlyTotal = monthlyPrice * 12;
    const yearlyPrice = yearlyTotal * 0.9; // 10% discount
    return Math.round(yearlyPrice);
  };

  return (
    <>
      <SEO 
        title="Pricing - Zion Tech Group | Transparent Technology Solutions Pricing"

        description="Explore Zion Tech Group&apos;s transparent pricing for AI services, quantum computing, cybersecurity, and micro SaaS solutions. Choose the plan that fits your needs."
        keywords="pricing, AI services pricing, quantum computing cost, cybersecurity pricing, micro SaaS pricing, Zion Tech Group"

      />

      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Choose the perfect plan for your business needs. All plans include 
                our core features with no hidden fees or surprises.&quot;
              </p>
              <div className=&quot;flex items-center justify-center&quot;>&quot;"
                <Star className=&quot;w-16 h-16 text-blue-400&quot; />&quot;
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fbd3
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<<<<<<< HEAD
            {addOns.map((addon, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-2xl font-bold text-cyan-400">{addon.price}</span>
                  <span className="text-gray-400 ml-1">{addon.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                <button className="w-full py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300">
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
                  Add Service
                </button>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto">
              Our team of experts is ready to help you choose the perfect solution and get you up and running quickly. 
              Get in touch today to start your digital transformation journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light">+1 (302) 464-0950</p>
                <p className="text-sm text-zion-slate-light">Available 24/7</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                <p className="text-sm text-zion-slate-light">Response within 2 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008</p>
                <p className="text-sm text-zion-slate-light">Middletown DE 19709</p>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Schedule a free consultation to discuss your needs and find the perfect plan for your business.
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
          </div>
        </div>
      </section>
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fbd3
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fbd3
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

        {/* Pricing Plans */}
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {pricingPlans.map((plan, index) => (&quot}
                <motion.div

                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

                  )}
;
                  <div className="text-center mb-8">;
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>;
                      <Star className="w-8 h-8 text-white" />;
                    </div>;
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>;
                    <div className="mb-4">;
                      <span className="text-4xl font-bold text-white">{plan.price}</span>;
                      <span className="text-gray-400 ml-2">{plan.period}</span>;
                    </div>;
                  </div>;


                    ))}
                  </ul>}`}>
                    Get Started&apos;
                  </button>
                </motion.div>

              ))}
            </div>;
          </div>;
        </section>;

        {/* Service Categories */}

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
              {serviceCategories.map((service, index) => (&quot}
                <motion.div

                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

              ))}
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}

              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Contact our team to discuss your specific needs and get a customized quote. 
                We offer flexible pricing and can tailor our services to your requirements.&quot;
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105&quot;
                >&quot;
                  <Users className=&quot;w-5 h-5 mr-2&quot; />
                  Contact Sales&quot;
                </a>
                <a
                  href=&quot;/services&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hove,r:text-white transition-all duration-200&quot;
                >&quot;
                  <ArrowRight className=&quot;w-5 h-5 mr-2&quot; />
                  View All Services&quot;
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>


  )}


