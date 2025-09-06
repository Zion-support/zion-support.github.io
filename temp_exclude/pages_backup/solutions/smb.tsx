
import React from 'react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  DollarSign, 
  Zap, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const smbServices = [
  {
    icon: DollarSign,
    title: 'Cost-Effective IT',
    description: 'Affordable technology solutions for small and medium businesses'
  },
  {
    icon: Zap,
    title: 'Quick Setup',
    description: 'Fast implementation to get you up and running quickly'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Personal support team for your business needs'
  },
  {
    icon: Building2,
    title: 'Scalable Solutions',
    description: 'Grow with your business as it expands'
  }
];


export default function SMBSolutionsPage() {

  return (
    <Layout
      title="SMB Solutions - Zion Tech Group"
      description="Tailored technology solutions for small and medium businesses to drive growth and efficiency."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                SMB Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Technology solutions designed specifically for small and medium businesses.
                Get enterprise-level capabilities at SMB-friendly prices.
              </p>
            </motion.div>
          </div>
        </section>


        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">SMB Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Affordable technology solutions that grow with your business.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {smbServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md: text-4xl font-bold mb-6">", Grow Your Business Today,
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Ready to take your SMB to the next level? Let our experts help you choose the right technology solutions.;
            </p>;
            <motion.a;
              href="/contact"";
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg hover: bg-gray-100 transition-all duration-300 font-semibold"",
              whileHover={{ scale: 1.05 }}
            >,
              Get SMB Consultation;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
}