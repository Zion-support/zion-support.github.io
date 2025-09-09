import React from 'react';
import { Link } from 'react-router-dom';
import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Server, Cloud, Zap, Recycle, Globe, TrendingUp, Shield, Lightbulb, Users } from "lucide-react";

export default function GreenIT() {
  const greenITSolutions = [
    {
      title: "Energy-Efficient Infrastructure",
      description: "Sustainable IT infrastructure solutions that reduce energy consumption and carbon footprint.",
      benefits: ["Lower Energy Costs", "Reduced Carbon Emissions", "Improved Efficiency", "Sustainable Operations"]
    },
    {
      title: "Cloud Optimization",
      description: "Green cloud solutions that maximize resource utilization and minimize environmental impact.",
      benefits: ["Resource Optimization", "Carbon-Neutral Cloud", "Efficient Scaling", "Green Data Centers"]
    },
    {
      title: "Sustainable Software Development",
      description: "Eco-friendly software practices that optimize performance and reduce resource consumption.",
      benefits: ["Efficient Algorithms", "Reduced Server Load", "Sustainable Coding", "Performance Optimization"]
    },
    {
      title: "Green Data Management",
      description: "Sustainable data storage and management solutions that minimize environmental impact.",
      benefits: ["Efficient Storage", "Data Deduplication", "Green Backup Solutions", "Sustainable Archives"]
    }
  ];

                    {/* Hero Section */}
                    <div className="mb-16">
                        <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12 mb-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-6">
                                        Sustainable IT for a Better Future
                                    </h2>
                                    <p className="text-zion-slate-light text-lg mb-6">
                                        As AI and cloud computing demand grows exponentially, so does the environmental impact of data centers. Our Green IT solutions help organizations implement sustainable practices in their IT infrastructure while maintaining performance and reliability.
                                    </p>
                                    <p className="text-zion-slate-light text-lg mb-6">
                                        From energy-efficient hardware to renewable energy integration, we offer comprehensive solutions for reducing your carbon footprint.
                                    </p>
                                    <div className="mt-8">
                                        <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                                            Explore Green IT Solutions
                                        </Button>
                                    </div>
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1473876637954-4b493d59fd97?auto=format&fit=crop&w=800&h=600" 
                                        alt="Green IT sustainability" 
                                        className="object-cover w-full h-full" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solutions Grid */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-8">Our Green IT Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {greenITSolutions.map((solution, index) => (
                                <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-colors">
                                    <div className="flex justify-center mb-4">
                                        <solution.icon className="h-12 w-12 text-zion-cyan" />
                                    </div>
                                    <h3 className="text-white font-medium text-xl text-center mb-3">
                                        {solution.title}
                                    </h3>
                                    <p className="text-zion-slate-light text-center">
                                        {solution.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

  return (
    <AppLayout>
      <SEO
        title="Green IT Solutions - Sustainable Technology | Zion Tech Group"
        description="Explore eco-friendly IT solutions and sustainable technology practices that reduce environmental impact while maintaining performance." 
        keywords="green IT, sustainable technology, eco-friendly computing, energy efficient hardware"
        canonical="https://ziontechgroup.com/green-it"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="text-center max-w-4xl mx-auto">
              <GradientHeading className="text-5xl md:text-6xl mb-6">
                Green IT Solutions
              </GradientHeading>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8">
                Sustainable technology solutions that protect our planet while powering your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Leaf className="w-5 h-5 mr-2" />
                  Get Green IT Assessment
                </Button>
                <Button size="lg" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                  <Server className="w-5 h-5 mr-2" />
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Green IT Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sustainable Technology Solutions
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our comprehensive green IT solutions help organizations reduce their environmental impact while improving efficiency and reducing costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {greenITSolutions.map((solution, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-8 h-8 text-green-400" />
                    </div>
                    <CardTitle className="text-white text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light mb-4">
                      {solution.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-zion-slate-light">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Green IT Services
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                From consulting to implementation, we provide end-to-end sustainable technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-zion-slate-light">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/40">
                        {service.price}
                      </Badge>
                      <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                See how organizations are transforming their IT operations with sustainable technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-white text-xl">{study.company}</CardTitle>
                      <Badge variant="outline" className="border-zion-blue-light text-zion-slate-light">
                        {study.industry}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                      <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Solution:</h4>
                      <p className="text-zion-slate-light text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-zion-slate-light">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900/20 to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Go Green?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the sustainable technology revolution and reduce your environmental impact while improving your bottom line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Leaf className="w-5 h-5 mr-2" />
                Start Your Green IT Journey
              </Button>
              <Button size="lg" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}