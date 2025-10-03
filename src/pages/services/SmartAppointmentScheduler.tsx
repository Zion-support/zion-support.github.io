import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const SmartAppointmentScheduler: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Smart Appointment Scheduler - Zion Tech Group</title>
        <meta name="description" content="Healthcare-focused SaaS for online appointments, virtual consultations, patient data management, and automated reminders." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart Appointment Scheduler
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Streamline your healthcare practice with our intelligent appointment scheduling system. 
              Manage bookings, virtual consultations, and patient data with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
              >
                Get Started
              </a>
              <a 
                href="/demo"
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
              >
                View Demo
              </a>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Scheduling</h3>
                <p className="text-gray-600">Automated appointment booking with intelligent conflict resolution and optimization.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Virtual Consultations</h3>
                <p className="text-gray-600">Integrated video calling for remote patient consultations and follow-ups.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Patient Management</h3>
                <p className="text-gray-600">Comprehensive patient profiles with medical history and appointment tracking.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">HIPAA Compliant</h3>
                <p className="text-gray-600">Enterprise-grade security with full HIPAA compliance for healthcare data protection.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Automated Reminders</h3>
                <p className="text-gray-600">Smart notification system for appointments, follow-ups, and medication reminders.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Small Practice</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">$99/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Up to 100 appointments/month
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Basic patient management
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Email reminders
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Mobile app access
                  </li>
                </ul>
                <a 
                  href="/contact"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-green-600">
                <h3 className="text-2xl font-bold mb-4">Medium Practice</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">$199/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Up to 500 appointments/month
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Advanced patient management
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    SMS & email reminders
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Virtual consultations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Analytics dashboard
                  </li>
                </ul>
                <a 
                  href="/contact"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Large Practice</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">$399/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Unlimited appointments
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Multi-location support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    API access
                  </li>
                </ul>
                <a 
                  href="/contact"
                  className="w-full bg-white text-green-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Practice?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of healthcare providers who trust our platform for their appointment scheduling needs.
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
      </div>
    </>
  );
};

export default SmartAppointmentScheduler;