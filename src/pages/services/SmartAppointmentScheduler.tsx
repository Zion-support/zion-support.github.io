import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Clock, 
  Users, 
  Smartphone, 
  CreditCard, 
  Shield, 
  CheckCircle, 
  Phone, 
  Mail, 
  ArrowRight 
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SmartAppointmentScheduler: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered appointment scheduling that optimizes availability and reduces no-shows.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Clock,
      title: "Real-time Sync",
      description: "Synchronize across all devices and platforms in real-time.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "Multi-provider Support",
      description: "Manage multiple healthcare providers and their schedules seamlessly.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Native mobile applications for iOS and Android with offline capabilities.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Secure payment processing with insurance verification and billing.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Full HIPAA compliance with enterprise-grade security measures.",
      color: "bg-red-100 text-red-600",
    },
  ];

  const pricingPlans = [
    {
      name: "Small Practice",
      price: "$99/month",
      description: "Perfect for solo practitioners and small practices",
      features: [
        "Up to 5 providers",
        "500 appointments/month",
        "Basic scheduling features",
        "Email support",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Medium Practice",
      price: "$199/month",
      description: "Ideal for growing practices with multiple providers",
      features: [
        "Up to 20 providers",
        "2,000 appointments/month",
        "Advanced scheduling features",
        "Payment processing",
        "Priority support",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large healthcare organizations",
      features: [
        "Unlimited providers",
        "Unlimited appointments",
        "Full feature suite",
        "Dedicated support",
        "Custom development",
        "White-label options",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Smart Appointment Scheduler | Zion Tech Group</title>
        <meta name="description" content="AI-powered appointment scheduling system for healthcare providers. HIPAA compliant, multi-provider support, and seamless payment integration." />
        <meta name="keywords" content="appointment scheduler, healthcare scheduling, medical practice management, HIPAA compliant, patient scheduling" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Smart Appointment Scheduler
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                AI-powered scheduling solution designed specifically for healthcare providers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  Get Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Powerful Features for Healthcare Providers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to streamline your appointment scheduling and improve patient experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing Plans</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'border-2 border-red-600' : ''
                }`}>
                  {plan.popular && (
                    <div className="bg-red-600 text-white text-center py-2 px-4 rounded-lg mb-4 -mt-8">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-red-600 mb-2">{plan.price}</div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your Scheduling?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Contact us today for a personalized demo and see how our smart appointment scheduler can benefit your practice.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+13024640950"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (302) 464-0950
                  </a>
                  <a 
                    href="mailto:kleber@ziontechgroup.com"
                    className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default SmartAppointmentScheduler;