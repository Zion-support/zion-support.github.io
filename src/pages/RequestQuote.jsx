import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Footer } from '@/components/Footer';

const QuoteRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    projectDescription: '',
    timeline: '',
    budget: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-zion-slate-light mb-2">
            Full Name *
          </label>
          <Input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="bg-zion-blue-light border-zion-purple/20 text-white placeholder-zion-slate-light"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-zion-slate-light mb-2">
            Email Address *
          </label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="bg-zion-blue-light border-zion-purple/20 text-white placeholder-zion-slate-light"
            placeholder="Enter your email address"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-zion-slate-light mb-2">
            Company Name
          </label>
          <Input
            type="text"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className="bg-zion-blue-light border-zion-purple/20 text-white placeholder-zion-slate-light"
            placeholder="Enter your company name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-zion-slate-light mb-2">
            Phone Number
          </label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="bg-zion-blue-light border-zion-purple/20 text-white placeholder-zion-slate-light"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zion-slate-light mb-2">
          Service Type *
        </label>
        <Select value={formData.serviceType} onValueChange={(value) => handleChange('serviceType', value)}>
          <SelectTrigger className="bg-zion-blue-light border-zion-purple/20 text-white">
            <SelectValue placeholder="Select a service type" />
          </SelectTrigger>
          <SelectContent className="bg-zion-blue-dark border-zion-purple/20">
            <SelectItem value="ai-solutions">AI Solutions</SelectItem>
            <SelectItem value="cloud-services">Cloud Services</SelectItem>
            <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
            <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
            <SelectItem value="custom-development">Custom Development</SelectItem>
            <SelectItem value="consulting">Consulting</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-zion-slate-light mb-2">
          Project Description *
        </label>
        <Textarea
          required
          value={formData.projectDescription}
          onChange={(e) => handleChange('projectDescription', e.target.value)}
          className="bg-zion-blue-light border-zion-purple/20 text-white placeholder-zion-slate-light min-h-[120px]"
          placeholder="Describe your project requirements, goals, and any specific needs..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-zion-slate-light mb-2">
            Timeline
          </label>
          <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
            <SelectTrigger className="bg-zion-blue-light border-zion-purple/20 text-white">
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent className="bg-zion-blue-dark border-zion-purple/20">
              <SelectItem value="asap">ASAP</SelectItem>
              <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
              <SelectItem value="1-month">1 month</SelectItem>
              <SelectItem value="2-3-months">2-3 months</SelectItem>
              <SelectItem value="3-6-months">3-6 months</SelectItem>
              <SelectItem value="6-months-plus">6+ months</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-zion-slate-light mb-2">
            Budget Range
          </label>
          <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
            <SelectTrigger className="bg-zion-blue-light border-zion-purple/20 text-white">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent className="bg-zion-blue-dark border-zion-purple/20">
              <SelectItem value="under-10k">Under $10,000</SelectItem>
              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
              <SelectItem value="100k-plus">$100,000+</SelectItem>
              <SelectItem value="to-be-discussed">To be discussed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="text-center">
        <Button type="submit" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark px-8 py-3 text-lg">
          Request Quote
        </Button>
      </div>
    </form>
  );
};

const RequestQuote = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan">
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Request a Custom Quote
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get a personalized estimate for your IT services, AI solutions, or tech projects. 
              Our team will analyze your requirements and provide you with a detailed quote.
            </p>
          </div>

          {/* Services Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our Service Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-cyan">AI & Machine Learning</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Custom AI solutions and machine learning models
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Predictive analytics</li>
                    <li>• Natural language processing</li>
                    <li>• Computer vision</li>
                    <li>• AI automation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-cyan">Cloud & DevOps</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Cloud infrastructure and deployment automation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Cloud migration</li>
                    <li>• CI/CD pipelines</li>
                    <li>• Infrastructure as code</li>
                    <li>• Monitoring & logging</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-cyan">Cybersecurity</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Security assessments and protection solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Security audits</li>
                    <li>• Penetration testing</li>
                    <li>• Incident response</li>
                    <li>• Compliance consulting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-cyan">Digital Transformation</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Strategic technology consulting and digital transformation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Technology strategy</li>
                    <li>• Digital transformation</li>
                    <li>• Process optimization</li>
                    <li>• Innovation consulting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-cyan">Custom Solutions</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Tailored solutions for unique business requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Custom software development</li>
                    <li>• Integration services</li>
                    <li>• API development</li>
                    <li>• Legacy system modernization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quote Form Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Request Your Quote
              </h2>
              <p className="text-zion-slate-light text-lg">
                Fill out the form below and we'll get back to you with a detailed quote within 24 hours.
              </p>
            </div>
            
            <QuoteRequestForm />
          </div>

          {/* Additional Information */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Need Immediate Assistance?
            </h3>
            <p className="text-zion-slate-light mb-6">
              For urgent requests or to speak with our team directly, contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:commercial@ziontechgroup.com" className="inline-flex items-center px-6 py-3 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors">
                Email Us
              </a>
              <a href="/contact" className="inline-flex items-center px-6 py-3 border border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/10 transition-colors">
                Contact Page
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RequestQuote;
