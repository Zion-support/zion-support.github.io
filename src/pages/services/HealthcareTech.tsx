<<<<<<< HEAD
import React from 'react';
import { SEO } from "../../components/SEO";
import { motion } from 'framer-motion';
import { Heart, Shield, Database, Zap, Globe, Server, BarChart3, Settings, Users, Network, Smartphone, Tablet, Laptop, Cloud, RefreshCw, TrendingUp, AlertTriangle, Activity, FileText, CheckCircle, Stethoscope, Microscope, Pill, Brain } from 'lucide-react';
=======
<<<<<<< HEAD
import React from 'react.ts';
import { SEO               } from '../../components/SEO';
import { motion               } from 'framer-motion.ts';
import { Heart, Shield, Database, Zap, Globe, Server, BarChart3, Settings, Users, Network, Smartphone, Tablet, Laptop, Cloud, RefreshCw, TrendingUp, AlertTriangle, Activity, FileText, CheckCircle, Stethoscope, Microscope, Pill, Brain               } from 'lucide-react.ts';
=======
import React from 'react.ts';
import { SEO              } from '../../components/SEO';
import { motion              } from 'framer-motion.ts';
<<<<<<< HEAD
import { Heart, Shield, Database, Zap, Globe, Server, BarChart3, Settings, Users, Network, Smartphone, Tablet, Laptop, Cloud, RefreshCw, TrendingUp, AlertTriangle, Activity, FileText, CheckCircle, Stethoscope, Microscope, Pill, Brain export default function HealthcareTech(...args: any[]): any {
=======
import { Heart, Shield, Database, Zap, Globe, Server, BarChart3, Settings, Users, Network, Smartphone, Tablet, Laptop, Cloud, RefreshCw, TrendingUp, AlertTriangle, Activity, FileText, CheckCircle, Stethoscope, Microscope, Pill, Brain              } from 'lucide-react.ts';
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
export default function HealthcareTech(...args: []):  {
  const features = [
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'AI-powered diagnostics and personalized treatment recommendations',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'HIPAA-compliant security with end-to-end encryption',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Interoperability',
      description: 'Seamless integration across healthcare systems and platforms',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Continuous patient monitoring and alert systems',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Brain,
      title: 'AI Diagnostics',
      description: 'Machine learning algorithms for accurate disease detection',
      color: 'from-purple-500 to-pink-500'
    },;
    {;
      icon: Activity,;
      title: 'Predictive Analytics',;
      description: 'Early warning systems and preventive care insights',;
      color: 'from-indigo-500 to-purple-500';
    };
  ];
  const services = [
    {
      title: 'Healthcare AI Platform',
      description: 'Comprehensive AI platform for diagnostics and treatment planning',
      price: 'From $25,000',
      features: ['AI diagnostics', 'Treatment recommendations', 'Patient monitoring', 'Analytics dashboard']
    },
    {
      title: 'Telemedicine Solutions',
      description: 'Secure video consultations and remote patient care',
      price: 'From $15,000',
      features: ['Video consultations', 'Patient portal', 'Prescription management', 'Insurance integration']
    },
    {
      title: 'Health Data Analytics',
      description: 'Advanced analytics for population health and clinical insights',
      price: 'From $20,000',
      features: ['Population health', 'Clinical analytics', 'Predictive modeling', 'Reporting tools']
    },;
    {;
      title: 'Medical Device Integration',;
      description: 'IoT integration for medical devices and wearables',;
      price: 'From $18,000',;
      features: ['Device connectivity', 'Data collection', 'Real-time monitoring', 'Alert systems'];
    };
  ];
  const applications = [;
    { name: 'Diagnostics', icon: Microscope, description: 'AI-powered disease detection' },;
    { name: 'Telemedicine', icon: Activity, description: 'Remote patient consultations' },;
    { name: 'Patient Monitoring', icon: Activity, description: 'Continuous health tracking' },;
    { name: 'Drug Discovery', icon: Pill, description: 'AI-assisted pharmaceutical research' },;
    { name: 'Medical Imaging', icon: Brain, description: 'Radiology and pathology analysis' },;
    { name: 'Clinical Trials', icon: FileText, description: 'Research and trial management' };
  ];
  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Healthcare Technology Services - Zion Tech Group"
        description="Transform healthcare delivery with cutting-edge technology solutions. From AI diagnostics to telemedicine, we help healthcare providers deliver better patient care."
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Healthcare
              <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Revolutionize healthcare delivery with AI-powered diagnostics, telemedicine solutions,
              and advanced patient care technologies. Improve outcomes and enhance patient experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300"
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Healthcare Technology?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Modern healthcare technology improves patient outcomes, reduces costs,
              and enhances the overall quality of care delivery.
            </p>
          </motion.div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
=======

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={feature.title}
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Services & Pricing */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Healthcare Technology Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive healthcare technology solutions designed to meet the unique
              needs of healthcare providers and patients
            </p>
          </motion.div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index)  => (
=======

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={service.title}
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-pink-400 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300"
                  Get Quote
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare Technology Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how modern technology is transforming various aspects of healthcare
              and patient care delivery
            </p>
          </motion.div>
<<<<<<< HEAD
          <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-8">
            {applications.map((app, index)  => (
=======

          <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 lg:grid-cols-6 gap-8">
            {applications.map((app, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={app.name}
                initial = {
  { opacity: 0,
  scale: 0.8 
}}
                whileInView = {
  { opacity: 1,
  scale: 1 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="text-center group"
                <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-700 transition-all duration-300">
                  <app.icon className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{app.name}</h3>
                <p className="text-sm text-slate-400">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600/20 to-pink-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how healthcare technology can improve patient outcomes,
              streamline operations, and create a better healthcare experience for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300"
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
              >
                View Case Studies;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}}}}