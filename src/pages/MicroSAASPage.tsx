import React from 'react';
import { Link   } from 'react-router-dom';
import { motion   } from 'framer-motion';
import { Zap, 
  Code, 
  Database, 
  Users, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Star,
  TrendingUp,
  BarChart3,
  Settings,
  Lightbulb,
  Briefcase,
  Award,
  Rocket,
  Target,
  Globe
  } from 'lucide-react';
const MicroSAASPage = () => {
  const saasServices = [
    {
      id: 'custom-applications',
      title: 'Custom Applications',
      description: 'Tailored software solutions designed for your specific business needs',
      icon: <Code className="w-8 h-8" />,
      features: ['Custom Development', 'Scalable Architecture', 'User Management', 'API Integration'],
      useCases: ['Business Tools', 'Industry Solutions', 'Process Automation', 'Customer Portals'],
      pricing: 'Starting from $2,500/month'
    },
    {
      id: 'api-development',
      title: 'API Development',
      description: 'Robust and scalable APIs to connect your applications and services',
      icon: <Database className="w-8 h-8" />,
      features: ['RESTful APIs', 'GraphQL Services', 'Authentication', 'Rate Limiting'],
      useCases: ['System Integration', 'Mobile Apps', 'Third-party Services', 'Data Exchange'],
      pricing: 'Starting from $1,800/month'
    },
    {
      id: 'scalable-architecture',
      title: 'Scalable Architecture',
      description: 'Cloud-native architectures that grow with your business',
      icon: <Globe className="w-8 h-8" />,
      features: ['Microservices', 'Containerization', 'Auto-scaling', 'Load Balancing'],
      useCases: ['High-traffic Applications', 'Growing Businesses', 'Enterprise Solutions', 'Global Deployments'],
      pricing: 'Starting from $3,200/month'
    },
    {
      id: 'user-management',
      title: 'User Management',
      description: 'Comprehensive user authentication and authorization systems',
      icon: <Users className="w-8 h-8" />,
      features: ['Single Sign-On', 'Role-based Access', 'Multi-tenancy', 'User Analytics'],
      useCases: ['B2B Applications', 'Enterprise Software', 'Multi-user Platforms', 'SaaS Products'],
      pricing: 'Starting from $1,500/month'
    }
  ];
  const saasBenefits = [
    'Scalability', 'Cost Efficiency', 'Rapid Deployment', 'Easy Updates', 'Accessibility', 'Integration'
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Micro SAAS
            </span> Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover powerful, affordable software solutions designed for growing businesses. 
            From marketing automation to project management, find the perfect tools to scale your operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              <Zap className="h-5 w-5 mr-2"/>
              Explore Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2"/>
              Get Demo
            </Button>
          </div>
        </motion.div>
        {/* SAAS Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg: anygrid-cols-2 gap-8 mb-16"
        >
          {saasServices.map((service, index)   => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-sm text-zion-cyan font-medium">{service.pricing}</div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                {service.description}
              </p>
              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, useCaseIndex) => (
                    <span
                      key={useCaseIndex}
                      className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
              {/* CTA Button */}
              <Link
                to={`/micro-saas/${service.id}`}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        {/* SAAS Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Benefits of Micro SAAS
            </h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Discover why micro SAAS solutions are the future of software delivery 
              and how they can transform your business.
            </p>
          </div>
          <div className="grid grid-cols-2 md: anygrid-cols-3 gap-4">
            {saasBenefits.map((benefit, index)   => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/20 border border-zion-cyan/20 rounded-lg p-4 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-zion-cyan font-medium">{benefit}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Why Choose Our SAAS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our SAAS Solutions?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Rapid Development</h3>
              <p className="text-zion-slate-light">
                Get to market faster with our proven development process
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Built with enterprise-grade security and compliance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Scalable Growth</h3>
              <p className="text-zion-slate-light">
                Architecture that grows with your business needs
              </p>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quick Implementation</h3>
            <p className="text-zion-slate-light">
              Get up and running in days, not months, with intuitive interfaces and comprehensive onboarding.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-zion-purple"/>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
            <p className="text-zion-slate-light">
              Bank-level security and compliance standards to protect your business data and customer information.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (<Button key={category} variant={selectedCategory === category ? "default" : "outline"} onClick={() => setSelectedCategory(category)} className={`${selectedCategory === category
                ? 'bg-zion-purple text-white'
                : 'border-zion-purple text-zion-purple hover:bg-zion-purple/10'}`}>
              {category}
            </Button>))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (<Card key={service.id} className="group overflow-hidden border-zion-purple/20 bg-zion-slate/50 backdrop-blur-sm hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-zion-slate/30 group-hover:bg-zion-purple/20 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {service.badge && (<Badge className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-0">
                        {service.badge}
                      </Badge>)}
                    <div className="flex items-center gap-1 text-sm text-zion-slate-light">
                      <Star className="h-4 w-4 text-yellow-500 fill-current"/>
                      <span>{service.rating}</span>
                      <span>({service.reviews})</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-zion-cyan mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (<li key={index} className="text-sm text-zion-slate-light flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mr-2"></div>
                        {feature}
                      </li>))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-zion-cyan mb-2">Pricing:</h4>
                    <div className="space-y-1">
                      <div className="text-sm text-zion-slate-light">
                        <span className="font-medium">Starter:</span> {service.pricing.starter}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        <span className="font-medium">Professional:</span> {service.pricing.professional}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        <span className="font-medium">Enterprise:</span> {service.pricing.enterprise}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zion-cyan mb-2">Users:</h4>
                    <div className="text-sm text-zion-slate-light flex items-center">
                      <Users className="h-4 w-4 mr-2 text-zion-purple"/>
                      {service.users}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <div className="p-6 pt-0 space-y-3">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  <Zap className="h-4 w-4 mr-2"/>
                  Start Free Trial
                </Button>
                <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <MessageSquare className="h-4 w-4 mr-2"/>
                  Request Demo
                </Button>
              </div>
            </Card>))}
        </div>
      </div>

      {/* Comparison Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Micro SAAS vs Enterprise Solutions</h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto">
            Understand the differences and choose the right solution for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-zion-slate/30 border border-zion-purple/20">
            <h3 className="text-xl font-semibold text-zion-cyan mb-4">Micro SAAS Solutions</h3>
            <ul className="space-y-2 text-zion-slate-light">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2"/>
                Affordable monthly pricing
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2"/>
                Quick implementation (days)
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2"/>
                Focused functionality
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2"/>
                Easy to use interfaces
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2"/>
                Scalable as you grow
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-lg bg-zion-slate/30 border border-zion-purple/20">
            <h3 className="text-xl font-semibold text-zion-purple mb-4">Enterprise Solutions</h3>
            <ul className="space-y-2 text-zion-slate-light">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2"/>
                Comprehensive feature sets
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2"/>
                Custom integrations
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2"/>
                Dedicated support teams
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2"/>
                Advanced security features
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2"/>
                White-label options
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect SAAS Solution?</h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our team of experts can help you identify the right tools for your business needs and guide you through implementation. 
            Get in touch today for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              <MessageSquare className="h-5 w-5 mr-2"/>
              Get Recommendations
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="h-5 w-5 mr-2"/>
              Call +1 302 464 0950
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: https://ziontechgroup.com</p>
          </div>
        </div>
      </div>
    </div>);
}
