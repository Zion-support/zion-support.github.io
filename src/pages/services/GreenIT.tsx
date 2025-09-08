import { motion } from 'framer-motion';
import { Leaf, Zap, Shield, Globe, TrendingUp, Database, Cloud, CheckCircle, Sun, Recycle, Gauge, Target, Award } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function GreenIT() {
  const features = [
    {
      icon: Leaf,
      title: 'Sustainable Infrastructure',
      description: 'Design and implement eco-friendly IT infrastructure with reduced carbon footprint.'
    },
    {
      icon: Zap,
      title: 'Energy Optimization',
      description: 'Optimize energy consumption through smart power management and efficient systems.'
    },
    {
      icon: Cloud,
      title: 'Green Cloud Solutions',
      description: 'Leverage renewable energy-powered cloud infrastructure for sustainable computing.'
    },
    {
      icon: Recycle,
      title: 'Circular IT Economy',
      description: 'Implement IT asset lifecycle management with recycling and refurbishment programs.'
    }
  ];

  const solutions = [
    {
      title: 'Energy-Efficient Data Centers',
      description: 'Design and optimize data centers for maximum energy efficiency and minimal environmental impact',
      icon: Database,
      benefits: ['Reduced power consumption', 'Lower cooling costs', 'Improved PUE ratings']
    },
    {
      title: 'Renewable Energy Integration',
      description: 'Integrate solar, wind, and other renewable energy sources into IT infrastructure',
      icon: Sun,
      benefits: ['Carbon-neutral operations', 'Energy cost savings', 'Sustainable power supply']
    },
    {
      title: 'Smart Power Management',
      description: 'Implement intelligent power management systems for optimal energy usage',
      icon: Gauge,
      benefits: ['Automated power optimization', 'Real-time monitoring', 'Predictive maintenance']
    },
    {
      title: 'Green Software Development',
      description: 'Develop energy-efficient software applications and optimize existing systems',
      icon: Code,
      benefits: ['Reduced computational overhead', 'Lower energy consumption', 'Improved performance']
    }
  ];

  const useCases = [
    {
      industry: 'Enterprise',
      description: 'Large-scale IT infrastructure optimization and sustainability initiatives',
      icon: Building,
      metrics: ['Energy Savings', 'Carbon Reduction', 'Cost Optimization']
    },
    {
      industry: 'Healthcare',
      description: 'Sustainable medical technology and energy-efficient healthcare IT systems',
      icon: Heart,
      metrics: ['Equipment Efficiency', 'Energy Costs', 'Environmental Impact']
    },
    {
      industry: 'Education',
      description: 'Green campus technology and sustainable educational IT infrastructure',
      icon: GraduationCap,
      metrics: ['Student Experience', 'Operational Costs', 'Sustainability Goals']
    },
    {
      industry: 'Manufacturing',
      description: 'Smart manufacturing with energy-efficient automation and monitoring',
      icon: Factory,
      metrics: ['Production Efficiency', 'Energy Consumption', 'Environmental Compliance']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Savings',
      description: 'Reduce energy costs and operational expenses through efficient technology'
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'Meet environmental regulations and sustainability standards'
    },
    {
      icon: Globe,
      title: 'Environmental Impact',
      description: 'Reduce carbon footprint and contribute to environmental conservation'
    },
    {
      icon: Award,
      title: 'Brand Reputation',
      description: 'Enhance brand image through commitment to sustainability'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Green IT Services - Zion Tech Group"
        description="Transform your IT infrastructure with sustainable, energy-efficient solutions. Reduce carbon footprint, lower costs, and meet environmental compliance standards."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-400/20 text-green-400 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              Sustainable Technology
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $service
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This service page is under development. Contact us for more information.
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">
            Contact Us for More Information
          </Link>
        </div>
      </section>
    </div>);
};
export default $service;
