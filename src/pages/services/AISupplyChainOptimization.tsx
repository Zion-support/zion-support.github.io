import React from 'react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Star,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Truck,
  Package,
  Globe,
  Network,
  Lock,
  Target,
  DollarSign,
  BarChart3,
  Settings,
  Rocket,
  MapPin,
  Clock,
  Factory,
  Warehouse,
  Route
} from "lucide-react";
import { Link } from 'react-router-dom';

export default function AISupplyChainOptimization() {
  return (
    <>
      <SEO 
        title="AI Supply Chain Optimization - Revolutionary Logistics Solutions | Zion Tech Group"
        description="Transform your supply chain with our AI-powered optimization platform. Reduce costs by 40%, improve delivery times by 60%, and achieve 99.9% accuracy in demand forecasting."
        keywords="AI supply chain, supply chain optimization, logistics AI, demand forecasting, inventory management, supply chain automation"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%253E%253Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%253E%253Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <Badge className="bg-zion-purple/20 border border-zion-purple/30 text-zion-purple mb-6">
              <Truck className="h-4 w-4 mr-2" />
              Supply Chain AI
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Supply Chain
              <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent"> Optimization</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your supply chain operations with our AI-powered optimization platform. Achieve <span className="text-zion-cyan font-semibold">40% cost reduction</span> and <span className="text-zion-cyan font-semibold">60% faster delivery</span> with intelligent automation.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">40%</div>
                <div className="text-gray-400 text-sm">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">60%</div>
                <div className="text-gray-400 text-sm">Faster Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Monitoring</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/contact">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-4 text-lg">
                  Optimize Your Supply Chain
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white px-8 py-4 text-lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Supply Chain Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Supply Chain Optimization platform transforms how businesses manage their logistics and operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zion-purple/20 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-zion-purple" />
                  </div>
                  <CardTitle className="text-white">Demand Forecasting</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Predict demand with 99.9% accuracy using advanced machine learning algorithms and real-time market data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Seasonal analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Market trend prediction
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Real-time adjustments
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg">
                    <Route className="h-6 w-6 text-zion-cyan" />
                  </div>
                  <CardTitle className="text-white">Route Optimization</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Optimize delivery routes in real-time to minimize costs, reduce fuel consumption, and improve delivery times.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Dynamic routing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Traffic optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Multi-modal transport
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Warehouse className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Inventory Management</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Maintain optimal inventory levels with AI-powered stock management and automated reordering systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Just-in-time inventory
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Automated reordering
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Stock optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <Network className="h-6 w-6 text-yellow-400" />
                  </div>
                  <CardTitle className="text-white">Supplier Management</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Optimize supplier relationships with AI-powered vendor selection, performance monitoring, and risk assessment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Vendor scoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Risk assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Performance tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white">Risk Management</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Identify and mitigate supply chain risks with predictive analytics and real-time monitoring systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Disruption prediction
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Alternative sourcing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Contingency planning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Globe className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Global Optimization</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Optimize supply chains across multiple countries with compliance management and currency optimization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Multi-country operations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Compliance tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Currency optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI Supply Chain Optimization is transforming operations across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zion-purple/20 rounded-lg">
                  <Package className="h-6 w-6 text-zion-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">E-commerce & Retail</h3>
                  <p className="text-gray-300">Optimize fulfillment centers, manage seasonal demand spikes, and ensure same-day delivery capabilities.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zion-cyan/20 rounded-lg">
                  <Factory className="h-6 w-6 text-zion-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Manufacturing</h3>
                  <p className="text-gray-300">Streamline raw material procurement, optimize production scheduling, and manage just-in-time delivery.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Truck className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Logistics & Transportation</h3>
                  <p className="text-gray-300">Optimize fleet management, reduce empty miles, and improve delivery efficiency across all transport modes.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-500/20 rounded-lg">
                  <MapPin className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Healthcare & Pharmaceuticals</h3>
                  <p className="text-gray-300">Ensure critical medical supplies reach patients on time with temperature-controlled logistics and compliance tracking.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-2xl p-8 border border-zion-purple/30">
              <h3 className="text-2xl font-bold text-white mb-6">Supply Chain Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost Reduction</span>
                  <span className="text-zion-cyan font-semibold">40% Lower</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Delivery Speed</span>
                  <span className="text-green-400 font-semibold">60% Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Forecast Accuracy</span>
                  <span className="text-yellow-400 font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Inventory Turnover</span>
                  <span className="text-purple-400 font-semibold">3x Higher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-cyan">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Transform your supply chain operations with our AI-powered optimization platform and achieve unprecedented efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100 px-8 py-4 text-lg">
                Start Supply Chain Optimization
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple px-8 py-4 text-lg">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}