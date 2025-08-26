import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Wrench, 
  Server, 
  Network, 
  Shield, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle,
  Star,
  Users,
  Zap
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  responseTime: string;
  coverage: string;
  rating: number;
  reviews: number;
}

export default function ITOnsiteServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'network-installation',
      title: 'Network Infrastructure Installation',
      description: 'Complete network setup including routers, switches, access points, and cabling for businesses of all sizes.',
      features: [
        'Network design and planning',
        'Hardware installation and configuration',
        'Cable management and testing',
        'WiFi coverage optimization',
        'Security configuration',
        'Documentation and training'
      ],
      price: 'Starting at $2,500',
      duration: '1-3 days',
      responseTime: '24 hours',
      coverage: '50-mile radius',
      rating: 4.8,
      reviews: 127
    },
    {
      id: 'server-setup',
      title: 'Server Setup & Configuration',
      description: 'Professional server installation, configuration, and optimization for your business needs.',
      features: [
        'Server hardware assembly',
        'Operating system installation',
        'Application deployment',
        'Performance tuning',
        'Backup system setup',
        'Monitoring configuration'
      ],
      price: 'Starting at $3,500',
      duration: '2-5 days',
      responseTime: '48 hours',
      coverage: '100-mile radius',
      rating: 4.9,
      reviews: 89
    },
    {
      id: 'security-audit',
      title: 'Security Infrastructure Audit',
      description: 'Comprehensive security assessment and implementation of best practices for your IT environment.',
      features: [
        'Vulnerability assessment',
        'Penetration testing',
        'Security policy review',
        'Access control implementation',
        'Firewall configuration',
        'Security monitoring setup'
      ],
      price: 'Starting at $4,000',
      duration: '3-7 days',
      responseTime: '72 hours',
      coverage: '75-mile radius',
      rating: 4.7,
      reviews: 156
    },
    {
      id: 'data-recovery',
      title: 'Emergency Data Recovery',
      description: '24/7 emergency data recovery services for critical business situations.',
      features: [
        'Hardware failure recovery',
        'Corrupted data restoration',
        'Ransomware recovery',
        'Backup system restoration',
        'Data integrity verification',
        'Recovery documentation'
      ],
      price: 'Starting at $1,500',
      duration: '4-24 hours',
      responseTime: '4 hours',
      coverage: '150-mile radius',
      rating: 4.9,
      reviews: 203
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services',
      description: 'Seamless migration of your on-premises infrastructure to cloud platforms.',
      features: [
        'Migration planning and assessment',
        'Data migration and validation',
        'Application reconfiguration',
        'Performance optimization',
        'Security implementation',
        'Training and support'
      ],
      price: 'Starting at $8,000',
      duration: '1-4 weeks',
      responseTime: '1 week',
      coverage: '200-mile radius',
      rating: 4.8,
      reviews: 67
    },
    {
      id: 'maintenance-contract',
      title: 'Ongoing IT Maintenance',
      description: 'Comprehensive maintenance contracts with regular onsite visits and 24/7 support.',
      features: [
        'Monthly onsite visits',
        'Preventive maintenance',
        'System updates and patches',
        'Performance monitoring',
        'Emergency response',
        'Quarterly reports'
      ],
      price: 'Starting at $800/month',
      duration: 'Ongoing',
      responseTime: '4 hours',
      coverage: '100-mile radius',
      rating: 4.6,
      reviews: 234
    }
  ];

  const benefits = [
    {
      icon: <Wrench className="w-8 h-8 text-zion-cyan" />,
      title: 'Expert Technicians',
      description: 'Certified IT professionals with years of experience in enterprise environments'
    },
    {
      icon: <Clock className="w-8 h-8 text-zion-purple" />,
      title: 'Fast Response Times',
      description: 'Quick response times with emergency services available 24/7'
    },
    {
      icon: <MapPin className="w-8 h-8 text-zion-green" />,
      title: 'Wide Coverage Area',
      description: 'Services available across multiple states with flexible travel arrangements'
    },
    {
      icon: <Shield className="w-8 h-8 text-zion-red" />,
      title: 'Guaranteed Work',
      description: 'All work is guaranteed with comprehensive warranties and support'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CTO',
      content: 'The onsite team was incredibly professional and efficient. They completed our network upgrade in half the time estimated and everything has been running perfectly since.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Solutions',
      role: 'IT Director',
      content: 'Outstanding service quality and attention to detail. The security audit they performed helped us identify and fix critical vulnerabilities we didn\'t know existed.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateCorp',
      role: 'Operations Manager',
      content: 'Fast response time and excellent communication throughout the entire process. Their cloud migration service was seamless and exceeded our expectations.',
      rating: 5
    }
  ];

  return (
    <>
      <SEO
        title="IT Onsite Services | Zion Tech Group"
        description="Professional IT onsite services including network installation, server setup, security audits, and emergency data recovery. Expert technicians available nationwide."
        keywords="IT onsite services, network installation, server setup, security audit, data recovery, cloud migration, IT maintenance"
        canonical="https://ziontechgroup.com/marketplace/it-onsite-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT Onsite Services
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8">
                Professional IT technicians at your location for installation, maintenance, and emergency support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Service
                </Button>
                <Button size="lg" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                  <MapPin className="w-5 h-5 mr-2" />
                  Check Coverage
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Onsite Services?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Get the expertise and reliability you need with our comprehensive onsite IT services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 text-center hover:border-zion-purple/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-zion-purple/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Onsite Services
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Comprehensive IT services delivered directly to your location
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <Card 
                  key={service.id} 
                  className={`bg-zion-blue-dark border-zion-purple/20 cursor-pointer transition-all duration-300 ${
                    selectedService === service.id ? 'border-zion-purple/40 ring-2 ring-zion-purple/20' : 'hover:border-zion-purple/40'
                  }`}
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-white text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-zion-slate-light text-base">
                          {service.description}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm ml-1">{service.rating}</span>
                        </div>
                        <span className="text-zion-slate-light text-sm">({service.reviews})</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    {selectedService === service.id && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-zion-cyan" />
                            <span className="text-zion-slate-light">Duration:</span>
                            <span className="text-white">{service.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-zion-cyan" />
                            <span className="text-zion-slate-light">Response:</span>
                            <span className="text-white">{service.responseTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-zion-cyan" />
                            <span className="text-zion-slate-light">Coverage:</span>
                            <span className="text-white">{service.coverage}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-zion-cyan" />
                            <span className="text-zion-slate-light">Team Size:</span>
                            <span className="text-white">2-4 techs</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-zion-blue-light/20">
                          <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                          <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                            Schedule Service
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {selectedService !== service.id && (
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                        <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                          View Details
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Don't just take our word for it - hear from satisfied clients across the country
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-zion-slate-light text-sm">{testimonial.role} at {testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Contact us today to schedule your onsite IT service or get a custom quote for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (555) 123-4567
              </Button>
              <Button size="lg" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </Button>
            </div>
            <p className="text-zion-slate-light mt-4">
              Emergency services available 24/7 • Free initial consultation
            </p>
          </div>
        </section>
      </div>
    </>
  );
}