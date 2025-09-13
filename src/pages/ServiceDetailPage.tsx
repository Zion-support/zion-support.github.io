import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COMPREHENSIVE_SERVICES, SERVICE_PRICING_TIERS, CONTACT_INFO, SERVICE_GUARANTEES } from '@/data/comprehensiveServices';
import { 
import { Button } from '@/components/ui/button';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';
import { SEO } from '@/components/SEO';

export default function ServiceDetailPage() {


          <Button asChild>
            <Link to="/comprehensive-services">Browse All Services</Link>
            <Link to="/comprehensive-services">Browse All Services</Link>
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
import { EXPANDED_SERVICES } from '../data/expandedServices';
import { Button } from '../components/ui/button';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Separator } from '../components/ui/separator';

  

          <Button asChild>
            <Link to="/expanded-services">Back to Services</Link>
            <Link to="/expanded-services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }




      <SEO 

            <Link to="/" className="hover:text-zion-blue">Home</Link>
            <Link to="/" className="hover:text-zion-blue">Home</Link>
            <Link to="/comprehensive-services" className="hover:text-zion-blue">Services</Link>
            <Link to="/comprehensive-services" className="hover:text-zion-blue">Services</Link>

                  <Badge key={index} variant="secondary">
                  </Badge>

                <Badge className="bg-zion-cyan text-white mb-3">
                </Badge>

                      <Star


                  <Clock className="w-5 h-5" />
                  <MapPin className="w-5 h-5" />

                    

                <Button asChild size="lg" className="bg-zion-blue hover:bg-zion-blue-dark text-white flex-1">
                </Button>
                <Button asChild size="lg" variant="outline" className="border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                </Button>


                <Users className="w-8 h-8 text-white" />

                <Shield className="w-8 h-8 text-white" />

                <Phone className="w-8 h-8 text-white" />

                <TrendingUp className="w-8 h-8 text-white" />

                <Calendar className="w-8 h-8 text-white" />

                <Award className="w-8 h-8 text-white" />

          
                  <CheckCircle className="w-8 h-8 text-white" />

          
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Link to="/contact">Schedule Consultation</Link>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>

                <Zap className="w-8 h-8 text-white" />
                <Shield className="w-8 h-8 text-white" />
                <TrendingUp className="w-8 h-8 text-white" />

                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <Globe className="w-4 h-4 text-zion-cyan" />


                <Link to="/comprehensive-services" className="block hover:text-zion-cyan">All Services</Link>
                <Link to="/comprehensive-services" className="block hover:text-zion-cyan">All Services</Link>
                <Link to="/contact" className="block hover:text-zion-cyan">Contact Us</Link>
                <Link to="/contact" className="block hover:text-zion-cyan">Contact Us</Link>
                <Link to="/request-quote" className="block hover:text-zion-cyan">Request Quote</Link>
                <Link to="/request-quote" className="block hover:text-zion-cyan">Request Quote</Link>

      case 'AI & Automation': return <Zap className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Cloud & DevOps': return <Cloud className="w-6 h-6" />;
      case 'Data & Analytics': return <Database className="w-6 h-6" />;
      case 'Digital Transformation': return <Target className="w-6 h-6" />;
      case 'IoT & Edge Computing': return <Smartphone className="w-6 h-6" />;
      case 'Blockchain & Web3': return <LinkIcon className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;



          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/expanded-services" className="hover:text-blue-600">Enterprise Services</Link>
          <Link to="/expanded-services" className="hover:text-blue-600">Enterprise Services</Link>

              <Badge variant="secondary" className="text-sm">
              </Badge>
                <Badge className="bg-green-500 text-white text-sm">New</Badge>
                <Badge className="bg-green-500 text-white text-sm">New</Badge>
            
            

                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <TrendingUp className="w-5 h-5 text-green-400" />
              
                <Button 
                </Button>
                <Button 
                </Button>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Target className="w-6 h-6 text-blue-500" />
                </CardTitle>
              </CardHeader>
              <CardContent>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Users className="w-6 h-6 text-purple-500" />
                </CardTitle>
              </CardHeader>
              <CardContent>
              </CardContent>
            </Card>

            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-xl">Pricing & Plans</CardTitle>
                <CardTitle className="text-xl">Pricing & Plans</CardTitle>
                <CardDescription>Choose the right plan for your business</CardDescription>
                <CardDescription>Choose the right plan for your business</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                
                <Badge className={`w-full justify-center text-sm py-2 ${getPricingModelColor(service.pricingModel)}`}>
                </Badge>


                <Button 
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <Mail className="w-5 h-5 text-blue-500" />
                  <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                
                <Button 
                  <ExternalLink className="w-4 h-4 mr-2" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Service Statistics</CardTitle>
                <CardTitle className="text-xl">Service Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </CardContent>
            </Card>

            <Button 
            </Button>
            <Button 
            </Button>

export default ServiceDetailPage;
