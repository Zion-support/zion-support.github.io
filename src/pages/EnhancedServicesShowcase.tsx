import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { 
  Search, 
  Filter, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Globe,
  Zap,
  Shield,
  Brain,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  TrendingUp,
  Award,
  Users,
  Globe as GlobeIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = [...ENHANCED_INNOVATIVE_SERVICES];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
    { icon: Award, value: "10+", label: "Years Experience", description: "Deep industry expertise" },
    { icon: GlobeIcon, value: "25+", label: "Countries Served", description: "Global reach and support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20 animate-pulse"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-500 text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            All Services
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Enhanced Innovative Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our comprehensive range of cutting-edge technology solutions designed to transform your business with AI, quantum computing, cybersecurity, and more
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-8">
              <Brain className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-2xl font-bold text-white mb-4">AI-First Approach</h3>
              <p className="text-zion-cyan-light">
                We leverage the latest AI technologies to create intelligent, scalable solutions that adapt to your business needs.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-8">
              <Shield className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-zion-cyan-light">
                Our security-first approach ensures your data and systems are protected with industry-leading security measures.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-8">
              <Users className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-zion-cyan-light">
                Our certified professionals bring years of experience in delivering successful technology solutions across industries.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
            Let's discuss how our innovative solutions can drive your digital transformation and business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Request a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zion-blue-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-zion-cyan-light">
                Premier IT services and AI solutions provider helping businesses thrive in the digital age.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-zion-cyan-light">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2 text-zion-cyan-light">
                <p>AI & Automation</p>
                <p>Cybersecurity</p>
                <p>Cloud Services</p>
                <p>Data Analytics</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="space-y-2">
                <Link to="https://ziontechgroup.com" className="flex items-center text-zion-cyan hover:text-zion-cyan-light">
                  <Globe className="h-4 w-4 mr-2" />
                  Website
                </Link>
                <Button variant="outline" size="sm" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View All Services
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-zion-blue-light mt-8 pt-8 text-center text-zion-cyan-light">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
            {service.category}
          </Badge>
          <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            {service.subcategory}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Price and Rating */}
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-zion-cyan">
              {service.currency}{service.price?.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-white">{service.rating}</span>
              <span className="text-zion-cyan-light">({service.reviewCount})</span>
            </div>
          </div>

          {/* AI Score */}
          <div className="flex items-center justify-between">
            <span className="text-zion-cyan-light">AI Score:</span>
            <div className="flex items-center gap-2">
              <div className="w-16 bg-zion-blue-light rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" 
                  style={{ width: `${service.aiScore}%` }}
                ></div>
              </div>
              <span className="text-zion-cyan font-semibold">{service.aiScore}%</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
                          {service.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan-light">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Delivery */}
          <div className="flex items-center gap-2 text-zion-cyan-light">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Delivery: {service.estimatedDelivery}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button 
              className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Hide Details' : 'View Details'}
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Detailed Information */}
          {showDetails && (
            <div className="mt-4 p-4 bg-white/5 rounded-lg border border-zion-cyan/20">
              <Accordion type="single" collapsible>
                <AccordionItem value="features">
                  <AccordionTrigger className="text-zion-cyan hover:text-zion-cyan-light">
                    Features & Benefits
                  </AccordionTrigger>
                  <AccordionContent className="text-zion-cyan-light">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white mb-2">Features:</h4>
                                              {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      <h4 className="font-semibold text-white mb-2 mt-4">Benefits:</h4>
                                              {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="contact">
                  <AccordionTrigger className="text-zion-cyan hover:text-zion-cyan-light">
                    Get Started
                  </AccordionTrigger>
                  <AccordionContent className="text-zion-cyan-light">
                    <div className="space-y-3">
                      <p>Ready to implement this solution?</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-zion-cyan" />
                          <span>{service.contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-zion-cyan" />
                          <span>{service.contactInfo.email}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                        Schedule Consultation
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </motion.div>

        {/* Services Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                viewMode === 'list' ? 'flex flex-col md:flex-row gap-6' : ''
              }`}
            >
              {/* Service Header */}
              <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {service.category}
                      </span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                        {service.subcategory}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-gray-500 mt-1">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                {service.technicalSpecs && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technicalSpecs.technology.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Compliance & ROI */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.compliance && service.compliance.slice(0, 2).map((comp, compIndex) => (
                    <span
                      key={compIndex}
                      className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full"
                    >
                      {comp}
                    </span>
                  ))}
                  {service.roi && (
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {service.roi}
                    </span>
                  )}
                </div>

                {/* Market Price & Delivery */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div>
                    <span className="text-gray-400">Market Price: </span>
                    <span className="text-white font-medium">{service.marketPrice}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Delivery: </span>
                    <span className="text-white font-medium">{service.estimatedDelivery}</span>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Contact Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span className="text-white">{service.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span className="text-white">{service.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <a 
                        href={service.contactInfo.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        {service.contactInfo.website}
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={`/services/${service.id}`}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {sortedServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Contact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20 p-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl border border-cyan-500/30"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Get in touch with our team to discuss how our innovative solutions can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;