
import React from 'react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { QuoteRequestForm } from '@/components/QuoteRequestForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Users, Zap, Brain, Code, Shield, Cloud, Palette, Layers } from 'lucide-react';

export default function RequestQuote() {
  const serviceCategories = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions, model development, and ML infrastructure',
      services: [
        'Custom AI model development',
        'Machine learning consulting',
        'AI infrastructure setup',
        'Data science services'
      ]
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack development for web, mobile, and desktop applications',
      services: [
        'Web application development',
        'Mobile app development',
        'API development',
        'System architecture'
      ]
    },
    {
      icon: Shield,
      title: 'IT Services',
      description: 'Onsite IT support, infrastructure, and digital transformation',
      services: [
        'Onsite IT support',
        'Infrastructure setup',
        'Cloud migration',
        'Cybersecurity services'
      ]
    },
    {
      icon: Users,
      title: 'Talent & Hiring',
      description: 'AI-powered talent matching and recruitment services',
      services: [
        'AI talent matching',
        'Recruitment services',
        'Team building',
        'Skill assessment'
      ]
    },
    {
      icon: Cloud,
      title: 'Equipment & Hardware',
      description: 'High-tech equipment, servers, and specialized hardware',
      services: [
        'AI/ML hardware',
        'Server infrastructure',
        'Networking equipment',
        'Green IT solutions'
      ]
    },
    {
      icon: Palette,
      title: 'Consulting',
      description: 'Strategic technology consulting and digital transformation',
      services: [
        'Technology strategy',
        'Digital transformation',
        'Process optimization',
        'Innovation consulting'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Request a Quote | Zion Tech Group"
        description="Get customized quotes for AI services, IT solutions, talent hiring, and equipment. Fast, reliable, and tailored to your needs."
        keywords="request quote, AI services, IT solutions, talent hiring, equipment quotes"
        canonical="https://ziontechgroup.com/request-quote"
      />
      <Header />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Whether you need AI services, IT solutions, top talent, or specialized equipment, 
              we'll provide you with a detailed, competitive quote tailored to your specific requirements.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-zion-blue-dark border-zion-purple/20 text-white">
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
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
                <CheckCircle className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
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
                <Users className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
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
                <Clock className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
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
              {serviceCategories.map((category, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <category.icon className="h-8 w-8 text-zion-cyan" />
                      <CardTitle className="text-xl text-zion-cyan">{category.title}</CardTitle>
                    </div>
                    <CardDescription className="text-zion-slate-light">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-zion-slate-light space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>• {service}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quote Form Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-white text-3xl">Project Details</CardTitle>
                <CardDescription className="text-zion-slate-light text-lg">
                  Fill out the form below and we'll get back to you with personalized quotes from our network of experts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-zion-blue-light text-white placeholder-zion-slate-light"
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-zion-blue-light text-white placeholder-zion-slate-light"
                      />
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/10 border-zion-blue-light text-white placeholder-zion-slate-light"
                      />
                      <Input
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white/10 border-zion-blue-light text-white placeholder-zion-slate-light"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-4">Services Needed</h3>
                    <div className="space-y-6">
                      {serviceCategories.map((category, index) => (
                        <div key={index}>
                          <h4 className="text-zion-cyan font-medium mb-3">{category.name}</h4>
                          <div className="flex flex-wrap gap-2">
                            {category.services.map((service, serviceIndex) => (
                              <Badge
                                key={serviceIndex}
                                variant={selectedServices.includes(service) ? "default" : "outline"}
                                className={`cursor-pointer transition-all ${
                                  selectedServices.includes(service)
                                    ? "bg-zion-cyan text-white border-zion-cyan"
                                    : "bg-transparent text-zion-slate-light border-zion-blue-light hover:border-zion-cyan hover:text-zion-cyan"
                                }`}
                                onClick={() => handleServiceToggle(service)}
                              >
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-4">Project Details</h3>
                    <div className="space-y-4">
                      <textarea
                        name="projectDescription"
                        placeholder="Describe your project in detail... *"
                        value={formData.projectDescription}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full p-3 bg-white/10 border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Timeline & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-4">Timeline</h3>
                      <div className="space-y-2">
                        {timelineOptions.map((option) => (
                          <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="timeline"
                              value={option.value}
                              checked={formData.timeline === option.value}
                              onChange={handleInputChange}
                              className="text-zion-cyan focus:ring-zion-cyan"
                            />
                            <span className="text-zion-slate-light">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold text-lg mb-4">Budget Range</h3>
                      <div className="space-y-2">
                        {budgetOptions.map((option) => (
                          <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="budget"
                              value={option.value}
                              checked={formData.budget === option.value}
                              onChange={handleInputChange}
                              className="text-zion-cyan focus:ring-zion-cyan"
                            />
                            <span className="text-zion-slate-light">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-4">Additional Requirements</h3>
                    <textarea
                      name="additionalRequirements"
                      placeholder="Any specific requirements, preferences, or questions..."
                      value={formData.additionalRequirements}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full p-3 bg-white/10 border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button type="submit" size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4">
                      <Send className="h-5 w-5 mr-2" />
                      Submit Quote Request
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Need to discuss your project?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Our team is here to help you find the perfect solution for your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
                <Phone className="h-8 w-8 text-zion-cyan" />
                <h3 className="text-white font-semibold">Call Us</h3>
                <p className="text-zion-slate-light">+1 (555) 123-4567</p>
                <p className="text-zion-slate-light text-sm">Mon-Fri 9AM-6PM PST</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
                <Mail className="h-8 w-8 text-zion-cyan" />
                <h3 className="text-white font-semibold">Email Us</h3>
                <p className="text-zion-slate-light">quotes@ziontechgroup.com</p>
                <p className="text-zion-slate-light text-sm">Response within 24 hours</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
                <MapPin className="h-8 w-8 text-zion-cyan" />
                <h3 className="text-white font-semibold">Visit Us</h3>
                <p className="text-zion-slate-light">San Francisco, CA</p>
                <p className="text-zion-slate-light text-sm">Schedule a meeting</p>
              </div>
            </div>
          </div>
        </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-aa85
      </main>
      
      <Footer />
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-24ce
  );
}