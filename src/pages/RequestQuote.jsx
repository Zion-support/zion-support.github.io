import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const RequestQuote = () => {
  return (
    <div className="min-h-screen bg-zion-blue">
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Whether you need AI services, IT solutions, top talent, or specialized equipment, 
              we'll provide you with a detailed, competitive quote tailored to your specific requirements.
            </p>
          </motion.div>
          
          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-zion-blue-dark border-zion-purple/20 text-white">
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-zion-cyan mx-auto mb-4"/>
                <CardTitle className="text-lg">Fast Response</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-zion-slate-light">
                  Get your quote within 24 hours
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-blue-dark border-zion-purple/20 text-white">
              <CardHeader className="text-center">
                <CheckCircle className="h-12 w-12 text-zion-cyan mx-auto mb-4"/>
                <CardTitle className="text-lg">Customized</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-zion-slate-light">
                  Tailored to your specific needs
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-blue-dark border-zion-purple/20 text-white">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-zion-cyan mx-auto mb-4"/>
                <CardTitle className="text-lg">Expert Team</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-zion-slate-light">
                  Reviewed by industry experts
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-blue-dark border-zion-purple/20 text-white">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-zion-cyan mx-auto mb-4"/>
                <CardTitle className="text-lg">No Obligation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-zion-slate-light">
                  Free quotes with no commitment
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          {/* Services Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What We Can Quote For You
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-cyan">AI & Machine Learning</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Custom AI solutions, model development, and ML infrastructure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Custom AI model development</li>
                    <li>• Machine learning consulting</li>
                    <li>• AI infrastructure setup</li>
                    <li>• Data science services</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-cyan">IT Services</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Onsite IT support, infrastructure, and digital transformation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Onsite IT support</li>
                    <li>• Infrastructure management</li>
                    <li>• Digital transformation</li>
                    <li>• Cloud migration</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-cyan">Talent & Equipment</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Professional talent hiring and specialized equipment solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Technical talent placement</li>
                    <li>• Equipment procurement</li>
                    <li>• Project-based staffing</li>
                    <li>• Hardware solutions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Contact us today for a free, no-obligation quote
            </p>
            <button className="bg-zion-cyan text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-zion-cyan-dark transition-colors">
              Contact Us Now
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default RequestQuote;
