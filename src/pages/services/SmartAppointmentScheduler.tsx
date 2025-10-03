import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Calendar, Clock, Phone, Mail, CheckCircle, Bell, CreditCard, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SmartAppointmentScheduler: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Smart Appointment Scheduler - Zion Tech Group</title>
        <meta name="description" content="Healthcare-focused SaaS for online appointments, virtual consultations, patient data management, and automated reminders." />
        <meta name="keywords" content="appointment scheduler, healthcare SaaS, patient management, virtual consultations, medical scheduling" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart Appointment Scheduler
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Streamline your healthcare practice with our comprehensive appointment management system. 
              Book, manage, and optimize patient appointments with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Features Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Scheduling</h3>
                <p className="text-gray-600">
                  AI-powered scheduling that optimizes appointment times and reduces no-shows.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Virtual Consultations</h3>
                <p className="text-gray-600">
                  Integrated video calling for remote patient consultations and follow-ups.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Reminders</h3>
                <p className="text-gray-600">
                  Smart notifications via SMS, email, and push notifications to reduce cancellations.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Patient Management</h3>
                <p className="text-gray-600">
                  Comprehensive patient profiles with medical history and appointment tracking.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Integration</h3>
                <p className="text-gray-600">
                  Secure payment processing with insurance verification and billing automation.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">HIPAA Compliance</h3>
                <p className="text-gray-600">
                  Enterprise-grade security and HIPAA compliance to protect patient data.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
              <p className="text-lg text-gray-600">Choose the plan that fits your practice</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">$29<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Up to 100 appointments/month
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Basic scheduling features
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Email reminders
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Patient portal access
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>

              {/* Professional Plan */}
              <div className="bg-white rounded-lg shadow-lg p-8 relative border-2 border-green-500">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">$79<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Up to 500 appointments/month
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Advanced scheduling features
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    SMS & email reminders
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Virtual consultations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Payment processing
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-green-600 mb-6">$199<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Unlimited appointments
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    All premium features
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Advanced analytics
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="w-full bg-white text-green-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center block border-2 border-green-600"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Practice?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of healthcare providers who trust our appointment scheduling solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Start Free Trial
                </a>
                <a
                  href="/demo"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default SmartAppointmentScheduler;