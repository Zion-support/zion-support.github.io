import React from 'react';
import {
Helmet
} from 'react-helmet-async';
import {

} from 'lucide-react';

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
              Healthcare-focused SaaS for online appointments, virtual consultations, patient data management, 
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
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Virtual Consultations</h3>
                <p className="text-gray-600">Conduct secure video consultations with integrated telemedicine capabilities.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Patient Data Storage</h3>
                <p className="text-gray-600">Secure, HIPAA-compliant storage for patient records and medical histories.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Reminders</h3>
                <p className="text-gray-600">Send SMS and email reminders to reduce no-shows by up to 40%.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Integration</h3>
                <p className="text-gray-600">Accept payments online with integrated billing and insurance processing.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Calendar Sync</h3>
                <p className="text-gray-600">Sync with Google Calendar, Outlook, and other calendar applications.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">HIPAA Compliance</h3>
                <p className="text-gray-600">Full HIPAA compliance with encrypted data transmission and storage.</p>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Practice</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">$49/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Up to 5 providers
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    500 appointments/month
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Basic telemedicine
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Email support
                  </li>
                </ul>
                <a 
                  href="tel:+13024640950" 
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-lg shadow-lg p-8 text-white relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Medium Practice</h3>
                <div className="text-3xl font-bold mb-6">$149/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    Up to 20 providers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    2,000 appointments/month
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    Advanced telemedicine
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    Payment processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    Priority support
                  </li>
                </ul>
                <a 
                  href="tel:+13024640950" 
                  className="w-full bg-white text-green-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Unlimited providers
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Unlimited appointments
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Dedicated support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    White-label options
                  </li>
                </ul>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Modernize Your Practice?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact us today for a free consultation and to discuss your appointment scheduling needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                >
                  Email Us
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                364 E Main St STE 1008, Middletown, DE 19709
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SmartAppointmentScheduler;