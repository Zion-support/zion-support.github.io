
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, CheckCircle, Star, TrendingUp, Users, Zap } from 'lucide-react';

  const services = [
    {

      name: 'AI Business Intelligence',
      category: 'AI & Analytics',
      features: ['Machine Learning',Data Visualization',Predictive Analytics',Real-time Insights'],
      pricing: 'Custom',
      rating: 4.9,
      users: '500+',
      icon: BarChart3
    },
    {

      name: 'Digital Twin Platform',
      category: 'IoT & Simulation',
      features: ['Real-time Monitoring',Predictive Maintenance',3D Visualization',API Integration'],
      pricing: 'From $2,500/month',
      rating: 4.8,
      users: '200+',
      icon: Zap
    },
    {

      name: 'Cybersecurity Suite',
      category: 'Security',
      features: ['Threat Detection',Incident Response',Compliance Monitoring',24/7 Support'],
      pricing: 'From $1,800/month',
      rating: 4.9,
      users: '300+',
      icon: Star
    }
  ];

  return()
    <div className="min-h-screen bg-slate-900 text-white pt-20">"      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}"
          className="text-center mb-16"
        >"
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Services Comparison
          </h1>"
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Compare our comprehensive range of technology services to find the perfect solution for your business needs.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}"
          className="bg-slate-800 rounded-2xl p-6 md:p-8 mb-12"
        >"
          <div className="overflow-x-auto">"
            <table className="w-full">
              <thead>"
                <tr className="border-b border-slate-700">"
                  <th className="text-left py-4 px-4 text-slate-300 font-medium">Service</th>"
                  <th className="text-left py-4 px-4 text-slate-300 font-medium">Category</th>"
                  <th className="text-left py-4 px-4 text-slate-300 font-medium">Key Features</th>"
                  <th className="text-left py-4 px-4 text-slate-300 font-medium">Pricing</th>"
                  <th className="text-left py-4 px-4 text-slate-300 font-medium">Rating</th>"
                  <th className="text-left py-4 px-4 text-slate-300 font-medium">Users</th>
                </tr>
              </thead>
              <tbody>
                {services.map ( (service, index) => (<motion.tr
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}"
                    className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
                  >"
                    <td className="py-4 px-4">"
                      <div className="flex items-center space-x-3">"
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">"
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>"
                          <div className="font-semibold text-white">{service.name}</div>
                        </div>
                      </div>
                    </td>"
                    <td className="py-4 px-4 text-slate-300">{service.category}</td>"
                    <td className="py-4 px-4">"
                      <div className="space-y-1">
                        {service.features.map((feature, featureIndex) => ("
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm">"
                            <CheckCircle className="w-4 h-4 text-green-400" />"                            <span className="text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </td>"
                    <td className="py-4 px-4 text-slate-300">{service.pricing}</td>"
                    <td className="py-4 px-4">"
                      <div className="flex items-center space-x-1">"
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />"                        <span className="text-slate-300">{service.rating}</span>
                      </div>
                    </td>"
                    <td className="py-4 px-4 text-slate-300">{service.users}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}"
          className="text-center"
        >"
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">"
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Help Choosing?
            </h2>"
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our experts are here to help you find the perfect service for your business requirements. 
              Get personalized recommendations and pricing.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors">
                Get Expert Consultation
              </button>"
              <button className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-medium transition-colors">
                View All Services
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Do you offer custom pricing for enterprise clients?
            </h3>
            <p className="text-gray-600">
              Absolutely! Enterprise clients often have unique requirements, and we provide custom pricing 
              based on your specific needs, scale, and project scope.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What kind of support is included?
            </h3>
            <p className="text-gray-600">
              Support varies by tier: Starter includes email support, Professional adds priority email support, 
              and Enterprise provides 24/7 priority support with dedicated account management.
            </p>
          </div>
        </div>
      </div>
    </div>) ;
}

'"