import React from 'react';'
import { motion } from 'framer-motion';'
import { Target, ArrowRight } from 'lucide-react';'
import { SEO } from '@/components/SEO';
;
const MicroCRM: React.FC = props {
  const services = [
    {
'
      title: 'Contact Management',
      description:'
        'Organize and track customer information, interactions, and history in one centralized location.',
      icon: Target},
    {
'
      title: 'Sales Pipeline',
      description:'
        'Visualize and manage your sales process from lead to close with customizable stages.',
      icon: Target},
    {
'
      title: 'Task Management',
      description:'
        'Set reminders, track follow-ups, and manage customer-related tasks efficiently.',
      icon: Target},
    {
'
      title: 'Communication Tools',
      description:'
        'Integrated email, SMS, and phone tools for seamless customer communication.',
      icon: Target},
  ];

  const useCases = [
    {
'
      industry: 'Local Services',
      description:'
        'Perfect for plumbers, electricians, and contractors who need to track jobs and customers.'},
    {
'
      industry: 'Small Retail',
      description:'
        'Ideal for boutique shops and local stores managing customer relationships and sales.'},
    {
'
      industry: 'Professional Services',
      description:'
        'Great for consultants, lawyers, and accountants tracking client interactions.'},
    {
'
      industry: 'Healthcare',
      description:'
        'Suitable for small medical practices managing patient relationships and appointments.'},
  ];

  return()
    <div className="min-h-screen bg-futuristic text-white">
      <SEO"
        title="Micro CRM for Local Businesses""
        description="Lightweight customer tracking, reminders, invoices, and reviews for local SMBs."
      />"
      <section className="container-responsive section-padding">"
        <h1 className="heading-responsive text-gradient">Micro CRM</h1>"
        <p className="mt-4 max-w-3xl text-zion-slate-light text-responsive">
          Essential CRM without bloat. Track customers, appointments, jobs, and
          invoices with SMS reminders, online payments, and review requests to
          grow word‑of‑mouth.
        </p>"
        <div className="grid-futuristic mt-10">"
          <div className="card-futuristic">"
            <h2 className="text-xl font-semibold mb-2">Highlights</h2>"
            <ul className="list-disc pl-5 space-y-2 text-zion-slate-light">
              <li>Contacts, pipelines, and tasks in one view</li>
              <li>SMS/email appointment reminders and confirmations</li>
              <li>Invoices and online payments with Stripe</li>
              <li>Automated Google review requests after service</li>
              <li>Mobile‑first with offline mode</li>
            </ul>
          </div>"
          <div className="card-futuristic">"
            <h2 className="text-xl font-semibold mb-2">Pricing</h2>"
            <ul className="list-disc pl-5 space-y-2 text-zion-slate-light">
              <li>Solo: $19/mo</li>
              <li>Team: $79/mo up to 10 users</li>
              <li>Business: $199/mo with custom fields and roles</li>
            </ul>
            <a"
              href="/request-quote""
              className="btn-futuristic mt-4 inline-block"
            >
              Get started
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}"
      <section className="py-20 bg-slate-800/30">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-center mb-16"
          >"
            <h2 className="text-4xl font-bold text-white mb-4">
              Core CRM Services
            </h2>"
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From contact management to sales tracking, we provide
              comprehensive CRM capabilities for your business.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}"
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-200"
              >"
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <Target className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>"
                <p className="text-gray-300 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-center mb-16"
          >"
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect For Your Industry
            </h2>"
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our Micro CRM is designed to work seamlessly across various local
              business types and industries.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map(useCase: unknown, index: unknown (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}"
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-200"
              >"
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <Target className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.industry}
                </h3>"
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">"
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >"
            <h2 className="text-4xl font-bold text-white mb-4">
              Start Managing Your Customers Today
            </h2>"
            <p className="text-xl text-gray-300 mb-8">
              Join businesses worldwide that use our Micro CRM to build stronger
              customer relationships and grow sales.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center">
                Get Started Today"
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>"
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MicroCRM;
'"