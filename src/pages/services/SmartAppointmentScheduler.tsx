import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Calendar, Clock, Phone, Mail, CheckCircle } from 'lucide-react';

const SmartAppointmentScheduler: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Smart Appointment Scheduler - Zion Tech Group</title>
        <meta name="description" content="Healthcare-focused SaaS for online appointments, virtual consultations, patient data management, and automated reminders." />
      </Helmet>
      
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
                <a href="tel:+13024640950"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Call +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Scheduling</h3>
                <p className="text-gray-600">AI-powered scheduling that optimizes appointment times based on patient preferences and provider availability.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Virtual Consultations</h3>
                <p className="text-gray-600">Built-in video conferencing for remote consultations with secure patient data handling.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Reminders</h3>
                <p className="text-gray-600">SMS and email reminders to reduce no-shows and improve patient engagement.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient Management</h3>
                <p className="text-gray-600">Comprehensive patient profiles with medical history and appointment tracking.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">HIPAA Compliance</h3>
                <p className="text-gray-600">Fully compliant with healthcare regulations and data protection standards.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Channel Communication</h3>
                <p className="text-gray-600">Integrated communication tools for seamless patient-provider interaction.</p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Solution</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">For Healthcare Providers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Reduce administrative overhead by 60%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Decrease no-show rates with smart reminders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Improve patient satisfaction scores</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Increase revenue through better utilization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">For Patients</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Easy online booking 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Virtual consultation options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Automated appointment reminders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Secure access to medical records</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Practice?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of healthcare providers who have streamlined their operations with our Smart Appointment Scheduler.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Call +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                >
                  Email Us
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