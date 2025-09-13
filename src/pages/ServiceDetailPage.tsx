import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COMPREHENSIVE_SERVICES, SERVICE_PRICING_TIERS, CONTACT_INFO, SERVICE_GUARANTEES } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SEO } from '@/components/SEO';
import { 
  ArrowLeft, 
  Star, 
  CheckCircle, 
  Clock, 
  Shield, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Award,
  TrendingUp,
  Zap,
  Cloud,
  Database,
  Smartphone,
  Code
} from 'lucide-react';

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<any>(null);
  const [selectedTier, setSelectedTier] = useState<string>('basic');
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    selectedTier: 'basic'
  });

  useEffect(() => {
    if (id) {
      const foundService = COMPREHENSIVE_SERVICES.find(s => s.id === id);
      setService(foundService);
    }
  }, [id]);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle quote submission
    console.log('Quote submitted:', quoteData);
    setShowQuoteForm(false);
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <Link to="/comprehensive-services">
            <Button>Browse All Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const serviceIcon = {
    'ai-ml': <Zap className="h-8 w-8" />,
    'cloud': <Cloud className="h-8 w-8" />,
    'cybersecurity': <Shield className="h-8 w-8" />,
    'data': <Database className="h-8 w-8" />,
    'mobile': <Smartphone className="h-8 w-8" />,
    'development': <Code className="h-8 w-8" />,
    'analytics': <TrendingUp className="h-8 w-8" />,
    'infrastructure': <Cloud className="h-8 w-8" />,
    'integration': <Code className="h-8 w-8" />,
    'consulting': <TrendingUp className="h-8 w-8" />
  }[service.category] || <Code className="h-8 w-8" />;

  return (
    <>
      <SEO 
        title={`${service.name} - Zion Technology Solutions`}
        description={service.description}
        keywords={service.keywords?.join(', ') || ''}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-6">
              <Link to="/comprehensive-services">
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Services
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-white/20 rounded-lg">
                {serviceIcon}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{service.name}</h1>
                <p className="text-xl text-zion-cyan">{service.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="bg-zion-cyan text-white text-lg px-4 py-2">
                {service.category}
              </Badge>
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-lg">{service.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-5 w-5" />
                <span className="text-lg">{service.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Service Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-6">{service.overview}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features?.map((feature: string, index: number) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits?.map((benefit: string, index: number) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Process */}
              {service.process && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Our Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {service.process.map((step: any, index: number) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-zion-purple text-white rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{step.title}</h4>
                            <p className="text-gray-700">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Case Studies */}
              {service.caseStudies && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Case Studies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {service.caseStudies.map((caseStudy: any, index: number) => (
                        <div key={index} className="border-l-4 border-zion-cyan pl-4">
                          <h4 className="font-semibold text-lg mb-2">{caseStudy.title}</h4>
                          <p className="text-gray-700 mb-2">{caseStudy.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {caseStudy.results?.map((result: string, resultIndex: number) => (
                              <Badge key={resultIndex} variant="outline" className="text-zion-cyan border-zion-cyan">
                                {result}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Tiers */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Pricing Tiers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {SERVICE_PRICING_TIERS.map((tier) => (
                      <div 
                        key={tier.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                          selectedTier === tier.id 
                            ? 'border-zion-purple bg-zion-purple/5' 
                            : 'border-gray-200 hover:border-zion-cyan'
                        }`}
                        onClick={() => setSelectedTier(tier.id)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">{tier.name}</h4>
                          <span className="text-lg font-bold text-zion-purple">
                            ${tier.price.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{tier.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Get Started</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-zion-cyan" />
                      <span>{CONTACT_INFO.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-zion-cyan" />
                      <span>{CONTACT_INFO.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-zion-cyan" />
                      <span>{CONTACT_INFO.address}</span>
                    </div>
                    <Button 
                      className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white"
                      onClick={() => setShowQuoteForm(true)}
                    >
                      Request Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Guarantees */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Our Guarantees</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {SERVICE_GUARANTEES.map((guarantee, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-green-500" />
                        <span className="text-sm">{guarantee}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Quote Form Modal */}
        {showQuoteForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h3 className="text-xl font-semibold mb-4">Request Quote for {service.name}</h3>
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={quoteData.name}
                  onChange={(e) => setQuoteData({...quoteData, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={quoteData.email}
                  onChange={(e) => setQuoteData({...quoteData, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={quoteData.company}
                  onChange={(e) => setQuoteData({...quoteData, company: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={quoteData.phone}
                  onChange={(e) => setQuoteData({...quoteData, phone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <textarea
                  placeholder="Message"
                  value={quoteData.message}
                  onChange={(e) => setQuoteData({...quoteData, message: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  rows={3}
                />
                <div className="flex space-x-2">
                  <Button type="submit" className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white">
                    Submit Quote
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowQuoteForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}