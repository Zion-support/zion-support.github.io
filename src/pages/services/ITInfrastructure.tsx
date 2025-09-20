import React from "react"
import { motion } from "framer-motion"
import {;
  Server,;
  Shield,;
  Cloud,;
  Database,;
  Network,;
  Lock,;
  Zap,;
  Globe,;
  Cpu,;
  HardDrive,;
  Check;
} from "lucide-react"
const ITInfrastructure = () => {;
  const services = [;
    {;
      icon: <Server className="w-8 h-8" />,title: "Server Infrastructure",description: "Enterprise-grade server solutions with high availability and performance optimization.",features: ["Load balancing", "Auto-scaling", "High availability", "Performance monitoring"]
    },;
    {;
      icon: <Cloud className="w-8 h-8" />,title: "Cloud Infrastructure",description: "Multi-cloud infrastructure management and optimization services.",features: ["Multi-cloud strategy", "Cost optimization", "Security compliance", "Migration support"]
    },;
    {;
      icon: <Database className="w-8 h-8" />,title: "Database Management",description: "Comprehensive database infrastructure and management solutions.",features: ["Performance tuning", "Backup & recovery", "Security hardening", "Monitoring"]
    },;
    {;
      icon: <Network className="w-8 h-8" />,title: "Network Infrastructure",description: "Robust network design and implementation for enterprise environments.",features: ["Network design", "Security implementation", "Performance optimization", "24/7 monitoring"]
    },;
    {;
      icon: <Shield className="w-8 h-8" />,title: "Security Infrastructure",description: "Advanced security infrastructure and threat protection systems.",features: ["Firewall management", "Intrusion detection", "Vulnerability assessment", "Incident response"]
    },;
    {;
      icon: <Zap className="w-8 h-8" />,title: "Performance Optimization",description: "Infrastructure performance tuning and optimization services.",features: ["Performance analysis", "Capacity planning", "Optimization strategies", "Continuous monitoring"]
    };
  ],;

  const benefits = [;
    "99.9% uptime guarantee",;
    "24/7 monitoring and support",;
    "Scalable architecture",;
    "Security-first approach",;
    "Cost optimization",;
    "Compliance ready"
  ],;

  return (
    <div className="min-h-screen bg-zion-slate-dark">;
      {/* Hero Section */};
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-8">;
              <[^>]*/>
            </[^>]*>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              IT Infrastructure;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">;
                Solutions;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">;
              Build robust, scalable, and secure IT infrastructure that powers your business growth.;
              Our expert team delivers enterprise-grade solutions with 99.9% uptime guarantee.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <section className="py-20 bg-zion-slate-dark">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Comprehensive Infrastructure Services;
            </[^>]*>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;
              From server management to cloud optimization, we provide end-to-end IT infrastructure solutions;
              that ensure your business runs smoothly and efficiently.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">;
            {services.map((service, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                viewport={{ once: true }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">;
                  {service.icon};
                </[^>]*>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</[^>]*>
                <p className="text-zion-slate-light mb-6 leading-relaxed">;
                  {service.description};
                </[^>]*>
                <ul className="space-y-2">;
                  {service.features.map((feature, idx) => (;
                    <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">;
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></[^>]*>
                      {feature};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-20 bg-zion-blue-dark">;
        <div className="container mx-auto px-4">;
          <div className="max-w-6xl mx-auto">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              viewport={{ once: true }};
              transition={{ duration: 0.6 }};
              className="[^"]*"
            >;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Why Choose Our Infrastructure Solutions?;
              </[^>]*>
              <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;
                Experience enterprise-grade infrastructure with unmatched reliability, security, and performance.;
              </[^>]*>
            </[^>]*>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
              {benefits.map((benefit, index) => (;
                <motion.div
                  key={index};
                  initial={{ opacity: 0, x: -20 }};
                  whileInView={{ opacity: 1, x: 0 }};
                  viewport={{ once: true }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  className="[^"]*"
                >;
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">;
                    <[^>]*/>
                  </[^>]*>
                  <span className="text-white font-medium">{benefit}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Ready to Transform Your IT Infrastructure?;
            </[^>]*>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">;
              Let our experts help you build a robust, scalable, and secure infrastructure;
              that drives your business forward.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">;
                Get Started Today;
              </[^>]*>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">;
                Schedule Consultation;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default ITInfrastructure;