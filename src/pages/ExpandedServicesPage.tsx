import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Star, 
  Shield, 
  Cloud, 
  Database, 
  Smartphone, 
import { EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES, EXPANDED_SERVICE_SUBCATEGORIES } from "@/data/expandedServices";

export default function ExpandedServicesPage() {

      
      
      




      'AI Development': <Zap className="w-5 h-5" />,
      'Cloud Services': <Cloud className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Data Analytics': <Database className="w-5 h-5" />,
      'Digital Transformation': <TrendingUp className="w-5 h-5" />,
      'Web Development': <Code className="w-5 h-5" />,
      'Mobile Development': <Smartphone className="w-5 h-5" />,
      'IoT Solutions': <Globe className="w-5 h-5" />,
      'Blockchain': <Code className="w-5 h-5" />,
      'Integration': <Code className="w-5 h-5" />
    return iconMap[category] || <Code className="w-5 h-5" />;

            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
              </Button>
            </Link>

              <Award className="w-6 h-6 mr-3 text-zion-cyan" />
                <Phone className="w-4 h-4 mr-2 text-zion-cyan" />
                <Mail className="w-4 h-4 mr-2 text-zion-cyan" />
                <MapPin className="w-4 h-4 mr-2 text-zion-cyan" />
import { EXPANDED_SERVICES, SERVICE_CATEGORIES, FEATURED_SERVICES, NEW_SERVICES } from '../data/expandedServices';
import { Button } from '../components/ui/button';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

      case 'AI & Automation': return <Zap className="w-5 h-5" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'Cloud & DevOps': return <Cloud className="w-5 h-5" />;
      case 'Data & Analytics': return <Database className="w-5 h-5" />;
      case 'Digital Transformation': return <Target className="w-5 h-5" />;
      case 'IoT & Edge Computing': return <Smartphone className="w-5 h-5" />;
      case 'Blockchain & Web3': return <LinkIcon className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;


    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
            <Badge variant="secondary" className="text-xs">
            </Badge>
            <Badge className="bg-green-500 text-white text-xs">New</Badge>
            <Badge className="bg-green-500 text-white text-xs">New</Badge>
        <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
        <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 leading-relaxed">
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 pb-3">
            <Badge className={getPricingModelColor(service.pricingModel)}>
            </Badge>
          
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

                  <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
      </CardContent>

      <CardFooter className="pt-0">
        <Button asChild className="w-full" size="sm">
          <Link to={`/service/${service.id}`}>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>


    
    
    


              <Button 
              </Button>
              <Button 
              </Button>
            </div>
          </div>
        </div>
      </div>

              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
              <Input
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem key={category.value} value={category.value}>
                  </SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Subcategories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                <SelectItem value="all">All Subcategories</SelectItem>
                  <SelectItem key={subcategory} value={subcategory}>
                  </SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $10K</SelectItem>
                <SelectItem value="low">Under $10K</SelectItem>
                <SelectItem value="medium">$10K - $25K</SelectItem>
                <SelectItem value="medium">$10K - $25K</SelectItem>
                <SelectItem value="high">Over $25K</SelectItem>
                <SelectItem value="high">Over $25K</SelectItem>
              </SelectContent>
            </Select>


              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader className="pb-4">
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                      </Badge>
                      <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
                      </Badge>
                  <CardTitle className="text-white text-xl leading-tight">
                  </CardTitle>
                    <Badge variant="outline" className="text-zion-slate-light border-zion-slate-light/30 w-fit">
                    </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
                  </CardDescription>
                  
                      <Badge key={index} variant="outline" className="text-xs text-zion-cyan border-zion-cyan/30">
                      </Badge>
                  
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <Zap className="w-4 h-4 text-zion-cyan" />
                      <Clock className="w-4 h-4" />
                  
                      <Link to="/contact">
                        <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                          <Mail className="w-4 h-4 mr-1" />
                        </Button>
                      </Link>
                      <Link to="/request-quote">
                        <Button size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                          <Phone className="w-4 h-4 mr-1" />
                        </Button>
                      </Link>
                </CardContent>
              </Card>

              <Button 
              </Button>

          
                <Users className="w-8 h-8 text-white" />
            
                <Globe className="w-8 h-8 text-white" />
            
                <CheckCircle className="w-8 h-8 text-white" />
            
                <TrendingUp className="w-8 h-8 text-white" />

            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
              </Button>
            </Link>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
              <Filter className="w-5 h-5 text-gray-400" />

            <Badge variant="secondary" className="text-sm">
            </Badge>
              <ServiceCard key={service.id} service={service} />

              <TrendingUp className="w-5 h-5 text-green-500" />
              <Badge variant="secondary" className="text-sm">
              </Badge>
              <ServiceCard key={service.id} service={service} />

            <Badge variant="secondary" className="text-sm">
            </Badge>
          
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <ServiceCard key={service.id} service={service} />

            <Button 
            </Button>
            <Button 
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

export default ExpandedServicesPage;
