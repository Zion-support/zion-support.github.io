import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Users,
  Calendar,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  Star
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SmartAppointmentScheduler: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: "Online Booking",
      description: "24/7 online appointment booking with real-time availability",
      benefit: "Reduce no-shows by 40%",
    },
    {
      icon: Clock,
      title: "Automated Reminders",
      description: "SMS and email reminders to reduce missed appointments",
      benefit: "Increase attendance rates",
    },
    {
      icon: Users,
      title: "Patient Management",
      description: "Comprehensive patient database and history tracking",
      benefit: "Streamlined workflows",
    },
    {
      icon: CheckCircle,
      title: "Virtual Consultations",
      description: "Integrated video calling for remote consultations",
      benefit: "Expand your reach",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$49",
      period: "per month",
      description: "Perfect for small practices",
      features: [
        "Up to 5 providers",
        "500 appointments/month",
        "Basic reminders",
        "Email support",
        "Mobile app access"
      ],
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      popular: true,
      description: "Ideal for growing practices",
      features: [
        "Up to 15 providers",
        "2,000 appointments/month",
        "Advanced reminders",
        "Virtual consultations",
        "Priority support",
        "Custom branding"
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large healthcare organizations",
      features: [
        "Unlimited providers",
        "Unlimited appointments",
        "Custom integrations",
        "Dedicated support",
        "White-label options"
      ],
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      practice: "Family Medical Center",
      content: "The appointment scheduler has transformed our practice. We've reduced no-shows by 45% and our patients love the convenience.",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      practice: "Cardiology Associates",
      content: "The virtual consultation feature has been a game-changer, especially during the pandemic. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Smart Appointment Scheduler - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Healthcare-focused SaaS for online appointments, virtual consultations, patient data management, and automated reminders." 
        />
      </Helmet>
      
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart Appointment Scheduler
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Healthcare-focused SaaS for online appointments, virtual consultations, patient data management
              and automated reminders. Streamline your practice with intelligent scheduling.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-green-600">Starting at $49/month</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for hospitals, clinics, and private practices looking to modernize their appointment system.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="w-full bg-white text-green-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to modernize your healthcare practice's appointment system.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <div className="text-sm font-medium text-green-600">
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 bg-white rounded-xl shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your practice size and needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-8 ${plan.popular ? 'ring-2 ring-green-500 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-green-600 mb-2">{plan.price}</div>
                    <div className="text-gray-600 mb-4">{plan.period}</div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by healthcare providers nationwide to streamline their appointment systems.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.practice}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Modernize Your Practice?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact us today for a free consultation and to discuss your appointment scheduling needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SmartAppointmentScheduler;