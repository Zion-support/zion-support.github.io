import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Zap, Mail, Phone, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const RequestQuote = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (<div className="min - h-screen bg - zion - blue">
      <EnhancedSEO
        title="Request a Quote | Zion Tech Group"
        description="Get customized quotes for AI services, IT solutions, talent hiring, and equipment. Fast, reliable, and tailored to your needs."
        keywords="request quote, AI services, IT solutions, talent hiring, equipment quotes"
        canonical="https://ziontechgroup.com / request - quote"
            />
      <Header       />

  const serviceTypes = [
    'AI & Machine Learning',
    'Web Development',
    'Mobile Development',
    'Cloud Services',
    'Cybersecurity',
    'Data Analytics',
    'DevOps & Infrastructure',
    'Digital Transformation',
    'Custom Software',
    'Consulting',
    'Other'
  ];

  const timelines = [
    'Immediate (1-2 weeks)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Flexible'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000+',
    'To be discussed'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Your Custom
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Quote
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you need AI services, IT solutions, top talent, or specialized equipment, 
              we'll provide you with a detailed, competitive quote tailored to your specific requirements.
            </p>
          </motion.div>
        </div>
      </section>

          {/* Benefits Section */}
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6 mb - 16">
            <Card className="bg - zion - blue - dark border - zion - purple / 20 text - white">
              <CardHeader className="text - center">
                <Zap className="h - 12 w - 12 text - zion - cyan mx - auto mb - 4"       />
                <CardTitle className="text - lg">Fast Response</CardTitle>
              </CardHeader>
              <CardContent className="text - center">
                <CardDescription className="text - zion - slate - light">
                  Get your quote within 24 hours
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg - zion - blue - dark border - zion - purple / 20 text - white">
              <CardHeader className="text - center">
                <CheckCircle className="h - 12 w - 12 text - zion - cyan mx - auto mb - 4"       />
                <CardTitle className="text - lg">Customized</CardTitle>
              </CardHeader>
              <CardContent className="text - center">
                <CardDescription className="text - zion - slate - light">
                  Tailored to your specific needs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg - zion - blue - dark border - zion - purple / 20 text - white">
              <CardHeader className="text - center">
                <Users className="h - 12 w - 12 text - zion - cyan mx - auto mb - 4"       />
                <CardTitle className="text - lg">Expert Team</CardTitle>
              </CardHeader>
              <CardContent className="text - center">
                <CardDescription className="text - zion - slate - light">
                  Reviewed by industry experts
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg - zion - blue - dark border - zion - purple / 20 text - white">
              <CardHeader className="text - center">
                <Clock className="h - 12 w - 12 text - zion - cyan mx - auto mb - 4"       />
                <CardTitle className="text - lg">No Obligation</CardTitle>
              </CardHeader>
              <CardContent className="text - center">
                <CardDescription className="text - zion - slate - light">
                  Free quotes with no commitment
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Services Overview */}
          <div className="mb - 16">
            <h2 className="text - 3xl font - bold text - white mb - 8 text - center">
              Our Services
            </h2>
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">
              <Card className="bg - zion - blue - dark border - zion - purple / 20 text - white hover:border - zion - purple / 40 transition - colors">
                <CardHeader>
                  <CardTitle className="text - xl text - zion - cyan">
                    AI & Machine Learning
                  </CardTitle>
                  <CardDescription className="text - zion - slate - light">
                    Custom AI solutions and machine learning models
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300">
                    Get your quote within 24 hours
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:border-white/40 transition-all duration-300">
                <CardHeader className="text-center">
                  <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4"/>
                  <CardTitle className="text-lg">Customized</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300">
                    Tailored to your specific needs
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:border-white/40 transition-all duration-300">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-purple-400 mx-auto mb-4"/>
                  <CardTitle className="text-lg">Expert Team</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300">
                    Reviewed by industry experts
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:border-white/40 transition-all duration-300">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-orange-400 mx-auto mb-4"/>
                  <CardTitle className="text-lg">No Obligation</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300">
                    Free quotes with no commitment
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quote Form Section */}
          <div className="max - w-4xl mx - auto">
            <div className="text - center mb - 8">
              <h2 className="text - 3xl font - bold text - white mb - 4">
                Request Your Quote
              </h2>
              <p className="text - zion - slate - light text - lg">
                Fill out the form below and we'll get back to you with a
                detailed quote within 24 hours.
              </p>
            </div>

            <QuoteRequestForm       />
          </div>

          {/* Additional Information */}
          <div className="mt - 16 text - center">
            <h3 className="text - 2xl font - bold text - white mb - 6">
              Need Immediate Assistance?
            </h3>
            <p className="text - zion - slate - light mb - 6">
              For urgent requests or to speak with our team directly, contact
              us:
            </p>
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">
              <a
                href="mailto:commercial@ziontechgroup.com"
                className="inline - flex items - center px - 6 py - 3 bg - zion - cyan text - zion - blue - dark font - semibold rounded - lg hover:bg - zion - cyan / 90 transition - colors"
              >
                Email Us
              </a>
              <a
                href="/contact"
                className="inline - flex items - center px - 6 py - 3 border border - zion - purple text - zion - purple font - semibold rounded - lg hover:bg - zion - purple / 10 transition - colors"
              >
                Contact Page
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer       />
    </div>) ;
}
