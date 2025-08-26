import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Atom, 
  Network, 
  Cpu, 
  Heart, 
  Scale, 
  Factory, 
  Satellite,
  Zap,
  Globe,
  Users,
  Code,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Target,
  Award,
  Globe as GlobeIcon
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import innovativeMicroSaasServices2025 from "@/data/innovativeMicroSaasServices2025";

export default function ServicesAdvertising() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'ai-automation', name: 'AI & Automation', icon: Cpu, color: 'from-zion-purple to-zion-red' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, color: 'from-zion-blue to-zion-cyan' },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Network, color: 'from-zion-purple to-zion-blue' },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'healthcare-ai', name: 'Healthcare AI', icon: Heart, color: 'from-zion-pink to-zion-purple' },
    { id: 'legal-tech', name: 'Legal Tech', icon: Scale, color: 'from-zion-orange to-zion-purple' },
    { id: 'financial-ai', name: 'Financial AI', icon: DollarSign, color: 'from-zion-green to-zion-blue' },
    { id: 'manufacturing-ai', name: 'Manufacturing AI', icon: Factory, color: 'from-zion-blue to-zion-purple' },
    { id: 'space-tech', name: 'Space Technology', icon: Satellite, color: 'from-zion-purple to-zion-cyan' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? innovativeMicroSaasServices2025 
    : innovativeMicroSaasServices2025.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.replace('-', ' '))
      );

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  return (
    <>
      <SEO 
        title="Comprehensive Micro SAAS Services - Zion Tech Group"
        description="Explore our complete portfolio of innovative micro SAAS services including AI, Quantum Computing, Blockchain, Healthcare AI, Legal Tech, and more. Transform your business with cutting-edge technology solutions."
        canonical="/services-advertising"
        url="https://ziontechgroup.com/services-advertising"
      />
      
      {/* Hero Section */}
      <section className="bg-futuristic min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="container-responsive relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-responsive font-bold mb-6">
              <span className="text-gradient">Comprehensive Micro SAAS</span>
              <br />
              <span className="text-white">Services Portfolio</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Discover our complete portfolio of {innovativeMicroSaasServices2025.length}+ innovative micro SAAS services designed to transform 
              businesses across all industries. From AI-powered solutions to quantum computing, blockchain applications to healthcare AI, 
              we provide cutting-edge technology that drives innovation and growth.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Industry-Specific Solutions</h3>
                <p className="text-zion-slate-light text-sm">Tailored services for healthcare, finance, manufacturing, and more</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-red rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Proven ROI & Results</h3>
                <p className="text-zion-slate-light text-sm">Measurable business impact with 200-800% ROI potential</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-cyan rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Enterprise-Grade Quality</h3>
                <p className="text-zion-slate-light text-sm">SOC 2, ISO 27001, HIPAA compliance with 99.9% uptime</p>
              </motion.div>
            </div>

            {/* Contact CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="tel:+13024640950"
                className="btn-futuristic px-8 py-4 text-lg flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="btn-neon px-8 py-4 text-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Free Quote
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Explore Our Service Categories</h2>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              Navigate through our comprehensive service portfolio organized by technology category and industry focus
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-bold mb-4">
              <span className="text-gradient">Innovative Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover cutting-edge solutions that are transforming industries and driving business innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="card-futuristic group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                      {(() => {
                        const IconComponent = getCategoryIcon(service.category);
                        return <IconComponent className="w-8 h-8 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-zion-cyan font-medium">{service.category}</span>
                        <span className="text-zion-slate-light">•</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          service.innovationLevel === 'Cutting-edge' 
                            ? 'bg-zion-cyan/20 text-zion-cyan' 
                            : 'bg-zion-purple/20 text-zion-purple'
                        }`}>
                          {service.innovationLevel}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-3xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-zion-slate-light">per month</div>
                    <div className="text-xs text-zion-green mt-1">ROI: {service.roi}</div>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-zion-slate-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                <div className="mb-6 p-4 bg-zion-slate-light/5 rounded-lg">
                  <h4 className="text-sm font-semibold text-white mb-3">Technical Specifications:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-zion-cyan font-medium">Technology:</span>
                      <div className="text-zion-slate-light mt-1">
                        {service.technicalSpecs?.technology.slice(0, 3).join(', ')}
                      </div>
                    </div>
                    <div>
                      <span className="text-zion-cyan font-medium">Uptime:</span>
                      <div className="text-zion-slate-light mt-1">
                        {service.technicalSpecs?.uptime}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-zion-cyan" />
                      <span>{service.supportLevel}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-zion-slate-light">
                      Market: {service.marketPrice}
                    </div>
                    <Link
                      to={`/services/${service.id}`}
                      className="btn-futuristic px-4 py-2 text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-bold mb-4">
              <span className="text-gradient">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Competitive pricing with flexible plans designed to fit businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Budget Tier */}
            <motion.div
              className="card-futuristic text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Budget Solutions</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">$100 - $1,000</div>
              <div className="text-zion-slate-light mb-6">Perfect for startups and small businesses</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan" />
                  Basic AI tools and automation
                </li>
                <li className="flex items-center gap-2 text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan" />
                  Content generation platforms
                </li>
                <li className="flex items-center gap-2 text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan" />
                  Essential cybersecurity
                </li>
              </ul>
            </motion.div>

            {/* Mid-Range Tier */}
            <motion.div
              className="card-futuristic text-center border-2 border-zion-cyan"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-zion-cyan text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mid-Range Solutions</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">$1,000 - $5,000</div>
              <div className="text-zion-slate-light mb-6">Ideal for growing businesses and enterprises</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan" />
                  Advanced AI and machine learning
                </li>
                <li className="flex items-center gap-2 text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan" />
                  Comprehensive cybersecurity suites
                </li>
                <li className="flex items-center gap-2 text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan" />
                  IoT and edge computing platforms
                </li>
              </ul>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              className="card-futuristic text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">$5,000+</div>
              <div className="text-zion-slate-light mb-6">For large corporations and government agencies</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan" />
                  Quantum computing platforms
                </li>
                <li className="flex items-center gap-2 text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan" />
                  Custom AI solutions
                </li>
                <li className="flex items-center gap-2 text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan" />
                  Full-stack digital transformation
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-bold mb-4">
              <span className="text-gradient">Why Choose Zion Tech Group?</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "AI Innovation Leaders",
                description: "Pioneering the latest AI technologies and machine learning solutions"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SOC 2, ISO 27001, HIPAA compliance with military-grade security"
              },
              {
                icon: Rocket,
                title: "Cutting-Edge Tech",
                description: "Quantum computing, blockchain, and space technology solutions"
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "24/7 technical support with dedicated account managers"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="card-futuristic text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-responsive font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Get in touch with our technology experts to discuss your specific needs and discover 
              how our innovative solutions can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+13024640950"
                className="btn-futuristic px-8 py-4 text-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="btn-neon px-8 py-4 text-lg flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Free Consultation
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="font-bold text-white mb-1">Phone</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-zion-purple" />
                </div>
                <h3 className="font-bold text-white mb-1">Email</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-zion-blue" />
                </div>
                <h3 className="font-bold text-white mb-1">Address</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="text-zion-slate-light">
              <p className="mb-2">🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
              <p className="text-sm">Transform your business with the future of technology</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}