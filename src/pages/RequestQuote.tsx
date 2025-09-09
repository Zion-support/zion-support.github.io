
import React from 'react';
    <div className="min-h-screen bg-background">
      <SEO 
        title="Request Quote - Zion Tech Group" 
        description="Get a custom quote for your AI and tech project needs from Zion Tech Group."
        keywords="quote, pricing, AI services, tech services, project quote, Zion Tech Group"
        canonical="https://ziontechgroup.com/request-quote"
      />
      
      <AppHeader />
      
      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request a Custom Quote
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tell us about your project and we'll connect you with the perfect talent and services for your needs
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
            </p>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
              <Users className="h-8 w-8 text-zion-cyan" />
              <h3 className="text-white font-semibold text-lg">Expert Network</h3>
              <p className="text-zion-slate-light text-sm text-center">Access to verified professionals across all tech domains</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
              <Clock className="h-8 w-8 text-zion-cyan" />
              <h3 className="text-white font-semibold text-lg">Quick Response</h3>
              <p className="text-zion-slate-light text-sm text-center">Get quotes within 24 hours from qualified providers</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
              <CheckCircle className="h-8 w-8 text-zion-cyan" />
              <h3 className="text-white font-semibold text-lg">Quality Assured</h3>
              <p className="text-zion-slate-light text-sm text-center">All providers are vetted and rated by our community</p>
            </div>
          </div>
        </div>
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Zap } from "lucide-react";

      {/* Quote Form */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RequestQuote() {
  return (
    <>
      <SEO 
        title="Request a Quote - Zion Tech Group"
        description="Get a customized quote for your IT services, AI solutions, or tech projects. Our team will provide you with a detailed estimate tailored to your needs."
        keywords="request quote, IT services quote, AI solutions quote, tech project estimate, custom pricing"
        canonical="https://ziontechgroup.com/request-quote"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
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
          
          <div className="max-w-4xl mx-auto">
            <QuoteRequestForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-24ce
  );
}