import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Star, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  TrendingUp,
  Mail,
  Phone,
  Globe,
  Award,
  Users,
  Zap,
  Filter,
  ArrowRight,
  Shield,
  Brain,
  Cloud,
  Database,
  Code,
  Lock
} from 'lucide-react';

export default function ServicesPricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Transparent
            <span className="text-zion-cyan"> Pricing</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Choose the perfect plan for your business needs with our flexible pricing options 
            and transparent cost structure.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Starter Plan */}
          <Card className="border-zion-slate-light/20 bg-zion-slate/30 backdrop-blur-sm hover:border-zion-cyan/50 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Starter</CardTitle>
              <CardDescription className="text-zion-slate-light">
                Perfect for small businesses and startups
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-zion-cyan">$99</span>
                <span className="text-zion-slate-light">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mr-3" />
                  Basic AI Services
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mr-3" />
                  Cloud Infrastructure
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mr-3" />
                  Security Monitoring
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mr-3" />
                  Email Support
                </li>
              </ul>
              <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Professional Plan */}
          <Card className="border-zion-cyan/50 bg-zion-slate/50 backdrop-blur-sm scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-zion-cyan text-white px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                Most Popular
              </Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Professional</CardTitle>
              <CardDescription className="text-zion-slate-light">
                Ideal for growing businesses
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-zion-cyan">$299</span>
                <span className="text-zion-slate-light">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mr-3" />
                  Advanced AI Services
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mr-3" />
                  Multi-Cloud Management
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mr-3" />
                  Advanced Security
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mr-3" />
                  Custom Integrations
                </li>
              </ul>
              <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                Choose Professional
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="border-zion-slate-light/20 bg-zion-slate/30 backdrop-blur-sm hover:border-zion-cyan/50 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Enterprise</CardTitle>
              <CardDescription className="text-zion-slate-light">
                For large organizations with complex needs
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-zion-cyan">Custom</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mr-3" />
                  Full AI Suite
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mr-3" />
                  Dedicated Infrastructure
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mr-3" />
                  Custom Security
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mr-3" />
                  24/7 Support
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mr-3" />
                  Dedicated Team
                </li>
              </ul>
              <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zion-slate/30 backdrop-blur-sm rounded-lg p-6 border border-zion-slate-light/20">
              <Brain className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Consulting</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Strategic AI implementation and optimization
              </p>
              <p className="text-zion-cyan font-semibold">From $500/day</p>
            </div>

            <div className="bg-zion-slate/30 backdrop-blur-sm rounded-lg p-6 border border-zion-slate-light/20">
              <Shield className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Security Audit</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Comprehensive security assessment
              </p>
              <p className="text-zion-cyan font-semibold">From $2,500</p>
            </div>

            <div className="bg-zion-slate/30 backdrop-blur-sm rounded-lg p-6 border border-zion-slate-light/20">
              <Cloud className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Cloud Migration</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Seamless cloud infrastructure transition
              </p>
              <p className="text-zion-cyan font-semibold">From $5,000</p>
            </div>

            <div className="bg-zion-slate/30 backdrop-blur-sm rounded-lg p-6 border border-zion-slate-light/20">
              <Code className="h-12 w-12 text-zion-cyan mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Custom Development</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Tailored software solutions
              </p>
              <p className="text-zion-cyan font-semibold">From $100/hour</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-zion-slate/30 backdrop-blur-sm rounded-xl p-8 border border-zion-slate-light/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Our team of experts can create a tailored solution that perfectly fits your business requirements and budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white">
                Get Custom Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}