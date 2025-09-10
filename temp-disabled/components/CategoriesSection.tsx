import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cloud, Database, Cpu, Globe, Users } from 'lucide-react';

const categories = [
  {
    title: "AI Services",
    link: "/ai-services",
    icon: Zap,
    description: "Artificial Intelligence solutions"
  },
  {
    title: "Cybersecurity Services",
    link: "/cybersecurity-services",
    icon: Shield,
    description: "Advanced security solutions"
  },
  {
    title: "Cloud Solutions",
    link: "/cloud-solutions",
    icon: Cloud,
    description: "Scalable cloud infrastructure"
  },
  {
    title: "Data Analytics",
    link: "/data-analytics",
    icon: Database,
    description: "Business intelligence and insights"
  },
  {
    title: "IoT Solutions",
    link: "/iot-solutions",
    icon: Cpu,
    description: "Internet of Things integration"
  },
  {
    title: "Web Development",
    link: "/web-development",
    icon: Globe,
    description: "Modern web applications"
  },
  {
    title: "Consulting Services",
    link: "/consulting",
    icon: Users,
    description: "Expert technology consulting"
  }
];

export function CategoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto"
          >
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link
                  to={category.link}
                  className="block bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light rounded-xl p-8 hover:bg-zion-blue-dark/70 transition-all duration-300 h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-zion-cyan/20 rounded-lg">
                      <IconComponent className="h-8 w-8 text-zion-cyan" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-zion-slate-light group-hover:text-zion-slate-light/80 transition-colors">
                    {category.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}